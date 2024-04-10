<template>
  <view class="song-item flex h-90rpx items-center">
    <view class="dot w-34rpx"></view>
    <view class="index w-46rpx text-center text-24rpx color-[#8a8a8e]">{{ index }}</view>
    <view class="img"></view>
    <view class="name w-520rpx ml-16rpx text-30rpx truncate">{{ data.name }}</view>
    <view class="w-60rpx"></view>
    <view class="more w-52rpx mr-20rpx">
      <wd-icon name="more" size="30rpx" color="#000000"></wd-icon>
    </view>
  </view>
  <hr v-if="!hideHr" class="ml-96rpx w-654rpx" />
</template>

<script lang="ts" setup>
const props = defineProps<{
  data: ISongData
  index?: number
  isImg?: boolean
  hideHr: boolean
}>()
console.log(props.data)
</script>

<style lang="scss" scoped>
//
</style>
