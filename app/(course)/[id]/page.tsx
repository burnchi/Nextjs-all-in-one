import P1 from "@/components/P1";
import P2 from "@/components/P2";
import P3 from "@/components/P3";
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
      {id === "3" && <P3 />}
    </>
  );
};

export default page;
