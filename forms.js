/* Shared form sender for every form on the site (free Web3Forms service).
   1. Create a free account at https://web3forms.com, enter the email where you want requests delivered,
      and copy the "Access Key" they email you.
   2. Paste it below in place of 5eade745-585e-4fbc-9066-26168e78ef84. That's the only change needed. */
window.MOT_FORM_KEY = "5eade745-585e-4fbc-9066-26168e78ef84";

window.motSubmitForm = function(data){
  var payload = {};
  for (var k in data) { if (Object.prototype.hasOwnProperty.call(data, k)) payload[k] = data[k]; }
  var formName = payload["form-name"] || "website-form";
  delete payload["form-name"];
  if (!window.MOT_FORM_KEY || window.MOT_FORM_KEY.indexOf("PASTE_") === 0) {
    return Promise.reject(new Error("Form access key not set (see assets/forms.js)"));
  }
  payload.access_key = window.MOT_FORM_KEY;
  payload.subject = "Moment of Travel — " + formName;
  payload.from_name = "Moment of Travel website";
  payload.form_type = formName;
  return fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(payload)
  }).then(function(r){ return r.json(); }).then(function(j){
    if (!j.success) throw new Error(j.message || "Form send failed");
    return j;
  });
};
