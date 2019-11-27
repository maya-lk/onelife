import React from 'react';
import { TimePicker , DatePicker } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import FullCalendar from '@fullcalendar/react';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import dayGridPlugin from '@fullcalendar/daygrid'

import { selectGoogleCalender , selectCalenderAPI } from '../../redux/common/common.selectors';

import ContactDetails from '../contact-details/contact-details.component';

import './consultations.styles.scss';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';

class Consultations extends React.Component {
    state = {
        date : null,
        name : '',
        time : '12:00'
    }

    handleChange = event => {
        const { name , value } = event.target;

        this.setState({ [name] : value });
    }

    handleDateChange = (date, dateString) => {
        this.setState({ date : date });
    }

    handleSubmit = async event => {
        event.preventDefault();

        //const { date , name , time } = this.state;

    }  

    render(){
        const { name } = this.state;
        const { googleCalender , calenderAPI } = this.props;

        return(
            <div className="consultationsWrap">
                <div className="container d-flex flex-wrap p-0">
                    <div className="consultation">
                        <h2>First <br/>consultation is free</h2>
                        <h3>limited for 30 minutes.</h3>
                        <div className="consultationCont">
                            <h4>Book your consultation:</h4>
                            <form className="googleCalenderWrap d-flex flex-wrap" onSubmit={this.handleSubmit}>
                                <div className="calenderWrap" >
                                    {
                                        (calenderAPI && googleCalender)?
                                        <FullCalendar
                                            plugins={[ dayGridPlugin , googleCalendarPlugin ]}
                                            googleCalendarApiKey={`${calenderAPI}`}
                                            events={
                                                { googleCalendarId: `${googleCalender}` , className : 'gcal-event' }
                                            }
                                        />
                                        : ''
                                    }                         
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
                                            <DatePicker onChange={this.handleDateChange} />
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

const mapStateToProps = createStructuredSelector({
    googleCalender : selectGoogleCalender,
    calenderAPI : selectCalenderAPI
})

export default connect(mapStateToProps)(Consultations);