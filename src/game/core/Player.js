export class Player {
    constructor (props) {
        this.name= props.name
        this.mark= props.mark
        this.mode= props.mode ? props.mode : PlayerType.LOCAL
    }
    static initPlayers (playerData) {
        const players = []
        playerData.forEach(element => {
          const player = new Player ({name:element.name, mark:element.mark, mode:element.mode})
          players.push(player)
        });
        return players;
    }
    getName() { return this.name}
    getMark() { return this.mark}
    getMode() { return this.mode}
    setName(name) { this.name=name}
    setMark(mark) { this.mark=mark}
    setMode(mode) { this.mode=mode}
}
export const PlayerType = {
    LOCAL: 0,
    AI: 1,
    REMOTE: 2,
    props: [
        {name: 'Human', value: 0, code: 'F'},
        {name: 'AI', value: 1, code: 'C'},
        {name: 'Online', value: 2, code: 'O'}        
    ]
}
// class PlayerComponent extends Component {
//     constructor(props) {
//         super();
//         this.state = {
//             showNameMenu: false,
//             showMarkMenu: false,
//             showModeMenu: false,
//             player: props.player
//         }
//     }
//     showNameMenu = (event) => {
//         event.preventDefault();
//         this.setState({ showNameMenu: true }, () => {
//             document.addEventListener('click', this.closeNameMenu);
//         })
//     }
//     closeNameMenu = (event) => {this.setState({ showNameMenu: false}, () => {document.removeEventListener('click', this.closeNameMenu)});}    
//     showMarkMenu = (event) => {
//         event.preventDefault();
//         this.setState({ showMarkMenu: true }, () => {
//           document.addEventListener('click', this.closeMarkMenu);
//         });
//     }
//     closeMarkMenu = () => {
//         this.setState({ showMarkMenu: false }, () => {
//         document.removeEventListener('click', this.closeMarkMenu);
//         });
//     }
//     getNameMenu = () => {
//         return (
//             this.state.showNameMenu ? (
//               <div className="menu">
//                 <input defaultValue={this.props.player.name} autoFocus 
//                     onBlur={ (evt)=> {
//                         console.log('blurred ' + evt.target.value)
//                         this.props.onClickName (evt)
//                     }} />
//               </div>
//             ):(null)
//         )
//     }
//     getMarkMenu = () => {
//         return (
//             this.state.showMarkMenu
//             ? (
//               <div className="menu">
//                 <button className="menu-button" onClick={ (evt) => {
//                     this.props.onClickMark()}} value='X'>X</button>
//                 <button className="menu-button" onClick={this.props.onClickMark} value='O'>O</button>
//                 <button className="menu-button" onClick={
//                     this.props.onClickMark('z')
//                 } value='Z'>Z</button>
//               </div>
//             )
//             : (
//               null
//             )
//         )
//     }
//     getModeMenu = () => {
//         return (
//             this.state.showModeMenu ?
//             <ul>{PlayerType.props.map((element, index) => {
//                 const elMode = element.value
//                 return (
//                 <li key={elMode}><input type="radio" value={elMode} checked={this.state.mode === elMode} onChange={this.onClickMode} />{element.name}</li>)}
//             )}</ul> :
//             null
//         )
//     }
//     showModeMenu = (event) => {
//         event.preventDefault();
//         this.setState({showModeMenu: true }, () => { document.addEventListener('click', this.closeModeMenu)});
//     }
//     closeModeMenu = () => {
//         this.setState({ showModeMenu: false }, () => {
//             document.removeEventListener('click', this.closeModeMenu);
//         });
//     }
//     render() {
//       return (
//         <div>
//             <button onClick={this.showNameMenu}>{this.props.player.name}</button>
//             <button onClick={this.showMarkMenu}>{this.props.player.mark}</button>
//             <button onClick={this.showModeMenu}>{PlayerType.props[this.props.player.mode].name}</button>
//             {this.getNameMenu()}
//             {this.getMarkMenu()}
//             {this.getModeMenu()}
//         </div>
//       );
//     }
// }
// export default PlayerComponent;

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('PlayerComponent ComponentDidUpdate')
    // }
    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('player derived state - ' + nextProps + prevState)
    //     return prevState
    // }
