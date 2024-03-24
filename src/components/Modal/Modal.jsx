import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Container } from 'layouts/Container';
import Tabs from './Tabs/Tabs';
import sprite from 'assets/icons/sprite.svg';
import {
  Backdrop,
  CLoseBtn,
  Content,
  HeadInfo,
  ModalDescr,
  PicsList,
  Window,
} from './Modal.styled';
import {
  LocationWrap,
  Price,
  RatingLocationWrap,
  RatingWrap,
  Title,
} from 'components/Card/Card.styled';

const Modal = ({
  card,
  isModalShown,
  closeModal,
  activeTab,
  setActiveTab,
  clickToReviews,
  resetBodyOverflow,
}) => {
  const tabsRef = useRef();
  useEffect(() => {
    const handleESCClose = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', handleESCClose);

    return () => window.removeEventListener('keydown', handleESCClose);
  }, [closeModal]);

  useEffect(() => {
    clickToReviews &&
      tabsRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        duration: 1000,
      });
  }, [clickToReviews]);

  const handleBackdropClose = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      closeModal();
      resetBodyOverflow();
    }
  };

  return createPortal(
    <Backdrop
      className={isModalShown ? 'is-shown' : 'is-hidden'}
      onClick={handleBackdropClose}
    >
      <Container onClick={handleBackdropClose}>
        <Window className={isModalShown ? 'is-shown' : 'is-hidden'}>
          <CLoseBtn type="button" aria-label="Close modal" onClick={closeModal}>
            <svg width={20} height={20}>
              <use href={`${sprite}#icon-close`}></use>
            </svg>
          </CLoseBtn>

          <Content>
            <HeadInfo>
              <Title>{card.name}</Title>

              <RatingLocationWrap id="rating-wrap">
                <RatingWrap>
                  <svg width={20} height={20} fill={`#ffc531`}>
                    <use href={`${sprite}#icon-star`}></use>
                  </svg>

                  <p>{`${card.rating}(${card.reviews.length} Reviews)`}</p>
                </RatingWrap>

                <LocationWrap>
                  <svg width={20} height={20}>
                    <use href={`${sprite}#icon-pin`}></use>
                  </svg>

                  <p>{card.location.split(',').reverse().join(', ')}</p>
                </LocationWrap>
              </RatingLocationWrap>
              <Price>€{card.price.toFixed(2).replace(/\.00$/, '')}</Price>
            </HeadInfo>

            <PicsList>
              {card.gallery.length > 0 &&
                card.gallery.map((link, i) => (
                  <li key={`${card._id}/${i}`}>
                    <img src={link} alt={card.name} />
                  </li>
                ))}
            </PicsList>

            <ModalDescr>{card.description}</ModalDescr>

            <div ref={tabsRef}>
              <Tabs
                card={card}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />
            </div>
          </Content>
        </Window>
      </Container>
    </Backdrop>,
    document.getElementById('modal-root') || document.body
  );
};

export default Modal;
