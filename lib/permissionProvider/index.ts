import { Permission, PermissionBehavior } from "@/hooks/use-permission";

export const permissionProvider: PermissionBehavior = {
    getPermissionsFn: function (): Promise<Permission[]> {
        throw new Error("Function not implemented.");
    },
    checkPermissionFn: function (): Promise<boolean> {
        throw new Error("Function not implemented.");
    }
}