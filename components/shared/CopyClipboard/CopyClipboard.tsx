import { CopyAll } from '@components/shared/Icons'
import { ClickAwayListener, Tooltip } from '@mui/material'
import { useState } from 'react'
import { CopyClipboardProps } from 'types'
import { copyToClipboard } from 'utils'
import { Button } from './styles'

const CopyClipboard = ({ data }: CopyClipboardProps) => {
  const [open, setOpen] = useState(false)

  const handleTooltipClose = () => {
    setOpen(false)
  }

  const handleTooltipOpen = () => {
    setOpen(true)
  }
  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true,
        }}
        onClose={handleTooltipClose}
        open={open}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title="Copied!"
        placement="top"
      >
        <Button
          onClick={() => {
            copyToClipboard(data)
            handleTooltipOpen()
          }}
          style={{ cursor: 'pointer' }}
        >
          <CopyAll />
        </Button>
      </Tooltip>
    </ClickAwayListener>
  )
}

export default CopyClipboard
