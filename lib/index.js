const { spawn } = require('child_process')

async function getActiveWindow() {
  return await new Promise((resolve, reject) => {
    const _ws = spawn("powershell", [ "-ExecutionPolicy", "Bypass","-File", "windows.ps1", "1", "0" ])
  
    _ws.stdout.setEncoding('utf8')

    _ws.stdout.on("data", (data) => {
      data.toString()
      data = data.replace(/(@{ProcessName=| AppTitle=)/g,'').slice(0,-1).split(';',2)

      resolve({
        app: response[0],
        title: response[1]
      })
    })

    _ws.stderr.on("data", (e) => {
      throw e.tostring()
    })
  })
}

module.exports = getActiveWindow