"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, BookOpen, Award, CheckCircle, Briefcase } from "lucide-react";
import Tag from "@/components/tag";

const ProgramsPage = () => {
  return (
    <div className="min-h-screen bg-background mt-20">
      <div className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat h-[200px] relative overflow-hidden flex items-center justify-center">
        <div className="w-full h-full absolute top-0 bg-black/60"></div>
        <div className="container relative px-4">
          <h1 className="text-gray-100 text-5xl px-4">Programs</h1>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-4 flex gap-10">
          <div className="space-y-36">
            {/* Sterile Technology Program Details */}
            <div className="animate-fade-in-up" id="central-sterile">
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
                    simulations, and clinical practice, you&apos;ll gain a deep
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
            {/* ------------------ BLS / CPR TRAINING ------------------ */}
            <div className="animate-fade-in" id="bls-cpr">
              <div className="flex items-center gap-4 mb-8">
                <div className="container mx-auto text-start animate-fade-in flex gap-2 flex-col items-start">
                  <Tag>BLS / CPR Training</Tag>
                  <h2 className="text-4xl md:text-5xl font-semibold text-foreground max-w-3xl">
                    Learn Life-Saving Skills with{" "}
                    <span className="text-blue-700">BLS & CPR Training</span>
                  </h2>
                  <p className="text-muted-foreground">
                    2-4 Weeks | American Heart Association Certification
                  </p>
                </div>
              </div>

              <div className="bg-[url('/images/cpr.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full  rounded-xl relative overflow-hidden mb-8">
                <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Program Overview
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our BLS/CPR Training Program provides the critical knowledge
                    and practical skills needed to save lives in emergency
                    situations. Designed for healthcare professionals, first
                    responders, and anyone committed to community safety, this
                    program offers hands-on instruction in CPR, AED operation,
                    and airway management under the supervision of certified
                    instructors.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Through realistic simulations and guided practice,
                    participants learn to perform high-quality CPR on adults,
                    children, and infants, recognize cardiac arrest early, and
                    respond confidently to choking and respiratory emergencies.
                    You&apos;ll also master the correct use of automated
                    external defibrillators (AEDs) and learn to coordinate
                    effectively during team-based resuscitations.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This comprehensive course follows the latest American Heart
                    Association (AHA) guidelines, ensuring you receive training
                    that meets national standards for Basic Life Support (BLS)
                    certification. Upon successful completion, you will earn an
                    AHA-approved certification card, demonstrating your
                    competence in life-saving procedures for both professional
                    and public settings.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Whether you are renewing your certification or training for
                    the first time, our BLS/CPR program blends theoretical
                    understanding with practical experience, empowering you to
                    act swiftly, confidently, and effectively when every second
                    counts.
                  </p>
                </div>

                <Card className="p-6 bg-blue-700 h-fit">
                  <h3 className="text-3xl text-white mb-4">Key Skills</h3>
                  <div className="space-y-4">
                    <ProgramSkill
                      title="Adult, Child & Infant CPR"
                      description="Perform CPR safely for all age groups."
                    />

                    <ProgramSkill
                      title="AED & Airway Management"
                      description="Operate AEDs and maintain clear airways."
                    />

                    <ProgramSkill
                      title="Emergency Response Coordination"
                      description="Respond quickly and work as a team."
                    />

                    <ProgramSkill
                      title="Team-Based Resuscitation"
                      description="Coordinate CPR roles for better outcomes."
                    />
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
                    Learn essential BLS and CPR techniques through guided,
                    hands-on instruction and real-world simulations.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    AHA Certification
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Earn an American Heart Association–approved certification
                    recognized by healthcare institutions nationwide.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Emergency Preparedness
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Build confidence to respond quickly and effectively in
                    cardiac and respiratory emergencies.
                  </p>
                </Card>
              </div>
            </div>

            {/* ------------------ PHLEBOTOMY & EKG TRAINING ------------------ */}
            <div className="animate-fade-in-up" id="phlebotomy-ekg">
              <div className="flex items-center gap-4 mb-8">
                <div className="container mx-auto text-start animate-fade-in flex gap-2 flex-col items-start">
                  <Tag>Phlebotomy & EKG Training</Tag>
                  <h2 className="text-4xl md:text-5xl font-semibold text-foreground max-w-3xl">
                    Dual Skill Training in{" "}
                    <span className="text-blue-700">Phlebotomy & EKG</span>
                  </h2>
                  <p className="text-muted-foreground">
                    10-12 Weeks | Dual Certification Preparation
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
                    This comprehensive dual training program integrates two
                    essential healthcare disciplines — Phlebotomy and
                    Electrocardiography (EKG). Students gain the technical and
                    interpersonal skills required to collect blood specimens
                    accurately and perform diagnostic EKG procedures with
                    confidence. The curriculum emphasizes safety, precision, and
                    professionalism in every step of patient care.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Through interactive classroom instruction and hands-on lab
                    practice, participants learn venipuncture techniques,
                    specimen processing, infection control, and EKG lead
                    placement. They will also interpret cardiac rhythms,
                    identify abnormalities, and understand the basics of
                    cardiovascular physiology to support clinical
                    decision-making.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    This program prepares graduates for immediate employment in
                    hospitals, outpatient centers, and diagnostic laboratories.
                    Upon completion, students become eligible for national
                    certification exams in both Phlebotomy and EKG,
                    significantly enhancing their employability and career
                    advancement opportunities.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Whether you’re starting a new career in healthcare or adding
                    to your professional qualifications, the Phlebotomy and EKG
                    Training Program provides the knowledge, confidence, and
                    credentials to succeed in a fast-paced medical environment.
                  </p>
                </div>

                <Card className="p-6 bg-blue-700 h-fit">
                  <h3 className="text-3xl text-white mb-4">Course Topics</h3>
                  <div className="space-y-4">
                    <ProgramSkill
                      title="Venipuncture Techniques"
                      description="Learn accurate and safe blood collection methods through guided practice in various clinical settings."
                    />

                    <ProgramSkill
                      title="EKG Operation & Interpretation"
                      description="Operate EKG equipment confidently and interpret basic cardiac rhythms under professional supervision."
                    />

                    <ProgramSkill
                      title="Specimen Handling & Safety"
                      description="Gain essential skills in labeling, transporting, and storing specimens while following strict safety standards."
                    />

                    <ProgramSkill
                      title="Clinical Practice Experience"
                      description="Apply your classroom knowledge in real healthcare environments with hands-on clinical training."
                    />
                  </div>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <BookOpen className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Dual Skill Development
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Gain expertise in both phlebotomy and EKG operation to
                    increase your value in the healthcare field.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    National Certification
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Prepare for national exams and earn dual credentials to
                    enhance your career opportunities.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Clinical Experience
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Practice in supervised healthcare environments to build
                    real-world skills and confidence.
                  </p>
                </Card>
              </div>
            </div>

            {/* ------------------ SECURITY GUARD TRAINING ------------------ */}
            <div className="animate-fade-in-up" id="security-guard">
              <div className="flex items-center gap-4 mb-8">
                <div className="container mx-auto text-start animate-fade-in flex gap-2 flex-col items-start">
                  <Tag>Security Guard Training</Tag>
                  <h2 className="text-4xl md:text-5xl font-semibold text-foreground max-w-3xl">
                    Launch Your Career in{" "}
                    <span className="text-blue-700">Security & Protection</span>
                  </h2>
                  <p className="text-muted-foreground">
                    6-8 Weeks | State Licensing Preparation
                  </p>
                </div>
              </div>

              <div className="bg-[url('/images/security.jpg')] bg-cover bg-center bg-no-repeat h-64 md:h-[350px] w-full rounded-xl relative overflow-hidden mb-8">
                <div className="bg-black/50 absolute inset-0 rounded-xl"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Program Overview
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Our Security Guard Training Program provides a complete and
                    immersive foundation for individuals aspiring to build a
                    successful career in both public and private security
                    sectors. The program goes beyond the basics to develop
                    critical thinking, situational awareness, and effective
                    communication—essential traits for maintaining safety and
                    order in dynamic environments.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Through a balanced blend of classroom instruction and
                    practical field exercises, students gain a strong
                    understanding of legal responsibilities, ethical conduct,
                    patrol and surveillance techniques, access control,
                    emergency response, and incident management. Training also
                    includes conflict de-escalation, report writing, observation
                    and assessment skills, and the proper use of security
                    technology and communication equipment.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Students will engage in realistic simulations that mirror
                    real-world scenarios, helping them build confidence in
                    handling various situations, from crowd control and theft
                    prevention to medical and fire emergencies. The program
                    fosters discipline, professionalism, and teamwork—qualities
                    that set graduates apart in the industry.
                  </p>

                  <p className="text-muted-foreground mb-4">
                    Upon completion, graduates are prepared to take state
                    licensing exams and pursue entry-level roles in corporate
                    security, healthcare facilities, residential complexes,
                    retail establishments, and event management. Equipped with
                    comprehensive skills and ethical grounding, they emerge
                    ready to protect people, property, and peace of mind with
                    confidence and integrity.
                  </p>
                </div>

                <Card className="p-6 bg-blue-700 h-fit">
                  <h3 className="text-3xl text-white mb-4">Key Skills</h3>
                  <div className="space-y-4">
                    <ProgramSkill
                      title="Legal Responsibilities & Ethics"
                      description="Understand security laws, use-of-force limitations, and ethical decision-making to ensure lawful and professional conduct on duty."
                    />

                    <ProgramSkill
                      title="Patrol & Surveillance Methods"
                      description="Learn effective patrolling techniques, observation skills, and the use of surveillance systems to identify and prevent potential threats."
                    />

                    <ProgramSkill
                      title="Emergency Response Training"
                      description="Develop the ability to respond swiftly and safely to fires, medical emergencies, and security breaches while coordinating with first responders."
                    />

                    <ProgramSkill
                      title="Professional Conduct & Reporting"
                      description="Build strong communication and report-writing skills to document incidents accurately and maintain professionalism in all situations."
                    />
                  </div>
                </Card>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6 text-center">
                  <Shield className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Comprehensive Security Training
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Learn essential skills in patrol operations, surveillance,
                    access control, and conflict management to handle real-world
                    security challenges.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Award className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    State Licensing Preparation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Prepare for state-mandated security guard exams and
                    certifications with hands-on lessons that meet professional
                    standards.
                  </p>
                </Card>

                <Card className="p-6 text-center">
                  <Briefcase className="h-10 w-10 text-primary mx-auto mb-3" />
                  <h4 className="font-bold text-foreground mb-2">
                    Career-Ready Experience
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Build confidence through simulated scenarios and field
                    practice, equipping you for roles in corporate, event, and
                    public safety sectors.
                  </p>
                </Card>
              </div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 shadow-md w-full h-fit sticky top-40 mt-46 hidden lg:flex flex-col">
            <h3 className="text-lg font-semibold mb-4 text-foreground">
              Programs
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#bls-cpr"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  BLS / CPR Training
                </a>
              </li>
              <li>
                <a
                  href="#phlebotomy-ekg"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  Phlebotomy and EKG
                </a>
              </li>
              <li>
                <a
                  href="#central-sterile"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  Central Sterile Processing Training
                </a>
              </li>
              <li>
                <a
                  href="#security-guard"
                  className="text-primary hover:underline hover:text-primary/80 transition-colors"
                >
                  Security Guard Training
                </a>
              </li>
            </ul>
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

// Small helper component for repeated skill blocks
function ProgramSkill({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <div>
      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
        <CheckCircle className="h-5 w-5 text-blue-100" />
        {title}
      </h4>
      {description && (
        <p className="text-sm text-blue-300 ml-7">{description}</p>
      )}
    </div>
  );
}
