import React from 'react';
import { TimePicker , DatePicker } from 'antd';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import API from '../../lib/api';

import { selectGoogleCalender , selectCalenderAPI } from '../../redux/common/common.selectors';

import ContactDetails from '../contact-details/contact-details.component';

import './consultations.styles.scss';

class Consultations extends React.Component {
    state = {
        date : null,
        fname : '',
        time : '12:00',
        error: null,
        success: null,
        contactNo: null,
        email : null , 
        reason : null
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

        const { date , fname , time , contactNo , email , reason } = this.state;

        if( date === '' || fname === '' || time === '' || contactNo === '' || email === '' || reason === '' ){
            this.setState({ error : 'All fields required.' });
        }else{
            const formData = new FormData();
            formData.append('date',date);
            formData.append('fname',fname);
            formData.append('time',time);
            formData.append('contactNo',contactNo);
            formData.append('email',email);
            formData.append('reason',reason);

            API.post("booking", formData)
            .then(response => {
                //console.log('response' , response.data);
                if( response.data.status ){
                    this.setState({ success: response.data.msg });
                }else{
                    this.setState({ error : response.data.msg });
                }

                this.setState({ date : '' , fname : '' , time : ''  });
            }).catch(err => {
                //console.log('err' , err);
            });
        }
    }  

    render(){
        const { fname , error , success , contactNo , email , reason } = this.state;

        return(
            <div className="consultationsWrap">
                <div className="container d-flex flex-wrap p-0">
                    <div className="consultation">
                        <h2>First <br/>consultation is free</h2>
                        <h3>limited for 30 minutes.</h3>
                        <div className="consultationCont">
                            <h4>Book your consultation:</h4>
                            <form className="googleCalenderWrap d-flex flex-wrap" onSubmit={this.handleSubmit}>
                                {
                                    (error)?
                                    <div className="alert alert-danger" role="alert">{error}</div>
                                    : (success)?
                                    <div className="alert alert-success" role="alert">{success}</div>
                                    : ''
                                }
                                <div className="fieldWrap">
                                    <div className="form-group">
                                        <label htmlFor="fname">Name</label>
                                        <input 
                                            type="text"
                                            id="fname"
                                            className="form-control"
                                            name="fname"
                                            value={fname}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="contactNo">Contact Number</label>
                                        <input 
                                            type="tel"
                                            id="contactNo"
                                            className="form-control"
                                            name="contactNo"
                                            value={contactNo}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email Address</label>
                                        <input 
                                            type="email"
                                            id="email"
                                            className="form-control"
                                            name="email"
                                            value={email}
                                            onChange={this.handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="d-flex row">
                                        <div className="form-group col-6">
                                            <label htmlFor="date">Date</label>
                                            <DatePicker onChange={this.handleDateChange} required />
                                        </div>
                                        <div className="form-group col-6">
                                            <label htmlFor="time">Time</label>
                                            <TimePicker
                                                use12Hours
                                                onChange={(time, timeString) => this.setState({ time : time })}
                                                format="HH:mm:ss"
                                                required
                                            />
                                            
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="reason">Reason to call back</label>
                                        <textarea 
                                            id="reason"
                                            className="form-control"
                                            name="reason"
                                            value={reason}
                                            onChange={this.handleChange}
                                            required
                                        />
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