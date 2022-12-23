import Search from '@components/shared/Search';
import { SearchContainer, TitleText } from './styles';

const Hero = () => {
  return (
    <>
      <TitleText>Real-time Blockchain Data</TitleText>
      <SearchContainer>
        <Search />
      </SearchContainer>
    </>
  );
};

export default Hero;
