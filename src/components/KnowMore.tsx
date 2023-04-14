import React from "react";
import style from "../styles/KnowMore.module.css";
import Image from "next/image";
import image1 from "../../public/image/what-can-you-build.png";
import image2 from "../../public/image/article-image-5.png";
// import "../styles/globals.css"

const KnowMore = () => {
  return (
    <div className={style.knowMore}>
      <section>
        <div className={style.knowMore__text}>
          <h2>The Process <br/> About Our Work</h2>
          <p>
            Alejandro Laplana leads and adaptable end-to-end development team
            consisting of a large portion of captable enterprise mixed reality
            solutions.
          </p>
          <div className={`second__button`}>Know More</div>

        </div>
        <div className={style.image_container}>
          <Image src={image1} alt="Know More" />
        </div>
      </section>
      <section>
        <div>
        <Image alt="Know More" src={image2} />
          </div>
        <div className={style.knowMore__text}>
          <h2>We are here to 
            <br/>
            always help you</h2>
          <p>
            Shokworks team provide solutions and guidance to every project,
            taking the project vision to high level.
          </p>
        </div>
      </section>
    </div>
  );
};

export default KnowMore;
