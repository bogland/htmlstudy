"use strict";
var client_id = Date.now();
var wsId = document.querySelector("#ws-id");
wsId.textContent = client_id.toString();
var ws = new WebSocket("ws://localhost:8000/ws/" + client_id);
ws.onmessage = function (event) {
  var messages = document.getElementById("messages");
  var message = document.createElement("li");
  var content = document.createTextNode(event.data);
  message.appendChild(content);
  messages.appendChild(message);
};
function sendMessage(event) {
  var input = document.getElementById("messageText");
  ws.send(input.value);
  input.value = "";
  event.preventDefault();
}
