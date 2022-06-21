import React, {useState, useEffect} from 'react'
import { imageCard } from './../../images';
import GameRound from './GameRound';
import Win from './Win';

function Game() {

    const [selected, setSelected] = useState([]);
    const [win, setWin] = useState(false);
    const [blockGame, setBlockGame] = useState(false);
    const [randomCards, setRandomCards] = useState([]);
    const [match, setMatch] =useState(true);

    const handleClick = (index) => {
        if(!blockGame){
            randomCards[index].flipped = true;
            setSelected([...selected, index])
        }
    };


    const resetGame = () => {
        const makeRandom = imageCard.sort(() => Math.random() - 0.5)
        const unflip = makeRandom.map(item => {
            item.flipped = false;
            item.found = false;
            return item;
        });
        setRandomCards(unflip)
        setSelected([])
        setWin(false);
    }
    
    useEffect(()=>{
        if(selected.length === 2 ){
            setBlockGame(true)
            randomCards[selected[0]]?.name === randomCards[selected[1]]?.name ? haveMatch() : noMatch(); 
        }
        if (randomCards.every(el => el.found)) {
            setWin(true)
        } 
    }, [selected])

    
    useEffect(()=>{
        resetGame();
    },[])

    const haveMatch = () => {
        randomCards[selected[0]].found = true;
        randomCards[selected[1]].found = true;
        setBlockGame(false)
        setSelected([])
        setMatch(true)
    } 

    const noMatch = () => {
        setTimeout(() => {
            randomCards[selected[0]].flipped = false;
            randomCards[selected[1]].flipped = false;
            setBlockGame(false)
            setSelected([])
        }, 1000)
    }
    
    return (
        !win ? <GameRound randomCards={randomCards} handleClick={handleClick}/> : <Win resetGame={resetGame}/>
    )
}

export default Game