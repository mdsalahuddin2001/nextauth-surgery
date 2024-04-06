"use client";
import {} from "@prisma/client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { FormError } from "@/components/form-error";

export const RoleGate = ({ children, allowedRole }) => {
  const role = useCurrentRole();

  if (role !== allowedRole) {
    return <FormError message="You are not authorized to view this page." />;
  }
  return <>{children}</>;
};
