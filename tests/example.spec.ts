import { test, expect } from '@playwright/test';

const headerOptions = [{ name: 'Sobre Mim', link: '/' }, 
  { name: 'Formação', link: '/education', title: 'Formação e Skills' },
   { name: 'Experiência', link: '/experiences', title: 'Experiência'  }, 
   { name: 'Repositórios', link: '/repositories', title: 'Repositórios'  }, 
   { name: 'Artigos', link: '/articles', title: 'Artigos'  }]


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

  test(`validate load page ${headerOption.name}`, async ({ page }) => {
    await page.goto('/');
    const headerLink = page.getByRole('link', { name: headerOption.name })
    await headerLink.click()
    if (headerOption.name === 'Sobre Mim') {
      const titleName = page.getByRole('heading', { name: "Rodrigo Cabral" }).nth(1);
      await expect(titleName).toBeVisible();
    }else{
      const titleName = page.getByRole('heading', { name: headerOption.name });
      await expect(titleName).toBeVisible();
    }
  })

}
