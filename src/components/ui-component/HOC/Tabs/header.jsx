import { Tab, Tabs } from "@mui/material";

/**
 * @name data => [{label: "" , value:""}]
 * @property {String} label
 * @property {String} value
 */
function CustomTabsHeader({ handleChange, value, sx, data = [], noBorder = false, ...params }) {
  // Styles
  const styles = {
    ...(noBorder && { "& .MuiTabs-flexContainer": { border: "none" } })
  };

  return (
    <Tabs value={value} onChange={handleChange} sx={{ ...styles, ...sx }} {...params}>
      {data.map((item, index) => {
        return <Tab label={item.label} value={item.value} key={index} />;
      })}
    </Tabs>
  );
}

export default CustomTabsHeader;
