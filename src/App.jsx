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
import QuizPost from './components/QuizPost';
import { user, post, profile, quizPost, navigation } from './appData';
import { Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BlogPosts from './pages/BlogPosts';

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
          <div className="bg-white p-8 border-b-2">
            <div className="max-container">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-20 max-2xl:gap-10">
                  <img
                    src="/Juniper-Logo.svg"
                    alt="Juniper Logo"
                    width={140}
                    className=" max-2xl:w-[120px]"
                  />
                  <nav className="flex gap-10">
                    {navigation.map(({ link, direct }) => (
                      <div key={link}>
                        <Link to={direct} className="text-primary text-xl max-2xl:text-base">
                          {link}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="flex gap-6 max-2xl:gap-4">
                  <Button
                    href={'login'}
                    className={'bg-quarternary border-stroke max-2xl:py-2'}
                  >
                    Login
                  </Button>
                  <Button
                    href={'take-the-quiz'}
                    className={'bg-primary border-transparent text-[#F2FFCA] max-2xl:py-2'}
                  >
                    Take the quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <MainPage />
        <section className='bg-quarternary py-40'>
          <BlogPosts />
        </section>
      </header>
    </>
  );
}
