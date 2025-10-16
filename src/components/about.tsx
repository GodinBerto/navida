import Tag from "./tag";
import { Button } from "./ui/button";

export default function About() {
  return (
    <div className="items-center justify-center flex py-20 mt-[1100px] sm:mt-[250px] lg:mt-0 md:mt-[250px]">
      <div className="container flex flex-col lg:flex-row gap-10 px-6 lg:px-12">
        {/* Image Section */}
        <div
          className="w-full  h-[500px] bg-cover bg-no-repeat bg-center rounded-xl relative overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url("/images/image1.jpg")`,
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <div className="max-w-3xl text-start mb-8 flex flex-col gap-4 items-start">
            <Tag>About Us</Tag>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Empowering Healthcare Professionals of Tomorrow
            </h2>
          </div>

          <div className="text-muted-foreground text-lg leading-relaxed space-y-4 max-w-7xl">
            <p>
              At Navida, we&apos;re passionate about empowering individuals to
              build successful careers in the healthcare industry. Through our
              comprehensive training programs in{" "}
              <span className="font-medium text-foreground">Phlebotomy</span>{" "}
              and{" "}
              <span className="font-medium text-foreground">
                Sterile Technology
              </span>
              , we provide students with the skills, knowledge, and confidence
              needed to excel in these essential fields.
            </p>
            <p>
              Our commitment extends beyond education — we strive to cultivate
              excellence, compassion, and professionalism in every student,
              preparing them for meaningful, impactful roles in healthcare
              facilities worldwide.
            </p>
          </div>

          <Button className="w-fit mt-10">Learn More</Button>
        </div>
      </div>
    </div>
  );
}
