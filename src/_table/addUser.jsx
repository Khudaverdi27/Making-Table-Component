import { useEffect, useState } from "react";

function useAdd(search, setUser, setSearch) {
  const [error, setError] = useState(false);

  useEffect(() => {
    // Reset error when search is empty
    search === "" && setError(false);
  }, [search]);

  const handleAddUser = () => {
    const userData = search.split(",");
    const [name, email, age] = userData;

    if (userData.length === 3) {
      setUser((prevUser) => [...prevUser, { name, email, age }]);
      setSearch("");
      setError(false);
    } else {
      setError(true);
    }
  };

  return [error, handleAddUser];
}

export default useAdd;
