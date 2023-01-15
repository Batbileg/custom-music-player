import "./index.css"
import {useState} from "react"
import { idText } from "typescript"

interface IMainContainerProps {

}

const GridController = () => {

}

const MainContainer = () => {

    const [state, setState] = useState({activeItem:null})

    // const state = {
    //     activeItem: null
    // }

    const handleClick = (id:any) => {
        console.log("clicked", id.i)
        console.log("clicked", id)
        setState({activeItem: id
        })
    }

    const items = []

    for(let i=0; i<=15; i++) {
        items.push(
            <GridItem 
                key={i} 
                itemId={i} 
                onClick={()=>handleClick(i)} 
                imageUrl={require("../../static/albums/Cream - Disraeli Gears/cover.png")} 
                artist="Cream"
                album="Disreali Gears" 
                isActive={state.activeItem === i}/>
                )
        }
        
        return (<div className="main-container">
            {items}
        {/* <GridItem key="1" itemId="1" onClick={()=>handleClick("1")} imageUrl={require("../../static/albums/Cream - Disraeli Gears/cover.png")} artist="Cream" album="Disreali Gears" isActive={state.activeItem === "1"}/> */}
        {/* <GridItem key="2" itemId="2" onClick={()=>handleClick("2")} imageUrl={require("../../static/albums/Cream - Disraeli Gears/cover.png")} artist="Cream" album="Disreali Gears" isActive={state.activeItem === "2"}/> */}
        {/* <GridItem key="3" itemId="3" onClick={()=>handleClick("3")} imageUrl={require("../../static/albums/Cream - Disraeli Gears/cover.png")} artist="Cream" album="Disreali Gears" isActive={state.activeItem === "3"}/> */}
    </div>)
}

interface IGridItemProps {
    itemId: number;
    imageUrl?: string;
    artist?: string;
    album?: string;
    onClick?: any;
    isActive: boolean;
}

const GridItem = ({itemId, imageUrl, artist, album, onClick, isActive}:IGridItemProps) => {
    // const active = false
    // console.log(itemId)
    // console.log("rendered Item", itemId)
    // return (<div className="grid-item"  onClick={onClick}>
    return (<div className={`${isActive?"grid-item grid-item-active":"grid-item"}`}  onClick={onClick}>
                <img src={imageUrl} className="album-art"></img>
                <div className="text-slate-200">{artist}</div>
                <div className="text-slate-400">{album}</div>
               {isActive ? (
                <div className="song-names">
                <div className="text-slate-100">asd</div>
                <div className="text-slate-100">asd</div>
                <div className="text-slate-100">asd</div>
                <div className="text-slate-100">asd</div>
                <div className="text-slate-100">asd</div>
                <div className="text-slate-100 pb-10 mb-10">asd</div>
                </div>
               ):
                null}
        </div>)
}

interface ISongNamesProps{
    names: string[];
}

const SongNames = ({names}:ISongNamesProps) => {
    const songNames = []

    names.forEach((name)=> {
        <SongName name={name}/>
    })

    return(<div>
        
    </div>)
}

interface ISongNameProps {
    name: string
}
const SongName = ({name}: ISongNameProps) => {
    return(<div>
        {name}
    </div>)
}

export default MainContainer;