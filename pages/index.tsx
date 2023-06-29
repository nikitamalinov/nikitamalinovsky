import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen items-center bg-gradient-to-tr from-black to-[#322B44] text-white">
      <div className="mx-auto mb-10 flex flex-col ">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-6 mt-16">
            <span className="text-xl xs:text-2xl">
              Hey, I&apos;m Nikita{" "}
              <div className="inline-block animate-wave">👋</div>
            </span>

            <Image
              src="/nikita.png"
              width={100}
              height={100}
              className="rounded-full"
              alt="Nikita Malinovsky"
            />
          </div>

          <div className="mt-10 mx-5">
            I&apos;m a software engineer passionate about startups.
          </div>
        </div>

        <div className="mt-20 mb-10 text-5xl ml-5">Projects</div>
        <div className="flex flex-col items-center mx-5">
          <div className="text-2xl mb-5">
            Alumni Network for Acalanes High School
          </div>

          {/* 1.81757402101 */}
          <a href="https://godons.io" target="_blank">
            <div className="relative h-[150px] w-[273px] xs:h-[200px] xs:w-[364px] sm:h-[300px] sm:w-[545px] md:h-[400px] md:w-[727px]">
              <Image src="/godons.png" fill alt="Nikita Malinovsky" />
            </div>
          </a>
          <div className="mt-10 text-2xl mb-5">Vennbury University</div>
          {/* 1.83015267176 */}
          <a href="https://vennbury.com" target="_blank">
            <div className="relative h-[150px] w-[276px] xs:h-[200px] xs:w-[366px]   sm:h-[300px] sm:w-[549px] md:h-[400px] md:w-[732px]">
              <Image src="/vennbury.png" fill alt="Nikita Malinovsky" />
            </div>
          </a>
          {/* 1.83556405354 */}
          <div className="mt-10 text-2xl mb-5">Paul Graham Essays</div>
          <a href="https://paulgrahamessays.com" target="_blank">
            <div className="relative h-[150px] w-[275px] xs:h-[200px] xs:w-[367px]  sm:h-[300px] sm:w-[551px] md:h-[400px] md:w-[734px]">
              <Image src="/paulgrahamessays.png" fill alt="Nikita Malinovsky" />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}
