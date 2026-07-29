import React from "react";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for getting started",
    price: "$0",
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    button: "Get Started Free",
    style: "bg-white",
  },
  {
    name: "Pro",
    desc: "Best for professionals",
    price: "$29",
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Unlimited projects",
      "Cloud sync",
      "Advanced analytics",
    ],
    button: "Start Pro Trial",
    popular: true,
    style: "bg-gradient-to-br from-purple-600 to-indigo-700 text-white",
  },
  {
    name: "Enterprise",
    desc: "For teams and businesses",
    price: "$99",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    button: "Contact Sales",
    style: "bg-white",
  },
];

const Pricing = () => {
  return (
    <section className="py-14 bg-gray-50">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <h2 className="text-4xl font-extrabold text-gray-900">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-5">

        {plans.map((plan, index) => (
          <div
            key={index}
            className={`
              relative rounded-3xl p-6 shadow-lg 
              transition duration-300 hover:-translate-y-2
              ${plan.style}
              ${plan.popular ? "scale-105 shadow-2xl" : ""}
            `}
          >

            {plan.popular && (
              <span className="
                absolute -top-4 left-1/2 -translate-x-1/2
                bg-yellow-300 text-gray-900
                px-5 py-1 rounded-full
                text-sm font-bold shadow
              ">
                Most Popular
              </span>
            )}


            <h3 className="text-2xl font-bold">
              {plan.name}
            </h3>

            <p className={plan.popular ? "text-gray-200 mt-2" : "text-gray-500 mt-2"}>
              {plan.desc}
            </p>


            <div className="mt-6">
              <span className="text-5xl font-bold">
                {plan.price}
              </span>

              <span className={plan.popular ? "text-gray-200" : "text-gray-500"}>
                /month
              </span>
            </div>


            <ul className="mt-8 space-y-4">

              {plan.features.map((feature, i) => (
                <li 
                  key={i}
                  className="flex items-center gap-3"
                >
                  <span className="
                    flex items-center justify-center
                    w-5 h-5 rounded-full
                    bg-green-500 text-white text-xs
                  ">
                    ✓
                  </span>
                  <span className="text-sm">
                    {feature}
                  </span>

                </li>
              ))}

            </ul>


            <button
              className={`
                mt-10 w-full py-3 rounded-full font-semibold
                transition
                ${
                  plan.popular
                  ? "bg-white text-purple-700 hover:bg-gray-100"
                  : "bg-purple-600 text-white hover:bg-purple-700"
                }
              `}
            >
              {plan.button}
            </button>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Pricing;