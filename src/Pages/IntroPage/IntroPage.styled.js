import styled from 'styled-components';
import scotland from '../../Assets/scotland.jpg'

export const Background = styled.div`
  height: 100vh;
  background-image: url(${scotland});
  background-repeat: none;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  

`;

export const Title = styled.h1`
  font-family: ${(props) => props.theme.font.font1.med};
`

