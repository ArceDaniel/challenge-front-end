import React from "react";
import style from "../styles/Card.module.css";

interface CardProps {
  img: string;
  title: string;
  text: string;
}

const Card = ({
    img,
    title,
    text,
}: CardProps): JSX.Element => {
  return (
    <div className={style.card}>
      <div className={style.card__image}>
        <img src={img} alt={title} />
      </div>
      <div className={style.card__text}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Card;
