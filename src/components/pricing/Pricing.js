import React from "react";
import "./pricing.css";
import { pricingPlans } from "../../data/pricing.js";
import { Link } from "react-router-dom";

function Pricing() {
  return (
    <>
      <div className="bg-[#141414] py-12">
        <div className="h-auto max-w-7xl mx-auto flex flex-col items-center justify-around px-7 my-12">
          <div>
            <h2 className="font-['Cabin'] text-4xl text-white text-center">
              Pricing
            </h2>
            <p className="text-white font-['Raleway'] text-center mt-2">
              Choose a plan based on your needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 md:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className="border border-slate-200 p-8 bg-white rounded-2xl relative flex flex-col"
              >
                <h3 className="text-lg font-semibold leading-5 ">
                  {plan.title}
                </h3>
                {plan.mostPopular && (
                  <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 text-white px-3 py-0.5 text-sm font-semibold tracking-wide rounded-full shadow-md">
                    Most Popular
                  </p>
                )}
                <p className="mt-4 text-gray-700 text-sm font-['Raleway'] leading-6 flex">
                  {plan.description}
                </p>
                <div className="mt-4 bg-red-200 p-6 rounded-2xl -mx-5">
                  <p className="text-sm font-semibold text-gray-500 flex items-center">
                    <span>{plan.currency}</span>
                    <span className="text-4xl text-gray-900 ml-3">
                      ${plan.price}
                    </span>
                    <span className="ml-1.5">{plan.frequency}</span>
                  </p>
                </div>
                <ul className="mt-6 space-y-4 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm text-gray-700 leading-6 flex"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-5 h-5 text-cyan-500 shrink-0"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="ml-3">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/sign-up"
                  className={`  mt-8 block px-6 py-4 text-sm text-center font-semibold leading-4 rounded-lg     
                  
                  ${
                    plan.mostPopular
                      ? "text-white bg-cyan-500 hover:bg-cyan-600 transition duration-200 shadow-md"
                      : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100 transition duration-200"
                  }
                  `}
                >
                  {plan.btn}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
