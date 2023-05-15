import "./footer.css"
import { SiLinkedin, SiGmail } from 'react-icons/si'
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className="redes">
            <a href="https://github.com/parzival-p1">
                <BsGithub className="gitHub"/> 
            </a>

            <a href="https://www.linkedin.com/in/francisco-j-hdez/">
                <SiLinkedin className="linkedIn"/> 
            </a>
                
            <a href='mailto:francj.hdez@gmail.com'>
                <SiGmail className="gmail" />
            </a>
        </div>
        <img src='/img/Logo.png' alt="org" />
        <strong>Desarrollado por Francisco J. Hernández</strong>
    </footer>
}

export default Footer