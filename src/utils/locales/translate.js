const { FormattedMessage } = require("react-intl");

const translate = (data) => {
  if (data && typeof window !== "undefined") {
    const cleanData = String(data?.toLowerCase()?.trim()).replaceAll(' ', '-');

    // return cleanData;
    return <FormattedMessage id={cleanData} />;
  }

  return data;
};

export default translate;
