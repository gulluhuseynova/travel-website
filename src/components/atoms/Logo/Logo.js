import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
    return (
        <a id={styles.a} href="#">
            <span id={styles.firstSixLetters}>Unwind</span>
            <span id={styles.otherSixLetters}>Cabins</span>
        </a>
    )
}

export default Logo
