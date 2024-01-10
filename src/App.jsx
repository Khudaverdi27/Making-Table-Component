import { useState } from "react";
import Table from "./_table/Table";
import "./assets/css/index.css";

function App() {
  const [user, setUser] = useState([
    { name: "John Doe", email: "john@example.com", age: "16" },
    { name: "mickel ericson", email: "mickel@example.com", age: "15" },
    { name: "Lisa Augusto", email: "Lisa@example.com", age: "55" },
    { name: "Alex Mocker", email: "Alex@example.com", age: "52" },
  ]);

  const deleteState = (index) => {
    const newUser = [...user];
    newUser.splice(index, 1);
    setUser(newUser);
  };
  const html = (
    <div
      className={
        user.length > 0
          ? `hidden`
          : `text-center w-full bg-orange-200 text-white border rounded-md p-2 font-bold`
      }
    >
      table is empty
    </div>
  );
  return (
    <div>
      <Table
        setUser={setUser}
        html={html}
        head={[
          { name: "Name", sort: true },
          { name: "Email" },
          { name: "Age", sort: true },
          { name: "Actions", width: 150 },
        ]}
        body={user.map((user, index) => [
          user.name,
          user.email,
          user.age,
          <div className="space-x-2 text-white">
            <button className="bg-blue-600 p-1 rounded">edit</button>
            <button
              onClick={() => deleteState(index)}
              className="bg-red-500 p-1 rounded"
            >
              delete
            </button>
          </div>,
        ])}
      />
    </div>
  );
}

export default App;