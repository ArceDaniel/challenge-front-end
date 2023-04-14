import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import Image from "next/image";
import SwiperCore,{ EffectCoverflow, Pagination, Autoplay } from "swiper";
import image2 from "../../public/image/article-image-5.png";
import Card from "./Card";

SwiperCore.use([Autoplay]);

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}

type Props = {
  articles: Article[];
}

const Speciality = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=7cf88a1ec7b04633b8062b113b9a9ddf"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        
        setArticles(data.articles.slice(0, 10));
    });
  }, []);

  return (
    <section className="speciality">
      <h2 className="text-center text-6xl mb-12">
        What is the
        <br />
        <strong>Speciality Of Us?</strong>
        <div>
          <Swiper
    modules={[EffectCoverflow, Autoplay]}
            effect={"coverflow"}
            slidesPerView={3}
            coverflowEffect={{
              rotate: -10,
              stretch: 0,
              depth: 20,
              modifier: 1,
              slideShadows: false,
            }}
            initialSlide={3}
            style={{
              width: "90%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
            }}
            className="mySwiper"
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: true,
            }}
        
          >
            {/* <SwiperSlide>
              <Card
                img={image2}
                title="Web Development"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
            </SwiperSlide> */}
            {
              articles?.map((article, index) => (
                <SwiperSlide key={index}>
                  <Card
                    img={article.urlToImage}
                    title={article.title}
                    text={article.description} />
                </SwiperSlide>
              ))
            }

          </Swiper>
        </div>
      </h2>
    </section>
  );
}


export default Speciality;
