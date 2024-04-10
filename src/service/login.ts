import { http } from '@/utils/http'

export function postLogin(data: { username: string; password: string }) {
  return http({
    url: '/login',
    method: 'POST',
    data,
  })
}
