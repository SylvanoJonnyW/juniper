import { rating } from '../appData';
import RatingCard from '../components/RatingCard';
import TrustPilotRating from '../components/TrustPilotRating';

export default function TrustPilotRatingPage() {
  return (
    <>
      <div className="max-container">
        <div className="flex flex-col gap-20 items-center">
          <div className="flex flex-col gap-8">
            <h4 className="text-primary text-6xl font-medium">
              The feeling is mutual
            </h4>
            <div className="self-center">
              <p className="text-primary text-xl font-medium">
                We&apos;re grateful to be helping Australian Women <br />
                <span className="pl-12">
                  reach their weight goals every day.
                </span>
              </p>
            </div>
            <div className="self-center">
              <TrustPilotRating rating={'4.56 rating'} />
            </div>
          </div>
          <div className="flex gap-8">
            {rating.map(({ id, title, description }) => (
              <div key={id}>
                <RatingCard title={title} description={description} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
