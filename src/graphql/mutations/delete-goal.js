export default `
  mutation deleteGoal($id: ID!) {
    deleteGoal(id: $id) {
      id
    }
  }
`;
