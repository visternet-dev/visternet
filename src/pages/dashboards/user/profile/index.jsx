import { FormattedMessage } from "react-intl";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import Layout from "layout";
import { APIEduication, APIJob } from "utils/apis/dashboards/user/userApis";

import AddressInfo from "components/pages/dashboards/profile/tabs/address/addressInfo";
import { TAB_INFO_TYPE } from "components/pages/dashboards/profile/tabs/builder/builderTabInfo.constant";
import { tabInfoController } from "components/pages/dashboards/profile/tabs/builder/builderTabInfo.tools";
import BuilderTabInfo from "components/pages/dashboards/profile/tabs/builder/educationInfo";
import FamilyInfo from "components/pages/dashboards/profile/tabs/family/familyInfo";
import FinancialInfo from "components/pages/dashboards/profile/tabs/financial/financialInfo";
import MilitaryServiceInfo from "components/pages/dashboards/profile/tabs/militaryService/militaryServiceInfo";
import RelativeMemberInfo from "components/pages/dashboards/profile/tabs/relativeMember/relativeMemberInfo";
import ResidanceHistoryInfo from "components/pages/dashboards/profile/tabs/residanceHistory/residanceHistoryInfo";
import TravelHistoryInfo from "components/pages/dashboards/profile/tabs/travelHistory/travelHistoryInfo";
import UserProfile from "components/pages/dashboards/profile/tabs/userProfile/userProfile";
import TabSection from "components/ui-component/tabSection/tabSection";
import LAYOUT from "constant";

function Profile() {
  const data = [
    {
      tab: {
        title: <FormattedMessage id="user-profile" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <UserProfile />
    },
    {
      tab: {
        title: <FormattedMessage id="education" />,
        status: "completed", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.EDUCATION]} />
    },
    {
      tab: {
        title: <FormattedMessage id="job" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.JOB]} />
    },
    {
      tab: {
        title: <FormattedMessage id="language" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.LANGUAGE]} />
    },
    {
      tab: {
        title: <FormattedMessage id="financial" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.FINANCIAL]} />
    },
    {
      tab: {
        title: <FormattedMessage id="family" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.FAMILY]} />
    },
    {
      tab: {
        title: <FormattedMessage id="address" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.ADDRESS]} />
    },
    {
      tab: {
        title: <FormattedMessage id="military-service" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.MILITARY_SERVICE]} />
    },
    {
      tab: {
        title: <FormattedMessage id="relative-member" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.RELATIVE_MEMBER]} />
    },
    {
      tab: {
        title: <FormattedMessage id="residance-history" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.RESIDANCE_HISTORY]} />
    },
    {
      tab: {
        title: <FormattedMessage id="travel-history" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <BuilderTabInfo controller={tabInfoController[TAB_INFO_TYPE.TRAVEL_HOSTORY]} />
    }
  ];

  return <TabSection data={data} />;
}

Profile.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default Profile;
