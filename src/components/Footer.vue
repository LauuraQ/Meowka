<template>
  <footer class="footer_container wrapper">
    <div class="footer_link-container">
      <ul class="footer_categoty-list">
        <li class="footer_categoty-title"><a href="#">Для текста</a></li>
        <li class="footer_categoty-item">
          <router-link to="/parser">Парсер</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/crosslink">Перелинковка</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/lists">Списки</router-link>
        </li>
      </ul>
      <ul class="footer_categoty-list">
        <li class="footer_categoty-title"><a href="#">Обработка</a></li>
        <li class="footer_categoty-item">
          <router-link to="/string-editor">Редактор строк</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/adress-formator">Форматирование адресов</router-link>
        </li>
      </ul>
      <ul class="footer_categoty-list">
        <li class="footer_categoty-title"><a href="#">Для картинок</a></li>
        <li class="footer_categoty-item">
          <router-link to="/image-converter">Конвертер</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/image-processor">Обработка</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/image-modificator">Модификация</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/logo">Логотип</router-link>
        </li>
      </ul>
      <ul class="footer_categoty-list">
        <li class="footer_categoty-title"><a href="#">Воркфлоу</a></li>
        <li class="footer_categoty-item">
          <router-link to="/filler">Филлер</router-link>
        </li>
        <li class="footer_categoty-item">
          <router-link to="/multi-filler">Мульти филлер</router-link>
        </li>
      </ul>
    </div>
    <p>Meowka 2025</p>
    <router-link to="/">
      <svg
        class="footer_logo"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 15 12.48"
        stroke="var(--color-gray)"
      >
        <path
          class="a"
          d="M11.45,10.75A3.41,3.41,0,0,1,8,13.38a3.41,3.41,0,0,1-3.45-2.63C6.46,10.69,8,7.42,8,5.5,8,7.42,9.54,10.69,11.45,10.75Z"
          transform="translate(-0.5 -1.45)"
        />
        <path
          class="b"
          d="M15,7.25a3.5,3.5,0,0,1-3.5,3.5h-.05C9.54,10.69,8,7.42,8,5.5c0,0,2.63-.79,2.63-1.75h.87A3.5,3.5,0,0,1,15,7.25Z"
          transform="translate(-0.5 -1.45)"
        />
        <path
          class="b"
          d="M8,5.5c0,1.92-1.54,5.19-3.45,5.25h0a3.5,3.5,0,0,1,0-7h.88C5.38,4.71,8,5.5,8,5.5Z"
          transform="translate(-0.5 -1.45)"
        />
        <path
          class="a"
          d="M10.63,3.74h0C10.63,4.71,8,5.5,8,5.5S5.38,4.71,5.38,3.75h0a1.3,1.3,0,0,1,.14-.58A2.8,2.8,0,0,1,8,2C9.44,2,10.62,2.78,10.63,3.74Z"
          transform="translate(-0.5 -1.45)"
        />
      </svg>
    </router-link>
  </footer>
</template>

<script setup></script>

<style scoped>
  .a,
  .b {
    fill: none;
    stroke-miterlimit: 10;
    stroke-width: 1px;
  }
</style>