<template> 
    <section class="tool-description wrapper">
        <h1>Модификатор изображений</h1>
        <p class="intro">
            Этот инструмент позволяет быстро применять к изображениям такие операции, как горизонтальное отражение,
            наложение цветового градиента и массовое переименование файлов. Отлично подходит для подготовки
            одинаковых изображений в разных вариациях — например, для рекламных баннеров, оформления соцсетей
            или создания набора иконок.
        </p>
        <h2>Ключевые возможности</h2>
        <ul class="features-list">
            <li><b>Отражение по горизонтали:</b> Создавайте зеркальные копии изображений одним кликом.</li>
            <li><b>Наложение градиента:</b> Добавляйте полупрозрачный цветовой градиент в одном из четырёх
                направлений: слева направо, справа налево, сверху вниз или снизу вверх.</li>
            <li><b>Переименование файлов:</b> Присвойте обработанным изображениям новое имя по шаблону с
                нумерацией (например: <code>pizza_1.png</code>, <code>pizza_2.png</code> и т.д.).</li>
            <li><b>Пакетная обработка:</b> Применяйте выбранные модификации сразу к десяткам изображений.</li>
            <li><b>Безопасное сохранение:</b> Если исходная и целевая папки совпадают, к именам изображений добавляется
                суффикс <code>_modified</code>, чтобы не перезаписать файлы.</li>
        </ul>
    </section>
    <section class="tool-instruction wrapper">
        <h2>Как пользоваться?</h2>
        <div class="tool-instruction_swiper-container" v-swiper>
            <div class="swiper-button-prev swiper-btn"></div>
            <div class="swiper">
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="/images/image-modifiсator/modifier-1-choose-img.webp" alt="">
                        <h3>Шаг 1: Выберите изображения</h3>
                        <p>Перетащите файлы в поле или кликните по нему, чтобы выбрать изображения.
                        </p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-modifiсator/modifier-2-choose-folder.webp" alt="">
                        <h3>Шаг 2: Укажите папку для сохранения</h3>
                        <p>Нажмите кнопку <b>«Выбрать»</b> чтобы выберать директорию, куда будут сохранятся
                            модифицированные изображения.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-modifiсator/modifier-3-select-options.webp" alt="">
                        <h3>Шаг 3: Выберите модификации</h3>
                        <p>Активируйте нужные опции: отражение, градиент или переименование.
                            Можно выбрать несколько.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-modifiсator/modifier-4-gradient-settings.webp"
                            alt="">
                        <h3>Шаг 4: Настройте градиент (если включён)</h3>
                        <p>Укажите цвет в формате <code>#RRGGBB</code> и выберите направление
                            градиента из выпадающего списка.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-modifiсator/modifier-5-rename-settings.webp"
                            alt="">
                        <h3>Шаг 5: Укажите имя для переименования (если включено)</h3>
                        <p>Введите базовое имя (например, <code>banner</code>), и файлы получат
                            имена <code>banner_1.png</code>, <code>banner_2.png</code> и т.д.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-modifiсator/modifier-6-start-button.webp" alt="">
                        <h3>Шаг 6: Запустите модификацию</h3>
                        <p>Нажмите кнопку <b>«Модифицировать»</b>.</p>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-next swiper-btn"></div>
        </div>
        <h2>Подробнее о использовании инструмента:</h2>
        <div class="instruction-step centration">
            <h3>Шаг 1: Выберите изображения</h3>
            <p>Кликните по полю «Перетащите изображения сюда…» или перетащите файлы. Можно выбрать сразу несколько.</p>
            <p><b>Пример:</b></p>
            <p>Вы выбираете:</p>
            <div class="example-box">
                <pre><code>product_front.jpg
product_back.png
logo.webp</code></pre>
            </div>
            <p>В поле отобразится:</p>
            <div class="example-box">
                <pre><code>Выбрано изображений: 3</code></pre>
            </div>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 2: Укажите папку для сохранения</h3>
            <p>Нажмите кнопку <b>«Выбрать»</b> рядом с полем <em>«Папка для сохранения»</em> и укажите путь.</p>
            <p><b>Пример:</b></p>
            <p>Вы выбираете:</p>
            <div class="example-box">
                <pre><code>C:\Users\Me\Pictures\Modified\</code></pre>
            </div>
            <p>Если не указать папку, обработка не запустится.</p>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 3: Выберите модификации</h3>
            <p>Отметьте нужные опции:
                <b>«Отразить по горизонтали»</b>,
                <b>«Наложить градиент»</b> и/или
                <b>«Переименовать»</b>.
                Можно выбрать любую комбинацию.
            </p>
            <p><b>Важно:</b> Нужно выбрать хотя бы одну опцию, иначе кнопка запуска будет недоступна.</p>
            <p><b>Пример:</b></p>
            <p>Вы отмечаете:</p>
            <div class="example-box">
                <pre><code>✓ Наложить градиент
✓ Переименовать</code></pre>
            </div>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 4: Настройте градиент (если включён)</h3>
            <p>После активации градиента появится блок настроек. Укажите цвет в формате <code>#RRGGBB</code>
                (например, <code>#ff0000</code> для красного) и выберите направление из списка.</p>
            <p><b>Пример:</b></p>
            <p>Вы вводите:</p>
            <div class="example-box">
                <pre><code>Цвет: #0000ff
Направление: Сверху вниз</code></pre>
            </div>
            <p>На изображение будет наложен синий градиент, переходящий от прозрачного вверху к непрозрачному внизу.</p>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 5: Укажите имя для переименования (если включено)</h3>
            <p>Если включена опция «Переименовать», появится поле для ввода базового имени. Нумерация будет добавлена
                автоматически, начиная с 1.</p>
            <p><b>Пример:</b></p>
            <p>Вы вводите:</p>
            <div class="example-box">
                <pre><code>banner</code></pre>
            </div>
            <p>Результат:</p>
            <div class="example-box">
                <pre><code>banner_1.jpg
banner_2.png
banner_3.webp</code></pre>
            </div>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 6: Запустите модификацию</h3>
            <p>Нажмите кнопку <b>«Модифицировать»</b>. Процесс может занять несколько секунд — прогресс отображается
                в строке состояния.</p>
            <p><b>Результат:</b></p>
            <p>В указанной папке появятся файлы с применёнными изменениями.</p>
            <div class="example-box">
                <pre><code>banner_1.jpg
banner_2.png
banner_3.webp</code></pre>
            </div>
            <p>Статусная строка покажет:</p>
            <div class="example-box">
                <pre><code>Модификация завершена! Обработано 3 из 3</code></pre>
            </div>
            <div class="instruction-step centration">
                <h2>Важные замечания:</h2>
                <p><b>Градиент:</b> Градиент накладывается только поверх изображения и не заменяет его полностью.</p>
                <p><b>Прозрачность:</b> При сохранении в JPEG прозрачность будет утеряна — фон станет белым.</p>
                <p><b>Безопасность:</b> Если вы сохраняете в ту же папку, где лежат оригиналы, к имени добавляется
                    приписка,
                    чтобы избежать перезаписи:</p>
                <div class="example-box">
                    <pre><code>_modified</code></pre>
                </div>
            </div>
        </div>
    </section>
</template>