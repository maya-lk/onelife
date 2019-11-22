import React from 'react';
import Calendar from 'react-calendar';
import { TimePicker } from 'antd';

import ContactDetails from '../contact-details/contact-details.component';

import './consultations.styles.scss';

class Consultations extends React.Component {
    state = {
        date : new Date(),
        name : '',
        time : '12:00'
    }

    handleChange = event => {
        const { name , value } = event.target;

        this.setState({ [name] : value });
    }

    handleSubmit = async event => {
        event.preventDefault();

        //const { date , name , time } = this.state;

    }

    render(){
        const { date , name } = this.state;

        console.log('date' , date);
        return(
            <div className="consultationsWrap">
                <div className="container d-flex flex-wrap p-0">
                    <div className="consultation">
                        <h2>First <br/>consultation is free</h2>
                        <h3>limited for 30 minutes.</h3>
                        <div className="consultationCont">
                            <h4>Book your consultation:</h4>
                            <form className="googleCalenderWrap d-flex flex-wrap" onSubmit={this.handleSubmit}>
                                <div className="calenderWrap">
                                    <Calendar
                                        onChange={date => this.setState({ date })}
                                        activeStartDate={date}
                                        defaultValue={date}
                                    />
                                </div>
                                <div className="fieldWrap">
                                    <div className="form-group">
                                        <label htmlFor="fname">Name</label>
                                        <input 
                                            type="text"
                                            id="fname"
                                            className="form-control"
                                            name="fname"
                                            value={name}
                                            onChange={this.handleChange}
                                        />
                                    </div>

                                    <div className="d-flex row">
                                        <div className="form-group col-6">
                                            <label htmlFor="date">Date</label>
                                            <input 
                                                type="text"
                                                id="date"
                                                className="form-control"
                                                name="date"
                                                value={date}
                                            />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="time">Time</label>
                                            <TimePicker
                                                use12Hours
                                                onChange={(time, timeString) => this.setState({ time : time })}
                                                format="HH:mm:ss"
                                            />
                                            
                                        </div>
                                    </div>

                                    <div className="form-group btnWrap">
                                        <input type="submit" value="Submit" className="btn submitBtn" />
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                    <ContactDetails />
                </div>
            </div>
        )
    }
}

export default Consultations;