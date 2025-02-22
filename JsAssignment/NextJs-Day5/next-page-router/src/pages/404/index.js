import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const Custom404 = () => {
    const [timer, setTimer] = useState(5);
    const router = useRouter();
    useEffect(() => {
        let index = 5;
        const Timer = () => {
            setTimer(index);
            index--; 
            if (index >= 0) {
                setTimeout(Timer, 1000);
            }else{
                router.push("/");
            }
        };
        Timer();
    }, [router]);
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
        <p><strong>{timer}</strong></p>
        <h1>404 - Page Not Found</h1>
    </div>
  );
};

export default Custom404;
