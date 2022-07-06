import { useNavigate } from 'react-router-dom';

import styles from './not-found.module.scss';

function NotFound(): JSX.Element {
  const navigate = useNavigate();

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Простите, такой страницы у нас нет</h1>
      <p className={styles.description}>Попробуйте перейти на другую страницу или вернуться на шаг назад</p>
      <div className={styles['button-group']}>
        <button onClick={() => navigate('/', { replace: true })} className={styles.button}>
          На главную
        </button>
        <button onClick={() => navigate(-1)} className={styles.button}>
          Назад
        </button>
      </div>
    </section>
  );
}

export default NotFound;
