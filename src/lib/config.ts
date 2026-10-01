export const API_URL = 'https://alps-bte.com'

export const socials = {
  discord: { link: 'https://discord.com/invite/vgkspay', text: 'Discord' },
  youtube: { link: 'https://www.youtube.com/c/AlpsBTE', text: 'YouTube' },
  twitter: { link: 'https://twitter.com/AlpsBTE', text: 'Twitter' },
  instagram: { link: 'https://www.instagram.com/bte_alps', text: 'Instagram' },
  reddit: { link: 'https://www.reddit.com/user/Alps_BTE', text: 'Reddit' },
  tiktok: { link: 'https://www.tiktok.com/@alps_bte', text: 'TikTok' },
  planetMinecraft: {
    link: 'https://www.planetminecraft.com/member/alps_bte',
    text: 'Planet Minecraft',
  },
} as const

export const server = {
  address: 'mc.alps-bte.com',
} as const

export const navRoutes = [
  { key: 'aboutUs', path: 'about' },
  { key: 'gallery', path: 'gallery' },
  { key: 'faq', path: 'faq' },
  { key: 'application', path: 'application' },
  { key: 'contact', path: 'contact' },
] as const

export const contactEmails = {
  outreach: 'press@alps-bte.com',
  management: 'office@alps-bte.com',
} as const
