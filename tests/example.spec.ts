import { test, _electron as electron } from '@playwright/test'

test('has title', async () => {
  const electronApp = await electron.launch()
  const window = await electronApp.firstWindow()
  // Print the title.
  console.log(await window.title())
  // Exit app.
  await electronApp.close()
  await window.close()
})
