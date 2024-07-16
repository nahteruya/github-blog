import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavContainer, PostHeaderContainer, PostInfo } from "./style";
import {
  faArrowUpRightFromSquare,
  faChevronLeft,
  faCalendarDay,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Link } from "react-router-dom";

export function PostHeader({ post }) {
  return (
    <PostHeaderContainer>
      <NavContainer>
        <Link to="/">
          <FontAwesomeIcon icon={faChevronLeft} />
          VOLTAR
        </Link>
        <a href={post.html_url} target="_blank">
          GITHUB
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </NavContainer>
      <h1>{post.title}</h1>
      <PostInfo>
        <span>
          <FontAwesomeIcon icon={faGithub} />
          {post.user.login}
        </span>
        <span>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatDistanceToNow(new Date(post.created_at), {
            addSuffix: true,
            locale: ptBR,
          })}
        </span>
        <span>
          <FontAwesomeIcon icon={faComment} />
          {post.comments <= 1
            ? `${post.comments} comentário`
            : `${post.comments} comentários`}
        </span>
      </PostInfo>
    </PostHeaderContainer>
  );
}
