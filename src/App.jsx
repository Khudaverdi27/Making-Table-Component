import { useState } from "react";
import Table from "./_table/Table";
import "./assets/css/index.css";
import useEdit from "./_table/useEdit";
import { LuFileEdit } from "react-icons/lu";
import { MdOutlineDelete, MdOutlineDoneOutline } from "react-icons/md";

function App() {
  const [user, setUser] = useState([
    { name: "John Doe", email: "john@example.com", age: "16" },
    { name: "mickel ericson", email: "mickel@example.com", age: "15" },
  ]);

  const [editIndex, setEditValue, editState] = useEdit(null);

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
          : `text-center w-full bg-orange-200 text-white border rounded-md px-1 font-bold my-1 shadow border-orange-600`
      }
    >
      table is empty
    </div>
  );

  return (
    <div>
      <Table
        setUser={setUser}
        editIndex={editIndex}
        setValue={setEditValue}
        html={html}
        head={[
          { name: "Name", sort: true },
          { name: "Email" },
          { name: "Age", sort: true },
          { name: "Actions", width: 150 },
        ]}
        body={user.map((user, index) => [
          user?.name,
          user?.email,
          user?.age,

          <div className="space-x-2 flex text-white w-full " key={index}>
            <button
              onClick={() => editState(index, setUser)}
              className="bg-blue-600 py-1 rounded w-auto justify-center text-xl flex flex-grow"
            >
              {editIndex == index ? <MdOutlineDoneOutline /> : <LuFileEdit />}
            </button>

            <button
              onClick={() => deleteState(index)}
              className="bg-red-500 py-1 rounded flex-grow flex text-xl justify-center"
            >
              <MdOutlineDelete />
            </button>
          </div>,
        ])}
      />
    </div>
  );
}

export default App;
