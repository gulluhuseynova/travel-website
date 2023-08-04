import classes from './Navbar.module.css'
import { motion } from 'framer-motion'

const NavLinks = (props) => {
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.05 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/cabins">
                    Our cabins
                </a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/inpired">
                    Get inspired
                </a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/gift">
                    Gift a stay
                </a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/about">
                    About us
                </a>
            </motion.li>
        </ul>
    )
}

export default NavLinks
