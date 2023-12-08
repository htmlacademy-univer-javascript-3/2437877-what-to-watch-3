import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Spinner} from '@components/spinner.tsx';
import {MainPage} from '@pages/main-page.tsx';
import {SignIn} from '@pages/sign-in.tsx';
import {PrivateRoute} from '@components/common/privateRoute.tsx';
import {MyList} from '@pages/my-list.tsx';
import {MoviePageOverview} from '@pages/movie-page/movie-page-overview.tsx';
import {MoviePageDetails} from '@pages/movie-page/movie-page-details.tsx';
import {MoviePageReviews} from '@pages/movie-page/movie-page-reviews.tsx';
import {AddReview} from '@pages/add-review.tsx';
import {Player} from '@pages/player.tsx';
import {NotFound} from '@pages/not-found.tsx';
import {useAppSelector} from '@store/hooks.ts';

export const App = ()=>{
  const isFilmsLoaded = useAppSelector((x)=>x.MAIN.isFilmsLoaded);
  if (!isFilmsLoaded) {
    return(<Spinner/>);
  }

  return(
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='/' element={<MainPage/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/mylist' element={<PrivateRoute page={<MyList/>}/>}/>
          <Route path='/films/:id/'>
            <Route path='overview' element={<MoviePageOverview/>}/>
            <Route path='details' element={<MoviePageDetails/>}/>
            <Route path='reviews' element={<MoviePageReviews/>}/>
            <Route path='add-review' element={<PrivateRoute page={<AddReview/>}/>}/>
          </Route>
          <Route path='/player/:id' element={<Player/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
