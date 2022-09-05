import styled from 'styled-components';

const blue = '#1755d1';

const InfoContainer = styled.div`
  margin: 5rem 30rem 10rem 30rem;
  border: 5px solid ${blue};
  padding: 1rem;
  background: white;
  @media all and (max-width: 768px) {
    margin: 1rem 1rem 1rem 1rem;
  }
`
export default InfoContainer;