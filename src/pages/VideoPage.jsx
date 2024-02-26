import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function VideoPage() {
  return (
    <>
      <div className="max-container">
        <div className="flex justify-between mx-12 items-center">
          <div>
            <Link to={'/Juniper-Weight-Loss-by-Dr-Ramy-Bishay'} target='_blank'>
              <img
                src="/public/juniper-video-box.png"
                alt="Dr Ramy Bishay Explaining Juniper Weight Loss program"
                width={740}
              />
            </Link>
          </div>
          <div>
            <div className="flex flex-col gap-8">
              <div className="pb-12 border-b-2">
                <h3 className="text-7xl font-semibold text-white w-[680px]">
                  We&apos;re changing the conversation around weight gain
                </h3>
              </div>
              <p className="text-xl text-white">
                Discover how Juniper&apos;s program works, as explained by{' '}
                <br />
                <span>
                  specialist Endocrinologist and obesity physician Dr Ramy
                  Bishay
                </span>
              </p>
              <Button
                className={
                  'bg-secondary text-primary border-transparent font-semibold'
                }
                href={'weight-gain-quiz'}
              >
                Take the quiz
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
