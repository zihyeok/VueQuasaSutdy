<template>
  <q-layout view="lHh Lpr fFf">
    <q-header vordered elevated class="bg-white text-grey-9">
      <q-toolbar>
        <q-btn flat dense to="/">
          <q-toolbar-title>
            <q-avatar>
              <img src="/favicon-32x32.png" />
            </q-avatar>
            짐코딩 클럽
          </q-toolbar-title>
        </q-btn>
        <q-space />
        <q-btn stretch flat label="home" to="/home" />
        <q-btn
          stretch
          flat
          label="수강하기"
          href="https://google.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="온라인 강의"
          href="https://naver.com"
          target="_blank"
        />
        <q-btn
          stretch
          flat
          label="유튜브"
          href="https://youtube.com"
          target="_blank"
        />
        <q-separator class="q-my-md q-mr-md" dark vertical />
        <q-btn
          unelevated
          rounded
          color="primary"
          label="로그인 / 회원가입"
          @click="openAuthDialog"
        />
        <q-btn round flat>
          <q-avatar>
            <img src="https://cdn.quasar.dev/img/avatar.png" />
          </q-avatar>
          <q-menu>
            <q-list style="min-width: 100px">
              <q-item clickable v-close-popup to="/mypage/profile">
                <q-item-section>프로필</q-item-section>
              </q-item>
              <q-item clickable v-close-popup>
                <q-item-section>로그아웃</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container :style="pageContainerStyles">
      <router-view />
    </q-page-container>
    <AuthDialog v-model="authdialog" />
  </q-layout>
</template>
<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import AuthDialog from 'src/components/auth/AuthDialog.vue';

const route = useRoute();
//console.dir('route=', route);
//debugger;
const pageContainerStyles = computed(() => ({
  maxWidth: route.meta?.width || '1000px',
  margin: '0 auto',
}));

const authdialog = ref(false);
const openAuthDialog = () => (authdialog.value = true);
</script>
<style></style>
