import { AuthBehavior, User } from "@/hooks/use-auth";
import { apolloClient } from "../apollo/ApolloClient";
import { Login, Me, Register, RequestPasswordReset, TokenPasswordReset, UpdateMe, UpdatePassword } from "@/graphql/declarations/auth";
import { AUTHSTORE } from "../store/auth";

export const authBehavior: AuthBehavior = {
    loginFn: async function (credentials): Promise<User> {
        const data = await apolloClient.mutate({
            mutation: Login,
            variables: {
                email: credentials.email,
                password: credentials.password
            }
        })

        if (data.data?.authclient_login.__typename === "ClientItemAuthenticationWithPasswordSuccess") {
            const token = data.data?.authclient_login.sessionToken;
            AUTHSTORE.set(token);
            await apolloClient.clearStore();

            const userData = await authBehavior.getMeFn();

            return userData;
        } else {
            throw new Error(data.data?.authclient_login.message);
        }

    },
    logoutFn: async function (): Promise<void> {
        await AUTHSTORE.clear();
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