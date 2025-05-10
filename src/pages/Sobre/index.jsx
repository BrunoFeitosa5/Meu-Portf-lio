import styles from './Sobre.module.css'
import minha from './images/minha.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import react from './images/icon-react.svg'
import node from './images/icon-node.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>
             
             <div className={styles.bio}>
                <img src={minha} alt="avatar.png" className={styles.minha} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou <span>Bruno Feitosa</span> <br />
                    <strong>Dev Full Stack</strong> </p>

                    <p>Estudo Análise e Desenvolvimnto de Sistemas desde 2023</p>

                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>

                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                    com foco na experiência do usuário.</p>
                </div>
            </div>

            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do html" />
                    <img src={css} alt="Ícone do css" />
                    <img src={js} alt="Ícone do js" />
                    <img src={react} alt="Ícone do react" />
                    <img src={node} alt="Ícone do node" />
                    <img src={sql} alt="Ícone do sql" />
                </div>
            </div>
   
        </section>
    )
}

export default Sobre
