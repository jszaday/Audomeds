Dosages = new Mongo.Collection('dosages');

Dosages.allow({
  insert: function(userId, doc) {
    return can.createDosage(userId);
  },
  update: function(userId, doc, fieldNames, modifier) {
    return can.editDosage(userId, doc);
  },
  remove: function(userId, doc) {
    return can.removeDosage(userId, doc);
  }
});

Meteor.methods({
  createDosage: function(dosage) {
    if (can.createDosage(Meteor.user()))
      Dosages.insert(dosage);
  },
  removeDosage: function(dosage) {
    if (can.removeDosage(Meteor.user(), dosage)) {
      Dosages.remove(dosage._id);
    } else {
      throw new Meteor.Error(403, 'You do not have the rights to delete this dosage.')
    }
  }
});
