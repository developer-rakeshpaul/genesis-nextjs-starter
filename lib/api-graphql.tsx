import gql from 'graphql-tag'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any
}

export type AuthPayload = {
  __typename?: 'AuthPayload'
  token: Scalars['String']
  tokenExpiry: Scalars['DateTime']
  user: User
}

export type Cpu = {
  __typename?: 'CPU'
  model: Scalars['String']
  speed: Scalars['Float']
  times: Time
}

export type Mutation = {
  __typename?: 'Mutation'
  login: AuthPayload
  sendLoginOTP: Scalars['Boolean']
  loginWithOTP: AuthPayload
  logoutfromAllDevices: Scalars['Boolean']
  logout: Scalars['Boolean']
  forgotPassword: Scalars['Boolean']
  changePassword: Scalars['Boolean']
  resetPassword: Scalars['Boolean']
  refreshToken: AuthPayload
  signup: User
  confirm: Scalars['Boolean']
  resendConfirm: Scalars['Boolean']
}

export type MutationLoginArgs = {
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
  otp?: Maybe<Scalars['String']>
}

export type MutationSendLoginOtpArgs = {
  email: Scalars['String']
}

export type MutationLoginWithOtpArgs = {
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
  otp?: Maybe<Scalars['String']>
}

export type MutationForgotPasswordArgs = {
  email: Scalars['String']
}

export type MutationChangePasswordArgs = {
  password: Scalars['String']
  currentPassword: Scalars['String']
}

export type MutationResetPasswordArgs = {
  password: Scalars['String']
  token: Scalars['String']
}

export type MutationSignupArgs = {
  userCreateInput: UserCreateInput
}

export type MutationConfirmArgs = {
  token: Scalars['String']
}

export type MutationResendConfirmArgs = {
  email: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  me: User
  cpus: Array<Cpu>
}

export type Time = {
  __typename?: 'Time'
  user: Scalars['Float']
  nice: Scalars['Float']
  sys: Scalars['Float']
  idle: Scalars['Float']
  irq: Scalars['Float']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  name: Scalars['String']
  username?: Maybe<Scalars['String']>
  email: Scalars['String']
  phone?: Maybe<Scalars['String']>
  bio?: Maybe<Scalars['String']>
  googleId?: Maybe<Scalars['String']>
  facebookId?: Maybe<Scalars['String']>
  twitterId?: Maybe<Scalars['String']>
  githubId?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  status: Scalars['String']
  role: Scalars['String']
  tokenVersion: Scalars['Float']
  lastLoginAt?: Maybe<Scalars['String']>
  createdAt?: Maybe<Scalars['DateTime']>
  updatedAt?: Maybe<Scalars['DateTime']>
}

export type UserCreateInput = {
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
  name: Scalars['String']
  username?: Maybe<Scalars['String']>
  googleId?: Maybe<Scalars['String']>
  facebookId?: Maybe<Scalars['String']>
  twitterId?: Maybe<Scalars['String']>
  githubId?: Maybe<Scalars['String']>
  imageUrl?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  lastLoginAt?: Maybe<Scalars['DateTime']>
}

export type ChangePasswordMutationVariables = {
  password: Scalars['String']
  currentPassword: Scalars['String']
}

export type ChangePasswordMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'changePassword'
>

export type ConfirmUserMutationVariables = {
  token: Scalars['String']
}

export type ConfirmUserMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'confirm'
>

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
}

export type ForgotPasswordMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'forgotPassword'
>

export type LoginMutationVariables = {
  email: Scalars['String']
  password?: Maybe<Scalars['String']>
}

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AuthPayload' } & Pick<
    AuthPayload,
    'token' | 'tokenExpiry'
  > & { user: { __typename?: 'User' } & UserInfoFragment }
}

export type LoginWithOtpMutationVariables = {
  email: Scalars['String']
  otp?: Maybe<Scalars['String']>
}

export type LoginWithOtpMutation = { __typename?: 'Mutation' } & {
  loginWithOTP: { __typename?: 'AuthPayload' } & Pick<
    AuthPayload,
    'token' | 'tokenExpiry'
  > & { user: { __typename?: 'User' } & UserInfoFragment }
}

export type LogoutMutationVariables = {}

export type LogoutMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'logout'
>

export type MeQueryVariables = {}

export type MeQuery = { __typename?: 'Query' } & {
  me: { __typename?: 'User' } & Pick<User, 'id' | 'name' | 'email'>
}

export type ResendConfirmEmailMutationVariables = {
  email: Scalars['String']
}

export type ResendConfirmEmailMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'resendConfirm'
>

export type ResetPasswordMutationVariables = {
  password: Scalars['String']
  token: Scalars['String']
}

