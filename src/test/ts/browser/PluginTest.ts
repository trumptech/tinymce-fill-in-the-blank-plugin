import { TinyAssertions, TinyHooks, TinyUiActions } from '@ephox/mcagar';
import Plugin from '../../../main/ts/Plugin';


// This an example of a browser test of the editor.
describe('browser.PluginTest', () => {
  const hook = TinyHooks.bddSetup({
    plugins: 'fill-in-the-blank',
    toolbar: 'fill-in-the-blank'
  }, [ Plugin ]);

  it('test click on button', () => {
    const editor = hook.editor();
    TinyUiActions.clickOnToolbar(editor, 'button:contains("fill-in-the-blank button")');
    TinyAssertions.assertContent(editor, '<p>content added from fill-in-the-blank</p>');
  });
});
