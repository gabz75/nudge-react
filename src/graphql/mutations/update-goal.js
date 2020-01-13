export default `
  mutation updateGoal($id: ID!, $name: String!, $color: String!, $public: Boolean, $goalType: String, $unit: String) {
    updateGoal(id: $id, name: $name, color: $color, public: $public, goalType: $goalType, unit: $unit) {
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
