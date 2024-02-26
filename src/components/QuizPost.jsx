/* eslint-disable react/prop-types */
import Button from './Button';

export default function QuizPost({ title, p1, p2 }) {
  return (
    <>
      <div className="bg-white border-2 border-stroke w-[880px] h-[607px] rounded-lg">
        <div className="p-12">
          <h2 className=" text-6xl text-primary font-bold w-[420px] pb-6">
            {title}
          </h2>
          <div className="w-[560px]">
            <div className="text-primary pb-6 text-2xl">
              <span>{p1} </span>
              <span className="font-bold">
                lose over 13% of their body weight in one year.
              </span>
            </div>
            <div className="pb-16">
              <p className="text-primary text-2xl">
                {p2} <sup>[1]</sup>
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <Button
              href={'take-quiz'}
              className={'bg-primary text-white font-semibold px-36'}
            >
              Take the quiz
            </Button>
            <Button
              href={'juniper-weight-reset-program'}
              className={
                'bg-white border-tertiary border-2 font-semibold text-primary px-36'
              }
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
