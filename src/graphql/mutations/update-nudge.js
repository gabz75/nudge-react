export default `
  mutation updateNudge($id: ID!, $name: String!, $color: String!, $public: Boolean) {
    updateNudge(id: $id, name: $name, color: $color, public: $public) {
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
