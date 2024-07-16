import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faBuilding,
  faUserGroup,
  faArrowUpRightFromSquare,
} from "@fortawesome/free-solid-svg-icons";

import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileInfo,
  ProfileSummary,
} from "./style";
import { useEffect, useState } from "react";

interface profileInfoProps {
  login: string;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string;
  bio: string;
  followers: number;
}

export function Profile() {
  const [profileInfo, setProfileInfo] = useState<profileInfoProps | null>(null);

  async function fetchProfileData() {
    try {
      const response = await fetch("https://api.github.com/users/nahteruya");
      if (!response.ok) {
        throw new Error("Fetching failed");
      }
      const data = await response.json();
      setProfileInfo(data);
    } catch (error) {
      console.error("Error: ", error);
    }
  }

  useEffect(() => {
    fetchProfileData();
  }, []);

  if (!profileInfo) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContainer>
      <ProfileContent>
        <img src={profileInfo.avatar_url} alt="" />
        <ProfileInfo>
          <ProfileHeader>
            <h1>{profileInfo.name}</h1>
            <a href={profileInfo.html_url} target="_blank">
              GITHUB
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </a>
          </ProfileHeader>
          <p>{profileInfo.bio}</p>
          <ProfileSummary>
            <span>
              <FontAwesomeIcon icon={faGithub} />
              {profileInfo.login}
            </span>
            <span>
              <FontAwesomeIcon icon={faBuilding} />
              {profileInfo.company}
            </span>
            <span>
              <FontAwesomeIcon icon={faUserGroup} />
              {profileInfo.followers} seguidores
            </span>
          </ProfileSummary>
        </ProfileInfo>
      </ProfileContent>
    </ProfileContainer>
  );
}
