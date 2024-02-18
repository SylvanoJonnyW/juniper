/* eslint-disable react/prop-types */
export default function PeopleProfile({
  position = 'Endocrinologist',
  name = 'Nok',
  level = 'MBA',
  img = '/Dr-Ramy-Bishay.png',
}) {
  return (
    <>
      <div className="relative inline-block">
        <img
          className="rounded-lg"
          src={img}
          alt={`${name} picture`}
          width={380}
        />
        <div className="absolute bottom-5 right-5 font-medium rounded-full bg-deep-maroon text-white px-3 py-2">
          <p className="font-medium">{position}</p>
        </div>
      </div>
      <div>
        <h4 className="text-xl">{name}</h4>
        <p className="text-lg">{level}</p>
      </div>
    </>
  );
}
