import { useState } from "react";

function Tailwind() {
  console.log("Tailwind rendered");
  const [isDark, setIsDark] = useState(false);

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-gray-900 text-white p-10"
          : "min-h-screen bg-white text-gray-900 p-2"
      }
    >
      {/* Header */}
      <header className="flex items-center justify-between mb-10">
        <div>
          <h1 className="text-4xl font-bold">Tailwind CSS Demo</h1>
          <p className="text-gray-500 mt-2">
            Common Tailwind CSS classes in one example
          </p>
        </div>

        <button
          onClick={() => setIsDark(!isDark)}
          className="px-5 py-2 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 active:scale-95 transition"
        >
          Toggle Theme
        </button>
      </header>

      {/* Container */}
      <div className="max-w-7xl mx-auto">
        {/* Typography */}
        <section className="rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Typography</h2>

          <p className="text-sm text-gray-500 mb-2">Small text</p>

          <p className="text-base mb-2">Normal text</p>

          <p className="text-lg font-medium mb-2">Large medium text</p>

          <p className="text-xl font-semibold mb-2">Extra large text</p>

          <p className="text-3xl font-bold text-blue-600">Heading Text</p>
        </section>

        {/* Colors */}
        <section className=" rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Colors</h2>

          <div className="flex flex-wrap gap-4">
            <div className="bg-red-500 text-white p-5 rounded-lg">Red</div>

            <div className="bg-blue-500 text-white p-5 rounded-lg">Blue</div>

            <div className="bg-green-500 text-white p-5 rounded-lg">Green</div>

            <div className="bg-yellow-400 text-black p-5 rounded-lg">
              Yellow
            </div>

            <div className="bg-purple-500 text-white p-5 rounded-lg">
              Purple
            </div>

            <div className="bg-gray-800 text-white p-5 rounded-lg">Gray</div>
          </div>
        </section>

        {/* Flex */}
        <section className=" rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Flexbox</h2>

          <div className="flex items-center justify-between gap-4">
            <div className="bg-blue-200 p-5 rounded-lg flex-1">Item 1</div>

            <div className="bg-blue-300 p-5 rounded-lg flex-1">Item 2</div>

            <div className="bg-blue-400 text-white p-5 rounded-lg flex-1">
              Item 3
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className=" rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Grid</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-red-200 p-6 rounded-lg">Card 1</div>

            <div className="bg-green-200 p-6 rounded-lg">Card 2</div>

            <div className="bg-blue-200 p-6 rounded-lg">Card 3</div>

            <div className="bg-purple-200 p-6 rounded-lg">Card 4</div>
          </div>
        </section>

        {/* Buttons */}
        <section className=" rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Buttons</h2>

          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg">
              Primary
            </button>

            <button className="px-6 py-2 bg-green-500 text-white rounded-lg">
              Success
            </button>

            <button className="px-6 py-2 bg-red-500 text-white rounded-lg">
              Delete
            </button>

            <button className="px-6 py-2 border border-blue-500 text-blue-500 rounded-lg">
              Outline
            </button>

            <button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
              Hover
            </button>

            <button className="px-6 py-2 bg-purple-500 text-white rounded-lg shadow-md hover:shadow-xl transition">
              Shadow
            </button>
          </div>
        </section>

        {/* Form */}
        <section className=" rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Form</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">Message</label>

              <textarea
                placeholder="Write your message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </section>

        {/* Cards */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Cards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className=" rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Card One</h3>

              <p className="text-gray-500 mb-4">
                This is a simple Tailwind card.
              </p>

              <button className="text-blue-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>

            <div className=" rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Card Two</h3>

              <p className="text-gray-500 mb-4">Hover over this card.</p>

              <button className="text-blue-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>

            <div className=" rounded-2xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition">
              <h3 className="text-xl font-bold mb-2">Card Three</h3>

              <p className="text-gray-500 mb-4">Responsive cards using Grid.</p>

              <button className="text-blue-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className=" rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">Spacing</h2>

          <div className="space-y-4">
            <div className="p-2 bg-blue-100">p-2</div>
            <div className="p-4 bg-blue-200">p-4</div>
            <div className="p-6 bg-blue-300">p-6</div>
            <div className="p-8 bg-blue-400 text-white">p-8</div>
          </div>
        </section>

        {/* Responsive */}
        <section className=" rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Responsive Design</h2>

          <div className="bg-red-500 md:bg-green-500 lg:bg-blue-500 text-white p-6 rounded-lg text-center">
            <p className="block md:hidden">Mobile</p>

            <p className="hidden md:block lg:hidden">Tablet</p>

            <p className="hidden lg:block">Desktop</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Tailwind;
