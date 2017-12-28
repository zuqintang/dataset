import React from "react";
import { Menu, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

class Paginator extends React.Component {
  state = { current: 1, activeItem: 1 };
  onClick = e => {
    this.setState({
      current: parseInt(e.target.text, 10),
      activeItem: parseInt(e.target.text, 10)
    });
    const param = this.props.param;
    const offset = (e.target.text - 1) * param.limit;
    const data = { ...this.props.param, offset };
    this.props.onPageSubmit(data);
  };
  onPreClick = () => {
    if (this.state.current > 1) {
      this.setState({
        current: this.state.current - 1,
        activeItem: this.state.current - 1
      });
      const param = this.props.param;
      const offset = (this.state.current - 2) * param.limit;
      const data = { ...this.props.param, offset };
      this.props.onPageSubmit(data);
    }
  };
  onSufClick = () => {
    if (this.state.current < this.props.sumPage) {
      this.setState({
        current: this.state.current + 1,
        activeItem: this.state.current + 1
      });
      const param = this.props.param;
      const offset = this.state.current * param.limit;
      const data = { ...this.props.param, offset };
      this.props.onPageSubmit(data);
    }
  };
  render() {
    const { sumPage } = this.props;
    const { current, activeItem } = this.state;
    return (
      <Menu floated="right" pagination>
        <Menu.Item as="a" icon onClick={this.onPreClick}>
          <Icon name="left chevron" />
        </Menu.Item>
        <Menu.Item as="a" icon onClick={this.onClick} active={activeItem === 1}>
          1
        </Menu.Item>

        {sumPage >= 8 && current > 4 && <Menu.Item>...</Menu.Item>}
        {((sumPage >= 2 && sumPage < 8) || (sumPage >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 2}
          >
            2
          </Menu.Item>
        )}

        {sumPage >= 8 &&
          current >= sumPage - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === sumPage - 4}
            >
              {sumPage - 4}
            </Menu.Item>
          )}
        {sumPage >= 8 &&
          current > 4 &&
          current < sumPage - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === current - 1}
            >
              {current - 1}
            </Menu.Item>
          )}

        {((sumPage >= 3 && sumPage < 8) || (sumPage >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 3}
          >
            3
          </Menu.Item>
        )}

        {sumPage >= 8 &&
          current > sumPage - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === sumPage - 3}
            >
              {sumPage - 3}
            </Menu.Item>
          )}
        {sumPage >= 8 &&
          current > 4 &&
          current <= sumPage - 3 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === current}
            >
              {current}
            </Menu.Item>
          )}
        {((sumPage >= 4 && sumPage < 8) || (sumPage >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 4}
          >
            4
          </Menu.Item>
        )}

        {current > sumPage - 3 &&
          sumPage >= 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === sumPage - 2}
            >
              {sumPage - 2}
            </Menu.Item>
          )}
        {current > 4 &&
          current <= sumPage - 3 &&
          sumPage >= 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === current + 1}
            >
              {current + 1}
            </Menu.Item>
          )}
        {((sumPage >= 5 && sumPage < 8) || (sumPage >= 8 && current <= 4)) && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === 5}
          >
            5
          </Menu.Item>
        )}

        {current > sumPage - 3 &&
          sumPage >= 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === sumPage - 1}
            >
              {sumPage - 1}
            </Menu.Item>
          )}
        {sumPage >= 8 &&
          current <= sumPage - 3 &&
          sumPage >= 8 && <Menu.Item>...</Menu.Item>}
        {sumPage >= 6 &&
          sumPage < 8 && (
            <Menu.Item
              as="a"
              icon
              onClick={this.onClick}
              active={activeItem === 6}
            >
              6
            </Menu.Item>
          )}

        {sumPage >= 7 && (
          <Menu.Item
            as="a"
            icon
            onClick={this.onClick}
            active={activeItem === sumPage}
          >
            {sumPage}
          </Menu.Item>
        )}
        <Menu.Item as="a" icon onClick={this.onSufClick}>
          <Icon name="right chevron" />
        </Menu.Item>
      </Menu>
    );
  }
}

Paginator.propTypes = {
  param: PropTypes.shape({}).isRequired,
  onPageSubmit: PropTypes.func.isRequired,
  sumPage: PropTypes.number.isRequired
};

export default Paginator;
