import React, { useState, useEffect } from 'react';
import { WrapDiv, WrapTab, WrapCard } from './index.style';
import loadData from '../../../util/loadData';
import useTabs from '../../../util/useTaps';
import Span from '../../atoms/Span';
import Tab from '../../molecules/Tab';
import LargeCard from '../../molecules/LargeCard';

const BestDish = ({ children, ...props }) => {
  const [bestDish, setBestDish] = useState([]);
  const { currentItem, changeItem } = useTabs(0, bestDish);
  //임시이미지
  const tempImgUrl =
    'http://public.codesquad.kr/jk/storeapp/data/f6817349118d4c671da8dca9065649a9.jpg';

  useEffect(() => {
    loadData(setBestDish, props._dishType);
  }, []);

  if (!currentItem) return null;

  return (
    <WrapDiv>
      <Span className="_innerTitle"> {props._innerText}</Span>
      <WrapTab>
        {bestDish.map((tabMenu, i) => {
          if (tabMenu.category_id === currentItem.category_id) {
            return (
              <Tab
                onClick={() => changeItem(i)}
                isTabAct={'_tabAct'}
                key={tabMenu.category_id}
                name={tabMenu.name}
              ></Tab>
            );
          } else {
            return (
              <Tab
                onClick={() => changeItem(i)}
                isTabAct={'_tabDeact'}
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
            _image={tempImgUrl}
            _title={card.title}
            _description={card.description}
            _nPrice={card.n_price}
            _sPrice={card.s_price}
            _badge={card.badge}
          ></LargeCard>
        ))}
      </WrapCard>
    </WrapDiv>
  );
};

export default BestDish;