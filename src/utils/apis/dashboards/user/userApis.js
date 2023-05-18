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

// Education
//  -- Form Builder
export const getEducationFormBuilder = async ({ update = false, id = 1 }) => {
  console.log(update);
  if (isMockData) return mock;
  return await api.get(`v1/client-edu-info/${id}/update-form`);

  // return await api.get(`v1/client-edu-info/create-form`);
};

// -- Get List Education
export const getEducations = async () => {
  return await api.get(`/v1/client-edu-info`);
};

// -- Delete Educaton
export const deleteEducation = async ({ id }) => {
  return await api.delete(`/v1/client-edu-info/${id}`);
};

// Education
export const APIEduication = {
  get: async ({ id = "" }) => {
    return await api.get(`/v1/client-edu-info/${id}?expand=country`);
  },
  post: async ({ body = {} }) => {
    return await api.post(`/v1/client-edu-info/`, body);
  },
  put: async ({ id = "" }) => {
    return await api.put(`/v1/client-edu-info/${id}`);
  },
  delete: async ({ id }) => {
    return await api.delete(`/v1/client-edu-info/${id}`);
  },
  formBuilder: async ({ update = false, id = 0 }) => {
    console.log(update , id);
    if (update) return await api.get(`v1/client-edu-info/${id}/update-form`);
    return await api.get(`v1/client-edu-info/create-form`);
  }
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
