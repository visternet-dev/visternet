const mockAction = ({ type = "submit", api = "api/test", method = "post" } = {}) => {
  return {
    type,
    api,
    method
  };
};

export default mockAction;
