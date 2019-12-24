export default `
  mutation updateGoal($id: ID!, $name: String!, $color: String!, $public: Boolean) {
    updateGoal(id: $id, name: $name, color: $color, public: $public) {
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
