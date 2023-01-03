import LAYOUT from "constant";
import Layout from "layout";

function Login() {
  return <div>Login</div>;
}

Login.getLayout = function getLayout(page) {
  return <Layout variant={LAYOUT.MINIMAL}>{page}</Layout>;
};

export default Login;
