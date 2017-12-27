import React from "react";
import { connect } from "react-redux";
import { Segment, Label, Grid, Sticky } from "semantic-ui-react";
import DatasetForm from "../forms/DatasetForm";
import DatasetTable from "../tabels/DatasetTable";
import { search } from "../../actions/dataset";
import DatasetTool from "../tools/DatasetTool";

class DatasetPage extends React.Component {
  state = {
    setData: [],
    param: {}
  };
  setParam = param => this.setState({ param });
  submit = data =>
    this.props.search(data).then(res => this.setState({ setData: res.rows }));
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
                setData={this.state.setData}
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

export default connect(null, { search })(DatasetPage);
