const mockAction = ({ type = "submit", title = "submit" } = {}) => {
  return {
    type, // submit, cancel, update, next stap , prev step
    title
  };
};

export default mockAction;
