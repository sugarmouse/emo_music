import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) => {
  console.log('hah');

  return (
    isPlaying && activeSong?.title === song.title
      ? (
        <FaPauseCircle
          onClick={handlePause}
          size={35}
          className="text-gray-300"
        />
      )
      : (
        <FaPlayCircle
          onClick={handlePlay}
          size={35}
          className="text-gray-300"
        />
      )
  );
};

export default PlayPause;
