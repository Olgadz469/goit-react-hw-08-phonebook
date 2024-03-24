import styled from 'styled-components';

export const TabsWrap = styled.div`
  hr {
    background-color: rgba(16, 24, 40, 0.2);
  }
`;

export const TabsList = styled.ul`
  display: flex;
  align-items: center;
  gap: 40px;

  li button {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #475467;
    transition: color rgba(71, 84, 103, 0.2);

    @media screen and (min-width: 1440px) {
      &:hover,
      &:focus {
        color: #e44848;
      }
    }

    &.active::after {
      position: absolute;
      top: 31px;
      display: block;
      content: '';
      width: 100%;
      height: 3px;
      background-color: #e44848;
    }
  }
`;

export const RenderBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;
