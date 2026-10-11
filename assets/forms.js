/* Shared form sender for every form on the site (free Web3Forms service).
   Each Web3Forms access key delivers to ONE email address. To send a form to a department inbox,
   create another free key at https://web3forms.com for that address and paste it below.
   Any key left as "PASTE_..." simply falls back to the main key, so nothing breaks in the meantime. */
window.MOT_FORM_KEY = "5eade745-585e-4fbc-9066-26168e78ef84";            /* main: contact form + bookings */
window.MOT_FORM_KEY_AVIATION = "7b3b9b90-b79f-47de-948a-4bebdb42028d";                 /* aviation@momentoftravels.com */
window.MOT_FORM_KEY_REQUESTS = "PASTE_REQUESTS_KEY_HERE";                 /* requests@momentoftravels.com */

function motKeyFor(formName){
  var k = window.MOT_FORM_KEY;
  var dept = null;
  if (formName === "flight-support" || formName === "gsa-inquiry") dept = window.MOT_FORM_KEY_AVIATION;
  else if (formName === "special-trip-request") dept = window.MOT_FORM_KEY_REQUESTS;
  if (dept && dept.indexOf("PASTE_") !== 0) k = dept;
  return k;
}

window.motSubmitForm = function(data){
  var payload = {};
  for (var k in data) { if (Object.prototype.hasOwnProperty.call(data, k)) payload[k] = data[k]; }
  var formName = payload["form-name"] || "website-form";
  delete payload["form-name"];
  var key = motKeyFor(formName);
  if (!key || key.indexOf("PASTE_") === 0) {
    return Promise.reject(new Error("Form access key not set (see assets/forms.js)"));
  }
  payload.access_key = key;
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
