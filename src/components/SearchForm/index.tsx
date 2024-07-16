import { useContext, useState } from "react";
import { SearchContainer, SearchContent, SearchHeader } from "./styles";
import { PostContext } from "../../contexts/PostContext";

export function SearchForm() {
  const { posts, fetchPostData } = useContext(PostContext);
  const [inputValue, setInputValue] = useState("");

  function handleOnSearchInputChange(e) {
    fetchPostData(e.target.value);
    setInputValue(e.target.value);
  }

  return (
    <SearchContainer>
      <SearchContent>
        <SearchHeader>
          <h4>Publicações</h4>
          <span>
            {posts.length === 0
              ? `${posts.length} publicação`
              : `${posts.length} publicações`}
          </span>
        </SearchHeader>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={inputValue}
          onChange={() => handleOnSearchInputChange(event)}
        />
      </SearchContent>
    </SearchContainer>
  );
}
