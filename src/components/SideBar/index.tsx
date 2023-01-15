import {FaHome, FaSearch, FaPlusSquare, FaHeart, FaBookmark, FaMusic} from "react-icons/fa"
import {BiLibrary} from "react-icons/bi"
// import { IconBase } from "react-icons
import "./index.css"

interface ISideBarProps {
    items?: string[]
}

const SideBar = ({items}: ISideBarProps):JSX.Element => {
    const list_items:JSX.Element[] = []
    // console.log(items)
    items?.forEach((item)=>{
        list_items.push(<div key={item} className="suggested-item"><span>{item}</span></div>)
    })

    const iconSize:string = "24"
    
    return(
        <div className="sidebar">
            {/* Side Elements  */}
            <PlayerIcon/>
            <div>
                <SideBarElement icon={<FaHome size={iconSize}/>} text="Home"/>
                <SideBarElement icon={<FaSearch size={iconSize}/>} text="Search"/>
                <SideBarElement icon={<BiLibrary size={iconSize}/>} text="Your Library"/>
                {/* <SideBarIcon icon={<FaHome size={iconSize}/>}/> */}
            </div>
            {/* With Icon */}
            {/* Fav Elements, Create Playlist, Liked songs, Your Episodes */}
            <div className="pt-8 pb-2 shadow-lg">
                <SideBarElement icon={<FaPlusSquare size={iconSize}/>} text="Create Playlist"/>
                <SideBarElement icon={<FaHeart size={iconSize}/>} text="Liked Songs"/>
                <SideBarElement icon={<FaBookmark size={iconSize}/>} text="Your Episodes"/>
            </div>
            {/* Without Icon */}
            {/* Recommended songs, bands, weekly etc */}
            <div className="suggestions">
                {list_items}
            </div>
        </div>
    )
}

interface ISideBarElementProps{
    icon: JSX.Element,
    text: string
}

const SideBarElement = ({icon, text}:ISideBarElementProps) => {
    return(
        <div className="sidebar-element">
            <div className="sidebar-icon">{icon}</div>
            <span className="sidebar-text">{text}</span>
        </div>
    )
}

const PlayerIcon = () => {
    return(<div className="sidebar-playericon ">
        {<FaMusic size="30"/>}
        <span className="pl-2">Xanaduify™</span>
    </div>)
} 

export default SideBar