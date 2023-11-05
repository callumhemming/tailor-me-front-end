import { gql as gqlLit, useMutation, useQuery } from "@apollo/client";

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

const GET_ALL_USERS = gqlLit`
query {
  users {
    userId
    username
    chestMeasurement
    waistMeasurement
    hipMeasurement
    sizes {
      brandName
      sizeName
    }
  }
}
`;

export const useUser = () => {
  const [_addUser, { data: addRes, loading: isAdding, error: addedError }] =
    useMutation(AddUserMutation);

  const {
    loading: isFetching,
    error: fetchError,
    data: users,
    refetch: getAllUsers,
  } = useQuery(GET_ALL_USERS);

  const addUser = async (parms: AddUserInput) => {
    _addUser({ variables: { input: parms } });
  };

  return {
    addUser,
    addRes,
    isAdding,
    addedError,
    users,
    fetchError,
    getAllUsers,
  };
};
