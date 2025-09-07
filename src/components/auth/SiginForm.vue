<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md" @submit.prevent="handleSignInEmail">
      <q-input v-model="form.email" placeholder="이메일" outlined dense />
      <q-input
        v-model="form.password"
        type="password"
        placeholder="비밀번호"
        outlined
        dense
      />
      <div>
        <q-btn
          type="submit"
          label="로그인하기"
          class="full-width"
          unelevated
          color="primary"
        />
        <div class="flex justify-between">
          <q-btn
            label="비밀번호 찾기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'FindPasswordForm')"
          />
          <q-btn
            label="이메일 가입하기"
            color="secondary"
            flat
            dense
            size="13px"
            @click="$emit('changeView', 'SignUpForm')"
          />
        </div>
      </div>

      <q-separator />
      <q-btn
        label="구글 계정으로 로그인하기"
        class="full-width"
        unelevated
        color="primary"
        outline
        @click="handleSignInGoogle"
      />
    </q-form>
  </div>
</template>

<script setup>
// import Password from 'src/pages/mypage/password.vue';
import { signInWithGoogle, signInWithEmail } from 'src/services/auth';
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useQuasar } from 'quasar'; // <-- 여기

const $q = useQuasar(); // <-- 여기

const router = useRouter();

const emit = defineEmits(['changeView', 'closePopup']); // 'closePopup' 추가
// 이메일 로그인
const form = reactive({
  email: '',
  password: '',
});

// 로그인 (구글)
const handleSignInGoogle = async () => {
  try {
    // 팝업 로그인 실행
    await signInWithGoogle();

    // 로그인 성공 후 팝업 닫기 이벤트 발생
    console.log('여긴오잖아?');
    $q.notify('환영 합니다~! ): ');

    emit('closePopup');
    // 또는 특정 페이지로 이동
    // router.push('/main');

    // 알림 표시
  } catch (error) {
    console.log('로그인 실패:', error);
    // 로그인 실패 알림
  }
};

const handleSignInEmail = async () => {
  try {
    // email과 password를 올바르게 전달합니다.
    await signInWithEmail(form);
    $q.notify('환영 합니다 ): ');

    emit('closePopup');
    // 또는 객체로 전달하는 함수라면: await signInWithEmail(form);
  } catch (error) {
    console.error('로그인 오류:', error);
  }
};
</script>

<style lang="scss" scoped></style>
