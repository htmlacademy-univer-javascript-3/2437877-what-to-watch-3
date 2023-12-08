import {Outlet} from 'react-router-dom';
import {Footer} from '@components/common/footer.tsx';
import {PromoHeader} from '@components/promo/promo-header.tsx';
import {useAppSelector} from '@store/hooks.ts';

export function Layout() {

  const promoFilm = useAppSelector((x)=>x.MAIN.promoFilm);

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
