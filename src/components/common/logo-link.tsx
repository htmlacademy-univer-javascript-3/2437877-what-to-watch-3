import {Logo} from '@components/common/logo.tsx';
import {Link} from 'react-router-dom';

export const LogoLink = () => (<Link to="main" className="logo__link"><Logo/></Link>);
