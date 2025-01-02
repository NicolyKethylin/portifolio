import style from './botton.module.css'

export const Btn = () => {
 return (
  <div className={style.containerbtn}>
   <a href="https://github.com/NicolyKethylin" target="_blank" rel="noopener noreferrer" className={style.bttnLink}>
    <button className={style.bttn}>
     <ion-icon name="logo-github" size="large"></ion-icon>
     Acesse meu GitHub
    </button>
   </a>
  </div>
 )
}
