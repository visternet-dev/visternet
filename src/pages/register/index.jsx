import LAYOUT from "constant";
import Layout from "layout";

function Register() {
  return <div>Register</div>;
}

Register.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.DASHBOARD}>{page}</Layout>;
};

export default Register;
