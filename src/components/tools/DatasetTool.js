import React from "react";
import PropTypes from "prop-types";
import { Menu, Button } from "semantic-ui-react";

const DatasetTool = props => (
  <Menu.Menu position="right">
    <Menu.Item>
      <Button basic circular icon="add circle" onClick={props.add} />
      <Button basic circular icon="trash outline" onClick={props.delete} />
      <Button basic circular icon="upload" onClick={props.upload} />
      <Button basic circular icon="download" onClick={props.download} />
    </Menu.Item>
  </Menu.Menu>
);

DatasetTool.propTypes = {
  add: PropTypes.func.isRequired,
  delete: PropTypes.func.isRequired,
  upload: PropTypes.func.isRequired,
  download: PropTypes.func.isRequired
};

export default DatasetTool;
