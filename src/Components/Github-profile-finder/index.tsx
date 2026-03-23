import { useEffect, useState } from "react"
import Card from "./user";


export default function ProfileFinder() {
  const [userName, setUserName] = useState<string>('sangammukherjee')
  const [userData, setUserData] = useState(null)
  const [loading, setloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);



  async function fetchGithub() {
    try {
      setloading(true);
      setError(false);
      const res = await fetch(`https://api.github.com/users/${userName}`);
      if (!res.ok) {
        throw new Error('User not found');
      }
      const data = await res.json();
      console.log(data);
      if (data) {
        setUserData(data);
        setloading(true);
        setUserName('');
      }
    } catch (e) {
      console.log(e);
      setError(true);
      setUserData(null);
    } finally {
      setloading(false);
    }
  }

  function handleSubmit() {
    fetchGithub();
  }

  useEffect(() => {
    fetchGithub();
  }, [])

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
