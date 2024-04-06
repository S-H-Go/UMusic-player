<template>
  <view class="index-navbar">
    <view
      class="box-border z-50 fixed flex justify-between w-100vw pt34rpx pb-34rpx h-105rpx bg-white lh-36rpx"
    >
      <text class="top-title pl-34rpx text-34rpx" :class="{ 'slide-up': isSlideUp }">
        {{ title }}
      </text>
      <view></view>
      <view class="more pr-4">
        <wd-icon
          name="more"
          custom-style="font-weight: 700;"
          color="#fa233b"
          size="32rpx"
        ></wd-icon>
      </view>
    </view>
    <view class="pt-155rpx mx-30rpx">
      <view class="text-3xl font-700 mb-32rpx">
        {{ title }}
      </view>
      <hr />
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
