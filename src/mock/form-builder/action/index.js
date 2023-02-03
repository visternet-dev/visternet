const mockAction = ({ type = "submit", api = "api/test", method = "post" } = {}) => {
  return {
    type, // submit, cancel
    api,
    method
  };
};

export default mockAction;
