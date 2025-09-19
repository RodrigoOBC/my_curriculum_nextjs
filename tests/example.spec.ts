import { test, expect } from '@playwright/test';

const headerOptions = [{name : 'Sobre Mim', link: '/'}, {name : 'Formação', link: '/education'}, {name : 'Experiência', link: '/experiences'}, {name : 'Repositórios', link: '/repositories'}, {name : 'Artigos', link: '/articles'}]


for (let headerOption of headerOptions) {

  test(`Validate header option ${headerOption.name}`, async ({ page }) => {
  await page.goto('/');
  const titleName = page.getByRole('heading', { name: "Rodrigo Cabral" }).first();
  const menuItem = page.getByRole('link', { name: headerOption.name })
  await expect(titleName).toBeVisible();
  await expect(menuItem).toBeVisible();
});


  test(`validate redirect header for ${headerOption.name} menu option`, async ({ page }) => {

    await page.goto('/');
    const headerLink = page.getByRole('link', { name: headerOption.name })
    await headerLink.click()
    await expect(page).toHaveURL(`${headerOption.link}`);

  })
}
