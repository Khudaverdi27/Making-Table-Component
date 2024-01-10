function TableMobile({ head, body, search }) {
  return (
    <>
      {search}
      <div className="border rounded p-4 grid gap-y-4 divide-y">
        {body.map((items, key) => (
          <section key={key}>
            {items.map((item, key) => (
              <div className="flex items-center" key={key}>
                <h6 className="font-bold min-w-[150px] mb-2">
                  {head[key].name}
                </h6>
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
