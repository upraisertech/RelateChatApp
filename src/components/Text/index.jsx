import React from "react";

const sizeClasses = {
  txtMontserratRomanSemiBold16Bluegray900: "font-montserrat font-semibold",
  txtMontserratRomanBold16: "font-bold font-montserrat",
  txtMontserratRomanMedium12Lightblue900a2: "font-medium font-montserrat",
  txtMontserratRomanBold24: "font-bold font-montserrat",
  txtMontserratRomanMedium12Gray50: "font-medium font-montserrat",
  txtMontserratRomanRegular12: "font-montserrat font-normal",
  txtMontserratRomanRegular12Lightblue800a2: "font-montserrat font-normal",
  txtMontserratRomanRegular8: "font-montserrat font-normal",
  txtMontserratRomanSemiBold16Gray50: "font-montserrat font-semibold",
  txtMontserratRomanMedium8: "font-medium font-montserrat",
  txtMontserratRomanRegular12Gray600: "font-montserrat font-normal",
  txtMontserratRomanMedium16: "font-medium font-montserrat",
  txtMontserratRomanMedium16Red700a2: "font-medium font-montserrat",
  txtMontserratRomanRegular12Gray300: "font-montserrat font-normal",
  txtMontserratRomanSemiBold20: "font-montserrat font-semibold",
  txtMontserratRomanSemiBold16: "font-montserrat font-semibold",
  txtMontserratRomanMedium12: "font-medium font-montserrat",
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
