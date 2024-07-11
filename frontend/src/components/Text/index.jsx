import React from "react";

const sizeClasses = {
  txtWorkSansMedium16: "font-medium font-worksans",
  txtWorkSansMedium16Blue500: "font-medium font-worksans",
  txtWorkSansRegular14Blue500: "font-normal font-worksans",
  txtWorkSansRegular16Black900: "font-normal font-worksans",
  txtWorkSansRegular16Indigo900: "font-normal font-worksans",
  txtWorkSansRegular22: "font-normal font-worksans",
  txtWorkSansMedium26Indigo900: "font-medium font-worksans",
  txtWorkSansRegular16Blue500: "font-normal font-worksans",
  txtWorkSansRegular16Blue100: "font-normal font-worksans",
  txtWorkSansBold18Indigo900: "font-bold font-worksans",
  txtYesevaOneRegular36Blue100: "font-normal font-yesevaone",
  txtYesevaOneRegular32Blue500: "font-normal font-yesevaone",
  txtYesevaOneRegular48: "font-normal font-yesevaone",
  txtWorkSansRegular18Black900: "font-normal font-worksans",
  txtWorkSansSemiBold18: "font-semibold font-worksans",
  txtWorkSansBold18: "font-bold font-worksans",
  txtYesevaOneRegular32: "font-normal font-yesevaone",
  txtWorkSansMedium26: "font-medium font-worksans",
  txtWorkSansRegular18: "font-normal font-worksans",
  txtWorkSansRegular16: "font-normal font-worksans",
  txtWorkSansRegular14: "font-normal font-worksans",
  txtWorkSansRegular16WhiteA700: "font-normal font-worksans",
  txtWorkSansRegular18Gray900: "font-normal font-worksans",
  txtWorkSansRegular14Gray900: "font-normal font-worksans",
  txtWorkSansRegular18Indigo900: "font-normal font-worksans",
  txtWorkSansSemiBold18WhiteA700: "font-semibold font-worksans",
  txtYesevaOneRegular36: "font-normal font-yesevaone",
  txtWorkSansBold18Blue100: "font-bold font-worksans",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
