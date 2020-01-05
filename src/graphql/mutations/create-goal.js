export default `
  mutation createGoal($name: String!, $color: String!, $public: Boolean) {
    createGoal(name: $name, color: $color, public: $public) {
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
