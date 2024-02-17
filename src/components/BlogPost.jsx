/* eslint-disable react/prop-types */
export default function BlogPost({img, heading, title}) {
  return (
    <>
      <div className="w-fit">
        <div className="w-fit pb-4">
          <img src={img} alt={title} width={360}/>
        </div>
        <h4 className="text-primary font-semibold text-2xl  pb-4">{heading}</h4>
        <p className="text-primary font-semibold text-xl w-[360px]">{title}</p>
      </div>
    </>
  )
}