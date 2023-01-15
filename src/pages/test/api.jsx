import Image from "next/image";

import React from "react";

import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";

import axios from "utils/axios";

import Center from "components/ui-component/extended/center";
import Loader from "components/ui-component/Loader";

const getSpaceXData = async () => {
  return await axios.get(`https://api.spacexdata.com/v5/launches/latest`);
};

function TestPage({}) {
  const { data, isLoading, isFetching } = useQuery(["spacex"], () => getSpaceXData());

  console.log("data:", data);

  if (isLoading) return <Loader />;
  if (!data) return <div>No Data</div>;

  return (
    <Center sx={{ height: "100vh" }}>
      <h2>{data.data.name}</h2>
      <Image src={data.data?.links?.patch?.large} alt="patch-image" width={500} height={500} />
    </Center>
  );
}

export default TestPage;

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery(["spacex"], () => getSpaceXData(), {
//     initialData: {
     
//     }
//   });

//   return {
//     props: {
//       dehyratedState: JSON.parse(JSON.stringify(dehydrate(queryClient)))
//     }
//   };
// }
