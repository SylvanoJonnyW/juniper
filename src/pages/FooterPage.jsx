import { Link } from 'react-router-dom';
import { footerLink } from '../appData';

export default function FooterPage() {
  return (
    <>
      <div className=" mx-52">
        <div className=" grid grid-cols-4 pb-16">
          <div>
            <img src="/juniper-footer-logo.svg" alt="" width={160} />
          </div>
          <div className="flex flex-col gap-8 text-white text-xl">
            <p>Symptoms</p>
            <span>Weight Gain</span>
          </div>
          <div className="flex flex-col gap-8 text-white text-xl">
            <p>Products</p>
            <span>Nourish Shakes</span>
          </div>
          <div className="flex flex-col gap-8 text-white text-xl">
            <p>About Us</p>
            <ul>
              {footerLink.map(footer => (
                <Link to={footer.direct} key={footer.title}>
                  <li className="pb-3">{footer.title}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className=''>
          <div className='flex flex-col gap-8 items-center'>
            <div>
              <img src="/juniper-copyright-logo.svg" alt="" width={140} />
            </div>
            <p className="text-white font-medium">
              Copyright &copy; 2024 Juniper Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
