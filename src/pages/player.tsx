import {Action, VideoPlayer} from '../components/video-player/video-player.tsx';

export const Player = () => (
  <VideoPlayer action={Action.Play} />
);
