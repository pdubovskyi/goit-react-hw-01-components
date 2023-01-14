import Profile from '../components/Profile/Profile';
import data from '../data/user.json';
import Statistics from './Statistics/Statistic';
import statistic from '../data/data.json';

export const App = () => {
  return (
    <>
      <Profile
        name={data.username}
        tag={data.tag}
        location={data.location}
        avatar={data.avatar}
        stats={data.stats}
      />
      <Statistics title="Upload stats" items={statistic} />
    </>
  );
};
