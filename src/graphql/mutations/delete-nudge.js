export default `
  mutation deleteNudge($id: ID!) {
    deleteNudge(id: $id) {
      id
    }
  }
`;
