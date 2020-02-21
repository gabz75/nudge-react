export default `
  {
    getMoodReports {
      id
      score
      doing
      feelings
      date
      createdAt
      updatedAt
      goalValues {
        id
        intValue
        boolValue
      }
    }
  }
`;
