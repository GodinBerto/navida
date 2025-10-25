"use client";

import { useState } from "react";
import Checkbox from "./ui/checkbox";
import Tag from "./tag";

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState("standard");

  const plans = [
    {
      id: "standard",
      name: "Standard",
      price: "$29/month",
      note: "Save 20%",
      description: "Best for individuals and small startups.",
    },
    {
      id: "pro",
      name: "Pro",
      price: "$59/month",
      note: "Most Popular",
      description: "Ideal for growing teams needing more features.",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "$99/month",
      note: "Custom Support",
      description: "Perfect for large organizations and enterprises.",
    },
  ];

  const includes = [
    "Unlimited projects",
    "24/7 customer support",
    "Team collaboration tools",
    "Advanced analytics",
    "Secure cloud storage",
  ];

  return (
    <section
      className="py-16 bg-gray-50 flex justify-center items-center flex-col"
      id="pricing"
    >
      <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in flex gap-5 flex-col items-center">
        <Tag>Pricing</Tag>
        <h2 className="text-4xl md:text-5xl font-semibold text-foreground">
          Flexible Plans for Every Need
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Choose the plan that fits your goals — whether you&apos;re just
          getting started or scaling your business. Our transparent pricing
          ensures you only pay for what you need, with no hidden fees or
          surprises.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 w-full container px-4">
        {/* Pricing Plans */}
        <div className="flex flex-col gap-4 w-full lg:w-2/3">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.id;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                className={`border border-gray-200 rounded-xl flex items-center justify-between w-full p-5 cursor-pointer transition-all relative
                  ${
                    isSelected
                      ? "bg-blue-700 text-white"
                      : "hover:bg-blue-700 hover:text-white"
                  }`}
              >
                <div className="flex gap-6 items-center">
                  <Checkbox
                    checked={isSelected}
                    onChange={() => setSelectedPlan(plan.id)}
                    label=""
                  />
                  <div className="flex flex-col gap-1">
                    <h1 className="text-lg font-semibold">{plan.name}</h1>
                    <p
                      className={`text-sm px-2 py-0.5 rounded-full w-fit ${
                        isSelected
                          ? "bg-white text-blue-700"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {plan.note}
                    </p>
                    <p
                      className={`text-sm ${
                        isSelected
                          ? "text-blue-100 hover:text-blue-100"
                          : "text-gray-500"
                      }`}
                    >
                      {plan.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-semibold">{plan.price}</h1>
                </div>
              </div>
            );
          })}
        </div>

        {/* Includes Section */}
        <div className="w-full lg:w-1/3 bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            All Plans Include:
          </h2>
          <ul className="space-y-2">
            {includes.map((item, idx) => (
              <li
                key={idx}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <svg
                  className="w-4 h-4 text-blue-700"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
