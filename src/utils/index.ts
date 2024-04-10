import pagesJson from '@/pages.json'

console.log(pagesJson)

/** 判断当前页面是否是tabbar页  */
export const getIsTabbar = () => {
  if (!Object.keys(pagesJson).includes('tabBar')) {
    return false
  }
  const pages = getCurrentPages()
  const lastPage = getArrElementByIdx(pages, -1)
  const currPath = lastPage.route
  return !!pagesJson.tabBar.list.find((e) => e.pagePath === currPath)
}

export const getArrElementByIdx = (arr: any[], index: number) => {
  if (index < 0) return arr[arr.length + index]
  if (index >= arr.length) return undefined
  return arr[index]
}

export function countingAlbumAuthors(obj: IAlbumData | IAlbumData[]) {
  if (Array.isArray(obj)) {
    obj.forEach((item) => {
      item.author = item.artists.reduce((c, p, index) => {
        if (index >= 1) {
          return `${c + p.name},`
        }
        return c + p.name
      }, '')
    })
  } else {
    obj.author = obj.artists.reduce((c, p, index) => {
      if (index >= 1) {
        return `${c + p.name},`
      }
      return c + p.name
    }, '')
  }
}
