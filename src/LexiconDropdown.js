import Component from 'metal-component';
import core from 'metal/src/core';
import Soy from 'metal-soy';

import templates from './LexiconDropdown.soy';

// Metal dependencies
import MetalDropdown from 'metal-dropdown';

/**
 * Implementation of the Lexicon Dropdown Piece
 *
 * @see  {@link http://liferay.github.io/lexicon/content/dropdowns/|Lexicon Definition}
 */
class LexiconDropdown extends Component {}

/**
 * State definition.
 * @type {!Object}
 * @static
 */
LexiconDropdown.STATE = {
};

// Register component
Soy.register(LexiconDropdown, templates);

export default LexiconDropdown;