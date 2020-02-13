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
        value {
          ... on GoalValueInt {
            intValue: value

          }
          ... on GoalValueBool {
            boolValue: value
          }
        }
      }
    }
  }
`;
