import About from "@/components/about";
import Mission from "@/components/mission";
import ServiceSection from "@/components/services";

export default function AboutUsPage() {
  return (
    <div className="mt-20">
      <div>
        <div className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat h-[200px] relative overflow-hidden flex items-center justify-center">
          <div className="w-full h-full absolute top-0 bg-black/60"></div>
          <div className="container relative">
            <h1 className="text-gray-100 text-5xl">About Navida</h1>
          </div>
        </div>
        <About />
        <Mission />
        <ServiceSection />
      </div>
    </div>
  );
}
