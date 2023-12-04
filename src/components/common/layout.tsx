import {Outlet} from 'react-router-dom';
import {promoFilm} from 'models/film-info.ts';
import {Footer} from '@components/common/footer.tsx';
import {PromoHeader} from '@components/promo/promo-header.tsx';

export function Layout() {
  return (
    <>
      <PromoHeader promoFilm={promoFilm}/>
      <div className="page-content">
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}
