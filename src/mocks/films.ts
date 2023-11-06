
export const films: Film[] = [
  {id: 0, name: 'Macbeth', genre: 'Drama', posterUrl: 'img/macbeth.jpg', backgroundUrl: 'img/macbeth.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 1, name: 'Aviator', genre: 'Drama', posterUrl: 'img/aviator.jpg', backgroundUrl: 'img/aviator.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 2, name: 'Revenant', genre: 'Drama', posterUrl: 'img/revenant.jpg', backgroundUrl: 'img/revenant.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 3, name: 'Johnny English', genre: 'Drama', posterUrl: 'img/johnny-english.jpg', backgroundUrl: 'img/johnny-english.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 4, name: 'Pulp Fiction', genre: 'NeDrama', posterUrl: 'img/pulp-fiction.jpg', backgroundUrl: 'img/pulp-fiction.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 5, name: 'Snatch', genre: 'NeDrama', posterUrl: 'img/snatch.jpg', backgroundUrl: 'img/snatch.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 6, name: 'Orlando', genre: 'NeDrama', posterUrl: 'img/orlando.jpg', backgroundUrl: 'img/orlando.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'},
  {id: 7, name: 'Mindhunter', genre: 'NeDrama', posterUrl: 'img/mindhunter.jpg', backgroundUrl: 'img/mindhunter.jpg', videoSource: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'}
];

export const myFilms = films.slice(0, 3);

export interface Film {
  id: number;
  name: string;
  genre: string;
  posterUrl: string;
  backgroundUrl: string;
  videoSource: string;
}
