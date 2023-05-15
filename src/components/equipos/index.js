import "./equipo.css"
import Colaborator from "../colaborator"
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {
    //^ Destructuring
    const { colorPrim, colorSec, titulo, id } = props.datos
    const { colaborators, eliminarColab, updateColor, like } = props;

    const obj = { backgroundColor: hexToRgba(colorPrim, 0.6) }

    const titleStyle = { borderColor: colorPrim }

    return <> {/** fragment **/}
        { 
            colaborators.length > 0 && 
            <section className="equipo" style={obj}>
                <input 
                    type="color"
                    className="input-color"
                    value={ colorPrim }
                    onChange={( event ) => {
                        updateColor(event.target.value, id);
                    }}
                />

                <h3 style={ titleStyle }>{ titulo }</h3>
                <div className="colaborators">
                    {
                        colaborators.map( (colaborator, index) =>  
                        <Colaborator
                            datos={ colaborator }
                            key={ index }
                            colorPrim = { hexToRgba(colorPrim, 0.6) }
                            eliminarColab = { eliminarColab }
                            like = { like }
                        /> )
                    }

                </div>
            </section>
        } 
    </>
    
}

export default Equipo