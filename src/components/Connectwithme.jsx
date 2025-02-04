import Connectitem from './Connectitem';
import './Connectwithme.css'
import twitter from '../assets/twitter.webp'
import linkedin from '../assets/linkedin.webp'
import github from '../assets/github.png'
import whatsapp from '../assets/whatsapp.png'
import instagram from '../assets/instagram.avif'

export default function Connectwithme() {
    return (
        <div className='connect-container'>
            <div className='seperator'></div>
            <div className='connect-row'>
                <Connectitem pic={twitter} logoName={"Twitter"} handle={"handle"}/>
                <Connectitem pic={linkedin} logoName={"Linkedin"} handle={"handle"}/>
                <Connectitem pic={github} logoName={"Github"} handle={"handle"}/>
            </div>
            <div className='connect-row'>
                <Connectitem pic={whatsapp} logoName={"Whatsapp"} handle={"handle"} />
                <Connectitem pic={instagram} logoName={"Instagram"} handle={"handle"} />
            </div>
        </div>
    );
}
