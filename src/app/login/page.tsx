/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

// import React, { useState } from "react";
import Image from "next/image";

// const Login = () => {
//     const [email, setEmail] = useState("web.tavedevteam@gmail.com");
//     const [password, setPassword] = useState("");
//     const [otp, setOtp] = useState("");
//     const [newPassword, setNewPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [error, setError] = useState("");
//     const [step, setStep] = useState<"login" | "forgot" | "otp" | "reset" | "success">("login");

//     // Mock function
//     const handleLogin = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (email !== "admin.wellwave@gmail.com" || password !== "123456") {
//             setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
//         } else {
//             setError("");
//             alert("เข้าสู่ระบบสำเร็จ!");
//         }
//     };

//     const handleSendResetLink = (e: React.FormEvent) => {
//         e.preventDefault();
//         alert(`📩 ส่งลิงก์รีเซ็ตรหัสไปที่ ${email}`);
//         setStep("otp");
//     };

//     const handleVerifyOtp = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (otp === "123456") {
//             setStep("reset");
//         } else {
//             setError("OTP ไม่ถูกต้อง");
//         }
//     };

//     const handleResetPassword = (e: React.FormEvent) => {
//         e.preventDefault();
//         if (newPassword !== confirmPassword) {
//             setError("รหัสผ่านไม่ตรงกัน");
//         } else {
//             setStep("success");
//         }
//     };

//     return (
//         <div className="relative flex items-center justify-center min-h-screen font-sans">
//             <Image
//                 src="/bg_login.svg"
//                 alt="Background"
//                 layout="fill"
//                 objectFit="cover"
//                 className="-z-10"
//             />

//             <div className="mb-4">
//                 <Image
//                     src="/cat.svg"
//                     alt="cat"
//                     layout="intrinsic"
//                     width={200}
//                     height={200}
//                     style={{
//                         position: 'absolute',
//                         top: '6%',  // ให้ชิดบนสุด
//                         left: '50%',  // ชิดซ้ายสุด
//                         transform: 'translateX(-50%)',
//                         zIndex: 1,
//                     }}
//                 />
//             </div>
//             {/* Card */}
//             <div className="relative bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center z-0 min-h-[380px] flex flex-col justify-center">
//                 <h3 className="text-4xl font-bold text-gray-800 mt-10 mb-4">
//                     {step === "login"
//                         ? "ยินดีต้อนรับ!"
//                         : step === "forgot"
//                             ? "ลืมรหัสผ่าน?"
//                             : step === "otp"
//                                 ? "ยืนยัน OTP"
//                                 : step === "reset"
//                                     ? "ตั้งรหัสผ่านใหม่"
//                                     : "เปลี่ยนรหัสผ่านสำเร็จ!"}
//                 </h3>

//                 <div className="flex-1 flex flex-col justify-center">
//                     {step === "login" && (
//                         <form className="space-y-4" onSubmit={handleLogin}>
//                             <input
//                                 type="email"
//                                 placeholder="อีเมล"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="รหัสผ่าน"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             {error && <p className="text-red-500 text-sm">{error}</p>}
//                             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                                 เข้าสู่ระบบ
//                             </button>
//                             <button type="button" onClick={() => setStep("forgot")} className="text-gray-500 hover:underline ">
//                                 ลืมรหัสผ่าน?
//                             </button>
//                         </form>
//                     )}

//                     {step === "forgot" && (
//                         <form className="space-y-4" onSubmit={handleSendResetLink}>
//                             <input
//                                 type="email"
//                                 placeholder="กรอกอีเมลของคุณ"
//                                 value={email}
//                                 onChange={(e) => setEmail(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                                 ส่งลิงก์รีเซ็ตรหัสผ่าน
//                             </button>
//                         </form>
//                     )}

//                     {step === "otp" && (
//                         <form className="space-y-4" onSubmit={handleVerifyOtp}>
//                             <input
//                                 type="text"
//                                 placeholder="กรอก OTP 6 หลัก"
//                                 value={otp}
//                                 onChange={(e) => setOtp(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
//                             />
//                             {error && <p className="text-red-500 text-sm">{error}</p>}
//                             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                                 ยืนยัน OTP
//                             </button>
//                         </form>
//                     )}

//                     {step === "reset" && (
//                         <form className="space-y-4" onSubmit={handleResetPassword}>
//                             <input
//                                 type="password"
//                                 placeholder="รหัสผ่านใหม่"
//                                 value={newPassword}
//                                 onChange={(e) => setNewPassword(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             <input
//                                 type="password"
//                                 placeholder="ยืนยันรหัสผ่านใหม่"
//                                 value={confirmPassword}
//                                 onChange={(e) => setConfirmPassword(e.target.value)}
//                                 className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//                             />
//                             {error && <p className="text-red-500 text-sm">{error}</p>}
//                             <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                                 ตั้งรหัสผ่านใหม่
//                             </button>
//                         </form>
//                     )}

