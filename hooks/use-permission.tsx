import React, { createContext, useContext, useState, useCallback } from 'react';

export interface Permission {
  id: string;
  name: string;
  // Add other permission properties as needed
}

export interface PermissionBehavior {
  getPermissionsFn: () => Promise<Permission[]>;
  checkPermissionFn: (permissionName: string) => Promise<boolean>;
}

interface PermissionContextType {
  permissions: Permission[];
  checkPermission: (permissionName: string) => Promise<boolean>;
  refreshPermissions: () => Promise<void>;
  hasPermission: (permissionName: string) => boolean;
}

const PermissionContext = createContext<PermissionContextType | undefined>(
  undefined,
);

export function PermissionProvider({
  children,
  behavior,
}: {
  children: React.ReactNode;
  behavior: PermissionBehavior;
}) {
  const [permissions, setPermissions] = useState<Permission[]>([]);

  const refreshPermissions = useCallback(async () => {
    try {
      const perms = await behavior.getPermissionsFn();
      setPermissions(perms);
    } catch (error) {
      console.error('Failed to fetch permissions:', error);
      throw error;
    }
  }, [behavior]);

  const checkPermission = useCallback(
    async (permissionName: string) => {
      try {
        return await behavior.checkPermissionFn(permissionName);
      } catch (error) {
        console.error('Permission check failed:', error);
        return false;
      }
    },
    [behavior],
  );

  const hasPermission = useCallback(
    (permissionName: string) => {
      return permissions.some((p) => p.name === permissionName);
    },
    [permissions],
  );

  const value = {
    permissions,
    checkPermission,
    refreshPermissions,
    hasPermission,
  };

  return (
    <PermissionContext.Provider value={value}>
      {children}
    </PermissionContext.Provider>
  );
}

export function usePermission() {
  const context = useContext(PermissionContext);
  if (context === undefined) {
    throw new Error('usePermission must be used within a PermissionProvider');
  }
  return context;
}
