import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Segment, Label, Grid, Sticky } from "semantic-ui-react";
import DatasetForm from "../forms/DatasetForm";
import DatasetTable from "../tabels/DatasetTable";
import { search } from "../../actions/dataset";
import DatasetTool from "../tools/DatasetTool";

class DatasetPage extends React.Component {
  state = {
    data: { rows: [], sumPage: 0 },
    param: {
      studyTpId: "",
      limit: 10,
      offset: 0,
      keyword: "",
      keyword_need_encode: ""
    }
  };
  setParam = param => this.setState({ param });
  submit = param =>
    this.props.search(param).then(res => this.setState({ data: res }));
  handleContextRef = contextRef => this.setState({ contextRef });
  render() {
    const { contextRef, param } = this.state;
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <Segment raised>
              <Label as="a" color="teal" ribbon>
                筛选条件
              </Label>
              <DatasetForm submit={this.submit} setParam={this.setParam} />
            </Segment>
          </Grid.Column>
          <Grid.Column width={4}>
            <Segment raised>
              <Label as="a" color="teal" ribbon>
                操作面板
              </Label>
              <DatasetTool />
            </Segment>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <DatasetTable
              data={this.state.data}
              submit={this.submit}
              param={param}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
DatasetPage.propTypes = {
  search: PropTypes.func.isRequired
};

export default connect(null, { search })(DatasetPage);
