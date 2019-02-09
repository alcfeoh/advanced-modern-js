let target = document.getElementById( 'output' );


const logColors = {
  log  : 'black',
  debug: 'lightgrey',
  info : 'blue',
  warn : 'orange',
  error: 'red'
};

const allMsgs = [];

const logger = {
  log: ( ...msg ) => {
    // Add the message(s) to allMsgs
    for ( let x = 0; x < msg.length; x++ ) {
      allMsgs.push( msg[ x ] );
    }

    const msgs = allMsgs.slice( -1 );
    target.innerHTML = msgs.join( '<br>' );
  },

  colorLog: ( msg, level = 'log', howMany = 'all' ) => {

    // Add the message to allMsgs
    const wrappedMsg = `<span style="color: ${logColors[ level ]}">${msg}</span>`;
    allMsgs.push( wrappedMsg );

    if ( howMany === 'all' ) {
      howMany = 0;
    } else {
      howMany = -howMany;
    }

    const msgs = allMsgs.slice( howMany );
    target.innerHTML = msgs.join( '<br>' );
  }
};

export { logger };