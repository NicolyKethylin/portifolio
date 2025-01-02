import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Habilidades } from './Habilidades';
import { Btn } from '../componentes/Btn';
import style from './Home.module.css';

export const Home = () => {
 useEffect(() => {
  AOS.init();
 }, []);

 return (
  <div className={style.containerprincipal}>
   <main className={style.container}>
    <div className={style.sobre} >
     <h2 data-aos="fade-up" data-aos-duration="2000"
      data-aos-anchor-placement="center-center" className={style.sobremim}>Um pouco sobre <span>mim</span>...</h2>
     <p data-aos="fade-right" data-aos-duration="2000"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine" >Olá! Eu sou Nicoly, uma desenvolvedora apaixonada por tecnologia e inovação. Além de ser mãe do Henry, sou neuroatípica, com autismo e TDAH. Minha jornada na tecnologia é impulsionada pela curiosidade e pelo desejo de criar soluções que façam a diferença. Adoro aprender coisas novas e enfrentar desafios que me permitam crescer tanto profissionalmente quanto pessoalmente.</p>
     <Btn />
    </div>
    <div className={style.imageContainer} data-aos="zoom-out-down">
     <img src="/imagem/nicoly.png" alt="nicoly" />
     <svg xmlns="http://www.w3.org/2000/svg" width="400" height="750" viewBox="0 0 671 750">
      <defs>
       <linearGradient id="a" y1="0.5" x2="1" y2="0.5">
        <stop offset="0" stopColor="#b4bec9"></stop>
        <stop offset="0.1" stopColor='#b4bec9'></stop>
        <stop offset="0.542" stopColor="#b4bec9"></stop>
        <stop offset="1" stopColor="#deefe7"></stop>
       </linearGradient>
      </defs>
      <path d="M-21,303.341,650,0V750H-21Z" transform="translate(21)" fill="url(#a)"></path>
     </svg>
    </div>
   </main >
   <Habilidades />
  </div >
 );
};