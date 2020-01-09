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
  timestamptz: any
  timestamp: any
  uuid: any
}

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: Maybe<Scalars['Boolean']>
  _gt?: Maybe<Scalars['Boolean']>
  _gte?: Maybe<Scalars['Boolean']>
  _in?: Maybe<Array<Scalars['Boolean']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Boolean']>
  _lte?: Maybe<Scalars['Boolean']>
  _neq?: Maybe<Scalars['Boolean']>
  _nin?: Maybe<Array<Scalars['Boolean']>>
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>
  _gt?: Maybe<Scalars['Int']>
  _gte?: Maybe<Scalars['Int']>
  _in?: Maybe<Array<Scalars['Int']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['Int']>
  _lte?: Maybe<Scalars['Int']>
  _neq?: Maybe<Scalars['Int']>
  _nin?: Maybe<Array<Scalars['Int']>>
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root'
  /** delete data from the table: "permission" */
  delete_permission?: Maybe<Permission_Mutation_Response>
  /** delete data from the table: "todo" */
  delete_todo?: Maybe<Todo_Mutation_Response>
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>
  /** delete data from the table: "user_permission" */
  delete_user_permission?: Maybe<User_Permission_Mutation_Response>
  /** insert data into the table: "permission" */
  insert_permission?: Maybe<Permission_Mutation_Response>
  /** insert data into the table: "todo" */
  insert_todo?: Maybe<Todo_Mutation_Response>
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>
  /** insert data into the table: "user_permission" */
  insert_user_permission?: Maybe<User_Permission_Mutation_Response>
  /** update data of the table: "permission" */
  update_permission?: Maybe<Permission_Mutation_Response>
  /** update data of the table: "todo" */
  update_todo?: Maybe<Todo_Mutation_Response>
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>
  /** update data of the table: "user_permission" */
  update_user_permission?: Maybe<User_Permission_Mutation_Response>
}

