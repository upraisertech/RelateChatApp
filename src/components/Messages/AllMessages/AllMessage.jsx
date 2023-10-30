import React from "react";

const AllMessage = ({ img, username, time, online, discr, activeUsername }) => {
  const isActiveChat = username === activeUsername;

  return (
    <>
      <div className={`${isActiveChat  ? 'bg-orange-100 text-[white]' : 'bg-[#F8E9DB] text-[#1F2120]'} w-[100%] p-5 rounded-md justify-start items-start gap-2.5 inline-flex cursor-pointer`}>
        <img className="w-10 h-10 rounded-full" src="/images/img_ellipse97.png" />
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-[3px] inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-[17px] font-bold font-['Satoshi'] leading-[23px]">{username}</div>
            <div className="justify-start items-start gap-2.5 flex">
              <div className="text-[13px] font-normal font-['Satoshi'] leading-[18px]">04:15 am</div>
              <div className={`${isActiveChat  ? '' : 'hidden'}w-3 h-3 bg-[red] rounded-full`}></div>
            </div>
          </div>
          <div className="self-stretch text-[15px] font-normal font-['Satoshi'] leading-[23px]">So, my protagonist discovers a hidden letter that reveals a shocking family secret. I'm not sure how to make it impactful. Any ideas?</div>
        </div>
      </div>

    </>
  );
};

export default AllMessage;
