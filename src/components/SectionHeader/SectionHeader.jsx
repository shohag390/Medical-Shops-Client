import React from "react";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="pb-[30px]">
      <h2 className="font-semibold text-[30px] text-[#111] pb-[2px]">
        {title}
      </h2>
      <p className="text-[#353232]">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
