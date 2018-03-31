
import moment from '../../moment';
import { module } from '../qunit';

module('duration from moments');

QUnit.test('pure year diff', function (assert) {
    var m1 = moment('2012-01-01T00:00:00.000Z'),
        m2 = moment('2013-01-01T00:00:00.000Z');

    assert.equal(moment.duration({from: m1, to: m2}).as('years'), 1, 'year moment difference');
    assert.equal(moment.duration({from: m2, to: m1}).as('years'), -1, 'negative year moment difference');
});

QUnit.test('month and day diff', function (assert) {
    var m1 = moment('2012-01-15T00:00:00.000Z'),
        m2 = moment('2012-02-17T00:00:00.000Z'),
        d = moment.duration({from: m1, to: m2});

    assert.equal(d.get('days'), 2);
    assert.equal(d.get('months'), 1);
});

QUnit.test('day diff, separate months', function (assert) {
    var m1 = moment('2012-01-15T00:00:00.000Z'),
        m2 = moment('2012-02-13T00:00:00.000Z'),
        d = moment.duration({from: m1, to: m2});

    assert.equal(d.as('days'), 29);
});

QUnit.test('hour diff', function (assert) {
    var m1 = moment('2012-01-15T17:00:00.000Z'),
        m2 = moment('2012-01-16T03:00:00.000Z'),
        d = moment.duration({from: m1, to: m2});

    assert.equal(d.as('hours'), 10);
});

QUnit.test('minute diff', function (assert) {
    var m1 = moment('2012-01-15T17:45:00.000Z'),
        m2 = moment('2012-01-16T03:15:00.000Z'),
        d = moment.duration({from: m1, to: m2});

    assert.equal(d.as('hours'), 9.5);
});
