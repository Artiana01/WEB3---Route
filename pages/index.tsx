// pages/index.js
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function redirectHome() {
 const router = useRouter();

 useEffect(() => {
    router.push('/home');
 }, []);

 return null;
}
