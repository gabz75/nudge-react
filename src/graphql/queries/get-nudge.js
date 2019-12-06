export default `
  query getNudge($id: ID!) {
    getNudge(id: $id) {
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
