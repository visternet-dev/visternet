// third-party
import { FormattedMessage } from "react-intl";

// assets
import { IconMessages, IconUser , IconBookmark , IconNote } from "@tabler/icons";

// ==============================|| DASHBOARD USER MENU ITEMS ||============================== //

const userDashboard = {
  id: "dashboard",
  title: <FormattedMessage id="dashboard" />,
  type: "group",
  children: [
    {
      id: "profile",
      title: <FormattedMessage id="profile" />,
      type: "collapse",
      icon: IconUser,
      children: [
        {
          id: "user-profile",
          title: <FormattedMessage id="user-profile" />,
          type: "item",
          url: "/dashboards/user/profile?tab=1"
        },
        {
          id: "education",
          title: <FormattedMessage id="education" />,
          type: "item",
          url: "/dashboards/user/profile?tab=2"
        },
        {
          id: "job",
          title: <FormattedMessage id="job" />,
          type: "item",
          url: "/dashboards/user/profile?tab=3"
        },
        {
          id: "language",
          title: <FormattedMessage id="language" />,
          type: "item",
          url: "/dashboards/user/profile?tab=4"
        },
        {
          id: "financial",
          title: <FormattedMessage id="financial" />,
          type: "item",
          url: "/dashboards/user/profile?tab=5"
        },
        {
          id: "family",
          title: <FormattedMessage id="family" />,
          type: "item",
          url: "/dashboards/user/profile?tab=6"
        },
        {
          id: "address",
          title: <FormattedMessage id="address" />,
          type: "item",
          url: "/dashboards/user/profile?tab=7"
        },
        {
          id: "military-service",
          title: <FormattedMessage id="military-service" />,
          type: "item",
          url: "/dashboards/user/profile?tab=8"
        },
        {
          id: "relative-member",
          title: <FormattedMessage id="relative-member" />,
          type: "item",
          url: "/dashboards/user/profile?tab=9"
        },
        {
          id: "residance-history",
          title: <FormattedMessage id="residance-history" />,
          type: "item",
          url: "/dashboards/user/profile?tab=9"
        },
        {
          id: "travel-history",
          title: <FormattedMessage id="travel-history" />,
          type: "item",
          url: "/dashboards/user/profile?tab=10"
        },
      ]
    },
    {
      id: "plans-boockmark",
      title: <FormattedMessage id="plans-boockmark" />,
      type: "item",
      icon: IconBookmark,
      url: "/dashboards/user/bookmark"
    },
    {
      id: "request",
      title: <FormattedMessage id="request" />,
      type: "item",
      icon: IconMessages,
      url: "/??"
    },
    {
      id: "order",
      title: <FormattedMessage id="order" />,
      type: "item",
      icon: IconMessages,
      icon: IconNote, 
      url: "/??"
    }
  ]
};

export default userDashboard;
