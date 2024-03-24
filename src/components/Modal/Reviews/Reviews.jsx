import sprite from 'assets/icons/sprite.svg';
import {
  Avatar,
  Comment,
  NameRatingWrap,
  ReviewHead,
  ReviewersList,
  StarsList,
} from './Reviews.styled';
import { FeatureReviewsWrap } from '../Features/Features.styled';

const Reviews = ({ card }) => {
  return (
    <FeatureReviewsWrap>
      <ReviewersList>
        {card.reviews.map(({ reviewer_name, reviewer_rating, comment }, i) => (
          <li key={`${reviewer_name}/${i}`}>
            <ReviewHead>
              <Avatar>{reviewer_name.slice(0, 1)}</Avatar>
              <NameRatingWrap>
                <p>{reviewer_name}</p>
                <StarsList>
                  {[...Array(5)].map((_, i) => (
                    <li key={i}>
                      <svg
                        width={20}
                        height={20}
                        fill={
                          i < Math.round(reviewer_rating)
                            ? '#ffc531'
                            : '#f2f4f7'
                        }
                      >
                        <use href={`${sprite}#icon-star`}></use>
                      </svg>
                    </li>
                  ))}
                </StarsList>
              </NameRatingWrap>
            </ReviewHead>
            <Comment>{comment}</Comment>
          </li>
        ))}
      </ReviewersList>
    </FeatureReviewsWrap>
  );
};

export default Reviews;
