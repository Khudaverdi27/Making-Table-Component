import { useState } from "react";

function useAdd(search, setUser, setSearch) {
  const [error, setError] = useState(false);

  const handleAddUser = () => {
    console.log(search);
    const arr = search.split(",");
    if (arr.length === 3) {
      setUser((prevUser) => {
        return [...prevUser, { name: arr[0], email: arr[1], age: arr[2] }];
      });
      setSearch("");
      setError(false);
    } else {
      setError(true);
    }
  };
  return [error, handleAddUser];
}

export default useAdd;
