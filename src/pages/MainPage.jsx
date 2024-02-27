import BulletPoint from '../components/BulletPoint';
import Button from '../components/Button';
import Heroimg from '../components/HeroImg';
import TrustPilotRating from '../components/TrustPilotRating';

export default function MainPage() {
  return (
    <>
      <main className="max-container">
        <div className="flex justify-between py-36 items-center">
          <section>
            <div>
              <h1 className="text-6xl text-primary font-medium w-[680px] border-b-2 pb-12">
                A medical pathway to sustainable weight loss
              </h1>
              <div className='flex flex-col gap-6'>
                <p className=' text-2xl w-[620px] pt-8'>
                  Juniper addresses weight at a biological level. Because
                  it&apos;s not a motivational issue, it&apos;s a medical one.
                </p>
                <div>
                  <BulletPoint>Practitioner-prescrived medication</BulletPoint>
                  <BulletPoint>Dietitian-led health coaching & support</BulletPoint>
                  <BulletPoint>30-days money-back guarantee</BulletPoint>
                </div>
                <Button className={'bg-primary text-white px-6'}>Take the quiz</Button>
                <TrustPilotRating />
              </div>
            </div>
          </section>
          <section>
            <Heroimg />
          </section>
        </div>
      </main>
    </>
  );
}
