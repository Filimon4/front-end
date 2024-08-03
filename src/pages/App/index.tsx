
import styles from './app.module.scss'
import ImgLoader from '@widgets/ImgLoader';
import ImgHistory from '@widgets/ImgHistory';

const App = () => {

  return (
    <div className={styles.gallery}>
      <ImgLoader />
      <ImgHistory />
    </div>
  )
}

export default App