import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Account } from '../../models/account/organisation';
import { Permissions } from '../../utils/permissions';

interface OrgContextType {
  currentOrg: Account | null;
  setCurrentOrg: (org: Account) => void;
  organizations: Account[];
  hasPermission: (permission: Permissions) => boolean;
  selectedOrganisation: string;
}

const OrgContext = createContext<OrgContextType | undefined>(undefined);

export const OrgProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentOrg, setCurrentOrg] = useState<Account | null>({
    id: '1',
    name: 'Demo Organization',
    type: 'ORGANIZATION',
    role: 'ADMIN',
    permissions: ['READ', 'WRITE', 'ADMIN'],
    status: 'ACTIVE',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  });

  const organizations: Account[] = [
    currentOrg,
    {
      id: '2',
      name: 'Test Organization',
      type: 'ORGANIZATION',
      role: 'USER',
      permissions: ['READ', 'WRITE'],
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  const hasPermission = (permission: Permissions): boolean => {
    return currentOrg?.permissions.includes(permission) || false;
  };

  return (
    <OrgContext.Provider value={{
      currentOrg,
      setCurrentOrg,
      organizations,
      hasPermission,
      selectedOrganisation: currentOrg?.id || ''
    }}>
      {children}
    </OrgContext.Provider>
  );
};

export const useOrgContext = () => {
  const context = useContext(OrgContext);
  if (context === undefined) {
    throw new Error('useOrgContext must be used within an OrgProvider');
  }
  return context;
}; 