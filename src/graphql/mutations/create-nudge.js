export default `
  mutation createNudge($name: String!, $color: String!, $public: Boolean) {
    createNudge(name: $name, color: $color, public: $public) {
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
