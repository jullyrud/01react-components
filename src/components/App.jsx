import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList'

import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json"


console.log(friends);

export const App = () => {
  return (
    <div>
       <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics
          title={data.title}
          stats={data}
        />
      <FriendList
        friends={friends}
      />
    </div>
   
      
    
    
  );
};
