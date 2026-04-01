import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <h1>Создание шаблона для проекта на React</h1>
      <div>
        <h2>
          Основные пункты: 
        </h2>
        <ul style={{ listStyle: 'none'}}>
          <li>✅ Добавлены все необходимые пакеты для React и Vite</li>
          <li>✅ Настроен Vite</li>
          <li>✅ SCSS Modules + картинки</li>
          <li>✅ ESLint</li>
          <li>✅ Запуск без ошибок</li>
        </ul>
      </div>
    </div>
  );
}

export default App;