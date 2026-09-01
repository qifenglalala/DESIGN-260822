import { motion } from 'framer-motion'
import { ArrowUpRight, Box, ChevronLeft, ChevronRight, Film, ImageIcon, Images, Layers3, Maximize2, Mountain, Play, Shapes, WandSparkles } from 'lucide-react'
import Aurora from './Aurora/Aurora'
import { startTransition, useEffect, useLayoutEffect, useRef, useState } from 'react'

const work = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif'
]

const internalRenders = Array.from({ length: 6 }, (_, index) => {
  const number = index + 1
  return `/internal-render/internal-${String(number).padStart(2, '0')}.jpg?v=20260825`
})
const kvRenders = Array.from({ length: 8 }, (_, index) => `/kv-render/kv-${String(index + 1).padStart(2, '0')}.jpg?v=20260825`)
const kvProjectNames = ['半自动咖啡机', '果汁机', '全自动咖啡机', '电动牙刷', '滴漏咖啡机', '全自动咖啡机', '制冰机合集', '咖啡机合集']
const detailRenders = Array.from({ length: 8 }, (_, index) => `/detail-render/detail-${String(index + 1).padStart(2, '0')}.jpg?v=20260825`)
const sceneRenders = Array.from({ length: 10 }, (_, index) => `/scene-render/scene-${String(index + 1).padStart(2, '0')}.jpg?v=20260825`)
const sceneProjectNames = ['制冰机', '半自动咖啡机', '猫砂盆', '冰沙机', '滴漏咖啡机', '制冰机合集', '全自动咖啡机', '吸尘器', '半自动咖啡机', '吸尘器合集']
const productPlaceholders = Array.from({ length: 8 }, (_, index) => `/product-placeholder.svg?slot=${index + 1}`)
const suiteMainRenders = Array.from({ length: 8 }, (_, index) => `/suite-main/suite-${String(index + 1).padStart(2, '0')}.jpg?v=20260825`)
const detailPageRenders = Array.from({ length: 5 }, (_, index) => `/suite-detail/detail-${String(index + 1).padStart(2, '0')}.jpg?v=20260821b`)
// Each detail section is a slide group. Add future images to the corresponding array.
const detailPageGroups = [
  [detailPageRenders[0]],
  [detailPageRenders[1], '/suite-detail/a-plus-2-2.jpg?v=20260821', '/suite-detail/a-plus-2-3.jpg?v=20260821'],
  [detailPageRenders[2], '/suite-detail/a-plus-3-2.jpg?v=20260821', '/suite-detail/a-plus-3-3.jpg?v=20260821'],
  [detailPageRenders[3], '/suite-detail/a-plus-4-2.jpg?v=20260821', '/suite-detail/a-plus-4-3.jpg?v=20260821'],
  [detailPageRenders[4], '/suite-detail/a-plus-5-2.jpg?v=20260821', '/suite-detail/a-plus-5-3.jpg?v=20260821', '/suite-detail/a-plus-5-4.jpg?v=20260821']
]
const domesticReport = '/domestic-commerce/report.jpg?v=20260825'
const studioBuildPlan = '/studio-build/studio-build-plan.pdf'
const colorBoxCases = [
  { label: 'EC30 Ultra / MOVA 欧版彩盒', file: '/color-box/ec30-ultra-color-box.pdf' },
  { label: 'PC20 Pro 便携式咖啡机彩盒', file: '/color-box/pc20-pro-color-box.pdf' }
]
const masterCartonCases = [
  { label: 'EC30 Ultra / MOVA 欧版物流箱', file: '/master-carton/ec30-ultra-master-carton.pdf' },
  { label: 'SCM1705-UL 银色外箱', file: '/master-carton/scm1705-ul-master-carton.pdf' }
]
const ratingLabelCases = [
  { label: 'EC30 Ultra / MOVA 欧版机身铭牌', file: '/rating-label/ec30-ultra-mova-rating-label.pdf' },
  { label: 'XR2403 / MOVA 国内机身铭牌', file: '/rating-label/xr2403-mova-rating-label.pdf' }
]
const quickStartGuideCases = [
  { label: 'ECBC-EC30 / MOVA 中文版双面印刷卡片', file: '/quick-start-guide/ecbc-ec30-mova-quick-start-guide.pdf' }
]
const userManualCases = [
  { label: 'SN20 Pro / XR2505 六国欧版说明书', file: '/user-manual/sn20-pro-eu-user-manual.pdf', pages: 44 },
  { label: 'F20 / XR2601 美版三国语言说明书', file: '/user-manual/f20-us-user-manual.pdf', pages: 22 }
]
const brandGuideCases = [
  { label: '听树品牌手册更新 + 产品设计图', file: '/brand-guide/tingshu-brand-guide.pdf' }
]
const domesticDetailRenders = Array.from({ length: 11 }, (_, index) => `/domestic-commerce/detail-${String(index + 1).padStart(2, '0')}.jpg?v=20260825`)
const retouchRenders = Array.from(
  { length: 6 },
  (_, index) => `/retouch-cases/retouch-${String(index + 1).padStart(2, '0')}.jpg?v=20260821`,
)
const layoutImages = Array.from({ length: 16 }, (_, index) => `/layout/${index + 2}.jpg`)
const coffeeSellingPoints = ['直列萃取', '黄金萃取技术', '双锅炉同时萃取和打奶泡', '深度清洁', '智能调控水量', '水路清洁']

const navItems = [
  ['about-intro', '01 自我介绍'],
  ['visual-design', '02 图片设计'],
  ['experience', '03 包装设计'],
  ['contact', '04 视频合集']
] as const

const packagingProjects = [
  { title: '彩盒设计', english: 'COLOR BOX', description: '面向零售终端的产品彩盒，统一品牌视觉、产品卖点、参数信息与开箱体验。', tags: ['正背面', '侧面信息', '刀模展开'], type: 'color-box' },
  { title: '外箱设计', english: 'MASTER CARTON', description: '兼顾仓储运输与品牌识别，规范唛头、条码、箱规、警示标识及印刷工艺。', tags: ['运输唛头', '箱规信息', '条码标识'], type: 'carton' },
  { title: '说明书', english: 'USER MANUAL', description: '通过清晰的信息层级与图文步骤，降低阅读成本，覆盖多语言与合规信息。', tags: ['信息架构', '图文步骤', '多语言'], type: 'manual' },
  { title: '铭牌设计', english: 'RATING LABEL', description: '在有限版面内准确呈现型号、电气参数、认证标识、序列号及制造信息。', tags: ['技术参数', '认证图标', '合规排版'], type: 'label' },
  { title: '快速指引卡', english: 'QUICK START GUIDE', description: '提炼首次使用的关键步骤，以卡片化图示帮助用户快速完成安装与操作。', tags: ['安装步骤', '图标系统', '快速上手'], type: 'guide' },
  { title: '品牌VI', english: 'BRAND GUIDE', description: '通过品牌视觉规范与产品设计图，建立统一、清晰且可延展的品牌表达体系。', tags: ['品牌手册', '视觉规范', '产品设计'], type: 'brand' }
]

