import React, {Component} from 'react';

class PokerHand extends Component {

    getOutcome = function (cardList) {

        let combo = [];
        let flash = [];

        for (let i = 0; i < cardList.length; i++) {
            combo.push(cardList[i].rank)
        }

        for (let i = 0; i < cardList.length; i++) {
            flash.push(cardList[i].symbol)
        }
        let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)

        if (findDuplicates(flash)[0] !== '-' && findDuplicates(flash).length === 4) {
            return 'Flush';
        }
        if (findDuplicates(combo).length === 1) {
            return 'One pair';
        }
        if (findDuplicates(combo).length > 1 && findDuplicates(findDuplicates(combo)).length === 0) {
            return 'Two pairs';
        }
        if (findDuplicates(findDuplicates(combo)).length === 1) {
            return 'Three of a kind';
        }
    }
}

export default PokerHand;


