import {FaAngleLeft, FaAngleRight, FaUserAlt, FaCaretDown, FaCaretUp} from "react-icons/fa"
import "./index.css"

const NavBar = () => {
    // fix aligment
    return(
        <div className="navbar">
            <div className="navbar-controls">
                <NavBarIcon icon={<FaAngleLeft size="24"/>}/>
                <NavBarIcon icon={<FaAngleRight size="24"/>}/>
            </div>
            <div className="navbar-links">
                <NavBarItem>Playlists</NavBarItem>
                <NavBarItem>Artists</NavBarItem>
                <NavBarItem>Albums</NavBarItem>
                <NavBarItem>Podcasts</NavBarItem>
            </div>
            <NavBarProfile username="Batbileg"/>
        </div>
    )
}

interface INavBarIconProps {
    icon: JSX.Element
}

const NavBarIcon = ({icon}:INavBarIconProps) => {
    return (
        <button className="w-12 h-12 flex justify-center items-center text-gray-600 hover:text-gray-50 transition-all">
        {icon}
        </button>
    )
}

interface INavBarItemProps {
    children: string
}

const NavBarItem = ({children}:INavBarItemProps) => {
    return(
            <button className="navbar-item">{children}</button>
    )
}

interface INavBarProfileProps{
    username: string
}

const NavBarProfile = ({username}:INavBarProfileProps) => {
    return (
        // <div>
        <button className="navbar-profile">
            {/* Must be replaced with profile picture */}
            <FaUserAlt size="16" className="self-center ml-2"/>
            <span className="pl-2 pr-2">{username}</span>
            {/* Drop down menu goes here */}
            <FaCaretDown size="24" className="self-center ml-auto"/>
        {/* move to another place and add logical controller */}
        {/* <div className="bg-gray-700 text-gray-300 pl-4 mt-3 w-52">
            <div className="py-2">Account</div>
            <div className="py-2">Profile</div>
            <div className="py-2">Upgrade to Premium</div>
            <div className="py-2">Support</div>
            <div className="py-2">Settings</div>
            <div className="py-2">Log out</div>
        </div> */}
    {/* </div> */}
        </button>
    )
}

export default NavBar