"use Client";

import Card from "@/app/components/common/card";

import { useSelector } from "react-redux";
import { Button } from "@mui/base/Button";
import Link from "next/link";
function Earn() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks);
  const extraTasks = allTasks?.filter((x: any) => x.extra === true);
  const mainTasks = allTasks?.filter((x: any) => x.extra === false);

  const user = useSelector((x: any) => x.TaskReducer.user);

  const handleImageLoad = () => {};

  return (
    <div className="flex-1 h-0">
      <div className="py-[30px] mb-[90px] px-5 rounded-t-3xl border-t border-[#DFDCD5] bg-black h-full overflow-auto">
        <div className="w-full flex justify-center items-center">
          <div className="w-[102px] h-[126px] ">
            <img src="/imgs/logo.png" className="w-[102px] h-[102px]" />
          </div>
        </div>
        <div className="text-main text-[30px] leading-[27px] font-bold flex justify-center">
          1818 Axai
        </div>
        <Link className="px-4" href={"/mine"}>
          <div className="px-4">
            <Button className="w-full p-4 bg-main text-2xl leading-6 font-bold flex justify-center items-center rounded-md text-white">
              Withdraw
            </Button>
          </div>
        </Link>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#021E45] from-0% via-[#FFC700] via-50% to-[#021E45] to-100%"></div>
        <div className="p-4">
          <div className="w-full p-3 bg-gray-700 flex justify-between items-center rounded-md">
            <div className="flex justify-start items-center">
              <div className="w-[39px] h-[39px]">
                <img src="/imgs/avatar.png" />
              </div>
              <div className="pl-5 text-white text-lg">@username</div>
            </div>
            <div className="text-white rounded-2xl pt-1 px-3 text-xs border-2 border-blue-700">
              Verify
            </div>
          </div>
        </div>
        <div className="h-[2px] w-full bg-gradient-to-r from-[#021E45] from-0% via-[#FFC700] via-50% to-[#021E45] to-100%"></div>
        <div className="py-4 font-medium text-lg text-white">Earnings</div>
        {mainTasks.map((x: any, i: number) =>
          i < 3 ? (
            <Card
              key={i}
              title={x.title}
              description={x.description}
              price={x.price}
              link={x.link}
              img={x.image}
              onLoad={handleImageLoad}
            />
          ) : null
        )}
        <Link href={"/mine"}>
          <div className="p-4 w-full">
            <div className="w-full p-2 bg-gray-700 flex justify-center items-center rounded-3xl text-white descripeion">
              <span>More Earnings</span>
              <div className="name-descripeion"></div>
            </div>
            <div className="btn-icon">
              <i className="far fa-lightbulb"></i>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // Fetch or define your static props here
  return {
    props: {
      data: {}, // Example data
    },
  };
}

export default Earn;
