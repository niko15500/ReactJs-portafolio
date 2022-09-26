const Saludo = (props) => {
    
    return( 
        <>
            <h1 className="text-3xl">Mi dssprimer componente</h1>
            <div className="text-3xl">Saludos {props.name}</div>
            <div>Tienes {props.age}</div>
            
            
            
        </>
    )
}
export default Saludo




