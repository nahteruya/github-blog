import { useParams } from "react-router-dom";
import { PostHeader } from "../../components/PostHeader";
import { PostContent, PostPageContainer } from "./style";
import { api } from "../../libs/axios";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

export function PostPage() {
  const { id } = useParams();
  const [currentPost, setCurrentPost] = useState();
  console.log(id);

  async function fetchPostDataByNumber(id: string) {
    try {
      const response = await api.get(
        `/repos/nahteruya/github-blog/issues/${id}`
      );
      console.log("API Response:", response.data);
      setCurrentPost(response.data);
    } catch (error) {
      console.error("Failed to fetch post data:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchPostDataByNumber(id);
    }
  }, [id]);

  if (!currentPost) {
    return <div>Loading...</div>;
  }

  return (
    <PostPageContainer>
      <PostHeader post={currentPost} />
      <PostContent>
        <ReactMarkdown>{currentPost.body}</ReactMarkdown>
      </PostContent>
    </PostPageContainer>
  );
}