/** mutation root */
export type Mutation_RootDelete_PermissionArgs = {
  where: Permission_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_TodoArgs = {
  where: Todo_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootDelete_User_PermissionArgs = {
  where: User_Permission_Bool_Exp
}

/** mutation root */
export type Mutation_RootInsert_PermissionArgs = {
  objects: Array<Permission_Insert_Input>
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_TodoArgs = {
  objects: Array<Todo_Insert_Input>
  on_conflict?: Maybe<Todo_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>
  on_conflict?: Maybe<User_On_Conflict>
}

/** mutation root */
export type Mutation_RootInsert_User_PermissionArgs = {
  objects: Array<User_Permission_Insert_Input>
  on_conflict?: Maybe<User_Permission_On_Conflict>
}

/** mutation root */
export type Mutation_RootUpdate_PermissionArgs = {
  _inc?: Maybe<Permission_Inc_Input>
  _set?: Maybe<Permission_Set_Input>
  where: Permission_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_TodoArgs = {
  _set?: Maybe<Todo_Set_Input>
  where: Todo_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: Maybe<User_Inc_Input>
  _set?: Maybe<User_Set_Input>
  where: User_Bool_Exp
}

/** mutation root */
export type Mutation_RootUpdate_User_PermissionArgs = {
  _inc?: Maybe<User_Permission_Inc_Input>
  _set?: Maybe<User_Permission_Set_Input>
  where: User_Permission_Bool_Exp
}

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "permission" */
export type Permission = {
  __typename?: 'permission'
  id: Scalars['Int']
  name: Scalars['String']
  /** An array relationship */
  users: Array<User_Permission>
  /** An aggregated array relationship */
  users_aggregate: User_Permission_Aggregate
}

/** columns and relationships of "permission" */
export type PermissionUsersArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** columns and relationships of "permission" */
export type PermissionUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** aggregated selection of "permission" */
export type Permission_Aggregate = {
  __typename?: 'permission_aggregate'
  aggregate?: Maybe<Permission_Aggregate_Fields>
  nodes: Array<Permission>
}

/** aggregate fields of "permission" */
export type Permission_Aggregate_Fields = {
  __typename?: 'permission_aggregate_fields'
  avg?: Maybe<Permission_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Permission_Max_Fields>
  min?: Maybe<Permission_Min_Fields>
  stddev?: Maybe<Permission_Stddev_Fields>
  stddev_pop?: Maybe<Permission_Stddev_Pop_Fields>
  stddev_samp?: Maybe<Permission_Stddev_Samp_Fields>
  sum?: Maybe<Permission_Sum_Fields>
  var_pop?: Maybe<Permission_Var_Pop_Fields>
  var_samp?: Maybe<Permission_Var_Samp_Fields>
  variance?: Maybe<Permission_Variance_Fields>
}

/** aggregate fields of "permission" */
export type Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Permission_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "permission" */
export type Permission_Aggregate_Order_By = {
  avg?: Maybe<Permission_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<Permission_Max_Order_By>
  min?: Maybe<Permission_Min_Order_By>
  stddev?: Maybe<Permission_Stddev_Order_By>
  stddev_pop?: Maybe<Permission_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<Permission_Stddev_Samp_Order_By>
  sum?: Maybe<Permission_Sum_Order_By>
  var_pop?: Maybe<Permission_Var_Pop_Order_By>
  var_samp?: Maybe<Permission_Var_Samp_Order_By>
  variance?: Maybe<Permission_Variance_Order_By>
}

/** input type for inserting array relation for remote table "permission" */
export type Permission_Arr_Rel_Insert_Input = {
  data: Array<Permission_Insert_Input>
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** aggregate avg on columns */
export type Permission_Avg_Fields = {
  __typename?: 'permission_avg_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "permission" */
export type Permission_Avg_Order_By = {
  id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "permission". All fields are combined with a logical 'AND'. */
export type Permission_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Permission_Bool_Exp>>>
  _not?: Maybe<Permission_Bool_Exp>
  _or?: Maybe<Array<Maybe<Permission_Bool_Exp>>>
  id?: Maybe<Int_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  users?: Maybe<User_Permission_Bool_Exp>
}

/** unique or primary key constraints on table "permission" */
export enum Permission_Constraint {
  /** unique or primary key constraint */
  PermissionPkey = 'permission_pkey',
}

/** input type for incrementing integer columne in table "permission" */
export type Permission_Inc_Input = {
  id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "permission" */
export type Permission_Insert_Input = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
  users?: Maybe<User_Permission_Arr_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Permission_Max_Fields = {
  __typename?: 'permission_max_fields'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "permission" */
export type Permission_Max_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Permission_Min_Fields = {
  __typename?: 'permission_min_fields'
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "permission" */
export type Permission_Min_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
}

/** response of any mutation on the table "permission" */
export type Permission_Mutation_Response = {
  __typename?: 'permission_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Permission>
}

/** input type for inserting object relation for remote table "permission" */
export type Permission_Obj_Rel_Insert_Input = {
  data: Permission_Insert_Input
  on_conflict?: Maybe<Permission_On_Conflict>
}

/** on conflict condition type for table "permission" */
export type Permission_On_Conflict = {
  constraint: Permission_Constraint
  update_columns: Array<Permission_Update_Column>
  where?: Maybe<Permission_Bool_Exp>
}

/** ordering options when selecting data from "permission" */
export type Permission_Order_By = {
  id?: Maybe<Order_By>
  name?: Maybe<Order_By>
  users_aggregate?: Maybe<User_Permission_Aggregate_Order_By>
}

/** select columns of table "permission" */
export enum Permission_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "permission" */
export type Permission_Set_Input = {
  id?: Maybe<Scalars['Int']>
  name?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type Permission_Stddev_Fields = {
  __typename?: 'permission_stddev_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "permission" */
export type Permission_Stddev_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type Permission_Stddev_Pop_Fields = {
  __typename?: 'permission_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "permission" */
export type Permission_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type Permission_Stddev_Samp_Fields = {
  __typename?: 'permission_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "permission" */
export type Permission_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type Permission_Sum_Fields = {
  __typename?: 'permission_sum_fields'
  id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "permission" */
export type Permission_Sum_Order_By = {
  id?: Maybe<Order_By>
}

/** update columns of table "permission" */
export enum Permission_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Permission_Var_Pop_Fields = {
  __typename?: 'permission_var_pop_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "permission" */
export type Permission_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type Permission_Var_Samp_Fields = {
  __typename?: 'permission_var_samp_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "permission" */
export type Permission_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type Permission_Variance_Fields = {
  __typename?: 'permission_variance_fields'
  id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "permission" */
export type Permission_Variance_Order_By = {
  id?: Maybe<Order_By>
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root'
  /** fetch data from the table: "permission" */
  permission: Array<Permission>
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>
  /** fetch data from the table: "todo" */
  todo: Array<Todo>
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table: "user_permission" */
  user_permission: Array<User_Permission>
  /** fetch aggregated fields from the table: "user_permission" */
  user_permission_aggregate: User_Permission_Aggregate
  /** fetch data from the table: "user_permission" using primary key columns */
  user_permission_by_pk?: Maybe<User_Permission>
}

/** query root */
export type Query_RootPermissionArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** query root */
export type Query_RootPermission_AggregateArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** query root */
export type Query_RootPermission_By_PkArgs = {
  id: Scalars['Int']
}

/** query root */
export type Query_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

/** query root */
export type Query_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

/** query root */
export type Query_RootTodo_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']
}

/** query root */
export type Query_RootUser_PermissionArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** query root */
export type Query_RootUser_Permission_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** query root */
export type Query_RootUser_Permission_By_PkArgs = {
  id: Scalars['Int']
}

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>
  _gt?: Maybe<Scalars['String']>
  _gte?: Maybe<Scalars['String']>
  _ilike?: Maybe<Scalars['String']>
  _in?: Maybe<Array<Scalars['String']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _like?: Maybe<Scalars['String']>
  _lt?: Maybe<Scalars['String']>
  _lte?: Maybe<Scalars['String']>
  _neq?: Maybe<Scalars['String']>
  _nilike?: Maybe<Scalars['String']>
  _nin?: Maybe<Array<Scalars['String']>>
  _nlike?: Maybe<Scalars['String']>
  _nsimilar?: Maybe<Scalars['String']>
  _similar?: Maybe<Scalars['String']>
}

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root'
  /** fetch data from the table: "permission" */
  permission: Array<Permission>
  /** fetch aggregated fields from the table: "permission" */
  permission_aggregate: Permission_Aggregate
  /** fetch data from the table: "permission" using primary key columns */
  permission_by_pk?: Maybe<Permission>
  /** fetch data from the table: "todo" */
  todo: Array<Todo>
  /** fetch aggregated fields from the table: "todo" */
  todo_aggregate: Todo_Aggregate
  /** fetch data from the table: "todo" using primary key columns */
  todo_by_pk?: Maybe<Todo>
  /** fetch data from the table: "user" */
  user: Array<User>
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>
  /** fetch data from the table: "user_permission" */
  user_permission: Array<User_Permission>
  /** fetch aggregated fields from the table: "user_permission" */
  user_permission_aggregate: User_Permission_Aggregate
  /** fetch data from the table: "user_permission" using primary key columns */
  user_permission_by_pk?: Maybe<User_Permission>
}

/** subscription root */
export type Subscription_RootPermissionArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPermission_AggregateArgs = {
  distinct_on?: Maybe<Array<Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Permission_Order_By>>
  where?: Maybe<Permission_Bool_Exp>
}

/** subscription root */
export type Subscription_RootPermission_By_PkArgs = {
  id: Scalars['Int']
}

/** subscription root */
export type Subscription_RootTodoArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTodo_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

/** subscription root */
export type Subscription_RootTodo_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Order_By>>
  where?: Maybe<User_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']
}

/** subscription root */
export type Subscription_RootUser_PermissionArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUser_Permission_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** subscription root */
export type Subscription_RootUser_Permission_By_PkArgs = {
  id: Scalars['Int']
}

/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamp']>
  _gt?: Maybe<Scalars['timestamp']>
  _gte?: Maybe<Scalars['timestamp']>
  _in?: Maybe<Array<Scalars['timestamp']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamp']>
  _lte?: Maybe<Scalars['timestamp']>
  _neq?: Maybe<Scalars['timestamp']>
  _nin?: Maybe<Array<Scalars['timestamp']>>
}

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>
  _gt?: Maybe<Scalars['timestamptz']>
  _gte?: Maybe<Scalars['timestamptz']>
  _in?: Maybe<Array<Scalars['timestamptz']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['timestamptz']>
  _lte?: Maybe<Scalars['timestamptz']>
  _neq?: Maybe<Scalars['timestamptz']>
  _nin?: Maybe<Array<Scalars['timestamptz']>>
}

/**
 * Lets do it
 *
 *
 * columns and relationships of "todo"
 */
export type Todo = {
  __typename?: 'todo'
  created_at: Scalars['timestamptz']
  created_by: Scalars['uuid']
  desc: Scalars['String']
  id: Scalars['uuid']
  is_complete: Scalars['Boolean']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: User
}

/** aggregated selection of "todo" */
export type Todo_Aggregate = {
  __typename?: 'todo_aggregate'
  aggregate?: Maybe<Todo_Aggregate_Fields>
  nodes: Array<Todo>
}

/** aggregate fields of "todo" */
export type Todo_Aggregate_Fields = {
  __typename?: 'todo_aggregate_fields'
  count?: Maybe<Scalars['Int']>
  max?: Maybe<Todo_Max_Fields>
  min?: Maybe<Todo_Min_Fields>
}

/** aggregate fields of "todo" */
export type Todo_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Todo_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "todo" */
export type Todo_Aggregate_Order_By = {
  count?: Maybe<Order_By>
  max?: Maybe<Todo_Max_Order_By>
  min?: Maybe<Todo_Min_Order_By>
}

/** input type for inserting array relation for remote table "todo" */
export type Todo_Arr_Rel_Insert_Input = {
  data: Array<Todo_Insert_Input>
  on_conflict?: Maybe<Todo_On_Conflict>
}

/** Boolean expression to filter rows from the table "todo". All fields are combined with a logical 'AND'. */
export type Todo_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Todo_Bool_Exp>>>
  _not?: Maybe<Todo_Bool_Exp>
  _or?: Maybe<Array<Maybe<Todo_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  created_by?: Maybe<Uuid_Comparison_Exp>
  desc?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  is_complete?: Maybe<Boolean_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<User_Bool_Exp>
}

/** unique or primary key constraints on table "todo" */
export enum Todo_Constraint {
  /** unique or primary key constraint */
  TodoPkey = 'todo_pkey',
}

/** input type for inserting data into table "todo" */
export type Todo_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  created_by?: Maybe<Scalars['uuid']>
  desc?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  is_complete?: Maybe<Scalars['Boolean']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<User_Obj_Rel_Insert_Input>
}

/** aggregate max on columns */
export type Todo_Max_Fields = {
  __typename?: 'todo_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  desc?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "todo" */
export type Todo_Max_Order_By = {
  created_at?: Maybe<Order_By>
  desc?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type Todo_Min_Fields = {
  __typename?: 'todo_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  desc?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "todo" */
export type Todo_Min_Order_By = {
  created_at?: Maybe<Order_By>
  desc?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "todo" */
export type Todo_Mutation_Response = {
  __typename?: 'todo_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<Todo>
}

/** input type for inserting object relation for remote table "todo" */
export type Todo_Obj_Rel_Insert_Input = {
  data: Todo_Insert_Input
  on_conflict?: Maybe<Todo_On_Conflict>
}

/** on conflict condition type for table "todo" */
export type Todo_On_Conflict = {
  constraint: Todo_Constraint
  update_columns: Array<Todo_Update_Column>
  where?: Maybe<Todo_Bool_Exp>
}

/** ordering options when selecting data from "todo" */
export type Todo_Order_By = {
  created_at?: Maybe<Order_By>
  created_by?: Maybe<Order_By>
  desc?: Maybe<Order_By>
  id?: Maybe<Order_By>
  is_complete?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<User_Order_By>
}

/** select columns of table "todo" */
export enum Todo_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Desc = 'desc',
  /** column name */
  Id = 'id',
  /** column name */
  IsComplete = 'is_complete',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** input type for updating data in table "todo" */
export type Todo_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  created_by?: Maybe<Scalars['uuid']>
  desc?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  is_complete?: Maybe<Scalars['Boolean']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** update columns of table "todo" */
export enum Todo_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Desc = 'desc',
  /** column name */
  Id = 'id',
  /** column name */
  IsComplete = 'is_complete',
  /** column name */
  UpdatedAt = 'updated_at',
}

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user'
  bio?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email: Scalars['String']
  facebook_id?: Maybe<Scalars['String']>
  github_id?: Maybe<Scalars['String']>
  google_id?: Maybe<Scalars['String']>
  id: Scalars['uuid']
  image_url?: Maybe<Scalars['String']>
  last_login_at?: Maybe<Scalars['timestamptz']>
  name: Scalars['String']
  password?: Maybe<Scalars['String']>
  /** An array relationship */
  permissions: Array<User_Permission>
  /** An aggregated array relationship */
  permissions_aggregate: User_Permission_Aggregate
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status: Scalars['String']
  /** An array relationship */
  todos: Array<Todo>
  /** An aggregated array relationship */
  todos_aggregate: Todo_Aggregate
  token_version?: Maybe<Scalars['Int']>
  twitter_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  username?: Maybe<Scalars['String']>
}

/** columns and relationships of "user" */
export type UserPermissionsArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserPermissions_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Permission_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<User_Permission_Order_By>>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserTodosArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

/** columns and relationships of "user" */
export type UserTodos_AggregateArgs = {
  distinct_on?: Maybe<Array<Todo_Select_Column>>
  limit?: Maybe<Scalars['Int']>
  offset?: Maybe<Scalars['Int']>
  order_by?: Maybe<Array<Todo_Order_By>>
  where?: Maybe<Todo_Bool_Exp>
}

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate'
  aggregate?: Maybe<User_Aggregate_Fields>
  nodes: Array<User>
}

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields'
  avg?: Maybe<User_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<User_Max_Fields>
  min?: Maybe<User_Min_Fields>
  stddev?: Maybe<User_Stddev_Fields>
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>
  sum?: Maybe<User_Sum_Fields>
  var_pop?: Maybe<User_Var_Pop_Fields>
  var_samp?: Maybe<User_Var_Samp_Fields>
  variance?: Maybe<User_Variance_Fields>
}

/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  avg?: Maybe<User_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Max_Order_By>
  min?: Maybe<User_Min_Order_By>
  stddev?: Maybe<User_Stddev_Order_By>
  stddev_pop?: Maybe<User_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Stddev_Samp_Order_By>
  sum?: Maybe<User_Sum_Order_By>
  var_pop?: Maybe<User_Var_Pop_Order_By>
  var_samp?: Maybe<User_Var_Samp_Order_By>
  variance?: Maybe<User_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>
  on_conflict?: Maybe<User_On_Conflict>
}

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user" */
export type User_Avg_Order_By = {
  token_version?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>
  _not?: Maybe<User_Bool_Exp>
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>
  bio?: Maybe<String_Comparison_Exp>
  created_at?: Maybe<Timestamp_Comparison_Exp>
  email?: Maybe<String_Comparison_Exp>
  facebook_id?: Maybe<String_Comparison_Exp>
  github_id?: Maybe<String_Comparison_Exp>
  google_id?: Maybe<String_Comparison_Exp>
  id?: Maybe<Uuid_Comparison_Exp>
  image_url?: Maybe<String_Comparison_Exp>
  last_login_at?: Maybe<Timestamptz_Comparison_Exp>
  name?: Maybe<String_Comparison_Exp>
  password?: Maybe<String_Comparison_Exp>
  permissions?: Maybe<User_Permission_Bool_Exp>
  phone?: Maybe<String_Comparison_Exp>
  role?: Maybe<String_Comparison_Exp>
  status?: Maybe<String_Comparison_Exp>
  todos?: Maybe<Todo_Bool_Exp>
  token_version?: Maybe<Int_Comparison_Exp>
  twitter_id?: Maybe<String_Comparison_Exp>
  updated_at?: Maybe<Timestamp_Comparison_Exp>
  username?: Maybe<String_Comparison_Exp>
}

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  Pk_03b91d2b8321aa7ba32257dc321 = 'PK_03b91d2b8321aa7ba32257dc321',
  /** unique or primary key constraint */
  Uq_7c9f5f0d759b84373b901768d4d = 'UQ_7c9f5f0d759b84373b901768d4d',
  /** unique or primary key constraint */
  Uq_7dfc7794e80610b83c5cf5d8348 = 'UQ_7dfc7794e80610b83c5cf5d8348',
  /** unique or primary key constraint */
  Uq_89635bfc77b8768544d5c82a7c4 = 'UQ_89635bfc77b8768544d5c82a7c4',
  /** unique or primary key constraint */
  Uq_99acedb51629efbe55bcad471bb = 'UQ_99acedb51629efbe55bcad471bb',
  /** unique or primary key constraint */
  UqB67337b7f8aa8406e936c2ff754 = 'UQ_b67337b7f8aa8406e936c2ff754',
  /** unique or primary key constraint */
  UqB7a5e4a3b174e954b2dabf2ef9e = 'UQ_b7a5e4a3b174e954b2dabf2ef9e',
  /** unique or primary key constraint */
  UqCf64c24776ea5db1f17d345c399 = 'UQ_cf64c24776ea5db1f17d345c399',
}

/** input type for incrementing integer columne in table "user" */
export type User_Inc_Input = {
  token_version?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  bio?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  facebook_id?: Maybe<Scalars['String']>
  github_id?: Maybe<Scalars['String']>
  google_id?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image_url?: Maybe<Scalars['String']>
  last_login_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  permissions?: Maybe<User_Permission_Arr_Rel_Insert_Input>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  todos?: Maybe<Todo_Arr_Rel_Insert_Input>
  token_version?: Maybe<Scalars['Int']>
  twitter_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  username?: Maybe<Scalars['String']>
}

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields'
  bio?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  facebook_id?: Maybe<Scalars['String']>
  github_id?: Maybe<Scalars['String']>
  google_id?: Maybe<Scalars['String']>
  image_url?: Maybe<Scalars['String']>
  last_login_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  token_version?: Maybe<Scalars['Int']>
  twitter_id?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  bio?: Maybe<Order_By>
  email?: Maybe<Order_By>
  facebook_id?: Maybe<Order_By>
  github_id?: Maybe<Order_By>
  google_id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_login_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  password?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  role?: Maybe<Order_By>
  status?: Maybe<Order_By>
  token_version?: Maybe<Order_By>
  twitter_id?: Maybe<Order_By>
  username?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields'
  bio?: Maybe<Scalars['String']>
  email?: Maybe<Scalars['String']>
  facebook_id?: Maybe<Scalars['String']>
  github_id?: Maybe<Scalars['String']>
  google_id?: Maybe<Scalars['String']>
  image_url?: Maybe<Scalars['String']>
  last_login_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  token_version?: Maybe<Scalars['Int']>
  twitter_id?: Maybe<Scalars['String']>
  username?: Maybe<Scalars['String']>
}

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  bio?: Maybe<Order_By>
  email?: Maybe<Order_By>
  facebook_id?: Maybe<Order_By>
  github_id?: Maybe<Order_By>
  google_id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_login_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  password?: Maybe<Order_By>
  phone?: Maybe<Order_By>
  role?: Maybe<Order_By>
  status?: Maybe<Order_By>
  token_version?: Maybe<Order_By>
  twitter_id?: Maybe<Order_By>
  username?: Maybe<Order_By>
}

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<User>
}

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input
  on_conflict?: Maybe<User_On_Conflict>
}

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint
  update_columns: Array<User_Update_Column>
  where?: Maybe<User_Bool_Exp>
}

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  bio?: Maybe<Order_By>
  created_at?: Maybe<Order_By>
  email?: Maybe<Order_By>
  facebook_id?: Maybe<Order_By>
  github_id?: Maybe<Order_By>
  google_id?: Maybe<Order_By>
  id?: Maybe<Order_By>
  image_url?: Maybe<Order_By>
  last_login_at?: Maybe<Order_By>
  name?: Maybe<Order_By>
  password?: Maybe<Order_By>
  permissions_aggregate?: Maybe<User_Permission_Aggregate_Order_By>
  phone?: Maybe<Order_By>
  role?: Maybe<Order_By>
  status?: Maybe<Order_By>
  todos_aggregate?: Maybe<Todo_Aggregate_Order_By>
  token_version?: Maybe<Order_By>
  twitter_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  username?: Maybe<Order_By>
}

