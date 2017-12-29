import React from "react";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import Paginator from "../tools/Paginator";
import GroupRows from "../rows/GroupRows";

class DatagroupTable extends React.Component {
  state = { activeRow: 0, data: { rows: [] }, active: false };
  search = searchParam => {
    this.setState({ active: true });
    this.props.submit(searchParam).then(() => this.setState({ active: false }));
  };
  handleRowClick = e => {
    if (this.state.activeRow === e.target.attributes[0].value)
      this.setState({ activeRow: 0 });
    else this.setState({ activeRow: e.target.attributes[0].value });
  };
  render() {
    const { active, activeRow } = this.state;
    const { data, param } = this.props;
    return (
      <Dimmer.Dimmable>
        <Dimmer active={active} inverted onClickOutside={this.handleHide}>
          <Loader />
        </Dimmer>
        <Table celled selectable stackable compact="very">
          <Table.Header>
            <Table.Row textAlign="center">
              <Table.HeaderCell>数据组名称</Table.HeaderCell>
              <Table.HeaderCell>编码</Table.HeaderCell>
              <Table.HeaderCell>来源</Table.HeaderCell>
              <Table.HeaderCell>所属学科</Table.HeaderCell>
              <Table.HeaderCell>创建日期</Table.HeaderCell>
              <Table.HeaderCell>创建人</Table.HeaderCell>
              <Table.HeaderCell>操作</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <GroupRows
              data={data.rows}
              activeRow={activeRow}
              handleRowClick={this.handleRowClick}
            />
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
                <Paginator
                  onPageSubmit={this.search}
                  param={param}
                  sumPage={data.sumPage}
                />
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Dimmer.Dimmable>
    );
  }
}

DatagroupTable.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    sumPage: PropTypes.number.isRequired,
    rows: PropTypes.array.isRequired
  }).isRequired,
  param: PropTypes.shape({
    datasetID: PropTypes.number.isRequired,
    keyword: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired
  }).isRequired
};

export default DatagroupTable;