//                     {step === "success" && (
//                         <div className="space-y-4">
//                             <p className="text-green-600">✅ เปลี่ยนรหัสผ่านสำเร็จ!</p>
//                             <button type="button" onClick={() => setStep("login")} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
//                                 กลับไปเข้าสู่ระบบ
//                             </button>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Login;import { useState } from 'react';
import axios from 'axios';
import { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/auth/login', {
                email: email,
                password: password,
            }, {
                withCredentials: true,
            });

            const { accessToken } = response.data;
            localStorage.setItem('access_token', accessToken); // เก็บ accessToken ไว้ใน localStorage
            setIsLoggedIn(true);
            setError('');
        } catch (error) {
            setError('Invalid email or password');
            setIsLoggedIn(false);
        }
    };
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    // const [error, setError] = useState("");
    const [step, setStep] = useState<"login" | "forgot" | "otp" | "reset" | "success">("login");

    // Mock function
    // const handleLogin = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     if (email !== "admin.wellwave@gmail.com" || password !== "123456") {
    //         setError("อีเมลหรือรหัสผ่านไม่ถูกต้อง");
    //     } else {
    //         setError("");
    //         alert("เข้าสู่ระบบสำเร็จ!");
    //     }
    // };

    const handleSendResetLink = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`📩 ส่งลิงก์รีเซ็ตรหัสไปที่ ${email}`);
        setStep("otp");
    };

    const handleVerifyOtp = (e: React.FormEvent) => {
        e.preventDefault();
        if (otp === "123456") {
            setStep("reset");
        } else {
            setError("OTP ไม่ถูกต้อง");
        }
    };

    const handleResetPassword = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("รหัสผ่านไม่ตรงกัน");
        } else {
            setStep("success");
        }
    };
    return (
        <div className="relative flex items-center justify-center min-h-screen font-sans">
            <Image
                src="/bg_login.svg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="-z-10"
            />

            <div className="mb-4">
                <Image
                    src="/cat.svg"
                    alt="cat"
                    layout="intrinsic"
                    width={200}
                    height={200}
                    style={{
                        position: 'absolute',
                        top: '6%',  // ให้ชิดบนสุด
                        left: '50%',  // ชิดซ้ายสุด
                        transform: 'translateX(-50%)',
                        zIndex: 1,
                    }}
                />
            </div>
            {/* Card */}
            <div className="relative bg-white p-8 rounded-2xl shadow-lg w-full max-w-md text-center z-0 min-h-[380px] flex flex-col justify-center">
                <h3 className="text-4xl font-bold text-gray-800 mt-10 mb-4">
                    {step === "login"
                        ? "ยินดีต้อนรับ!"
                        : step === "forgot"
                            ? "ลืมรหัสผ่าน?"
                            : step === "otp"
                                ? "ยืนยัน OTP"
                                : step === "reset"
                                    ? "ตั้งรหัสผ่านใหม่"
                                    : "เปลี่ยนรหัสผ่านสำเร็จ!"}
                </h3>

                <div className="flex-1 flex flex-col justify-center">
                    {step === "login" && (
                        <form className="space-y-4" onSubmit={handleLogin}>
                            <input
                                type="email"
                                placeholder="อีเมล"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="password"
                                placeholder="รหัสผ่าน"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                เข้าสู่ระบบ
                            </button>
                            <button type="button" onClick={() => setStep("forgot")} className="text-gray-500 hover:underline ">
                                ลืมรหัสผ่าน?
                            </button>
                        </form>
                    )}

                    {step === "forgot" && (
                        <form className="space-y-4" onSubmit={handleSendResetLink}>
                            <input
                                type="email"
                                placeholder="กรอกอีเมลของคุณ"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                ส่งลิงก์รีเซ็ตรหัสผ่าน
                            </button>
                        </form>
                    )}

                    {step === "otp" && (
                        <form className="space-y-4" onSubmit={handleVerifyOtp}>
                            <input
                                type="text"
                                placeholder="กรอก OTP 6 หลัก"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-center"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                ยืนยัน OTP
                            </button>
                        </form>
                    )}

                    {step === "reset" && (
                        <form className="space-y-4" onSubmit={handleResetPassword}>
                            <input
                                type="password"
                                placeholder="รหัสผ่านใหม่"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            <input
                                type="password"
                                placeholder="ยืนยันรหัสผ่านใหม่"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                            {error && <p className="text-red-500 text-sm">{error}</p>}
                            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                ตั้งรหัสผ่านใหม่
                            </button>
                        </form>
                    )}

                    {step === "success" && (
                        <div className="space-y-4">
                            <p className="text-green-600">✅ เปลี่ยนรหัสผ่านสำเร็จ!</p>
                            <button type="button" onClick={() => setStep("login")} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                                กลับไปเข้าสู่ระบบ
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
