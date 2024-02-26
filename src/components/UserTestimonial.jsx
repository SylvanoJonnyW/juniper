/* eslint-disable react/prop-types */
export default function UserTestimonial({
  img,
  name,
  age,
  weightLoss,
  monthLoss,
  description,
}) {
  return (
    <>
      <div className="bg-white h-[505px] border-2 rounded-xl border-tertiary ">
        <div className="p-4">
          <div className="flex justify-between items-center pb-6">
            <p className="text-2xl text-primary font-semibold">
              {name}, {age}
            </p>
            <div className="w-fit h-fit p-2 bg-secondary flex gap-4 rounded-lg items-center">
              <div>
                <img src="/down-vector.svg" alt="Vector" width={18} />
              </div>
              <p className="text-primary font-semibold text-lg">
                {`${weightLoss}kg in ${monthLoss} months`}
              </p>
            </div>
          </div>
          <div>
            <img
              src={img}
              alt={`${name} progress of weightloss using Juniper Program`}
              width={380}
              className="pb-2"
            />
          </div>
        </div>
        <div className="border-b-2 border-tertiary"></div>
        <div className="p-6 pt-4">
          <p className="text-primary font-semibold text-xl w-[380px]">{`"${description}"`}</p>
        </div>
      </div>
    </>
  );
}
