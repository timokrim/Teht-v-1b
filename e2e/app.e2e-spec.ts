import { NoteCardAppPage } from './app.po';

describe('note-card-app App', function() {
  let page: NoteCardAppPage;

  beforeEach(() => {
    page = new NoteCardAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
