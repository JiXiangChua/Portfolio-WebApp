import React, { memo } from "react";

type CardTextProp = {
  title: string;
  text: string;
  transparent?: boolean;
  gradientText?: boolean;
};

const CardText = memo((props: CardTextProp) => {
  const { title, text, transparent, gradientText } = props;
  return (
    <div
      className={`w-[100%] bg-${
        transparent ? "transparent" : "white"
      } rounded-[20px] px-6 md:px-10 py-6 md:py-10 my-6 md:my-10`}
    >
      <h3
        className={`text-[20px] xl:text-[32px] font-bold ${
          gradientText
            ? "bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text"
            : ""
        }`}
      >
        {title}
      </h3>
      <p className="mt-4">{text}</p>
    </div>
  );
});

CardText.displayName = "CardText";

export default CardText;
