import P1 from "@/components/P1";
import P2 from "@/components/P2";
import P3 from "@/components/P3";
import P4 from "@/components/P4";
import P5 from "@/components/P5";
import P6 from "@/components/P6";
import P7 from "@/components/P7";
import P8 from "@/components/P8";
import P9 from "@/components/P9";
import P10 from "@/components/P10";
import P14 from "@/components/P14";
import P15 from "@/components/P15";
import P16 from "@/components/P16";
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
      {id === "4" && <P4 />}
      {id === "5" && <P5 />}
      {id === "6" && <P6 />}
      {id === "7" && <P7 />}
      {id === "8" && <P8 />}
      {id === "9" && <P9 />}
      {id === "10" && <P10 />}
      {id === "14" && <P14 />}
      {id === "15" && <P15 />}
      {id === "16" && <P16 />}
    </>
  );
};

export default page;
