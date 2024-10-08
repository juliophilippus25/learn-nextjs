"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Cookie from 'js-cookie'

const SignInForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { username, password } = formData;

        // Ambil data pengguna dari local storage
        const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

        if (storedUser.username == username && storedUser.password == password) {
            alert('Login successful!');
            const token = Math.random().toString(36).substr(2);
            Cookie.set('token', token, { expires: 7, path: '/' });
            router.push('/dashboard');
        } else {
            alert('Invalid username or password');
        }
    };

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        onChange={handleChange}
                        name='username'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        placeholder="Username"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        onChange={handleChange}
                        name='password'
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        placeholder="Password"
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-zinc-400 hover:text-orange-600" href="#">
                        Already have a account?
                    </a>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
