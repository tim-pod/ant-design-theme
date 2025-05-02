import { Account } from '../models/account/organisation';

export const useGetAccounts = (id?: string) => {
  // Mock data
  const accounts: Account[] = [
    {
      id: '1',
      name: 'Demo Account',
      type: 'ORGANIZATION',
      role: 'ADMIN',
      permissions: ['READ', 'WRITE', 'ADMIN'],
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    },
    {
      id: '2',
      name: 'Test Account',
      type: 'PERSONAL',
      role: 'USER',
      permissions: ['READ', 'WRITE'],
      status: 'ACTIVE',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
  ];

  return {
    data: accounts,
    isLoading: false,
    error: null,
    refetch: () => Promise.resolve(accounts)
  };
}; 