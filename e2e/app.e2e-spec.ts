import { MatchedgePage } from './app.po';

describe('matchedge App', function() {
  let page: MatchedgePage;

  beforeEach(() => {
    page = new MatchedgePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
