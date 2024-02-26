import NumberBulletin from '../components/NumberBulletin';

export default function ResetProgramPage() {
  return (
    <>
      <div className="max-container">
        <div className="flex flex-col gap-12">
          <div className="self-center">
            <h4 className="text-primary text-4xl font-semibold">
              How the Weight Reset Program Works
            </h4>
          </div>
          <div className='flex justify-between items-center mx-48'>
            <div className="w-fit">
              <img src="/juniper-form-app.svg" alt="Juniper Form Data App"  width={740}/>
            </div>
            <div className="flex flex-col gap-12">
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
                  "We're with you every step of the way. Together, we'll help you build habits for long-terms success."
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
