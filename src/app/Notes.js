import React from 'react';
function Notes(props) {
    return (
        <div className='App-section'>
            <div className='App-section-slice col-one-third slice-first'><code>src/index.js</code> is the JavaScript entry point and defines a relationship from 'root' element to 'App' component</div>
            <div className='App-section-slice col-one-third'><code>src/index.js</code> The 'App' component is defined in and imported from <code>src/containers/App.js</code> which defines the 'App' component html in its render implementation.</div>
            <div className='App-section-slice col-one-third'><code>public/index.html</code> Defines a 'root' element for React to use.</div>
        </div>
    );
}
export default Notes;
/**
 * move refactor
 *      minimax.nextmove refactor
 *      game.makemove
 *      game.handlenext (also uses minimax above)
 *      game.getStatus (uses move)
 *
 *  Testing git....
 */