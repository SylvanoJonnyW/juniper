/* eslint-disable react/prop-types */
export default function BulletPoint({ children }) {
  return (
    <>
      <div className="flex items-center gap-6">
        <div>
          <img src="/bulletpoint.svg" width={32} alt="" />
        </div>
        <p className="font-semibold text-primary">{children}</p>
      </div>
    </>
  );
}
