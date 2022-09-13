import styles from './error.module.css';

export default `
  <section class=${styles.screen}>
    <div class=${styles.illustration} style="background-image: url('{{illustration}}')"></div>
    <div class=${styles.container}>
      <h1 class=${styles.title}>{{title}}</h1>
      <button class=${styles.button}>Вернуться назад</button>
    </div>
  </section>
`
