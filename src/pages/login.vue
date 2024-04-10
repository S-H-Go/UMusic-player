<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationBarTitleText: '登录',
  },
}
</route>

<template>
  <view class="login">
    <text class="title">账号密码登录</text>
    <label for="phone">
      电话号码
      <input class="input" type="tel" name="phone" id="phone" v-model="phone" />
    </label>
    <label for="password">
      密码
      <wd-input class="input" v-model="password" show-password></wd-input>
    </label>
    <view id="button-panel">
      <button>登录</button>
      <button>创建账户</button>
    </view>
  </view>
</template>

<script lang="ts" setup>
const phone = ref('')
const password = ref('')
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;

  .input {
    width: 90vw;
  }
}
</style>
