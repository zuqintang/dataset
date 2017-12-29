import React from "react";
import { connect } from "react-redux";
import { Menu, Input, Segment } from "semantic-ui-react";
import DatagroupTable from "../tabels/DatagroupTable";
import ElementTable from "../tabels/ElementTable";
import { searchElements, searchDatagroups } from "../../actions/dataset";
import DatagroupForm from "../forms/DatagroupForm";

class DatasetPanel extends React.Component {
  state = {
    param: {
      limit: 10,
      offset: 0,
      keyword: "",
      keyword_need_encode: "",
      datasetID: this.props.datasetID || 0
    },
    activeItem: "数据组",
    datagroupData: { sumPage: 0, rows: [] },
    elementData: { sumPage: 0, rows: [] }
  };
  setParam = param => this.setState({ param });
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  searchDatagroups = param =>
    this.props
      .searchDatagroups(param)
      .then(res => this.setState({ datagroupData: res }));
  searchElements = param =>
    this.props
      .searchElements(param)
      .then(res => this.setState({ elementData: res }));
  render() {
    const { activeItem, datagroupData, elementData, param } = this.state;
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
            active={activeItem === "数据组"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="数据元"
            active={activeItem === "数据元"}
            onClick={this.handleItemClick}
          />
          <DatagroupForm
            submit={this.searchDatagroups}
            setParam={this.setParam}
            param={param}
          />
        </Menu>
        <Segment attached="bottom">
          {activeItem === "数据组" && (
            <DatagroupTable
              submit={this.searchDatagroups}
              param={param}
              data={datagroupData}
            />
          )}
          {activeItem === "数据元" && (
            <ElementTable
              submit={this.searchElements}
              param={param}
              data={datagroupData}
            />
          )}
        </Segment>
      </div>
    );
  }
}

export default connect(null, { searchElements, searchDatagroups })(
  DatasetPanel
);
