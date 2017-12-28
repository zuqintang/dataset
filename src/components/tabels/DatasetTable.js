import React from "react";
import PropTypes from "prop-types";
import { Table, Dimmer, Loader } from "semantic-ui-react";
import SetRows from "../rows/SetRows";
import Paginator from "../tools/Paginator";

class DatasetTable extends React.Component {
  state = { activeRow: 0, loading: false };
  search = searchParam => {
    this.setState({ active: true });
    this.props.submit(searchParam).then(() => this.setState({ active: false }));
  };
  handleRowClick = e => {
    if (this.state.activeRow === e.target.name) this.setState({ activeRow: 0 });
    else this.setState({ activeRow: e.target.name });
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
            <Table.Row>
              <Table.HeaderCell>数据集名称</Table.HeaderCell>
              <Table.HeaderCell>编码</Table.HeaderCell>
              <Table.HeaderCell>来源</Table.HeaderCell>
              <Table.HeaderCell>所属学科</Table.HeaderCell>
              <Table.HeaderCell>创建日期</Table.HeaderCell>
              <Table.HeaderCell>创建人</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <SetRows
              setData={data.rows}
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
                  total={data.total}
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

DatasetTable.propTypes = {
  submit: PropTypes.func.isRequired,
  data: PropTypes.shape({
    sumPage: PropTypes.number.isRequired,
    rows: PropTypes.array.isRequired
  }).isRequired,
  param: PropTypes.shape({
    studyTpId: PropTypes.string.isRequired,
    keyword_need_encode: PropTypes.string.isRequired,
    limit: PropTypes.number.isRequired,
    offset: PropTypes.number.isRequired
  }).isRequired
};

export default DatasetTable;
