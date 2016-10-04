'use strict';

import LexiconDropdown from '../src/LexiconDropdown';

let dropdown;

describe('LexiconDropdown', function() {
	afterEach(() => {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should generate the default sprite#symbol markup defined by Lexicon', function() {
		icon = new LexiconDropdown();

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testDefaultLexiconDropdown.html']);
	});
});
