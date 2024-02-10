import AddUserButton from "./AddUserButton"
import Logo from "./Logo"
import Searchbar from "./Searchbar"

const Header = () => {
  return (
    <header className="bg-white border-b-2 shadow-sm p-2 fixed top-0 left-0 right-0">
        <div className="max-w-7xl mx-auto flex items-center justify-between  gap-4">
        <Logo />
        <Searchbar />
        <AddUserButton />
        </div>
    </header>
  )
}

export default Header