import { useCallback, useEffect, useState } from "react"
import Card from "./user";

type GithubUser = {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  url: string;
  name: string;
  login: string;
  created_at: string;
};

export default function ProfileFinder() {
  const [userName, setUserName] = useState<string>('sangammukherjee')
  const [userData, setUserData] = useState<GithubUser | null>(null)
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchGithub = useCallback(async (searchUser: string) => {
    try {
      setloading(true);
      setError(false);
      const trimmedUser = searchUser.trim();

      if (!trimmedUser) {
        throw new Error('Username is required');
      }

      const res = await fetch(`https://api.github.com/users/${trimmedUser}`);
      if (!res.ok) {
        throw new Error('User not found');
      }
      const data: GithubUser = await res.json();
      console.log(data);
      if (data) {
        setUserData(data);
      }
    } catch (e) {
      console.log(e);
      setError(true);
      setUserData(null);
    } finally {
      setloading(false);
    }
  }, []);

  function handleSubmit() {
    void fetchGithub(userName);
  }

  useEffect(() => {
    void fetchGithub('sangammukherjee');
  }, [fetchGithub])

  if (loading) {
    return <div className="h-screen flex items-center justify-center">Loading data ! Please wait.</div>
  }

  if (error) {
    return <div className="h-screen flex items-center justify-center">Error Occurred! Please try again.</div>
  }

  return (
    <div className="mt-2 text-center  flex flex-col justify-center items-center" >
      <div className="mb-5">
        <input
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          className="border-2 py-1.5 px-2 w-2xs"
          type="text"
          name="search-by-useer"
          placeholder=" Search Github Username" />
        <button className="bg-black text-white rounded -ml-0.5 py-2 px-5 hover:bg-gray-700 " onClick={handleSubmit}>Search</button>
      </div>
      {
        userData !== null ? <Card user={userData} /> : null
      }
    </div>
  )
}
