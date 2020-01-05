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
    }
  }
`;
