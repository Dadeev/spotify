import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useGetTopChartsQuery } from '../redux/features/shazamCore';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const TopChartCard = ({ song, i }) => (
  <div className="w-full flex flex-row items-center hover:bg-[#4c426e] py-2 p-4 rounded-lg cursor-pointer mb-2">
    {song.title}
  </div>
);

const TopPlay = () => {
  const dispatch = useDispatch();
  const { data } = useGetTopChartsQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const divRef = useRef(null);

  const topPlays = data?.slice(0, 5);

  const handlePause = () => {
    dispatch(playPause(false));
  };
  const handlePlay = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  return (
    <div ref={divRef} className="xl:ml-6 ml-9 xl:mb-0 mb-6 flex-1 xl:max-w-[500px] max-w-full flex flex-col">
      <div className="w-full flex flex-col">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Charts</h2>
          <Link to="/top-charts">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
        <div className="mt-4 flex flex-col gap-1">
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
            />
          ))}
        </div>
      </div>
      <div className="w-full flex flex-col mt-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="text-white font-bold text-2xl">Top Artists</h2>
          <Link to="/top-artists">
            <p className="text-gray-300 text-base cursor-pointer">See more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopPlay;
