import React from 'react';

import {Row, Col } from 'react-bootstrap';

const Notify = (props) => {
    return (
        <Row className="justify-content-md-center">
            <Col md="auto">
                <div id="correctWrongAnswer">
                    {props.notifyScore}
                </div>
            </Col>
        </Row>
    );
}

export default Notify;