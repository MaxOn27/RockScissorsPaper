import React, {useState} from 'react';

import {Button} from '../../helpers/btn/btn';
import {ROCK, SCISSORS, PAPER, DRAW, PLAYER_WIN, COMPUTER_WIN} from '../../constants/constants';
import './style.css';


const RspGame = () => {

    const selection = [ROCK, PAPER, SCISSORS];

    const [select, setPlayersSelect] = useState({
        playerChoice: '',
        computerChoice: '',
        winner: '',
    });

    const [player, setPlayerWin] = useState(0);
    const [computer, setComputerWin] = useState(0);



    const PLAYERS_CHOICE = (choice) => {
        const choiceP1 = choice;
        const choiceP2 = selection[Math.floor(Math.random() * 3)];
        const winner = COMPARE_SELECTIONS(choiceP1, choiceP2);
        setPlayersSelect({
            playerChoice: choiceP1,
            computerChoice: choiceP2,
            winner,
        });
    }

    const COMPARE_SELECTIONS = (P1, P2) => {
        if (P1 === P2) {
            console.log(DRAW);
            return DRAW
        } else if (
            (P1 === PAPER && P2 === ROCK)
            ||
            (P1 === SCISSORS && P2 === PAPER)
            ||
            (P1 === ROCK && P2 === SCISSORS)
        ) {
            console.log(PLAYER_WIN);
            setPlayerWin(player + 1)
            return PLAYER_WIN;
        } else {
            console.log(COMPUTER_WIN);
            setComputerWin(computer + 1)
            return COMPUTER_WIN;
        }

    }

    if (!(select.playerChoice === '' && select.computerChoice === '')) {
        return (
            <div className='game-wrapper'>
                <span className="score">
                    <h1 className="playerCount">{player}</h1>
                    <h1>-</h1>
                    <h1 className="computerCount">{computer}</h1>
                </span>
                <span className='selection'>
                    <h3>{select.playerChoice}</h3>
                    <h3>{select.computerChoice}</h3>
                </span>
                <span className='btn-wrapper'>
                    <Button clicked={() => PLAYERS_CHOICE(ROCK)} class='btn'>ROCK</Button>
                    <Button clicked={() => PLAYERS_CHOICE(PAPER)} class='btn'>PAPER</Button>
                    <Button clicked={() => PLAYERS_CHOICE(SCISSORS)} class='btn'>SCISSORS</Button>
                </span>
            </div>
        );
    }


    return (
        <div className='game-wrapper'>
            <span className="score">
                <h1 className="playerCount">{player}</h1>
                <h1>-</h1>
                <h1 className="computerCount">{computer}</h1>
            </span>
            <span className='btn-wrapper'>
                <Button clicked={() => PLAYERS_CHOICE(ROCK)} class='btn'>ROCK</Button>
                <Button clicked={() => PLAYERS_CHOICE(PAPER)} class='btn'>PAPER</Button>
                <Button clicked={() => PLAYERS_CHOICE(SCISSORS)} class='btn'>SCISSORS</Button>
            </span>
        </div>
    );
};

export default RspGame;