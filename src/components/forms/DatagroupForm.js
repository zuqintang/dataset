import React from "react";
import PropTypes from "prop-types";
import { Menu, Input } from "semantic-ui-react";

const options = [
  { key: 0, text: "请选择", value: "0" },
  { key: 1, text: "国标", value: "1" },
  { key: 2, text: "企标", value: "2" },
  { key: 3, text: "专用-病种名称", value: "3" },
  { key: 4, text: "通用-人口信息学", value: "4" }
];

class DatagroupForm extends React.Component {
  state = {
    data: this.props.param,
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
      <Menu.Menu position="right">
        <Menu.Item>
          <Input
            name="keyword_need_encode"
            value={data.keyword_need_encode}
            onChange={this.handleInputChange}
            transparent
            loading={loading}
            icon={{ name: "search", link: true, onClick: this.onSubmit }}
            placeholder="搜索..."
          />
        </Menu.Item>
      </Menu.Menu>
    );
  }
}

DatagroupForm.propTypes = {
  setParam: PropTypes.func.isRequired,
  submit: PropTypes.func.isRequired
};

export default DatagroupForm;
