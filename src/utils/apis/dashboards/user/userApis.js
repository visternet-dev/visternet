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
              label: "Email",
              col: { xs: 6 }
            },
            {
              id: "password",
              type: "password",
              label: "Password",
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

export const getUserProfile = async () => {
  if (isMockData) return mock;
  return await api.get(`api/user-profile`);
};
