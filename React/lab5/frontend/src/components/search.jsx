import { useRef } from "react";
import { useDispatch } from "react-redux";
import get_user_by_name from "../actions/users_list";

export default function Search() {
  const searchRef = useRef();
  const dispatch = useDispatch();
  return (
    <div className="container m-auto">
      <div className="text-center m-4 row">
        <input
          type="text"
          placeholder="Search by name"
          className="form-control rounded-pill m-auto searchinp col-12 col-md-8"
          ref={searchRef}
        />
        <button
          className="btn btn-dark m-auto searchbtn col-12 col-md-4"
          onClick={() => {
            const name = searchRef.current.value;
            dispatch(get_user_by_name(name));
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}
