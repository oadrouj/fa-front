import { FacturiTemplatePage } from './app.po';

describe('Facturi App', function() {
  let page: FacturiTemplatePage;

  beforeEach(() => {
    page = new FacturiTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
