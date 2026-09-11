// 作品資料的單一來源。作品總覽與作品內頁都從這裡取用，
// 新增作品只要在這個陣列加一筆即可。
//
// meta 為選填 —— 目前沒有各案場的坪數與完工年份資料，
// 補上後內頁會自動顯示，不需要改版面。
//   meta: { size: '38 坪', year: '2021', location: '台北市大安區' }

const S3 = 'https://kuanda-design.s3.amazonaws.com/'

export const CATEGORIES = [
  { key: 'residential', title: '住宅空間設計', label: 'RESIDENTIAL SPACE' },
  { key: 'commercial', title: '商業空間設計', label: 'COMMERCIAL SPACE' },
]

export const projects = [
  {
    id: '1',
    name: '安和路作品',
    category: 'residential',
    images: [
      `${S3}1-4.jpg`, `${S3}1-5.jpg`, `${S3}1-6.jpg`, `${S3}1-7.jpg`, `${S3}1-8.jpg`,
      `${S3}1-9.jpg`, `${S3}1-10.jpg`, `${S3}1-1.jpg`, `${S3}1-2.jpg`, `${S3}1-3.jpg`,
    ],
  },
  {
    id: '2',
    name: '中山北路作品',
    category: 'residential',
    images: [
      `${S3}2-6.jpg`, `${S3}2-2.jpg`, `${S3}2-3.jpg`, `${S3}2-4.jpg`, `${S3}2-5.jpg`,
      `${S3}2-7.jpg`, `${S3}2-10.jpg`, `${S3}2-17.jpg`, `${S3}2-21.jpg`, `${S3}2-23.jpg`,
      `${S3}2-24.jpg`,
    ],
  },
  {
    id: '3',
    name: '信義路作品',
    category: 'residential',
    images: [
      `${S3}3-1.jpg`, `${S3}3-2.jpg`, `${S3}3-3.jpg`, `${S3}3-4.jpg`, `${S3}3-5.jpg`,
      `${S3}3-6.jpg`,
    ],
  },
  {
    id: '4',
    name: '光復北路作品',
    category: 'residential',
    images: [
      `${S3}4-1.jpg`, `${S3}4-2.jpg`, `${S3}4-3.jpg`, `${S3}4-4.jpg`, `${S3}4-8.jpg`,
    ],
  },
  {
    id: '5',
    name: '天母西路作品',
    category: 'residential',
    images: [
      `${S3}5-1.jpg`, `${S3}5-3.JPG`, `${S3}5-4.JPG`, `${S3}5-5.JPG`, `${S3}5-6.JPG`,
    ],
  },
  {
    id: '8',
    name: '衡陽路辦公室',
    category: 'commercial',
    images: [
      `${S3}8-1.jpg`, `${S3}8-2.jpg`, `${S3}8-3.jpg`, `${S3}8-4.jpg`, `${S3}8-5.jpg`,
      `${S3}8-6.jpg`, `${S3}8-7.jpg`,
    ],
  },
]

export const getProject = (id) => projects.find((p) => p.id === id)

export const getCategory = (key) => CATEGORIES.find((c) => c.key === key)

// 內頁的上一件／下一件，在同分類內循環
export function getSiblings(id) {
  const current = getProject(id)
  if (!current) return { prev: null, next: null }

  const group = projects.filter((p) => p.category === current.category)
  const i = group.findIndex((p) => p.id === id)

  return {
    prev: group.length > 1 ? group[(i - 1 + group.length) % group.length] : null,
    next: group.length > 1 ? group[(i + 1) % group.length] : null,
  }
}
