import styled from 'styled-components';

export const FeatureReviewsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 0;

  @media screen and (min-width: 768px) {
    width: 50%;
    max-height: 575px;
    overflow-y: auto;
    padding-right: 15px;

    &::-webkit-scrollbar {
      width: 3px;
    }

    &::-webkit-scrollbar-track {
      margin-top: 30px;
    }
  }
`;

export const DetailsItemsWrap = styled.div`
  padding: 40px 0;
`;

export const VehicleDetailsWrap = styled.div`
  h3 {
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    color: #101828;
    margin-bottom: 32px;
  }

  hr {
    background-color: rgba(16, 24, 40, 0.2);
    margin-bottom: 20px;
  }
`;

export const VehicleDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.33;
    color: #101828;

    &.capitalize {
      text-transform: capitalize;
    }
  }
`;
