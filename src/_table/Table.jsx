import { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";
import TableMobile from "./TableMobile";
import useSort from "./useSort";

function Table({ head, body, html, edit }) {
  const [search, setSearch] = useState("");

  const isMobile = useMediaQuery("only screen and (max-width: 548px)");

  const filteredItems = body.filter((items) =>
    items.some((item) =>
      item.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const [finalResult, sort, setSort] = useSort(filteredItems);

  // Filtr for search

  const searchArea = (
    <div className="px-4 flex mt-5 mb-2">
      <input
        key="search-input"
        onChange={(e) => setSearch(e.target.value)}
        className="w-full outline-none border rounded p-2 focus:border-orange-500"
        type="text"
        placeholder="search user"
      />
      {sort.key !== null && (
        <button
          onClick={() => setSort({ key: null, order: "asc" })}
          className="whitespace-nowrap border border-red-600 rounded ml-1 px-1"
        >
          Cancel sorting
        </button>
      )}
    </div>
  );
  if (isMobile) {
    return (
      <TableMobile
        head={head}
        body={finalResult}
        search={searchArea}
        html={html}
      />
    );
  }

  return (
    <>
      {html}
      {searchArea}
      <div className="w-full px-4">
        <table className="border w-full rounded">
          <thead>
            <tr className="text-left bg-gray-100">
              {head.map((h, i) => (
                <th width={h.width && h.width} className="p-2" key={i}>
                  {h.name}
                  {h.sort && (
                    <button
                      onClick={() =>
                        setSort((prevSort) => ({
                          key: i,
                          order:
                            prevSort.key === i && prevSort.order === "asc"
                              ? "desc"
                              : "asc",
                        }))
                      }
                      className="ml-1 border p-1 rounded-full"
                    >
                      {sort.order === "asc" ? <FaSortUp /> : <FaSortDown />}
                    </button>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {finalResult.map((b, i) => (
              <tr className="border group" key={i}>
                {b.map((d, i) => (
                  <td
                    className="p-2 group-hover:bg-gray-300 group-hover:text-blue-800"
                    key={i}
                  >
                    {d}
                    {typeof d !== "object" && edit && (
                      <input className="border flex justify-end" type="text" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
