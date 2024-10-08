"use client"
import { useState } from 'react'
import Cookie from 'js-cookie'

const SignUpForm = () => {
    const [formData, setFormData] = useState({ username: '', password: '', email: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { username, password, email } = formData;

        localStorage.setItem('user', JSON.stringify({ username, password, email }));

        // const token = Math.random().toString(36).substr(2);
        // Cookie.set('token', token, { expires: 7, path: '/' });

        alert('Registration successful!');
    };

    return (
        <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center text-orange-500">Sign Up</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} id="username" name="username" placeholder="Username" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} id="email" name="email" placeholder="Email" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" onChange={handleChange} id="password" name="password" placeholder="Password" required />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign Up
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-zinc-400 hover:text-orange-600" href="#">
                        Already have a account?
                    </a>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm;