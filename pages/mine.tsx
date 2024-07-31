"use Client";

import Card from "@/app/components/common/card";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Mine() {
  const allTasks = useSelector((x: any) => x.TaskReducer.tasks);
  const mainTasks = allTasks?.filter((x: any) => x.extra === false);
  const user = useSelector((x: any) => x.TaskReducer.user);
  const handleImageLoad = () => {};
  const [arr, setArr] = useState<number[]>([]);
  const [winPoint, setWinPoint] = useState<number>();
  useEffect(() => {
    let tmp: number[] = [];
    for (let i = 0; i < 5; i++) {
      tmp.push(Math.ceil(Math.random() * 1000) + 1);
    }
    console.log(tmp);
    setArr(tmp);
  }, []);
  const handleSpin = () => {
    if (winPoint !== undefined) {
      setWinPoint(undefined);
      return;
    }
    setWinPoint(Math.floor(Math.random() * 5));
  };
  return (
    <div className="flex-1 h-0">
      <div className="py-7 mb-[90px] px-5 text-white rounded-t-3xl border-t border-[#DFDCD5] bg-black h-full overflow-auto">
        <div className="flex justify-center items-center text-2xl">Earns</div>
        <div className="flex justify-center items-center text-sm font-light mt-3">
          Follow simple steps to get more AxAi
        </div>
        <div className="mt-6">
          <div>Free Roulette</div>
          <div className="p-3">
            <div className="bg-[#1D1D1D] rounded-md p-2">
              <div
                className="w-full h-[7.5em] relative overflow-hidden grid grid-rows-5"
                style={{
                  maskImage: "linear-gradient(transparent, black, transparent)",
                }}
              >
                {winPoint}
                <div className="bg-black rounded-full row-start-3" />
                <div
                  className="w-full flex flex-col absolute left-0 transition-all ease-in-out duration-[3000ms]"
                  style={{
                    bottom: winPoint ? `${-(41 + winPoint) * 1.5}em` : "0",
                  }}
                >
                  {Array(10)
                    .fill(0)
                    .map((_, i) =>
                      arr.map((x, j) => (
                        <div
                          key={`${i}-${j}`}
                          className="flex justify-center items-center leading-normal"
                        >
                          {x} AxAi
                        </div>
                      ))
                    )}
                </div>
              </div>
              <button
                className="w-full bg-main rounded-2xl p-2 text-sm text-black flex justify-center items-center"
                onClick={handleSpin}
              >
                Spin
              </button>
            </div>
          </div>
        </div>
        <div>Tasks</div>
        {mainTasks.map((x: any, i: number) => (
          <Card
            key={i}
            title={x.title}
            description={x.description}
            price={x.price}
            link={x.link}
            img={x.image}
            onLoad={handleImageLoad}
          />
        ))}
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
