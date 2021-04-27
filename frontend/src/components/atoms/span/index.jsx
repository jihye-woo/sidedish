import React from "react";
import styled from "styled-components";

const StyledSpan = styled.span`
  display: block;
  color: ${(props) => props._color};
  margin: ${(props) => props._margin};
  font-size: ${(props) => props._fontSize};
  font-weight: ${(props) => props._fontWeight};
  font-family: "Noto Sans KR";
  ${(props) =>
    props._title &&
    `margin:16px 0 0 0;
    font-size:16px;
    font-weight:400;
    color:#333;
    `}
  ${(props) =>
    props._description &&
    `
    margin:8px 0;
    font-size:14px;
    font-weight:400;
    color:#828282;
    `}
  ${(props) =>
    props._sPrice &&
    `font-size:20px;
    font-weight:700;
    color:#010101;
    `}
  ${(props) =>
    props._nPrice &&
    `margin:9px 0 0 8px
    font-size:14px;
    font-weight:400;
    color:#BDBDBD;
    ;
    text-decoration:line-through;`}
    ${(props) =>
    props._logo &&
    `font-size:40px;
    font-weight:900;
    color:#333;`}

     ${(props) =>
    props._tabDeact &&
    `font-size:18px;
    font-weight:400;
    color:#828282;
    `}
     ${(props) =>
    props._tabAct &&
    `font-size:18px;
    font-weight:700;
    color:#333;
    `}
    ${(props) =>
    props._login &&
    `font-size:16px;
    font-weight:400;
    color:#333;`}

    ${(props) =>
    props._innerTitle &&
    `font-size:24px;
    font-weight:700;;
    `};
  ${(props) =>
    props._hoverTitle &&
    `font-size:24px;
    font-weight:700;
    color: #FFFFFF;
    `};
  ${(props) =>
    props._headMenuDeact &&
    `margin:16px 0 0 0;
    font-size:16px;
    font-weight:400;
    color:#333;
    `}
  ${(props) =>
    props._headMenuAct &&
    `margin:16px 0 0 0;
    font-size:16px;
    font-weight:700;
    color:#333;
    `}
  ${(props) =>
    props._dropDeact &&
    `margin-bottom:8px;
    font-size:16px;
    font-weight:400;
    color: #828282;
    `};
`;

const Span = ({ children, ...props }) => (
  <StyledSpan {...props}>{children}</StyledSpan>
);

export default Span;
