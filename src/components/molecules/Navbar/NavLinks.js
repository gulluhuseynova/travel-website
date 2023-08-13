import classes from './Navbar.module.css'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const NavLinks = (props) => {
    const { t, i18n } = useTranslation()
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
                    {t('our_cabins')}
                </a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/inpired">
                    {t('get_inspired')}
                </a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/gift">
                    {t('gift_a_stay')}
                </a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                onClick={() => props.isMobile && props.closeMobileMenu()}
            >
                <a className={classes.navbar_links} href="#/about">
                    {t('about_us')}
                </a>
            </motion.li>
        </ul>
    )
}

export default NavLinks
