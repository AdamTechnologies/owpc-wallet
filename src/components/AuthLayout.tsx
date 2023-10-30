import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const AuthLayout = ({ children }: React.Node) => {
    const router = useRouter();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem('user') !== null;

        if (!isAuthenticated && router.pathname !== '/login') {
            router.push('/login');
        }
    }, []);

    return children;
};

export default AuthLayout;
