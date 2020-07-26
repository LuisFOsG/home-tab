import { useContext } from 'react'

import HomeTabContext from '@/context/hometabContext'

import Header from '@/components/Settings/Header'
import Content from '@/components/Settings/Content'
import Footer from '@/components/Settings/Footer'

import Alert from '@/components/Settings/Alert'

const Settings = () => {
  const { msgAlert } = useContext(HomeTabContext)

  return (
    <div className='absolute top-0 left-0 flex items-center justify-center w-screen h-screen bg-slate-900/40 backdrop-blur-sm'>

      <div className='relative bg-slate-800/80 w-11/12 lg:w-auto min-w-[50%] h-[80%] rounded-xl transition-all'>
        <Header />
        {
          msgAlert.title && <Alert title={msgAlert.title} message={msgAlert.message} type={msgAlert.type} />
        }
        <Content />
        <Footer />
      </div>

    </div>
  )
}

export default Settings
