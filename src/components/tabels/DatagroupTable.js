import React from "react";
import { Table, Menu, Icon, Dimmer, Loader } from "semantic-ui-react";
import DatagroupPanel from "../panels/DatagroupPanel";

class DataGroup extends React.Component {
  state = { activeRow: 0 };

  handleRowClick = e => {
    if (this.state.activeRow === e.target.attributes[0].value)
      this.setState({ activeRow: 0 });
    else this.setState({ activeRow: e.target.attributes[0].value });
  };
  render() {
    const { active, activeRow } = this.state;
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
            <Table.Row textAlign="center">
              <Table.Cell>
                通用-一般治疗处置记录-麻醉术后访视记录子集
              </Table.Cell>
              <Table.Cell name="HDSD00.06.05" onClick={this.handleRowClick}>
                HDSD00.06.05
              </Table.Cell>
              <Table.Cell>企标</Table.Cell>
              <Table.Cell>专用-病种名称</Table.Cell>
              <Table.Cell>2014-11-20 15:04:05</Table.Cell>
              <Table.Cell>李晓云</Table.Cell>
              <Table.Cell>
                <Menu size="mini">
                  <Menu.Item as="a">详情 </Menu.Item>
                  <Menu.Item as="a">关联</Menu.Item>
                  <Menu.Item as="a">添加</Menu.Item>
                </Menu>
              </Table.Cell>
            </Table.Row>
            {activeRow === "HDSD00.06.05" && (
              <Table.Row>
                <Table.Cell colSpan="8">
                  <DatagroupPanel />
                </Table.Cell>
              </Table.Row>
            )}
            <Table.Row textAlign="center">
              <Table.Cell>
                通用-一般治疗处置记录-麻醉术后访视记录子集
              </Table.Cell>
              <Table.Cell name="HDSD00.06.06" onClick={this.handleRowClick}>
                HDSD00.06.06
              </Table.Cell>
              <Table.Cell>企标</Table.Cell>
              <Table.Cell>专用-病种名称</Table.Cell>
              <Table.Cell>2014-11-20 15:04:05</Table.Cell>
              <Table.Cell>李晓云</Table.Cell>
              <Table.Cell>
                <Menu size="mini">
                  <Menu.Item as="a">详情 </Menu.Item>
                  <Menu.Item as="a">关联</Menu.Item>
                  <Menu.Item as="a">添加</Menu.Item>
                </Menu>
              </Table.Cell>
            </Table.Row>
            {activeRow === "HDSD00.06.06" && (
              <Table.Row>
                <Table.Cell colSpan="8">
                  <DatagroupPanel />
                </Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan="7">
                <Menu floated="right" pagination>
                  <Menu.Item as="a" icon>
                    <Icon name="left chevron" />
                  </Menu.Item>
                  <Menu.Item as="a">1</Menu.Item>
                  <Menu.Item as="a">2</Menu.Item>
                  <Menu.Item as="a">3</Menu.Item>
                  <Menu.Item as="a">4</Menu.Item>
                  <Menu.Item as="a" icon>
                    <Icon name="right chevron" />
                  </Menu.Item>
                </Menu>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </Dimmer.Dimmable>
    );
  }
}

export default DataGroup;
