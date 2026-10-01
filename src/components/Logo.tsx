interface LogoProps {
  style?: React.CSSProperties
}

export default function Logo({ style }: LogoProps) {
  return (
    <img
      src="/assets/logo/0.webp"
      alt="Alps BTE Logo"
      style={{ height: 40, width: 'auto', ...style }}
    />
  )
}
