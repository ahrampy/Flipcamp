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
            <div>
                <label>First Name
                    <input
                        type="text"
                        value={this.state.first_name}
                        onChange={this.handleInput('first_name')}
                    />
                </label>
                <label>Last Name
                    <input
                        type="text"
                        value={this.state.last_name}
                        onChange={this.handleInput('last_name')}
                    />
                </label >
            </div > 
        } else {
            signups = null;
        }

        return (
            <div className="entry-form">
                <h2>{this.props.formType}</h2>
                <form>
                    {signups}
                    <label>Email
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button type="submit" onClick={this.handleSubmit}>{this.props.formType}</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default EntryForm;