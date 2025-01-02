import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css'; // Certifique-se de ajustar o caminho para o seu arquivo de estilos
import Modal from 'react-modal';
import Smodal from './modal.module.css'

Modal.setAppElement("#root");

const Layout = () => {
 const [modalIsOpen, setIsOpen] = React.useState(false);

 function openModal() {
  setIsOpen(true);
 }

 function closeModal() {
  setIsOpen(false);
 }

 return (
  <div className={styles.containernav}>
   <p className={styles.name}>
    Nicoly <span>Pessôa</span>
   </p>

   <nav className={styles.navegacao}>
    <ul className={styles.cabecalholista}>
     <li>
      <Link onClick={openModal} to="#">Contato</Link>
      <Modal
       isOpen={modalIsOpen}
       onRequestClose={closeModal}
       contentLabel="Contato"
       className={Smodal.modal}
       overlayClassName={Smodal.overlay}
      >
       <div className={Smodal.texto}>
        <h2>Contatos</h2>
       </div>
       <button onClick={closeModal} className={Smodal.btn}><ion-icon name="close-outline"></ion-icon></button>

       <ul>
        <li className={Smodal.lista}>
         <ion-icon size="large" name="logo-linkedin"></ion-icon>
         <a href="https://www.linkedin.com/in/nicoly-kethylin/" target="_blank" rel="noopener noreferrer">Nicoly Pessôa</a>
        </li>
        <li className={Smodal.lista}>
         <ion-icon size="large" name="logo-instagram"></ion-icon>
         <a href="https://www.instagram.com/nikethylin/" target="_blank" rel="noopener noreferrer">@nikethy</a>
        </li>
        <li className={Smodal.lista}>
         <ion-icon size="large" name="logo-behance"></ion-icon>
         <a href="https://www.behance.net/nicolykethylin?locale=en_US" target="_blank" rel="noopener noreferrer">Nicoly Kethylin</a>
        </li>
        <li className={Smodal.lista}>
         <ion-icon size="large" name="mail-outline"></ion-icon>
         <a href="mailto:kethylinswan@outlook.com">kethylinswan@outlook.com</a>
        </li>
       </ul>

      </Modal>
     </li>
    </ul>
   </nav>

   <Outlet />
  </div>
 );
};

export default Layout;