import { FlaskConical, Syringe } from "lucide-react";
import Tag from "./tag";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export default function Programs() {
  const programs = [
    {
      icon: Syringe,
      title: "Phlebotomy Training",
      image: "/images/phlebotomy_training.jpg",
      description:
        "Master the art of blood collection with comprehensive training in venipuncture techniques, patient care, and laboratory procedures. Our program prepares you for certification and immediate employment.",
      highlights: [
        "Comprehensive venipuncture training",
        "Patient interaction skills",
        "Laboratory safety protocols",
        "Certification preparation",
      ],
    },
    {
      icon: FlaskConical,
      title: "Sterile Technology",
      image: "/images/sterile_technology.jpg",
      description:
        "Learn essential sterile processing techniques for surgical instruments and medical equipment. Gain expertise in decontamination, sterilization, and quality assurance procedures.",
      highlights: [
        "Sterilization techniques",
        "Surgical instrument processing",
        "Infection control practices",
        "Quality assurance standards",
      ],
    },
  ];

  return (
    <section className="py-20 flex justify-center px-4">
      <div className="container">
        <div className="max-w-3xl text-start mb-16 animate-fade-in flex gap-5 flex-col items-start">
          <Tag>Services</Tag>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Our Professional Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We provide a comprehensive range of healthcare recruitment,
            training, and support services designed to meet the needs of both
            individuals and organizations. From skill development to workforce
            placement, our services empower clients to achieve excellence in
            every aspect of healthcare delivery.
          </p>
        </div>

        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-card transition-all duration-300 animate-fade-in-up rounded-2xl flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div>
                  <div
                    className={`w-full h-[200px] bg-cover bg-no-repeat bg-center rounded-2xl mb-6 relative overflow-hidden`}
                    style={{ backgroundImage: `url(${program.image})` }}
                  >
                    <div className="bg-black/40 absolute top-0 w-full h-full"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {program.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {program.description}
                  </p>
                </div>

                <ul className="space-y-2 mb-6">
                  {program.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="inline-block w-2 h-2 rounded-full bg-accent mt-2"></span>
                      <span className="text-foreground">{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div>
                  <div className="flex justify-between items-center">
                    <div className="bg-gray-100 shadow-inner rounded-lg p-2 mb-4 w-fit">
                      <h4 className="text-md text-gray-500">GHS 1,000</h4>
                    </div>

                    <div>
                      <p>1 month</p>
                    </div>
                  </div>

                  <Button
                    className="w-full  hover:opacity-90 transition-opacity"
                    onClick={() => (window.location.href = "/apply")}
                  >
                    Apply Now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
