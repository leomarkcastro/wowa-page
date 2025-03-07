import { AuthBehavior, User } from "@/hooks/use-auth";
import { apolloClient } from "../apollo/ApolloClient";
import { Login, Me, Register, RequestPasswordReset, TokenPasswordReset, UpdateMe, UpdatePassword } from "@/graphql/declarations/auth";
import { AUTHSTORE } from "../store/auth";

export const authBehavior: AuthBehavior = {
    loginFn: async function (credentials, rememberMe = false): Promise<User> {
        const data = await apolloClient.mutate({
            mutation: Login,
            variables: {
                email: credentials.email,
                password: credentials.password,
                refreshToken: rememberMe,
                loginType: credentials.loginType
            }
        })

        if (data.data?.authclient_login.__typename === "ClientItemAuthenticationWithPasswordSuccess") {
            const sessionToken = data.data?.authclient_login.sessionToken;
            const refreshToken = data.data?.authclient_login.refreshToken;
            
            AUTHSTORE.set(sessionToken);
            
            // Store refresh token and email if remember me is enabled
            if (rememberMe) {
                if (refreshToken) {
                    AUTHSTORE.setRefreshToken(refreshToken);
                }
                // Store the email for future refresh token logins
                AUTHSTORE.setEmail(credentials.email);
            }
            
            await apolloClient.clearStore();

            const userData = await authBehavior.getMeFn();

            return userData;
        } else {
            throw new Error(data.data?.authclient_login.message);
        }
    },
    
    loginWithRefreshTokenFn: async function (): Promise<User | null> {
        const refreshToken = AUTHSTORE.getRefreshToken();
        const email = AUTHSTORE.getEmail();
        
        if (!refreshToken || !email) {
            return null;
        }
        
        try {
            const data = await apolloClient.mutate({
                mutation: Login,
                variables: {
                    email: email, // Use the stored email
                    password: refreshToken, // Use refresh token as password
                    refreshToken: true,
                    loginType: "refresh"
                }
            });
            
            if (data.data?.authclient_login.__typename === "ClientItemAuthenticationWithPasswordSuccess") {
                const sessionToken = data.data?.authclient_login.sessionToken;
                const newRefreshToken = data.data?.authclient_login.refreshToken;
                
                AUTHSTORE.set(sessionToken);
                
                // Update refresh token if a new one is provided
                if (newRefreshToken) {
                    AUTHSTORE.setRefreshToken(newRefreshToken);
                }
                
                await apolloClient.clearStore();
                
                const userData = await authBehavior.getMeFn();
                return userData;
            }
        } catch (error) {
            console.error("Auto-login with refresh token failed:", error);
            // Clear invalid refresh token and email
            AUTHSTORE.clearRefreshToken();
            AUTHSTORE.clearEmail();
        }
        
        return null;
    },
    
    forceRefreshTokenLoginFn: async function (): Promise<User | null> {
        // Clear the current session token to force using refresh token
        AUTHSTORE.clear();
        await apolloClient.clearStore();
        
        // Attempt to login with refresh token
        return await authBehavior.loginWithRefreshTokenFn();
    },
    
    logoutFn: async function (): Promise<void> {
        await AUTHSTORE.clearAll(); // Clear session token, refresh token, and email
        await apolloClient.clearStore();
    },
    
    getMeFn: async function (): Promise<User> {
        const data = await apolloClient.query({
            query: Me
        })

        if (!data.data?.authenticatedItem?.id) {
            return null;
        }

        return {
            id: data.data.authenticatedItem.id,
            name: data.data.authenticatedItem.name,
            middleName: data.data.authenticatedItem.middleName,
            lastName: data.data.authenticatedItem.lastName,
            displayName: data.data.authenticatedItem.displayName,
            email: data.data.authenticatedItem.email,
            role: data.data.authenticatedItem.role,
            createdAt: data.data.authenticatedItem.createdAt,
            lastLogin: data.data.authenticatedItem.lastLogin,
        }
    },
    registerFn: async function (data): Promise<User> {
        const response = await apolloClient.mutate({
            mutation: Register,
            variables: {
                email: data.email,
                password: data.password,
                firstName: data.firstName,
                lastName: data.lastName
            }
        });

        if (response.data?.authclient_register) {
            // Auto-login after registration
            return await authBehavior.loginFn({
                email: data.email,
                password: data.password
            });
        }
        throw new Error("Registration failed");
    },
    requestPasswordResetFn: async function (email: string): Promise<void> {
        const response = await apolloClient.mutate({
            mutation: RequestPasswordReset,
            variables: { email }
        });

        if (!response.data?.authclient_requestPasswordReset) {
            throw new Error("Password reset request failed");
        }
    },
    resetPasswordFn: async function (token: string, newPassword: string): Promise<void> {
        const response = await apolloClient.mutate({
            mutation: TokenPasswordReset,
            variables: {
                token,
                password: newPassword
            }
        });

        if (!response.data?.authclient_resetPassword) {
            throw new Error("Password reset failed");
        }
    },
    changePasswordFn: async function (oldPassword: string, newPassword: string): Promise<void> {
        const response = await apolloClient.mutate({
            mutation: UpdatePassword,
            variables: {
                oldPassword,
                newPassword
            }
        });

        if (!response.data?.authclient_changePassword) {
            throw new Error("Password change failed");
        }
    },
    updateMeFn: async function (data) {
        const response = await apolloClient.mutate({
            mutation: UpdateMe,
            variables: {
                data: {
                    name: data.name,
                    middleName: data.middleName,
                    lastName: data.lastName,
                },
                where: {
                    id: data.id
                }
            }
        });

        if (!response.data?.updateUser?.id) {
            throw new Error("Update failed");
        }

        return;
    }
}