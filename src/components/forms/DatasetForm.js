import React from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";

const options = [
  { key: 0, text: "请选择", value: "0" },
  { key: 1, text: "国标", value: "1" },
  { key: 2, text: "企标", value: "2" },
  { key: 3, text: "专用-病种名称", value: "3" },
  { key: 4, text: "通用-人口信息学", value: "4" }
];

class DatasetForm extends React.Component {
  state = {
    data: { studyTpId: "", keyword_need_encode: "", limit: 10, offset: 0 },
    loading: false
  };
  onSubmit = () => {
    this.setState({ loading: true });
    const searchParam = this.keywordEncode(this.state.data);
    this.props.setParam(searchParam);
    this.props
      .submit(searchParam)
      .then(() => this.setState({ loading: false }));
  };

  keywordEncode = data => {
    const searchParam = data;
    searchParam.keyword = encodeURIComponent(data.keyword_need_encode);
    return searchParam;
  };

  handleChange = (e, { value }) =>
    this.setState({ data: { ...this.state.data, studyTpId: value } });
  handleInputChange = e =>
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  render() {
    const { data, loading } = this.state;
    return (
      <Form size="mini" onSubmit={this.onSubmit} loading={loading}>
        <Form.Radio
          label="全部"
          value="all"
          checked={data.studyTpId === "all"}
          onChange={this.handleChange}
        />
        <Form.Radio
          label="通用型"
          value="common"
          checked={data.studyTpId === "common"}
          onChange={this.handleChange}
        />
        <Form.Radio
          label="专用型"
          value="special"
          checked={data.studyTpId === "special"}
          onChange={this.handleChange}
        />
        <Form.Select
          options={options}
          placeholder="请选择"
          value={data.studyTpId}
          onChange={this.handleChange}
        />
        <Form.Input
          name="keyword_need_encode"
          placeholder="搜索..."
          value={data.keyword_need_encode}
          onChange={this.handleInputChange}
        />
        <Form.Button size="mini">检索</Form.Button>
      </Form>
    );
  }
}

DatasetForm.propTypes = {
  setParam: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default DatasetForm;
