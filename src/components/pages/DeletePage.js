import React from "react";
import PropTypes from "prop-types";
import { Segment, Label, Grid, List, Form } from "semantic-ui-react";
import DatasetPanel from "../panels/DatasetPanel";

class DeletePage extends React.Component {
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
    return (
      <Grid>
        <Grid.Column width={5}>
          <Segment raised>
            <Label as="a" color="teal" ribbon>
              数据集信息
            </Label>
            <List divided selection>
              <List.Item>
                <Label color="blue" horizontal>
                  编码
                </Label>
                706
              </List.Item>
              <List.Item>
                <Label color="blue" horizontal>
                  来源
                </Label>
                企标
              </List.Item>
              <List.Item>
                <Label color="blue" horizontal>
                  所属学科
                </Label>
                通用
              </List.Item>
            </List>
          </Segment>
          <Segment raised>
            <Label as="a" color="teal" ribbon>
              操作
            </Label>
            <Form style={{ marginTop: "10px" }}>
              <Form.Group>
                <Form.Button color="brown">取关数据元</Form.Button>
                <Form.Button color="brown">取关数据集</Form.Button>
              </Form.Group>
              <Form.Button color="brown">删除数据集</Form.Button>
            </Form>
          </Segment>
        </Grid.Column>
        <Grid.Column width={11}>
          <DatasetPanel datasetID={706} />
        </Grid.Column>
      </Grid>
    );
  }
}
DeletePage.propTypes = {
  search: PropTypes.func.isRequired
};

export default DeletePage;
