import React, { memo } from "react";
import CardText from "../CardText";
import Image from "next/image";

type FeatureCardProp = {
  direction: "left-right" | "up-down";
  title: string;
  text: string;
  transparent?: boolean;
  imagePath: string;
  imageAltText: string;
  imageWidth: string;
};

const FeatureCard = memo((props: FeatureCardProp) => {
  const {
    direction,
    title,
    text,
    transparent,
    imagePath,
    imageAltText,
    imageWidth,
  } = props;
  const leftRightCard = () => {
    return (
      <div
        id={title}
        className="flex flex-row justify-center items-center my-20 gap-4"
      >
        <CardText title={title} text={text} transparent />
        <Image
          src={imagePath}
          alt={imageAltText}
          width={0}
          height={0}
          sizes="1"
          className={`w-[${imageWidth}] rounded-[20px]`}
        />
      </div>
    );
  };

  const upDownCard = () => {
    return (
      <div id={title} className="flex flex-col justify-start items-center">
        <CardText title={title} text={text} transparent />
        <Image
          src={imagePath}
          alt={imageAltText}
          width={0}
          height={0}
          sizes="1"
          className={`w-[${imageWidth}] rounded-[20px]`}
        />
      </div>
    );
  };

  return direction === "left-right" ? leftRightCard() : upDownCard();
});

export default FeatureCard;
