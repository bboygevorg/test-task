import React from "react";

import classes from "./home.module.scss";

import nootris from "../../assets/img/nootris.png";
import ginger from "../../assets/img/ginger.png";
import vorus from "../../assets/img/vorus.png";
import AboutItem from "../../components/aboutItem/AboutItem";

const aboutItem = [
  {
    id: 1,
    img: ginger,
    title: "Содержит",
    meaning: "имбирь",
  },
  {
    id: 2,
    img: vorus,
    title: "Нейтрализует",
    meaning: "вирусы",
  },
];

function Home() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.section_information}>
        <div className={classes.section_information__container}>
          <div className={classes.section_information__container__content}>
            <div
              className={
                classes.section_information__container__content__left_column
              }
            >
              <div
                className={
                  classes.section_information__container__content__left_column__header
                }
              >
                <h1>Активируй</h1>
                <br />
                <h1>Иммунитет!</h1>
              </div>
              <div
                className={
                  classes.section_information__container__content__left_column__title
                }
              >
                <p>
                  Всего пять секунд в день помогут укрепить иммунитет и повысить
                  защитные силы организма
                </p>
              </div>
              <div
                className={
                  classes.section_information__container__content__left_column__text
                }
              >
                <h2>Nootris помогает</h2>
                <p>Вашему организму во время пандемии и сезонных простуд</p>
              </div>
            </div>
            <div
              className={
                classes.section_information__container__content__right_column
              }
            ></div>
          </div>
        </div>
      </div>
      <div className={classes.section_description}>
        <div className={classes.section_description__title}>
          <h1>Получи Защиту иммунитета</h1>
          <h1>Со Скидкой -15% первым!</h1>
        </div>
        <div className={classes.section_description__discount}>
          <div>
            <p>750&#8381;</p>
            <p>690&#8381;</p>
          </div>
        </div>
        <div className={classes.section_description__about_container}>
          <div
            className={
              classes.section_description__about_container__about_content
            }
          >
            <img src={nootris} alt="" />
            <div
              className={
                classes.section_description__about_container__about_content__title
              }
            >
              <h2>+ Бесплатная доставка</h2>
              <p>Специальная цена</p>
            </div>
          </div>
          <div
            className={classes.section_description__about_container__about_item}
          >
            {aboutItem.map((item, index) => {
              return <AboutItem item={item.id} {...item} key={index} />;
            })}
          </div>
        </div>
        <div className={classes.section_description__button}>
          <button>Оформить заказ!</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
