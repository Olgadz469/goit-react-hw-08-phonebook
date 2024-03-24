import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../redux/operations';
import {
  selectAdverts,
  selectIsLoading,
  selectTotal,
} from '../redux/selectors';
import { Container } from 'layouts/Container';
import Loader from 'components/Loader/Loader';
import AdvertCard from 'components/Card/Card';
import {
  AdvertsList,
  CardItem,
  LoadMoreBtn,
} from 'components/Card/Card.styled';

const Catalog = () => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const adverts = useSelector(selectAdverts);
  const total = useSelector(selectTotal);

  useEffect(() => {
    dispatch(getAllAdverts({ page, limit: 4 }));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    if (adverts.length >= total) {
      return;
    }
    setPage(prev => prev + 1);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <Container>
      <AdvertsList>
        {adverts.length > 0 &&
          adverts.map((card, i) => (
            <CardItem key={card._id}>
              <AdvertCard card={card} />
            </CardItem>
          ))}
      </AdvertsList>

      {adverts.length !== total && adverts.length > 0 && (
        <LoadMoreBtn type="button" onClick={handleLoadMore}>
          Load more
        </LoadMoreBtn>
      )}
    </Container>
  );
};

export default Catalog;
