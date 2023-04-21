import api from "utils/axios";

const mock = {
  steps: [
    {
      parent: {
        type: "grid",
        rowSpacing: 2,
        columnSpacing: 2,
        xs: 12
      },
      sections: [
        {
          type: "none",
          fields: [
            {
              id: "email",
              type: "text",
              label: "Email (mock data)",
              col: { xs: 6 }
            },
            {
              id: "password",
              type: "password",
              label: "Password (mock data)",
              col: { xs: 6 }
            }
          ]
        }
      ],
      actions: {
        submit: {
          title: "Update",
          size: "large",
          api: {
            method: "post",
            url: "api/test",
            body: {},
            params: {}
          }
        }
      }
    }
  ]
};

let isMockData = false;

// ------ ------ ------ ------ ------
// ------ Get FROM Builder Client ---
// ------ ------ ------ ------ ------

// Client => Done
export const getClientFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client/1/generate-form`);
};

// Education => Done
export const getEducationFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-edu-info/1/generate-form`);
};

// Address => Done
export const getAddressFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-address-info/1/generate-form`);
};

// Family => Done
export const getFamilyFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-family-info/1/generate-form`);
};

// Financial => Done
export const getFinancialFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-financial-info/1/generate-form`);
};

// Job => Done
export const getJobFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-job-info/1/generate-form`);
};

// Language => Done
export const getLanguageFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-language-info/1/generate-form`);
};

// Military Service => Done
export const getMilitaryServiceFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-military-service-info/1/generate-form`);
};

// Relative Member => Done
export const getRelativeMemberFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-relative-member-info/1/generate-form`);
};

// Residance History => Done
export const getResidanceHistoryFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-residance-history-info/1/generate-form`);
};

// Travel History
export const getTravelHistoryFormBuilder = async () => {
  if (isMockData) return mock;
  return await api.get(`v1/client-travel-history-info/1/generate-form`);
};
