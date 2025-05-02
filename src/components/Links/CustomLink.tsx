import { CSSProperties, MouseEventHandler, ReactNode } from 'react';
import { useParams, generatePath, Link } from 'react-router-dom';

import { useOrgContext } from '../../context/Auth/OrganisationContext';

interface CustomLinkProps {
  to: string;
  keys?: { [key: string]: string };
  children: ReactNode;
  style?: CSSProperties;
  onClick?: (e: any) => void;
}
export const CustomLink = ({ to, children, keys, style, onClick }: CustomLinkProps) => {
  const { orgId, accId } = useParams();
  const { selectedAccount, selectedOrganisation } = useOrgContext();
  if (!orgId && !accId && !selectedAccount && !selectedOrganisation) return <></>;
  return (
    <Link
      onClick={onClick}
      style={style}
      to={generatePath(to, { orgId: orgId || selectedOrganisation, accId: accId || selectedAccount, ...keys })}
    >
      {children}
    </Link>
  );
};
