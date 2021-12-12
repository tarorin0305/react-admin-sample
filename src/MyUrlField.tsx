import * as React from "react";
import { useRecordContext} from 'react-admin';

// {source: "value"}

const MyUrlField = ({ source }: { source: any }) => {
  const record = useRecordContext();
  return record ? (
    <a href={record[source]}>
      {record[source]}
    </a>
  ) : null;
}

export default MyUrlField;