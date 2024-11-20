import { ElectronAPI } from '@electron-toolkit/preload'
import type { api } from '../../preload/index'

declare global {
  interface Window {
    electron: ElectronAPI
    api: api
  }
}
