import React from "react";
import { Button, Icon } from "semantic-ui-react";

const DatasetTool = () => (
  <Button.Group>
    <Button icon>
      <Icon name="add circle" />
    </Button>
    <Button icon>
      <Icon name="upload" />
    </Button>
    <Button icon>
      <Icon name="download" />
    </Button>
    <Button icon>
      <Icon name="trash outline" />
    </Button>
  </Button.Group>
);

export default DatasetTool;
