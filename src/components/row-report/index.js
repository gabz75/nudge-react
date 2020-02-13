import React from 'react';
import Moment from 'react-moment';
import Octicon, { Pencil } from '@primer/octicons-react';
import { useHistory } from 'react-router-dom';

import PropTypesMoodReport from 'prop-types/mood-report';
import DropdownKebab from 'components/dropdown-kebab';
import { ButtonLink } from 'components/button';
import { reportUpdatePath } from 'routes';
import {
  Wrapper,
  MoodReportDate,
  MoodReportScore,
} from './style';

function RowReport({ moodReport }) {
  // hooks
  const history = useHistory();

  // handlers
  const handleEdit = () => history.push(reportUpdatePath(moodReport.id));

  return (
    <Wrapper>
      <MoodReportDate>
        <Moment date={moodReport.date} format="DD/MM/YYYY" />
      </MoodReportDate>
      <MoodReportScore>{`${moodReport.score}/10`}</MoodReportScore>
      <DropdownKebab>
        <ButtonLink onClick={handleEdit}>
          Edit
          <Octicon icon={Pencil} />
        </ButtonLink>
      </DropdownKebab>
    </Wrapper>
  );
}

RowReport.propTypes = {
  moodReport: PropTypesMoodReport.isRequired,
};

export default RowReport;
