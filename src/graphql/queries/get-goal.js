export default `
  query getGoal($id: ID!) {
    getGoal(id: $id) {
      id
      name
      color
      archived
      public
      createdAt
      updatedAt
      goalTypeImpl {
        id
        goalType {
          id
          type
        }
        ... on GoalTypeInt {
          unit
        }
      }
    }
  }
`;
