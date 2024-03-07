"use client";

import { useRouter } from "next/navigation";

const LoginButton = ({ children, mode = "redirect", asChild }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/auth/login");
  };

  if (mode === "modal") {
    return <span>TODO: Implement Modal</span>;
  }
  return (
    <span className="cursor-pointer" onClick={handleClick}>
      {children}
    </span>
  );
};
export default LoginButton;
