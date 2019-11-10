import React from 'react';
import "react-dates/initialize";
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from "react-dates";

class BookingsForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            site_id: this.props.site_id,
            user_id: this.props.user_id,
            startDate: null,
            endDate: null
        };
    };

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    };

    render () {
        return (
            <div className='booking-form-container'>
                <form>
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
                </form>
            </div>
        );
    };
}

export default BookingsForm;