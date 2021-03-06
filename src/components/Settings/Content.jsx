import ChangeQuery from '@/components/ChangeQuery'
import ChooseImage from '@/components/ChooseImage'
import SearchsEngine from '@/components/SearchsEngine'
import NewSearchEngine from '@/components/NewSearchEngine'
import ButtonReset from '@/components/ButtonReset'

const ContentModal = () => {
  return (
    <div className='absolute flex flex-col w-full px-5 overflow-x-hidden overflow-y-auto text-lg content-settings scrollbar-color'>

      <ChangeQuery />
      <ChooseImage />
      <SearchsEngine />
      <NewSearchEngine />
      <ButtonReset />

    </div>
  )
}

export default ContentModal
