import { Award, BookPlus, Handshake, MessageCircle } from "lucide-react";
import Link from "next/link";

export default function JoinCommunity() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row w-full h-auto md:h-[700px]">
        {/* Text Section */}
        <div className="flex items-center justify-end bg-blue-700 px-6 md:px-10 w-full md:w-1/2 py-10 md:py-0 relative overflow-hidden">
          <div className="absolute -top-[350px] rounded-full -left-[40%] w-[700px] h-[700px] bg-transparent border-[40px] border-blue-500/30"></div>
          <div className="absolute -bottom-[600px] rounded-full -left-[440px] w-[700px] h-[700px] bg-transparent border-[40px] border-blue-500/30 hidden lg:block"></div>
          <div className="absolute -bottom-[200px] rounded-full -right-[30%] w-[500px] h-[500px] bg-transparent border-[30px] border-blue-500/30"></div>
          <div className="text-end animate-fade-in flex flex-col gap-5 items-end text-white max-w-[600px] relative">
            <h2 className="text-4xl md:text-5xl font-semibold max-w-[400px]">
              Join Our Community
            </h2>

            <p className="text-lg leading-relaxed text-right">
              Connect with passionate healthcare professionals, exchange ideas,
              and unlock opportunities for growth, collaboration, and continuous
              learning.
            </p>

            <ul className="text-right space-y-2 mt-2">
              <ul className="space-y-2 mt-6">
                {[
                  {
                    icon: Handshake,
                    text: "Access to exclusive networking events",
                  },
                  {
                    icon: BookPlus,
                    text: "Free learning materials and webinars",
                  },
                  {
                    icon: MessageCircle,
                    text: "Private mentorship and discussion groups",
                  },
                  {
                    icon: Award,
                    text: "Early access to job and training opportunities",
                  },
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 border border-white/10 p-2 rounded-xl transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-tr from-indigo-500/20 to-blue-500/20 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm md:text-base text-white/80 font-medium">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </ul>

            <Link
              href="/apply"
              className="mt-6 inline-block bg-button-primary text-white font-semibold px-6 py-3 rounded-full hover:bg-button-primary/80 transition"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 h-[300px] md:h-auto bg-[url('/images/community.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
      </div>
    </section>
  );
}
