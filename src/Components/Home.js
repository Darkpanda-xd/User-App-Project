import React, {
  useEffect,
  useState,
} from "react";
import useHook from "./Hooks/useHook";
import Search from "./Search";
import Users from "./Users";

const Home = () => {
  const { data, isLoading, error } =
    useHook(
      "https://jsonplaceholder.typicode.com/users"
    );

  const [users, setUsers] = useState(
    []
  );
  useEffect(() => {
    setUsers(data);
  }, [data]);
  
  const handelRemove = (id) => {
    const filteredUsers = users.filter(
      (user) => {
        return user.id !== id;
      }
    );
    return setUsers(filteredUsers);
  };
  const handelSearch = (
    searchValue
  ) => {
    const value = searchValue.toLowerCase()
    const filteredText = data.filter((users)=>{
      const name = users.name.toLowerCase()
      return name.startsWith(value)
    })
    return setUsers(filteredText)
  };

  const loadingText = isLoading && (
    <h1>Loading.....</h1>
  );
  const errorText = error && (
    <h3>{error.message}</h3>
  );
 

  return (
    <div>
      <h1>User Data</h1>
      <Search onSearch={handelSearch} />
      {loadingText}
      {errorText}
      {data&& (
        <Users
          users={users}
          onRemove={handelRemove}
        />
      )}
    </div>
  );
};

export default Home;
