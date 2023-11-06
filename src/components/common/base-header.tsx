import {UserBlock} from '@components/common/user-block.tsx';
import {LogoLink} from '@components/common/logo-link.tsx';
import React from 'react';
import classNames from 'classnames';

interface BaseHeaderProps {
  isUserPage?: boolean;
}

export const BaseHeader = ({children, isUserPage = false}: React.PropsWithChildren<BaseHeaderProps>) => (
  <header className={classNames('page-header', {'user-page__head': isUserPage})}>
    <div className="logo">
      <LogoLink/>
    </div>
    {children}
    <UserBlock avatarUrl="img/avatar.jpg"/>
  </header>
);
