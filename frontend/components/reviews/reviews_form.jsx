import React from "react";
import { withRouter } from "react-router-dom";

class ReviewForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      recommend: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
  }

  handleInput() {
    return e => this.setState({ body: e.currentTarget.value });
  }

  handleYesClick() {
    return e => {
      this.setState({ recommend: true });
    };
  }

  handleNoClick() {
    return e => {
      this.setState({ recommend: false });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      site_id: this.props.site_id,
      body: this.state.body,
      recommend: this.state.recommend
    };

    if (this.props.currentUser) {
      this.props
        .createReview(this.props.site_id, review)
        .then(this.setState({ body: "" }));
    } else {
      this.props.openModal("signin");
    }
  }

  render() {
    return (
      <div className="review-form-container">
        <h3>Write a Review</h3>
        <form onSubmit={this.handleSubmit} className="review-form">
          <label>
            Would you recommend this listing?
            <div>
              <input
                type="radio"
                name="recommend"
                value={this.state.recommend}
                onClick={this.handleYesClick()}
                defaultChecked
              />{" "}
              Yes{" "}
              <input
                type="radio"
                name="recommend"
                value={this.state.recommend}
                onClick={this.handleNoClick()}
              />{" "}
              No
            </div>
          </label>
          <br />
          <textarea
            placeholder="Let others know about your stay..."
            cols="50"
            rows="5"
            value={this.state.body}
            onChange={this.handleInput()}
            required
          />
          <br />
          <input
            className="review-submit"
            type="submit"
            onClick={this.handleSubmit}
            value="Add Review"
          />
        </form>
      </div>
    );
  }
}

export default withRouter(ReviewForm);
