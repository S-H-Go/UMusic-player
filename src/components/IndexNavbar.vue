<template>
  <view class="index-navbar">
    <view class="fixed flex justify-between w-100vw pt-2 h-8 bg-white">
      <view class="top-title pl-4 text-lg" :class="{ 'slide-up': isSlideUp }">{{ title }}</view>
      <view></view>
      <view class="more pr-4">
        <wd-icon name="more" color="#f9233b"></wd-icon>
      </view>
    </view>
    <view class="main pt-10 mx-4">
      <view class="title text-2xl font-medium">
        主页
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
onPageScroll(({ scrollTop }) => {
  console.log(scrollTop)
})
</script>

<style lang="scss" scoped>
hr {
  border-width: 0.5px;
}
</style>
