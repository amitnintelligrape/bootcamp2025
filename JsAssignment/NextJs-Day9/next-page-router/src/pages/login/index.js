import { useSession, signIn } from "next-auth/react";
import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import Button from "../component/Button";
export default function Login() {
  const { data: session } = useSession();
  const [seconds, setSeconds] = useState(5);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if(session){
      console.log('hello')
      setIsRedirecting(true);
      const timer = setInterval(() => {
        setSeconds((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            router.push("/dashboard");
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  },[session])
  return (
    <div style={{ padding: "20px" }}>
        {isRedirecting ? (
          <p>Already logged in, Redirecting you in {seconds}...</p>
        ):(
        <>
          <Button onClick={() => signIn('google')}>Sign in with Google</Button>
        </>
        )}
    </div>
  );
}
