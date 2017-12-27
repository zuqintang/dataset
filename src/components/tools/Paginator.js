import React from "react";
import { Menu, Icon } from "semantic-ui-react";

class Paginator extends React.Component {
  state = {};
  onClick = e => {
    const param = this.props.param;
    const offset = (e.target.text - 1) * param.limit;
    const data = { ...this.props.param, offset };
    console.log(data);
    this.props.onPageSubmit(data);
  };
  render() {
    return (
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon onClick={this.onClick}>
          <Icon name="left chevron" />
        </Menu.Item>
        <Menu.Item as="a" onClick={this.onClick}>
          1
        </Menu.Item>
        <Menu.Item as="a" onClick={this.onClick}>
          2
        </Menu.Item>
        <Menu.Item as="a" onClick={this.onClick}>
          3
        </Menu.Item>
        <Menu.Item as="a" onClick={this.onClick}>
          4
        </Menu.Item>
        <Menu.Item as="a" icon onClick={this.onClick}>
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    );
  }
}

export default Paginator;
