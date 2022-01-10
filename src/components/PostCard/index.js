import {
  Container,
  Header,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Descrption,
  Tag,
  Content,
  Song,
  VideoContainer,
  Video,
  ActionContainer,
  PlayerIcon,
  Actions,
  ButtonContainer,
  Action,
} from "./styles";

import Button from "../Button";

function PostCard({ post }) {
  return (
    <Container>
      <Header>
        <PersonContainer>
          <Avatar src={post?.author?.avatar}></Avatar>
          <Info>
            <Author>{post?.author?.username}</Author>
            <span>{post?.author.name}</span>
            <Descrption>
              <span>{post?.description}</span>
              {post?.tags.map((tag, index) => {
                <Tag key={index}>{tag.title}</Tag>;
              })}
            </Descrption>
          </Info>
        </PersonContainer>
        <ButtonContainer>
          <Button></Button>
        </ButtonContainer>
      </Header>
      <Content>
        <Song>
          <img src="/images/songIcon.svg" s></img>
          <a>{post?.songName}</a>
        </Song>
        <VideoContainer>
          <Video
            src={post?.videoUrl}
            webkit-playinline="true"
            playsinline=""
            loop="true"
            preload="metadata"
          ></Video>
          <ActionContainer>
            <PlayerIcon src="/images/playIcon.svg"></PlayerIcon>
          </ActionContainer>
        </VideoContainer>
      </Content>
      <Actions>
        <Action>
          <img></img>
          <a></a>
        </Action>
        <Action>
          <img></img>
          <a></a>
        </Action>
        <Action>
          <img></img>
          <a></a>
        </Action>
      </Actions>
    </Container>
  );
}

export default PostCard;
