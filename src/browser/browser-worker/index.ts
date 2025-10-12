// @ts-ignore
import initCode from './init-code.js?raw'

// 超时限制，资源限制（内存，CPU）, 生命周期监听(成功建立连接，错误监听)

export class BrowserWorker {
  opts
  init = false

  constructor(opts = {}) {
    if (typeof Blob !== 'undefined' && URL && Worker) {
      this.opts = opts
    } else {
      throw new Error('Current enviroment not support this feature')
    }
  }

  _initialize() {
    this.init = true
  }

  async run(code: string) {
    if (!this.init) {
      this._initialize()
    }
    const { timeout = 3000, context } = this.opts

    let codes = [initCode, context, code].join('\n')

    //     codes = `
    // try {
    //     ${codes}
    // } catch (error) {
    //   postMessage({
    //     type: 'error',
    //     error,
    //   }
    // }

    //     `

    const firmwareObjectURL = window.URL.createObjectURL(
      new Blob([codes], { type: 'text/javascript' })
    )

    const worker = new Worker(firmwareObjectURL)
    window.URL.revokeObjectURL(firmwareObjectURL)

    // worker.onerror = () => {
    //   //
    // }

    return new Promise<Worker>((re, rj) => {
      const timeoutId = setTimeout(() => {
        rj(new Error('Worker init timeout'))
        worker.terminate()
      }, timeout)

      const handleInit = (e: MessageEvent) => {
        if (e.data.type === 'init') {
          clearTimeout(timeoutId)
          worker!.removeEventListener('message', handleInit)
          re(worker)
        }
      }

      worker.addEventListener('message', handleInit)

      worker.addEventListener('message', (e) => {
        if (e.data.type === 'error') {
          console.log(3322)
          clearTimeout(timeoutId)
          worker!.removeEventListener('message', handleInit)
          console.log(e.data.error)
        }
      })
    })
  }
}
