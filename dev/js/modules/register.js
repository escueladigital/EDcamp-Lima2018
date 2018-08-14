export default () => {
  let newWorker
  if('serviceWorker' in navigator) {
    window.addEventListener('load', e => {
      navigator.serviceWorker.register('./service-worker.js')
        .then(registration => {
          console.log('Service worker registrado')
        })
        .catch(err => {
          console.log(`Error al registrar ${err.message}`)
        })
    })
  }
}
