import React from "react";
import { List, Table, Label } from "semantic-ui-react";
import DatasetPanel from "../panels/DatasetPanel";

function SetRows(props) {
  const rows = props.setData;
  const activeRow = props.activeRow;
  const SetRowsList = rows.map(row => (
    <Table.Row key={row.ID}>
      {activeRow !== row.DS_CODE && (
        <Table.Cell singleLine>
          <Label as="a" name={row.DS_CODE} onClick={props.handleRowClick}>
            {row.DS_NAME}
          </Label>
        </Table.Cell>
      )}
      {activeRow !== row.DS_CODE && (
        <Table.Cell>
          <Label as="a" name={row.DS_CODE} onClick={props.handleRowClick}>
            {row.DS_CODE}
          </Label>
        </Table.Cell>
      )}
      {activeRow !== row.DS_CODE && <Table.Cell>{row.STANDARD}</Table.Cell>}
      {activeRow !== row.DS_CODE && <Table.Cell>{row.STUDY_TYPE}</Table.Cell>}
      {activeRow !== row.DS_CODE && <Table.Cell>{row.CREATED_AT}</Table.Cell>}
      {activeRow !== row.DS_CODE && <Table.Cell>{row.CREATOR}</Table.Cell>}
      {activeRow === row.DS_CODE && (
        <Table.Cell singleLine>
          <Label
            as="a"
            name={row.DS_CODE}
            onClick={props.handleRowClick}
            color="teal"
            ribbon
          >
            {row.DS_NAME}
          </Label>
          <List>
            <List.Item>
              <List.Header>编码</List.Header>
              <Label>{row.DS_CODE}</Label>
            </List.Item>
            <List.Item>
              <List.Header>来源</List.Header>
              <Label>{row.STANDARD}</Label>
            </List.Item>
            <List.Item>
              <List.Header>所属学科</List.Header>
              <Label>{row.STUDY_TYPE}</Label>
            </List.Item>
            <List.Item>
              <List.Header>创建日期</List.Header>
              <Label>{row.CREATED_AT}</Label>
            </List.Item>
            <List.Item>
              <List.Header>创建人</List.Header>
              <Label>{row.CREATOR}</Label>
            </List.Item>
          </List>
        </Table.Cell>
      )}
      {activeRow === row.DS_CODE && (
        <Table.Cell colSpan={5}>
          <DatasetPanel />
        </Table.Cell>
      )}
    </Table.Row>
  ));
  return SetRowsList;
}

export default SetRows;
