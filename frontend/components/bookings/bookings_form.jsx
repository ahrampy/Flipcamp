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
            num_guests: 'Guests'
        };
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    handleChange(event) {
        this.setState({ num_guests: event.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const booking = {
            site_id: this.props.site_id,
            check_in: this.state.startDate._d,
            check_out: this.state.endDate._d,
            num_guests: this.state.num_guests
        }

        this.props.createBooking(this.props.site_id, booking)
    }

    render () {

        const guests = []

        for (let i = 1; i <= this.props.max_guests; i++) {
            guests.push(i)
        }

        let subimtButtonValue = "Instant Book";

        if (this.props.bookings) {
            this.props.bookings.forEach(booking => {
                if (booking.user_id === currentUser.id) {
                    subimtButtonValue = "Booked!"
                }
            })
        }

        return (
            <div className='booking-form-container'>
                <form onSubmit={this.handleSubmit} className='booking-form'>
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
                    <div className='booking-form-guest-select-container'>
                        <select
                            value={this.state.num_guests}
                            onChange={this.handleChange}
                            name="Guests" className='booking-form-guest-select'>
                            <option value="Guests" disabled="disabled">Guests</option>
                            {guests.map(count => (
                                <option key={count} value={count}>{count}</option>
                            ))}
                        </select>
                    </div>
                    <div className='booking-submit-button-container'>
                        <input
                            className='booking-submit-button'
                            type="submit"
                            value={subimtButtonValue}
                        />
                    </div>
                </form>
            </div>
        );
    };
}

export default BookingForm;