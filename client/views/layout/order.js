/* global AccountsTemplates */

Template.order.onRendered(() => {
  // create sidebar and attach to menu open
  $('select.dropdown')
  .dropdown()
  ;
});

Template.order.events({

  'submit form'  (event) {

    var isValid = ValidateForm.validate('#new-order');
    if (!isValid) return;
  }
  });
