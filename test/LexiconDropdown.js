'use strict';

import LexiconDropdown from '../src/LexiconDropdown';

let dropdown;

describe('LexiconDropdown', function() {
	afterEach(() => {
		if (dropdown) {
			dropdown.dispose();
		}
	});

	it('should generate the default markup defined by Lexicon with empty items', function() {
		dropdown = new LexiconDropdown();

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testDefaultLexiconDropdownEmpty.html'].trim());
	});

	it('should generate the default markup defined by Lexicon', function() {
		dropdown = new LexiconDropdown({
			items: ['a', 'b']
		});

		assert.strictEqual(dropdown.element.outerHTML, __html__['test/fixture/testDefaultLexiconDropdown.html'].trim());
	});
});
