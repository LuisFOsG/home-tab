import { $, addEvent } from '@/util/domElements'
import { getStorage, setStorage } from '@/util/storage'
import { capitalize } from '@/util'

import { defaultSearchEngine, searchEngine } from '@/config.json'

const $input = $('#search_input')

function urlify (text) {
  const urlRegex = /(https?:\/\/[^\s]+)/g

  if (text.includes(' ')) return [false, text]
  if (urlRegex.test(text)) return [true, text]

  return text.includes('.')
    ? [true, `https://${text}`]
    : [false, text]
}

const searchQuery = (e) => {
  e.preventDefault()

  const query = $input.value.trim()
  const [isURL, newURL] = urlify(query)

  isURL
    ? window.location.href = newURL
    : window.location.href = searchEngine[defaultSearchEngine].replace('{{query}}', query)

  e.target.reset()
}

export const loadSearchEngine = () => {
  const $searchsEngine = $('#search-engine-container')

  const savedSearchEngine = getStorage('searchsEngine')
  const useSearchEngine = savedSearchEngine || searchEngine

  $searchsEngine.innerHTML = ''
  for (const [name, url] of Object.entries(useSearchEngine)) {
    const isChecked = defaultSearchEngine === name
    $searchsEngine.innerHTML += `
      <label class="ml-2 mt-2 cursor-pointer">
        <input class="accent-slate-800 cursor-pointer" type="radio" value="${name}" name="radio" ${isChecked && 'checked'}>
        <span class="select-none">${capitalize(name)}</span>
        <input class="px-4 py-2 ml-3 text-lg rounded shadow-sm outline-none appearance-none bg-slate-600/50 md:text-xl h-8 hover:bg-gray-600/80" placeholder="${capitalize(name)} - Search Engine" value="${url}">
      </label>
    `
  }

  setStorage('searchsEngine', useSearchEngine)
}

addEvent($('#search'), 'submit', searchQuery)
$input.placeholder = `Busca en ${capitalize(defaultSearchEngine)} o escribe una URL`
