import {
  APIAddress,
  APIEduication,
  APIFamily,
  APIFinancial,
  APIJob,
  APILanguage,
  APIMilitaryService,
  APIRecidanceHistory,
  APIRelativeMember,
  APITravelHostiry
} from "utils/apis/dashboards/user/userApis";

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
  },
  // ADDRESS
  [TAB_INFO_TYPE.ADDRESS]: {
    type: TAB_INFO_TYPE.ADDRESS,
    cardTitle: () => "City",
    CardSubtitle: ({ item }) => item?.city_name,
    cardItems: ({ item }) => [
      { title: "Start Date", value: item?.ca_start_date },
      { title: "End Date", value: item?.ca_send_date },
      { title: "Country", value: item?.country?.vis_country_title },
      { title: "Zip Code", value: item?.zip_code }
    ],
    addBtnText: "Add Address",
    idKey: "id_ca",
    APIHandler: APIAddress
  },
  // MILITARY_SERVICE
  [TAB_INFO_TYPE.MILITARY_SERVICE]: {
    type: TAB_INFO_TYPE.MILITARY_SERVICE,
    cardTitle: () => "Organization",
    CardSubtitle: ({ item }) => item?.organization,
    cardItems: ({ item }) => [
      { title: "Start Date", value: item?.cms_end_date },
      { title: "End Date", value: item?.cms_start_date },
      { title: "Country", value: item?.country?.vis_country_title }
    ],
    addBtnText: "Add Military Service",
    idKey: "id_cms",
    APIHandler: APIMilitaryService
  },
  // RELATIVE_MEMBER
  [TAB_INFO_TYPE.RELATIVE_MEMBER]: {
    type: TAB_INFO_TYPE.RELATIVE_MEMBER,
    cardTitle: () => "Title",
    CardSubtitle: ({ item }) => item?.vis_client_relation_type_title,
    cardItems: ({ item }) => [
      { title: "Status", value: item?.vis_client_relation_type_status },
      { title: "End Date", value: item?.cms_start_date },
      { title: "Description", value: item?.vis_client_relation_type_desc }
    ],
    addBtnText: "Add Relative Member",
    idKey: "id_vis_client_relation_type",
    APIHandler: APIRelativeMember
  },
  // RESIDANCE_HISTORY
  [TAB_INFO_TYPE.RESIDANCE_HISTORY]: {
    type: TAB_INFO_TYPE.RESIDANCE_HISTORY,
    cardTitle: () => "Country",
    CardSubtitle: ({ item }) => item?.country?.vis_country_title,
    cardItems: ({ item }) => [
      { title: "Start Date", value: item?.crh_end_date },
      { title: "End Date", value: item?.crh_start_date }
    ],
    addBtnText: "Add Residance History",
    idKey: "id_crh",
    APIHandler: APIRecidanceHistory
  },
  // TRAVEL_HOSTORY
  [TAB_INFO_TYPE.TRAVEL_HOSTORY]: {
    type: TAB_INFO_TYPE.TRAVEL_HOSTORY,
    cardTitle: () => "Country",
    CardSubtitle: ({ item }) => item?.country?.vis_country_title,
    cardItems: ({ item }) => [
      { title: "City", value: item?.city_name },
      { title: "Start Date", value: item?.cth_end_date },
      { title: "End Date", value: item?.cth_start_date }
    ],
    addBtnText: "Add Travel History",
    idKey: "id_cth",
    APIHandler: APITravelHostiry
  }
};
