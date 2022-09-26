import { useEffect, useState } from "react";


const Contador = () => {

    const [suma, setSuma] = useState(0)

    useEffect( () => {
        console.log("Efecto");
    })

    useEffect( () => {
        console.log("Efecto en mounting");
    }, [])

    useEffect( () => {
        console.log("Efecto en cambio de suma");
    }, [suma])


    const onClickHandler = () => {
        console.log("click");
        setSuma( suma + 1 )
    }


  return (
    <div>
        <button onClick={onClickHandler} className="btn btn-success">Success</button>
        {suma}
    </div>
  )


}

export default Contador