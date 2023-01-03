// project import
import LAYOUT from "constant";
import AuthGuard from "utils/route-guard/AuthGuard";
import GuestGuard from "utils/route-guard/GuestGuard";

import React from "react";

import DashboardLayout from "./DashboardLayout";
import LandingLayout from "./LandingLayout";
import MinimalLayout from "./MinimalLayout";

// ==============================|| LAYOUTS - STRUCTURE ||============================== //

export default function Layout({ variant = LAYOUT.main, children }) {
  switch (variant) {
    case LAYOUT.MINIMAL:
      return <MinimalLayout>{children}</MinimalLayout>;

    case LAYOUT.NOAUTH:
      return (
        <GuestGuard>
          <MinimalLayout>{children}</MinimalLayout>
        </GuestGuard>
      );

    case LAYOUT.DASHBOARD:
      return (
        // <AuthGuard>
        <DashboardLayout>{children}</DashboardLayout>
        // </AuthGuard>
      );

    default:
      return <LandingLayout>{children}</LandingLayout>;
  }
}
