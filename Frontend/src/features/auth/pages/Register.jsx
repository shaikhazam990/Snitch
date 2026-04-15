import React, { useState } from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";
import ContinueWithGoogle from "../components/ContinueWithGoogle";

const Register = () => {
  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    password: "",
    isSeller: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        await handleRegister({
            email: formData.email,
            contact: formData.contactNumber,
            password: formData.password,
            isSeller: formData.isSeller,
            fullname: formData.fullName
        });

        navigate("/");
    } catch (err) {
        console.log("ERROR", err.response?.data);
    }
};

  return (
    <div className="bg-[#0e0e0e] text-[#e5e2e1] font-sans selection:bg-[#FFD700] selection:text-[#131313] flex h-screen overflow-hidden">
      {/* Left — Editorial Image — fixed full height */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0e0e0e] items-center justify-center overflow-hidden border-r border-[#1c1b1b] flex-shrink-0">
        <img
          src="/snitch_editorial.jpg"
          alt="Snitch Fashion Editorial"
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/40 via-transparent to-[#0e0e0e]/60"></div>

        <div className="relative z-10 p-16 flex flex-col h-full justify-between w-full">
          <h2 className="text-[#FFD700] text-xl font-bold tracking-widest uppercase">
            Snitch.
          </h2>
          <div>
            <p className="text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
              Define your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9c400] to-[#ffd700]">
                aesthetic.
              </span>
            </p>
            <p className="text-[#d0c6ab] max-w-md text-base leading-relaxed">
              Join the exclusive movement of creators and brands redefining the
              modern fashion landscape.
            </p>
          </div>
        </div>
      </div>

      {/* Right — Scrollable Form Panel */}
      <div className="w-full lg:w-1/2 h-full overflow-y-auto bg-[#0e0e0e] flex-shrink-0">
        <div className="min-h-full flex items-center justify-center p-6 sm:p-10 lg:p-14">
          <div className="w-full max-w-md">
            {/* Mobile logo */}
            <div className="lg:hidden mb-8">
              <h2 className="text-[#FFD700] text-lg font-bold tracking-widest uppercase">
                Snitch.
              </h2>
            </div>

            <div className="mb-10">
              <p className="text-xs uppercase tracking-widest text-[#FFD700] font-medium mb-3">
                Welcome to Snitch
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">
                Elevate Your Style
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-7">
              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#999077] uppercase tracking-widest font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  className="w-full bg-transparent text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none py-2.5 transition-colors duration-300 placeholder:text-[#3a3828] text-sm"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px #0e0e0e inset",
                    WebkitTextFillColor: "#ffffff",
                  }}
                />
              </div>

              {/* Contact Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#999077] uppercase tracking-widest font-medium">
                  Contact Number
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                  placeholder="+1 (555) 000-0000"
                  className="w-full bg-transparent text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none py-2.5 transition-colors duration-300 placeholder:text-[#3a3828] text-sm"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px #0e0e0e inset",
                    WebkitTextFillColor: "#ffffff",
                  }}
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#999077] uppercase tracking-widest font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="hello@example.com"
                  className="w-full bg-transparent text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none py-2.5 transition-colors duration-300 placeholder:text-[#3a3828] text-sm"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px #0e0e0e inset",
                    WebkitTextFillColor: "#ffffff",
                  }}
                />
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs text-[#999077] uppercase tracking-widest font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="••••••••"
                  className="w-full bg-transparent text-white border-b-2 border-[#4d4732] focus:border-[#FFD700] outline-none py-2.5 transition-colors duration-300 placeholder:text-[#3a3828] text-sm"
                  style={{
                    WebkitBoxShadow: "0 0 0 1000px #0e0e0e inset",
                    WebkitTextFillColor: "#ffffff",
                  }}
                />
              </div>

              {/* Is Seller Checkbox */}
              <div className="flex items-center gap-3 group w-max cursor-pointer">
                <div className="relative flex items-center">
                  <input
                    type="checkbox"
                    name="isSeller"
                    id="isSeller"
                    checked={formData.isSeller}
                    onChange={handleChange}
                    className="peer appearance-none w-5 h-5 border border-[#4d4732] rounded-sm bg-transparent checked:bg-[#FFD700] checked:border-[#FFD700] cursor-pointer transition-colors duration-300 group-hover:border-[#FFD700]"
                  />
                  <svg
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none opacity-0 peer-checked:opacity-100 text-[#131313]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <label
                  htmlFor="isSeller"
                  className="text-sm text-[#999077] group-hover:text-[#FFD700] cursor-pointer select-none transition-colors duration-300 tracking-wide"
                >
                  Register as Seller
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#e9c400] to-[#ffd700] text-[#131313] font-bold tracking-widest uppercase text-sm py-3.5 px-8 rounded hover:shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Sign Up
              </button>

              <ContinueWithGoogle />

              <p className="text-center text-sm text-[#4d4732] pb-4">
                Already have an account?{" "}
                <a
                  href="/login"
                  className="text-[#999077] hover:text-[#FFD700] transition-colors duration-300 border-b border-transparent hover:border-[#FFD700] pb-0.5"
                >
                  Sign in
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
