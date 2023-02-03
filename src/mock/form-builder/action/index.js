const mockAction = ({ type = "submit", title = "submit" } = {}) => {
  return {
    type, // submit, cancel, update
    title
  };
};

export default mockAction;
