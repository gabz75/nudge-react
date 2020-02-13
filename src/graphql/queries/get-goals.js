export default `
  {
    getGoals {
      id
      name
      color
      archived
      public
      createdAt
      updatedAt
      goalTypeImpl {
        goalType {
          id
          friendlyName
          type
          description
        }
        ... on GoalTypeInt {
          unit
        }
      }
    }
  }
`;
