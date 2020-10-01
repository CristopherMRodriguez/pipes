import styled from 'styled-components';

export const MainWrapper = styled.div`
  position: absolute;
  width: 100%;

`

export const Nav = styled.nav`
  height: 20vh;
  background: ${(props) => props.theme.colors.backgrounds.light};

  color: ${(props) => props.theme.colors.secondary.dark};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;

`

export const Background = styled.div`
  height: 80vh;

  display: flex;
  align-items: center;
  justify-content: center;

`;

export const MusicNote = styled.div`
position: absolute;
bottom: 0;
`