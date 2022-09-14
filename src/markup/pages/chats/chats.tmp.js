export default `
    <section class="chats">
        <header class="chats-header">
            <img class="chats-header__avatar"/>
            <nav class="chats-header__nav">
                <ul class="chats-header__list">
                    <li class="chats-header__list-item">
                        <button class="chats-header__button chats-header__button_chats"/>
                    </li>
                    <li class="chats-header__list-item">
                        <button class="chats-header__button chats-header__button_profile"/>
                    </li>
                </ul>
            </nav>
        </header>
        <main class="chats-container">
            <section class="chats-list">
                <div>
                    <input class="chats-list__search" type="text" placeholder="Поиск по сообщениям..." />
                </div>
                <ul class="chats-list__list">
                    <li class="chats-list__list-item">
                        <img class="chats-list__avatar" src="" alt="">
                        <div class="chats-list__container">
                            <h2 class="chats-list__title">Иван Иванов</h2>
                            <p class="chats-list__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        </div>
                        <div class="chats-list__container">
                            <span class="chats-list__time">1:38</span>
                            <div class="chats-list__notify">8</div>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="chat">
                <header class="chat__header">
                    <div class="chat__header-container">
                        <h1 class="chat__title">Иван Иванов</h1>
                        <span class="chat__status"></span>
                        <p class="chat__status-text">Был в сети 6 минут назад</p>
                    </div>
                    <button class="chat__options"></button>
                </header>
                <div class="chat__messages">
                
                </div>
                <footer class="chat__footer">
                    <div class="chat__footer-container">
                        <button class="chat__attach"></button>
                        <input class="chat__input" type="text" placeholder="Написать сообщение..."/>
                        <button class="chat__send-button"></button>
                    </div>
                </footer>
            </section>
        </main>
    </section>
`

