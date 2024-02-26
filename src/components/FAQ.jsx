/* trunk-ignore-all(prettier) */
export default function FAQ({ title, description }) {
  return (
    <>
      <div className="py-12 border-y-2 border-primary border-opacity-20 w-full">
        <div className="flex justify-between cursor-pointer">
          <div>
            <p className="text-primary text-2xl font-medium">{title}</p>
          </div>
          {/* <p>{description}</p> */}
          <div>
            <img src="/plus-sign.svg" alt="" width={32} />
          </div>
        </div>
      </div>
    </>
  );
}
