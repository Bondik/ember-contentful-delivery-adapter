import { moduleForModel, test } from 'ember-qunit';

moduleForModel('asset', 'Unit | Model | asset', {
  // Specify the other units that are required for this test.
  needs: ["model:space"]
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});