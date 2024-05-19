// @ts-check
const { test, expect } = require('@playwright/test');

// test('has title', async ({page}) => {
//     await page.goto('https://jif-u-can.onrender.com/')

//     await expect(page).toHaveTitle(/Jif/);
// })

test('login', async ({page}) => {
    await page.goto('https://jif-u-can.onrender.com/')
    const profile = await page.locator('#profile-button')
    await profile.click()

    await page.waitForSelector('#dropdown-container', { state: 'visible'})
    await expect(page.locator('#dropdown-container')).toBeVisible();

    await page.getByRole('button', { name: "Log In"})
    await expect(page.getByRole('button', { name: "Log In"})).toBeVisible()

})
