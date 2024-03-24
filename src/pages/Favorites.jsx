import { useSelector } from 'react-redux';
import { selectFavorites } from '../redux/selectors';
import { Container } from 'layouts/Container';
import AdvertCard from 'components/Card/Card';
import { AdvertsList, CardItem } from 'components/Card/Card.styled';

const Favorites = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      <Container>
        {favorites.length > 0 ? (
          <AdvertsList>
            {favorites.map(fav => (
              <CardItem key={fav._id}>
                <AdvertCard card={fav} />
              </CardItem>
            ))}
          </AdvertsList>
        ) : (
          <div>It seems you have not added anything to favorites ...</div>
        )}
      </Container>
    </>
  );
};

export default Favorites;
