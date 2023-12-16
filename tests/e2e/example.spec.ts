import { test, expect, _electron as electron } from '@playwright/test'
import path from 'path'

test('example test', async () => {
  const electronApp = await electron.launch({
    args: [path.join(__dirname, '../../out/main/index.js')]
  })
  const isPackaged = await electronApp.evaluate(async ({ app }) => {
    // This runs in Electron's main process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.isPackaged
  })

  expect(isPackaged).toBe(false)

  // Wait for the first BrowserWindow to open
  // and return its Page object
  const window = await electronApp.firstWindow()
  const text = window.getByText(
    "You've successfully created an Electron project with Svelte and TypeScript"
  )
  expect(await text.isVisible()).toBeTruthy()

  // close app
  await electronApp.close()
})
