import "./index.css"
import {useState} from "react"
import { idText } from "typescript"

interface IMainContainerProps {

}

const GridController = () => {

}

const MainContainer = () => {

    // const [state, setState] = useState({activeItem:null, filled:false})
    const [state, setState] = useState({activeItem:null})
    const [filled, setFilled] = useState(false)

    // const [filled, setFilled] = useState(false)
    // let filled = false
    // const state = {
    //     activeItem: null
    // }

    const rowItems = 6

    const handleClick = (id:any) => {
        // console.log("clicked", id.i)
        console.log("clicked", id)
        // const isFilled = checkFilled(id)
        // setState({activeItem: id, filled: isFilled
        setState({activeItem: id
        })

    }

    const checkFilled = (i:number) => {
        let isFilled = i < rowItems
        // if (i%6 === 5 || i>=rowItems) {
        if (i%6 === 5) {
            // setFilled(true)
            isFilled = true
        }
        else{
            isFilled = false
            // setFilled(false)
        }
        // console.log("filled= ", isFilled)
        // console.log("===========")
        return isFilled
    }

    const fill = (i:number) => {
        const filled = checkFilled(i)
        if(filled)
        setFilled(filled)
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
            if(state.activeItem && i >= state.activeItem)
                fill(i)
            // i >= state.activeItem ? fill(i) : null;
            // console.log(filled)
            if(state.activeItem === i && filled)
            // if(state.activeItem === i)
                items.push(<div className="col-span-full h-52 w-auto bg-slate-300">1231321</div>)
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
               {/* {isActive ? (
                <div className="song-names">
                    <div>{itemId}</div>
                </div>
               ):
                null} */}
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