import { useState, useEffect } from "react";
import { useSnackbar } from "notistack";
import axios from "../app/axios";
import { useSelector } from "react-redux";

interface Item {
  t_id: string;
  mount: number;
}

function Friend() {
  const user = useSelector((x: any) => x.TaskReducer.user);
  const [items, setItems] = useState<Item[]>([]);
  const { enqueueSnackbar } = useSnackbar();
  useEffect(() => {
    const fetchData = async () => {
      if (user) {
        const response = await axios.post(
          "https://axai-be.onrender.com/users",
          {
            user,
          }
        );
        if (response.data.items == undefined) setItems([]);
        else setItems(response.data.items);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="flex flex-col px-5 pt-[23px] rounded-t-3xl border-t border-[#DFDCD5] bg-black flex-1 h-0 overflow-auto">
        <div className="font-bold text-[22px] text-main">1002 Leaders</div>
        <div className="text-white font-light text-sm">No users</div>
        {items.length === 0 ? (
          <>
            <div className="font-medium text-[14px] text-[#6E6E6E] mt-3 mb-[25px]">
              You haven&apos;t invited anyone yet
            </div>
            <img className="w-[186px] mx-auto" src="/images/crying.svg" />
          </>
        ) : (
          <div className="mb-[100px]">
            {items.map((item, index) => (
              <div key={index}>
                <div className="flex flex-row items-center mt-5 bg-[#F3EFE6] border border-[#DFDCD5] p-2 px-4 mx-4 rounded-lg">
                  <div className="text-white text-lg">{index + 1}</div>
                  <div className="ml-4 text-white">{item.t_id}</div>
                  <img
                    src="/images/dollar-icon.svg"
                    alt="dollar"
                    className="w-4 h-4 ml-6"
                  ></img>
                  <div className="ml-2 text-white">{item.mount}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Friend;
