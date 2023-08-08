import styles from '../scss/components/Header.module.scss'

const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          <a href='/' className={styles.headerLogoLink}>
            <h3>
              <span>αγόρι</span> κουμίρος
            </h3>
           <h4><span>онлайн</span>  магазин</h4>
          </a>
        </div>
        <a href='/' className={styles.cartWrapper}>
          <p className={styles.cartPrice}>520$</p>
          <div className={styles.cartBorder}></div>
          <div className={styles.cartBasket}>
            {/* <BiCart /> */}
            <span>3</span>
          </div>
        </a>
      </header>
    </div>
  )
}

export default Header