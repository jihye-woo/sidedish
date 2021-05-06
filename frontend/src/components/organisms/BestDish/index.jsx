import React, { useState, useEffect } from "react";
import { WrapDiv, WrapTab, WrapCard } from "./index.style";
import getComma from "../../../util/getComma";
import loadData from "../../../util/loadData";
import Span from "../../atoms/Span";
import Tab from "../../molecules/Tab";
import LargeCard from "../../molecules/LargeCard";

const BestDish = ({ children, ...props }) => {
  const [bestDish, setBestDish] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = bestDish[currentIndex];

  //임시이미지
  const tempImgList = [
    "http://public.codesquad.kr/jk/storeapp/data/detail/HDF73/0f95f44ea8e2e7930321def493753a48.jpg",
    "http://public.codesquad.kr/jk/storeapp/data/detail/HBDEF/4cce011a4a352c22cd399a60271b4921.jpg",
    "http://public.codesquad.kr/jk/storeapp/data/b6beada6b89af950289003d929936d9c.jpg",
  ];
  useEffect(() => {
    loadData(setBestDish, props._dishType);
  }, [props._dishType]);

  if (!currentItem) return null;

  return (
    <WrapDiv>
      <Span className="_innerTitle"> {props._innerText}</Span>
      <WrapTab>
        {bestDish.map((tabMenu, i) => {
          if (tabMenu.category_id === currentItem.category_id) {
            return (
              <Tab
                onClick={() => setCurrentIndex(i)}
                isTabAct={"_tabAct"}
                key={tabMenu.category_id}
                name={tabMenu.name}
              ></Tab>
            );
          } else {
            return (
              <Tab
                onClick={() => setCurrentIndex(i)}
                isTabAct={"_tabDeact"}
                key={tabMenu.category_id}
                name={tabMenu.name}
              ></Tab>
            );
          }
        })}
      </WrapTab>
      <WrapCard>
        {currentItem.items.map((card, i) => (
          <LargeCard
            key={card.detail_hash}
            _image={tempImgList[i]}
            _title={card.title}
            _description={card.description}
            _nPrice={getComma(card.n_price)}
            _sPrice={getComma(card.s_price)}
            _badge={card.badge}
          ></LargeCard>
        ))}
      </WrapCard>
    </WrapDiv>
  );
};

export default BestDish;
