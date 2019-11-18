import React, { Component } from 'react';

import Title from './Title';
import MainBoard from './MainBoard';
import SubmitAnswerForm from './SubmitAnswerForm';
import Notify from './Notify';

import { Container, Alert, Jumbotron } from 'react-bootstrap'

class Game extends Component {

    constructor(props) {
        super(props);
        this.input = React.createRef();
    }

    state = {
        moving: 20,
        word: ['test', 'test2', 'test3'],
        index: 0,
        isDone: false,
        score: 0,
        start: false
    }

    correctAnswer = <Alert variant="success">
        <Alert.Heading>Correct!</Alert.Heading>
    </Alert>;

    wrongAnswer = <Alert variant="danger">
        <Alert.Heading>Wrong!</Alert.Heading>
    </Alert>;

    success = ()=> (<Alert variant="success">
        <Alert.Heading>Well Done!</Alert.Heading>
        <hr />
        <p>You passed! Your score is: {this.state.score} / 3</p>
    </Alert>);

    failed = () => ( <Alert variant="danger">
        <Alert.Heading>Oooppss!!! better luck next time!</Alert.Heading>
        <hr />
        <p>You failed! Your score is: {this.state.score} / 3</p>
    </Alert> );

    startGame = () => {
        this.setState(() => ({
            start: true
        }))

        this.dropping = setInterval(() => {
            if (!this.state.isDone) {
                this.setState(prevState => ({
                    moving: prevState.moving + 20
                }))

                if (this.state.moving === 520) {
                    if (this.state.index === this.state.word.length - 1) {
                        this.setState(prevState => ({
                            moving: 200,
                            index: 0,
                            isDone: true
                        }))
                    } else {
                        if (!this.state.isDone) {
                            this.setState(prevState => ({
                                moving: 20,
                                index: prevState.index + 1
                            }))
                            this.input.current.value = "";
                        }
                    }
                }
            } else {
                clearInterval(this.dropping);
            }
        }
            , 500);
    }

    checkAnswer = (event) => {
        event.preventDefault();
        if (!this.state.isDone) {
            if (this.state.word[this.state.index].toLowerCase() === this.input.current.value.toLowerCase()) {
                this.setState(prevState => ({
                    score: prevState.score + 1,
                    moving: 20,
                    index: prevState.index + 1
                }))
                this.input.current.value = "";
                this.notify = this.correctAnswer;
                if (this.state.index === this.state.word.length - 1) {
                    this.setState(prevState => ({
                        isDone: true,
                        moving: 200
                    }))
                }
            } else {
                this.notify = this.wrongAnswer;
                this.input.current.value = "";
            }
        } else {
            this.input.current.value = "";
        }
    }

    render() {
        let movingPart;

        if (!this.state.start) {
            movingPart = <text x="35" y="70" className="txtSvg">Click Start Game!</text>;
        } else {
            if (!this.state.isDone) {
                movingPart = <text x="150" y={this.state.moving + 50} className="txtSvg">{this.state.word[this.state.index]}</text>;
            } else {
                movingPart = <text x="50" y="250" className="txtSvg" >Game Over!!!</text>;
                if (this.state.score > 1) {
                    this.notify = this.success();
                } else {
                    this.notify = this.failed();
                }
            }
        }

        return (
            <div>
                <Container>
                    <Jumbotron>
                        <Title />
                        <MainBoard
                            moving={this.state.moving}
                            movingPart={movingPart}
                        />
                        <SubmitAnswerForm
                            start={this.state.start}
                            startGame={this.startGame}
                            checkAnswer={this.checkAnswer}
                            input={this.input}
                        />
                        <Notify notifyScore={this.notify}/>
                    </Jumbotron>
                </Container>
            </div>
        );
    }
}



export default Game;