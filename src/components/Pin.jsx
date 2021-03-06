import { useContext } from 'react'

import { getStorage, setStorage } from '@/services/storage'
import HomeTabContext from '@/context/hometabContext'

import ButtonMenu from '@/components/Settings/ButtonMenu'

import PinActive from '@icons/PinActive'
import PinDeactive from '@icons/PinDeactive'

const Pin = () => {
  const { isPinned, setIsPinned, isOwnImg } = useContext(HomeTabContext)

  const handleClick = () => {
    const pin = getStorage('pin')
    const newPin = pin ? !pin : true

    setStorage('pin', newPin)
    setIsPinned(newPin)
  }

  if (isOwnImg) return null

  return (
    <ButtonMenu handleClick={handleClick}>
      {isPinned ? <PinActive /> : <PinDeactive />}
    </ButtonMenu>
  )
}

export default Pin
