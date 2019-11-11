import React from 'react';
import "react-dates/initialize";
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from "react-dates";

class BookingForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            startDate: null,
            endDate: null,
            num_guests: this.props.max_guests
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    handleSubmit(e) {
        e.preventDefault();
        const booking = {
            site_id: this.props.site_id,
            check_in: this.state.startDate._d,
            check_out: this.state.endDate._d,
            num_guests: this.state.num_guests
        }
        debugger;

        this.props.createBooking(this.props.site_id, booking)
    }

    render () {
        return (
            <div className='booking-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <div id='date-range-picker-container'>
                        <DateRangePicker
                            startDate={this.state.startDate} 
                            startDateId="check-in"
                            endDate={this.state.endDate}
                            endDateId="check-out"
                            onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={focusedInput => this.setState({ focusedInput })}
                        />
                    </div>
                    <div className='booking-submit-button-container'>
                        <input className='booking-submit-button' type="submit" value="Book Now!"/>
                    </div>
                </form>
            </div>
        );
    };
}

export default BookingForm;