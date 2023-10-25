import {Logo} from '@components/common/logo.tsx';
import {Link} from 'react-router-dom';

export const LogoLink = () => (
  <div className="logo">
    <Link to="/" className="logo__link"><Logo/></Link>
  </div>);
