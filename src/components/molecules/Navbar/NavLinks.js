import classes from './Navbar.module.css'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

const NavLinks = (props) => {
    const { t } = useTranslation()
    const animateFrom = { opacity: 0, y: -40 }
    const animateTo = { opacity: 1, y: 0 }

    // const scrollToSection = (sectionId) => {
    //     const targetSection = document.querySelector(sectionId)

    //     if (targetSection) {
    //         window.scrollTo({
    //             top: targetSection.scrollIntoView,
    //             behavior: 'smooth',
    //         })
    //     }
    // }
    function herocabins() {
        window.scrollTo(0, 2)
    }
    function inspo() {
        window.scrollTo(0, 60)
    }

    function review() {
        window.scrollTo(0,1600)
    }
    function about() {
        window.scrollTo(0, 2000)
    }
    return (
        <ul>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
                onClick={herocabins}
            >
                <a className={classes.navbar_links}>{t('our_cabins')}</a>
            </motion.li>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.1 }}
                onClick={inspo}
            >
                <a className={classes.navbar_links}>{t('get_inspired')}</a>
            </motion.li>

            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.2 }}
                onClick={review}
            >
                <a className={classes.navbar_links}>{t('gift_a_stay')}</a>
            </motion.li>
            <motion.li
                initial={animateFrom}
                animate={animateTo}
                transition={{ delay: 0.3 }}
                onClick={about}
            >
                <a className={classes.navbar_links}>{t('about_us')}</a>
            </motion.li>
        </ul>
    )
}

export default NavLinks
