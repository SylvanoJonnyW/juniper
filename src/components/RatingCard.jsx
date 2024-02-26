/* eslint-disable react/prop-types */
import Rating from './Rating';

export default function RatingCard({ title, description }) {
  return (
    <>
      <div className="bg-white rounded-xl border-stroke border-2 w-fit h-fit">
        <div className="flex flex-col gap-6 p-4">
          <Rating />
          <p className="text-2xl text-primary font-semibold">{title}</p>
          <p className="text-xl text-primary w-[340px]">{description}</p>
        </div>
      </div>
    </>
  );
}
