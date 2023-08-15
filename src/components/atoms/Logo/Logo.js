import React from 'react'
import styles from './Logo.module.css'
import { useTranslation } from 'react-i18next'

const Logo = () => {
    const { i18n } = useTranslation()

    return (
        <a id={styles.a} href="#">
            <span id={styles.firstSixLetters}>Unwind</span>
            <span id={styles.otherSixLetters}>Cabins</span>
        </a>
    )
}

export default Logo
