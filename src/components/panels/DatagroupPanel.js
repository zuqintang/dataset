import React from "react";
import { Menu, Input, Segment } from "semantic-ui-react";
import ElementTable from "../tabels/ElementTable";

class DatasetPanel extends React.Component {
  state = { activeItem: "数据元" };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <style>{`
          .ui.tabular.menu {
            margin:0;
          }
        `}</style>
        <Menu tabular>
          <Menu.Item
            name="数据元"
            active={activeItem === "数据元"}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position="right">
            <Menu.Item>
              <Input
                transparent
                icon={{ name: "search", link: true }}
                placeholder="搜索..."
              />
            </Menu.Item>
          </Menu.Menu>
        </Menu>
        <Segment attached="bottom">
          <ElementTable />
        </Segment>
      </div>
    );
  }
}

export default DatasetPanel;
