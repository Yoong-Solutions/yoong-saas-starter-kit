import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page';

test.describe('Login page UI', () => {
  test('UI01: Verify the UI of Login form', async ({ page }) => {
    const home = new HomePage(page);
    await page.goto('https://saas.yoong.xyz/auth/login?');
    await expect(page).toHaveURL('https://saas.yoong.xyz/auth/login?');
    await expect(page.locator('body')).toContainText('Welcome back');
    await expect(page.locator('body')).toContainText('Log in to your account');
    await expect(page.getByRole('button', { name: 'Continue with GitHub' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Continue with Google' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Email');
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(page.locator('body')).toContainText('Password');
    await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
    await expect(page.getByRole('button').filter({ hasText: /^$/ })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot your password?' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByText('By clicking Sign in, you agree to our')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Terms and Conditions' })).toBeVisible();
    await expect(page.getByText('and')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Privacy Statement' })).toBeVisible(); 
    await expect(page.locator('body')).toContainText("Don't have an account?");
    await expect(page.getByRole('link', { name: 'Create a free account' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign in with Email' })).toBeEnabled();
  });

  test('UI02: Verify the UI of login with Google', async ({ page }) => {
    const home = new HomePage(page);
    await page.goto('https://saas.yoong.xyz/auth/login?');
    await page.click('text=Continue with Google');
    await expect(page).toHaveURL(/https:\/\/accounts\.google\.com\/v3\/signin\/identifier\?/);
    await expect(page.getByText('Sign in with Google')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible();
    await expect(page.getByText('to continue to ')).toBeVisible();
    await expect(page.getByRole('button', {name: 'yoong.xyz'})).toBeVisible();
  })

  test('UI03: Verify the UI of login with GitHub', async ({ page }) => {
    const home = new HomePage(page);
    await page.goto('https://saas.yoong.xyz/auth/login?');
    await page.click('text=Continue with GitHub');
    await expect(page).toHaveURL(/https:\/\/github\.com\/login\?/);
    await expect(page.getByRole('heading', { name: 'Sign in to GitHub' })).toBeVisible();
    await expect(page.getByLabel('Username or email address')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign in' })).toBeVisible();
  })
});

test('Login001: Login with valid email and password', async ({ page }) => {
  const home = new HomePage(page);
  await page.goto('https://saas.yoong.xyz/auth/login?');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.click('button[type="submit"]');
});