/** columns and relationships of "user_permission" */
export type User_Permission = {
  __typename?: 'user_permission'
  created_at: Scalars['timestamptz']
  id: Scalars['Int']
  /** An object relationship */
  permission: Permission
  permission_id: Scalars['Int']
  updated_at: Scalars['timestamptz']
  /** An object relationship */
  user: User
  user_id: Scalars['uuid']
}

/** aggregated selection of "user_permission" */
export type User_Permission_Aggregate = {
  __typename?: 'user_permission_aggregate'
  aggregate?: Maybe<User_Permission_Aggregate_Fields>
  nodes: Array<User_Permission>
}

/** aggregate fields of "user_permission" */
export type User_Permission_Aggregate_Fields = {
  __typename?: 'user_permission_aggregate_fields'
  avg?: Maybe<User_Permission_Avg_Fields>
  count?: Maybe<Scalars['Int']>
  max?: Maybe<User_Permission_Max_Fields>
  min?: Maybe<User_Permission_Min_Fields>
  stddev?: Maybe<User_Permission_Stddev_Fields>
  stddev_pop?: Maybe<User_Permission_Stddev_Pop_Fields>
  stddev_samp?: Maybe<User_Permission_Stddev_Samp_Fields>
  sum?: Maybe<User_Permission_Sum_Fields>
  var_pop?: Maybe<User_Permission_Var_Pop_Fields>
  var_samp?: Maybe<User_Permission_Var_Samp_Fields>
  variance?: Maybe<User_Permission_Variance_Fields>
}

