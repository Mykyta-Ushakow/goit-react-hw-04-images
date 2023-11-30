import { LoaderDiv } from './Loader.styled';
import { Circles } from 'react-loader-spinner';

export const Loader = props => {
  return (
    <LoaderDiv>
      <Circles
        height="120"
        width="120"
        color="#3f51b5"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </LoaderDiv>
  );
};

export default Loader;
