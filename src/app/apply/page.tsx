"use client";

import { useForm, UseFormRegister } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import Tag from "@/components/tag";
import { Button } from "@/components/ui/button";

/* ✅ Zod schema */
const baseFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  applicationType: z
    .enum(["training", "recruitment-home", "recruitment-worker"])
    .refine((val) => !!val, { message: "Please select an application type" }),
  message: z.string().min(10, "Please provide at least 10 characters"),
  program: z.string().optional(),
  educationLevel: z.string().optional(),
  startDate: z.string().optional(),
  agencyName: z.string().optional(),
  positionsNeeded: z.string().optional(),
  jobType: z.string().optional(),
  facilityType: z.string().optional(),
});

type ApplicationFormValues = z.infer<typeof baseFormSchema>;

export default function ApplicationPage() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<ApplicationFormValues>({
    resolver: zodResolver(baseFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const selectedType = watch("applicationType");

  const onSubmit = (data: ApplicationFormValues) => {
    console.log("Application submitted:", data);
    alert("Application submitted successfully!");
    reset();
  };

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="mt-20">
      {/* Header */}
      <div className="bg-[url('/images/about.jpg')] bg-cover bg-center bg-no-repeat h-[200px] relative overflow-hidden flex items-center justify-center">
        <div className="w-full h-full absolute top-0 bg-black/60" />
        <div className="container relative">
          <h1 className="text-gray-100 text-5xl px-4">Apply Now</h1>
        </div>
      </div>

      {/* Main */}
      <main className="pt-10 px-4">
        <div className="container mx-auto py-12 px-4">
          <div className="flex gap-5 flex-col items-start max-w-4xl mb-10">
            <Tag>Application Form</Tag>
            <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
              Expand your healthcare business partnering with{" "}
              <span className="text-blue-700">Navida</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Join the Navida network and grow your healthcare staffing with
              access to more deliveries, increased earnings, and seamless
              operations.
            </p>
          </div>

          {/* Layout */}
          <div className="grid lg:grid-cols-2 gap-10">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {[
                {
                  id: "faq1",
                  question: "How do I become a Navida healthcare partner?",
                  answer:
                    "Simply fill out the application form with your details and the type of partnership you're interested in. Our team will review your application and get back to you within 24-48 hours.",
                },
                {
                  id: "faq2",
                  question:
                    "What type of training programs will I be handling?",
                  answer:
                    "You'll be working with our Phlebotomy and Sterile Processing Technology training programs, including e-commerce courses, certification preparation, and hands-on clinical experience.",
                },
                {
                  id: "faq3",
                  question: "What are the requirements to join?",
                  answer:
                    "Requirements vary by partnership type. For training applications, you'll need a high school diploma or equivalent. For recruitment partnerships, we look for established healthcare agencies with proper licensing and insurance.",
                },
                {
                  id: "faq4",
                  question: "How do I receive placement requests?",
                  answer:
                    "Once approved as a partner, you'll receive placement requests through our partner portal and email notifications.",
                },
              ].map((faq) => (
                <div
                  key={faq.id}
                  className="border border-border rounded-lg bg-white overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    className="w-full flex justify-between items-center px-5 py-4 text-left font-medium hover:bg-gray-100"
                  >
                    {faq.question}
                    <span>{openFAQ === faq.id ? "−" : "+"}</span>
                  </button>
                  {openFAQ === faq.id && (
                    <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>

            {/* Application Form */}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white p-8 rounded-lg border border-border space-y-5"
            >
              {/* Application Type */}
              <SelectField
                label="Application Type"
                name="applicationType"
                register={register}
                options={[
                  ["", "Select application type"],
                  ["training", "Training Application"],
                  ["recruitment-home", "Recruitment for Home Agency"],
                  ["recruitment-worker", "Recruit Workers for Agency"],
                ]}
                error={errors.applicationType?.message}
              />

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4">
                <TextField
                  label="Contact Name"
                  name="name"
                  register={register}
                  error={errors.name?.message}
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  register={register}
                  error={errors.phone?.message}
                />
              </div>

              <TextField
                label="Email Address"
                name="email"
                type="email"
                register={register}
                error={errors.email?.message}
              />

              {/* Conditional Fields */}
              {selectedType === "training" && (
                <>
                  <SelectField
                    label="Program of Interest"
                    name="program"
                    register={register}
                    options={[
                      ["phlebotomy", "Phlebotomy Training"],
                      ["sterile", "Sterile Processing Technology"],
                      ["both", "Both Programs"],
                    ]}
                  />
                  <SelectField
                    label="Highest Education Level"
                    name="educationLevel"
                    register={register}
                    options={[
                      ["high-school", "High School Diploma/GED"],
                      ["some-college", "Some College"],
                      ["associate", "Associate Degree"],
                      ["bachelor", "Bachelor’s Degree"],
                      ["higher", "Graduate Degree"],
                    ]}
                  />
                  <SelectField
                    label="Preferred Start Date"
                    name="startDate"
                    register={register}
                    options={[
                      ["immediate", "As soon as possible"],
                      ["1-month", "Within 1 month"],
                      ["2-3-months", "2–3 months"],
                      ["flexible", "Flexible"],
                    ]}
                  />
                </>
              )}

              {selectedType === "recruitment-home" && (
                <>
                  <TextField
                    label="Home Agency Name"
                    name="agencyName"
                    register={register}
                  />
                  <SelectField
                    label="Number of Positions to Fill"
                    name="positionsNeeded"
                    register={register}
                    options={[
                      ["1-5", "1–5 positions"],
                      ["6-10", "6–10 positions"],
                      ["11-20", "11–20 positions"],
                      ["20+", "20+ positions"],
                    ]}
                  />
                  <SelectField
                    label="Type of Positions"
                    name="jobType"
                    register={register}
                    options={[
                      ["phlebotomist", "Phlebotomist"],
                      ["sterile-tech", "Sterile Processing Technician"],
                      ["both", "Both"],
                      ["other", "Other Healthcare Positions"],
                    ]}
                  />
                </>
              )}

              {selectedType === "recruitment-worker" && (
                <>
                  <TextField
                    label="Agency/Facility Name"
                    name="agencyName"
                    register={register}
                  />
                  <SelectField
                    label="Facility Type"
                    name="facilityType"
                    register={register}
                    options={[
                      ["hospital", "Hospital"],
                      ["clinic", "Clinic"],
                      ["lab", "Laboratory"],
                      ["surgical-center", "Surgical Center"],
                      ["other", "Other"],
                    ]}
                  />
                  <SelectField
                    label="Number of Workers Needed"
                    name="positionsNeeded"
                    register={register}
                    options={[
                      ["1-5", "1–5 workers"],
                      ["6-10", "6–10 workers"],
                      ["11-20", "11–20 workers"],
                      ["20+", "20+ workers"],
                    ]}
                  />
                  <SelectField
                    label="Position Type"
                    name="jobType"
                    register={register}
                    options={[
                      ["phlebotomist", "Phlebotomist"],
                      ["sterile-tech", "Sterile Processing Technician"],
                      ["both", "Both"],
                      ["other", "Other Healthcare Positions"],
                    ]}
                  />
                </>
              )}

              {/* Message */}
              <TextAreaField
                label="Message / Additional Details"
                name="message"
                register={register}
                error={errors.message?.message}
              />

              {/* Submit */}
              <Button
                type="submit"
                className="w-full font-semibold py-3 rounded-lg transition"
              >
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

/* ✅ Type-safe helper components */
type FieldProps<T extends keyof ApplicationFormValues> = {
  name: T;
  label: string;
  register: UseFormRegister<ApplicationFormValues>;
  type?: string;
  error?: string;
};

function TextField<T extends keyof ApplicationFormValues>({
  label,
  name,
  type = "text",
  register,
  error,
}: FieldProps<T>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        {...register(name)}
        className="w-full border border-border rounded-lg px-3 py-2 bg-gray-50"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function SelectField<T extends keyof ApplicationFormValues>({
  label,
  name,
  register,
  options,
  error,
}: FieldProps<T> & { options: [string, string][] }) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        {...register(name)}
        className="w-full border border-border rounded-lg px-3 py-2 bg-gray-50"
      >
        {options.map(([value, label]) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TextAreaField<T extends keyof ApplicationFormValues>({
  label,
  name,
  register,
  error,
}: FieldProps<T>) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        {...register(name)}
        className="w-full border border-border rounded-lg px-3 py-2 bg-gray-50 min-h-[100px]"
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
