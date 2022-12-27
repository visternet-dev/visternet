import Layout from "layout";

// =============================|| CONCAT ||============================= //

const Concat = () => <>concat</>;

Concat.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

export default Concat;
