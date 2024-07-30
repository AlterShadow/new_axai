"use Client";

import Card from "@/app/components/common/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Mine() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks)
  const mainTasks = allTasks?.filter((x: any) => x.extra === false)
  const user = useSelector((x: any) => x.TaskReducer.user);
  const handleImageLoad = () => {
  };
  const [arr, setArr] = useState<number[]>([]);
  useEffect(() => {
    let tmp: number[] = [];
    for (let i = 0; i < 5; i++) {
      tmp.push(Math.ceil(Math.random() * 10) + 1);
    }
    setArr(tmp);
  }, []);
  return (
    <div className="flex-1 h-0">
      <div className="py-7 mb-[90px] px-5 text-white rounded-t-3xl border-t border-[#DFDCD5] bg-black h-full overflow-auto">
        <div className="flex justify-center items-center text-2xl">Earns</div>
        <div className="flex justify-center items-center text-sm font-light mt-3">Follow simple steps to get more AxAi</div>
        <div className="mt-6">
          <div>Free Roulette</div>
          <div className="p-3">
            <div className="bg-[#1D1D1D] rounded-md p-2">
              {
                arr.map((x: any, i: number) => {
                  // Determine the opacity group based on the index
                  const opacityGroup = Math.floor((i+1) / 2); // This divides the indices into groups of 2
              
                  // Calculate the opacity based on the group
                  const opacityValue = (opacityGroup + 1) / 3; // This gives us values 0/3, 1/3, 2/3
              
                  // Convert the fraction to a percentage string for CSS
                  const opacityStyle = `${opacityValue * 100}%`;
              
                  return (
                    <div className="flex justify-center items-center" style={{opacity: opacityStyle}}>
                      {x} AxAi
                    </div>
                  );
                })
              }
              <div className="bg-main rounded-md p-2 text-sm text-black flex justify-center items-center">Spin</div>
            </div>
          </div>
        </div>
        <div>Tasks</div>
        {mainTasks.map((x: any, i: number) =>
          <Card
            key={i}
            title={x.title}
            description={x.description}
            price={x.price}
            link={x.link}
            img={x.image}
            onLoad={handleImageLoad}
          />
        )}
        
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

export default Mine;
