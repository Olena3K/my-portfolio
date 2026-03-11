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
          👋 Hi! I'm Olena — a Junior Python & Cloud Developer with a strong interest in
          cloud infrastructure, backend systems, and data engineering.
          
          I build and deploy applications using Python, Django, AWS, Docker, and Terraform,
          and work with CI/CD pipelines to automate deployments.
          
          My projects include cloud-based applications, infrastructure automation,
          and data-driven tools.
          
          Currently seeking a Junior role where I can contribute to building scalable
          backend, cloud, or data systems.
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
