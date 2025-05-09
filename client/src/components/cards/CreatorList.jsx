import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCreators } from '../../features/fetchCreators/creatorSlice';
import CreatorCard from './CreatorCard'; // Import the CreatorCard component

const CreatorsList = () => {
  const { isError, isSuccess, isLoading, creators, message } = useSelector((state) => state.influencer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCreators());
  }, [dispatch]);
  console.log(creators);
  

  if (isLoading) {
    return <div>Loading creators...</div>;
  }

  if (isError) {
    return <div>Error: {message}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {creators && creators.map((creator) => (
        <CreatorCard
          key={creator.id}
          id={creator.id}
          name={creator.name}
          username={creator.instagram_handle}
          profilePic={creator.profilePic}
          followers={creator.followers}
          niche={creator.niche}
          verified={creator.verified}
        />
      ))}
    </div>
  );
};

export default CreatorsList;