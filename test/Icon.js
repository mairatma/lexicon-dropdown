'use strict';

import Icon from '../src/Icon';

let icon;

describe('Icon', function() {
	afterEach(() => {
		if (icon) {
			icon.dispose();
		}
	});

	it('should generate the default sprite#symbol markup defined by Lexicon', function() {
		icon = new Icon(
			{
				sprite: 'foo',
				symbol: 'bar'
			}
		);

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testDefaultIcon.html']);
	});

	it('should append a cssClass to the outer element', function() {
		icon = new Icon(
			{
				cssClass: 'css-class',
				sprite: 'foo',
				symbol: 'bar'
			}
		);

		assert.strictEqual(icon.element.outerHTML, __html__['test/fixture/testCssClassIcon.html']);
	});
});
