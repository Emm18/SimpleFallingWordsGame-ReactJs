import React from 'react';

import {  Button, InputGroup, FormControl, Row, Col } from 'react-bootstrap'

const SubmitAnswerForm = (props) => {
    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                {!props.start
                    ? <Button variant="outline-secondary" onClick={props.startGame}>Start Game</Button>
                    : <div id="frmAnswer">
                        <form onSubmit={props.checkAnswer}>
                            <InputGroup className="mb-3">
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">Answer</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl
                                    aria-describedby="basic-addon1"
                                    ref={props.input}
                                />
                                <Button variant="outline-secondary" type="submit">Submit</Button>
                            </InputGroup>

                        </form>
                    </div>
                }
            </Col>
        </Row>

    );
}

export default SubmitAnswerForm;