import { GraduationCap, Users, Stethoscope, Award } from "lucide-react";
import Tag from "./tag";

const Mission = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Expert Instruction",
      description: "Learn from experienced healthcare professionals",
    },
    {
      icon: Stethoscope,
      title: "Hands-On Training",
      description: "State-of-the-art equipment and practical experience",
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Personalized job placement assistance",
    },
    {
      icon: Award,
      title: "Healthcare Partnerships",
      description: "Strong connections with top healthcare facilities",
    },
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in flex gap-5 flex-col items-center">
          <Tag>Mission</Tag>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Our mission is to provide high-quality training and recruitment
            services that meet the evolving needs of the healthcare industry.
            We&apos;re committed to fostering a supportive learning environment
            that encourages growth, innovation, and excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white text-start hover:shadow-card transition-all duration-300 animate-fade-in-up border-border border-[1px] rounded-xl hover:bg-blue-700 group h-[350px] flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl mb-4 group-hover:text-white bg-blue-100 group-hover:bg-button-primary">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-white">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-gray-200">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
