import {Link} from 'react-router-dom';
import {Logo} from '@components/logo/logo.tsx';

export const LogoLink = () => (
  <div className="logo">
    <Link to="/" className="logo__link"><Logo/></Link>
  </div>);
