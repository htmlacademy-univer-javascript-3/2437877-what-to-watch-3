import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {useAppSelector} from '@store/hooks.ts';
import {Spinner} from '@components/spinner.tsx';
import {store} from '@store/store.ts';
import {MainPage} from '@pages/main-page.tsx';
import {AuthStatus} from '@models/film-info.ts';
import {SignIn} from '@pages/sign-in.tsx';
import {Private} from '@components/common/private.tsx';
import {MyList} from '@pages/my-list.tsx';
import {MoviePageOverview} from '@pages/movie-page/movie-page-overview.tsx';
import {MoviePageDetails} from '@pages/movie-page/movie-page-details.tsx';
import {MoviePageReviews} from '@pages/movie-page/movie-page-reviews.tsx';
import {AddReview} from '@pages/add-review.tsx';
import {Player} from '@pages/player.tsx';
import {NotFound} from '@pages/not-found.tsx';

export const App = ()=>{

  const isFilmsLoaded = useAppSelector((state) => (state.isFilmsLoaded));
  if (isFilmsLoaded) {
    return(
      <React.StrictMode>
        <Spinner/>
      </React.StrictMode>
    );
  }


  return(
    <React.StrictMode>
      <meta charSet="UTF-8"/>
      <title>WTW</title>
      <meta name="robots" content="noindex, nofollow"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="stylesheet" href="css/main.css"/>

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/">
              <Route path='/' element={<MainPage/>}/>
              <Route path='/login' element={<SignIn/>}/>
              <Route path='/mylist'
                element={<Private authStatus={AuthStatus.Authorize} page={<MyList/>}/>}
              />
              <Route path='/films/:id/'>
                <Route path='overview' element={<MoviePageOverview/>}/>
                <Route path='details' element={<MoviePageDetails/>}/>
                <Route path='reviews' element={<MoviePageReviews/>}/>
                <Route path='add-review' element={<AddReview/>}/>
              </Route>
              <Route path='/player/:id' element={<Player/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
};