/** aggregate fields of "user_permission" */
export type User_Permission_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Permission_Select_Column>>
  distinct?: Maybe<Scalars['Boolean']>
}

/** order by aggregate values of table "user_permission" */
export type User_Permission_Aggregate_Order_By = {
  avg?: Maybe<User_Permission_Avg_Order_By>
  count?: Maybe<Order_By>
  max?: Maybe<User_Permission_Max_Order_By>
  min?: Maybe<User_Permission_Min_Order_By>
  stddev?: Maybe<User_Permission_Stddev_Order_By>
  stddev_pop?: Maybe<User_Permission_Stddev_Pop_Order_By>
  stddev_samp?: Maybe<User_Permission_Stddev_Samp_Order_By>
  sum?: Maybe<User_Permission_Sum_Order_By>
  var_pop?: Maybe<User_Permission_Var_Pop_Order_By>
  var_samp?: Maybe<User_Permission_Var_Samp_Order_By>
  variance?: Maybe<User_Permission_Variance_Order_By>
}

/** input type for inserting array relation for remote table "user_permission" */
export type User_Permission_Arr_Rel_Insert_Input = {
  data: Array<User_Permission_Insert_Input>
  on_conflict?: Maybe<User_Permission_On_Conflict>
}

/** aggregate avg on columns */
export type User_Permission_Avg_Fields = {
  __typename?: 'user_permission_avg_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by avg() on columns of table "user_permission" */
export type User_Permission_Avg_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** Boolean expression to filter rows from the table "user_permission". All fields are combined with a logical 'AND'. */
export type User_Permission_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Permission_Bool_Exp>>>
  _not?: Maybe<User_Permission_Bool_Exp>
  _or?: Maybe<Array<Maybe<User_Permission_Bool_Exp>>>
  created_at?: Maybe<Timestamptz_Comparison_Exp>
  id?: Maybe<Int_Comparison_Exp>
  permission?: Maybe<Permission_Bool_Exp>
  permission_id?: Maybe<Int_Comparison_Exp>
  updated_at?: Maybe<Timestamptz_Comparison_Exp>
  user?: Maybe<User_Bool_Exp>
  user_id?: Maybe<Uuid_Comparison_Exp>
}

