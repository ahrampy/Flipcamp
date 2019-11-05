import React from 'react';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        .then(() => this.props.history.push('/'))
    }

    render() {
        let signups;
        if (this.props.formType === 'Sign Up') {
            signups = 
            <>
                <label className='entry-form-input-field'>First Name
                    <input
                        type="text"
                        value={this.state.first_name}
                        onChange={this.handleInput('first_name')}
                    />
                </label>
                <label className='entry-form-input-field'>Last Name
                    <input
                        type="text"
                        value={this.state.last_name}
                        onChange={this.handleInput('last_name')}
                    />
                </label >
            </ > 
        } else {
            signups = null;
        }

        return (
            <div className='entry-form-container'>
                <div className='entry-form'>
                    <h2>{this.props.formType}</h2>
                    <form>
                        {signups}
                        <label className='entry-form-input-field'>Email
                            <input
                                type='text'
                                value={this.state.email}
                                onChange={this.handleInput('email')}
                            />
                        </label>
                        <label className='entry-form-input-field'>Password
                            <input
                                type='password'
                                value={this.state.password}
                                onChange={this.handleInput('password')}
                            />
                            <div className='entry-form-button-container'>
                            <button
                                type='submit'
                                onClick={this.handleSubmit}>{this.props.formType}
                            </button>
                            </div>
                        </label>
                    </form>
                </div>
            </div>
        );
    }
}

export default EntryForm;