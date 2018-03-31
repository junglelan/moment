import { module } from '../qunit';
import moment from '../../moment';

module('to type');

QUnit.test('toObject', function (assert) {
    var expected = {
        years:2010,
        months:3,
        date:5,
        hours:15,
        minutes:10,
        seconds:3,
        milliseconds:123
    };
    assert.deepEqual(moment(expected).toObject(), expected, 'toObject invalid');
});

QUnit.test('toArray', function (assert) {
    var expected = [2014, 11, 26, 11, 46, 58, 17];
    assert.deepEqual(moment(expected).toArray(), expected, 'toArray invalid');
});

QUnit.test('toDate returns a copy of the internal date', function (assert) {
    var m = moment();
    var d = m.toDate();
    m.year(0);
    assert.notEqual(d, m.toDate());
});

QUnit.test('toJSON', function (assert) {
    if (Date.prototype.toISOString) {
        var expected = new Date().toISOString();
        assert.deepEqual(moment(expected).toJSON(), expected, 'toJSON invalid');
    } else {
        // IE8
        assert.expect(0);
    }
});

QUnit.test('toJSON works when moment is frozen', function (assert) {
    if (Date.prototype.toISOString) {
        var expected = new Date().toISOString();
        var m = moment(expected);
        if (Object.freeze != null) {
            Object.freeze(m);
        }
        assert.deepEqual(m.toJSON(), expected, 'toJSON when frozen invalid');
    } else {
        // IE8
        assert.expect(0);
    }
});
