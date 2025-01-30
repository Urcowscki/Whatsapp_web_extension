document.addEventListener('visibilitychange', function () {
  if (document.visibilityState === 'visible') {
    hideOnlineStatus();
  } else {
    showOnlineStatus();
  }
});

function hideOnlineStatus() {
  // Lógica para esconder o status online
  var style = document.createElement('style');
  style.innerHTML = `
    .app-wrapper-web .app-container .app-inner .pane .chat-body .chat-main .pane-content .status-text {
      display: none;
    }
  `;
  document.head.appendChild(style);
  notifyUser(true);
}

function showOnlineStatus() {
  // Lógica para mostrar o status online
  var style = document.querySelector('style');
  if (style) {
    style.remove();
  }
  notifyUser(false);
}

function notifyUser(isHidden) {
  if (isHidden) {
    // Altere o ícone ou exiba uma notificação para indicar que o status está escondido
    chrome.runtime.sendMessage({ status: 'hidden' });
  } else {
    // Altere o ícone ou exiba uma notificação para indicar que o status está visível
    chrome.runtime.sendMessage({ status: 'visible' });
  }
}
