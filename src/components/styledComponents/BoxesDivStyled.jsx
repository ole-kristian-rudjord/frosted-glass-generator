import styled from 'styled-components';

export default styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${(props) => props.spacing};
  padding: ${(props) => props.spacing};
  padding-top: 0;
  overflow-x: auto;
  overflow-y: hidden;
`;