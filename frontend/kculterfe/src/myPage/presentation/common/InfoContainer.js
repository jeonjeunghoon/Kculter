import styled from 'styled-components';

const blue = '#1755d1';

const InfoContainer = styled.div`
  margin: auto;
  border: 5px solid ${blue};
  padding: 1rem;
  background: white;
  min-width: 300px;
  max-width: 600px;
  @media all and (max-width: 768px) {
    margin: 1rem 1rem 1rem 1rem;
  }
`
export default InfoContainer;