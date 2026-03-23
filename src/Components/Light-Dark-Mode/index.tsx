import useLocalStorage from "./useLocalStorage";



export default function ThemeCharger() {

  const [theme, setTheme] = useLocalStorage('theme', "dark");

  const handleToggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  console.log(theme);

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${theme === 'light' && 'bg-white'} ${theme === 'dark' && 'bg-black'}`}>
      <div className="flex flex-col gap-10">
        <p className={`text-5xl ${theme === 'light' && 'text-black'} ${theme === 'dark' && 'text-white'} `}>Hello World !</p>
        <button
          onClick={handleToggleTheme}
          className={`p-4 rounded-md ${theme === 'light' && 'bg-black text-white'} ${theme === 'dark' && 'bg-white text-black'}`}>Change Theme</button>
      </div>
    </div>
  )
}