/** unique or primary key constraints on table "user_permission" */
export enum User_Permission_Constraint {
  /** unique or primary key constraint */
  UserPermissionPkey = 'user_permission_pkey',
}

/** input type for incrementing integer columne in table "user_permission" */
export type User_Permission_Inc_Input = {
  id?: Maybe<Scalars['Int']>
  permission_id?: Maybe<Scalars['Int']>
}

/** input type for inserting data into table "user_permission" */
export type User_Permission_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  permission?: Maybe<Permission_Obj_Rel_Insert_Input>
  permission_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user?: Maybe<User_Obj_Rel_Insert_Input>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate max on columns */
export type User_Permission_Max_Fields = {
  __typename?: 'user_permission_max_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  permission_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by max() on columns of table "user_permission" */
export type User_Permission_Max_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** aggregate min on columns */
export type User_Permission_Min_Fields = {
  __typename?: 'user_permission_min_fields'
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  permission_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
}

/** order by min() on columns of table "user_permission" */
export type User_Permission_Min_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
}

/** response of any mutation on the table "user_permission" */
export type User_Permission_Mutation_Response = {
  __typename?: 'user_permission_mutation_response'
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int']
  /** data of the affected rows by the mutation */
  returning: Array<User_Permission>
}

/** input type for inserting object relation for remote table "user_permission" */
export type User_Permission_Obj_Rel_Insert_Input = {
  data: User_Permission_Insert_Input
  on_conflict?: Maybe<User_Permission_On_Conflict>
}

