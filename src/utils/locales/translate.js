const { FormattedMessage } = require("react-intl");

const translate = (data) => {
  if (data) {
    const cleanData = data?.toLowerCase()?.trim()?.replaceAll(" ", "-");

    // return cleanData;
    return <FormattedMessage id={cleanData} />;
  }

  return data;
};

export default translate;
