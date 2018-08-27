import {saludo, despedida} from "./modules/example"
import {activeMenu} from './modules/active-menu'
import {showMenu} from "./modules/show-menu"
import {scrollTarget} from './modules/scroll-target'
import {timer} from './modules/countdown'

window.countdown = timer.run
activeMenu()
showMenu()
scrollTarget()
