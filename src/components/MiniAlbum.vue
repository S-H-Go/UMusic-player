<template>
  <view class="mini-albulm" @click="to">
    <wd-img :src="src" class="w-336rpx h-336rpx" :radius="10"></wd-img>
    <div class="text-26rpx truncate mx-4rpx">{{ name }}</div>
    <view class="text-26rpx text-[#929296] truncate mx-4rpx">{{ author }}</view>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  toUrl: {
    type: String,
    default: '',
  },
  src: String,
  name: String,
  author: String,
})
function to() {
  uni.navigateTo({
    url: props.toUrl,
  })
}
</script>

<style lang="scss" scoped>
//
</style>
