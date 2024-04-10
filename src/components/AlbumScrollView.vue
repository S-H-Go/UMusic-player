<template>
  <view class="">
    <view class="title">
      <view class="font-600 text-38rpx ml-30rpx mt-40rpx mb-35rpx">{{ title }}</view>
    </view>
    <swiper scroll-x class="h-430rpx" :display-multiple-items="2">
      <swiper-item v-for="item in data" class="w-356rpx" :key="item[keyField]">
        <MiniAlbum
          :toUrl="`${detailsPageUrl}?id=${item[keyField]}`"
          :src="item[srcField]"
          :name="item[nameField]"
          :author="item[authorField]"
        ></MiniAlbum>
      </swiper-item>
    </swiper>
  </view>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: String,
  isNav: Boolean,
  navUrl: {
    type: String,
    default: '',
  },
  data: Array,
  detailsPageUrl: String,
  keyField: String,
  srcField: String,
  nameField: String,
  authorField: String,
})
</script>

<style lang="scss" scoped>
.title-text {
  font-size: 40rpx;
  font-weight: bold;
}

:deep(.uni-swiper-slides) {
  inset: 0 30rpx;
}

:deep(.uni-swiper-slide-frame) {
  width: 352rpx !important;
}
</style>
