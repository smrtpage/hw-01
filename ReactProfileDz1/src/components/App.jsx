import Profile from "./Profile/Profile";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import FriendList from "./FriendList/FriendList";
import friends from "./FriendList/friends.json";
import user from "./Profile/user.json";
import transactions from "./TransactionHistory/transactions.json";
import "../style.css";

function App() {
  return (
    <div className="container">
      <Profile
        user={user}
        avatar={user.avatar}
        tag={user.tag}
        name={user.name}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
