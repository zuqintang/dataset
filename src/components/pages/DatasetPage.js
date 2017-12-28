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
        <Grid.Row columns={2}>
          <Grid.Column width={3}>
            <Sticky context={contextRef}>
              <Segment raised>
                <Label as="a" color="teal" ribbon>
                  筛选条件
                </Label>
                <DatasetForm submit={this.submit} setParam={this.setParam} />
              </Segment>
              <Segment raised>
                <Label as="a" color="teal" ribbon>
                  操作面板
                </Label>
                <DatasetTool />
              </Segment>
            </Sticky>
          </Grid.Column>
          <Grid.Column width={13}>
            <div ref={this.handleContextRef}>
              <DatasetTable
                data={this.state.data}
                submit={this.submit}
                param={param}
              />
            </div>
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
