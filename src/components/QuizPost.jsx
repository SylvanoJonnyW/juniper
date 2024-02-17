/* eslint-disable react/prop-types */
import Button from './Button';

export default function QuizPost({ title, p1, p2 }) {
  return (
    <>
      <div className="bg-white border-2 border-stroke w-fit rounded-lg">
        <div className="p-10">
          <h2 className=" text-4xl text-primary font-bold w-[320px] pb-4">
            {title}
          </h2>
          <div className="w-[510px]">
            <div className="text-primary pb-4 text-lg">
              <span>{p1} </span>
              <span className="font-bold">
                lose over 13% of their body weight in one year.
              </span>
            </div>
            <div className="pb-6">
              <p className="text-primary text-lg">
                {p2} <sup>[1]</sup>
              </p>
            </div>
          </div>
          <div className="flex gap-4 justify-between">
            <Button
              href={'take-quiz'}
              className={'bg-primary text-white font-semibold px-20'}
            >
              Take the quiz
            </Button>
            <Button
              href={'juniper-weight-reset-program'}
              className={
                'bg-white border-tertiary border-2 font-semibold text-primary px-20'
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
