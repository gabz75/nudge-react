export default `
  mutation(
    $score: Int!,
    $doing: String!,
    $feelings: String!,
    $date: DateTime!,
    $goalValues: [GoalValueInput]
  ) {
    createMoodReport(
      score: $score,
      doing: $doing,
      feelings: $feelings,
      date: $date,
      goalValues: $goalValues
    ) {
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
