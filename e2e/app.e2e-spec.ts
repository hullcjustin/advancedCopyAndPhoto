import { AdvancedCopyAndPhotoPage } from './app.po';

describe('advanced-copy-and-photo App', function() {
  let page: AdvancedCopyAndPhotoPage;

  beforeEach(() => {
    page = new AdvancedCopyAndPhotoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
