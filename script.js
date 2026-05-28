// Static MailerLite helper: keeps the page backend-free while providing a small inline state.
(function () {
  var form = document.querySelector(".waitlist-form");
  if (!form) return;

  var message = form.querySelector(".form-message");
  var submitButton = form.querySelector('button[type="submit"]');
  var originalButtonText = submitButton ? submitButton.textContent : "";

  form.addEventListener("submit", function (event) {
    var action = form.getAttribute("action") || "";
    var isPlaceholder = action.indexOf("YOUR_ACCOUNT_ID") !== -1 || action.indexOf("YOUR_FORM_ID") !== -1;

    if (isPlaceholder) {
      event.preventDefault();
      if (message) {
        message.textContent =
          "Almost ready: add your MailerLite form action URL in index.html to collect signups.";
      }
      return;
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Joining...";
    }

    if (message) {
      message.textContent = "Sending your details...";
    }

    window.setTimeout(function () {
      if (message) {
        message.textContent = "Thanks. You are on the KittyUp waitlist.";
      }
      form.reset();

      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }, 900);
  });
})();
