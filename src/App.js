import React, {Component} from 'react';
import './App.css';
import './assets/card.css';
import PokerHand from "./PokerHand";
import Card from "./assets/card";

class App extends Component{
    state = {
        cardsState: [
            {suit: "-", rank: "-", symbol: "-"},
            {suit: "-", rank: "-", symbol: "-"},
            {suit: "-", rank: "-", symbol: "-"},
            {suit: "-", rank: "-", symbol: "-"},
            {suit: "-", rank: "-", symbol: "-"},
        ]
    };

    cards = [
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "j",
        "q",
        "k",
        "a",
    ];

    cardSuits = [
        {
            'name': 'hearts',
            'symbol': '♥'
        },
        {
            'name': 'spades',
            'symbol': '♠'
        },
        {
            'name': 'clubs',
            'symbol': '♣'
        },
        {
            'name': 'diams',
            'symbol': '♦'
        }
    ];

    fullSet = [];
    currentHand = [];

    createCards = function () {
        this.fullSet = [];
        for (let i = 0; i < this.cards.length; i++) {
            this.cardSuits.map((obj, index) => {
                return this.fullSet.push({
                    suit: obj.name,
                    rank: this.cards[i],
                    symbol: obj.symbol
                })
            })
        }
    }

    getCard = function () {
        return this.fullSet.splice(this._randomCard(0, this.fullSet.length), 1)[0]
    }

    getCards = function (howMany) {
        this.currentHand = []
        for (let i = 0; i < howMany; i++) {
            this.currentHand.push(this.getCard())
        }

        return this.currentHand
    }

    _randomCard = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    changeCard = () => {
        this.createCards();
        this.getCards(5);
        const cards = [...this.state.cardsState];

        for (let i = 0; i < cards.length; i++) {
            let cardState = {...cards[i]};
            cardState = this.currentHand[i];
            cards[i].suit = cardState.suit;
            cards[i].rank = cardState.rank;
            cards[i].symbol = cardState.symbol;
        }
        console.log(this.state.cardsState)
        this.setState({cards:cards});

    };

    render() {
        let pokerHand = new PokerHand()

        return (
            <div className="App">
                <div className="App">
                    <div>
                        <button className='btn' onClick={this.changeCard}>New combination</button>
                    </div>
                    <div className='art'>
                        { this.state.cardsState.map(function (obj, ind) {
                            return (<div key={ind} className="playingCards faceImages list">
                                <Card className={"card rank-" + obj.rank + " " + obj.suit}
                                      suit={obj.symbol} rank={obj.rank.toUpperCase()}/>
                            </div>)})}
                    </div>
                    <p className="result">
                    {pokerHand.getOutcome(this.state.cardsState)}
                    </p>
                </div>
            </div>
        );
    }
}


export default App;
