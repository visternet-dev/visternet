import CodeIcon from "@mui/icons-material/Code";

import useScreen from "hooks/useScreen";

import translate from "utils/locales/translate";

import LandingSectionApplicantsDesktop from "./desktop";
import LandingSectionApplicantsMobile from "./mobile";

const data = [
  {
    icon: <CodeIcon sx={{ fontSize: "3rem" }} />,
    title: translate("sample-title"),
    path: "#3",
    subTitle: translate("read-more")
  }
];

function LandingSectionApplicants() {
  const { tablet } = useScreen();

  if (tablet) return <LandingSectionApplicantsMobile data={data} />;

  return <LandingSectionApplicantsDesktop data={data} />;
}

export default LandingSectionApplicants;
