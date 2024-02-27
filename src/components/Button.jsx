/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
export default function Button({ children, className, href }) {
  return (
    <>
      <div>
        <Link to={href} type="button" className={`py-3 border-2 rounded-md ${className} `}>
          {children}
        </Link>
      </div>
    </>
  );
}
