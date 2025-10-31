import React from "react";
import reactLogo from "./assets/react-logo.svg"; // your local SVG

const features = [
  {
    img: "https://i.imgur.com/H2L3ohY.png",
    title: "Declarative",
    desc: "React makes it painless to create interactive UIs.",
  },
  {
    img: "https://i.imgur.com/IHW1mFB.png",
    title: "Components",
    desc: "Build encapsulated components that manage their state.",
  },
  {
    img: "https://i.imgur.com/LtUDB9y.png",
    title: "Single-Way",
    desc: "A set of immutable values are passed to the component’s.",
  },
  {
    img: "https://i.imgur.com/agN6R4Y.png",
    title: "JSX",
    desc: "Statically-typed, designed to run on modern browsers.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 flex flex-col items-center py-12">
      {/* React Logo */}
      <img src={reactLogo} alt="React Logo" className="w-24 mb-10" />

      {/* Feature Section */}
      <div className="flex flex-wrap justify-center gap-10 max-w-6xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-gray-50 border border-gray-200 rounded-xl p-5 w-64 hover:shadow-md transition"
          >
            <img
              src={feature.img}
              alt={feature.title}
              className="w-14 h-14 object-contain"
            />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
