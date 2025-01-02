import styles from './Habilidades.module.css';

export const Habilidades = () => {
 const certificacoes = [
  "Azure Fundamentals",
  "Security, Compliance, and Identity Fundamentals",
  "Microsoft 365 Fundamentals",
  "Azure AI Fundamentals",
  "Azure Data Fundamentals",
  "MTA: Introduction to Programming Using HTML and CSS"
 ];
 return (
  <section className={styles.conteudohabilidades}>
   <h2 className={styles.textoprincipal}>Habilidades Técnicas</h2>
   <div className={styles}>
    <ul className={styles["container-grid"]}>
     {/* Hard skill */}
     <li className={`${styles.hardskill} `}>
      <div className={styles.iconeText}>
       <ion-icon className={styles.iconehabilidade} name="desktop-outline" size="large"></ion-icon>
       <h3> Hard skill</h3>
      </div>
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" height={50} />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/illustrator/illustrator-plain.svg" height={50} />
     </li>
     {/* Certificações */}
     <li className={`${styles.certi}`}>
      <div className={styles.iconeText}>
       <ion-icon className={styles.iconehabilidade} name="telescope-outline" size="large"></ion-icon>
       <h3>
        Certificações
       </h3>
      </div>
      <ul>
       {certificacoes.map((certificacao, index) => (
        <li key={index}>{certificacao}</li>
       ))}
      </ul>
     </li>

    </ul>

   </div>
  </section>
 );
};