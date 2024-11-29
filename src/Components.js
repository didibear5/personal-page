import { styled, keyframes } from '@vue-styled-components/core'


import { VIcon, VDialog, VOverlay } from 'vuetify/components'

// import { keyframes } from '@emotion/react'

// import Paper from '@mui/material/Paper';
// import Modal from '@mui/material/Modal';

export const Wrapper = styled.div`
  font-family: Raleway, Helvetica, Arial, 微軟正黑體, Microsoft JhengHei,
    sans-serif;
  background-image: url(/personal-page/images/key_vision.jpg);
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  overflow: hidden;
  padding-top: 0;

  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 8px;
  }
  h4 {
    margin: 0;
    font-size: 1.5rem;
  }
  h2,
  h4 {
    font-family: inherit;
    font-weight: 400;
  }
  .v-btn {
    letter-spacing: initial;
    text-transform: none;
    // padding: 9px;

  }
  .btn {
    color: black;
    display: inline-block;
    background-color: transparent;
    border: 1.5px solid;
    padding: 8px;
    margin: 20px 0px;
    border-radius: 5px;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    text-decoration: none;
    transition: background-color 0.1s;
    &:hover {
      color: white;
      border: 1.5px solid black;
      background-color: black;
      text-decoration: none;
    }
  }
  .icon {
    width: 1.2em;
    margin-right: 0.7em;
    vertical-align: middle;
    &:hover {
      cursor: pointer;
    }
  }
  .my-photo {
    border-radius: 300px;
    width: 100%;
    max-width: 250px;
    min-width: 150px;
    margin: 0.5em auto;
    display: block;
  }
  .row {
    display: flex;
    justify-content: center !important;
    flex-wrap: wrap;
    padding: 30px;
  }
  .col-about-me-photo {
    margin: 0 20px;
  }
  .col-about-me-text {
    flex: 0 0 45%;
    margin: 0 20px;
    min-width: 550px;

    @media (max-width: 576px) {
      flex: 0 0 100%;
      min-width: 0px;
    }
    @media (max-width: 946px) {
      margin-top: 1em;
    }
  }
  .col-project-text {
    flex: 0 0 45%;
    margin: 0 20px;

    @media (max-width: 576px) {
      flex: 0 0 100%;
    }
    @media (min-width: 576px) and (max-width: 946px) {
      flex: 0 0 80%;
    }
  }
  .col-project-photo {
    flex: 0 0 30%;
    margin: 0 20px;

    @media (max-width: 576px) {
      flex: 0 0 100%;
    }
    @media (min-width: 576px) and (max-width: 946px) {
      flex: 0 0 80%;
      margin-top: 20px;
    }
  }
`;

export const Navbar = styled('div', { changed: Boolean })`
  background-color: ${(props) => (props.changed ? '#9e9ebb' : 'transparent')};
  transition: all 0.5s linear;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  .top-navbar {
    display: flex;
    flex-direction: row;
  }

`;

export const NavName = styled('div', { changed: Boolean })`
  display: block;
  margin: 8px 12px;
  padding: 4px 6px;
  color: ${(props) => (props.changed ? '#ffffff' : '#c1a6b4')};
  font-size: 1.3em;
  font-weight: 600;
  transition: color 0.5s linear;
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 576px) {
    color: ${(props) => (props.changed ? '#ffffff' : '#ab6d8d')};
  }
`;

