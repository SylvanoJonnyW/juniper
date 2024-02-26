import QuizPost from '../components/QuizPost';
import { post, quizPost } from '../appData';
import BlogPost from '../components/BlogPost';

export default function BlogPosts() {
  return (
    <>
      <section className="max-container">
        <div className="flex justify-between mx-12">
          <div className="relative inline-block">
            <img
              src="/public/juniper-product.png"
              alt="Juniper Product"
              className="rounded-md"
              width={740}
            />
            <div className="absolute bottom-12 left-44 rounded-md bg-deep-maroon text-white px-5 py-4">
              <div className="flex gap-4 items-center">
                <span>
                  <img
                    src="/public/time-vector.svg"
                    alt="Rewind Clock Vector"
                    width={32}
                  />
                </span>
                <p className="text-xl font-normal">
                  30-days money-back guarantee
                </p>
              </div>
            </div>
          </div>
          <div>
            <QuizPost title={quizPost.title} p1={quizPost.p1} p2={quizPost.p2} />
          </div>
        </div>
        <div className='mx-12 mt-8'>
          <div className='flex gap-6 mb-12 justify-between'>
            {post.map(({ id, img, heading, title, to}) => (
              <div key={id}>
                <BlogPost img={img} heading={heading} title={title}  to={to}/>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
