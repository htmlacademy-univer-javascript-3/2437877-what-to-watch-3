import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainPage} from '@pages/main-page.tsx';
import {activeGenre, AuthStatus, promoFilm} from '@mocks/storeOfShit.ts';
import {MoviePageDescription} from '@pages/movie-page/movie-page-description.tsx';
import {MyList} from '@pages/my-list.tsx';
import {SignIn} from '@pages/sign-in.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from '@pages/not-found.tsx';
import {Player} from '@pages/player.tsx';
import {Private} from '@components/common/private.tsx';
import {films} from '@mocks/films.ts';
import {MoviePageDetails} from '@pages/movie-page/movie-page-details.tsx';
import {MoviePageInList} from '@pages/movie-page/movie-page-in-list.tsx';
import {AddReview} from '@pages/add-review.tsx';

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
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path='/' element={<MainPage activeGenre={activeGenre} films={films} promoFilm={promoFilm}/>}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/mylist'
            element={<Private authStatus={AuthStatus.Authorize} page={<MyList myFilms={films.slice(0, 3)}/>}/>}
          />
          <Route path='/films/:id/'>
            <Route path='description' element={<MoviePageDescription/>}/>
            <Route path='details' element={<MoviePageDetails/>}/>
            <Route path='reviews' element={<MoviePageInList/>}/>
            <Route path='add-review' element={<AddReview/>}/>
          </Route>
          <Route path='/player/:id' element={<Player/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
