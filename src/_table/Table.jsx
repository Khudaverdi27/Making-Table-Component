import { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { useMediaQuery } from "@react-hook/media-query";
import TableMobile from "./TableMobile";
import useSort from "./useSort";
import SearchArea from "./searchArea";

function Table({ head, body, html, editIndex, setValue }) {
  const [search, setSearch] = useState("");
  const isMobile = useMediaQuery("only screen and (max-width: 548px)");

  const filteredItems = body.filter((items) =>
    items.some((item) =>
      item?.toString().toLowerCase().includes(search.toLowerCase())
    )
  );

  const [finalResult, sort, setSort] = useSort(filteredItems);

  // Filtr for search

  if (isMobile) {
    return (
      <TableMobile
        head={head}
        body={finalResult}
        html={html}
        editIndex={editIndex}
        setValue={setValue}
        setSearch={setSearch}
      />
    );
  }

  return (
    <>
      {html}
      <SearchArea
        body={finalResult}
        setSearch={setSearch}
        setSort={setSort}
        sort={sort}
      />
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
                {b.map((d, j) => (
                  <td
                    className="p-2 group-hover:bg-gray-300 group-hover:text-blue-800"
                    key={j}
                  >
                    {d}
                    {typeof d !== "object" && editIndex === i && (
                      <input
                        onChange={(e) =>
                          setValue({
                            key: head[j].name.toLowerCase(),
                            value: e.target.value,
                          })
                        }
                        className="border border-green-400 outline-none rounded flex justify-end"
                        type="text"
                      />
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
