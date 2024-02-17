import BlogPost from './components/BlogPost';
import BulletPoint from './components/BulletPoint';
import Button from './components/Button';
import NumberBulletin from './components/NumberBulletin';
import PeopleProfile from './components/PeopleProfile';
import Rating from './components/Rating';
import RatingCard from './components/RatingCard';
import TrustPilotRating from './components/TrustPilotRating';
import UserTestimonial from './components/UserTestimonial';
import { profile } from './peopleProfile';
import { user } from './userProfile';
import { post } from './blogPost';

export default function App() {
  return (
    <>
      <div className="flex gap-5 mt-12 mb-12">
        <Button
          className={
            'bg-quarternary border-2 border-stroke text-primary font-medium'
          }
          href={'/login'}
        >
          Login
        </Button>
        <Button className={'bg-primary text-tertiary '} href={'take-quiz'}>
          Take the quiz
        </Button>
      </div>
      <TrustPilotRating rating={'4.5 rating'} />
      <TrustPilotRating />
      <Rating />
      <div className="flex flex-col gap-4 mb-12">
        <BulletPoint>Practitioner-prescrived medication</BulletPoint>
        <BulletPoint>Dietitian-led health coaching & support</BulletPoint>
        <BulletPoint>30-day money-back guarantee</BulletPoint>
      </div>
      <div className="flex flex-col gap-12 mb-12">
        <NumberBulletin
          one
          title={'Quiz and consult online'}
          description={
            'Take the quiz and have an online consultation with an accredited Australian practitioner.'
          }
        />
        <NumberBulletin
          two
          title={'Get treatment delivered'}
          description={
            'Your personalised plan is delivered to your door, with easy-to-follow instructions for starting at home.'
          }
        />
        <NumberBulletin
          three
          title={'Follow-up care'}
          description={
            "We're with you every step of the way. Together, we'll help you build habits for long-term success."
          }
        />
      </div>
      {/* <PeopleProfile /> */}
      <div className="flex gap-12 mb-12">
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
      <div className="flex gap-8 mb-12 w-fit">
        <RatingCard title={'Very happy with my weight loss'}>
          I&apos;m really glad I took the leap and did this for myself, highly
          recommend you try it out if you&apos;re on the fence.
        </RatingCard>
        <RatingCard title={'I am loving the Juniper Program'}>
          I am loving the Juniper program, finally I have found something that
          actually helps me lose weight. In the first couple of weeks i have
          lost 4 kilos. Support is great too.
        </RatingCard>
        <RatingCard title={'I wish i found this program earlier'}>
          The support is so much better than my regular GP. I can&apos;t wait to
          receive my welcome package and start my journey through Juniper.
        </RatingCard>
        <RatingCard title={'Really greatful to have found this'}>
          I had done my research and product. It is working great for me.
        </RatingCard>
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
      <div className='flex gap-8'>
        {post.map(({id, img, heading, title}) => (
          <div key={id}>
            <BlogPost img={img} heading={heading} title={title} />
          </div>
        ))}
      </div>
    </>
  );
}
