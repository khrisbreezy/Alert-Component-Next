import { useState } from "react";
import Head from 'next/head'
import styles from '../styles/Home.module.css'



import AlertComponent from '../components/AlertComponent';

export default function Home() {
  const [alertArray, setAlertArray] = useState([
    {
      layout: 1,
      type: 'success',
      alertType: 'Success Alert',
      description: 'This is the alert description',
      btnClose: true

    },
    {
      layout: 2,
      type: 'info',
      alertType: '',
      description: 'This is an information alert',
      btnClose: true

    },
    {
      layout: 1,
      type: 'danger',
      alertType: '',
      description: 'This is a danger alert',
      btnClose: true

    }]);

    const closeAlertHandler = (i) => {
      alertArray.splice(i, 1);
      setAlertArray([...alertArray]);
    }


  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Assessment</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Abolarin Oyinlola Assessment
        </h1>

        <p className={styles.description}>
          Alert Component with different Variant/Layout
        </p>

        <div className={styles.grid}>
          <AlertComponent
            layout={1}
            type='success'
            alertDescription='This is the alert description'
          />
          <AlertComponent
            layout={1}
            type='info'
            alertDescription='This is an information alert'
          />
          <AlertComponent
            layout={1}
            type='error'
            alertDescription='This is a danger alert containing some test that might be relevant'
          />
          <AlertComponent
            layout={2}
            type='success'
            alertDescription='This is the alert description'
          />
          <AlertComponent
            layout={2}
            type='info'
            alertDescription='This is an information alert'
          />
          <AlertComponent
            layout={2}
            type='error'
            alertDescription='This is a danger alert'
          />
          <AlertComponent
            layout={2}
            type='success'
            alertType='Success Alert'
            alertDescription='This is the alert description'
          />
          <AlertComponent
            layout={2}
            type='info'
            alertType='Info Alert'
            alertDescription='This is an information alert'
          />
          <AlertComponent
            layout={2}
            type='error'
            alertType='Danger Alert'
            alertDescription='This is a danger alert'
          />
          {/* Please note that this is just an example to show that the component's functionality can be extend, this example is to to show the alert can be dismissed (Just an example, in real time, arrays won't be used. Thank you) */}
           {alertArray.map((alert, i) => {
              return (
                <AlertComponent
                  key={i}
                  layout={alert.layout}
                  type={alert.type}
                  alertType={alert.alertType}
                  alertDescription={alert.description}
                  btnClose={alert.btnClose}
                  closeAlertHandler={() => closeAlertHandler(i)}
                />
              )
            })}
        </div>
      </main>
    </div>
  )
}
