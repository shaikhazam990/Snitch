import React, { useState } from 'react';
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router";
import ContinueWithGoogle from '../components/ContinueWithGoogle';

const inputClass = `
    w-full bg-transparent text-white
    border-b-2 border-[#4d4732] focus:border-[#FFD700]
    outline-none px-0 py-3
    transition-colors duration-300
    placeholder:text-[#3a3828]
    [&:-webkit-autofill]:![box-shadow:0_0_0_1000px_#0e0e0e_inset]
    [&:-webkit-autofill]:![-webkit-text-fill-color:#ffffff]
`;

const Login = () => {
    const { handleLogin } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await handleLogin({ email: formData.email, password: formData.password });
            navigate("/");
        } catch (error) {
            console.error("Login failed", error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0e0e0e] text-[#e5e2e1] font-sans selection:bg-[#FFD700] selection:text-[#131313] flex flex-col lg:flex-row">

            {/* Left — Editorial Image */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-[#0e0e0e] items-center justify-center overflow-hidden border-r border-[#1c1b1b]">
                <img
                    src="/snitch_editorial.jpg"
                    alt="Snitch Fashion Editorial"
                    className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity hover:scale-105 transition-transform duration-[20s] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-[#0e0e0e]/20 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e]/40 via-transparent to-[#0e0e0e]/60"></div>

                <div className="relative z-10 p-16 flex flex-col h-full justify-between w-full">
                    <h2 className="text-[#FFD700] text-xl font-bold tracking-widest uppercase">Snitch.</h2>
                    <div>
                        <p className="text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] text-white mb-6">
                            Welcome <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e9c400] to-[#ffd700]">back.</span>
                        </p>
                        <p className="text-[#d0c6ab] max-w-md text-lg leading-relaxed">
                            Sign in to explore the latest exclusive drops and manage your aesthetic.
                        </p>
                    </div>
                </div>
            </div>

            {/* Right — Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 min-h-screen bg-[#0e0e0e]">
                <div className="w-full max-w-md">

                    {/* Mobile logo */}
                    <div className="lg:hidden mb-10">
                        <h2 className="text-[#FFD700] text-lg font-bold tracking-widest uppercase">Snitch.</h2>
                    </div>

                    <div className="mb-12">
                        <p className="text-xs uppercase tracking-widest text-[#FFD700] font-medium mb-3">Sign in to Snitch</p>
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">Enter the Vault</h1>
                    </div>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-8">

                        {/* Email */}
                        <div className="flex flex-col gap-2">
                            <label className="text-xs text-[#999077] uppercase tracking-widest font-medium">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="hello@example.com"
                                className={inputClass}
                                style={{ WebkitBoxShadow: '0 0 0 1000px #0e0e0e inset', WebkitTextFillColor: formData.email ? '#ffffff' : undefined }}
                            />
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between">
                                <label className="text-xs text-[#999077] uppercase tracking-widest font-medium">Password</label>
                                <a href="#" className="text-xs text-[#4d4732] hover:text-[#FFD700] transition-colors duration-300">
                                    Forgot password?
                                </a>
                            </div>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                placeholder="••••••••"
                                className={inputClass}
                                style={{ WebkitBoxShadow: '0 0 0 1000px #0e0e0e inset', WebkitTextFillColor: formData.password ? '#ffffff' : undefined }}
                            />
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="mt-4 w-full bg-gradient-to-r from-[#e9c400] to-[#ffd700] text-[#131313] font-bold tracking-widest uppercase text-sm py-4 px-8 rounded hover:shadow-[0_0_30px_rgba(255,215,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                        >
                            Sign In
                        </button>

                        <ContinueWithGoogle />

                        <p className="text-center text-sm text-[#4d4732]">
                            Don't have an account?{' '}
                            <a href="/register" className="text-[#999077] hover:text-[#FFD700] transition-colors duration-300 border-b border-transparent hover:border-[#FFD700] pb-0.5">
                                Sign up
                            </a>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;