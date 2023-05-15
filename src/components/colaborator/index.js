import "./colaborator.css"
import { IoIosCloseCircle } from "react-icons/io"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"


const Colaborator = (props) => {
    //^ destructuring
    const { nombre, puesto, foto, team, id, fav } = props.datos;
    const { colorPrim, eliminarColab, like } = props;

    // condition ? true : false
    
    return <div className="colaborator">
        <IoIosCloseCircle 
            className="eliminar" 
            onClick={() => eliminarColab(id)} 
        />
        <div className="header" style={{ backgroundColor: colorPrim }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{ nombre }</h4>
            <h5>{ puesto }</h5>
            { fav ? <AiFillHeart 
                    color="red" 
                    onClick={() => like(id)}/> 
                    : <AiOutlineHeart onClick={() => like(id)}/> }          
        </div>
    </div>
}

export default Colaborator