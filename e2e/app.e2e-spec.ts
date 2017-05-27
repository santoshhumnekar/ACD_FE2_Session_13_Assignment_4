import { RouteParamAppPage } from './app.po';

describe('route-param-app App', function() {
  let page: RouteParamAppPage;

  beforeEach(() => {
    page = new RouteParamAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
