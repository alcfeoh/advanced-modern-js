let target = document.getElementById( 'output' );

const logger = {
  log: function (msg) {
    let msgs = target.innerHTML.split('<br>');
    msgs = msgs.slice(-2);
    msgs.push(msg);
    target.innerHTML = msgs.join('<br>');
  }
}

export { logger };