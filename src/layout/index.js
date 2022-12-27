// project import
import LAYOUT from "constant";
import PropTypes from "prop-types";
import AuthGuard from "utils/route-guard/AuthGuard";
import GuestGuard from "utils/route-guard/GuestGuard";

import React from "react";

import LandingLayout from "./LandingLayout";
import MainLayout from "./MainLayout";
import MinimalLayout from "./MinimalLayout";

// ==============================|| LAYOUTS - STRUCTURE ||============================== //

export default function Layout({ variant = LAYOUT.main, children }) {
  switch (variant) {
    case LAYOUT.minimal:
      return <MinimalLayout>{children}</MinimalLayout>;

    case LAYOUT.noauth:
      return (
        <GuestGuard>
          <MinimalLayout>{children}</MinimalLayout>
        </GuestGuard>
      );

    default:
      return <LandingLayout>{children}</LandingLayout>;
  }
}

//     return (
//       <AuthGuard>
//         <MainLayout>{children}</MainLayout>
//       </AuthGuard>
//     );
// }

// Layout.propTypes = {
//   children: PropTypes.node,
//   variant: PropTypes.string
// };
