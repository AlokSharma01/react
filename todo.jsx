import react from "react"

export default function todo(){

    const [query, setQuery] = React.useState("");
    const [list,setList] = React.useState([]);

    const handleChange = (el) =>{

        const {value} = el.target;
        setQuery(value);
    }
    const add = ( ) =>{
        const item ={

            title:query,
            
        };

        let newList = [...list,item];
        setList(newList);
    }
    return(

        <div>
            <h1>Todo list</h1>
            <div>
                <input value ={query} onChange={handleChange} placeholder="add items" />
                <button onClick={add}>ADD ITEM</button>
            </div>
            <div>
                {list.map(itm =>{

                    return <div>{ itm.title} </div>
                })}
            </div>
        </div>
    )
}

