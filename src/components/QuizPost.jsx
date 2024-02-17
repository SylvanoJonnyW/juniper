/* eslint-disable react/prop-types */
import Button from './Button';

export default function QuizPost({ title, p1, p2 }) {
  return (
    <>
      <div className="bg-white border-2 border-tertiary">
        <div className="p-5">
          <h2 className=" text-3xl text-primary font-semibold w-[480px] pb-4">
            {title}
          </h2>
          <div className="w-[480px]">
            <div className="text-primary pb-4">
              <p>{p1}</p>{' '}
              <p className="font-semibold">
                lose over 13% of their body weight in one year.
              </p>
            </div>
            <div className="pb-6">
              <p className="text-primary">
                {p2} <sup>[1]</sup>
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button
              href={'take-quiz'}
              className={'bg-primary text-white font-semibold'}
            >
              Take the quiz
            </Button>
            <Button
              href={'juniper-weight-reset-program'}
              className={'bg-white border-tertiary border-2 text-primary'}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
