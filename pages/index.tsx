import Image from "next/image";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";
import Link from "next/link";

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center min-h-screen items-center bg-gradient-to-tr from-black to-[#322B44] text-white">
      <motion.div
        className="mx-auto mb-10 flex flex-col"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="flex flex-col items-center">
          <motion.div
            variants={childVariants}
            className="flex items-center gap-6 mt-16"
          >
            <span className="text-xl xs:text-2xl">
              Hey, I&apos;m Nikita{" "}
              <div className="inline-block animate-wave">👋</div>
            </span>

            <Image
              src="/nikita.png"
              width={100}
              height={100}
              priority={true}
              className="rounded-full"
              alt="Nikita Malinovsky"
            />
          </motion.div>
          <motion.div className="mt-10 mx-5" variants={childVariants}>
            I&apos;m a software engineer passionate about startups.
          </motion.div>
          <motion.div
            className="mt-10 flex items-center"
            variants={childVariants}
          >
            <motion.a
              href="https://github.com/nikitamalinov"
              target="_blank"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              className="mr-5"
            >
              <BsGithub size="48" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/nikita-malinovsky/"
              target="_blank"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              className="mr-2"
            >
              <BsLinkedin size="48" />
            </motion.a>
            <motion.div
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
              className="text-5xl mr-1"
            >
              <Link href="/resume">📄</Link>
            </motion.div>
            <motion.a
              href="mailto:nikita@malinovsky.net"
              target="_blank"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.1 },
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 },
              }}
            >
              <AiOutlineMail size="58" />
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={childVariants}
          className="mt-20 mb-10 text-5xl ml-5"
        >
          Projects
        </motion.div>
        <div className="flex flex-col items-center flex-wrap mx-5 ">
          <motion.div variants={childVariants}>
            <div className="text-2xl mb-5 ">Alumni Network</div>
            {/* 1.81757402101 */}
            <a href="https://godons.io" target="_blank">
              <div className="relative h-[150px] w-[273px] xs:h-[200px] xs:w-[364px] sm:h-[300px] sm:w-[545px] md:h-[400px] md:w-[727px]">
                <Image src="/godons.png" fill alt="Nikita Malinovsky" />
              </div>
            </a>
          </motion.div>
          <motion.div variants={childVariants}>
            <div className="mt-10 text-2xl mb-5">Los Angeles Scouts</div>
            {/* 1.83044315992 */}
            <a href="https://razvedchik.org" target="_blank">
              <div className="relative h-[150px] w-[276px] xs:h-[200px] xs:w-[366px]  sm:h-[300px] sm:w-[549px] md:h-[400px] md:w-[732px]">
                <Image
                  src="/razvedchik-1900x1038.png"
                  fill
                  alt="Los Angeles Scouts"
                />
              </div>
            </a>
          </motion.div>
          <motion.div variants={childVariants}>
            {/* 1.83556405354 */}
            <div className="mt-10 text-2xl mb-5">Paul Graham&apos;s Essays</div>
            <a href="https://paulgrahamessays.com" target="_blank">
              <div className="relative h-[150px] w-[275px] xs:h-[200px] xs:w-[367px]  sm:h-[300px] sm:w-[551px] md:h-[400px] md:w-[734px]">
                <Image
                  src="/paulgrahamessays.png"
                  fill
                  alt="Paul Graham's Essays"
                />
              </div>
            </a>
          </motion.div>
          <motion.div variants={childVariants}>
            <div className="mt-10 text-2xl mb-5">Vennbury University</div>
            {/* 1.83015267176 */}
            <a href="https://vennbury.com" target="_blank">
              <div className="relative h-[150px] w-[276px] xs:h-[200px] xs:w-[366px]   sm:h-[300px] sm:w-[549px] md:h-[400px] md:w-[732px]">
                <Image src="/vennbury.png" fill alt="Vennbury University" />
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </main>
  );
}
