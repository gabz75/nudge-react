import React from 'react';
import PropTypes from 'prop-types';

import {
  ReportNewPath,
} from 'routes';

import AbsoluteSpinner from 'components/absolute-spinner';
import RowReport from 'components/row-report';
import DropdownKebab from 'components/dropdown-kebab';
import { useNudgeApi } from 'hooks/use-nudge-api';
import { Card, Title } from './style';

function ListReportsWrapper({ children }) {
  return (
    <Card>
      <Card.Header>
        <Title>Today&apos;s Report</Title>
        <DropdownKebab>
          <DropdownKebab.Link to={ReportNewPath}>Add a report</DropdownKebab.Link>
        </DropdownKebab>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
}

ListReportsWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

function ListReports() {
  // hooks
  const { getMoodReports } = useNudgeApi();
  const {
    loading, data, networkStatus,
  } = getMoodReports({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });

  if (loading) {
    return (
      <ListReportsWrapper>
        <AbsoluteSpinner />
      </ListReportsWrapper>
    );
  }

  return (
    <ListReportsWrapper>
      {networkStatus === 4 && <AbsoluteSpinner />}
      { data.getMoodReports.map((moodReport) => <RowReport key={moodReport.id} moodReport={moodReport} />) }
    </ListReportsWrapper>
  );
}

export default ListReports;
