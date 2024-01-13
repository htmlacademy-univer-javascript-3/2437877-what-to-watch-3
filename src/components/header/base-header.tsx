import React from 'react';
import classNames from 'classnames';
import {UserBlock} from '@components/header/user-block/user-block.tsx';
import {LogoLink} from '@components/logo/logo-link.tsx';

interface BaseHeaderProps {
  isUserPage?: boolean;
}

export const BaseHeader = ({children, isUserPage = false}: React.PropsWithChildren<BaseHeaderProps>) => (
  <header className={classNames('page-header', {'user-page__head': isUserPage})}>
    <div className="logo">
      <LogoLink/>
    </div>
    {children}
    <UserBlock/>
  </header>
);
