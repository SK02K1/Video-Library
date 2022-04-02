import { v4 as uuid } from 'uuid';

export const profileControls = [
  {
    id: uuid(),
    controlName: 'Watch later',
    linkTo: '/watchlater',
    iconName: 'watch_later',
  },
  {
    id: uuid(),
    controlName: 'History',
    linkTo: '/history',
    iconName: 'history',
  },
  {
    id: uuid(),
    controlName: 'Liked',
    linkTo: '/liked',
    iconName: 'favorite',
  },
  {
    id: uuid(),
    controlName: 'Playlists',
    linkTo: '/playlists',
    iconName: 'queue',
  },
];
