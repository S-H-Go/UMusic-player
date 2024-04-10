import { http } from '@/utils/http'

// 获取最新专辑
export function getNewestAlbums() {
  return http<IAlbumData[]>({
    url: '/album/newest',
  })
}

// 获取专辑详情（通过 ID）
export function getAlbumDetail(id: number) {
  return http({
    url: '/album',
    data: {
      id,
    },
  })
}
