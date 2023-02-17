import Components from './components'
import { makeInstaller } from './make-installer'

const installer = makeInstaller([...Components])

export const install = installer.install
export const version = installer.version
export default installer
