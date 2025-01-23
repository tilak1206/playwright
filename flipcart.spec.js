import {test, expect} from '@playwright/test';

test('flipcart login', async({page}) => {
await page.goto('https://www.flipkart.com/');
await page.pause();
await page.getByRole('link', { name: 'Login' }).click();
await page.getByLabel('Enter Email/Mobile number').fill('beladiya1999@gmail.com')
await page.getByRole('button', { name: 'Request OTP' }).click();
await page.getByRole('button', { name: 'Verify' }).click();

});