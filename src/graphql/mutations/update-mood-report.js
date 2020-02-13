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
    }
  }
`;
