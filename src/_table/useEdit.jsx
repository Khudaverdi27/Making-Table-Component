import { useState } from "react";

function useEdit(initialIndex = null) {
  const [editIndex, setEditIndex] = useState(initialIndex);
  const [editValue, setEditValue] = useState("");

  const editState = (index, setUser) => {
    setEditIndex((prevIndex) => (prevIndex === index ? null : index)); // toggle input

    const { key, value } = editValue;

    if (key && value) {
      setUser((prevUsers) => {
        const updatedUsers = prevUsers.map((user, i) =>
          i === index ? { ...user, [key]: value } : user
        );
        return updatedUsers;
      });
    }

    // Clear the input values after editing
    setEditValue({ key: "", value: "" });
  };

  return [editIndex, setEditValue, editState];
}

export default useEdit;
