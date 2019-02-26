import React, { Component } from 'react';

let isReceivedScore = false;
let tempCorrectAnswers = 0;
let finalScore = 0;


export default class GameService extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    static waitNewQuestion(isNewQuestion){
        if(isNewQuestion)
        {
            // pas de serveur
        }
    }

    static getProgressiveScore(partialScore){
        let tempCorrectAnswers = partialScore;
        console.log("tempCorrectAnswers :"+tempCorrectAnswers);

        if(tempCorrectAnswers != 0) {
            console.log("tempCorrectAnswers :"+tempCorrectAnswers);
            GameService.getFinalScore(tempCorrectAnswers);
        }
    }

    static getFinalScore(tempCorrectAnswers){
        console.log("finalScore ::::::" );

        if(tempCorrectAnswers)
        { finalScore = finalScore + tempCorrectAnswers;
            console.log("finalScore :" +finalScore);
        }
        return finalScore;
    }

    static checkGameIsFinished(isGameFinished, finalScore){
        // pas de serveur
        // this.props.navigation.navigate('GameIsFinishedView', {finalScore: finalScore}););
    }
}
