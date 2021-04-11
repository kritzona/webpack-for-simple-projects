import './index.scss'

const initApp = (containerId: string) => {
  const bodyElement = document.body

  const containerElement = document.getElementById(containerId)
  if (!containerElement) return

  const h1Element = document.createElement('h1')
  h1Element.style.textAlign = 'center'
  h1Element.textContent = 'Приложение готово к работе'

  const pElement = document.createElement('p')
  pElement.style.textAlign = 'center'
  pElement.textContent = 'Добро пожаловать'

  containerElement.append(h1Element, pElement)
}

initApp('root')
