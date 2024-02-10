import { MdGroups } from "react-icons/md";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'} className="hidden md:flex items-center gap-2">
        <MdGroups className="w-8 h-8" />
        <p className="text-xl font-semibold">UsersFinder</p>
    </Link>
  )
}

export default Logo