<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <Navbar :title="album?.name" />
  <view class="mt-105rpx">
    <view class="text-center mt-20rpx">
      <wd-img :src="album?.picUrl" class="w-475rpx h-475rpx shadow-md" radius="20"></wd-img>
    </view>
    <view class="text-center mx-30rpx mt-30rpx">
      <view class="text-lg font-bold">{{ album?.name }}</view>
      <view class="text-sm text-[#fa233b]">{{ album?.author }}</view>
      <view class="text-20rpx mt-8rpx text-[#8a8a8e]">
        {{ new Date(album?.publishTime).getFullYear() }}
      </view>
    </view>
    <view class="h-82rpx mt-30rpx mx-30rpx flex justify-between">
      <button class="w-328rpx h-full center bg-[#eeeef0] rounded-lg">
        <wd-icon name="play" color="#f9233b" size="42rpx" />
        <text class="text-34rpx text-[#fa233b]">播放</text>
      </button>
      <button class="ml-30rpx w-328rpx h-full center bg-[#eeeef0] rounded-lg">
        <view class="i-carbon-shuffle text-[#fa233b] w-34rpx h-28rpx mt-4rpx"></view>
        <text class="text-34rpx ml-4rpx text-[#fa233b]">随机播放</text>
      </button>
    </view>
    <view class="songs mt-30rpx">
      <hr class="ml-30rpx" />
      <SongItem
        v-for="(song, index) in songs"
        :data="song"
        :key="song.id"
        :index="index"
        :hideHr="index === songs.length - 1"
      ></SongItem>
      <hr class="" />
    </view>
    <view class="text-[#8a8a8e] mt-40rpx ml-30rpx mb-30rpx">
      <view class="text-26rpx">
        {{ `${publishTime.year}年${publishTime.month}月${publishTime.day}日` }}
      </view>
      <view class="text-26rpx">{{ `${album?.size} 首歌曲, ${allTime}` }}</view>
      <view class="text-22rpx">{{ album?.company }}</view>
    </view>
  </view>
</template>

<script lang="ts" setup>
import { getAlbumDetail } from '@/service/album'
import { countingAlbumAuthors } from '@/utils'

const album = ref<IAlbumData>()
const songs = ref<ISongData[]>([])
const publishTime = computed(() => {
  const date = new Date(album.value?.publishTime)
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  return { year, month, day }
})
const allTime = computed(() => {
  const durationSum = songs.value.reduce((prev, curr) => prev + curr.dt, 0)
  const durationSec = Math.floor(durationSum / 1000)
  const minutesTotal = Math.floor(durationSec / 60)
  const hours = Math.floor(minutesTotal / 60)
  const minutes = minutesTotal % 60
  if (hours === 0) {
    return `${minutes} 分钟`
  }
  return `${hours} 小时 ${minutes} 分钟`
})
onLoad(({ id }) => {
  getAlbumDetail(id).then((res) => {
    album.value = res.album
    songs.value = res.songs
    countingAlbumAuthors(album.value)
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>
//
</style>
