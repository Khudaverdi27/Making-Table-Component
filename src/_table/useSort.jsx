import { useState } from "react";

function useSort(filteredItems) {
  const [sort, setSort] = useState({ key: null, order: "asc" });
  filteredItems.sort((a, b) => {
    if (sort.key !== null) {
      const valueA = a[sort.key].toString().toLowerCase();
      const valueB = b[sort.key].toString().toLowerCase();

      if (sort.order === "asc") {
        return valueA.localeCompare(valueB);
      } else if (sort.order === "desc") {
        return valueB.localeCompare(valueA);
      }
    }

    return 0;
  });

  const finalResult = filteredItems;

  return [finalResult, sort, setSort];
}

export default useSort;
