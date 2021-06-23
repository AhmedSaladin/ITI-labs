import NavBar from "./navbar";
import Search from "./search";
import UsersList from "./users-list";
export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Search />
        <UsersList />
      </div>
    </div>
  );
}
