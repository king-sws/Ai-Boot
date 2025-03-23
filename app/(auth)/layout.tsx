import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  
  if (isUserAuthenticated) {
    // Add a small delay to ensure cookie is properly processed
    await new Promise(resolve => setTimeout(resolve, 100));
    redirect("/");
  }

  return <div className="auth-layout">{children}</div>;
};

export default AuthLayout;
