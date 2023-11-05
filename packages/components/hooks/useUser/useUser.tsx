import { gql, useMutation } from "@apollo/client";

type AddUserInput = {
  email: string;
  firstName: string;
  chestMeasurement: number;
  hipMeasurement: number;
  waistMeasurement: number;
};

const AddUserMutation = gql`
  mutation CreateUser($input: UserInput!) {
    createUser(userModel: $input)
  }
`;

export const useUser = () => {
  const [_addUser, { data, loading, error }] = useMutation(AddUserMutation);

  const addUser = async (parms: AddUserInput) => {
    await _addUser({ variables: { input: parms } });
  };

  return {
    addUser,
    user: data,
    fetching: loading,
    error,
  };
};
