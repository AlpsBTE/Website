import { IconChevronDown } from '@tabler/icons-react'
import './ScrollIndicator.scss'

export default function ScrollIndicator() {
  return (
    <a href="#ourMission" className="scroll-indicator">
      <IconChevronDown size={32} stroke={2} />
    </a>
  )
}
