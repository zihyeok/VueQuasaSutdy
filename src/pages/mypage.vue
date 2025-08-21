<script setup></script>

<template>
  <div class="text-h4">Mypage</div>
  <div>
    <ul>
      <li>
        <router-link to="/mypage/profile">Profile</router-link>
      </li>
      <li>
        <router-link to="/mypage/password">password</router-link>
      </li>
      <li>
        <router-link to="/mypage/bookmark">bookmark</router-link>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style scoped></style>
