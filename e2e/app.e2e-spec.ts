import { PenshiruPage } from './app.po';

describe('penshiru App', function() {
  let page: PenshiruPage;

  beforeEach(() => {
    page = new PenshiruPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
