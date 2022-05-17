import React from "react";
import styles from "./styleT.module.css"

export default function Ticker(){
    return (
        <div className={styles.ticker}>
        <div className={styles.tickerBase}></div>
        <div className={styles.newflash}>
            <div className={styles.RectangleNewflash}>
                <div className={styles.icon}> <a href="https://www.google.com/"><img alt="" src="icon.png"/></a></div>
                <div className={styles.newsNewflash}> <a href="https://www.google.com/"><img alt="" src="newss.png"/></a></div>
            </div>
        </div>

        <div className={styles.qverySmbNewflash}> <a href="https://www.google.com/">Такие то запросы или любые параметры</a></div>

        <div className={styles.arrowsNewflash}>
            <div className={styles.arrowLine}> </div>
            <div className={styles.rightArrowNewflash}> <a href="https://www.google.com/"><img alt="" src="right arrow.png"/></a></div>
            <div className={styles.leftArrowNewflash} > <a href="https://www.google.com/"><img alt="" src="left arrow.png"/></a></div>
        </div>

    </div>

    )
};

