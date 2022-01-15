const host = 'http://localhost:4200';

export async function setup(page) {
  //await page.goto(`${host}/connexion`);
  if (page.url() === `${host}/connexion`) {
    await page.type('#login', 'userpix1@example.net');
    await page.type('#password', 'pix123');
    await page.click('.pix-button.pix-button--shape-rounded.pix-button--size-big.pix-button--background-blue');
  }
}

export async function createTests(page) {
  // Code to run once on the page to determine which tests to run
  return [{}];
}

export async function iteration(page, data) {
  // Run a single iteration against a page – e.g., click a link and then go back
  for (const url of [
    '/mes-tutos',
    '/mon-compte/informations-personnelles',
    '/mon-compte/methodes-de-connexion',
    '/mon-compte/langue',
    '/mes-certifications',
    '/plan-du-site',
  ]) {
    await page.goto(`${host}${url}`);
    await page.goBack();
  }
}
