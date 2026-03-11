import ScrollReveal from "./ScrollReveal";

export default function Skills() {
  const skills = {
    Languages: ["Python", "JavaScript"],

    Backend: [
      "Django",
      "Django REST Framework",
      "FastAPI",
    ],

    "Cloud & DevOps": [
      "AWS (EC2, S3, ECR, VPC)",
      "Docker",
      "Terraform",
      "CI/CD (GitHub Actions)",
    ],

    "Databases & Data": [
      "SQL",
      "PostgreSQL",
      "SQLite",
      "REST APIs",
      "JSON",
    ],

    Frontend: [
      "React",
      "HTML",
      "CSS",
      "Chart.js",
    ],

    Tools: [
      "Git",
      "GitHub",
    ],
  };

  return (
    <section className="py-20 px-4">
      <h2 className="text-3xl font-semibold text-center mb-10 text-white">
        💻 Technical Skills
      </h2>

      <div className="max-w-5xl mx-auto">
        <ScrollReveal
          baseOpacity={0.2}
          enableBlur={true}
          baseRotation={0.1}
          blurStrength={6}
          rotationEnd="bottom bottom"
          wordAnimationEnd="bottom bottom"
        >
          <div className="grid md:grid-cols-2 gap-8 text-white text-lg">

            {Object.entries(skills).map(([category, items], i) => (
              <div key={i}>
                <h3 className="font-semibold text-xl mb-2 text-indigo-400">
                  {category}
                </h3>

                <ul className="space-y-1">
                  {items.map((item, j) => (
                    <li key={j}>
                      <span className="inline-block word">– {item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
