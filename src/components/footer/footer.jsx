import React, { Component } from 'react';
import { Grid, Image, GridRow } from "semantic-ui-react"
import "./footer.css"
import linkedIn from "../../assets/linkedin.svg"
import fB from "../../assets/facebook.png"
import Insta from "../../assets/insta.svg"
import Twitter from "../../assets/twitter.svg"
class FooterRms extends Component {
    constructor() {
        super();
        this.state = {}
    }
    render() {
        return (
            <div className="rms-footer">
                <Grid >
                    <Grid.Row></Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer={1} mobile={2}></Grid.Column>
                        <Grid.Column computer={6} mobile={14} textAlign="justified">
                            <Grid.Row >
                                <p className="rms-footer-main">Mechanical & Industrial Engineering Department, IIT Roorkee 247667 , Uttarakhand, India</p>
                            </Grid.Row>
                            <Grid.Row>
                                <p className="rms-footer-number-1"><span id="rms-footer-number-sign">P </span>1234567890</p>
                            </Grid.Row>
                            <Grid.Row>
                                <p className="rms-footer-number-2"><span id="rms-footer-number-sign">M </span>1234567890</p>
                            </Grid.Row>

                            <Grid as="div" className="rms-footer-social-links">
                                <Grid.Column width={1} className="rms-footer-social"><a href=""><img src={linkedIn} width="25px" /></a></Grid.Column>
                                <Grid.Column width={1} className="rms-footer-social-fb"><a href=""><img src={fB} width="14px" /></a></Grid.Column>
                                <Grid.Column width={1} className="rms-footer-social"><a href=""><img src={Twitter} width="25px" /></a></Grid.Column>
                                <Grid.Column width={1} className="rms-footer-social-in"><a href=""><img src={Insta} width="25px" /></a></Grid.Column>
                                <Grid.Column></Grid.Column>
                            </Grid>

                        </Grid.Column>
                        <Grid.Column computer={1}></Grid.Column>
                        <Grid.Column computer={8}></Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid>
                    <Grid.Column computer={1}></Grid.Column>
                    <Grid.Column computer={10} ><p className="rms-footer-copyright">© Copyright 2018 |Team IIT Roorkee MotorSports | All Rights Reserved </p>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

export default FooterRms;