import { useState, useEffect, useContext } from 'react'

import StateContext from '@/context/stateContext'
import { deleteAllStorage } from '@/services/storage'

import Container from '@/components/Settings/ContainerSetting'
import Title from '@/components/Settings/TitleSetting'

const ButtonReset = () => {
  const { settings } = useContext(StateContext)

  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    settings.updateSetting({
      name: 'reset',
      progress: true
    })
  }, [])

  useEffect(() => {
    if (settings.updateSettings) {
      settings.handleSaveSetting(handleSave, {
        name: 'reset',
        priority: 0
      })
    }
  }, [settings.updateSettings])

  const handleSave = async () => {
    if (!clicked) {
      return settings.updateSetting({
        name: 'reset',
        success: true
      })
    }

    deleteAllStorage()

    settings.updateSetting({
      name: 'reset',
      success: true
    })
  }

  const handleClick = () => {
    setClicked(!clicked)
  }

  const selectClass = !clicked ? 'bg-slate-700 hover:bg-gray-600/80' : 'bg-red-500/50 hover:bg-red-600'

  return (
    <Container center>
      <Title>Restablecer la Configuración</Title>
      <button
        onClick={handleClick}
        className={`${selectClass} mt-5 p-2 px-4 ml-2 rounded-lg`}
      >
        {clicked ? 'Click para cancelar' : 'Cambiar a valores predeterminados'}
      </button>
    </Container>
  )
}

export default ButtonReset
