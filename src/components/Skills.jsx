import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const skills = [
    "Python (Advanced)",
    "Django & Django REST Framework",
    "React.js",
    "HTML5, CSS3 & Tailwind CSS",
    "PostgreSQL & SQLite",
    "Docker & DockerHub",
    "CI/CD (GitHub Actions)",
    "AWS (EC2, S3, ECR, VPC)",
    "Git & GitHub",
    "FastAPI (Basics)",
    "TypeScript (Basics)",
    "SDLC",
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 text-white">
        💻 Technical Skills
      </h2>

      <div className="flex flex-col md:flex-row justify-between max-w-6xl ml-[30px] mx-auto">
        <div className="md:w-1/2">
          <ScrollReveal
            baseOpacity={0.2}
            enableBlur={true}
            baseRotation={0.1}
            blurStrength={6}
            rotationEnd="bottom bottom"
            wordAnimationEnd="bottom bottom"
          >
            <ul className="list-none text-left space-y-2 text-white text-lg">
              {skills.map((skill, i) => (
                <li key={i}>
                  <span className="inline-block word"> – {skill}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* Тут буде або пусто, або анімація */}
        </div>
      </div>
    </section>
  );
}
