import React from "react";
import { Form, Checkbox, Button, Segment } from "semantic-ui-react";

class LoginForm extends React.Component {
  state = { data: { email: "", password: "" } };
  handleChange = (e, { name, value }) =>
    this.setState({ data: { ...this.state.data, [name]: value } });
  render() {
    const { data } = this.state;
    return (
      <Segment inverted color="teal">
        <Form inverted>
          <Form.Field required>
            <label htmlFor="email">邮箱</label>
            <Form.Input
              placeholder=""
              name="email"
              value={data.email}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label htmlFor="password">密码</label>
            <Form.Input
              placeholder=""
              name="password"
              value={data.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <Checkbox label="记住密码" />
          </Form.Field>
          <Button.Group attached="bottom">
            <Button color="olive">登录</Button>
            <Button.Or />
            <Button>注册</Button>
          </Button.Group>
        </Form>
      </Segment>
    );
  }
}

export default LoginForm;
