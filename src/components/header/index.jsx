import 'boxicons'
import './style.css'

function Header() {
    return (
        <header>
            <div className='logo'>
                <img src='https://static.nike.com.br/v10-94-0/images/brands/logo.svg'></img>
            </div>
            <ul>
                <li>INÍCIO</li>
            </ul>
            <ul>
                <li>PRODUTOS</li>
            </ul>
            <div className='carrinho'>
                <box-icon name='cart'></box-icon>
                <span className='itens-no-carrinho'>0</span>
            </div>
        </header>
    );
}

export default Header;