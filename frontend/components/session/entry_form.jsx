import React from 'react';

class EntryForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
    }

    render() {
        return (
            <div className="entry-form">
                <h2>{this.props.action}</h2>
                <form>
                    <label>Email:
                        <input
                            type="text"
                            value={this.state.email}
                            onChange={this.handleInput('email')}
                        />
                    </label>
                    <label>Password:
                        <input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInput('password')}
                        />
                        <button onClick={this.handleSubmit}>{this.props.action}</button>
                    </label>
                </form>
            </div>
        );
    }
}

export default EntryForm;