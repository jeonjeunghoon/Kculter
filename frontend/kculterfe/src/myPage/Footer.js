import React from 'react';
import {Row, Col} from "react-bootstrap";
import './Footer.css';

function Footer() {
    function thisYear() {
        const year = new Date().getFullYear();
        return year
    };

    return (
        <div id="main-footer" className="text-center p-5">
            <Row>
                <Col>
                    <p>
                        Copyright &copy; <span>{thisYear()}</span>
                    </p>
                </Col>
            </Row>
        </div>
    )
};

export default Footer;