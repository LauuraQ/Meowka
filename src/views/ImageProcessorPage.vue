<template>
    <section class="tool-description wrapper">
        <h1>Обработчик изображений</h1>
        <p class="intro">
            Этот инструмент позволяет изменять размер изображений, обрезать их по заданным пропорциям
            и сохранять с сохранением качества. Подходит для подготовки изображений к публикации,
            создания превью или адаптации под конкретные требования размера.
        </p>
        <h2>Ключевые возможности</h2>
        <ul class="features-list">
            <li><b>Изменение размера:</b> Задайте желаемую ширину и/или высоту. Если указан только один
                параметр, второй будет рассчитан автоматически.</li>
            <li><b>Сохранение пропорций:</b> При включённой опции изображение масштабируется с сохранением
                исходного соотношения сторон.</li>
            <li><b>Обрезка до размера:</b> Если нужно строго соблюсти указанные размеры, можно включить режим
                обрезки с выбором точки привязки (центр, углы).</li>
            <li><b>Поддержка популярных форматов:</b> PNG, JPEG, BMP, GIF, TIFF, WebP.</li>
            <li><b>Автоматическая конвертация цветовых профилей:</b> Изображения с прозрачностью корректно
                обрабатываются при необходимости (например, замена альфа-канала на белый фон в JPEG).</li>
        </ul>
    </section>
    <section class="tool-instruction wrapper">
        <h2>Как пользоваться?</h2>
        <div class="tool-instruction_swiper-container" v-swiper>
            <div class="swiper-button-prev swiper-btn"></div>
            <div class="swiper">
                <div class="swiper-pagination"></div>
                <div class="swiper-wrapper">
                    <div class="swiper-slide"><img src="/images/image-processor/processor-1-choose-img.webp" alt="">
                        <h3>Шаг 1: Выберите изображения</h3>
                        <p>Нажмите на поле «дроп-бокса» или перетащите файлы в него. Поддерживаются
                            PNG, JPEG, BMP, GIF, TIFF и WebP.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-processor/processor-2-choose-folder.webp" alt="">
                        <h3>Шаг 2: Укажите папку для сохранения</h3>
                        <p>Нажмите кнопку <b>«Выбрать»</b> и укажите директорию для сохранения обработанных
                            изображений.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-processor/processor-3-set-size.webp" alt="">
                        <h3>Шаг 3: Укажите размер</h3>
                        <p>Введите желаемую ширину и/или высоту в пикселях. Если задан только один параметр,
                            второй подберётся автоматически.</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-processor/processor-4-choose-mode.webp" alt="">
                        <h3>Шаг 4: Выберите режим обработки</h3>
                        <p>Активируйте «Сохранять пропорции» или «Обрезать до размеров». При обрезке можно
                            выбрать точку привязки (например, центр или углы).</p>
                    </div>
                    <div class="swiper-slide"><img src="/images/image-processor/processor-5-start-button.webp" alt="">
                        <h3>Шаг 5: Запустите обработку</h3>
                        <p>Нажмите кнопку <b>«Обработать изображения»</b>.</p>
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
            <div class="swiper-button-next swiper-btn"></div>
        </div>
        <h2>Подробнее о использовании инструмента:</h2>
        <div class="instruction-step centration">
            <h3>Шаг 1: Выберите изображения</h3>
            <p>Нажмите на поле «дроп-бокса» или перетащите в него файлы. Можно выбрать сразу несколько изображений.</p>
            <p><b>Пример:</b></p>
            <p>Вы выбираете:</p>
            <div class="example-box">
                <pre><code>portrait.jpg (3 МБ)
landscape.png (4 МБ)
logo_alpha.webp (1 МБ)</code></pre>
            </div>
            <p>В поле отобразится:</p>
            <div class="example-box">
                <pre><code>Выбрано изображений: 3</code></pre>
            </div>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 2: Укажите папку для сохранения</h3>
            <p>Нажмите кнопку <b>«Выбрать»</b> в поле <em>«Папка для сохранения»</em> и укажите путь.</p>
            <p><b>Пример:</b></p>
            <p>Вы выбираете папку:</p>
            <div class="example-box">
                <pre><code>C:\Users\Me\Pictures\Processed\</code></pre>
            </div>
            <p>Если папка не указана, обработка не запустится.</p>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 3: Укажите размер</h3>
            <p>Введите ширину и/или высоту в пикселях. Если указать только ширину — высота будет рассчитана
                пропорционально, и наоборот.</p>
            <p><b>Пример:</b></p>
            <p>Вы вводите:</p>
            <div class="example-box">
                <pre><code>Ширина: 800
Высота: (оставлено пустым)</code></pre>
            </div>
            <p>Изображение будет пропорционально уменьшено до ширины 800 пикселей.</p>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 4: Выберите режим обработки</h3>
            <p>По умолчанию включён режим <b>«Сохранять пропорции»</b>. Если вам нужен строго фиксированный
                размер (например, 200×200), включите <b>«Обрезать до размеров»</b> и выберите точку привязки.</p>
            <p><b>Пример настройки:</b></p>
            <p>Вы выбираете:</p>
            <div class="example-box">
                <pre><code>Обрезать до размеров
Привязка: Центр</code></pre>
            </div>
            <p>Изображение будет масштабировано и обрезано от центра до заданных размеров.</p>
        </div>
        <div class="instruction-step centration">
            <h3>Шаг 5: Запустите обработку</h3>
            <p>Нажмите кнопку <b>«Обработать изображения»</b>. Прогресс будет отображаться в строке состояния.</p>
            <p><b>Результат:</b></p>
            <p>В указанной папке появятся обработанные файлы с исходными именами и расширениями.</p>
            <div class="example-box">
                <pre><code>portrait.jpg
landscape.png
logo_alpha.webp</code></pre>
            </div>
            <p>Статусная строка покажет:</p>
            <div class="example-box">
                <pre><code>Готово к обработке: 3 шт.</code></pre>
            </div>
            <div class="instruction-step centration">
                <h2>Важные замечания:</h2>
                <p><b>Прозрачность:</b> При обработке изображений с прозрачностью (например, PNG или WebP) в формате,
                    не поддерживающем альфа-канал, прозрачные области могут быть заменены на белый фон.</p>
            </div>
        </div>
    </section>
</template>