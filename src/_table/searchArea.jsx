import useAdd from "./addUser";

function SearchArea({ setSearch, sort, setSort, body, setUser, search }) {
  const isUserNotFound = body.length === 0;
  const [error, handleAddUser] = useAdd(search, setUser, setSearch);
  const handleCancelSorting = () => {
    setSort({ key: null, order: "asc" });
  };

  return (
    <>
      {isUserNotFound && (
        <div className="border text-center text-white font-bold bg-yellow-500 whitespace-nowrap px-1 border-red-600 rounded shadow-md">
          User not found. Add user.
        </div>
      )}
      {error && (
        <div className="border text-center text-white font-bold bg-red-400 whitespace-nowrap px-1 border-red-600 rounded shadow-md my-1">
          example:user,email,age
        </div>
      )}
      <div className="px-4 flex mt-5 mb-2">
        <input
          key="search-input"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none border rounded p-2 focus:border-orange-500"
          type="text"
          placeholder="Search user or add user"
        />
        {isUserNotFound && (
          <button
            onClick={handleAddUser}
            className="border bg-green-500 whitespace-nowrap px-1 border-green-600 rounded ml-1 text-white"
          >
            Add User
          </button>
        )}

        {sort.key !== null && (
          <button
            onClick={handleCancelSorting}
            className="whitespace-nowrap border border-red-600 rounded ml-1 px-1"
          >
            Cancel sorting
          </button>
        )}
      </div>
    </>
  );
}

export default SearchArea;
