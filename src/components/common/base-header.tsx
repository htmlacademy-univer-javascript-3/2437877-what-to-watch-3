import {UserBlock} from '@components/common/user-block.tsx';
import {LogoLink} from '@components/common/logo-link.tsx';
import {ReactNode} from 'react';
import classNames from 'classnames';

interface BaseHeaderProps {
  child?: ReactNode;
  isUserPage?: boolean;
}

export const BaseHeader = ({child = null, isUserPage = false}: BaseHeaderProps) => (
  <header className={classNames('page-header', {'user-page__head': isUserPage})}>
    <div className="logo">
      <LogoLink/>
    </div>
    {child}
    <UserBlock avatarUrl="img/avatar.jpg"/>
  </header>
);
