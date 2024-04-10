<route lang="json5" type="page">
{
  layout: 'default',
  style: {
    navigationStyle: 'custom',
  },
}
</route>

<template>
  <view class="">
    <IndexNavbar title="浏览"></IndexNavbar>
    <AlbumScrollView
      title="最新专辑"
      :isNav="false"
      :data="newestAlbums"
      detailsPageUrl="/pages/album/details"
      keyField="id"
      srcField="picUrl"
      nameField="name"
      authorField="author"
    ></AlbumScrollView>
  </view>
</template>

<script lang="ts" setup>
import { getNewestAlbums } from '@/service/album'
import { countingAlbumAuthors } from '@/utils'

const newestAlbums = ref<IAlbumData[]>([])
getNewestAlbums().then((res) => {
  newestAlbums.value = res.albums
  countingAlbumAuthors(newestAlbums.value)
})
</script>

<style lang="scss" scoped>
//
</style>
