import styles from './login.module.css';

export default `
  <section class=${styles.page}>
    <form class=${styles.loginForm}>
      <h2 class=${styles.title}>Вход</h2>
      <fieldset class=${styles.fieldset}>
        <label class=${styles.label}>
          <span class=${styles.text}>Логин:</span>
          <input class=${styles.input} type="text" placeholder="login"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Пароль:</span>
          <input class=${styles.input} type="password" placeholder="12345678"/>
        </label>
      </fieldset>
      <div class=${styles.buttons}>
        <button class=${styles.submitButton}>Войти</button>
        <a href="#" class=${styles.link}>Зарегистрироваться</a>
      </div>
    </form>
  </section>
`
