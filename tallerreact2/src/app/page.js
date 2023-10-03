import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.centerVertically}>
        <h1 className={styles.title}>SI QUIERES IR A LA SIGUIENTE SECCIÓN DALE CLIC AL BOTÓN :D</h1>
        <Link href="/PagCarts">
          <button className={styles.button}>Ir a la siguiente sección</button>
        </Link>
      </div>
    </div>
  )
}
