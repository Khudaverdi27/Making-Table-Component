function SearchArea({ setSearch, sort, setSort, body }) {
  return (
    <>
      {" "}
      {body.length == 0 && (
        <div className=" border text-center text-white font-bold bg-yellow-500 whitespace-nowrap px-1 border-red-600 rounded ml-1">
          User not found add user
        </div>
      )}
      <div className="px-4 flex mt-5 mb-2">
        <input
          key="search-input"
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none border rounded p-2 focus:border-orange-500"
          type="text"
          placeholder="search user or add user"
        />
        {body.length == 0 && (
          <button className="border bg-green-500 whitespace-nowrap px-1 border-green-600 rounded ml-1 text-gray-700">
            Add User
          </button>
        )}

        {sort.key !== null && (
          <button
            onClick={() => setSort({ key: null, order: "asc" })}
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
