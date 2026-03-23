

interface User {
  avatar_url: string;
  followers: number;
  following: number;
  public_repos: number;
  url: string;
  name: string;
  login: string;
  created_at: string;

}

export default function Card({ user }: { user: User }) {
  const { avatar_url, followers, following, public_repos, name, login, created_at
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className=" space-y-5 mb-5 border-2 p-4 lg:w-200 sm:w-120 md:w-150 flex flex-col justify-center items-center ">
      <div>
        <img src={avatar_url} alt="user" className="w-2xs" />
      </div>
      <div className="flex justify-between items-center gap-5">
        <a className="underline hover:text-blue-800 " href={`https://github.com/${login}`}>{name || login}</a>


        <p className="font-bold">User joined on {`${createdDate.getDate()} 
        
        ${createdDate.toLocaleString('en-us', { month: 'short' })} ${createdDate.getFullYear()}`}</p>
      </div>
      <div className="flex flex-col ml-20 font-bold">
        <div className="flex justify-between items-center" >
          <p>public Repos:</p>
          <p>{public_repos}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>followers:</p>
          <p>{followers}</p>
        </div>

        <div className="flex justify-between items-center">
          <p>following:</p>
          <p >{following}</p>
        </div>
      </div>
    </div>
  )
}
