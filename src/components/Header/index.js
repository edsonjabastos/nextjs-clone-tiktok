import {
  Container,
  Content,
  LogoContainer,
  LogoIcon,
  Logo,
  OptionsContainer,
  Icon,
  Avatar,
} from "./styles";

function Header() {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <LogoIcon src="/images/logoicon.svg"></LogoIcon>
          <Logo src="/images/logo.svg"></Logo>
        </LogoContainer>
        <OptionsContainer>
          <Icon></Icon>
          <Avatar>
            <img src="https://avatars.githubusercontent.com/u/79489992?v=4" />
          </Avatar>
        </OptionsContainer>
      </Content>
    </Container>
  );
}
export default Header;
