export default function JuniperAppPage() {
  return (
    <>
      <div className="max-container">
        <div className="flex justify-between">
          <div className="flex flex-col gap-12 pt-16">
            <h4 className="text-primary text-6xl font-bold">
              Introducing the Juniper App
            </h4>
            <p className="w-[680px] text-2xl">
              Our members-only app puts all the essentials to help you get the
              most out of your time with Juniper in your pocket. Join Juniper
              and experience it on the app today.
            </p>
            <ul className="flex flex-col gap-4 text-primary font-bold text-xl">
              <li>
                <span className="flex gap-4">
                  <img src="/track-process.svg" alt="Graph Vector" width={24} />
                  <span>Track your progress</span>
                </span>
              </li>
              <li>
                <span className="flex gap-4">
                  <img src="/idea.svg" alt="Graph Vector" width={24}/>
                  <span>
                    Enjoy app-exclusive health education from weight experts
                  </span>
                </span>
              </li>
              <li>
                <span className="flex gap-4">
                  <img src="/question-mark.svg" alt="Graph Vector" width={24} />
                  <span>Get Informed support when you need it</span>
                </span>
              </li>
            </ul>
          </div>
          <div className="pr-28">
            <img
              src="/juniper-app-interface.png"
              alt="Juniper IOS App"
              width={470}
            />
          </div>
        </div>
      </div>
    </>
  );
}
