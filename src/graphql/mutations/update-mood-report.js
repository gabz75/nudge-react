export default `
  mutation(
    $id: ID!,
    $score: Int!,
    $doing: String!,
    $feelings: String!,
    $date: DateTime!,
    $goalValues: [GoalValueInput]
  ) {
    updateMoodReport(
      id: $id,
      score: $score,
      doing: $doing,
      feelings: $feelings,
      date: $date,
      goalValues: $goalValues
    ) {
      id
    }
  }
`;
