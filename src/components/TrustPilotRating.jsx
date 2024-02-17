/* eslint-disable react/prop-types */
export default function TrustPilotRating({ rating }) {
  return (
    <>
      <div className="flex items-center gap-4">
        <img src="/juniper-trustpilot-ratings.svg" width={280} alt="" />
        <p className="text-primary font-medium text-lg">{rating}</p>
      </div>
    </>
  );
}
