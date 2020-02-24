import React from 'react';
import Board from './Board';

class Game extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            xTurn: true, /* person who plays as X will go first */
            turnNumber: 0, /* number is 0 at beginning nobody has played yet */
            history:[
                {squares: Array(9).fill(null)} /* created array of 9 to fill the board which is null because nobody has played yet */
            ]
        }
    }
    handleClick(i) {
        const history = this.state.history.slice(0,this.state.turnNumber+1)
        const current = history[history.length-1]
        const squares = current.squares.slice()
        squares[i] = this.state.xTurn?'X':'O'
        this.setState({
            history: history.concat({
                squares: squares
            }),
            xTurn: !this.state.xTurn,
        })
    }
    render() {
        const history = this.state.history;
        const current = history[this.state.turnNumber]

        return (
            <div className="game">
                <div className="game-board">
                    <Board onClick={(i)=>this.handleClick(i)}
                    squares={current.squares} />
                </div>
            </div>
        )
    }
}

export default Game;