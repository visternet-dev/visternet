import { Tab, Tabs } from "@mui/material";

/**
 * @name data => [{label: "" , value:""}]
 * @property {String} label
 * @property {String} value
 */
function CustomTabsHeader({ handleChange, value, data = [], ...params }) {
  return (
    <Tabs onChange={handleChange} value={value} sx={{}}>
      {data.map((item, index) => {
        return <Tab label={item.label} value={item.value} key={index} />;
      })}
    </Tabs>
  );
}

export default CustomTabsHeader;
