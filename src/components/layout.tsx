import {Outlet} from 'react-router-dom';
import {promoFilm} from '../storeOfShit.ts';
import {Header} from './header.tsx';
import {Footer} from './footer.tsx';

export function Layout() {
  return (
    <>
      <Header filmName={promoFilm.filmName} backgroundUrl={promoFilm.backgroundUrl}/>
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
