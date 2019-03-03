let target = document.getElementById( 'output' );

export const logger = {
  log: function (msg) {
    const msgs = target.innerHTML.split('<br>');
    msgs.push(msg);
    target.innerHTML = msgs.join('<br>');
  }
};