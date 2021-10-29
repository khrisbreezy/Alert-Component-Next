import styles from "../styles/Home.module.css";

const AlertComponent = ({ layout = null, type, alertType, alertDescription, btnClose = false, closeAlertHandler }) => {

    return (
        <>
            {(layout === 1 || layout === null) && (
                <a
                    className={`${type === "success"
                            ? [styles.card, styles.alert_success].join(" ")
                            : `${type === "info"
                                ? [styles.card, styles.alert_info].join(" ")
                                : [styles.card, styles.alert_danger].join(" ")
                            }`
                        }`}
                >
                    <h3>{alertType}</h3>
                    <div className={styles.display_inline}>
                        {type === "success" ? (
                            <img
                                src="/images/icons/check.svg"
                                alt=""
                                className={styles.img}
                            />
                        ) : type === "info" ? (
                            <img src="/images/icons/info.svg" alt="" className={styles.img} />
                        ) : (
                            <img
                                src="/images/icons/danger.svg"
                                alt=""
                                className={styles.img}
                            />
                        )}
                        <p>{alertDescription}</p>
                    </div>
                    {btnClose &&  <span onClick={closeAlertHandler} className={styles.close}>X</span> }
                </a>
            )}

            {layout === 2 && (
                <a
                    className={`${type === "success"
                            ? [
                                styles.card,
                                styles.alert_success,
                                styles.card_align_center,
                            ].join(" ")
                            : `${type === "info"
                                ? [
                                    styles.card,
                                    styles.alert_info,
                                    styles.card_align_center,
                                ].join(" ")
                                : [
                                    styles.card,
                                    styles.alert_danger,
                                    styles.card_align_center,
                                ].join(" ")
                            }`
                        }`}
                >
                    {type === "success" ? (
                        <img src="/images/icons/check.svg" alt="" className={styles.img} />
                    ) : type === "info" ? (
                        <img src="/images/icons/info.svg" alt="" className={styles.img} />
                    ) : (
                        <img src="/images/icons/danger.svg" alt="" className={styles.img} />
                    )}
                    <h3>{alertType}</h3>
                    <p>{alertDescription}</p>
                    {btnClose &&  <span onClick={closeAlertHandler} className={styles.close}>X</span> }
                </a>
            )}
        </>
    );
};

export default AlertComponent;
