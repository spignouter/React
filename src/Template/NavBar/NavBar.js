import React from "react";
import styles from "./styleNB.module.css";

export default function NavBar(){
    return (
        <div className={styles.navbar} >
        <div className={styles.Rectangle_nabar}></div>
        <div className={styles.Baikal_info}>
        Baikal info
        </div>

        <div className={styles.menu_logo}>

            <div className={styles.home}>
                <a href="https://www.google.com/">ГЛАВНАЯ<img alt="" src="./arrow.png"/> </a>
            </div>

            <div className={styles.publications}>
                <a href="https://www.google.com/">ПУБЛИКАЦИИ<img alt="" src="arrow.png"/> </a>
            </div>

            <div className={styles.blogs}>
                <a href="https://www.google.com/">БЛОГИ<img alt="" src="arrow.png"/> </a>
            </div>

            <div className={styles.interesting}>
                <a href="https://www.google.com/">ИНТЕРЕСНОЕ<img alt="" src="arrow.png"/> </a>
            </div>

            <div className={styles.subscriptions}>
                <a href="https://www.google.com/">ПОДПИСКИ<img alt="" src="arrow.png"/> </a>
            </div>

        </div>

        <div className={styles.search_icon} >
            <div className={styles.vector}>
                <a href="https://www.google.com/"><img alt="" src="Vector.png"/></a>
            </div>
        </div>

        <div className={styles.open_search}>top_bar
            <div className={styles.Line_2} >
            </div>
            <div className={styles.Line_1}>
            </div>
        </div>

    </div>
    )
}