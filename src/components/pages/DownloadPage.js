import React from "react";
import PropTypes from "prop-types";
import { Segment, Label, Grid, List, Button, Form } from "semantic-ui-react";
import DatasetPanel from "../panels/DatasetPanel";

const options = [
  { key: 0, text: "请选择", value: "" },
  { key: 1, text: "检验标本号", value: "0" },
  { key: 2, text: "检验技师签名", value: "1" },
  { key: 3, text: "检验报告备注", value: "2" },
  { key: 4, text: "检验报告单编号", value: "3" }
];

class Download extends React.Component {
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
              <Form>
                <Form.Input type="file" />
                <Button primary>预览</Button>
                <Button primary>导出</Button>
              </Form>
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
Download.propTypes = {
  search: PropTypes.func.isRequired
};

export default Download;
