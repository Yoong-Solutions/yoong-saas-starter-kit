import { Page } from '@playwright/test';
import { BasePage } from '@yoong-solutions/automation-framework-core';

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
  async goto() {
    await this.page.goto('/');
  }
}
