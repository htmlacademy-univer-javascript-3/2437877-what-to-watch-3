import {Action, VideoPlayer} from '../components/video-player.tsx';

export const Player = () => (
  <VideoPlayer action={Action.Play} />
);
