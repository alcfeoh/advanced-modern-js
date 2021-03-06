let target =  document.getElementById( 'output' );

const logger = {
  log: ( ...msg ) => {
    let msgs = target.innerHTML.split( '<br>' );
    msgs = msgs.concat( msg );
    msgs = msgs.slice( -3 );
    target.innerHTML = msgs.join( '<br>' );
  },

  colorLog: (msg, level='log', howMany='all') => {
    const logColors = {
      log: 'black',
      debug: 'lightgrey',
      info : 'blue',
      warn : 'orange',
      error: 'red'
    };

    let msgs = target.innerHTML.split( '<br>' );
    const wrappedMsg = `<span style="color: ${logColors[ level ]}">${msg}</span>`;
    msgs.push( wrappedMsg );

    if (howMany === 'all') {
      howMany = 0;
    } else {
      howMany = -howMany;
    }
    msgs = msgs.slice( howMany );
    target.innerHTML = msgs.join( '<br>' );
  }
};

export { logger };