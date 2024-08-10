
import styles from './app.module.scss'
import ImgLoader from '@widgets/ImgLoader';
import ImgHistory from '@widgets/ImgHistory';
import NavBar from '@widgets/NavBar';

const App = () => {

  return (
    <>
      <NavBar />
      <div className={styles.gallery}>
        <ImgLoader />
        <ImgHistory />
      </div>
    </>
  )
}

export default App