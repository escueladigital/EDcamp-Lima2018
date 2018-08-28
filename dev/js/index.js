import {saludo, despedida} from "./modules/example"
import {activeMenu} from './modules/active-menu'
import {showMenu} from "./modules/show-menu"
import registerServiceWorker from './modules/register'
import {scrollTarget} from './modules/scroll-target'
import {countdown} from './modules/countdown'

// window.countdown = countdown.run
activeMenu()
showMenu()
registerServiceWorker()
scrollTarget()


countdown.run('Mon Aug 27 2018 23:59:59 GMT-0500', 'clock', 'El descuento ha terminado')
