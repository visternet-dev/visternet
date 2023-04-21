import { FormattedMessage } from "react-intl";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import Layout from "layout";

import AddressInfo from "components/pages/dashboards/profile/tabs/address/addressInfo";
import EducationInfo from "components/pages/dashboards/profile/tabs/education/educationInfo";
import FamilyInfo from "components/pages/dashboards/profile/tabs/family/familyInfo";
import FinancialInfo from "components/pages/dashboards/profile/tabs/financial/financialInfo";
import JobInfo from "components/pages/dashboards/profile/tabs/job/jobInfo";
import LanguageInfo from "components/pages/dashboards/profile/tabs/language/languageInfo";
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
      panel: <EducationInfo />
    },
    {
      tab: {
        title: <FormattedMessage id="job" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <JobInfo />
    },
    {
      tab: {
        title: <FormattedMessage id="language" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <LanguageInfo />
    },
    {
      tab: {
        title: <FormattedMessage id="financial" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <FinancialInfo />
    },
    {
      tab: {
        title: <FormattedMessage id="family" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <FamilyInfo />
    },
    {
      tab: {
        title: <FormattedMessage id="address" />,
        status: "pendding", //completed, pending
        srcIcon: "/assets/images/icons/setting/profile/user-profile.svg"
      },
      panel: <AddressInfo />
    }
  ];

  return <TabSection data={data} />;
}

Profile.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default Profile;
