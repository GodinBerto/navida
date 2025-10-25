import ContactForm from "@/components/contact";
import { Target, Users, Clock, Scale } from "lucide-react";

export default function ContactUsPage() {
  const benefits = [
    {
      icon: <Target className="text-blue-500" size={28} />,
      title: "Improve Usability",
      description:
        "Enhance your product’s interface for smoother, more intuitive user experiences.",
    },
    {
      icon: <Users className="text-blue-500" size={28} />,
      title: "Engage Users",
      description:
        "Boost user engagement and outperform competitors through thoughtful interaction design.",
    },
    {
      icon: <Clock className="text-blue-500" size={28} />,
      title: "Reduce Onboarding Time",
      description:
        "Simplify user journeys to shorten onboarding and accelerate your sales conversions.",
    },
    {
      icon: <Scale className="text-blue-500" size={28} />,
      title: "Balance Goals",
      description:
        "Align user needs with your business objectives to achieve long-term growth and satisfaction.",
    },
  ];

  return (
    <div className="mt-20">
      <div className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat h-[200px] relative overflow-hidden flex items-center justify-center">
        <div className="w-full h-full absolute top-0 bg-black/60"></div>
        <div className="container relative">
          <h1 className="text-gray-100 text-5xl">Contact Us</h1>
        </div>
      </div>

      <ContactForm />
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
              With Our Services, You Can
            </h2>
            <p className="text-muted-foreground mt-3 text-base md:text-lg max-w-2xl mx-auto">
              Unlock your product’s full potential with a balance of usability,
              engagement, and business strategy.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition rounded-2xl p-6 flex flex-col items-start gap-4 text-left border border-gray-100"
              >
                <div className="bg-blue-50 p-3 rounded-full">{item.icon}</div>
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
