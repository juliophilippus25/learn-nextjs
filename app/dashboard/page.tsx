"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { logoutUser } from "@/app/actions/auth-action"


const Dashboard = () => {
  const router = useRouter();

  const handleLogout = () => {
    // const cookieStore = cookies();
    // cookieStore.set('token', '', { maxAge: -1 });
    router.push('/signin');
  };

  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <p>This is a protected page.</p>
      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
