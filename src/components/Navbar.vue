<template>
  <view class="fixed z-50 bg-white w-100vw h-105rpx flex items-center justify-between">
    <view class="w-105rpx center" @click="back">
      <wd-icon
        name="arrow-left1"
        custom-style="font-weight: 700;"
        color="#fa233b"
        size="32rpx"
      ></wd-icon>
    </view>
    <view class="title flex-1 ml-32rpx">
      <view class="text-34rpx truncate max-w-450rpx">{{ title }}</view>
    </view>
    <view class="more center w-90rpx h-90rpx">
      <wd-icon name="more" custom-style="font-weight: 700;" color="#fa233b" size="32rpx"></wd-icon>
    </view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
  },
})

function back() {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
//
</style>