const videoCategories = [
  { title: '半自动咖啡机推广视频', english: 'SOCIAL PROMOTION', description: '用于品牌传播、产品发布与营销活动的主视觉影片。', items: [
    { title: '半自动咖啡机推广', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117138471786699&bvid=BV1QG816dECn&cid=41158378553&p=1', cover: '/video-cover/s20-pro-promo-cover-0822.png' },
    { title: '多场景咖啡机应用', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117189306752930&bvid=BV19Kth62Eje&cid=41459122555&p=1', cover: '/video-cover/social-multiscene-coffee.jpg', portrait: true },
    { title: '拍粉器推广视频', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117189323529673&bvid=BV1oft86HEr5&cid=41459256512&p=1', cover: '/video-cover/social-tamper-promo.jpg' },
    { title: 'AI咖啡滴落', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117189340370944&bvid=BV1Eot869Ega&cid=41459320246&p=1', cover: '/video-cover/social-ai-coffee-drip.jpg' }
  ] },
  { title: '操作视频', english: 'HOW TO', description: '通过清晰的镜头语言演示安装、使用、清洁与维护流程。', items: [
    { title: 'S20 Pro开箱指引&首次使用', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117138387964223&bvid=BV1un816HEHp&cid=41155234166&p=1', cover: '/video-cover/s20-unboxing-first-use.png' },
    { title: 'S20 Pro如何找到合适的磨豆粗细档位与粉量(首次使用或更换咖啡豆)', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117138387965492&bvid=BV1un816HEMJ&cid=41155103072&p=1', cover: '/video-cover/s20-grind-size-and-dose.png' },
    { title: 'S20 Pro如何制作意式咖啡(双杯)', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117138387966810&bvid=BV1Mn816HEX3&cid=41155430065&p=1', cover: '/video-cover/s20-double-espresso.png' },
    { title: 'S20 Pro手动定温打奶', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117138387965483&bvid=BV1un816HEMn&cid=41155887440&p=1', cover: '/video-cover/s20-manual-temperature-milk.png' }
  ] },
  { title: '饮品视频', english: 'DRINK VIDEO', description: '以饮品制作过程呈现产品的使用场景与氛围。', items: [
    { title: 'S20 Pro 柠檬气泡咖啡', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117138455009223&bvid=BV1Q5816sEam&cid=41158313935&p=1', cover: '/video-cover/s20-lemon-fizz-coffee.png' },
    { title: '樱花奇异果', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117139092740245&bvid=BV1958m6PE44&cid=41162506784&p=1', cover: '/video-cover/drink-sakura-kiwi.png' },
    { title: '西柚果汁', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117139092610983&bvid=BV1V58m6PEsZ&cid=41162444772&p=1', cover: '/video-cover/drink-grapefruit-juice.png' },
    { title: '胡萝卜果汁', url: 'https://player.bilibili.com/player.html?isOutside=true&aid=117139092544435&bvid=BV1958m6AE5n&cid=41162444147&p=1', cover: '/video-cover/drink-carrot-juice.png' }
  ] }
]
const bilibiliVideoSrc = 'https://player.bilibili.com/player.html?isOutside=true&aid=117138471786699&bvid=BV1QG816dECn&cid=41158378553&p=1'
const bilibiliVideoCover = '/video-cover/s20-pro-promo-cover-0822.png'

const warmedImages = new Set<string>()
const preparedImages = new Map<string, Promise<void>>()

function imageVariant(src: string, directory: '/mobile' | '/thumb') {
  const [path, query] = src.split('?')
  if (!path.endsWith('.jpg')) return src
  return `${directory}${path}${query ? `?${query}` : ''}`
}

function mobileImage(src: string) {
  return imageVariant(src, '/mobile')
}

function thumbnailImage(src: string) {
  return imageVariant(src, '/thumb')
}

function imageForCurrentDevice(src: string) {
  return typeof window !== 'undefined' && window.matchMedia('(max-width: 640px)').matches
    ? mobileImage(src)
    : src
}

function shouldWarmAdjacentImages() {
  return typeof window === 'undefined' || !window.matchMedia('(max-width: 640px)').matches
}

function prepareImage(src: string, priority: 'high' | 'low' = 'low') {
  if (!src) return Promise.resolve()
  const cached = preparedImages.get(src)
  if (cached) return cached

  const image = new Image()
  image.decoding = 'async'
  image.fetchPriority = priority
  const prepared = new Promise<void>(resolve => {
    image.onload = () => {
      const decoded = typeof image.decode === 'function' ? image.decode() : Promise.resolve()
      void decoded.catch(() => undefined).finally(resolve)
    }
    image.onerror = () => {
      preparedImages.delete(src)
      warmedImages.delete(src)
      resolve()
    }
    image.src = src
  })
  preparedImages.set(src, prepared)
  return prepared
}

function warmImages(images: string[], priority: 'high' | 'low' = 'low') {
  images.map(imageForCurrentDevice).forEach(src => {
    if (warmedImages.has(src)) return
    warmedImages.add(src)
    void prepareImage(src, priority)
  })
}

let fullscreenPending = false

function prepareFullscreenTarget(target: Element | null) {
  const image = target instanceof HTMLImageElement ? target : target?.querySelector('img')
  if (!(image instanceof HTMLImageElement)) return
  image.loading = 'eager'
  image.fetchPriority = 'high'
  if (image.complete) void image.decode?.().catch(() => undefined)
}

function toggleFullscreen(target: Element | null) {
  if (!target || fullscreenPending) return
  fullscreenPending = true
  prepareFullscreenTarget(target)
  const operation = document.fullscreenElement
    ? document.exitFullscreen()
    : target.requestFullscreen({ navigationUI: 'hide' })
  void Promise.resolve(operation).catch(() => undefined).finally(() => { fullscreenPending = false })
}

const designProjects = [
  { title: '3D内部结构渲染', category: '三维设计 / 结构表现', image: internalRenders[0], gallery: internalRenders, sellingPoints: coffeeSellingPoints, icon: Box, tags: ['C4D OC', 'Photoshop', 'ChatGPT'], summary: '通过三维建模与结构拆解，清晰呈现产品内部构造、部件关系与材质细节。', responsibilities: ['产品内部结构建模', '材质灯光与细节表现', '多视角画面渲染输出'], outcomes: [['结构清晰', '直观呈现内部构造'], ['质感真实', '还原材料与工艺细节'], ['高效沟通', '提升产品展示效率']] },
  { title: 'KV', category: '品牌视觉 / KV设计', image: kvRenders[0], gallery: kvRenders, sellingPoints: ['核心视觉', '产品表现', '场景氛围', '品牌调性', '版式构图', '传播延展'], icon: ImageIcon, tags: ['C4D OC', 'Photoshop'], summary: '围绕产品核心卖点建立主视觉，以场景、光影与版式塑造具有传播力的品牌画面。', responsibilities: ['KV视觉概念构思', '产品场景与光影表现', '多渠道视觉延展输出'], outcomes: [['视觉聚焦', '强化产品核心卖点'], ['氛围统一', '建立品牌视觉调性'], ['灵活延展', '适配多种传播渠道']] },
  { title: '渲染场景图', category: '三维设计 / 场景表现', image: sceneRenders[0], gallery: sceneRenders, sellingPoints: ['场景构思', '空间搭建', '产品融合', '灯光氛围', '材质表现', '画面输出'], icon: Mountain, tags: ['C4D OC', 'Photoshop', 'ChatGPT'], summary: '通过三维场景搭建、灯光氛围与材质表现，让产品自然融入空间并强化视觉感染力。', responsibilities: ['产品场景概念构思', '空间建模与灯光设计', '多场景画面渲染输出'], outcomes: [['场景完整', '建立沉浸式产品空间'], ['氛围鲜明', '强化品牌视觉情绪'], ['应用灵活', '适配多渠道传播需求']] },
  { title: '局部/材质', category: '三维设计 / 材质表现', image: detailRenders[0], gallery: detailRenders, sellingPoints: ['涂层', '稳定水流', '持久耐用', '配件齐全', '不锈钢奶管', '专业平刀', '丰富油脂', '一键移除粉饼'], icon: Layers3, tags: ['C4D OC', 'Photoshop'], summary: '通过局部特写、材质纹理与光影细节，突出产品结构、工艺和真实质感。', responsibilities: ['产品局部细节建模', '材质纹理与光影塑造', '特写画面渲染输出'], outcomes: [['细节清晰', '突出产品结构特点'], ['材质真实', '强化表面工艺质感'], ['视觉聚焦', '提升产品展示效果']] }
]

const detailProjects = [
  { title: '跨境电商', icon: Images, gallery: suiteMainRenders, tags: ['Photoshop', '套图设计', '视觉呈现'], summary: '集中展示系列套图案例，通过统一的视觉语言呈现产品特点与品牌调性。', sellingPoints: ['主视觉', '系列构图', '卖点表达', '材质细节', '场景氛围', '平台适配'] },
  { title: '国内电商', icon: Shapes, gallery: productPlaceholders, tags: ['品牌设计', 'VI系统', '视觉规范'], summary: '展示品牌 VI 系统设计，以统一的视觉规范建立清晰且具有辨识度的品牌形象。', sellingPoints: ['品牌定位', '标志设计', '标准色彩', '字体规范', '应用延展', '系统输出'] },
  { title: '精修案例', icon: WandSparkles, gallery: retouchRenders, tags: ['Photoshop', '产品精修', '质感塑造'], summary: '展示产品精修案例，通过光影、材质与细节处理强化产品质感。', sellingPoints: ['轮廓修饰', '光影重塑', '材质表现', '色彩校正', '细节优化', '品质提升'] },
  { title: '拍摄间搭建', icon: Film, gallery: productPlaceholders, tags: ['摄影棚', '灯光搭建', '空间规划'], summary: '展示拍摄间从空间规划、设备配置、灯光搭建到实际拍摄落地的完整过程。', sellingPoints: ['空间规划', '场景布置', '灯光方案', '设备配置', '现场搭建', '拍摄测试'] }
]

const allImageProjects = [...designProjects, ...detailProjects]

function Fade({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .7, delay }}>{children}</motion.div>
}

function ProjectReveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  return <motion.div className={className} initial={{ opacity: 0, y: 42, scale: .985 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .82, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

function LayoutImageGallery({ images, startNumber }: { images: string[]; startNumber: number }) {
  return <div className="layout-image-gallery">
    {images.map((image, index) => <motion.figure id={image === '/layout/3.jpg' ? 'about-intro' : image === '/layout/4.jpg' ? 'visual-design' : undefined} className="layout-image-item" key={image} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .1 }} transition={{ duration: .65, ease: [0.22, 1, 0.36, 1] }}>
      <img src={image} srcSet={`/mobile${image} 1200w, ${image} 5000w`} sizes="(max-width: 640px) 100vw, 1700px" width="5000" height="3126" alt={`作品集排版 ${startNumber + index}`} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />
    </motion.figure>)}
  </div>
}

function ContactButton() {
  return <a className="contact" href="mailto:hello@jack.studio">Contact me <ArrowUpRight size={19} /></a>
}

function ImageProjectCard({ project, index, onOpen }: { project: typeof allImageProjects[number]; index: number; onOpen: (images: string[], imageIndex: number) => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const gallery = project.gallery
  const activeImage = gallery[Math.min(galleryIndex, gallery.length - 1)]
  const isDirectory = index === 1 || index === 2

  return <ProjectReveal delay={Math.min(index * .04, .2)} className="product-feature independent-project-card">
    <div className="product-main">
      <div className="product-visual">
        <div className="product-image-stage">
          <img src={mobileImage(activeImage)} srcSet={`${mobileImage(activeImage)} 1600w, ${activeImage} 5000w`} sizes="(max-width: 1000px) 100vw, 58vw" alt={`${project.title} ${galleryIndex + 1}`} loading={index === 0 ? 'eager' : 'lazy'} fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async"/>
          <div className="product-visual-shade"/>
          {gallery.length > 1 && <><button className="product-image-nav previous" aria-label="上一张图片" onClick={() => setGalleryIndex((galleryIndex - 1 + gallery.length) % gallery.length)}><ChevronLeft/></button><button className="product-image-nav next" aria-label="下一张图片" onClick={() => setGalleryIndex((galleryIndex + 1) % gallery.length)}><ChevronRight/></button></>}
          <button className="product-fullscreen" aria-label="放大查看" onPointerEnter={event=>prepareFullscreenTarget(event.currentTarget.closest('.product-image-stage')?.querySelector('img') ?? null)} onFocus={event=>prepareFullscreenTarget(event.currentTarget.closest('.product-image-stage')?.querySelector('img') ?? null)} onClick={()=>onOpen(gallery, galleryIndex)}><Maximize2 size={19}/></button>
        </div>
        {gallery.length > 1 && <div className="product-thumbnails">{gallery.map((image, imageIndex) => <button className={imageIndex === galleryIndex ? 'active' : ''} key={image} onPointerEnter={()=>warmImages([image])} onFocus={()=>warmImages([image])} onClick={() => setGalleryIndex(imageIndex)} aria-label={`查看第 ${imageIndex + 1} 张图片`}><img src={thumbnailImage(image)} alt="" loading="lazy" decoding="async"/><span>{imageIndex + 1}</span></button>)}</div>}
      </div>
      <div className="product-info"><div><small>Featured Product</small><h3>{project.title}</h3><div className="product-tags">{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div><p>{project.summary}</p></div><div className="product-detail-grid selling-points"><div><h4>{isDirectory ? '作品目录' : '卖点展示'}</h4><ul>{project.sellingPoints.map((item, itemIndex)=><li key={`${itemIndex}-${item}`}><span>{itemIndex + 1}</span>{item}</li>)}</ul></div></div></div>
    </div>
  </ProjectReveal>
}

function SuiteCommerceCard({ onOpen }: { onOpen: (images: string[], imageIndex: number) => void }) {
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [pageIndexes, setPageIndexes] = useState(() => detailPageGroups.map(() => 0))
  const image = suiteMainRenders[galleryIndex]
  const changePage = (pageIndex: number, direction: number) => setPageIndexes(current => current.map((slideIndex, index) => index === pageIndex ? (slideIndex + direction + detailPageGroups[index].length) % detailPageGroups[index].length : slideIndex))
  return <ProjectReveal delay={.16} className="product-feature independent-project-card">
    <div className="suite-case-layout">
      <div className="suite-main-gallery"><div className="suite-main-stage"><img src={mobileImage(image)} srcSet={`${mobileImage(image)} 1600w, ${image} 5000w`} sizes="(max-width: 1000px) 100vw, 48vw" alt={`跨境电商套图主图 ${galleryIndex + 1}`} loading="lazy" decoding="async"/><button className="product-image-nav previous" aria-label="上一张主图" onClick={()=>setGalleryIndex((galleryIndex-1+suiteMainRenders.length)%suiteMainRenders.length)}><ChevronLeft/></button><button className="product-image-nav next" aria-label="下一张主图" onClick={()=>setGalleryIndex((galleryIndex+1)%suiteMainRenders.length)}><ChevronRight/></button><button className="product-fullscreen" aria-label="放大查看主图" onClick={()=>onOpen(suiteMainRenders, galleryIndex)}><Maximize2 size={19}/></button></div><div className="suite-thumbnails">{suiteMainRenders.map((item,index)=><button className={index===galleryIndex?'active':''} key={item} onClick={()=>setGalleryIndex(index)} aria-label={`查看第 ${index+1} 张套图`}><img src={thumbnailImage(item)} alt="" loading="lazy" decoding="async"/><span>{index+1}</span></button>)}</div></div>
      <div className="suite-detail-panel"><div className="suite-detail-heading"><div><small>DETAIL PAGE</small><b>详情页展示</b></div><span>向下滚动 ↓</span></div><div className="suite-detail-scroll" tabIndex={0} aria-label="跨境电商详情页，可向下滚动查看">{detailPageGroups.map((slides,index)=>index===0 ? <img src={slides[pageIndexes[index]]} alt="跨境电商详情页第 1 段" key="detail-page-1" loading="lazy" decoding="async"/> : <div className="detail-page-slide" key={`detail-page-${index+1}`}><img src={slides[pageIndexes[index]]} alt={`跨境电商详情页第 ${index+1} 段`} loading="lazy" decoding="async"/><button className="detail-page-nav previous" aria-label={`详情页第 ${index+1} 段上一张`} onClick={()=>changePage(index,-1)}><ChevronLeft/></button><button className="detail-page-nav next" aria-label={`详情页第 ${index+1} 段下一张`} onClick={()=>changePage(index,1)}><ChevronRight/></button></div>)}</div></div>
    </div>
  </ProjectReveal>
}

function DomesticCommerceCard({ onOpen }: { onOpen: (images: string[], imageIndex: number) => void }) {
  return <ProjectReveal delay={.2} className="product-feature independent-project-card">
    <div className="suite-case-layout domestic-case-layout"><div className="domestic-report-panel"><img src={mobileImage(domesticReport)} srcSet={`${mobileImage(domesticReport)} 1600w, ${domesticReport} 5000w`} sizes="(max-width: 1000px) 100vw, 48vw" alt="国内电商销售战报" loading="lazy" decoding="async" role="button" tabIndex={0} onClick={()=>onOpen([domesticReport],0)} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();onOpen([domesticReport],0)}}}/><button className="product-fullscreen" aria-label="放大查看销售战报" onClick={()=>onOpen([domesticReport],0)}><Maximize2 size={19}/></button></div><div className="suite-detail-panel"><div className="suite-detail-heading"><div><small>DETAIL PAGE</small><b>国内电商详情页</b></div><span>向下滚动 ↓</span></div><div className="suite-detail-scroll" tabIndex={0} aria-label="国内电商详情页，可向下滚动查看">{domesticDetailRenders.map((image,index)=><img src={mobileImage(image)} srcSet={`${mobileImage(image)} 1600w, ${image} 5000w`} sizes="(max-width: 1000px) 100vw, 48vw" alt={`国内电商详情页第 ${index+1} 张`} key={image} loading="lazy" decoding="async"/>)}</div></div></div>
  </ProjectReveal>
}

function StudioBuildCard({ onOpenPdf }: { onOpenPdf: (file: string) => void }) {
  return <ProjectReveal delay={.28} className="product-feature independent-project-card">
    <div className="product-main studio-build-layout"><div className="studio-plan-viewer"><div className="studio-plan-toolbar" role="link" tabIndex={0} aria-label="在新标签页打开拍摄间装修方案" onClick={()=>onOpenPdf(studioBuildPlan)} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();onOpenPdf(studioBuildPlan)}}}><span>装修方案 4.0</span><small>向下滚动浏览完整方案</small></div><iframe src={`${studioBuildPlan}#view=FitH`} title="拍摄间装修方案" loading="lazy"/></div><div className="product-info"><div><small>STUDIO BUILD PLAN</small><h3>拍摄间搭建</h3><div className="product-tags"><span>摄影棚</span><span>灯光搭建</span><span>空间规划</span></div><p>完整装修方案已嵌入，可在左侧直接滚动浏览各页内容。</p></div><div className="product-detail-grid selling-points"><div><h4>方案目录</h4><ul>{['空间规划','场景布置','灯光方案','设备配置','现场搭建','拍摄测试'].map((item,index)=><li key={item}><span>{index+1}</span>{item}</li>)}</ul></div></div></div></div>
  </ProjectReveal>
}

function ScrollProjectNavigator({ start, end, activeIndex, isCurrent }: { start: number; end: number; activeIndex: number; isCurrent: boolean }) {
  const projects = allImageProjects.slice(start, end + 1)
  const visibleIndex = Math.min(Math.max(activeIndex, start), end)
  const progress = ((visibleIndex - start + 1) / projects.length) * 100
  return <div className={`scroll-project-navigator ${isCurrent ? 'is-current' : ''}`} aria-label={`作品 ${String(start + 1).padStart(2, '0')} 至 ${String(end + 1).padStart(2, '0')} 浏览进度`}>
    <div className="scroll-project-tabs">{projects.map((project, offset) => { const Icon = project.icon; const index = start + offset; return <div className={`scroll-project-tab ${index === visibleIndex ? 'active' : ''}`} key={project.title}><span><Icon size={19}/></span><i><small>{String(index + 1).padStart(2, '0')}</small><b>{project.title}</b></i></div> })}</div>
    <div className="scroll-project-controls"><div><b>{String(visibleIndex + 1).padStart(2, '0')} <em>/ {String(end + 1).padStart(2, '0')}</em></b><i><u style={{ width: `${progress}%` }}/></i></div></div>
  </div>
}

export default function App() {
  const [activeSection, setActiveSection] = useState('')
  const [projectIndex, setProjectIndex] = useState(0)
  const [activeScrollProjectIndex, setActiveScrollProjectIndex] = useState(0)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [detailProjectIndex, setDetailProjectIndex] = useState(0)
  const [detailGalleryIndex, setDetailGalleryIndex] = useState(0)
  const [detailPageIndexes, setDetailPageIndexes] = useState(() => detailPageGroups.map(() => 0))
  const [videoCategoryIndex, setVideoCategoryIndex] = useState(0)
  const [videoItemIndex, setVideoItemIndex] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [expandedImage, setExpandedImage] = useState<{ images: string[]; index: number } | null>(null)
  const [manualPageIndexes, setManualPageIndexes] = useState([0, 0])
  const [openPackagingIndexes, setOpenPackagingIndexes] = useState<number[]>([])
  const navigationLock = useRef(false)
  const navigationTimer = useRef<number | undefined>(undefined)
  const packagingScrollPosition = useRef<number | null>(null)

  useLayoutEffect(() => {
    if (packagingScrollPosition.current === null) return
    const position = packagingScrollPosition.current
    packagingScrollPosition.current = null
    const root = document.documentElement
    const previousScrollBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, position)
    const frameId = window.requestAnimationFrame(() => {
      window.scrollTo(0, position)
      root.style.scrollBehavior = previousScrollBehavior
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [openPackagingIndexes])

  useEffect(() => {
    const sectionIds = ['about-intro', 'visual-design', 'experience', 'contact']
    let frameId = 0
    const updateActiveSection = () => {
      if (navigationLock.current) return
      const marker = window.scrollY + Math.min(260, window.innerHeight * .34)
      let current = ''
      for (const id of sectionIds) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top + window.scrollY <= marker) current = id
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 40) current = 'contact'
      setActiveSection(previous => previous === current ? previous : current)
    }
    const scheduleActiveSectionUpdate = () => {
      if (frameId) return
      frameId = window.requestAnimationFrame(() => {
        frameId = 0
        updateActiveSection()
      })
    }
    updateActiveSection()
    window.addEventListener('scroll', scheduleActiveSectionUpdate, { passive: true })
    window.addEventListener('resize', scheduleActiveSectionUpdate)
    return () => {
      window.removeEventListener('scroll', scheduleActiveSectionUpdate)
      window.removeEventListener('resize', scheduleActiveSectionUpdate)
      window.cancelAnimationFrame(frameId)
      window.clearTimeout(navigationTimer.current)
    }
  }, [])

  useEffect(() => {
    const groups = Array.from(document.querySelectorAll<HTMLElement>('.scroll-project-group'))
    if (!groups.length) return
    const observer = new IntersectionObserver(entries => {
      const current = entries.filter(entry => entry.isIntersecting).sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top))[0]
      if (!current) return
      const index = Number((current.target as HTMLElement).dataset.projectIndex)
      if (Number.isInteger(index)) setActiveScrollProjectIndex(previous => previous === index ? previous : index)
    }, { rootMargin: '-25% 0px -55% 0px', threshold: .01 })
    groups.forEach(group => observer.observe(group))
    return () => observer.disconnect()
  }, [])

  const openImageLightbox = (images: string[], index: number) => {
    const nextIndex = (index + 1) % images.length
    const previousIndex = (index - 1 + images.length) % images.length
    warmImages([images[index]], 'high')
    if (shouldWarmAdjacentImages()) warmImages([images[nextIndex], images[previousIndex]])
    setExpandedImage({ images, index })
  }
  const openPdf = (file: string) => {
    window.open(file, '_blank', 'noopener,noreferrer')
  }
  const changeExpandedImage = (direction: number) => {
    setExpandedImage(current => current ? { ...current, index: (current.index + direction + current.images.length) % current.images.length } : null)
  }
  useEffect(() => {
    const handleLightboxKeys = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setExpandedImage(null)
      if (expandedImage?.images.length && event.key === 'ArrowLeft') changeExpandedImage(-1)
      if (expandedImage?.images.length && event.key === 'ArrowRight') changeExpandedImage(1)
    }
    window.addEventListener('keydown', handleLightboxKeys)
    return () => window.removeEventListener('keydown', handleLightboxKeys)
  }, [expandedImage])
  const activeProject = designProjects[projectIndex] ?? designProjects[0]
  const activeGallery = activeProject.gallery ?? [activeProject.image]
  const activeImage = activeGallery[Math.min(galleryIndex, activeGallery.length - 1)]
  const activeSellingPoints = projectIndex === 1 ? kvProjectNames : projectIndex === 2 ? sceneProjectNames : activeProject.sellingPoints
  const activeDetailProject = detailProjects[detailProjectIndex]
  const activeDetailGallery = activeDetailProject.gallery
  const activeDetailImage = activeDetailGallery[Math.min(detailGalleryIndex, activeDetailGallery.length - 1)]
  const activeVideo = videoCategories[videoCategoryIndex].items[Math.min(videoItemIndex, videoCategories[videoCategoryIndex].items.length - 1)]
  const activeVideoAspectRatio = activeVideo.cover.startsWith('/video-cover/drink-') && !activeVideo.cover.includes('lemon-fizz') ? '480 / 851' : '16 / 9'

  // Keep the first screen responsive on limited server bandwidth: load the active
  // image first, then prepare only its immediate neighbours for carousel navigation.
  useEffect(() => {
    const currentIndex = Math.min(galleryIndex, activeGallery.length - 1)
    const adjacentImages = activeGallery.length > 1
      ? [
          activeGallery[(currentIndex + 1) % activeGallery.length],
          activeGallery[(currentIndex - 1 + activeGallery.length) % activeGallery.length],
        ]
      : []
    warmImages([activeImage], 'high')
    if (shouldWarmAdjacentImages()) warmImages(adjacentImages)
  }, [activeGallery, activeImage, galleryIndex])

  const selectProject = (index: number) => {
    warmImages([designProjects[index].gallery[0]], 'high')
    startTransition(() => {
      setProjectIndex(index)
      setGalleryIndex(0)
    })
  }

  const selectDetailProject = (index: number) => {
    warmImages([detailProjects[index].gallery[0]], 'high')
    startTransition(() => {
      setDetailProjectIndex(index)
      setDetailGalleryIndex(0)
    })
  }

  const changeDetailPageSlide = (pageIndex: number, direction: number) => {
    setDetailPageIndexes(current => current.map((slideIndex, index) => {
      if (index !== pageIndex) return slideIndex
      const slideCount = detailPageGroups[pageIndex].length
      return (slideIndex + direction + slideCount) % slideCount
    }))
  }

  const togglePackaging = (index: number) => {
    packagingScrollPosition.current = window.scrollY
    setOpenPackagingIndexes(current => current.includes(index) ? current.filter(item => item !== index) : [...current, index])
  }

  const changeManualPage = (manualIndex: number, direction: number) => {
    setManualPageIndexes(current => current.map((page, index) => index === manualIndex ? (page + direction + userManualCases[index].pages) % userManualCases[index].pages : page))
  }

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault()
    const target = document.getElementById(id)
    if (!target) return
    navigationLock.current = true
    window.clearTimeout(navigationTimer.current)
    setActiveSection(id)
    window.history.replaceState(null, '', `#${id}`)
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    navigationTimer.current = window.setTimeout(() => {
      navigationLock.current = false
      window.dispatchEvent(new Event('scroll'))
    }, 1050)
  }

  const handlePointerGlow = (event: React.MouseEvent<HTMLDivElement>) => {
    const surface = (event.target as HTMLElement).closest('.resume-card, .glow-surface') as HTMLElement | null
    if (!surface) return
    const rect = surface.getBoundingClientRect()
    surface.style.setProperty('--glow-x', `${event.clientX - rect.left}px`)
    surface.style.setProperty('--glow-y', `${event.clientY - rect.top}px`)
  }

  return <main>
    <div className="site-aurora" aria-hidden="true"><Aurora colorStops={["#F97316", "#B497CF", "#5227FF"]} blend={0.5} amplitude={1.0} speed={0.5} /></div>
    <motion.nav initial={{ opacity: 0, y: -18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
      <a className="nav-logo" href="#home">Hi, I'm Feng</a>
      <div className="nav-links">{navItems.map(([id, label]) => <a className={activeSection === id ? 'is-active' : ''} href={`#${id}`} onClick={event => handleNavClick(event, id)} key={id}>{activeSection === id && <motion.span className="nav-active" layoutId="nav-active" transition={{ type: 'spring', stiffness: 260, damping: 28, mass: .72 }} />}<span className="nav-label">{label}</span></a>)}</div>
    </motion.nav>
    <section className="hero" id="home">
      <div className="hero-inner portfolio-cover-inner">
        <motion.div className="portfolio-cover-stage" initial={{ opacity: 0, y: 22, scale: .985 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: .7, ease: [0.22, 1, 0.36, 1] }}>
          <img className="portfolio-cover" src="/portfolio-cover.jpg" srcSet="/mobile/portfolio-cover.jpg?v=20260901-mobile-full 3600w, /portfolio-cover.jpg 5000w" sizes="(max-width: 640px) 100vw, 1700px" width="5000" height="3126" alt="杨起锋作品集封面" loading="eager" fetchPriority="high" decoding="async"/>
        </motion.div>
      </div>
    </section>

    <div className="aurora-zone">
      <section className="about shell layout-image-section" id="about">
        <LayoutImageGallery images={layoutImages.slice(0, 8)} startNumber={2} />
        <div className="about-intro" onMouseMove={handlePointerGlow}>
          <Fade className="glow-surface name-glow"><span className="eyebrow">/ About me</span><h2>杨起锋<br/><em>Feng</em></h2></Fade>
          <Fade delay={.1} className="profile-lead glow-surface"><span>8+ YEARS OF DESIGN</span><p>专注品牌平面视觉全案，从电商、VI系统、宣传物料、包装物料到营销海报，用设计传递品牌温度，助力品牌流量与口碑双增长。</p></Fade>
        </div>

        <div className="resume-grid" onMouseMove={handlePointerGlow}>
          <Fade className="resume-card profile-card">
            <div className="card-title"><span>01</span><h3>个人优势/ADVANTAGE</h3></div>
            <div className="profile-facts advantage-summary">
              <p>6年小家电跨境电商全链路视觉经验。</p>
              <ol className="advantage-list">
                <li>擅长亚马逊 / TK / 独立站视觉体系搭建；</li>
                <li>擅长产品拍摄、C4D-OC 三维渲染、包装量产落地；</li>
                <li>具备团队管理、项目统筹、成本管控能力，通过视觉实现降本增效，完整交付产品 0-1 上市与海外众筹项目。</li>
              </ol>
            </div>
          </Fade>

          <Fade delay={.05} className="resume-card skills-card">
            <div className="card-title"><span>02</span><h3>软件工具/TOOLS</h3></div>
            <ul className="tools-list">
              <li><b>平面：</b>Photoshop、Illustrator、InDesign</li>
              <li><b>三维渲染：</b>C4D-OC 渲染、Rhino</li>
              <li><b>视频：</b>Premiere、剪映、微单</li>
              <li><b>AI工具：</b>ChatGPT、ComfyUI、Codex</li>
            </ul>
          </Fade>

          <Fade delay={.1} className="resume-card advantage-card">
            <div className="card-title"><span>03</span><h3>核心能力/COMPETENCIES</h3></div>
            <ul>
              <li><b>电商视觉：</b>Amazon 主图/A+、详情页、品牌KV、独立站</li>
              <li><b>产品内容：</b>产品摄影、场景搭建、精修、视频策划及剪辑</li>
              <li><b>包装量产：</b>包装资料设计、多语言说明书排版、打样跟进</li>
              <li><b>项目协同：</b>GTM 节点、排期管理、跨部门协同、设计规范</li>
            </ul>
          </Fade>

          <Fade delay={.15} className="resume-card experience-card">
            <div className="card-title"><span>04</span><h3>工作履历/WORK EXPERIENCE</h3></div>
            <div className="career"><p><b>追觅科技有限公司</b><time>2025.06 — 2026.08</time></p><p><b>广东新宝电器股份有限公司</b><time>2021.04 — 2025.06</time></p><p><b>广州市惠多广告有限公司</b><time>2018.03 — 2021.02</time></p><p><b>广州市衣鸽文化发展有限公司</b><time>2017.12 — 2018.02</time></p></div>
          </Fade>

          <Fade delay={.2} className="resume-card education-card">
            <div className="card-title"><span>05</span><h3>教育背景/EDUCATION</h3></div>
            <div className="education-item"><time>2015.09 — 2019.07</time><h4>天津大学 · 工业设计</h4><p>学士学位</p></div><div className="education-item"><time>2015.09 — 2018.06</time><h4>广东工贸职业技术学院 · 计算机应用技术</h4><p>专科学位 · 荣获“国家三好学生奖学金”一次</p></div>
          </Fade>

          <Fade delay={.25} className="resume-card contact-card">
            <div className="card-title"><span>06</span><h3>联系我/CONTACT</h3></div>
            <a href="tel:13192553802"><small>电话 / 微信</small>131 9255 3802</a><a href="mailto:1136939259@qq.com"><small>邮箱</small>1136939259@qq.com</a><p><small>现居地</small>佛山市顺德区勒流街道</p>
          </Fade>
        </div>
        <div className="orb orb-one"/><div className="orb orb-two"/>
      </section>
    </div>

    <section className="projects layout-image-projects" id="projects"><div className="products-shell">
      <LayoutImageGallery images={layoutImages.slice(8)} startNumber={10} />
      <Fade className="product-heading"><h2>Product</h2><span/><p>图片设计&nbsp;&nbsp;|&nbsp;&nbsp;杨起锋 FENG</p></Fade>
      <div className="independent-project-list">
        {allImageProjects.slice(0, 4).map((project, index)=><div className="scroll-project-group" data-project-index={index} key={project.title}><ScrollProjectNavigator start={0} end={3} activeIndex={index} isCurrent={activeScrollProjectIndex === index}/><ImageProjectCard project={project} index={index} onOpen={openImageLightbox}/></div>)}
        {allImageProjects.slice(4).map((project, offset)=>{const index = offset + 4; return <div className="scroll-project-group" data-project-index={index} key={project.title}><ScrollProjectNavigator start={4} end={7} activeIndex={index} isCurrent={activeScrollProjectIndex === index}/>{index === 4 ? <SuiteCommerceCard onOpen={openImageLightbox}/> : index === 5 ? <DomesticCommerceCard onOpen={openImageLightbox}/> : index === 7 ? <StudioBuildCard onOpenPdf={openPdf}/> : <ImageProjectCard project={project} index={index} onOpen={openImageLightbox}/>}</div>})}
      </div>
      <div className="legacy-image-design">
      <div className="product-tabs">{designProjects.map((project,index)=>{const Icon=project.icon;return <button className={index===projectIndex?'active':''} onPointerEnter={()=>warmImages([project.gallery[0]])} onFocus={()=>warmImages([project.gallery[0]])} onClick={()=>selectProject(index)} key={project.title}><span><Icon size={19}/></span><i><small>0{index+1}</small><b>{project.title}</b></i></button>})}</div>
      <Fade delay={.1} className="product-feature">
        <div className="product-controls"><button aria-label="上一个项目" onClick={()=>selectProject((projectIndex-1+designProjects.length)%designProjects.length)}><ChevronLeft/></button><div><b>{String(projectIndex+1).padStart(2,'0')} <span>/ {String(designProjects.length).padStart(2,'0')}</span></b><i><u style={{width:`${(projectIndex+1)/designProjects.length*100}%`}}/></i></div><button aria-label="下一个项目" onClick={()=>selectProject((projectIndex+1)%designProjects.length)}><ChevronRight/></button></div>
        <div className="product-main">
          <div className="product-visual">
            <div className="product-image-stage">
              <img key={activeImage} src={mobileImage(activeImage)} srcSet={`${mobileImage(activeImage)} 1600w, ${activeImage} 5000w`} sizes="(max-width: 1000px) 100vw, 58vw" alt={`${activeProject.title} ${galleryIndex + 1}`} loading="eager" fetchPriority="high" decoding="async"/>
              <div className="product-visual-shade"/>
              {activeGallery.length > 1 && <><button className="product-image-nav previous" aria-label="上一张图片" onClick={() => setGalleryIndex((galleryIndex - 1 + activeGallery.length) % activeGallery.length)}><ChevronLeft/></button><button className="product-image-nav next" aria-label="下一张图片" onClick={() => setGalleryIndex((galleryIndex + 1) % activeGallery.length)}><ChevronRight/></button></>}
              <button className="product-fullscreen" aria-label="放大查看" onPointerEnter={event=>prepareFullscreenTarget(event.currentTarget.closest('.product-image-stage')?.querySelector('img') ?? null)} onFocus={event=>prepareFullscreenTarget(event.currentTarget.closest('.product-image-stage')?.querySelector('img') ?? null)} onClick={()=>openImageLightbox(activeGallery, galleryIndex)}><Maximize2 size={19}/></button>
            </div>
            {activeGallery.length > 1 && <div className="product-thumbnails">{activeGallery.map((image, index) => <button className={index === galleryIndex ? 'active' : ''} key={image} onPointerEnter={()=>warmImages([image])} onClick={() => setGalleryIndex(index)} aria-label={`查看第 ${index + 1} 张内部渲染图`}><img src={thumbnailImage(image)} alt="" loading="lazy" decoding="async"/><span>{index + 1}</span></button>)}</div>}
          </div>
          <div className="product-info">
            <div><small>Featured Product</small><h3>{activeProject.title}</h3><div className="product-tags">{activeProject.tags.map(tag=><span key={tag}>{tag}</span>)}</div><p>{activeProject.summary}</p></div>
            <div className="product-detail-grid selling-points"><div><h4>{projectIndex === 1 || projectIndex === 2 ? '作品目录' : '卖点展示'}</h4><ul>{activeSellingPoints.map((item, index)=><li key={`${index}-${item}`}><span>{index + 1}</span>{item}</li>)}</ul></div></div>
          </div>
        </div>
      </Fade>
      <Fade delay={.12} className="commerce-showcase">
        <div className="product-tabs detail-tabs">{detailProjects.map((project,index)=>{const Icon=project.icon;return <button className={index===detailProjectIndex?'active':''} onPointerEnter={()=>warmImages([project.gallery[0]])} onFocus={()=>warmImages([project.gallery[0]])} onClick={()=>selectDetailProject(index)} key={project.title}><span><Icon size={19}/></span><i><small>{String(index+5).padStart(2,'0')}</small><b>{project.title}</b></i></button>})}</div>
        <div className="product-feature detail-feature">
          <div className="product-controls"><button aria-label="上一个详情项目" onClick={()=>selectDetailProject((detailProjectIndex-1+detailProjects.length)%detailProjects.length)}><ChevronLeft/></button><div><b>{String(detailProjectIndex+5).padStart(2,'0')} <span>/ 08</span></b><i><u style={{width:`${(detailProjectIndex+1)/detailProjects.length*100}%`}}/></i></div><button aria-label="下一个详情项目" onClick={()=>selectDetailProject((detailProjectIndex+1)%detailProjects.length)}><ChevronRight/></button></div>
          {detailProjectIndex === 0 ? <div className="suite-case-layout">
            <div className="suite-main-gallery">
              <div className="suite-main-stage">
                <img src={mobileImage(activeDetailImage)} srcSet={`${mobileImage(activeDetailImage)} 1600w, ${activeDetailImage} 5000w`} sizes="(max-width: 1000px) 100vw, 48vw" alt={`套图案例主图 ${detailGalleryIndex + 1}`} loading="eager" fetchPriority="high" decoding="async"/>
                <button className="product-image-nav previous" aria-label="上一张主图" onClick={()=>setDetailGalleryIndex((detailGalleryIndex-1+activeDetailGallery.length)%activeDetailGallery.length)}><ChevronLeft/></button>
                <button className="product-image-nav next" aria-label="下一张主图" onClick={()=>setDetailGalleryIndex((detailGalleryIndex+1)%activeDetailGallery.length)}><ChevronRight/></button>
                <button className="product-fullscreen" aria-label="放大查看主图" onPointerEnter={event=>prepareFullscreenTarget(event.currentTarget.closest('.suite-main-gallery')?.querySelector('.suite-main-stage>img') ?? null)} onFocus={event=>prepareFullscreenTarget(event.currentTarget.closest('.suite-main-gallery')?.querySelector('.suite-main-stage>img') ?? null)} onClick={()=>openImageLightbox(activeDetailGallery, detailGalleryIndex)}><Maximize2 size={19}/></button>
              </div>
              <div className="suite-thumbnails">{activeDetailGallery.map((image,index)=><button className={index===detailGalleryIndex?'active':''} key={image} onClick={()=>setDetailGalleryIndex(index)} aria-label={`查看第 ${index+1} 张套图`}><img src={thumbnailImage(image)} alt="" loading="lazy" decoding="async"/><span>{index+1}</span></button>)}</div>
            </div>
            <div className="suite-detail-panel">
              <div className="suite-detail-heading"><div><small>DETAIL PAGE</small><b>详情页展示</b></div><span>向下滚动 ↓</span></div>
              <div className="suite-detail-scroll" tabIndex={0} aria-label="套图案例详情页，可向下滚动查看">
                {detailPageGroups.map((slides,index)=>index===0
                  ? <img src={slides[detailPageIndexes[index]]} alt="套图案例详情页第 1 段" key="detail-page-1" loading="lazy" decoding="async"/>
                  : <div className="detail-page-slide" key={`detail-page-${index+1}`}>
                    <img src={slides[detailPageIndexes[index]]} alt={`套图案例详情页第 ${index+1} 段`} loading="lazy" decoding="async"/>
                    <button className="detail-page-nav previous" aria-label={`详情页第 ${index+1} 段上一张`} onClick={()=>changeDetailPageSlide(index,-1)}><ChevronLeft/></button>
                    <button className="detail-page-nav next" aria-label={`详情页第 ${index+1} 段下一张`} onClick={()=>changeDetailPageSlide(index,1)}><ChevronRight/></button>
                  </div>)}
              </div>
            </div>
          </div> : detailProjectIndex === 1 ? <div className="suite-case-layout domestic-case-layout">
            <div className="domestic-report-panel">
              <img src={domesticReport} alt="国内电商销售战报" loading="lazy" decoding="async" role="button" tabIndex={0} aria-label="点击放大查看销售战报" onMouseEnter={event=>prepareFullscreenTarget(event.currentTarget)} onFocus={event=>prepareFullscreenTarget(event.currentTarget)} onClick={()=>openImageLightbox([domesticReport], 0)} onKeyDown={(event)=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openImageLightbox([domesticReport], 0)}}}/>
              <button className="product-fullscreen" aria-label="放大查看销售战报" onPointerEnter={event=>prepareFullscreenTarget(event.currentTarget.closest('.domestic-report-panel')?.querySelector('img') ?? null)} onFocus={event=>prepareFullscreenTarget(event.currentTarget.closest('.domestic-report-panel')?.querySelector('img') ?? null)} onClick={()=>openImageLightbox([domesticReport], 0)}><Maximize2 size={19}/></button>
            </div>
            <div className="suite-detail-panel">
              <div className="suite-detail-heading"><div><small>DETAIL PAGE</small><b>国内电商详情页</b></div><span>向下滚动 ↓</span></div>
              <div className="suite-detail-scroll" tabIndex={0} aria-label="国内电商详情页，可向下滚动查看">
                {domesticDetailRenders.map((image,index)=><img src={mobileImage(image)} srcSet={`${mobileImage(image)} 1600w, ${image} 5000w`} sizes="(max-width: 1000px) 100vw, 48vw" alt={`国内电商详情页第 ${index+1} 张`} key={image} loading={index === 0 ? 'eager' : 'lazy'} decoding="async"/>)}
              </div>
            </div>
          </div> : detailProjectIndex === 3 ? <div className="product-main studio-build-layout">
            <div className="studio-plan-viewer">
              <div className="studio-plan-toolbar" role="link" tabIndex={0} aria-label="在新标签页打开拍摄间装修方案" onClick={()=>openPdf(studioBuildPlan)} onKeyDown={event=>{if(event.key==='Enter'||event.key===' '){event.preventDefault();openPdf(studioBuildPlan)}}}><span>装修方案 4.0</span><small>向下滚动浏览完整方案</small></div>
              <iframe src={`${studioBuildPlan}#view=FitH`} title="拍摄间装修方案" loading="lazy" />
            </div>
            <div className="product-info"><div><small>STUDIO BUILD PLAN</small><h3>{activeDetailProject.title}</h3><div className="product-tags">{activeDetailProject.tags.map(tag=><span key={tag}>{tag}</span>)}</div><p>完整装修方案已嵌入，可在左侧直接滚动浏览各页内容。</p></div><div className="product-detail-grid selling-points"><div><h4>方案目录</h4><ul>{activeDetailProject.sellingPoints.map((item,index)=><li key={item}><span>{index+1}</span>{item}</li>)}</ul></div></div></div>
          </div> : <div className="product-main">
            <div className="product-visual">
              <div className="product-image-stage"><img src={mobileImage(activeDetailImage)} srcSet={`${mobileImage(activeDetailImage)} 1600w, ${activeDetailImage} 5000w`} sizes="(max-width: 1000px) 100vw, 58vw" alt={`${activeDetailProject.title} ${detailGalleryIndex+1}`} loading="eager" fetchPriority="high" decoding="async"/><div className="product-visual-shade"/><button className="product-image-nav previous" aria-label="上一张图片" onClick={()=>setDetailGalleryIndex((detailGalleryIndex-1+activeDetailGallery.length)%activeDetailGallery.length)}><ChevronLeft/></button><button className="product-image-nav next" aria-label="下一张图片" onClick={()=>setDetailGalleryIndex((detailGalleryIndex+1)%activeDetailGallery.length)}><ChevronRight/></button><button className="product-fullscreen" aria-label="放大查看" onPointerEnter={event=>prepareFullscreenTarget(event.currentTarget.closest('.product-image-stage')?.querySelector('img') ?? null)} onFocus={event=>prepareFullscreenTarget(event.currentTarget.closest('.product-image-stage')?.querySelector('img') ?? null)} onClick={()=>openImageLightbox(activeDetailGallery, detailGalleryIndex)}><Maximize2 size={19}/></button></div>
              <div className="product-thumbnails">{activeDetailGallery.map((image,index)=><button className={index===detailGalleryIndex?'active':''} key={image} onClick={()=>setDetailGalleryIndex(index)} aria-label={`查看第 ${index+1} 张图片`}><img src={thumbnailImage(image)} alt="" loading="lazy" decoding="async"/><span>{index+1}</span></button>)}</div>
            </div>
            <div className="product-info"><div><small>Featured Product</small><h3>{activeDetailProject.title}</h3><div className="product-tags">{activeDetailProject.tags.map(tag=><span key={tag}>{tag}</span>)}</div><p>{activeDetailProject.summary}</p></div><div className="product-detail-grid selling-points"><div><h4>内容框位</h4><ul>{activeDetailProject.sellingPoints.map((item,index)=><li key={item}><span>{index+1}</span>{item}</li>)}</ul></div></div></div>
          </div>
          }
        </div>
      </Fade>
      </div>
    </div></section>

    <section className="services packaging-section" id="experience"><div className="shell">
      <Fade className="section-head packaging-head"><div><span className="eyebrow dark">/ 03 PACKAGING DESIGN</span><p>从零售展示到运输交付，建立完整、统一且可落地的包装视觉系统。</p></div><h2>03 包装设计</h2></Fade>
      <div className="packaging-list">{packagingProjects.map((project, i) => {const isPackagingOpen=openPackagingIndexes.includes(i);return <Fade delay={i * .05} key={project.title} className={`packaging-item ${isPackagingOpen?'is-open':''}`}>
        <button className="packaging-row" type="button" aria-expanded={isPackagingOpen} onMouseDown={event=>event.preventDefault()} onClick={()=>togglePackaging(i)}>
          <span className="packaging-index"><b>{String(i + 1).padStart(2, '0')}</b><small>{project.english}</small></span>
          <span className="packaging-name"><h3>{project.title}</h3><span>{project.tags.map(tag=><em key={tag}>{tag}</em>)}</span></span>
          <span className="packaging-click-hint">{isPackagingOpen?'点击收起':'点击弹出'}<i>↓</i></span>
          <span className="packaging-description">{project.description}</span>
          <span className={`packaging-preview ${project.type}`} aria-hidden="true"><i/><i/><i/></span>
          <ArrowUpRight className="packaging-arrow"/>
        </button>
        {isPackagingOpen&&<div className="packaging-material-panel">
          <div className="packaging-material-inner">
            <div className="packaging-material-title"><div><small>{project.english} / MATERIAL SHOWCASE</small><h4>{project.title}物料展示</h4></div><p>{['color-box','carton','label','guide','manual','brand'].includes(project.type)?'点击右上角图标，即可全屏放大查看方案。':'点击下方位置可依次替换为项目实拍、设计稿与工艺细节。'}</p></div>
            {project.type==='manual' ? <div className="color-box-document-grid">{userManualCases.map((item,index)=><div className={`color-box-document manual-document color-box-document-${index+1}`} key={item.file}><iframe key={`${item.file}-${manualPageIndexes[index]}`} src={`${item.file}#page=${manualPageIndexes[index]+1}&view=FitH`} title={item.label} loading="lazy"/><span>{String(index+1).padStart(2,'0')}</span><b>{item.label}</b><div className="manual-page-controls"><button type="button" aria-label={`查看${item.label}上一页`} onClick={()=>changeManualPage(index,-1)}><ChevronLeft size={18}/></button><small>{String(manualPageIndexes[index]+1).padStart(2,'0')} / {String(item.pages).padStart(2,'0')}</small><button type="button" aria-label={`查看${item.label}下一页`} onClick={()=>changeManualPage(index,1)}><ChevronRight size={18}/></button></div><button className="color-box-zoom" type="button" aria-label={`在新标签页打开${item.label}`} onClick={()=>openPdf(item.file)}><Maximize2 size={18}/></button></div>)}</div> : ['color-box','carton','label','guide','brand'].includes(project.type) ? <div className={`color-box-document-grid ${['color-box','carton','label'].includes(project.type)?'wide-document-grid':''} ${project.type==='guide'||project.type==='brand'?'single-document-grid':''}`}>{(project.type==='color-box'?colorBoxCases:project.type==='carton'?masterCartonCases:project.type==='label'?ratingLabelCases:project.type==='guide'?quickStartGuideCases:brandGuideCases).map((item,index)=><div className={`color-box-document color-box-document-${index+1}`} key={item.file}><iframe src={`${item.file}#view=FitH`} title={item.label} loading="lazy"/><span>{String(index+1).padStart(2,'0')}</span><b>{item.label}</b><button className="color-box-zoom" type="button" aria-label={`在新标签页打开${item.label}`} onClick={()=>openPdf(item.file)}><Maximize2 size={18}/></button></div>)}</div> : <div className="packaging-material-grid">{['成品效果','正反面展示','刀模 / 展开图','版面细节','材质与工艺','应用场景'].map((label,index)=><div className={index===0?'featured':''} key={label}><img src={`/product-placeholder.svg?packaging=${i+1}-${index+1}`} alt=""/><span>{String(index+1).padStart(2,'0')}</span><b>{label}</b></div>)}</div>}
          </div>
        </div>}
      </Fade>})}</div>
    </div></section>

    <section className="video-collection" id="contact"><div className="shell">
      <Fade className="video-heading"><div><span>/ 04 VIDEO WORKS</span><h2>04 视频合集</h2></div><p>VIDEO<br/>COLLECTION</p></Fade>
      <div className="video-layout">
        <div className="video-category-list">{videoCategories.map((category,index)=><button className={index===videoCategoryIndex?'active':''} onClick={()=>{setVideoCategoryIndex(index);setVideoItemIndex(0);setIsVideoPlaying(false)}} key={category.title}><span>{String(index+1).padStart(2,'0')}</span><i><b>{category.title}</b><small>{category.english}</small></i><ArrowUpRight size={18}/></button>)}</div>
        <div className="video-player-card embedded-video">
          <div className="video-player-top"><span>{videoCategories[videoCategoryIndex].english}</span><small>PROJECT {String(videoItemIndex+1).padStart(2,'0')} / {String(videoCategories[videoCategoryIndex].items.length).padStart(2,'0')}</small></div>
          {isVideoPlaying ? <div className="video-embed" style={{ aspectRatio: activeVideoAspectRatio }}><iframe key={activeVideo.url} src={`${activeVideo.url}&autoplay=1&muted=0`} title={`${activeVideo.title}视频播放`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen /></div> : <button className={`video-cover ${(videoCategoryIndex===2&&videoItemIndex>0)||('portrait' in activeVideo&&activeVideo.portrait)?'portrait-cover':''}`} style={{ aspectRatio: activeVideoAspectRatio }} onClick={()=>setIsVideoPlaying(true)} aria-label={`播放${activeVideo.title}`}><img src={activeVideo.cover} alt={`${activeVideo.title}视频封面`} loading="lazy" decoding="async"/><span><Play fill="currentColor" size={22}/></span><b>点击播放</b></button>}
        </div>
        <div className="video-project-info"><small>SELECTED CATEGORY</small><h3>{videoCategories[videoCategoryIndex].title}</h3><p>{videoCategories[videoCategoryIndex].description}</p><div>{videoCategories[videoCategoryIndex].items.map((item,index)=><button className={index===videoItemIndex?'active':''} key={item.url} onClick={()=>{setVideoItemIndex(index);setIsVideoPlaying(false)}}><span>{String(index+1).padStart(2,'0')}</span>{item.title}<Play size={13}/></button>)}</div></div>
      </div>
    </div></section>

    <footer className="site-footer shell"><p>Have a strange idea?</p><a href="mailto:hello@jack.studio">Let's make it real <ArrowUpRight /></a><span>© 2026 FENG</span></footer>
    {expandedImage && <motion.div className="image-lightbox" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setExpandedImage(null)}><img key={expandedImage.images[expandedImage.index]} src={expandedImage.images[expandedImage.index]} alt={`放大查看第 ${expandedImage.index + 1} 张`} onClick={event=>event.stopPropagation()}/>{expandedImage.images.length > 1 && <><button className="lightbox-nav previous" type="button" aria-label="上一张图片" onClick={event=>{event.stopPropagation();changeExpandedImage(-1)}}><ChevronLeft size={30}/></button><button className="lightbox-nav next" type="button" aria-label="下一张图片" onClick={event=>{event.stopPropagation();changeExpandedImage(1)}}><ChevronRight size={30}/></button><span className="lightbox-count">{expandedImage.index + 1} / {expandedImage.images.length}</span></>}<button className="lightbox-close" type="button" aria-label="关闭放大查看" onClick={()=>setExpandedImage(null)}>×</button></motion.div>}
  </main>
}
