import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './pages/App.tsx';
import {activeGenre, films, genres} from './storeOfShit.ts';
import {AddReview} from './pages/AddReview.tsx';
import {MoviePageDescription} from './pages/MoviePage/MoviePageDescription.tsx';
import {MoviePageDetails} from './pages/MoviePage/MoviePageDetails.tsx';
import {MoviePageInList} from './pages/MoviePage/MoviePageInList.tsx';
import {MyList} from './pages/MyList.tsx';
import {SignIn} from './pages/SignIn.tsx';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <meta charSet="UTF-8"/>
    <title>WTW</title>
    <meta name="robots" content="noindex, nofollow"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" href="css/main.min.css"/>
    <App activeGenre={activeGenre} films={films} genres={genres}/>
    <AddReview/>
    <MoviePageDescription/>
    <MoviePageDetails/>
    <MoviePageInList/>
    <MyList/>
    <SignIn/>

  </React.StrictMode>
);
