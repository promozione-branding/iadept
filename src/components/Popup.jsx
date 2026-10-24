
"use client";

export default function Popup({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/75 px-4 py-6 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      {/* POPUP */}
      <div
        className="relative my-auto w-full max-w-[610px] min-h-[520px] bg-[#8b8b8b] border border-red-500 overflow-hidden"
        style={{
          borderTopLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close popup"
          className="absolute top-[16px] right-[17px] z-20 text-white text-[25px] font-light leading-none hover:text-red-200 transition-colors cursor-pointer"
        >
          ×
        </button>

        {/* FORM AREA */}
        <div className="w-full flex justify-end">
          <div className="w-full max-w-[290px] mr-[18px] pt-[25px] pb-[26px]">

            {/* TITLE */}
            <h2 className="text-white text-[30px] font-bold text-center mb-[20px] tracking-tight">
              Get a Quote
            </h2>

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full h-[46px] bg-white border border-gray-500 px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 mb-[16px]"
            />

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              className="w-full h-[46px] bg-white border border-gray-500 px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 mb-[16px]"
            />

            {/* PHONE */}
            <div className="w-full h-[46px] bg-white border border-gray-500 flex items-center mb-[16px]">
              <div className="flex items-center gap-1 px-2 h-full border-r border-gray-200">
                <span className="text-[20px] leading-none">
                  🇮🇳
                </span>
                <span className="text-gray-500 text-[11px]">
                  ▾
                </span>
              </div>

              <input
                type="tel"
                name="phone"
                placeholder="081234 56789"
                className="flex-1 min-w-0 h-full bg-transparent px-3 text-[15px] text-gray-700 outline-none placeholder:text-gray-500"
              />
            </div>

            {/* PLACE */}
            <input
              type="text"
              name="place"
              placeholder="Place"
              className="w-full h-[46px] bg-white border border-gray-500 px-4 text-[15px] text-gray-700 outline-none placeholder:text-gray-500 mb-[16px]"
            />

            {/* MESSAGE */}
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full h-[103px] bg-white border border-gray-500 px-4 py-2 text-[15px] text-gray-700 outline-none resize-none placeholder:text-gray-500 mb-[15px]"
            />

            {/* SUBMIT */}
            <button
              type="button"
              className="w-full h-[53px] bg-[#e10d08] hover:bg-[#c90905] text-white text-[16px] font-medium rounded-[4px] transition-colors cursor-pointer"
            >
              Submit Your Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
