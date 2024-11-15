import styles from './Header.module.css';

function Header() {
  return (
    <header className='flex flex-col text-center'>
      <h1 className='text-4xl font-semibold my-2'>
        Luza
      </h1>

      <div className={styles.brilliant}/>
    </header>
  );
}

export default Header;