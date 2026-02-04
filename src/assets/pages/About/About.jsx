import './About.css'

const banner = '/about_img.png';

function About() {
  return (
  <div className='container'>
    <div className='about-page'>
      <main>
            <div className='banner-context'>
              <div className='imagem-banner'>
                <img src={banner} alt="About banner" />
              </div>
              
              <div className='about-text'>
                <p>Sou desenvolvedora Full-Stack e pós-graduanda em Engenharia de Software, com sólida experiência em React.js, Node.js e Ruby on Rails. Meu foco é o desenvolvimento de aplicações completas e escaláveis, unindo interfaces modernas e responsivas a um backend de alta performance.</p>
                <p>Em minha trajetória, destaquei-me pela contribuição nas APIs da Afya, onde aprimorei competências em Docker, WSL e otimização de endpoints. Tenho também ampla vivência com Redis e Sidekiq para a gestão eficiente de processos em segundo plano.</p>
              </div>
            </div>
      </main>
    </div>
  </div>
  )
}
export default About;