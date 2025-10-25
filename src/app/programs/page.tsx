"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Shield,
  BookOpen,
  Award,
  CheckCircle,
  Users,
  TrendingUp,
  Stethoscope,
} from "lucide-react";
import Tag from "@/components/tag";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background mt-20">
      <div className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat h-[200px] relative overflow-hidden flex items-center justify-center">
        <div className="w-full h-full absolute top-0 bg-black/60"></div>
        <div className="container relative px-4">
          <h1 className="text-gray-100 text-5xl">Programs</h1>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 ">
          <div className="space-y-36">
            {/* Phlebotomy Program Details */}
            <div className="animate-fade-in">
              <div className="flex items-center gap-4 mb-8">
                <div className="container mx-auto text-start animate-fade-in flex gap-2 flex-col items-start">
                  <Tag>Phlebotomy Training Program</Tag>
                  <h2 className="text-4xl md:text-5xl font-semibold text-foreground max-w-3xl">
                    What Makes <span className="text-blue-700">Navida</span>’s
                    Phlebotomy Program Stand Out
                  </h2>
                  <p className="text-muted-foreground">
                    6-8 Weeks | Certification Preparation
                  </p>
                </div>
              </div>

              <div className="bg-[url('/images/phlebotomy_training.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full  rounded-xl relative overflow-hidden mb-8">
                <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Program Overview
                  </h3>

                  <p className="text-muted-foreground mb-4">
                    Our comprehensive Phlebotomy Training Program is designed to
                    prepare you for a rewarding career in healthcare as a
                    certified phlebotomy technician. Through a blend of
                    classroom instruction, interactive demonstrations, and
                    supervised hands-on training, you’ll gain the technical
                    expertise and professional confidence needed to excel in
                    clinical environments.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This program emphasizes both the science and art of
                    phlebotomy — teaching you how to properly identify patients,
                    select appropriate collection sites, and perform blood draws
                    with accuracy and care. You’ll also learn infection control,
                    safety procedures, specimen handling, and communication
                    skills essential for patient comfort and trust.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Phlebotomists play a crucial role across the healthcare
                    system, supporting doctors and laboratories in accurate
                    diagnostics and patient care. Career opportunities are
                    available in hospitals, diagnostic labs, blood donation
                    centers, and outpatient clinics — with demand for skilled
                    professionals steadily increasing nationwide.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    The Navida program is led by experienced healthcare
                    instructors who guide you through every step, from basic
                    techniques to advanced procedures. You’ll receive individual
                    mentorship, feedback, and access to real-world practice
                    scenarios designed to build your confidence.
                  </p>

                  <p className="text-muted-foreground">
                    Upon completion, you’ll be fully prepared to sit for
                    national certification exams and enter the workforce with
                    practical experience, industry knowledge, and a strong
                    foundation for lifelong career growth in healthcare.
                  </p>
                </div>

                <Card className="p-6 bg-blue-700 h-fit">
                  <h3 className="text-3xl text-white mb-4">
                    Course Curriculum
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Medical Terminology & Anatomy
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Understanding body systems, medical terminology, and
                        basic anatomy relevant to phlebotomy practice.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Blood Collection Techniques
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Venipuncture, capillary puncture, and proper specimen
                        collection methods for various test types.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Safety & Infection Control
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        OSHA regulations, standard precautions, and proper
                        disposal of biohazardous materials.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Patient Care & Communication
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Professional communication, patient identification, and
                        handling special populations.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Users className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Small Class Sizes
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Maximum 12 students per class for personalized attention and
                    hands-on practice
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <Stethoscope className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Clinical Externship
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Real-world experience in healthcare facilities with
                    supervised practice
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <TrendingUp className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Career Support
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Resume assistance, interview prep, and job placement support
                  </p>
                </Card>
              </div>
            </div>

            {/* Sterile Technology Program Details */}
            <div className="animate-fade-in-up">
              <div className="flex items-center gap-4 mb-8">
                <div className="container mx-auto text-start animate-fade-in flex gap-2 flex-col items-start">
                  <Tag>Sterile Processing Technology Program</Tag>
                  <h2 className="text-4xl md:text-5xl font-semibold text-foreground max-w-3xl">
                    Build a Rewarding Career in{" "}
                    <span className="text-blue-700">
                      Sterile Processing Technology
                    </span>
                  </h2>
                  <p className="text-muted-foreground">
                    12-16 Weeks | Comprehensive Training
                  </p>
                </div>
              </div>

              <div className="bg-[url('/images/sterile_technology.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full  rounded-xl relative overflow-hidden mb-8">
                <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Program Overview
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    The Sterile Processing Technology Program is designed to
                    equip students with the essential knowledge and hands-on
                    skills required to ensure patient safety and support
                    high-quality surgical care. Sterile processing technicians
                    play a crucial role in preventing infection by properly
                    cleaning, sterilizing, assembling, and distributing surgical
                    instruments and medical equipment.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Through a blend of classroom instruction, laboratory
                    simulations, and clinical practice, you’ll gain a deep
                    understanding of microbiology, infection control,
                    sterilization cycles, quality assurance, and inventory
                    management. The program emphasizes real-world
                    readiness—teaching you how to manage instrument trays, use
                    autoclaves, maintain surgical equipment, and follow strict
                    safety standards in the Central Sterile Supply Department
                    (CSSD).
                  </p>
                  <p className="text-muted-foreground mb-4">
                    In addition to technical training, students also develop
                    professional communication, teamwork, and problem-solving
                    skills—essential traits for working in fast-paced hospital
                    and surgical environments. Instructors bring years of
                    healthcare experience, ensuring that you not only learn
                    procedures but also understand the importance of precision
                    and accountability in patient care.
                  </p>
                  <p className="text-muted-foreground">
                    Upon completion, graduates are prepared to sit for national
                    certification exams such as the CRCST (Certified Registered
                    Central Service Technician) and enter the workforce in
                    hospitals, outpatient surgery centers, and medical
                    facilities. This program opens doors to a rewarding
                    healthcare career where every detail you manage contributes
                    directly to patient safety and surgical success.
                  </p>
                </div>

                <Card className="p-6 bg-blue-700 h-fit">
                  <h3 className="text-3xl text-white mb-4">
                    Course Curriculum
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Microbiology & Infection Control
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Understanding microorganisms, infection transmission,
                        and prevention strategies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Decontamination Processes
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Manual and automated cleaning, ultrasonic cleaning, and
                        proper decontamination procedures.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Sterilization Methods
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Steam, ethylene oxide, hydrogen peroxide, and other
                        sterilization technologies.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-blue-100" />
                        Surgical Instrumentation
                      </h4>
                      <p className="text-sm text-blue-300 ml-7">
                        Identification, assembly, and proper handling of
                        surgical instruments and equipment.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Comprehensive Training
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    In-depth study of all sterile processing areas and industry
                    best practices
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Certification Ready
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Preparation for national certification through IAHCSMM or
                    CBSPD
                  </p>
                </Card>
                <Card className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Hands-On Lab
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Practice with real surgical instruments and sterilization
                    equipment
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Healthcare Career?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful graduates who have launched rewarding
            careers in healthcare
          </p>
          <Button
            size="lg"
            className="text-lg bg-white text-blue-700 hover:bg-black hover:text-white px-8"
            onClick={() => {
              window.location.href = "/apply";
            }}
          >
            Apply Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default ProgramsPage;
