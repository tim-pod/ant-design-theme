export type AccountType = 'ORGANIZATION' | 'PERSONAL';
export type AccountRole = 'ADMIN' | 'USER';
export type AccountStatus = 'ACTIVE' | 'INACTIVE' | 'SUSPENDED';

export interface Account {
  id: string;
  name: string;
  type: AccountType;
  role: AccountRole;
  permissions: string[];
  status: AccountStatus;
  createdAt: string;
  updatedAt: string;
  ext?: {
    linkToLogoImg?: string;
    type: 'ADVERTISER' | 'PUBLISHER';
  };
} 