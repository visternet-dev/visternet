import translate from "utils/locales/translate";

const LANDING = {
  LIST_MENU: [
    { title: translate("Home"), url: "/", isActive: true },
    { title: translate("Find a consultant"), url: "/?" },
    { title: translate("Blog"), url: "blog" },
    { title: translate("About Us"), url: "about" },
    { title: translate("Concat Us"), url: "concat" }
  ]
};

export default LANDING;
