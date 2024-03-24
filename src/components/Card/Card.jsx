import { useState, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../../redux/slice';
import { selectFavorites } from '../../redux/selectors';
import Modal from 'components/Modal/Modal';
import sprite from 'assets/icons/sprite.svg';

import {
  CamperPic,
  MainInfoWrap,
  TitlePriceWrap,
  Title,
  PriceWrap,
  Price,
  RatingLocationWrap,
  RatingWrap,
  LocationWrap,
  Description,
  DetailsList,
  ShowBtn,
  AddToFavBtn,
} from './Card.styled';

const AdvertCard = ({ card }) => {
  const [isModalShown, setIsModalShown] = useState(false);
  const [activeTab, setActiveTab] = useState('features');
  const [clickToReviews, setClickToReviews] = useState(false);

  const reviewsRef = useRef();
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isCardFavorite = useMemo(
    () => favorites.find(fav => fav._id === card._id),
    [favorites, card._id]
  );

  const scrollToReviews = () => {
    if (reviewsRef.current) {
      reviewsRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <>
      <CamperPic>
        <img src={card.gallery[0]} alt={card.name} />
      </CamperPic>

      <MainInfoWrap>
        <TitlePriceWrap>
          <Title>{card.name}</Title>

          <PriceWrap>
            <Price>€{card.price.toFixed(2).replace(/\.00$/, '')}</Price>
            <AddToFavBtn
              type="button"
              aria-label="Add to favorites"
              onClick={() =>
                isCardFavorite
                  ? dispatch(removeFromFavorites(card._id))
                  : dispatch(addToFavorites(card))
              }
              $isFavorite={isCardFavorite}
            >
              <svg id="fav-icon" width={20} height={20}>
                <use href={`${sprite}#icon-fav`}></use>
              </svg>
            </AddToFavBtn>
          </PriceWrap>
        </TitlePriceWrap>

        <RatingLocationWrap>
          <RatingWrap>
            <svg width={20} height={20} fill={`#FFC531`}>
              <use href={`${sprite}#icon-star`}></use>
            </svg>

            <button
              type="button"
              aria-label="Open reviews"
              onClick={() => {
                setIsModalShown(true);
                document.body.style.overflow = 'hidden';
                setActiveTab('reviews');
                scrollToReviews();
                setClickToReviews(true);
              }}
            >{`${card.rating}(${card.reviews.length} Reviews)`}</button>
          </RatingWrap>

          <LocationWrap>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-pin`}></use>
            </svg>

            <p>{card.location.split(',').reverse().join(', ')}</p>
          </LocationWrap>
        </RatingLocationWrap>

        <Description>{card.description}</Description>

        <DetailsList>
          <li>
            <svg width={20} height={20} style={{ stroke: 'none' }}>
              <use href={`${sprite}#icon-adults`}></use>
            </svg>
            {card.adults} adults
          </li>

          <li className="capitalize">
            <svg width={20} height={20} style={{ stroke: 'none' }}>
              <use href={`${sprite}#icon-transmission`}></use>
            </svg>
            {card.transmission}
          </li>

          <li className="capitalize">
            <svg width={20} height={20} style={{ stroke: 'none' }}>
              <use href={`${sprite}#icon-petrol`}></use>
            </svg>
            {card.engine}
          </li>

          {card.details.kitchen >= 1 && (
            <li>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-kitchen`}></use>
              </svg>
              Kitchen
            </li>
          )}

          <li>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-bedroom`}></use>
            </svg>
            {card.details.beds} beds
          </li>

          {card.details.airConditioner >= 1 && (
            <li>
              <svg width={20} height={20}>
                <use href={`${sprite}#icon-Vectorwind`}></use>
              </svg>
              AC
            </li>
          )}
        </DetailsList>

        <ShowBtn
          type="button"
          aria-label="Show more details"
          onClick={() => {
            setIsModalShown(true);
            document.body.style.overflow = 'hidden';
          }}
        >
          Show more
        </ShowBtn>
      </MainInfoWrap>

      {isModalShown && (
        <Modal
          card={card}
          isModalShown={isModalShown}
          closeModal={() => {
            setIsModalShown(false);
            document.body.style.overflow = 'visible';
          }}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          ref={reviewsRef}
          clickToReviews={clickToReviews}
          resetBodyOverflow={() => {
            document.body.style.overflow = 'visible';
          }}
        />
      )}
    </>
  );
};

export default AdvertCard;
