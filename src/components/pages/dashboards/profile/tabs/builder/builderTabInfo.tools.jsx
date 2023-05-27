import { APIEduication, APIFamily, APIFinancial, APIJob, APILanguage } from "utils/apis/dashboards/user/userApis";

import { TAB_INFO_TYPE } from "./builderTabInfo.constant";

export const tabInfoController = {
  // EDUCATION
  [TAB_INFO_TYPE.EDUCATION]: {
    type: TAB_INFO_TYPE.EDUCATION,
    cardTitle: () => "University Name",
    CardSubtitle: ({ item }) => item?.university_name,
    cardItems: ({ item }) => [
      { title: "Country", value: item?.country?.vis_country_title || "-" },
      { title: "Date", value: `${item?.cui_start_year} -  ${item?.cui_end_year}` },
      { title: "Grade", value: item?.grade || "-" }
    ],
    addBtnText: "Add Education",
    idKey: "id_cui",
    APIHandler: APIEduication
  },
  // JOB
  [TAB_INFO_TYPE.JOB]: {
    type: TAB_INFO_TYPE.JOB,
    cardTitle: () => "Company Name",
    CardSubtitle: ({ item }) => item?.company_name,
    cardItems: ({ item }) => [
      { title: "Country", value: item?.country?.vis_country_title || "-" },
      { title: "Date", value: `${item?.cji_start_date || ""} -  ${item?.cji_end_date || ""}` },
      { title: "Company Telephone", value: item?.company_telephone || "-" }
    ],
    addBtnText: "Add Job",
    idKey: "id_cji",
    APIHandler: APIJob
  },
  // LANGUAGE
  [TAB_INFO_TYPE.LANGUAGE]: {
    type: TAB_INFO_TYPE.LANGUAGE,
    cardTitle: () => "Language",
    CardSubtitle: ({ item }) => item?.language?.vis_language_title || "-",
    cardItems: ({ item }) => [
      // TODO => Must be used expands
      { title: "Certificate", value: item?.certificate_type_id || "-" },
      { title: "Exam Date", value: item?.exam_date },
      { title: "Expire Date", value: item?.expire_date }
    ],
    addBtnText: "Add Language",
    idKey: "id_cli",
    APIHandler: APILanguage
  },
  // FINANCIAL
  [TAB_INFO_TYPE.FINANCIAL]: {
    type: TAB_INFO_TYPE.FINANCIAL,
    cardTitle: () => "Financial",
    CardSubtitle: () => "",
    cardItems: ({ item }) => [
      { title: "Amount", value: item?.cfi_amount },
      { title: "Start Date", value: item?.cfi_start_date },
      { title: "End Date", value: item?.cfi_end_date }
    ],
    addBtnText: "Add Financial",
    idKey: "id_cfi",
    APIHandler: APIFinancial
  },
  // FAMILY
  [TAB_INFO_TYPE.FAMILY]: {
    type: TAB_INFO_TYPE.FAMILY,
    cardTitle: () => "Full Name",
    CardSubtitle: ({ item }) => item?.first_name + " " + item?.last_name,
    cardItems: ({ item }) => [
      { title: "Relation", value: item?.relation_type_id },
      { title: "Birth County", value: item?.birth_county },
      { title: "Birthday", value: item?.birthday }
    ],
    addBtnText: "Add Family",
    idKey: "id_cfm",
    APIHandler: APIFamily
  }
};
