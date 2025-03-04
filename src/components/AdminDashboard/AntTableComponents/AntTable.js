import React, { useState, useEffect } from 'react';
import { Table, Space, Divider } from 'antd';
import axios from 'axios';
import { getData } from '../../../utils/DashboardHelperFunctions';
import CompleteIncident from '../CompleteIncident';
import { DateTime } from 'luxon';

//https://ant.design/components/table/ <---documentation on the table

function AntTable(props) {
  const [incidents, setIncidents] = useState([]);
  const [selectionType, setSelectionType] = useState('checkbox');
  const [approvedSelected, setApprovedSelected] = useState([]);
  const {
    unapprovedIncidents,
    setUnapprovedIncidents,
    approvedIncidents,
    formResponses,
    selected,
    setSelected,
    setCurrList,
  } = props;
  function formattingDate(inputData) {
    const [year, month, day] = inputData.incident_date.split('-');
    return `${month}/${day.slice(0, 2)}/${year}`;
  }

  const onSelect = selectedIncidents => {
    if (selected !== undefined) {
      setSelected(selectedIncidents);
    } else {
      setApprovedSelected(selectedIncidents);
    }
  };
  const columns = [
    //   //When DS provides data for this, uncomment for Admin Table to show %, and move.
    // {
    //   title: 'Accuracy Estimate',
    //   dataIndex: 'acc_estimate',
    //     key: 'acc_estimate',
    //     },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      fixed: 'top',
    },
    {
      title: 'City',
      dataIndex: 'city',
      key: 'city',
      align: 'left',
      fixed: 'top',
    },
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
      fixed: 'top',
    },
    {
      title: 'Date',
      dataIndex: 'incident_date',
      key: 'incident_date',
      fixed: 'top',
      defaultSortOrder: 'descend',
      sorter: (a, b) => {
        let aTime = DateTime.fromISO(a.incident_date.slice(0.1));
        let bTime = DateTime.fromISO(b.incident_date.slice(0, 10));

        return aTime - bTime;
      },
    },
  ];

  // provides which list of data to used based on props passed when button on the admin is pressed
  let listToUse = [];
  if (unapprovedIncidents) {
    listToUse = unapprovedIncidents;
    setCurrList(unapprovedIncidents);
  } else if (approvedIncidents) {
    listToUse = approvedIncidents;
  } else {
    listToUse = formResponses;
    setCurrList(formResponses);
  }

  return (
    <div>
      <Table
        columns={columns}
        dataSource={listToUse}
        rowKey={'incident_id'}
        expandable={{
          expandedRowRender: incident => {
            incident.src = Object.values(incident.src); //changes structure of payload returned from initial GET request to match other listTypes' payload structure
            incident.tags = Object.values(incident.tags); //changes structure of payload returned from initial GET request to match other listTypes' payload structure
            return (
              <CompleteIncident
                incident={incident}
                formattedDate={formattingDate(incident)}
                getData={getData}
                setUnapprovedIncidents={setUnapprovedIncidents}
              />
            );
          },
          rowExpandable: data => data.id !== null,
        }}
        rowSelection={{
          selectedRowKeys: selected !== undefined ? selected : approvedSelected,
          onChange: onSelect,
        }}
        pagination={{
          position: ['topRight', 'bottomCenter'],
          total: listToUse ? listToUse.length : 0,
          showTotal(total, range) {
            return `${range[0]}-${range[1]} of ${total} items`;
          },
        }}
      />
    </div>
  );
}

export default AntTable;
