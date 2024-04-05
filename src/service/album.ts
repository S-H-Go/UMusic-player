import { http } from '@/utils/http'
import type { IAlbum } from './album.d'

export { IAlbum }
// 获取最新专辑
export function getNewestAlbums() {
  return http<IAlbum[]>({
    url: '/album/newest',
  })
}
