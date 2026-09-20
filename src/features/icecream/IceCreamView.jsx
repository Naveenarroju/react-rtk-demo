import { useDispatch, useSelector } from "react-redux"
import { ordered, restocked } from "./icecreamSlice"


export const IceCreamView = () => {
// Reads the state from store and the state argument represents
// the entire global Redux state tree, allowing you to select and subscribe
    const numOfIceCreams = 
    useSelector(state =>state.iceCream.numOfIceCreams)
    const dispatch = useDispatch();
    return (
        <div>
        <h2>Number of Ice creams - {numOfIceCreams}</h2>
        <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
        <button onClick={()=>dispatch(restocked(2))}>Restock IceCream</button>
        </div>
    )
}