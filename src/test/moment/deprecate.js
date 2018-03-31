import { module } from '../qunit';
import { deprecate } from '../../lib/utils/deprecate';
import moment from '../../moment';

module('deprecate');

QUnit.test('deprecate', function (assert) {
    // NOTE: hooks inside deprecate.js and moment are different, so this is can
    // not be QUnit.test.expectedDeprecations(...)
    var fn = function () {};
    var deprecatedFn = deprecate('testing deprecation', fn);
    deprecatedFn();

    assert.expect(0);
});
