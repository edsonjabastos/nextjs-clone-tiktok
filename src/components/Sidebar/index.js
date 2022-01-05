import {
  Container,
  MenuItem,
  Following,
  FollowingHeader,
  InfoContainer,
  Links,
} from "./styles";

import User from "../User";

function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>Para você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas principais contas</FollowingHeader>
        <User
          user={{
            name: "Bloguerinha de MT",
            username: "blogmt",
            avatar:
              "https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/f4929801788ceb5304a5aa0a59f15ffe~c5_100x100.jpeg?x-expires=1641423600&x-signature=YqPiDylU2JURJEJx2WVULhIIjCY%3D",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Ínicio</a>
          <a>Sobre</a>
          <a>Sala de imprensa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>© 2020 TikTok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}
export default Sidebar;
