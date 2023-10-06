import { useContext, useState } from 'react';

import { useTranslation } from 'next-i18next';

import HomeContext from '@/pages/api/home/home.context';

import { SettingDialog } from '@/components/Settings/SettingDialog';

import { Import } from '../../Settings/Import';
import { Key } from '../../Settings/Key';
import { SidebarButton } from '../../Sidebar/SidebarButton';
import ChatbarContext from '../Chatbar.context';
import { PluginKeys } from './PluginKeys';

import Image from 'next/image';
import CJIcon from '@/assets/cj-icon.svg';
import LogoutIcon from '@/assets/logout-icon.svg';
import EnlargeIcon from '@/assets/enlarge-icon.svg';
import SettingsIcon from '@/assets/settings-icon.svg';

export const ChatbarSettings = () => {
  const { t } = useTranslation('sidebar');
  const [isSettingDialogOpen, setIsSettingDialog] = useState<boolean>(false);

  const {
    state: {
      apiKey,
      lightMode,
      serverSideApiKeyIsSet,
      serverSidePluginKeysSet,
      conversations,
    },
    dispatch: homeDispatch,
  } = useContext(HomeContext);

  const { handleApiKeyChange } = useContext(ChatbarContext);

  return (
    <div className="flex flex-col items-center space-y-1 border-t border-white/20 pt-1 text-sm">
      <SidebarButton
        text={t('CJ Website')}
        icon={<Image priority src={CJIcon} alt="" />}
        onClick={() => window.location.replace('https://www.cj.net/')}
      />

      <SidebarButton
        text={t('Updates & FAQ')}
        icon={<Image priority src={EnlargeIcon} alt="" />}
        onClick={() => window.location.replace('https://www.cj.net/')}
      />

      <SidebarButton
        text={t('Settings')}
        icon={<Image priority src={SettingsIcon} alt="" />}
        onClick={() => setIsSettingDialog(true)}
      />

      <SidebarButton
        text={t('Log out')}
        icon={<Image priority src={LogoutIcon} alt="" />}
        onClick={() => console.log('logout')}
      />

      {!serverSideApiKeyIsSet ? (
        <Key apiKey={apiKey} onApiKeyChange={handleApiKeyChange} />
      ) : null}

      {!serverSidePluginKeysSet ? <PluginKeys /> : null}

      <SettingDialog
        open={isSettingDialogOpen}
        onClose={() => {
          setIsSettingDialog(false);
        }}
      />
    </div>
  );
};
