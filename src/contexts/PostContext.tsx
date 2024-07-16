import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../libs/axios";

export interface Post {
  title: string;
  body: string;
  comments: number;
  html_url: string;
  id: number;
  number: number;
}

interface PostContextProps {
  posts: Post[];
  fetchPostData: (query?: string) => Promise<void>;
}
interface PostContextProviderProps {
  children: ReactNode;
}

export const PostContext = createContext({} as PostContextProps);

export function PostContextProvider({ children }: PostContextProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  async function fetchPostData(query?: string) {
    const searchParam = query || "";
    const response = await api.get("/search/issues", {
      params: {
        q: `${searchParam}repo:nahteruya/github-blog`,
      },
    });
    setPosts(response.data.items);
  }

  useEffect(() => {
    fetchPostData();
  }, []);

  return (
    <PostContext.Provider value={{ posts, fetchPostData }}>
      {children}
    </PostContext.Provider>
  );
}
