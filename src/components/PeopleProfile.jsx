/* eslint-disable react/prop-types */
export default function PeopleProfile({
  position = 'Endocrinologist',
  name = 'Nok',
  level = 'MBA',
  img = '/Dr-Ramy-Bishay.png',
}) {
  return (
    <>
      <div className="max-container">
        <div className="relative inline-block">
          <img
            className="rounded-lg"
            src={img}
            alt={`${name} picture`}
            width={420}
          />
          <div className="absolute bottom-5 right-5 font-medium rounded-full bg-deep-maroon text-white px-3 py-2">
            <p className="font-medium">{position}</p>
          </div>
        </div>
        <div className="pt-6">
          <h4 className="text-2xl text-white">{name}</h4>
          <p className="text-xl text-white">{level}</p>
        </div>
      </div>
    </>
  );
}
