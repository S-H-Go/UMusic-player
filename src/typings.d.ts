/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
// 全局要用的类型放到这里

type IResData<T> = {
  code: number
  msg: string
  result: T
  albums: T
}

type IUserInfo = {
  nickname?: string
  avatar?: string
  /** 微信的 openid，非微信没有这个字段 */
  openid?: string
  token?: string
}

type IAlbumData = {
  songs: ISongData[] | null
  paid: boolean
  onSale: boolean
  mark?: number
  awardTags?: any | null
  copyrightId: number
  picId: number
  artist: ArtistData
  artists: ArtistData[]
  publishTime: number
  company: string
  briefDesc: string
  picUrl: string
  commentThreadId: string
  blurPicUrl: string
  companyId: number
  pic: number
  status: number
  subType?: string
  description: string
  tags: string
  alias: any[] // This should be replaced with the correct type if "alias" contains specific objects
  name: string
  id: number
  type: string
  size: number
  picId_str: string
  info?: AlbumInfo
  author?: string
}

type IArtistData = {
  img1v1Id: number
  topicPerson: number
  picId: number
  img1v1Url: string
  followed: boolean
  briefDesc: string
  musicSize: number
  albumSize: number
  picUrl: string
  trans: string
  alias: any[] // This should be replaced with the correct type if "alias" contains specific objects
  name: string
  id: number
  picId_str: string
  transNames?: string[]
  img1v1Id_str: string
}

type IAlbumInfo = {
  commentThread: CommentThread
  latestLikedUsers: any | null
  liked: boolean
  comments: any | null
  resourceType: number
  resourceId: number
  commentCount: number
  likedCount: number
  shareCount: number
  threadId: string
}

type ICommentThread = {
  id: string
  resourceInfo: ResourceInfo
  resourceType: number
  commentCount: number
  likedCount: number
  shareCount: number
  hotCount: number
  latestLikedUsers: any | null
  resourceId: number
  resourceOwnerId: number
  resourceTitle: string
}

type IResourceInfo = {
  id: number
  userId: number
  name: string
  imgUrl: string
  creator: any | null
  encodedId: any | null
  subTitle: any | null
  webUrl: any | null
}

type ISongData = {
  rtUrls: any[] // This should be replaced with the correct type if "rtUrls" contains specific objects
  ar: ArtistReference[]
  al: AlbumReference
  st: number
  noCopyrightRcmd: any | null
  songJumpInfo: any | null
  v: number
  cd: string
  djId: number
  no: number
  fee: number
  mv: number
  t: number
  sq: any | null
  hr: any | null
  l: AudioQuality
  rtUrl: any | null
  ftype: number
  rurl: any | null
  pst: number
  alia: string[]
  pop: number
  rt: string
  mst: number
  cp: number
  crbt: any | null
  cf: string
  dt: number
  h: AudioQuality
  rtype: number
  a: any | null
  m: AudioQuality
  name: string
  id: number
  privilege: SongPrivilege
}

type IArtistReference = {
  id: number
  name: string
  tns: string[]
}

type IAlbumReference = {
  id: number
  name: string
  picUrl: string
  pic_str: string
  pic: number
}

type IAudioQuality = {
  br: number
  fid: number
  size: number
  vd: number
  sr: number
}

type ISongPrivilege = {
  id: number
  fee: number
  payed: number
  st: number
  pl: number
  dl: number
  sp: number
  cp: number
  subp: number
  cs: boolean
  maxbr: number
  fl: number
  toast: boolean
  flag: number
  preSell: boolean
  playMaxbr: number
  downloadMaxbr: number
  maxBrLevel: string
  playMaxBrLevel: string
  downloadMaxBrLevel: string
  plLevel: string
  dlLevel: string
  flLevel: string
  rscl: any | null
  freeTrialPrivilege: FreeTrialPrivilege
  rightSource: number
  chargeInfoList: ChargeInfo[]
}

type IFreeTrialPrivilege = {
  resConsumable: boolean
  userConsumable: boolean
  listenType: any | null
  cannotListenReason: any | null
  playReason: any | null
}

type IChargeInfo = {
  rate: number
  chargeUrl: any | null
  chargeMessage: any | null
  chargeType: number
}
