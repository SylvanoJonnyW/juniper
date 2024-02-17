// /* eslint-disable react/prop-types */
// export default function PeopleProfile({
//   position = 'Endocrinologist',
//   name = 'Nok',
//   level = 'MBA',
//   img = '/Dr-Ramy-Bishay.png',
// }) {
//   return (
//     <>
//       <div>
//         <div className="relative">
//           <img
//             className="rounded-lg"
//             src={img}
//             alt={`${name} picture`}
//             width={380}
//           />
//         </div>
//         <div className="absolute right-1">
//           <p className="inline text-white font-medium bg-deep-maroon px-3 py-2 rounded-full">
//             {position}
//           </p>
//         </div>
//         <div>
//           <h4 className="text-xl pb-2">{name}</h4>
//         </div>
//         <div>
//           <p className="text-lg">{level}</p>
//         </div>
//       </div>
//     </>
//   );
// }

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
