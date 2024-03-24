import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 18, 19, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);

  &.is-shown {
    visibility: visible;
    opacity: 1;
  }

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
  }
`;

export const Window = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  border-radius: 20px;
  padding: 40px 20px;
  background-color: #fff;
  transition: all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 50px;
    margin: 25px 0;
    background-color: #fff;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px;
  }

  &.is-shown {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
    transform: scale(1);
  }

  &.is-hidden {
    visibility: hidden;
    opacity: 0;
    transform: scale(0.7);
    transform: translateY(-100vh);
  }
`;

export const Content = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const HeadInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  #rating-wrap {
    margin-top: -15px;
  }
`;

export const ModalDescr = styled.p`
  font-size: 16px;
  color: #475467;
`;

export const PicsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 7px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  li {
    width: 100%;
    display: flex;
    align-items: center;
    min-height: 200px;

    @media screen and (min-width: 768px) {
      flex-direction: row;
      width: calc(100% / 3);
      min-height: 300px;
    }
  }

  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    align-self: stretch;

    @media screen and (min-width: 768px) {
    }
  }
`;

export const CLoseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;

  svg {
    stroke: #101828;
    transition: stroke 150ms linear;
  }

  @media screen and (min-width: 1440px) {
    top: 40px;
    right: 40px;

    &:hover svg,
    &:focus svg {
      stroke: #e44848;
    }
  }
`;
