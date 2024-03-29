/* eslint-disable no-unused-vars */
import Button from './components/Button';
import { navigation } from './appData';
import { Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import BlogPosts from './pages/BlogPosts';
import TestimonialPage from './pages/TestimonialPage';
import VideoPage from './pages/VideoPage';
import TrustPilotRatingPage from './pages/TrustpilotRatingPage';
import ResetProgramPage from './pages/ResetProgramPage';
import PeoplesProfilePage from './pages/PeoplesProgilePage';
import JuniperAppPage from './pages/JuniperAppPage';
import FAQPage from './pages/FAQPage';
import FooterPage from './pages/FooterPage';

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
                  <Link to={'/'}>
                    <img
                      src="/Juniper-Logo.svg"
                      alt="Juniper Logo"
                      width={140}
                      className=" max-2xl:w-[120px]"
                    />
                  </Link>
                  <nav className="flex gap-10">
                    {navigation.map(({ link, direct }) => (
                      <div key={link}>
                        <Link
                          to={direct}
                          className="text-primary text-xl max-2xl:text-base"
                        >
                          {link}
                        </Link>
                      </div>
                    ))}
                  </nav>
                </div>
                <div className="flex gap-6 max-2xl:gap-4">
                  <Button
                    href={'login'}
                    className={'bg-quarternary px-6 border-stroke max-2xl:py-2'}
                  >
                    Login
                  </Button>
                  <Button
                    href={'take-the-quiz'}
                    className={
                      'bg-primary border-transparent px-6 text-[#F2FFCA] max-2xl:py-2'
                    }
                  >
                    Take the quiz
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </header>
      <MainPage />
      <section className="bg-quarternary py-40">
        <BlogPosts />
      </section>
      <section className="bg-[#E4DCEB]">
        <TestimonialPage />
      </section>
      <section className="bg-primary py-28">
        <VideoPage />
      </section>
      <section className="bg-quarternary py-28">
        <TrustPilotRatingPage />
      </section>
      <section className="bg-[#FDFCF4] py-28">
        <ResetProgramPage />
      </section>
      <section className="bg-primary py-28">
        <PeoplesProfilePage />
      </section>
      <section className="bg-white pt-28">
        <JuniperAppPage />
      </section>
      <section className="bg-quarternary pt-28 pb-24">
        <FAQPage />
      </section>
      <footer className="bg-primary py-24">
        <FooterPage />
      </footer>
    </>
  );
}
