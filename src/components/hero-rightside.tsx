import Image from "next/image";

export default function HeroRightSide() {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:items-center lg:justify-center">
      {/* Left Column */}
      <div className="flex flex-col sm:flex-row md:flex-col gap-6 md:gap-10">
        {/* Image Card */}
        <div
          className="w-[330px] sm:w-[280px] md:w-[300px] h-[330px] sm:h-[280px] md:h-[300px] 
                     bg-blue-600 rounded-[20px] shadow-md relative overflow-hidden 
                     hover:scale-105 transition-all duration-300 ease-in-out"
          style={{
            backgroundImage: `url("/images/image1.jpg")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="bg-black/50 absolute inset-0"></div>
        </div>

        {/* Certified Graduates */}
        <div
          className="w-[330px] sm:w-[280px] md:w-[300px] h-[330px] sm:h-[280px] md:h-[300px] 
                     bg-gray-50 rounded-[20px] shadow-md flex items-end p-6 
                     hover:text-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          <div>
            <h1 className="text-5xl sm:text-6xl font-normal">27k+</h1>
            <p className="text-base sm:text-lg font-medium">
              Certified Graduates
            </p>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col sm:flex-row md:flex-col gap-6 md:gap-10 mt-6 md:mt-10">
        {/* Ongoing Trainees */}
        <div
          className="w-[330px] sm:w-[280px] md:w-[300px] h-[330px] sm:h-[280px] md:h-[300px] 
                     bg-gray-50 rounded-[20px] shadow-md flex items-end p-6 
                     hover:text-white hover:bg-blue-700 transition-all duration-300 ease-in-out"
        >
          <div>
            <h1 className="text-5xl sm:text-6xl font-normal">8k+</h1>
            <p className="text-base sm:text-lg font-medium">Ongoing Trainees</p>
          </div>
        </div>

        {/* Active Members */}
        <div
          className="w-[330px] sm:w-[280px] md:w-[300px] h-[330px] sm:h-[280px] md:h-[300px] 
                     bg-blue-50 rounded-[20px] shadow-md flex items-end p-6"
        >
          <div className="flex flex-col gap-2">
            <h1 className="text-5xl sm:text-6xl font-normal">8k+</h1>
            <p className="text-base sm:text-lg font-medium">Active Members</p>
            <div className="flex -space-x-2">
              <Image
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Student"
                width={40}
                height={40}
                className="rounded-full border-2 border-white sm:w-[50px] sm:h-[50px]"
              />
              <Image
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Student"
                width={40}
                height={40}
                className="rounded-full border-2 border-white sm:w-[50px] sm:h-[50px]"
              />
              <Image
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Student"
                width={40}
                height={40}
                className="rounded-full border-2 border-white sm:w-[50px] sm:h-[50px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
