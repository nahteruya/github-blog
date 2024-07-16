import { useContext } from "react";
import { Card } from "../../components/Card";
import { Profile } from "../../components/Profile";
import { SearchForm } from "../../components/SearchForm";
import { CardsList, HomeContainer } from "./styles";
import { PostContext } from "../../contexts/PostContext";
import { Link } from "react-router-dom";

export function Home() {
  const { posts } = useContext(PostContext);

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <CardsList>
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.number}`}>
            <Card post={post} />
          </Link>
        ))}
      </CardsList>
    </HomeContainer>
  );
}
