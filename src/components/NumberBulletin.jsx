/* eslint-disable react/prop-types */
export default function NumberBulletin({
  title,
  description,
  one,
  two,
  three,
}) {
  return (
    <>
      <div className="flex gap-4 ">
        <div>
          {one && (
            <img src="/number-1.svg" alt="Number one vector" width={32} />
          )}
          {two && (
            <img src="/number-2.svg" alt="Number two vector" width={32} />
          )}
          {three && (
            <img src="/number-3.svg" alt="Number three vector" width={32} />
          )}
        </div>
        <div className="flex flex-col gap-3">
          <p className="font-semibold text-primary text-xl">{title}</p>
          <p className="text-primary font-medium w-[460px]">{description}</p>
        </div>
      </div>
    </>
  );
}
