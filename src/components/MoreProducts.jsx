"use client";

const moreProducts = [
  {
    id: 1,
    name: "Full Body Scanner – Symcad (Non Security) III CX20 Compact 3D Body Scanner",
  },
  {
    id: 2,
    name: "Vibration Monitoring System TPI 9038 Vibration Monitor",
  },
  {
    id: 3,
    name: "MTN/5000 – Microcontroller-Based Condition Monitoring System",
  },
];

const stats = [
  { value: "0", label: "User Locations", color: "bg-cyan-400" },
  { value: "0", label: "Innovative Contracts", color: "bg-cyan-300" },
  { value: "0", label: "Happy Client", color: "bg-cyan-200" },
];

export default function MoreProducts() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Products */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
              More Products
            </h2>

            <div className="grid sm:grid-cols-3 gap-5">
              {moreProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-semibold text-gray-800 line-clamp-3 min-h-[60px]">
                      {product.name}
                    </h3>
                    <a
                      href="https://wa.me/919810010218"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 w-full inline-flex items-center justify-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium rounded-lg transition-colors"
                    >
                      WhatsApp Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats cards */}
          <div className="space-y-3">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`${stat.color} rounded-xl p-6 text-center shadow-sm`}
              >
                <p className="text-4xl font-bold text-gray-800">{stat.value}</p>
                <p className="text-sm font-semibold text-red-700 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
