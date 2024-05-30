// need to pass down function data / state as props
function Header({onDarkModeClick, toggleMode}){

    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>
                {toggleMode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}

export default Header;