import styled, { css } from 'styled-components';

const TitlesStyles = css`
  color: #101828;
  font-size: 16px;
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 24px;
  }
`;

const FlexAlign = css`
  display: flex;
  align-items: center;
`;

export const AdvertsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 50px 0;
`;

export const CardItem = styled.li`
  ${FlexAlign}
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  width: 100%;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
  padding: 15px;
  background-color: #fff;
  box-shadow: rgba(239, 241, 243, 0.3) 0px 1px 2px 0px,
    rgba(225, 229, 232, 0.15) 0px 1px 3px 1px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  @media screen and (min-width: 1440px) {
    width: 80%;
    padding: 24px;
    margin: 0 auto;
  }
`;

export const CamperPic = styled.div`
  min-width: 100%;
  min-height: 100%;
  align-self: stretch;

  @media screen and (min-width: 768px) {
    min-width: 50%;
  }

  @media screen and (min-width: 1440px) {
    min-width: 30%;
    max-width: 30%;
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const MainInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: hidden;
  max-width: 100%;

  @media screen and (min-width: 1440px) {
    gap: 24px;
  }
`;

export const TitlePriceWrap = styled.div`
  ${FlexAlign}
  justify-content: space-between;
  gap: 24px;
`;

export const Title = styled.p`
  ${TitlesStyles}
`;

export const PriceWrap = styled.div`
  ${FlexAlign}
  gap: 8px;
`;

export const AddToFavBtn = styled.button`
  svg {
    fill: ${({ $isFavorite }) => ($isFavorite ? '#E44848' : 'transparent')};
    stroke: ${({ $isFavorite }) => ($isFavorite ? 'none' : '#101828')};
  }

  @media screen and (min-width: 1440px) {
    &:hover svg {
      fill: ${({ $isFavorite }) => ($isFavorite ? 'transparent' : '#E44848')};
      stroke: ${({ $isFavorite }) => ($isFavorite ? '#101828' : 'E44848')};
    }
  }
`;

export const Price = styled.p`
  ${TitlesStyles}
`;

export const RatingLocationWrap = styled.div`
  ${FlexAlign}
  gap: 16px;

  @media screen and (min-width: 1440px) {
    margin-top: -25px;
  }
`;

export const RatingWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  button {
    text-decoration: underline;
    cursor: pointer;
    transition: color #e44848;

    &:hover {
      color: #e44848;
    }
  }
`;

export const LocationWrap = styled.div`
  ${FlexAlign}
  gap: 5px;

  svg {
    fill: none;
    stroke: #101828;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #475467;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const DetailsList = styled.ul`
  ${FlexAlign}
  flex-wrap: wrap;
  gap: 8px;

  li {
    ${FlexAlign}
    gap: 5px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 100px;
    padding: 10px 20px;
    color: #101828;
    background-color: #cdcdcd;

    &.capitalize {
      text-transform: capitalize;
    }

    @media screen and (min-width: 1440px) {
      font-size: 16px;
      padding: 12px 24px;
    }
  }
`;

export const ShowBtn = styled.button`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.08px;
  max-width: 140px;
  border-radius: 200px;
  padding: 16px 0;
  background-color: #e44848;
  color: #fff;

  @media screen and (min-width: 1440px) {
    font-size: 16px;
    max-width: 166px;
    min-height: 56px;
    transition: background-color #e44848;

    &:hover,
    &:focus {
      background-color: #d84343;
    }
  }
`;

export const LoadMoreBtn = styled.button`
  display: block;
  border-radius: 200px;
  border: 1px solid rgba(71, 84, 103, 0.2);
  padding: 16px 32px;
  margin: 0 auto 30px auto;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.08px;
  color: #101828;
  transition: border-color #e44848;

  @media screen and (min-width: 1440px) {
    &:hover,
    &:focus {
      border-color: #e44848;
    }
  }
`;
