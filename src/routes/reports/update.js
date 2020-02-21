import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import { ReportsPath } from 'routes';

import AbsoluteSpinner from 'components/absolute-spinner';
import FormReport from 'components/form-report';
import { useNudgeApi } from 'hooks/use-nudge-api';
import { ResponsiveCenteredLayout } from 'components/globals';

function ReportUpdateRoute(props) {
  // props
  const { match: { params } } = props;
  // hooks
  const { getMoodReport, updateMoodReport } = useNudgeApi();
  const history = useHistory();
  const { loading, data } = getMoodReport({ variables: { id: params.id } });

  // handlers
  const handleSubmit = async (variables) => {
    const args = {
      variables: {
        id: data.getMoodReport.id,
        date: data.getMoodReport.date,
        ...variables,
      },
    };
    await updateMoodReport(args).then(() => history.push(ReportsPath));
  };

  if (loading) {
    return (
      <ResponsiveCenteredLayout>
        <AbsoluteSpinner />
      </ResponsiveCenteredLayout>
    );
  }

  return (
    <ResponsiveCenteredLayout>
      <FormReport moodReport={data.getMoodReport} onSubmit={handleSubmit} />
    </ResponsiveCenteredLayout>
  );
}

ReportUpdateRoute.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default ReportUpdateRoute;
