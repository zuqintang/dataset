import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Menu, Segment } from "semantic-ui-react";
import DatagroupTable from "../tabels/DatagroupTable";
import ElementTable from "../tabels/ElementTable";
import { searchSetChildren } from "../../actions/dataset";
import DatagroupForm from "../forms/DatagroupForm";
import { DATA_GROUP_TYPE, DATA_ELEMENT_TYPE } from "../../types";

class DatasetPanel extends React.Component {
  state = {
    param: {
      limit: 10,
      offset: 0,
      keyword: "",
      keyword_need_encode: "",
      datasetID: this.props.datasetID || 0,
      activeItem: DATA_GROUP_TYPE
    },
    data: {
      datagroupData: { sumPage: 0, rows: [] },
      elementData: { sumPage: 0, rows: [] }
    }
  };
  setParam = param => this.setState({ param });
  getParam = () => {
    const param = this.state.param;
    return param;
  };
  handleItemClick = (e, { id }) =>
    this.setState({ param: { ...this.state.param, activeItem: id } });
  searchSetChildren = param =>
    this.props.searchSetChildren(param).then(res =>
      this.setState({
        data: { ...this.state.data, [res.activeItem]: res.data }
      })
    );
  render() {
    const { data, param } = this.state;
    return (
      <div>
        <style>{`
          .ui.tabular.menu {
            margin:0;
          }
        `}</style>
        <Menu tabular>
          <Menu.Item
            name="数据组"
            id={DATA_GROUP_TYPE}
            active={param.activeItem === DATA_GROUP_TYPE}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="数据元"
            id={DATA_ELEMENT_TYPE}
            active={param.activeItem === DATA_ELEMENT_TYPE}
            onClick={this.handleItemClick}
          />
          <DatagroupForm
            submit={this.searchSetChildren}
            setParam={this.setParam}
            getParam={this.getParam}
          />
        </Menu>
        <Segment attached="bottom">
          {param.activeItem === DATA_GROUP_TYPE && (
            <DatagroupTable
              submit={this.searchSetChildren}
              getParam={this.getParam}
              data={data.datagroupData}
            />
          )}
          {param.activeItem === DATA_ELEMENT_TYPE && (
            <ElementTable
              submit={this.searchSetChildren}
              getParam={this.getParam}
              data={data.datagroupData}
            />
          )}
        </Segment>
      </div>
    );
  }
}

DatasetPanel.propTypes = {
  searchSetChildren: PropTypes.func.isRequired,
  datasetID: PropTypes.string.isRequired
};

export default connect(null, { searchSetChildren })(DatasetPanel);
