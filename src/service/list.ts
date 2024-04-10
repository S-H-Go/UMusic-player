// 榜单相关的API
import { http } from '@/utils/http'

export function getTopList() {
  return http({
    url: '/toplist',
    method: 'GET',
  })
}
