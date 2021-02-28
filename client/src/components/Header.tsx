import styled from 'styled-components';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const Header = (): JSX.Element => {
    return (
        <Container>
            <Main>
                <AccessTimeIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" />
                    </Search>
                </SearchContainer>
                <HelpOutlineIcon />
            </Main>
            <UserContainer>
                <Name>
                    elPoeta
               </Name>
                <ImageContainer>
                    <img src="https://i.imgur.com/6VBx3io.png" alt="user" />
                </ImageContainer>
            </UserContainer>
        </Container>
    )
}

export default Header;

const Container = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #2d082d;
  color: #fff;
`;

const Main = styled.div`
  display:flex;
  align-items: center;
  margin: 0 16px;
`;
const SearchContainer = styled.div`
  min-width: 400px;
  margin: 0 16px;
`;

const Search = styled.div`
display:flex;
  align-items: center;
  box-shadow: inset 0 0 0 1px rgb(104, 74, 104);
  width: 100%;
  border-radius: 6px;
  input {
      background: transparent;
      color: #fff;
      padding: 4px 8px;
      border: none;
      width: 100%;
  } 
  input:focus {
      outline: none;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`;

const Name = styled.div`
 padding-right: 16px;
`;
const ImageContainer = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid #ccc;
  border-radius: 3px;
  img {
      width: 100%;
  }
`;