export type ResetPasswordMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'resetPassword'
>

export type SendLoginOtpMutationVariables = {
  email: Scalars['String']
}

export type SendLoginOtpMutation = { __typename?: 'Mutation' } & Pick<
  Mutation,
  'sendLoginOTP'
>

export type SignupMutationVariables = {
  data: UserCreateInput
}

export type SignupMutation = { __typename?: 'Mutation' } & {
  signup: { __typename?: 'User' } & UserInfoFragment
}

export type UserInfoFragment = { __typename?: 'User' } & Pick<
  User,
  'id' | 'name' | 'email' | 'role' | 'status' | 'bio' | 'lastLoginAt'
>

export const UserInfoFragmentDoc = gql`
  fragment UserInfo on User {
    id
    name
    email
    role
    status
    bio
    lastLoginAt
  }
`
export const ChangePasswordDocument = gql`
  mutation ChangePassword($password: String!, $currentPassword: String!) {
    changePassword(password: $password, currentPassword: $currentPassword)
  }
`
export type ChangePasswordMutationFn = ApolloReactCommon.MutationFunction<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      currentPassword: // value for 'currentPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, baseOptions)
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>
export type ChangePasswordMutationResult = ApolloReactCommon.MutationResult<
  ChangePasswordMutation
>
export type ChangePasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($token: String!) {
    confirm(token: $token)
  }
`
export type ConfirmUserMutationFn = ApolloReactCommon.MutationFunction<
  ConfirmUserMutation,
  ConfirmUserMutationVariables
>

/**
 * __useConfirmUserMutation__
 *
 * To run a mutation, you first call `useConfirmUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmUserMutation, { data, loading, error }] = useConfirmUserMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmUserMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ConfirmUserMutation,
    ConfirmUserMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ConfirmUserMutation,
    ConfirmUserMutationVariables
  >(ConfirmUserDocument, baseOptions)
}
export type ConfirmUserMutationHookResult = ReturnType<
  typeof useConfirmUserMutation
>
export type ConfirmUserMutationResult = ApolloReactCommon.MutationResult<
  ConfirmUserMutation
>
export type ConfirmUserMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ConfirmUserMutation,
  ConfirmUserMutationVariables
>
export const ForgotPasswordDocument = gql`
  mutation forgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`
export type ForgotPasswordMutationFn = ApolloReactCommon.MutationFunction<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>

/**
 * __useForgotPasswordMutation__
 *
 * To run a mutation, you first call `useForgotPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useForgotPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [forgotPasswordMutation, { data, loading, error }] = useForgotPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useForgotPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, baseOptions)
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>
export type ForgotPasswordMutationResult = ApolloReactCommon.MutationResult<
  ForgotPasswordMutation
>
export type ForgotPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>
export const LoginDocument = gql`
  mutation login($email: String!, $password: String) {
    login(email: $email, password: $password) {
      user {
        ...UserInfo
      }
      token
      tokenExpiry
    }
  }
  ${UserInfoFragmentDoc}
`
export type LoginMutationFn = ApolloReactCommon.MutationFunction<
  LoginMutation,
  LoginMutationVariables
>

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions,
  )
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>
export type LoginMutationResult = ApolloReactCommon.MutationResult<
  LoginMutation
>
export type LoginMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginMutation,
  LoginMutationVariables
>
export const LoginWithOtpDocument = gql`
  mutation LoginWithOTP($email: String!, $otp: String) {
    loginWithOTP(email: $email, otp: $otp) {
      user {
        ...UserInfo
      }
      token
      tokenExpiry
    }
  }
  ${UserInfoFragmentDoc}
`
export type LoginWithOtpMutationFn = ApolloReactCommon.MutationFunction<
  LoginWithOtpMutation,
  LoginWithOtpMutationVariables
>

/**
 * __useLoginWithOtpMutation__
 *
 * To run a mutation, you first call `useLoginWithOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginWithOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginWithOtpMutation, { data, loading, error }] = useLoginWithOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      otp: // value for 'otp'
 *   },
 * });
 */
export function useLoginWithOtpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LoginWithOtpMutation,
    LoginWithOtpMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    LoginWithOtpMutation,
    LoginWithOtpMutationVariables
  >(LoginWithOtpDocument, baseOptions)
}
export type LoginWithOtpMutationHookResult = ReturnType<
  typeof useLoginWithOtpMutation
>
export type LoginWithOtpMutationResult = ApolloReactCommon.MutationResult<
  LoginWithOtpMutation
>
export type LoginWithOtpMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LoginWithOtpMutation,
  LoginWithOtpMutationVariables
