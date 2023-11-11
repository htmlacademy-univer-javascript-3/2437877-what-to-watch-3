import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Provider} from 'react-redux';
import {MainPage} from '@pages/main-page.tsx';
import {AuthStatus, promoFilm} from '@mocks/storeOfShit.ts';
import {MoviePageOverview} from '@pages/movie-page/movie-page-overview.tsx';
import {MyList} from '@pages/my-list.tsx';
import {SignIn} from '@pages/sign-in.tsx';
import {NotFound} from '@pages/not-found.tsx';
import {Player} from '@pages/player.tsx';
import {Private} from '@components/common/private.tsx';
import {myFilms} from '@mocks/films.ts';
import {MoviePageDetails} from '@pages/movie-page/movie-page-details.tsx';
import {MoviePageReviews} from '@pages/movie-page/movie-page-reviews.tsx';
import {AddReview} from '@pages/add-review.tsx';
import {store} from '@store/index.ts';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
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
            <Route path='/' element={<MainPage promoFilm={promoFilm}/>}/>
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/mylist'
              element={<Private authStatus={AuthStatus.Authorize} page={<MyList myFilms={myFilms}/>}/>}
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
