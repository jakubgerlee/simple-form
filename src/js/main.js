"use strict";

// service worker registration - remove if you're not going to use it

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("serviceworker.js").then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}

const saveButton = document.querySelector(".form__button--save--js");
const loadButton = document.querySelector(".form__button--load--js");

saveButton.addEventListener("click", e => {
  e.preventDefault();
  const message = document.querySelector("#message");
  localStorage.setItem("message", JSON.stringify(message.value));
});

loadButton.addEventListener("click", e => {
  e.preventDefault();
  console.log(localStorage.getItem("message"));

  let value = JSON.parse(localStorage.getItem("message"));
  const message = document.querySelector("#message");
  message.value = value;
});