/** on conflict condition type for table "user_permission" */
export type User_Permission_On_Conflict = {
  constraint: User_Permission_Constraint
  update_columns: Array<User_Permission_Update_Column>
  where?: Maybe<User_Permission_Bool_Exp>
}

/** ordering options when selecting data from "user_permission" */
export type User_Permission_Order_By = {
  created_at?: Maybe<Order_By>
  id?: Maybe<Order_By>
  permission?: Maybe<Permission_Order_By>
  permission_id?: Maybe<Order_By>
  updated_at?: Maybe<Order_By>
  user?: Maybe<User_Order_By>
  user_id?: Maybe<Order_By>
}

/** select columns of table "user_permission" */
export enum User_Permission_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** input type for updating data in table "user_permission" */
export type User_Permission_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>
  id?: Maybe<Scalars['Int']>
  permission_id?: Maybe<Scalars['Int']>
  updated_at?: Maybe<Scalars['timestamptz']>
  user_id?: Maybe<Scalars['uuid']>
}

/** aggregate stddev on columns */
export type User_Permission_Stddev_Fields = {
  __typename?: 'user_permission_stddev_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user_permission" */
export type User_Permission_Stddev_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Permission_Stddev_Pop_Fields = {
  __typename?: 'user_permission_stddev_pop_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user_permission" */
export type User_Permission_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Permission_Stddev_Samp_Fields = {
  __typename?: 'user_permission_stddev_samp_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user_permission" */
export type User_Permission_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type User_Permission_Sum_Fields = {
  __typename?: 'user_permission_sum_fields'
  id?: Maybe<Scalars['Int']>
  permission_id?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user_permission" */
export type User_Permission_Sum_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** update columns of table "user_permission" */
export enum User_Permission_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PermissionId = 'permission_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id',
}

/** aggregate var_pop on columns */
export type User_Permission_Var_Pop_Fields = {
  __typename?: 'user_permission_var_pop_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user_permission" */
export type User_Permission_Var_Pop_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Permission_Var_Samp_Fields = {
  __typename?: 'user_permission_var_samp_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user_permission" */
export type User_Permission_Var_Samp_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Permission_Variance_Fields = {
  __typename?: 'user_permission_variance_fields'
  id?: Maybe<Scalars['Float']>
  permission_id?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user_permission" */
export type User_Permission_Variance_Order_By = {
  id?: Maybe<Order_By>
  permission_id?: Maybe<Order_By>
}

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FacebookId = 'facebook_id',
  /** column name */
  GithubId = 'github_id',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  TokenVersion = 'token_version',
  /** column name */
  TwitterId = 'twitter_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  bio?: Maybe<Scalars['String']>
  created_at?: Maybe<Scalars['timestamp']>
  email?: Maybe<Scalars['String']>
  facebook_id?: Maybe<Scalars['String']>
  github_id?: Maybe<Scalars['String']>
  google_id?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['uuid']>
  image_url?: Maybe<Scalars['String']>
  last_login_at?: Maybe<Scalars['timestamptz']>
  name?: Maybe<Scalars['String']>
  password?: Maybe<Scalars['String']>
  phone?: Maybe<Scalars['String']>
  role?: Maybe<Scalars['String']>
  status?: Maybe<Scalars['String']>
  token_version?: Maybe<Scalars['Int']>
  twitter_id?: Maybe<Scalars['String']>
  updated_at?: Maybe<Scalars['timestamp']>
  username?: Maybe<Scalars['String']>
}

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by stddev() on columns of table "user" */
export type User_Stddev_Order_By = {
  token_version?: Maybe<Order_By>
}

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by stddev_pop() on columns of table "user" */
export type User_Stddev_Pop_Order_By = {
  token_version?: Maybe<Order_By>
}

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by stddev_samp() on columns of table "user" */
export type User_Stddev_Samp_Order_By = {
  token_version?: Maybe<Order_By>
}

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields'
  token_version?: Maybe<Scalars['Int']>
}

/** order by sum() on columns of table "user" */
export type User_Sum_Order_By = {
  token_version?: Maybe<Order_By>
}

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  Bio = 'bio',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  FacebookId = 'facebook_id',
  /** column name */
  GithubId = 'github_id',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  ImageUrl = 'image_url',
  /** column name */
  LastLoginAt = 'last_login_at',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  Phone = 'phone',
  /** column name */
  Role = 'role',
  /** column name */
  Status = 'status',
  /** column name */
  TokenVersion = 'token_version',
  /** column name */
  TwitterId = 'twitter_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Username = 'username',
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by var_pop() on columns of table "user" */
export type User_Var_Pop_Order_By = {
  token_version?: Maybe<Order_By>
}

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by var_samp() on columns of table "user" */
export type User_Var_Samp_Order_By = {
  token_version?: Maybe<Order_By>
}

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields'
  token_version?: Maybe<Scalars['Float']>
}

/** order by variance() on columns of table "user" */
export type User_Variance_Order_By = {
  token_version?: Maybe<Order_By>
}

/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>
  _gt?: Maybe<Scalars['uuid']>
  _gte?: Maybe<Scalars['uuid']>
  _in?: Maybe<Array<Scalars['uuid']>>
  _is_null?: Maybe<Scalars['Boolean']>
  _lt?: Maybe<Scalars['uuid']>
  _lte?: Maybe<Scalars['uuid']>
  _neq?: Maybe<Scalars['uuid']>
  _nin?: Maybe<Array<Scalars['uuid']>>
}

export type UpdateProfileMutationVariables = {
  id: Scalars['uuid']
  set?: Maybe<User_Set_Input>
}

export type UpdateProfileMutation = { __typename?: 'mutation_root' } & {
  update_user: Maybe<
    { __typename?: 'user_mutation_response' } & Pick<
      User_Mutation_Response,
      'affected_rows'
    > & {
        returning: Array<
          { __typename?: 'user' } & Pick<User, 'email' | 'name' | 'bio'>
        >
      }
  >
}

export const UpdateProfileDocument = gql`
  mutation updateProfile($id: uuid!, $set: user_set_input) {
    update_user(where: { id: { _eq: $id } }, _set: $set) {
      affected_rows
      returning {
        email
        name
        bio
      }
    }
  }
`
export type UpdateProfileMutationFn = ApolloReactCommon.MutationFunction<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>

/**
 * __useUpdateProfileMutation__
 *
 * To run a mutation, you first call `useUpdateProfileMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateProfileMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateProfileMutation, { data, loading, error }] = useUpdateProfileMutation({
 *   variables: {
 *      id: // value for 'id'
 *      set: // value for 'set'
 *   },
 * });
 */
export function useUpdateProfileMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >,
) {
  return ApolloReactHooks.useMutation<
    UpdateProfileMutation,
    UpdateProfileMutationVariables
  >(UpdateProfileDocument, baseOptions)
}
export type UpdateProfileMutationHookResult = ReturnType<
  typeof useUpdateProfileMutation
>
export type UpdateProfileMutationResult = ApolloReactCommon.MutationResult<
  UpdateProfileMutation
>
export type UpdateProfileMutationOptions = ApolloReactCommon.BaseMutationOptions<
  UpdateProfileMutation,
  UpdateProfileMutationVariables
>
