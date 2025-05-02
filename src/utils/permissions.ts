export enum Permissions {
  READ = 'READ',
  WRITE = 'WRITE',
  ADMIN = 'ADMIN',
  DELETE = 'DELETE',
  CREATE = 'CREATE',
  UPDATE = 'UPDATE',
  Asset = 'ASSET',
  Campaign = 'CAMPAIGN',
  Organisation = 'ORGANISATION'
}

export const checkPermission = (userPermissions: string[], requiredPermission: Permissions): boolean => {
  return userPermissions.includes(requiredPermission);
}; 