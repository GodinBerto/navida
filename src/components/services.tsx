import { Briefcase, GraduationCap, Handshake } from "lucide-react";
import Tag from "./tag";

export default function ServiceSection() {
  return (
    <section className="py-20 flex justify-center items-center">
      <div className="container px-4">
        {/* Header */}
        <div className="max-w-3xl text-start mb-16 animate-fade-in flex gap-5 flex-col items-start">
          <Tag>Services</Tag>
          <h2 className="text-3xl md:text-5xl font-semibold text-foreground">
            Our Professional Services
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            We offer healthcare recruitment, training, and support services that
            empower individuals and organizations to achieve excellence in care
            delivery.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col">
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10 mb-10">
            <div className="bg-[url('/images/center_training.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full md:w-[70%] rounded-xl relative overflow-hidden">
              <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
            </div>
            <div className="bg-blue-700 rounded-xl flex flex-col p-6 gap-6 relative overflow-hidden flex-1 md:min-w-[360px]">
              <GraduationCap
                size={180}
                className="text-blue-600/80 absolute top-0 right-0 opacity-30"
              />
              <div className="rounded-full border border-blue-600 h-12 w-12 flex justify-center items-center">
                <GraduationCap size={28} className="text-blue-300" />
              </div>
              <h1 className="text-xl md:text-2xl text-white relative">
                Phlebotomy & Sterile Technology Training
              </h1>
              <p className="text-blue-300 text-base md:text-lg relative">
                Gain professional certification through in-depth phlebotomy and
                sterile processing programs focused on practical skills and
                industry-standard sterilization protocols.
              </p>
            </div>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col md:flex-row-reverse w-full gap-6 md:gap-10 mb-10">
            <div className="bg-[url('/images/healthcare_training.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full md:w-[70%] rounded-xl relative overflow-hidden">
              <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
            </div>
            <div className="bg-blue-700 rounded-xl flex flex-col p-6 gap-6 relative overflow-hidden flex-1 md:min-w-[360px]">
              <Briefcase
                size={180}
                className="text-blue-600/80 absolute top-0 right-0 opacity-30"
              />
              <div className="rounded-full border border-blue-600 h-12 w-12 flex justify-center items-center">
                <Briefcase size={28} className="text-blue-300" />
              </div>
              <h1 className="text-xl md:text-2xl text-white relative">
                Healthcare Recruitment
              </h1>
              <p className="text-blue-300 text-base md:text-lg relative">
                Connecting talented healthcare professionals with top hospitals
                and clinics. Empowering careers while enhancing the quality of
                patient care.
              </p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row w-full gap-6 md:gap-10">
            <div className="bg-[url('/images/placement_support.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full md:w-[70%] rounded-xl relative overflow-hidden">
              <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
            </div>
            <div className="bg-blue-700 rounded-xl flex flex-col p-6 gap-6 relative overflow-hidden flex-1 md:min-w-[360px]">
              <Handshake
                size={180}
                className="text-blue-600/80 absolute top-0 right-0 opacity-30"
              />
              <div className="rounded-full border border-blue-600 h-12 w-12 flex justify-center items-center">
                <Handshake size={28} className="text-blue-300" />
              </div>
              <h1 className="text-xl md:text-2xl text-white relative">
                Career Placement Support
              </h1>
              <p className="text-blue-300 text-base md:text-lg relative">
                Personalized job placement assistance, resume building, and
                interview preparation for graduates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
