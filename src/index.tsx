import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from '@pages/app.tsx';
import {activeGenre, AuthStatus, films, genres} from '@mocks/storeOfShit.ts';
import {AddReview} from '@pages/add-review.tsx';
import {MoviePageDescription} from '@pages/movie-page/movie-page-description.tsx';
import {MyList} from '@pages/my-list.tsx';
import {SignIn} from '@pages/sign-in.tsx';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {NotFound} from '@pages/not-found.tsx';
import {Player} from '@pages/player.tsx';
import {Private} from '@components/common/private.tsx';
import {Layout} from '@components/common/layout.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <meta charSet="UTF-8"/>
    <title>WTW</title>
    <meta name="robots" content="noindex, nofollow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="public/css/main.css"/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path={'/'} element={<App activeGenre={activeGenre} films={films} genres={genres}/>}/>
          <Route path={'/login'} element={<SignIn/>}/>
          <Route path={'/mylist'} element={<Private authStatus={AuthStatus.Authorize} page={<MyList/>}/>}/>
          <Route path={'/films/'}>
            <Route path={':id'} element={<MoviePageDescription/>}/>
            <Route path={':id/review'} element={<AddReview/>}/>
          </Route>
          <Route path={'/player/:id'} element={<Player/>}/>
          <Route path={'*'} element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
