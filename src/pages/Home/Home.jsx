import { HomeContainer, HomeTitle } from './Home.styled';

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Welcome to Phonebook page{' '}
        <span role="img" aria-label="Telephone icon">
          ☎️
        </span>
      </HomeTitle>
    </HomeContainer>
  );
};


export default Home;