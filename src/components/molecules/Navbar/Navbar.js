import Logo from '../../atoms/Logo/Logo'
import MobileNavigation from './MobileNavigation'
import Navigation from './Navigation'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <Logo />
            <Navigation />
            <MobileNavigation />
        </div>
    )
}
export default Navbar
