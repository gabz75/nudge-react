export default `
  query getMoodReport($id: ID!) {
    getMoodReport(id: $id) {
      id
      score
      doing
      feelings
      date
      createdAt
      updatedAt
      goalValues {
        id
        goal {
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
        id
        intValue
        boolValue
      }
    }
  }
`;
