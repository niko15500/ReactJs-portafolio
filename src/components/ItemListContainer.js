import { useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
import ItemList from "./ItemList";
import { items as itemsData } from "../data/data";

const ItemListContainer = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState ( true )
    useEffect(() => {
      console.log(itemsData);

        const getItems = new Promise( (resolve, reject)=>{
            setTimeout( () => {
                resolve(itemsData)
            }, 2000)
        } )

        getItems.then( (result) => {
            setLoading( false )
            console.log("Se completo la promesa",result);
            setItems(result)
        })
        console.log("Se termino el efecto");
    }, [])

  return (
    <center>    
      { loading ?
        <LoadingSpinner></LoadingSpinner>
      : 
        <ItemList itemData={itemsData}></ItemList>
      }
    </center>
  )
}

export default ItemListContainer
