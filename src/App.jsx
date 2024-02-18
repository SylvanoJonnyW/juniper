/* eslint-disable no-unused-vars */
import BlogPost from './components/BlogPost';
import BulletPoint from './components/BulletPoint';
import Button from './components/Button';
import NumberBulletin from './components/NumberBulletin';
import PeopleProfile from './components/PeopleProfile';
import Rating from './components/Rating';
import RatingCard from './components/RatingCard';
import TrustPilotRating from './components/TrustPilotRating';
import UserTestimonial from './components/UserTestimonial';
import Heroimg from './components/HeroImg';
import { user, post, profile, quizPost, navigation } from './appData';
import QuizPost from './components/QuizPost';

export default function App() {
  return (
    <>
      <header>
        <section>
          <div className="bg-quarternary p-2">
            <div className="flex justify-center">
              <div className="flex gap-4 items-center w-fit">
                <img
                  src="/australia-vector.svg"
                  alt="Austrila Country Vector"
                  width={38}
                />
                <p className="text-primary font-medium">
                  Australian based, Australian owned
                </p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="bg-white p-8">
            <div className="max-container">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-20">
                  <img src="/Juniper-Logo.svg" alt="Juniper Logo" width={140} />
                  <nav className="flex gap-10">
                    {navigation.map(({ link, direct }) => (
                      <ul key={link}>
                        <li className="text-primary text-xl">
                          <a href={direct}>{link}</a>
                        </li>
                      </ul>
                    ))}
                  </nav>
                </div>
                <div className="flex gap-6">
                  <Button
                    href={'login'}
                    className={'bg-quarternary border-stroke'}
                  >
                    Login
                  </Button>
                  <Button
                    href={'take-the-quiz'}
                    className={'bg-primary border-transparent text-[#F2FFCA]'}
                  >
                    Take the quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
    </>
  );
}
