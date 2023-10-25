export const films: Film[] = [
  {id: 0, name: 'Macbeth', posterUrl: 'img/macbeth.jpg', backgroundUrl: 'img/macbeth.jpg'},
  {id: 1, name: 'Aviator', posterUrl: 'img/aviator.jpg', backgroundUrl: 'img/aviator.jpg'},
  {id: 2, name: 'Revenant', posterUrl: 'img/revenant.jpg', backgroundUrl: 'img/revenant.jpg'},
  {id: 3, name: 'Johnny English', posterUrl: 'img/johnny-english.jpg', backgroundUrl: 'img/johnny-english.jpg'},
  {id: 4, name: 'Pulp Fiction', posterUrl: 'img/pulp-fiction.jpg', backgroundUrl: 'img/pulp-fiction.jpg'},
  {id: 5, name: 'Snatch', posterUrl: 'img/snatch.jpg', backgroundUrl: 'img/snatch.jpg'},
  {id: 6, name: 'Orlando', posterUrl: 'img/orlando.jpg', backgroundUrl: 'img/orlando.jpg'},
  {id: 7, name: 'Mindhunter', posterUrl: 'img/mindhunter.jpg', backgroundUrl: 'img/mindhunter.jpg'}
];

export interface Film {
  id: number;
  name: string;
  posterUrl: string;
  backgroundUrl: string;
}
