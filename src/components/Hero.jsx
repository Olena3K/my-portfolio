// src/components/Hero.jsx
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import DarkVeil from "./DarkVeil";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[5vh]">
      <div className="h-full flex text-white flex-col justify-center items-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[clamp(4rem,8vw,15rem)] w-full text-center 
            font-extrabold tracking-tight opacity-10 pointer-events-none"
        >
          <motion.h1 className="uppercase m-0">Portfolio</motion.h1>
          <motion.h2 className="text-[29px] tracking-normal text-accent mb-[5rem] mt-[-1.3rem]">
            Olena Kukhar
          </motion.h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-lg md:text-base text-white max-w-xl"
        >
          👋 Hi! I'm Olena — a recent graduate in Applied Linguistics with a
          strong passion for technology and software development. I'm a skilled
          Junior Developer focused on both Frontend and Backend, proficient in
          building full-stack projects with React, Django, and FastAPI. <br />
          🧰 I have rich practical experience working on real-world projects and
          am well-versed in cloud technologies, DevOps practices, and
          infrastructure as code using AWS, Docker, and Terraform. <br />
          🤓 Self-organized and goal-driven, I continuously expand my skill set
          while delivering clean, maintainable code and effective solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: "easeOut" }}
          className="mt-6 flex gap-4"
        >
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            className="cursor-pointer px-6 py-2 border border-accent text-accent hover:bg-accent hover:text-black rounded-full transition duration-200"
          >
            To projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
