import { useEffect, useState } from "react";
import axios from "axios";
import "../index.css";

export interface ItemInterface {
    name: string;
    img_url: string;
}


const FinalSpace = () => {
    const api = "https://finalspaceapi.com/api/v0/character/";
    const [item, setItem] = useState<ItemInterface[]>([]);
    useEffect(() => {
        axios.get(api).then(data => {
            setItem(data.data);
            // console.log(data.data);
        }).catch(err => console.log(err));
    }, [])
    return (
        <div className="final-space">
            {
                item.map((item, index) => {
                    return (
                        <div className="item" key={index}>
                            <img src={item.img_url} alt={"character"}/>
                            <p>Name: {item.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FinalSpace;