export const NavToggle = styled(VIcon, { changed: Boolean })`
  margin-right: 10px;
  display: none;
  color: ${(props) => (props.changed ? '#ffffff' : '#ab6d8d')};
  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;


export const TopNavbarLink = styled('div', { changed: Boolean })`
  display: block;
  margin: 8px 12px;
  padding: 8px;
  color: ${props => props.changed ? '#ffffff' : '#c1a6b4'};
  border: ${props => props.changed ? '1.5px solid #ffffff' : '1.5px solid #c1a6b4'};
  border-radius: 4px;
  transition: all 0.1s linear;
  font-weight: 600;
  font-size: initial;
  cursor: pointer;
  &:hover {
    color: #ffffff;
    background-color: ${props => props.changed ? '#ffffff33' : '#c1a6b4'};
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
const animateArrowDown = keyframes`
  from {
    transform: translateY(0em);
    opacity:0
  } 
  to {
    transform: translateY(1em);
    opacity:1
  }
`;

export const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95vh;
  overflow: hidden;
  position: relative;
  text-align: center;
  &:before {
    pointer-events: none;
    transition: opacity 1s ease-in-out;
    transition-delay: 0s;
    content: '';
    background: rgb(50, 166, 175);
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }

  @media (max-width: 576px) {
    background-image: url(/personal-page/images/key_vision.jpg);
    background-attachment: fixed;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .inner {
    margin: 48px auto 0px;
    padding: 20px 0;
    color: #ffffff;
    width: 580px;
    border-top: 3px solid;
    border-bottom: 3px solid;
    background-color: rgba(220, 177, 90, 0.6);
    animation: animatet-inner 2s;
    h2 {
      margin-top: 0;
      margin-bottom: 0.3em;
      color: #ffffff;
    }
    h4 {
      color: #ffffff;
    }
    @media (max-width: 576px) {
      width: 100%;
    }
  }

  .arrow-down {
    margin-top: 0.3em;
    animation: ${animateArrowDown} 2s infinite;
    &:hover {
      cursor: pointer;
    }
  }

`;

export const Section = styled.div`
  &::before {
    content: url(/personal-page/images/icon/decoration.svg);
    display: block;
    margin: -111px auto 40px;
    text-align: center;
    @media (max-width: 768px) {
      content: url(/personal-page/images/icon/decoration_small.svg);
      display: block;
      margin: -91px auto 20px;
      text-align: center;
    }
  }
  &#about-me {
    background-color: #f5dbdb;
    padding: 70px 0;
  }
  &#project {
    background-color: #ebebeb;
    padding: 70px 0;
  }
  .project-img {
    width: 100%;
    // border-radius: 15px;
    // &:hover {
    //   cursor: pointer;
    // }
  }
  &#gallery {
    background-color: white;
    padding: 70px 0;
  }
`;

export const PanelsWrapper = styled.div`
  display: flex;
  justify-content: center !important;
  flex-wrap: wrap;
`;

export const Panel = styled('div', { background: String, position: String, size: String })`
  height: 230px;
  width: 170px;
  flex-direction: column;
  margin: 8px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #c1a6b4;
  background-image: ${(props) => `url(/personal-page${props.background})`};
  background-position: ${(props) =>
    props.position ? props.position : 'center'};
  background-size: ${(props) => (props.position ? props.size : 'cover')};
  &:hover {
    cursor: pointer;
    opacity: 0.85;
  }
  @media (max-width: 460px) {
    height: 230px;
    width: 250px;
  }
`;

export const Footer = styled.div`
  background-color: rgba(97, 62, 93, 0.55);
  p {
    margin: 0;
    color: white;
    text-align: center;
    padding: 20px;
    font-size: 0.9em;
  }
`;

export const ArrowUp = styled('img', { visible: Boolean })`
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 12px;
  z-index: 30;
  cursor: pointer;
  width: 40px;
  transition: all 0.5s cubic-bezier(0.12, 0.54, 0.58, 1.22);
`;

export const WebDialog = styled(VDialog, { })`
  .web-dialog {
    max-width: 400px;
    border-radius: 0 !important;
  }
  .dialog-cross {
    position: absolute;
    right: 0;
    background: #0000004d;
    padding: 8px;
    opacity: 0.8;
    &:hover {
      cursor: pointer;
    }
  }
  .v-overlay__content {
    width: 100%;
    @media screen and (max-width: 400px) {
      max-height: 100%;
    }
  }
`;

export const PaintingDialog = styled.div`
  .navigation-btn {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    height: 100px !important;
    width: 100px !important;
    display: flex;
    cursor: pointer;
    z-index: 10000;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }

  .left-btn {
    left: 12px;
  }
  .right-btn {
    right: 12px;
  }
`;

export const PaintingOverlay = styled(VOverlay, { })`
  .dialog-container {
    overflow: scroll;
    max-width: 800px;
    max-height: calc(100vh - 50px);
  }

  .dialog-cross {
    position: absolute;
    right: 0;
    background: #0000004d;
    padding: 8px;
    opacity: 0.8;
    &:hover {
      cursor: pointer;
    }
  }

 .dialog-image {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;


