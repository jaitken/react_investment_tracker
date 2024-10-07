import logo from '../assets/investment-calculator-logo.png'

export default function Header(){
    return <header id="header">
        <img src={logo} alt='money bag picture' /> 
        <h1> Investment Tracking</h1>
    </header>
}