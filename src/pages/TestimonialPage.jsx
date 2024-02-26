import { user } from '../appData';
import Button from '../components/Button';
import UserTestimonial from '../components/UserTestimonial';

export default function TestimonialPage() {
  return (
    <>
      <section className="max-container p-36">
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-8 text-primary">
            <div>
              <p className="text-6xl font-medium">
                It&apos;s more than just weight loss
              </p>
            </div>
            <div className=" self-center">
              <p className="text-3xl w-[620px]">
                Thousands of Australian women have found <br />
                <span className="pl-24">new confidence with Juniper.</span>
              </p>
            </div>
          </div>
          <div className="flex gap-8 mb-12">
            {user.map(
              ({ id, img, name, age, weightLoss, monthLoss, description }) => (
                <div key={id}>
                  <UserTestimonial
                    img={img}
                    name={name}
                    age={age}
                    weightLoss={weightLoss}
                    monthLoss={monthLoss}
                    description={description}
                  />
                </div>
              )
            )}
          </div>
          <div>
            <div className='flex flex-col items-center gap-8'>
              <div>
                <p className="text-primary text-3xl">
                  Discover how Juniper&apos;s Weight Reset Program can work{' '}
                  <br />
                  <span className="pl-8 text-primary text-3xl">
                    for you. Take the quiz now to see if you&apos;re eligible.
                  </span>
                </p>
              </div>
              <Button className={'bg-primary text-white'} href={'/take-quiz'}>Take the quiz</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
