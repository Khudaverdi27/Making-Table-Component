import useSort from "./useSort";
import { FaSortDown, FaSortUp } from "react-icons/fa";

function TableMobile({ head, body, search, html, editIndex, setValue }) {
  const [finalResult, sort, setSort] = useSort(body);

  return (
    <>
      {html}
      {search}
      <div className="flex items-center justify-between my-1">
        {head.map(
          (h, i) =>
            h.sort && (
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
                key={i}
                className="border rounded px-1 flex items-center"
              >
                {h.name}
                {sort.order === "asc" ? <FaSortUp /> : <FaSortDown />}
              </button>
            )
        )}
      </div>
      <div className="border rounded p-4 grid gap-y-4 divide-y">
        {finalResult.map((items, key) => (
          <section key={key}>
            {items.map((item, i) => (
              <div className="flex items-center " key={i}>
                <h6 className="font-bold min-w-[80px] mb-2">{head[i].name}</h6>
                <div className="flex justify-between w-full">
                  {item}
                  {typeof item !== "object" && editIndex === key && (
                    <input
                      onChange={(e) =>
                        setValue({
                          key: head[i].name.toLowerCase(),
                          value: e.target.value,
                        })
                      }
                      className="border border-green-400 outline-none rounded flex justify-end"
                      type="text"
                    />
                  )}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}

export default TableMobile;
