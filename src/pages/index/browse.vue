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
      keyField="id"
      srcField="picUrl"
      nameField="name"
      authorField="author"
    ></AlbumScrollView>
  </view>
</template>

<script lang="ts" setup>
import { getNewestAlbums, IAlbum } from '@/service/album'

const newestAlbums = ref<IAlbum[]>([])
getNewestAlbums().then((res) => {
  newestAlbums.value = res.albums
  newestAlbums.value.forEach((item) => {
    item.author = item.artists.reduce((c, p, index) => {
      if (index >= 1) {
        return `${c + p.name},`
      }
      return c + p.name
    }, '')
  })
  console.log(res.albums)
})
</script>

<style lang="scss" scoped>
//
</style>
