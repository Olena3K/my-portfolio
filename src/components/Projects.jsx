import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "SmartJobAlertsBot",
      tech: [
        "Built with Python",
        "Integrated Telegram Bot API",
        "Implemented web scraping",
        "Deployed on AWS EC2",
      ],
      desc: "Telegram bot that scrapes job postings from work.ua and delivers them to users in real-time.",
      github: "https://github.com/Olena3K/JobSearchBot",
      demo: "https://t.me/SmartJobAlertsBot",
    },
    {
      title: "Cloud Infra EC2",
      tech: [
        "Developed Flask app",
        "Containerized with Docker",
        "Automated CI/CD with GitHub Actions",
        "Provisioned infrastructure using Terraform",
        "Monitored with CloudWatch",
        "Deployed on AWS EC2",
      ],
      desc: "Containerized Flask app with CI/CD pipeline, infrastructure-as-code, health monitoring, and AWS deployment.",
      github: "https://github.com/Olena3K/cloud-infra-ec2-rep",
    },
    {
      title: "Perfume E-Commerce (In Progress)",
      tech: [
        "Developed fullstack web app with React and Django REST",
        "Designed UI with Tailwind CSS",
        "Integrated PostgreSQL database",
        "Implemented filters and animations",
        "Enabled user auth",
        "Containerized with Docker",
        "Configured NGINX",
        "Deployed on AWS EC2",
      ],
      desc: "Multi-page perfume shop with filters, animations, user authentication, CI/CD, and deployment on AWS with Docker.",
    },
    {
      title: "Crypto Dashboard",
      tech: [
        "Built with Python and Streamlit",
        "Fetched data from CoinGecko API",
        "Visualized with Chart.js",
        "Styled using Tailwind CSS",
        "Managed local data with SQLite",
      ],
      desc: "Real-time cryptocurrency price dashboard using CoinGecko API with historical tracking and visualizations.",
      github: "https://github.com/Olena3K/crypto_dashboard",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 text-white">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((proj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ scale: 1.03 }}
            className="p-3 rounded-xl bg-[#f8ffe0] shadow-lg flex flex-col h-full shadow-md"
          >
            <h3 className="text-xl text-gray-800 text-2xl font-bold">
              {proj.title}
            </h3>
            <p className="text-gray-600 mb-4">{proj.desc}</p>
            <ul className="list-disc list-inside text-sm text-blue-600 mb-2">
              {proj.tech.map((techItem, idx) => (
                <li key={idx}>{techItem}</li>
              ))}
            </ul>
            <div className="mt-auto pt-4 flex gap-4">
              {proj.demo && (
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-gray-800 px-3 py-1 rounded hover:text-blue-600 text-sm"
                >
                  Link
                </a>
              )}
              {proj.github && (
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-gray-800 px-3 py-1 rounded hover:text-blue-600 text-sm"
                >
                  GitHub
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
