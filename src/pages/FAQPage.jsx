import { question } from '../appData.js';
import FAQ from '../components/FAQ.jsx';

export default function FAQPage() {
  return (
    <>
      <div className="max-container">
        <div>
          <div className='flex flex-col gap-12 items-center'>
            <div className=" justify-center">
              <h4 className="text-6xl text-primary font-semibold">FAQs</h4>
            </div>
            <div className="w-[1380px]">
              {question.map(({ title, description }) => (
                <div key={title}>
                  <FAQ title={title} description={description} />
                </div>
              ))}
            </div>
          </div>
          <div className='ml-[182px]'>
            <div className="flex flex-col gap-2 text-[#829473]">
              <p className='py-8'>Citations</p>
              <span>
                [1]
                https://www.sciencedirect.com/science/article/abs/pii/S0140673618317732
              </span>
              <span>
                [2] https://www.racgp.org.au/afp/2017/july/genetics-of-obesity
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
