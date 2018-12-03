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


countdown.run('Aug 31 2018 14:00:00 GMT-0500', 'clock', '¡Ya empezó!')
