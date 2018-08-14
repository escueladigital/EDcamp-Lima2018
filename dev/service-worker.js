// Nombre de la cache cambiar numero cada vez que se suba nueva version
const EDCACHE = 'edcache-1'
// Lista de archivos que se subiran a la cache
const filesToCache = [
  './index.html',
  './img/alexys.jpg',
  './img/alvaro.jpg',
  './img/beto.jpg',
  './img/freddy.jpg',
  './img/harold.jpg',
  './img/manu.jpg',
  './img/mapa-dia-1.jpg',
  './img/mapa-dia-2.png',
  './img/mircha.jpg',
  './img/talk-break-coffe-break.jpg',
  './img/talk-break-premiacion.jpg',
  './img/talk-break-presentacion.jpg',
  './img/tde.jpg',
  './img/banner-dia1.jpg',
  './img/banner-dia-2.jpg',
  './img/bogota-2017.jpg',
  './img/card__img-tde.jpg',
  './img/card__img-workshops.jpg',
  './img/logo/icon-192x192.png',
  './css/styles.css',
  'https://fonts.googleapis.com/css?family=Lato:400,400i,700|Open+Sans:700'
]

/**
 * Abre la cache y agrega los elementos declrados anteriormente
 */
self.addEventListener('install', e => {
  console.log('Instalado')
  e.waitUntil(
    caches.open(EDCACHE).then(cache => {
      cache.addAll(filesToCache).then(() => self.skipWaiting())
    })
    .catch(err => {
      console.log(`Error al abrir cache`)
    })
  )
})

/**
 * En caso que algun elemento haya sido eliminado de la cache se elimina tambien la del usuario
 */
self.addEventListener('activate', e => {
  console.log('Activando')
  const whiteList = [EDCACHE]
  e.waitUntil(
    caches.keys().then(names => {
      return Promise.all(names.map(cacheName => {
        if(whiteList.indexOf(cacheName) === -1) return caches.delete(cacheName)
      }
      ))
    })
    .then(() => {
      console.log('Cache actualizado')
      return self.clients.claim()
    })
    .catch(err => {
      console.log(`Error al activar cache ${err.message}`)
    })
  )
})

/**
 * Recupera los valores de la cache si esta guardado o los pide a la red en caso contrario
 */
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request)
    })
    .catch(err => {
      console.log('Error al recuperar '+ err.message)
    })
  )
})
