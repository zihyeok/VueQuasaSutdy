<template>
  <div>
    <div class="text-h5 text-center text-weight-bold q-mb-xl">로그인</div>
    <q-form class="q-gutter-y-md">
      <q-input placeholder="이메일" outlined dense />
      <q-input placeholder="비밀번호" outlined dense />
      <div>
        <q-btn
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
import { signInWithGoogle } from 'src/services/auth';
import { useRouter } from 'vue-router';
const router = useRouter();

const emit = defineEmits(['changeView', 'closePopup']); // 'closePopup' 추가

// 로그인 (구글)
const handleSignInGoogle = async () => {
  try {
    // 팝업 로그인 실행
    await signInWithGoogle();

    // 로그인 성공 후 팝업 닫기 이벤트 발생
    emit('closePopup');
    console.log('여긴오잖아?');
    // 또는 특정 페이지로 이동
    // router.push('/main');

    // 알림 표시
  } catch (error) {
    console.error('로그인 실패:', error);
    // 로그인 실패 알림
  }
};
</script>

<style lang="scss" scoped></style>
