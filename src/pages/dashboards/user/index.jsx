import LAYOUT from "constant";
import Layout from "layout";

function UserDashboard() {
  return <div>UserDashboard</div>;
}

UserDashboard.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default UserDashboard;
