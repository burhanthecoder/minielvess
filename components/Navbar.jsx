import Link from 'next/link';
import { useSelector } from 'react-redux';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const cart = useSelector((state) => state.cart.cart);

  const getItemsCount = () => {
    return cart.reduce((accumulator, item) => accumulator + item.quantity, 0);
  };

  return (
    <nav className={styles.navbar}>
      <h6 className={styles.logo}>RAWCANVAS</h6>
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/shop">Shop</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/custom">Custom</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/cart">
            <p>Cart ({getItemsCount()})</p>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/login">
            <p>Login</p>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/YourAccount">
            <p><img src="https://img.icons8.com/ios-glyphs/30/000000/user--v1.png"/></p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