>
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`
export type LogoutMutationFn = ApolloReactCommon.MutationFunction<
  LogoutMutation,
  LogoutMutationVariables
>

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    baseOptions,
  )
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>
export type LogoutMutationResult = ApolloReactCommon.MutationResult<
  LogoutMutation
>
export type LogoutMutationOptions = ApolloReactCommon.BaseMutationOptions<
  LogoutMutation,
  LogoutMutationVariables
>
export const MeDocument = gql`
  query Me {
    me {
      id
      name
      email
    }
  }
`

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<MeQuery, MeQueryVariables>,
) {
  return ApolloReactHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  )
}
export function useMeLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    MeQuery,
    MeQueryVariables
  >,
) {
  return ApolloReactHooks.useLazyQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions,
  )
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>
export type MeQueryResult = ApolloReactCommon.QueryResult<
  MeQuery,
  MeQueryVariables
>
export const ResendConfirmEmailDocument = gql`
  mutation ResendConfirmEmail($email: String!) {
    resendConfirm(email: $email)
  }
`
export type ResendConfirmEmailMutationFn = ApolloReactCommon.MutationFunction<
  ResendConfirmEmailMutation,
  ResendConfirmEmailMutationVariables
>

/**
 * __useResendConfirmEmailMutation__
 *
 * To run a mutation, you first call `useResendConfirmEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendConfirmEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendConfirmEmailMutation, { data, loading, error }] = useResendConfirmEmailMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useResendConfirmEmailMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ResendConfirmEmailMutation,
    ResendConfirmEmailMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ResendConfirmEmailMutation,
    ResendConfirmEmailMutationVariables
  >(ResendConfirmEmailDocument, baseOptions)
}
export type ResendConfirmEmailMutationHookResult = ReturnType<
  typeof useResendConfirmEmailMutation
>
export type ResendConfirmEmailMutationResult = ApolloReactCommon.MutationResult<
  ResendConfirmEmailMutation
>
export type ResendConfirmEmailMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResendConfirmEmailMutation,
  ResendConfirmEmailMutationVariables
>
export const ResetPasswordDocument = gql`
  mutation resetPassword($password: String!, $token: String!) {
    resetPassword(password: $password, token: $token)
  }
`
export type ResetPasswordMutationFn = ApolloReactCommon.MutationFunction<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      password: // value for 'password'
 *      token: // value for 'token'
 *   },
 * });
 */
export function useResetPasswordMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    ResetPasswordMutation,
    ResetPasswordMutationVariables
  >(ResetPasswordDocument, baseOptions)
}
export type ResetPasswordMutationHookResult = ReturnType<
  typeof useResetPasswordMutation
>
export type ResetPasswordMutationResult = ApolloReactCommon.MutationResult<
  ResetPasswordMutation
>
export type ResetPasswordMutationOptions = ApolloReactCommon.BaseMutationOptions<
  ResetPasswordMutation,
  ResetPasswordMutationVariables
>
export const SendLoginOtpDocument = gql`
  mutation SendLoginOTP($email: String!) {
    sendLoginOTP(email: $email)
  }
`
export type SendLoginOtpMutationFn = ApolloReactCommon.MutationFunction<
  SendLoginOtpMutation,
  SendLoginOtpMutationVariables
>

/**
 * __useSendLoginOtpMutation__
 *
 * To run a mutation, you first call `useSendLoginOtpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendLoginOtpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendLoginOtpMutation, { data, loading, error }] = useSendLoginOtpMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useSendLoginOtpMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SendLoginOtpMutation,
    SendLoginOtpMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    SendLoginOtpMutation,
    SendLoginOtpMutationVariables
  >(SendLoginOtpDocument, baseOptions)
}
export type SendLoginOtpMutationHookResult = ReturnType<
  typeof useSendLoginOtpMutation
>
export type SendLoginOtpMutationResult = ApolloReactCommon.MutationResult<
  SendLoginOtpMutation
>
export type SendLoginOtpMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SendLoginOtpMutation,
  SendLoginOtpMutationVariables
>
export const SignupDocument = gql`
  mutation Signup($data: UserCreateInput!) {
    signup(userCreateInput: $data) {
      ...UserInfo
    }
  }
  ${UserInfoFragmentDoc}
`
export type SignupMutationFn = ApolloReactCommon.MutationFunction<
  SignupMutation,
  SignupMutationVariables
>

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignupMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    SignupMutation,
    SignupMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<SignupMutation, SignupMutationVariables>(
    SignupDocument,
    baseOptions,
  )
}
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>
export type SignupMutationResult = ApolloReactCommon.MutationResult<
  SignupMutation
>
export type SignupMutationOptions = ApolloReactCommon.BaseMutationOptions<
  SignupMutation,
  SignupMutationVariables
>
