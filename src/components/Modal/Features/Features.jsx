import sprite from 'assets/icons/sprite.svg';
import { DetailsList } from 'components/Card/Card.styled';
import {
  FeatureReviewsWrap,
  DetailsItemsWrap,
  VehicleDetailsWrap,
  VehicleDetailsList,
} from './Features.styled';

const Features = ({
  card: {
    details,
    adults,
    transmission,
    engine,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  },
}) => {
  return (
    <FeatureReviewsWrap>
      <DetailsItemsWrap>
        <DetailsList>
          <li>
            <svg width={20} height={20} style={{ stroke: 'none' }}>
              <use href={`${sprite}#icon-adults`}></use>
            </svg>
            {`${adults} adults`}
          </li>

          <li className="capitalize">
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-transmission`}></use>
            </svg>
            {transmission}
          </li>

          <li className="capitalize">
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-Vectorwind`}></use>
            </svg>
            {`${details.airConditioner} AC`}
          </li>

          <li className="capitalize">
            <svg width={20} height={20} style={{ stroke: 'none' }}>
              <use href={`${sprite}#icon-petrol`}></use>
            </svg>
            {engine}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-kitchen`}></use>
            </svg>
            {`${details.kitchen} kitchen`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-bedroom`}></use>
            </svg>
            {`${details.beds} beds`}
          </li>

          <li>
            <svg id="fav-icon" width={20} height={20}>
              <use href={`${sprite}#icon-conditioner`}></use>
            </svg>
            {`${details.airConditioner} air conditioner`}
          </li>

          <li>
            <svg id="fav-icon" width={20} height={20}>
              <use href={`${sprite}#icon-cd`}></use>
            </svg>
            {`${details.CD} CD`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-radio`}></use>
            </svg>
            {`${details.radio} Radio`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-tv`}></use>
            </svg>
            {`${details.TV} TV`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-hob`}></use>
            </svg>
            {`${details.HobIcon} hob`}
          </li>

          <li>
            <svg id="fav-icon" width={20} height={20}>
              <use href={`${sprite}#icon-shower`}></use>
            </svg>
            {`${details.shower} shower`}
          </li>

          <li>
            <svg id="fav-icon" width={20} height={20}>
              <use href={`${sprite}#icon-freezer`}></use>
            </svg>
            {`${details.freezer} freezer`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-toilet`}></use>
            </svg>
            {`${details.toilet} toilet`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-microwave`}></use>
            </svg>
            {`${details.microwave} microwave`}
          </li>

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-gas`}></use>
            </svg>
            {`${details.gas} gas`}
          </li>

          <li>
            <svg id="fav-icon" width={20} height={20}>
              <use href={`${sprite}#icon-water`}></use>
            </svg>
            {`${details.water} water`}
          </li>
        </DetailsList>
      </DetailsItemsWrap>

      <VehicleDetailsWrap>
        <h3>Vehicle details</h3>
        <hr />
        <VehicleDetailsList>
          <li className="capitalize">
            <p>Form</p>
            <p>{form}</p>
          </li>

          <li>
            <p>Length</p>
            <p>{length}</p>
          </li>

          <li>
            <p>Width</p>
            <p>{width}</p>
          </li>

          <li>
            <p>Height</p>
            <p>{height}</p>
          </li>

          <li>
            <p>Tank</p>
            <p>{tank}</p>
          </li>

          <li>
            <p>Consumption</p>
            <p>{consumption}</p>
          </li>
        </VehicleDetailsList>
      </VehicleDetailsWrap>
    </FeatureReviewsWrap>
  );
};

export default Features;
