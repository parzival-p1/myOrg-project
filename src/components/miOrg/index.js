import { useState } from "react";
import "./miOrg.css"

const MiOrg = (props) => {
      //^ E s t a d o  -  h o o k s
     //^ useState() function
    //^ const [varName, updateFunc] = useState(initialValue)

    console.log(props);
/*     const [mostrar, actualizarMostrar] = useState(true);
    const driveClick = () => {
        console.log("Mostrar/Ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar);
    }
 */
    return <section className="orgSection">
        <h3 className="org-title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar} />
    </section>
}

export default MiOrg