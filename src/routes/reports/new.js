import React from 'react';
import { useHistory } from 'react-router-dom';

import { ReportsPath } from 'routes';

import AbsoluteSpinner from 'components/absolute-spinner';
import FormReport from 'components/form-report';
import { useNudgeApi } from 'hooks/use-nudge-api';
import { ResponsiveCenteredLayout } from 'components/globals';

function ReportNewRoute() {
  // hooks
  const { getGoals, createMoodReport } = useNudgeApi();
  const {
    loading, data,
  } = getGoals({ notifyOnNetworkStatusChange: true, fetchPolicy: 'cache-and-network' });
  const history = useHistory();

  // handlers
  const handleSubmit = async (moodReportInput) => {
    await createMoodReport({ variables: { ...moodReportInput, date: new Date() } });
    history.push(ReportsPath);
  };

  if (loading) {
    return (
      <ResponsiveCenteredLayout>
        <AbsoluteSpinner />
      </ResponsiveCenteredLayout>
    );
  }

  const moodReport = {
    goalValues: data.getGoals.map((goal) => ({ goal })),
  };

  return (
    <ResponsiveCenteredLayout>
      <FormReport moodReport={moodReport} onSubmit={handleSubmit} />
    </ResponsiveCenteredLayout>
  );
}

export default ReportNewRoute;
