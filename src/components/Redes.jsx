import github from '../assets/github.png'
import instagram from '../assets/instagram.png'
import linkdim from '../assets/linkdim.png'

import styles from "../styles/index.module.css"

export function Redes() {
    return (
        <>
            <div className={styles.redes}>
            <img src={github} alt="" /> 
            <img src={linkdim} alt="" />
            <img src={instagram} alt="" />
            </div>
        </>
    );
}
