export const scrollTarget = () => {
  addEventListener('load', () => {
    if (document.location.href.includes('#')) {
      scrollBy(0,-96)
      console.log('hola')
    }
  })
}
