import Search from "./search";
import UsersList from "./user/users-list";
export default function Home() {
  return (
    <div className="container">
      <Search />
      <UsersList />
    </div>
  );
}
