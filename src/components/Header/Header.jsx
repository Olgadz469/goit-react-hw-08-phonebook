import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/selectors';
import { Container } from 'layouts/Container';
import { HeaderBlock, Nav, NavigLink } from './Header.styled';

const Header = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <HeaderBlock>
      <Container>
        <Nav>
          <ul>
            <li>
              <NavigLink to="/">Home</NavigLink>
            </li>
            <li>
              <NavigLink to="/catalog">Catalog</NavigLink>
            </li>
            <li>
              <NavigLink id="favs" to="/favorites">
                Favorites
                {favorites.length > 0 && <div>{favorites.length}</div>}
              </NavigLink>
            </li>
          </ul>
        </Nav>
      </Container>
    </HeaderBlock>
  );
};

export default Header;
