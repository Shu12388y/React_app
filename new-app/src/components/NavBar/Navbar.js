import'./NavBar.css'

function navbar(){
    return(
        <div className='upper__parent'>
        <nav>
            <ul className='nav__bar'>
                <li className='list_name'>
                    home
                </li>
                <li className="list_name02">
                    contact us
                </li>
                <li>
                    about us
                </li>
            </ul>
        </nav>
        </div>
    )
}