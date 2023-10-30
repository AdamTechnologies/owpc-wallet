import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const AuthLayout = ({ children }: any) => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('access_token') !== null;

        if (!isAuthenticated && router.pathname !== '/login') {
            router.push('/login');
        }
    }, []);

    return children;
};

export default AuthLayout;