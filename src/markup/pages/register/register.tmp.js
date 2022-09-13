import styles from './register.module.css';

export default `
  <section class=${styles.page}>
    <form class=${styles.loginForm}>
      <h2 class=${styles.title}>Регистрация</h2>
      <fieldset class=${styles.fieldset}>
        <label class=${styles.label}>
          <span class=${styles.text}>Почта:</span>
          <input class=${styles.input} type="text" placeholder="pochta@yandex.ru"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Логин:</span>
          <input class=${styles.input} type="text" placeholder="ivanivanov"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Имя:</span>
          <input class=${styles.input} type="text" placeholder="Иван"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Фамилия:</span>
          <input class=${styles.input} type="text" placeholder="Иванов"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Телефон:</span>
          <input class=${styles.input} type="text" placeholder="+7 (909) 967 30 30"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Пароль:</span>
          <input class=${styles.input} type="password" placeholder="1234567"/>
        </label>
        <label class=${styles.label}>
          <span class=${styles.text}>Пароль (еще раз):</span>
          <input class=${styles.input} type="password" placeholder="1234567"/>
        </label>
      </fieldset>
      <div class=${styles.buttons}>
        <button class=${styles.submitButton}>Зарегистрироваться</button>
        <a href="#" class=${styles.link}>Войти</a>
      </div>
    </form>
  </section>
`
