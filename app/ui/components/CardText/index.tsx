import React, { memo } from "react";

type CardTextProp = {
  title: string;
  text: string;
};

const CardText = memo((props: CardTextProp) => {
  const { title, text } = props;
  return (
    <div className="w-[100%] bg-white rounded-[20px] px-10 py-10 my-10">
      <h3 className="text-[32px] font-bold bg-gradient-to-r from-[#969699] to-[#1E1E22] inline-block text-transparent bg-clip-text">
        {title}
      </h3>
      <p>{text}</p>
    </div>
  );
});

export default CardText;
