import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Layout, Menu, Select } from 'antd';
import { 
  PushpinOutlined,
  UpOutlined,
  DownOutlined,
  UserSwitchOutlined,
  RetweetOutlined,
  SettingOutlined,
  ShopOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import styled from 'styled-components';
import colors from '../../theme/colors';
import logo from '../../assets/logo2.svg';
import IconLeading1 from '../../assets/icons/icon-leading-1.svg';
import IconLeading2 from '../../assets/icons/icon-leading-2.svg';
import IconLeading6 from '../../assets/icons/icon-leading-6.svg';
import { LogOut } from '../Icons/Outline';
import { useTranslation } from 'react-i18next';
import { CustomLink } from '../Links/CustomLink';
import { useGetAccounts } from '../../api/auth';
import { Account } from '../../models/account/organisation';
import { useAuthContext } from '../../context/Auth';
import { useOrgContext } from '../../context/Auth/OrganisationContext';
import { Permissions } from '../../utils/permissions';
import { Paths } from '../../router';

const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

interface LogoContainerProps {
  $isExpanded: boolean;
}

const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  background: ${colors.primary.white};
  border-bottom: 1px solid ${colors.neutrals[200]};
  margin-top: 2px;
  margin-right: 2px;
`;

const LogoContainer = styled.div<LogoContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: ${props => props.$isExpanded ? 'auto' : '88px'};
  
  img {
    height: 32px;
    width: 32px;
    transition: transform 0.2s;
    transform: ${props => props.$isExpanded ? 'rotate(0deg)' : 'rotate(90deg)'};
  }
`;

const LogoText = styled.div<{ $isExpanded: boolean }>`
  opacity: ${props => props.$isExpanded ? 1 : 0};
  transition: opacity 0.2s;
  white-space: nowrap;
  
  .title {
    font-size: 12px;
    line-height: 1.2;
  }
  
  .subtitle {
    font-size: 14px;
    font-weight: bold;
    line-height: 1.2;
  }
`;

const PinButton = styled.div<{ $isPinned: boolean }>`
  cursor: pointer;
  color: ${props => props.$isPinned ? colors.primary.red : colors.neutrals[500]};
  
  &:hover {
    color: ${colors.primary.red};
  }
`;

const MenuIcon = styled.img`
  width: 20px;
  height: 20px;
  min-width: 20px;
  min-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AccountSelectContainer = styled.div<{ $isExpanded: boolean }>`
  position: absolute;
  top: 174px; // Approximate position of brand select (you may need to adjust this)
  left: 0;
  right: 0;
  padding: 8px 16px;
  opacity: ${props => props.$isExpanded ? 1 : 0};
  transition: opacity 0.2s;
  background: ${colors.primary.white};
  z-index: 1;
  
  .ant-select {
    width: 100%;
  }

  .ant-select-selector {
    padding: 0 !important;
    border: none !important;
    box-shadow: none !important;
  }
`;

const AccountOption = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 0;
  
  img {
    width: 24px;
    height: 24px;
    border-radius: 4px;
  }

  .account-name {
    flex: 1;
    font-size: 14px;
    color: ${colors.neutrals[900]};
  }

  .account-type {
    font-size: 12px;
    color: ${colors.neutrals[500]};
  }
`;

// TODO: move this to a shared location and update src\pages\Account\AccountPage.tsx
interface DefaultAccount {
  name: string;
  description: string;
  ext?: {
    linkToLogoImg?: string;
    type: 'ADVERTISER' | 'PUBLISHER';
  };
}

const defaultOrgData: Account | DefaultAccount = {
  name: '',
  description: '',
  ext: {
    type: 'ADVERTISER',
  },
};

const BrandLabel = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.2;
  
  .brand-name {
    font-size: 14px;
    color: ${colors.neutrals[900]};
  }
  
  .brand-type {
    font-size: 12px;
    color: ${colors.neutrals[500]};
  }
`;

const DoubleArrowIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  line-height: 0;
  height: 10px;

  .anticon {
    font-size: 2px;
    color: ${colors.neutrals[500]};
    height: 5px;
    display: flex;
    align-items: center;
  }

  .anticon:first-child {
    margin-bottom: 3px;
    height: 5px;
  }

  .anticon:last-child {
    margin-top: 3px;
    height: 5px;
  }
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-right: 8px;
`;

const addIfPermission = (isApproved: boolean, item: NonNullable<MenuProps['items']>[number]) => 
  (isApproved ? item : null);

const StyledMenu = styled(Menu)`
  &.ant-menu {
    &.ant-menu-inline {
      .ant-menu-submenu {
        .ant-menu-submenu-title {
          padding-left: 33px !important;
        }
      }
    }

    &.ant-menu-inline-collapsed {
      .ant-menu-item, 
      .ant-menu-submenu-title {
        padding: 0 !important;
        margin: 6px;

        .anticon,
        img {
          width: 20px !important;
          height: 20px !important;
          min-width: 20px !important;
          min-height: 20px !important;
          padding: 0 !important;
          margin-left: 8px !important;
        }
      }
    }

    .ant-menu-item {
      display: flex;
      align-items: center;
      height: 32px; /* 32px + 8px padding top and bottom */
      line-height: 32px;
      margin: 6px;
      
      &.ant-menu-item-selected {
        background-color: ${colors.neutrals[100]};
        position: relative;
        
        &::after {
          content: '';
          position: absolute;
          top: 8px;
          width: 32px;
          height: 32px;
          background-color: ${colors.neutrals[100]};
          z-index: -1;
        }
        
        .anticon,
        img {
          color: ${colors.neutrals[500]};
        }
      }
    }

    .ant-menu-submenu-title {
      display: flex;
      align-items: center;
      height: 32px;
      line-height: 32px;
      margin: 0;
    }

    .anticon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .ant-menu-item .anticon-setting {
      margin-left: 18px;
    }

    .ant-menu-submenu .anticon-setting {
      margin-left: 0 !important;
    }

    .ant-menu-submenu-sub1 {
      .ant-menu-item {
        padding-left: 33px !important;
      }
    }
  }
`;

const SidebarNav = () => {
  const [isPinned, setIsPinned] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState<string>();
  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const { id } = useParams();
  const { data: accounts } = useGetAccounts(id);
  const { accountId } = useParams();
  const [setAccData] = useState<Account | DefaultAccount>();
  const { t } = useTranslation();
  const { hasPermission, selectedOrganisation } = useOrgContext();
  const { signOutUser, user, isSuperAdmin } = useAuthContext();
  const navigate = useNavigate();

  const shouldExpand = isPinned || isHovered;

  const accountOptions = accounts?.map(account => ({
    value: account.id,
    label: (
      <AccountOption>
        {account.ext?.linkToLogoImg && <img src={account.ext.linkToLogoImg} alt={account.name} />}
        <span className="account-name">{account.name}</span>
        <span className="account-type">{account.ext?.type}</span>
      </AccountOption>
    ),
    logo: account.ext?.linkToLogoImg
  }));

  const selectedAccountData = accounts?.find(acc => acc.id === selectedAccount);

  const accountLogo = selectedAccountData?.ext?.linkToLogoImg || logo;

  const logoutAction = async () => {
    await signOutUser();
    navigate(Paths.Main);
  };

  const items: Required<MenuProps>['items'] = [
    { 
      key: '1', 
      icon: <MenuIcon src={IconLeading2} alt="Dashboard" />, 
      label: t('sideNav.dashboard'), 
      disabled: true 
    },
    addIfPermission(hasPermission(Permissions.Asset), {
      key: '2',
      icon: <MenuIcon src={IconLeading1} alt="My Library" />,
      label: t('sideNav.myLibrary')
    }),
    { key: 'divider', type: 'divider' },
    {
      key: '3',
      icon: selectedAccountData?.ext?.linkToLogoImg ? (
        <MenuIcon src={selectedAccountData.ext.linkToLogoImg} alt={selectedAccountData.name} />
      ) : (
        <MenuIcon src={accountLogo} alt={t('account.orgLogo')} />
      ),
      label: (
        <BrandContainer>
          <BrandLabel>
            <span className="brand-name">{selectedAccountData?.name || "Default"}</span>
            <span className="brand-type">{t('common.account')}</span>
          </BrandLabel>
          <DoubleArrowIndicator>
            <UpOutlined />
            <DownOutlined />
          </DoubleArrowIndicator>
        </BrandContainer>
      ),
      onClick: () => setIsAccountDropdownOpen(!isAccountDropdownOpen)
    },
    addIfPermission(hasPermission(Permissions.Asset), {
      key: '4',
      icon: <MenuIcon src={IconLeading1} alt="Library" />,
      label: t('header.assets')
    }),
    addIfPermission(hasPermission(Permissions.Campaign), {
      key: '5',
      icon: <MenuIcon src={IconLeading6} alt="Campaigns" />,
      label: t('header.campaigns')
    }),
    {
      key: 'sub1',
      label: t('sideNav.settings'),
      icon: <SettingOutlined />,
      children: [
        {
          key: 'profile',
          label: <CustomLink to={Paths.PROFILE}>{t('header.profile')}</CustomLink>,
          icon: <SettingOutlined style={{ fontSize: 16 }} />,
        },
        hasPermission(Permissions.Organisation) && selectedAccount
          ? {
              key: 'manageAcc',
              label: (
                <CustomLink
                  to={Paths.EditAccount}
                  keys={{ organisationId: selectedOrganisation, accountId: selectedAccount }}
                >
                  {t('header.manageAcc')}
                </CustomLink>
              ),
              icon: <UserSwitchOutlined style={{ fontSize: 16 }} />,
            }
          : null,
        hasPermission(Permissions.Organisation)
          ? {
              key: 'manageOrg',
              label: (
                <CustomLink
                  to={Paths.Organisation}
                  keys={{ id: selectedOrganisation }}
                >
                  {t('header.manageOrg')}
                </CustomLink>
              ),
              icon: <ShopOutlined style={{ fontSize: 16 }} />,
            }
          : null,
        !isSuperAdmin && user?.accounts
          ? {
              key: 'switchOrg',
              label: <div>{t('header.switchAccOrg')}</div>,
              icon: <RetweetOutlined style={{ fontSize: 16 }} />,
            }
          : null,
        {
          key: 'logout',
          label: <div onClick={logoutAction}>{t('header.logout')}</div>,
          icon: <LogOut size={14} />,
        },
      ].filter(Boolean)
    }
  ].filter(Boolean);

  useEffect(() => {
    if (!accountId) {
      // setAccData({ ...defaultOrgData });
    }
  }, [accountId]);

  return (
    <Sider
      width={224}
      collapsible
      collapsed={!shouldExpand}
      collapsedWidth={48}
      trigger={null}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        background: colors.primary.white,
        height: '100vh',
        borderRight: `1px solid ${colors.neutrals[200]}`,
      }}
    >
      <SidebarHeader>
        <LogoContainer $isExpanded={shouldExpand}>
          <img src={logo} alt="Logo" />
          <LogoText $isExpanded={shouldExpand}>
            <div className="title">8Pod</div>
            <div className="subtitle">Console</div>
          </LogoText>
        </LogoContainer>
        {shouldExpand && (
          <PinButton 
            onClick={() => setIsPinned(!isPinned)}
            $isPinned={isPinned}
          >
            <PushpinOutlined />
          </PinButton>
        )}
      </SidebarHeader>

      <StyledMenu
        mode="inline"
        theme="light"
        inlineCollapsed={!shouldExpand}
        style={{ 
          borderRight: 0,
          background: colors.primary.white,
        }}
        items={items}
      />
      
      {isAccountDropdownOpen && shouldExpand && (
        <AccountSelectContainer $isExpanded={shouldExpand}>
          <Select
            value={selectedAccount}
            onChange={(value) => {
              setSelectedAccount(value);
              setIsAccountDropdownOpen(false);
            }}
            options={accountOptions}
            placeholder={t('profile.selectDefaultAccount') as string}
            onClick={e => e.stopPropagation()}
            open
          />
        </AccountSelectContainer>
      )}
    </Sider>
  );
};

export default SidebarNav; 