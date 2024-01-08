import P1 from "@/components/P1";
import P2 from "@/components/P2";
import React from "react";

interface pageProps {
  params: { id: string };
}
const page: React.FC<pageProps> = ({ params }) => {
  const { id } = params;
  // console.log(id);

  return (
    <>
      {id === "1" && <P1 />}
      {id === "2" && <P2 />}
    </>
  );
};

export default page;
