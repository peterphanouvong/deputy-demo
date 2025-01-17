import React from "react";
import { X } from "lucide-react";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner */}
      <div className="bg-indigo-700 text-white py-4 px-4 flex justify-center items-center">
        <div className="text-sm text-center">
          Free ebooks: Uncomplicate your profitability in 2025 with this 3-part
          Cost Saving Series
          <a href="#" className="underline ml-2">
            Download now
          </a>
        </div>
        <button className="ml-4">
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-6 flex items-center justify-between border-b max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-indigo-900">deputy*</div>
          <div className="hidden md:flex space-x-6">
            <button className="text-gray-600">Product</button>
            <button className="text-gray-600">Industries</button>
            <button className="text-gray-600">Pricing</button>
            <button className="text-gray-600">Resources</button>
          </div>
        </div>
        <div className="flex items-center space-x-6 ">
          <LoginLink className="text-indigo-800 font-semibold">
            Log in
          </LoginLink>
          <button className="text-indigo-800 bg-indigo-50 px-4 py-2 rounded-lg font-semibold">
            Book a demo
          </button>
          <button className="bg-indigo-800 text-white px-4 py-2 rounded-lg font-semibold">
            Start my free trial
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#2D2654] min-h-[600px]">
        <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between">
          {/* Left Column */}
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="font-cursive text-yellow-400 text-4xl md:text-5xl mb-4">
              Happier teams
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">start here</h2>
            <p className="text-xl mb-8">
              Roster staff with ease, simplify timesheets and manage HR without
              the paperwork.
            </p>
            <button className="bg-teal-400 text-indigo-900 px-6 py-3 rounded-lg font-medium mb-4">
              Try Deputy for free
            </button>
            <p className="text-sm text-gray-300">
              Up to 31 days, no credit card required
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="md:w-1/2">
            <div className="rounded-3xl overflow-hidden">
              <img
                src="/api/placeholder/800/600"
                alt="Deputy employee management"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <StatsSection />

      <div className="mt-20">
        <div className="flex gap-4 mx-auto max-w-7xl">
          <Button asChild>
            <LoginLink orgCode="org_9f04a44d036">Bondi Vet</LoginLink>
          </Button>
          <Button asChild>
            <LoginLink orgCode="org_307d9325a09">F45</LoginLink>
          </Button>
          <Button asChild>
            <LoginLink orgCode="org_64996637a81">Messina</LoginLink>
          </Button>
        </div>
      </div>
    </div>
  );
};

const StatsSection = () => {
  const stats = [
    {
      label: "Used in",
      value: "100+",
      description: "countries",
    },
    {
      label: "Supporting",
      value: "380,000+",
      description: "workplaces",
    },
    {
      label: "Loved by",
      value: "1.4 million",
      description: "shift workers",
    },
    {
      label: "Over",
      value: "700 million",
      description: "shifts scheduled",
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="relative">
              {/* Vertical divider line */}
              {index < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 top-0 h-full w-px bg-gray-200" />
              )}

              <div className="text-center md:text-left">
                <div className="text-gray-600 text-lg mb-2">{stat.label}</div>
                <div className="text-indigo-900 text-4xl font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-lg">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
