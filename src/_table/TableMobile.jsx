import useSort from "./useSort";
import { FaSortDown, FaSortUp } from "react-icons/fa";
function TableMobile({ head, body, search, html }) {
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
              <div className="flex items-center" key={i}>
                <h6 className="font-bold min-w-[150px] mb-2">{head[i].name}</h6>
                {item}
              </div>
            ))}
          </section>
        ))}
      </div>
    </>
  );
}

export default TableMobile;
