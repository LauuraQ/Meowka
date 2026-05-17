<template>
    <section class="tool-description wrapper">
        <h1>Редактор строк: быстро, просто, без копипаста</h1>
        <p class="intro">
            Надоело вручную дописывать «https://» к сотне URL или добавлять домен к списку имён?
            Этот инструмент сделает это за вас — мгновенно и без ошибок.
            Просто вставьте список, укажите, что добавить и куда — и получите готовый результат.
        </p>
        <h2>Почему это работает лучше, чем вручную?</h2>
        <ul class="features-list">
            <li><b>Экономия времени:</b> 100 строк — одна кнопка. Больше никаких «Ctrl+C / Ctrl+V».</li>
            <li><b>Гибкость:</b> Добавляйте текст в начало <em>или</em> в конец — как вам нужно.</li>
            <li><b>Безопасно и локально:</b> Весь текст обрабатывается локально. Ничего не уходит на
                сервер.</li>
            <li><b>Универсально:</b> URL, email, теги, SQL-запросы, CSV-данные — подходит для любого списка.</li>
        </ul>
    </section>
    <section class="tool-instruction wrapper">
        <h2>Как пользоваться?</h2>
        <div class="tool-instruction_swiper-container" v-swiper>
            <div class="swiper-button-prev swiper-btn"></div>
            <div class="swiper">
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="/images/string_editor/string-editor-1-input.webp">
                        <h3>Шаг 1: Введите текст</h3>
                        <p>В поле <b>«Ввод»</b> вставьте список строк, которые нужно обработать. Каждая строка будет
                            обработана
                            отдельно.</p>
                        <div class="example-box">
                            <p><b>Пример ввода:</b></p>
                            <pre><code>summer-sale
winter-collection
</code></pre>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src="/images/string_editor/string-editor-2-position.webp">
                        <h3>Шаг 2: Выберите позицию</h3>
                        <p>Отметьте, куда добавить текст: <b>«В начале строки»</b> или <b>«В конце строки»</b>. Чекбоксы
                            взаимоисключающие — можно выбрать только один вариант.</p>
                        <p>По умолчанию активен «В начале строки».</p>
                    </div>
                    <div class="swiper-slide">
                        <img src="/images/string_editor/string-editor-3-insert-text.webp">
                        <h3>Шаг 3: Укажите текст для вставки</h3>
                        <p>В поле <b>«Что вставляем»</b> введите текст, который будет добавлен к каждой строке.</p>
                        <div class="example-box">
                            <p><b>Пример вставляемого текста:</b></p>
                            <pre><code>login_</code></pre>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <img src="/images/string_editor/string-editor-4-process.webp">
                        <h3>Шаг 4: Нажмите «Обработать»</h3>
                        <p>После настройки всех параметров нажмите кнопку <b>«Обработать»</b>. Результат сразу появится
                            в поле
                            <b>«Вывод»</b>.
                        </p>
                        <p>Поле вывода доступно только для чтения — вы можете легко скопировать результат.</p>
                    </div>
                </div>
            </div>
            <div class="swiper-button-next swiper-btn"></div>
        </div>
        <h2>Подробнее о использовании инструмента:</h2>
        <div class="instruction-step centration">
            <h3>1. Вставьте свой список</h3>
            <p>Скопируйте строки в поле «Ввод». Каждая — с новой строки. Пустые строки игнорируются.</p>
            <div class="example-box">
                <p><b>Было:</b></p>
                <pre><code>summer-sale
winter-collection
new-arrival
promo2024</code></pre>
            </div>
        </div>
        <div class="instruction-step centration">
            <h3>2. Выберите, куда добавить текст</h3>
            <p>Переключатель: «В начало» или «В конец». Только один вариант активен — путаницы не будет.</p>
        </div>
        <div class="instruction-step centration">
            <h3>3. Напишите, что добавить</h3>
            <p>Например: <code>https://shop.ru/</code> или <code>@mail.ru</code>. Пробелы и слэши — ваши союзники!</p>
            <div class="example-box">
                <p><b>Вы вводите:</b></p>
                <pre><code>https://shop.ru/</code></pre>
            </div>
        </div>
        <div class="instruction-step centration">
            <h3>4. Нажмите «Обработать» — и готово!</h3>
            <p>Результат появится сразу. Скопируйте его одним кликом или вручную.</p>
            <div class="example-box">
                <p><b>Стало:</b></p>
                <pre><code>https://shop.ru/summer-sale
https://shop.ru/winter-collection
https://shop.ru/new-arrival
https://shop.ru/promo2024</code></pre>
            </div>
        </div>
    </section>
</template>