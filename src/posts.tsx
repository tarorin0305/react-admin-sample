import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, EditButton, Edit, Create, SimpleForm, ReferenceInput, SelectInput, TextInput } from 'react-admin';

const PostTitle = ({ record }: { record: any}) => {
  return <span>Post {record ? `"${record.title}"` : ''}</span>;
}

const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
    <SelectInput optionText="name"/>
  </ReferenceInput>
];

export const PostList = (props: any) => (
  <List filters={postFilters} {...props}>
    <Datagrid>
      <TextField source="id" />
      <ReferenceField source="userId" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <TextField source="title" />
      <EditButton />
    </Datagrid>
  </List>
)

export const PostEdit = (props: any) => (
  <Edit title={<PostTitle record={undefined} />} {...props}>
    <SimpleForm>
      <TextInput disabled source="id"/>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="title"/>
      <TextInput multiline source="body"/>
    </SimpleForm>
  </Edit>
)

export const PostCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput disabled source="id"/>
      <ReferenceInput source="userId" reference="users">
        <SelectInput optionText="name"/>
      </ReferenceInput>
      <TextInput source="title"/>
      <TextInput multiline source="body"/>
    </SimpleForm>
  </Create>
)