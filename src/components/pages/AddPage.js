import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import AddDatasetForm from "../forms/AddDatasetForm";
import { save } from "../../actions/dataset";

class AddPage extends React.Component {
  submit = data =>
    this.props.save(data).then(() => this.props.history.push("/dataset"));

  render() {
    return (
      <Grid>
        <Grid.Column width={6}>
          <h4>新增数据集</h4>
          <AddDatasetForm submit={this.submit} />
        </Grid.Column>
      </Grid>
    );
  }
}

AddPage.propTypes = {
  save: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default connect(null, { save })(AddPage);
