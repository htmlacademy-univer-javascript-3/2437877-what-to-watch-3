import {Logo} from './Logo.tsx';

export function Footer() {
  return(
    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <Logo/>
        </a>
      </div>
      <div className="copyright">
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
