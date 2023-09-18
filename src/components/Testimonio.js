import '../styles/Testimonio.css';

function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <img 
                className='imagen-testimonio'
                src={require(`../images/${props.imagen}.png`)}
                alt= 'foto'/>
            <div className='contenedor-texto-testimonio'>
                <p className='nombre-testimonio'> 
                    {props.nombre} en {props.pais}
                </p>
                <p className='cargo-testimonio'> 
                    {props.cargo}
                </p>
                <p className='texto-testimonio'> 
                    {props.testimonio}
                </p>
            </div>
        </div>
    );
}
export default Testimonio;