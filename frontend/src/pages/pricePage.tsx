import React from 'react'
import Header from '../components/commen/header'
import './PricingPage.css'
import nonSelect from '../assets/Frame 18.png'
import selected from '../assets/Frame 16.png'
import Footer from '../components/commen/footer'

const PricingPage = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen relative overflow-hidden text-white ">
        {/* Background Image */}
        <div className="pricing-background"></div>
        <div className="absolute inset-0 bg-opacity-70 z-10"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-[120px] md:pt-[200px] text-center px-4">
            <div className="p-2 bg-gray-600 rounded-full">
                <h4 className="text-center text-[10px] font- text-white">Bring your business to the best scale</h4>
                </div>
          <div className="text-4xl md:text-6xl font-[Montserrat] mb-4 leading-tight">
            <h3>Discover Services   With</h3>
            <h3>the Best Pricing</h3>
          </div>
          <h4>Select from best plan, ensuring a perfect match.</h4>
          <h4>
            Need more or less? Customize your subscription for a seamless fit!
          </h4>
        </div>

        <div className="custom-flex-wrapper mb-14">
          {[
            {
              title: "Basic",
              description: "Best for personal use.",
              price: 100,
              selected: false,
              icon: nonSelect,
              features: [
                "Employee directory",
                "Task management",
                "Email support",
                "Project tracking",
                "Basic analytics",
                "Cloud backup",
              ],
            },
            {
              title: "Pro",
              description: "Perfect for growing teams.",
              price: 200,
              selected: true,
              icon: selected,
              features: [
                "Employee directory",
                "Task management",
                "Priority email support",
                "Project collaboration tools",
                "Advanced analytics",
                "Dedicated cloud storage",
              ],
            },
            {
              title: "Enterprise",
              description: "Tailored for large organizations.",
              price: 500,
              selected: false,
              icon: nonSelect,
              features: [
                "Unlimited users",
                "24/7 Support",
                "Custom integrations",
                "Full analytics suite",
                "Cloud infrastructure",
                "Team training sessions",
              ],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`w-[363px] rounded-xl p-6 relative shadow-lg text-white ${
                plan.selected
                  ? "bg-gradient-to-b from-[#534b7d] to-gray-500"
                  : "bg-gray-800"
              }`}
            >
              <img
                src={plan.icon}
                alt="Status Icon"
                className="absolute top-4 left-4 w-10 h-10"
              />
              <div className="mt-14 text-left px-4">
                <h2 className="text-3xl font-bold mb-2">{plan.title}</h2>
                <p className="text-gray-400 mb-4">{plan.description}</p>
                <div className="text-4xl font-semibold mb-6">
                  ${plan.price}{" "}
                  <span className="text-base font-normal">/ per month</span>
                </div>

                <button
                  className={`w-full rounded-[10px] px-6 py-2 mb-6 text-white font-medium transition ${
                    plan.selected
                      ? "bg-gray-600 hover:bg-gray-700"
                      : "bg-gray-600 hover:bg-gray-700"
                  }`}
                >
                  Proceed
                </button>

                <p className="text-sm text-gray-400 mb-3">What you will get</p>
                <ul className="text-sm space-y-3 px-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span className="w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-xs">
                        ✓
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
        <Footer/>
    </>
  );
};

export default PricingPage;
