import React from "react";
import { Table, Menu, Icon } from "semantic-ui-react";

class DataGroup extends React.Component {
  state = { activeItem: "数据集" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    return (
      <Table celled selectable stackable compact="very">
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell>数据元编码</Table.HeaderCell>
            <Table.HeaderCell>数据元名称</Table.HeaderCell>
            <Table.HeaderCell>数据类型</Table.HeaderCell>
            <Table.HeaderCell>创建日期</Table.HeaderCell>
            <Table.HeaderCell>创建人</Table.HeaderCell>
            <Table.HeaderCell>来源</Table.HeaderCell>
            <Table.HeaderCell>标准</Table.HeaderCell>
            <Table.HeaderCell>操作</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row textAlign="center">
            <Table.Cell>DE01.00.003.00.02</Table.Cell>
            <Table.Cell>检验标本号</Table.Cell>
            <Table.Cell>S1</Table.Cell>
            <Table.Cell>2014-10-29 15:02:48</Table.Cell>
            <Table.Cell>李晓云</Table.Cell>
            <Table.Cell>EPM</Table.Cell>
            <Table.Cell>企标</Table.Cell>
            <Table.Cell>
              <Menu size="mini">
                <Menu.Item as="a">详情 </Menu.Item>
                <Menu.Item as="a">关联</Menu.Item>
                <Menu.Item as="a">添加</Menu.Item>
              </Menu>
            </Table.Cell>
          </Table.Row>
          <Table.Row textAlign="center">
            <Table.Cell>DE01.00.003.00.02</Table.Cell>
            <Table.Cell>检验标本号</Table.Cell>
            <Table.Cell>S1</Table.Cell>
            <Table.Cell>2014-10-29 15:02:48</Table.Cell>
            <Table.Cell>李晓云</Table.Cell>
            <Table.Cell>EPM</Table.Cell>
            <Table.Cell>企标</Table.Cell>
            <Table.Cell>
              <Menu size="mini">
                <Menu.Item as="a">详情 </Menu.Item>
                <Menu.Item as="a">关联</Menu.Item>
                <Menu.Item as="a">添加</Menu.Item>
              </Menu>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="8">
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
    );
  }
}

export default DataGroup;
