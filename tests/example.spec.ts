import { test, _electron as electron } from '@playwright/test'

test('has title', async () => {
  const electronApp = await electron.launch()
  // Evaluation expression in the Electron context.
  const appPath = await electronApp.evaluate(async ({ app }) => {
    // This runs in the main Electron process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.getAppPath()
  })
  console.log(appPath)
  const window = await electronApp.firstWindow()
  // Print the title.
  console.log(await window.title())
  // Exit app.
  await electronApp.close()
  await window.close()
})
