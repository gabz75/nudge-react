export default `
  mutation createGoal($name: String!, $color: String!, $public: Boolean, $goalType: String!, $unit: String) {
    createGoal(name: $name, color: $color, public: $public, goalType: $goalType, unit: $unit) {
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
