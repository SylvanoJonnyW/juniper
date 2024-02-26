/* eslint-disable react/prop-types */
export default function BulletPoint({ children }) {
  return (
    <>
      <div className="flex items-center gap-6">
        <div className="py-2">
          <img src="/bulletpoint.svg" width={28} alt="Bullet Point Vector" />
        </div>
        <p className="font-semibold text-primary text-xl">{children}</p>
      </div>
    </>
  );
}
