import React from 'react';

import {  Row, Col } from 'react-bootstrap'

const MainBoard = (props) => {
    return (
        <>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <div id="board">
                        <svg width="400" height="500" id="svgBoard">
                            <rect width="400" height="500" />
                            <g>
                                <rect x="25" y={props.moving} rx="20" ry="20" width="350" height="75" id="movingPart" />
                                {props.movingPart}
                            </g>
                            Sorry, your browser does not support inline SVG.
        </svg>
                    </div>
                </Col>
            </Row>
            <br />
        </>
    );

}

export default MainBoard;