export const genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];
export const activeGenre = 'All genres';
export const films = [
  {name: 'Fantastic Beasts: The Crimes of Grindelwald', pageUrl: 'film-page.html', imgUrl: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg'},
  {name: 'Bohemian Rhapsody', pageUrl: 'film-page.html', imgUrl: 'img/bohemian-rhapsody.jpg'},
  {name: 'Macbeth', pageUrl: 'film-page.html', imgUrl: 'img/macbeth.jpg'},
  {name: 'Aviator', pageUrl: 'film-page.html', imgUrl: 'img/aviator.jpg'},
  {name: 'We need to talk about Kevin', pageUrl: 'film-page.html', imgUrl: 'img/we-need-to-talk-about-kevin.jpg'},
  {name: 'What We Do in the Shadows', pageUrl: 'film-page.html', imgUrl: 'img/what-we-do-in-the-shadows.jpg'},
  {name: 'Revenant', pageUrl: 'film-page.html', imgUrl: 'img/revenant.jpg'},
  {name: 'Johnny English', pageUrl: 'film-page.html', imgUrl: 'img/johnny-english.jpg'},
  {name: 'Shutter Island', pageUrl: 'film-page.html', imgUrl: 'img/shutter-island.jpg'},
  {name: 'Pulp Fiction', pageUrl: 'film-page.html', imgUrl: 'img/pulp-fiction.jpg'},
  {name: 'No Country for Old Men', pageUrl: 'film-page.html', imgUrl: 'img/no-country-for-old-men.jpg'},
  {name: 'Snatch', pageUrl: 'film-page.html', imgUrl: 'img/snatch.jpg'},
  {name: 'Moonrise Kingdom', pageUrl: 'film-page.html', imgUrl: 'img/moonrise-kingdom.jpg'},
  {name: 'Seven Years in Tibet', pageUrl: 'film-page.html', imgUrl: 'img/seven-years-in-tibet.jpg'},
  {name: 'Midnight Special', pageUrl: 'film-page.html', imgUrl: 'img/midnight-special.jpg'},
  {name: 'War of the Worlds', pageUrl: 'film-page.html', imgUrl: 'img/war-of-the-worlds.jpg'},
  {name: 'Dardjeeling Limited', pageUrl: 'film-page.html', imgUrl: 'img/dardjeeling-limited.jpg'},
  {name: 'Orlando', pageUrl: 'film-page.html', imgUrl: 'img/orlando.jpg'},
  {name: 'Mindhunter', pageUrl: 'film-page.html', imgUrl: 'img/mindhunter.jpg'},
  {name: 'Midnight Special', pageUrl: 'film-page.html', imgUrl: 'img/midnight-special.jpg'}
];

export const promoFilm : PromoFilm = {
  filmName: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
  backgroundUrl: 'img/bg-the-grand-budapest-hotel.jpg',
  posterUrl: 'img/the-grand-budapest-hotel-poster.jpg'
};

export interface PromoFilm {
  filmName: string;
  genre: string;
  year: number;
  backgroundUrl: string;
  posterUrl: string;
}

export enum AuthStatus {
  Authorize,
  UnAuthorize,
}
