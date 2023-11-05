import { gql as gqlLit, useMutation } from "@apollo/client";

type AddUserInput = {
  email: string;
  firstName: string;
  chestMeasurement: number;
  hipMeasurement: number;
  waistMeasurement: number;
};

const AddUserMutation = gqlLit`
  mutation CreateUser($input: CreateUserModelInput!) {
    createUser(userModel: $input)
  }
`;

export const useUser = () => {
  const [_addUser, { data, loading, error }] = useMutation(AddUserMutation);

  const addUser = async (parms: AddUserInput) => {
    console.log(AddUserMutation);
    const res = await _addUser({ variables: { input: parms } });
    console.log("VALUE>>", res);
  };

  return {
    addUser,
    user: data,
    fetching: loading,
    error,
  };
};
