/*global QUnit:false*/

import moment from '../moment';
import { defineCommonLocaleTests } from './helpers/common-locale';
import { setupDeprecationHandler, teardownDeprecationHandler } from './helpers/deprecation-handler';

export function localeModule (name, lifecycle) {
    QUnit.module('locale:' + name, {
        beforeEach : function () {
            moment.locale(name);
            moment.createFromInputFallback = function (config) {
                throw new Error('input not handled by moment: ' + config._i);
            };
            setupDeprecationHandler(QUnit.test, moment, 'locale');
            if (lifecycle && lifecycle.setup) {
                lifecycle.setup();
            }
        },
        afterEach : function () {
            moment.locale('en');
            teardownDeprecationHandler(QUnit.test, moment, 'locale');
            if (lifecycle && lifecycle.teardown) {
                lifecycle.teardown();
            }
        }
    });
    defineCommonLocaleTests(name, -1, -1);
}
