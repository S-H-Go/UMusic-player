<template>
  <view class="index-navbar">
    <view class="z-50 fixed flex justify-between w-100vw pt-2 h-8 bg-white">
      <view class="top-title pl-30rpx text-lg" :class="{ 'slide-up': isSlideUp }">{{ title }}</view>
      <view></view>
      <view class="more pr-4">
        <wd-icon name="more" color="#f9233b"></wd-icon>
      </view>
    </view>
    <view class="pt-90rpx mx-30rpx">
      <view class="text-3xl font-700">
        {{ title }}
        <hr />
      </view>
    </view>
  </view>
</template>

<script lang="ts" setup>
defineProps<{
  title: string
}>()
const isSlideUp = ref(false)
// TODO 根据滚动距离控制是否显示标题
onPageScroll(({ scrollTop }) => {
  console.log(scrollTop)
})
</script>

<style lang="scss" scoped>
hr {
  border-width: 0.5px;
}
</style>
