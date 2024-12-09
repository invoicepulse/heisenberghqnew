"use client";
import { useRouter } from "next/navigation";

interface AuthButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function AuthButton({ children, className }: AuthButtonProps) {
  const router = useRouter();

  const handleAuth = () => {
    window.location.href = "https://apps.senseflows.fun";
  };

  return (
    <button onClick={handleAuth} className={className}>
      {children}
    </button>
  );
}
