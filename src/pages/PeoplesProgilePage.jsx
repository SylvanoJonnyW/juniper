import { profile } from '../appData';
import PeopleProfile from '../components/PeopleProfile';

export default function PeoplesProfilePage() {
  return (
    <>
      <div className="max-container">
        <div className="flex justify-between">
          {profile.map(people => (
            <div key={people.name}>
              <PeopleProfile
                name={people.name}
                position={people.position}
                level={people.level}
                img={people.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
