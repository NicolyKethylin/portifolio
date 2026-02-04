import './Header.css'
const photoMain = './nicoly.png';
function Header() {
    return (
    <div className='container grid-background '>
        <header className="box-template">

             <div className='header-text'>
                    <h1>Olá, eu sou a Nicoly</h1>
                    <p>Desenvolvedora Full-Stack</p>
                </div>
                
                <div>
                    <img src={photoMain} alt="Nicoly" />
                </div>
               
                
            
        </header>
    </div>
    )
}

export default Header;