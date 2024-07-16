import { Post } from "../../contexts/PostContext";
import { CardContainer, CardHeader } from "./styles";

interface CardProps {
  post: Post;
}

export function Card({ post }: CardProps) {
  return (
    <CardContainer>
      <CardHeader>
        <h3>{post.title}</h3>
        <time dateTime="2024-07-01 09:47">Há 1 dia</time>
      </CardHeader>
      <p>{post.body}</p>
    </CardContainer>
  );
}
