// third-party
import { FormattedMessage } from "react-intl";

// assets
import { IconMessages, IconUser } from "@tabler/icons";

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
          id: "education",
          title: <FormattedMessage id="education" />,
          type: "item",
          url: "/??"
        }
      ]
    },
    {
      id: "plans-boockmark",
      title: <FormattedMessage id="plans-boockmark" />,
      type: "item",
      url: "/??"
    },
    {
      id: "user-information",
      title: <FormattedMessage id="user-information" />,
      type: "item",
      url: "/??"
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
      url: "/??"
    }
  ]
};

export default userDashboard;
