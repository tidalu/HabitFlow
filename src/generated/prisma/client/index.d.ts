
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Sessions
 * 
 */
export type Sessions = $Result.DefaultSelection<Prisma.$SessionsPayload>
/**
 * Model Habits
 * 
 */
export type Habits = $Result.DefaultSelection<Prisma.$HabitsPayload>
/**
 * Model Habit_logs
 * 
 */
export type Habit_logs = $Result.DefaultSelection<Prisma.$Habit_logsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessions`: Exposes CRUD operations for the **Sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.sessions.findMany()
    * ```
    */
  get sessions(): Prisma.SessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habits`: Exposes CRUD operations for the **Habits** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habits
    * const habits = await prisma.habits.findMany()
    * ```
    */
  get habits(): Prisma.HabitsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habit_logs`: Exposes CRUD operations for the **Habit_logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habit_logs
    * const habit_logs = await prisma.habit_logs.findMany()
    * ```
    */
  get habit_logs(): Prisma.Habit_logsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Sessions: 'Sessions',
    Habits: 'Habits',
    Habit_logs: 'Habit_logs'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "sessions" | "habits" | "habit_logs"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Sessions: {
        payload: Prisma.$SessionsPayload<ExtArgs>
        fields: Prisma.SessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findFirst: {
            args: Prisma.SessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          findMany: {
            args: Prisma.SessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          create: {
            args: Prisma.SessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          createMany: {
            args: Prisma.SessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          delete: {
            args: Prisma.SessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          update: {
            args: Prisma.SessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          deleteMany: {
            args: Prisma.SessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>[]
          }
          upsert: {
            args: Prisma.SessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionsPayload>
          }
          aggregate: {
            args: Prisma.SessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessions>
          }
          groupBy: {
            args: Prisma.SessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionsCountArgs<ExtArgs>
            result: $Utils.Optional<SessionsCountAggregateOutputType> | number
          }
        }
      }
      Habits: {
        payload: Prisma.$HabitsPayload<ExtArgs>
        fields: Prisma.HabitsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>
          }
          findFirst: {
            args: Prisma.HabitsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>
          }
          findMany: {
            args: Prisma.HabitsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>[]
          }
          create: {
            args: Prisma.HabitsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>
          }
          createMany: {
            args: Prisma.HabitsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>[]
          }
          delete: {
            args: Prisma.HabitsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>
          }
          update: {
            args: Prisma.HabitsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>
          }
          deleteMany: {
            args: Prisma.HabitsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>[]
          }
          upsert: {
            args: Prisma.HabitsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitsPayload>
          }
          aggregate: {
            args: Prisma.HabitsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabits>
          }
          groupBy: {
            args: Prisma.HabitsGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitsCountArgs<ExtArgs>
            result: $Utils.Optional<HabitsCountAggregateOutputType> | number
          }
        }
      }
      Habit_logs: {
        payload: Prisma.$Habit_logsPayload<ExtArgs>
        fields: Prisma.Habit_logsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Habit_logsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Habit_logsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>
          }
          findFirst: {
            args: Prisma.Habit_logsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Habit_logsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>
          }
          findMany: {
            args: Prisma.Habit_logsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>[]
          }
          create: {
            args: Prisma.Habit_logsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>
          }
          createMany: {
            args: Prisma.Habit_logsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Habit_logsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>[]
          }
          delete: {
            args: Prisma.Habit_logsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>
          }
          update: {
            args: Prisma.Habit_logsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>
          }
          deleteMany: {
            args: Prisma.Habit_logsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Habit_logsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Habit_logsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>[]
          }
          upsert: {
            args: Prisma.Habit_logsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Habit_logsPayload>
          }
          aggregate: {
            args: Prisma.Habit_logsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabit_logs>
          }
          groupBy: {
            args: Prisma.Habit_logsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Habit_logsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Habit_logsCountArgs<ExtArgs>
            result: $Utils.Optional<Habit_logsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    sessions?: SessionsOmit
    habits?: HabitsOmit
    habit_logs?: Habit_logsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    logs: number
    habits: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | UserCountOutputTypeCountLogsArgs
    habits?: boolean | UserCountOutputTypeCountHabitsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Habit_logsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHabitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
  }


  /**
   * Count Type HabitsCountOutputType
   */

  export type HabitsCountOutputType = {
    logs: number
  }

  export type HabitsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | HabitsCountOutputTypeCountLogsArgs
  }

  // Custom InputTypes
  /**
   * HabitsCountOutputType without action
   */
  export type HabitsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitsCountOutputType
     */
    select?: HabitsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitsCountOutputType without action
   */
  export type HabitsCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Habit_logsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
    logs?: boolean | User$logsArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | User$logsArgs<ExtArgs>
    habits?: boolean | User$habitsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      logs: Prisma.$Habit_logsPayload<ExtArgs>[]
      habits: Prisma.$HabitsPayload<ExtArgs>[]
      sessions: Prisma.$SessionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends User$logsArgs<ExtArgs> = {}>(args?: Subset<T, User$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    habits<T extends User$habitsArgs<ExtArgs> = {}>(args?: Subset<T, User$habitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.logs
   */
  export type User$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    where?: Habit_logsWhereInput
    orderBy?: Habit_logsOrderByWithRelationInput | Habit_logsOrderByWithRelationInput[]
    cursor?: Habit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Habit_logsScalarFieldEnum | Habit_logsScalarFieldEnum[]
  }

  /**
   * User.habits
   */
  export type User$habitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    where?: HabitsWhereInput
    orderBy?: HabitsOrderByWithRelationInput | HabitsOrderByWithRelationInput[]
    cursor?: HabitsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HabitsScalarFieldEnum | HabitsScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    cursor?: SessionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Sessions
   */

  export type AggregateSessions = {
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  export type SessionsAvgAggregateOutputType = {
    session_id: number | null
  }

  export type SessionsSumAggregateOutputType = {
    session_id: number | null
  }

  export type SessionsMinAggregateOutputType = {
    session_id: number | null
    expires: Date | null
    userId: string | null
  }

  export type SessionsMaxAggregateOutputType = {
    session_id: number | null
    expires: Date | null
    userId: string | null
  }

  export type SessionsCountAggregateOutputType = {
    session_id: number
    expires: number
    userId: number
    _all: number
  }


  export type SessionsAvgAggregateInputType = {
    session_id?: true
  }

  export type SessionsSumAggregateInputType = {
    session_id?: true
  }

  export type SessionsMinAggregateInputType = {
    session_id?: true
    expires?: true
    userId?: true
  }

  export type SessionsMaxAggregateInputType = {
    session_id?: true
    expires?: true
    userId?: true
  }

  export type SessionsCountAggregateInputType = {
    session_id?: true
    expires?: true
    userId?: true
    _all?: true
  }

  export type SessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to aggregate.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionsMaxAggregateInputType
  }

  export type GetSessionsAggregateType<T extends SessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateSessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessions[P]>
      : GetScalarType<T[P], AggregateSessions[P]>
  }




  export type SessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionsWhereInput
    orderBy?: SessionsOrderByWithAggregationInput | SessionsOrderByWithAggregationInput[]
    by: SessionsScalarFieldEnum[] | SessionsScalarFieldEnum
    having?: SessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionsCountAggregateInputType | true
    _avg?: SessionsAvgAggregateInputType
    _sum?: SessionsSumAggregateInputType
    _min?: SessionsMinAggregateInputType
    _max?: SessionsMaxAggregateInputType
  }

  export type SessionsGroupByOutputType = {
    session_id: number
    expires: Date
    userId: string
    _count: SessionsCountAggregateOutputType | null
    _avg: SessionsAvgAggregateOutputType | null
    _sum: SessionsSumAggregateOutputType | null
    _min: SessionsMinAggregateOutputType | null
    _max: SessionsMaxAggregateOutputType | null
  }

  type GetSessionsGroupByPayload<T extends SessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionsGroupByOutputType[P]>
            : GetScalarType<T[P], SessionsGroupByOutputType[P]>
        }
      >
    >


  export type SessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    expires?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    expires?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    session_id?: boolean
    expires?: boolean
    userId?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sessions"]>

  export type SessionsSelectScalar = {
    session_id?: boolean
    expires?: boolean
    userId?: boolean
  }

  export type SessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"session_id" | "expires" | "userId", ExtArgs["result"]["sessions"]>
  export type SessionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sessions"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      session_id: number
      expires: Date
      userId: string
    }, ExtArgs["result"]["sessions"]>
    composites: {}
  }

  type SessionsGetPayload<S extends boolean | null | undefined | SessionsDefaultArgs> = $Result.GetResult<Prisma.$SessionsPayload, S>

  type SessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionsCountAggregateInputType | true
    }

  export interface SessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sessions'], meta: { name: 'Sessions' } }
    /**
     * Find zero or one Sessions that matches the filter.
     * @param {SessionsFindUniqueArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionsFindUniqueArgs>(args: SelectSubset<T, SessionsFindUniqueArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionsFindUniqueOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionsFindFirstArgs>(args?: SelectSubset<T, SessionsFindFirstArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindFirstOrThrowArgs} args - Arguments to find a Sessions
     * @example
     * // Get one Sessions
     * const sessions = await prisma.sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.sessions.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.sessions.findMany({ take: 10 })
     * 
     * // Only select the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.findMany({ select: { session_id: true } })
     * 
     */
    findMany<T extends SessionsFindManyArgs>(args?: SelectSubset<T, SessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sessions.
     * @param {SessionsCreateArgs} args - Arguments to create a Sessions.
     * @example
     * // Create one Sessions
     * const Sessions = await prisma.sessions.create({
     *   data: {
     *     // ... data to create a Sessions
     *   }
     * })
     * 
     */
    create<T extends SessionsCreateArgs>(args: SelectSubset<T, SessionsCreateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionsCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionsCreateManyArgs>(args?: SelectSubset<T, SessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionsCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const sessions = await prisma.sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.createManyAndReturn({
     *   select: { session_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sessions.
     * @param {SessionsDeleteArgs} args - Arguments to delete one Sessions.
     * @example
     * // Delete one Sessions
     * const Sessions = await prisma.sessions.delete({
     *   where: {
     *     // ... filter to delete one Sessions
     *   }
     * })
     * 
     */
    delete<T extends SessionsDeleteArgs>(args: SelectSubset<T, SessionsDeleteArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sessions.
     * @param {SessionsUpdateArgs} args - Arguments to update one Sessions.
     * @example
     * // Update one Sessions
     * const sessions = await prisma.sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionsUpdateArgs>(args: SelectSubset<T, SessionsUpdateArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionsDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionsDeleteManyArgs>(args?: SelectSubset<T, SessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionsUpdateManyArgs>(args: SelectSubset<T, SessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionsUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const sessions = await prisma.sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `session_id`
     * const sessionsWithSession_idOnly = await prisma.sessions.updateManyAndReturn({
     *   select: { session_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sessions.
     * @param {SessionsUpsertArgs} args - Arguments to update or create a Sessions.
     * @example
     * // Update or create a Sessions
     * const sessions = await prisma.sessions.upsert({
     *   create: {
     *     // ... data to create a Sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sessions we want to update
     *   }
     * })
     */
    upsert<T extends SessionsUpsertArgs>(args: SelectSubset<T, SessionsUpsertArgs<ExtArgs>>): Prisma__SessionsClient<$Result.GetResult<Prisma.$SessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.sessions.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionsCountArgs>(
      args?: Subset<T, SessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionsAggregateArgs>(args: Subset<T, SessionsAggregateArgs>): Prisma.PrismaPromise<GetSessionsAggregateType<T>>

    /**
     * Group by Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionsGroupByArgs['orderBy'] }
        : { orderBy?: SessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sessions model
   */
  readonly fields: SessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sessions model
   */
  interface SessionsFieldRefs {
    readonly session_id: FieldRef<"Sessions", 'Int'>
    readonly expires: FieldRef<"Sessions", 'DateTime'>
    readonly userId: FieldRef<"Sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Sessions findUnique
   */
  export type SessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findUniqueOrThrow
   */
  export type SessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions findFirst
   */
  export type SessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findFirstOrThrow
   */
  export type SessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions findMany
   */
  export type SessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionsOrderByWithRelationInput | SessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionsScalarFieldEnum | SessionsScalarFieldEnum[]
  }

  /**
   * Sessions create
   */
  export type SessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Sessions.
     */
    data: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
  }

  /**
   * Sessions createMany
   */
  export type SessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sessions createManyAndReturn
   */
  export type SessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionsCreateManyInput | SessionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions update
   */
  export type SessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Sessions.
     */
    data: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
    /**
     * Choose, which Sessions to update.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions updateMany
   */
  export type SessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Sessions updateManyAndReturn
   */
  export type SessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sessions upsert
   */
  export type SessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Sessions to update in case it exists.
     */
    where: SessionsWhereUniqueInput
    /**
     * In case the Sessions found by the `where` argument doesn't exist, create a new Sessions with this data.
     */
    create: XOR<SessionsCreateInput, SessionsUncheckedCreateInput>
    /**
     * In case the Sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionsUpdateInput, SessionsUncheckedUpdateInput>
  }

  /**
   * Sessions delete
   */
  export type SessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
    /**
     * Filter which Sessions to delete.
     */
    where: SessionsWhereUniqueInput
  }

  /**
   * Sessions deleteMany
   */
  export type SessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionsWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Sessions without action
   */
  export type SessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sessions
     */
    select?: SessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sessions
     */
    omit?: SessionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionsInclude<ExtArgs> | null
  }


  /**
   * Model Habits
   */

  export type AggregateHabits = {
    _count: HabitsCountAggregateOutputType | null
    _avg: HabitsAvgAggregateOutputType | null
    _sum: HabitsSumAggregateOutputType | null
    _min: HabitsMinAggregateOutputType | null
    _max: HabitsMaxAggregateOutputType | null
  }

  export type HabitsAvgAggregateOutputType = {
    id: number | null
  }

  export type HabitsSumAggregateOutputType = {
    id: number | null
  }

  export type HabitsMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type HabitsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type HabitsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    userId: number
    _all: number
  }


  export type HabitsAvgAggregateInputType = {
    id?: true
  }

  export type HabitsSumAggregateInputType = {
    id?: true
  }

  export type HabitsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    userId?: true
  }

  export type HabitsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    userId?: true
  }

  export type HabitsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type HabitsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to aggregate.
     */
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitsOrderByWithRelationInput | HabitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habits
    **/
    _count?: true | HabitsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitsMaxAggregateInputType
  }

  export type GetHabitsAggregateType<T extends HabitsAggregateArgs> = {
        [P in keyof T & keyof AggregateHabits]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabits[P]>
      : GetScalarType<T[P], AggregateHabits[P]>
  }




  export type HabitsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitsWhereInput
    orderBy?: HabitsOrderByWithAggregationInput | HabitsOrderByWithAggregationInput[]
    by: HabitsScalarFieldEnum[] | HabitsScalarFieldEnum
    having?: HabitsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitsCountAggregateInputType | true
    _avg?: HabitsAvgAggregateInputType
    _sum?: HabitsSumAggregateInputType
    _min?: HabitsMinAggregateInputType
    _max?: HabitsMaxAggregateInputType
  }

  export type HabitsGroupByOutputType = {
    id: number
    name: string
    description: string
    createdAt: Date
    userId: string
    _count: HabitsCountAggregateOutputType | null
    _avg: HabitsAvgAggregateOutputType | null
    _sum: HabitsSumAggregateOutputType | null
    _min: HabitsMinAggregateOutputType | null
    _max: HabitsMaxAggregateOutputType | null
  }

  type GetHabitsGroupByPayload<T extends HabitsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitsGroupByOutputType[P]>
            : GetScalarType<T[P], HabitsGroupByOutputType[P]>
        }
      >
    >


  export type HabitsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    userId?: boolean
    logs?: boolean | Habits$logsArgs<ExtArgs>
    Author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | HabitsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habits"]>

  export type HabitsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    userId?: boolean
    Author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habits"]>

  export type HabitsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    userId?: boolean
    Author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habits"]>

  export type HabitsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type HabitsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "userId", ExtArgs["result"]["habits"]>
  export type HabitsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    logs?: boolean | Habits$logsArgs<ExtArgs>
    Author?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | HabitsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type HabitsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HabitsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habits"
    objects: {
      logs: Prisma.$Habit_logsPayload<ExtArgs>[]
      Author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["habits"]>
    composites: {}
  }

  type HabitsGetPayload<S extends boolean | null | undefined | HabitsDefaultArgs> = $Result.GetResult<Prisma.$HabitsPayload, S>

  type HabitsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitsCountAggregateInputType | true
    }

  export interface HabitsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habits'], meta: { name: 'Habits' } }
    /**
     * Find zero or one Habits that matches the filter.
     * @param {HabitsFindUniqueArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitsFindUniqueArgs>(args: SelectSubset<T, HabitsFindUniqueArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habits that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitsFindUniqueOrThrowArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitsFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsFindFirstArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitsFindFirstArgs>(args?: SelectSubset<T, HabitsFindFirstArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habits that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsFindFirstOrThrowArgs} args - Arguments to find a Habits
     * @example
     * // Get one Habits
     * const habits = await prisma.habits.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitsFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitsFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habits
     * const habits = await prisma.habits.findMany()
     * 
     * // Get first 10 Habits
     * const habits = await prisma.habits.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitsWithIdOnly = await prisma.habits.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitsFindManyArgs>(args?: SelectSubset<T, HabitsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habits.
     * @param {HabitsCreateArgs} args - Arguments to create a Habits.
     * @example
     * // Create one Habits
     * const Habits = await prisma.habits.create({
     *   data: {
     *     // ... data to create a Habits
     *   }
     * })
     * 
     */
    create<T extends HabitsCreateArgs>(args: SelectSubset<T, HabitsCreateArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habits.
     * @param {HabitsCreateManyArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habits = await prisma.habits.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitsCreateManyArgs>(args?: SelectSubset<T, HabitsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habits and returns the data saved in the database.
     * @param {HabitsCreateManyAndReturnArgs} args - Arguments to create many Habits.
     * @example
     * // Create many Habits
     * const habits = await prisma.habits.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habits and only return the `id`
     * const habitsWithIdOnly = await prisma.habits.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitsCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habits.
     * @param {HabitsDeleteArgs} args - Arguments to delete one Habits.
     * @example
     * // Delete one Habits
     * const Habits = await prisma.habits.delete({
     *   where: {
     *     // ... filter to delete one Habits
     *   }
     * })
     * 
     */
    delete<T extends HabitsDeleteArgs>(args: SelectSubset<T, HabitsDeleteArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habits.
     * @param {HabitsUpdateArgs} args - Arguments to update one Habits.
     * @example
     * // Update one Habits
     * const habits = await prisma.habits.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitsUpdateArgs>(args: SelectSubset<T, HabitsUpdateArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habits.
     * @param {HabitsDeleteManyArgs} args - Arguments to filter Habits to delete.
     * @example
     * // Delete a few Habits
     * const { count } = await prisma.habits.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitsDeleteManyArgs>(args?: SelectSubset<T, HabitsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habits
     * const habits = await prisma.habits.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitsUpdateManyArgs>(args: SelectSubset<T, HabitsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habits and returns the data updated in the database.
     * @param {HabitsUpdateManyAndReturnArgs} args - Arguments to update many Habits.
     * @example
     * // Update many Habits
     * const habits = await prisma.habits.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habits and only return the `id`
     * const habitsWithIdOnly = await prisma.habits.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitsUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habits.
     * @param {HabitsUpsertArgs} args - Arguments to update or create a Habits.
     * @example
     * // Update or create a Habits
     * const habits = await prisma.habits.upsert({
     *   create: {
     *     // ... data to create a Habits
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habits we want to update
     *   }
     * })
     */
    upsert<T extends HabitsUpsertArgs>(args: SelectSubset<T, HabitsUpsertArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsCountArgs} args - Arguments to filter Habits to count.
     * @example
     * // Count the number of Habits
     * const count = await prisma.habits.count({
     *   where: {
     *     // ... the filter for the Habits we want to count
     *   }
     * })
    **/
    count<T extends HabitsCountArgs>(
      args?: Subset<T, HabitsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitsAggregateArgs>(args: Subset<T, HabitsAggregateArgs>): Prisma.PrismaPromise<GetHabitsAggregateType<T>>

    /**
     * Group by Habits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitsGroupByArgs['orderBy'] }
        : { orderBy?: HabitsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habits model
   */
  readonly fields: HabitsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habits.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    logs<T extends Habits$logsArgs<ExtArgs> = {}>(args?: Subset<T, Habits$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habits model
   */
  interface HabitsFieldRefs {
    readonly id: FieldRef<"Habits", 'Int'>
    readonly name: FieldRef<"Habits", 'String'>
    readonly description: FieldRef<"Habits", 'String'>
    readonly createdAt: FieldRef<"Habits", 'DateTime'>
    readonly userId: FieldRef<"Habits", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habits findUnique
   */
  export type HabitsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where: HabitsWhereUniqueInput
  }

  /**
   * Habits findUniqueOrThrow
   */
  export type HabitsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where: HabitsWhereUniqueInput
  }

  /**
   * Habits findFirst
   */
  export type HabitsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitsOrderByWithRelationInput | HabitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitsScalarFieldEnum | HabitsScalarFieldEnum[]
  }

  /**
   * Habits findFirstOrThrow
   */
  export type HabitsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitsOrderByWithRelationInput | HabitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habits.
     */
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitsScalarFieldEnum | HabitsScalarFieldEnum[]
  }

  /**
   * Habits findMany
   */
  export type HabitsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * Filter, which Habits to fetch.
     */
    where?: HabitsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habits to fetch.
     */
    orderBy?: HabitsOrderByWithRelationInput | HabitsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habits.
     */
    cursor?: HabitsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habits.
     */
    distinct?: HabitsScalarFieldEnum | HabitsScalarFieldEnum[]
  }

  /**
   * Habits create
   */
  export type HabitsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * The data needed to create a Habits.
     */
    data: XOR<HabitsCreateInput, HabitsUncheckedCreateInput>
  }

  /**
   * Habits createMany
   */
  export type HabitsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habits.
     */
    data: HabitsCreateManyInput | HabitsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habits createManyAndReturn
   */
  export type HabitsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * The data used to create many Habits.
     */
    data: HabitsCreateManyInput | HabitsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habits update
   */
  export type HabitsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * The data needed to update a Habits.
     */
    data: XOR<HabitsUpdateInput, HabitsUncheckedUpdateInput>
    /**
     * Choose, which Habits to update.
     */
    where: HabitsWhereUniqueInput
  }

  /**
   * Habits updateMany
   */
  export type HabitsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitsUpdateManyMutationInput, HabitsUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitsWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
  }

  /**
   * Habits updateManyAndReturn
   */
  export type HabitsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * The data used to update Habits.
     */
    data: XOR<HabitsUpdateManyMutationInput, HabitsUncheckedUpdateManyInput>
    /**
     * Filter which Habits to update
     */
    where?: HabitsWhereInput
    /**
     * Limit how many Habits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habits upsert
   */
  export type HabitsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * The filter to search for the Habits to update in case it exists.
     */
    where: HabitsWhereUniqueInput
    /**
     * In case the Habits found by the `where` argument doesn't exist, create a new Habits with this data.
     */
    create: XOR<HabitsCreateInput, HabitsUncheckedCreateInput>
    /**
     * In case the Habits was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitsUpdateInput, HabitsUncheckedUpdateInput>
  }

  /**
   * Habits delete
   */
  export type HabitsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
    /**
     * Filter which Habits to delete.
     */
    where: HabitsWhereUniqueInput
  }

  /**
   * Habits deleteMany
   */
  export type HabitsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habits to delete
     */
    where?: HabitsWhereInput
    /**
     * Limit how many Habits to delete.
     */
    limit?: number
  }

  /**
   * Habits.logs
   */
  export type Habits$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    where?: Habit_logsWhereInput
    orderBy?: Habit_logsOrderByWithRelationInput | Habit_logsOrderByWithRelationInput[]
    cursor?: Habit_logsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Habit_logsScalarFieldEnum | Habit_logsScalarFieldEnum[]
  }

  /**
   * Habits without action
   */
  export type HabitsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habits
     */
    select?: HabitsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habits
     */
    omit?: HabitsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitsInclude<ExtArgs> | null
  }


  /**
   * Model Habit_logs
   */

  export type AggregateHabit_logs = {
    _count: Habit_logsCountAggregateOutputType | null
    _avg: Habit_logsAvgAggregateOutputType | null
    _sum: Habit_logsSumAggregateOutputType | null
    _min: Habit_logsMinAggregateOutputType | null
    _max: Habit_logsMaxAggregateOutputType | null
  }

  export type Habit_logsAvgAggregateOutputType = {
    id: number | null
    habitId: number | null
  }

  export type Habit_logsSumAggregateOutputType = {
    id: number | null
    habitId: number | null
  }

  export type Habit_logsMinAggregateOutputType = {
    id: number | null
    log_date: Date | null
    habitId: number | null
    userId: string | null
  }

  export type Habit_logsMaxAggregateOutputType = {
    id: number | null
    log_date: Date | null
    habitId: number | null
    userId: string | null
  }

  export type Habit_logsCountAggregateOutputType = {
    id: number
    log_date: number
    habitId: number
    userId: number
    _all: number
  }


  export type Habit_logsAvgAggregateInputType = {
    id?: true
    habitId?: true
  }

  export type Habit_logsSumAggregateInputType = {
    id?: true
    habitId?: true
  }

  export type Habit_logsMinAggregateInputType = {
    id?: true
    log_date?: true
    habitId?: true
    userId?: true
  }

  export type Habit_logsMaxAggregateInputType = {
    id?: true
    log_date?: true
    habitId?: true
    userId?: true
  }

  export type Habit_logsCountAggregateInputType = {
    id?: true
    log_date?: true
    habitId?: true
    userId?: true
    _all?: true
  }

  export type Habit_logsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit_logs to aggregate.
     */
    where?: Habit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_logs to fetch.
     */
    orderBy?: Habit_logsOrderByWithRelationInput | Habit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Habit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habit_logs
    **/
    _count?: true | Habit_logsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Habit_logsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Habit_logsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Habit_logsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Habit_logsMaxAggregateInputType
  }

  export type GetHabit_logsAggregateType<T extends Habit_logsAggregateArgs> = {
        [P in keyof T & keyof AggregateHabit_logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabit_logs[P]>
      : GetScalarType<T[P], AggregateHabit_logs[P]>
  }




  export type Habit_logsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Habit_logsWhereInput
    orderBy?: Habit_logsOrderByWithAggregationInput | Habit_logsOrderByWithAggregationInput[]
    by: Habit_logsScalarFieldEnum[] | Habit_logsScalarFieldEnum
    having?: Habit_logsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Habit_logsCountAggregateInputType | true
    _avg?: Habit_logsAvgAggregateInputType
    _sum?: Habit_logsSumAggregateInputType
    _min?: Habit_logsMinAggregateInputType
    _max?: Habit_logsMaxAggregateInputType
  }

  export type Habit_logsGroupByOutputType = {
    id: number
    log_date: Date
    habitId: number
    userId: string | null
    _count: Habit_logsCountAggregateOutputType | null
    _avg: Habit_logsAvgAggregateOutputType | null
    _sum: Habit_logsSumAggregateOutputType | null
    _min: Habit_logsMinAggregateOutputType | null
    _max: Habit_logsMaxAggregateOutputType | null
  }

  type GetHabit_logsGroupByPayload<T extends Habit_logsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Habit_logsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Habit_logsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Habit_logsGroupByOutputType[P]>
            : GetScalarType<T[P], Habit_logsGroupByOutputType[P]>
        }
      >
    >


  export type Habit_logsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    log_date?: boolean
    habitId?: boolean
    userId?: boolean
    Habit?: boolean | HabitsDefaultArgs<ExtArgs>
    User?: boolean | Habit_logs$UserArgs<ExtArgs>
  }, ExtArgs["result"]["habit_logs"]>

  export type Habit_logsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    log_date?: boolean
    habitId?: boolean
    userId?: boolean
    Habit?: boolean | HabitsDefaultArgs<ExtArgs>
    User?: boolean | Habit_logs$UserArgs<ExtArgs>
  }, ExtArgs["result"]["habit_logs"]>

  export type Habit_logsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    log_date?: boolean
    habitId?: boolean
    userId?: boolean
    Habit?: boolean | HabitsDefaultArgs<ExtArgs>
    User?: boolean | Habit_logs$UserArgs<ExtArgs>
  }, ExtArgs["result"]["habit_logs"]>

  export type Habit_logsSelectScalar = {
    id?: boolean
    log_date?: boolean
    habitId?: boolean
    userId?: boolean
  }

  export type Habit_logsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "log_date" | "habitId" | "userId", ExtArgs["result"]["habit_logs"]>
  export type Habit_logsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habit?: boolean | HabitsDefaultArgs<ExtArgs>
    User?: boolean | Habit_logs$UserArgs<ExtArgs>
  }
  export type Habit_logsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habit?: boolean | HabitsDefaultArgs<ExtArgs>
    User?: boolean | Habit_logs$UserArgs<ExtArgs>
  }
  export type Habit_logsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Habit?: boolean | HabitsDefaultArgs<ExtArgs>
    User?: boolean | Habit_logs$UserArgs<ExtArgs>
  }

  export type $Habit_logsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habit_logs"
    objects: {
      Habit: Prisma.$HabitsPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      log_date: Date
      habitId: number
      userId: string | null
    }, ExtArgs["result"]["habit_logs"]>
    composites: {}
  }

  type Habit_logsGetPayload<S extends boolean | null | undefined | Habit_logsDefaultArgs> = $Result.GetResult<Prisma.$Habit_logsPayload, S>

  type Habit_logsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Habit_logsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Habit_logsCountAggregateInputType | true
    }

  export interface Habit_logsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habit_logs'], meta: { name: 'Habit_logs' } }
    /**
     * Find zero or one Habit_logs that matches the filter.
     * @param {Habit_logsFindUniqueArgs} args - Arguments to find a Habit_logs
     * @example
     * // Get one Habit_logs
     * const habit_logs = await prisma.habit_logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Habit_logsFindUniqueArgs>(args: SelectSubset<T, Habit_logsFindUniqueArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habit_logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Habit_logsFindUniqueOrThrowArgs} args - Arguments to find a Habit_logs
     * @example
     * // Get one Habit_logs
     * const habit_logs = await prisma.habit_logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Habit_logsFindUniqueOrThrowArgs>(args: SelectSubset<T, Habit_logsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsFindFirstArgs} args - Arguments to find a Habit_logs
     * @example
     * // Get one Habit_logs
     * const habit_logs = await prisma.habit_logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Habit_logsFindFirstArgs>(args?: SelectSubset<T, Habit_logsFindFirstArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habit_logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsFindFirstOrThrowArgs} args - Arguments to find a Habit_logs
     * @example
     * // Get one Habit_logs
     * const habit_logs = await prisma.habit_logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Habit_logsFindFirstOrThrowArgs>(args?: SelectSubset<T, Habit_logsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habit_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habit_logs
     * const habit_logs = await prisma.habit_logs.findMany()
     * 
     * // Get first 10 Habit_logs
     * const habit_logs = await prisma.habit_logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habit_logsWithIdOnly = await prisma.habit_logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Habit_logsFindManyArgs>(args?: SelectSubset<T, Habit_logsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habit_logs.
     * @param {Habit_logsCreateArgs} args - Arguments to create a Habit_logs.
     * @example
     * // Create one Habit_logs
     * const Habit_logs = await prisma.habit_logs.create({
     *   data: {
     *     // ... data to create a Habit_logs
     *   }
     * })
     * 
     */
    create<T extends Habit_logsCreateArgs>(args: SelectSubset<T, Habit_logsCreateArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habit_logs.
     * @param {Habit_logsCreateManyArgs} args - Arguments to create many Habit_logs.
     * @example
     * // Create many Habit_logs
     * const habit_logs = await prisma.habit_logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Habit_logsCreateManyArgs>(args?: SelectSubset<T, Habit_logsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habit_logs and returns the data saved in the database.
     * @param {Habit_logsCreateManyAndReturnArgs} args - Arguments to create many Habit_logs.
     * @example
     * // Create many Habit_logs
     * const habit_logs = await prisma.habit_logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habit_logs and only return the `id`
     * const habit_logsWithIdOnly = await prisma.habit_logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Habit_logsCreateManyAndReturnArgs>(args?: SelectSubset<T, Habit_logsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habit_logs.
     * @param {Habit_logsDeleteArgs} args - Arguments to delete one Habit_logs.
     * @example
     * // Delete one Habit_logs
     * const Habit_logs = await prisma.habit_logs.delete({
     *   where: {
     *     // ... filter to delete one Habit_logs
     *   }
     * })
     * 
     */
    delete<T extends Habit_logsDeleteArgs>(args: SelectSubset<T, Habit_logsDeleteArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habit_logs.
     * @param {Habit_logsUpdateArgs} args - Arguments to update one Habit_logs.
     * @example
     * // Update one Habit_logs
     * const habit_logs = await prisma.habit_logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Habit_logsUpdateArgs>(args: SelectSubset<T, Habit_logsUpdateArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habit_logs.
     * @param {Habit_logsDeleteManyArgs} args - Arguments to filter Habit_logs to delete.
     * @example
     * // Delete a few Habit_logs
     * const { count } = await prisma.habit_logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Habit_logsDeleteManyArgs>(args?: SelectSubset<T, Habit_logsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habit_logs
     * const habit_logs = await prisma.habit_logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Habit_logsUpdateManyArgs>(args: SelectSubset<T, Habit_logsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habit_logs and returns the data updated in the database.
     * @param {Habit_logsUpdateManyAndReturnArgs} args - Arguments to update many Habit_logs.
     * @example
     * // Update many Habit_logs
     * const habit_logs = await prisma.habit_logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habit_logs and only return the `id`
     * const habit_logsWithIdOnly = await prisma.habit_logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Habit_logsUpdateManyAndReturnArgs>(args: SelectSubset<T, Habit_logsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habit_logs.
     * @param {Habit_logsUpsertArgs} args - Arguments to update or create a Habit_logs.
     * @example
     * // Update or create a Habit_logs
     * const habit_logs = await prisma.habit_logs.upsert({
     *   create: {
     *     // ... data to create a Habit_logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habit_logs we want to update
     *   }
     * })
     */
    upsert<T extends Habit_logsUpsertArgs>(args: SelectSubset<T, Habit_logsUpsertArgs<ExtArgs>>): Prisma__Habit_logsClient<$Result.GetResult<Prisma.$Habit_logsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsCountArgs} args - Arguments to filter Habit_logs to count.
     * @example
     * // Count the number of Habit_logs
     * const count = await prisma.habit_logs.count({
     *   where: {
     *     // ... the filter for the Habit_logs we want to count
     *   }
     * })
    **/
    count<T extends Habit_logsCountArgs>(
      args?: Subset<T, Habit_logsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Habit_logsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Habit_logsAggregateArgs>(args: Subset<T, Habit_logsAggregateArgs>): Prisma.PrismaPromise<GetHabit_logsAggregateType<T>>

    /**
     * Group by Habit_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Habit_logsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Habit_logsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Habit_logsGroupByArgs['orderBy'] }
        : { orderBy?: Habit_logsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Habit_logsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabit_logsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habit_logs model
   */
  readonly fields: Habit_logsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habit_logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Habit_logsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Habit<T extends HabitsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitsDefaultArgs<ExtArgs>>): Prisma__HabitsClient<$Result.GetResult<Prisma.$HabitsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends Habit_logs$UserArgs<ExtArgs> = {}>(args?: Subset<T, Habit_logs$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habit_logs model
   */
  interface Habit_logsFieldRefs {
    readonly id: FieldRef<"Habit_logs", 'Int'>
    readonly log_date: FieldRef<"Habit_logs", 'DateTime'>
    readonly habitId: FieldRef<"Habit_logs", 'Int'>
    readonly userId: FieldRef<"Habit_logs", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habit_logs findUnique
   */
  export type Habit_logsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * Filter, which Habit_logs to fetch.
     */
    where: Habit_logsWhereUniqueInput
  }

  /**
   * Habit_logs findUniqueOrThrow
   */
  export type Habit_logsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * Filter, which Habit_logs to fetch.
     */
    where: Habit_logsWhereUniqueInput
  }

  /**
   * Habit_logs findFirst
   */
  export type Habit_logsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * Filter, which Habit_logs to fetch.
     */
    where?: Habit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_logs to fetch.
     */
    orderBy?: Habit_logsOrderByWithRelationInput | Habit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habit_logs.
     */
    cursor?: Habit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habit_logs.
     */
    distinct?: Habit_logsScalarFieldEnum | Habit_logsScalarFieldEnum[]
  }

  /**
   * Habit_logs findFirstOrThrow
   */
  export type Habit_logsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * Filter, which Habit_logs to fetch.
     */
    where?: Habit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_logs to fetch.
     */
    orderBy?: Habit_logsOrderByWithRelationInput | Habit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habit_logs.
     */
    cursor?: Habit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habit_logs.
     */
    distinct?: Habit_logsScalarFieldEnum | Habit_logsScalarFieldEnum[]
  }

  /**
   * Habit_logs findMany
   */
  export type Habit_logsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * Filter, which Habit_logs to fetch.
     */
    where?: Habit_logsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habit_logs to fetch.
     */
    orderBy?: Habit_logsOrderByWithRelationInput | Habit_logsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habit_logs.
     */
    cursor?: Habit_logsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habit_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habit_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habit_logs.
     */
    distinct?: Habit_logsScalarFieldEnum | Habit_logsScalarFieldEnum[]
  }

  /**
   * Habit_logs create
   */
  export type Habit_logsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * The data needed to create a Habit_logs.
     */
    data: XOR<Habit_logsCreateInput, Habit_logsUncheckedCreateInput>
  }

  /**
   * Habit_logs createMany
   */
  export type Habit_logsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habit_logs.
     */
    data: Habit_logsCreateManyInput | Habit_logsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habit_logs createManyAndReturn
   */
  export type Habit_logsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * The data used to create many Habit_logs.
     */
    data: Habit_logsCreateManyInput | Habit_logsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit_logs update
   */
  export type Habit_logsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * The data needed to update a Habit_logs.
     */
    data: XOR<Habit_logsUpdateInput, Habit_logsUncheckedUpdateInput>
    /**
     * Choose, which Habit_logs to update.
     */
    where: Habit_logsWhereUniqueInput
  }

  /**
   * Habit_logs updateMany
   */
  export type Habit_logsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habit_logs.
     */
    data: XOR<Habit_logsUpdateManyMutationInput, Habit_logsUncheckedUpdateManyInput>
    /**
     * Filter which Habit_logs to update
     */
    where?: Habit_logsWhereInput
    /**
     * Limit how many Habit_logs to update.
     */
    limit?: number
  }

  /**
   * Habit_logs updateManyAndReturn
   */
  export type Habit_logsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * The data used to update Habit_logs.
     */
    data: XOR<Habit_logsUpdateManyMutationInput, Habit_logsUncheckedUpdateManyInput>
    /**
     * Filter which Habit_logs to update
     */
    where?: Habit_logsWhereInput
    /**
     * Limit how many Habit_logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Habit_logs upsert
   */
  export type Habit_logsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * The filter to search for the Habit_logs to update in case it exists.
     */
    where: Habit_logsWhereUniqueInput
    /**
     * In case the Habit_logs found by the `where` argument doesn't exist, create a new Habit_logs with this data.
     */
    create: XOR<Habit_logsCreateInput, Habit_logsUncheckedCreateInput>
    /**
     * In case the Habit_logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Habit_logsUpdateInput, Habit_logsUncheckedUpdateInput>
  }

  /**
   * Habit_logs delete
   */
  export type Habit_logsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
    /**
     * Filter which Habit_logs to delete.
     */
    where: Habit_logsWhereUniqueInput
  }

  /**
   * Habit_logs deleteMany
   */
  export type Habit_logsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habit_logs to delete
     */
    where?: Habit_logsWhereInput
    /**
     * Limit how many Habit_logs to delete.
     */
    limit?: number
  }

  /**
   * Habit_logs.User
   */
  export type Habit_logs$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Habit_logs without action
   */
  export type Habit_logsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habit_logs
     */
    select?: Habit_logsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habit_logs
     */
    omit?: Habit_logsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Habit_logsInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SessionsScalarFieldEnum: {
    session_id: 'session_id',
    expires: 'expires',
    userId: 'userId'
  };

  export type SessionsScalarFieldEnum = (typeof SessionsScalarFieldEnum)[keyof typeof SessionsScalarFieldEnum]


  export const HabitsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type HabitsScalarFieldEnum = (typeof HabitsScalarFieldEnum)[keyof typeof HabitsScalarFieldEnum]


  export const Habit_logsScalarFieldEnum: {
    id: 'id',
    log_date: 'log_date',
    habitId: 'habitId',
    userId: 'userId'
  };

  export type Habit_logsScalarFieldEnum = (typeof Habit_logsScalarFieldEnum)[keyof typeof Habit_logsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    logs?: Habit_logsListRelationFilter
    habits?: HabitsListRelationFilter
    sessions?: SessionsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    logs?: Habit_logsOrderByRelationAggregateInput
    habits?: HabitsOrderByRelationAggregateInput
    sessions?: SessionsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    logs?: Habit_logsListRelationFilter
    habits?: HabitsListRelationFilter
    sessions?: SessionsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SessionsWhereInput = {
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    session_id?: IntFilter<"Sessions"> | number
    expires?: DateTimeFilter<"Sessions"> | Date | string
    userId?: StringFilter<"Sessions"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionsOrderByWithRelationInput = {
    session_id?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type SessionsWhereUniqueInput = Prisma.AtLeast<{
    session_id?: number
    AND?: SessionsWhereInput | SessionsWhereInput[]
    OR?: SessionsWhereInput[]
    NOT?: SessionsWhereInput | SessionsWhereInput[]
    expires?: DateTimeFilter<"Sessions"> | Date | string
    userId?: StringFilter<"Sessions"> | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "session_id">

  export type SessionsOrderByWithAggregationInput = {
    session_id?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
    _count?: SessionsCountOrderByAggregateInput
    _avg?: SessionsAvgOrderByAggregateInput
    _max?: SessionsMaxOrderByAggregateInput
    _min?: SessionsMinOrderByAggregateInput
    _sum?: SessionsSumOrderByAggregateInput
  }

  export type SessionsScalarWhereWithAggregatesInput = {
    AND?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    OR?: SessionsScalarWhereWithAggregatesInput[]
    NOT?: SessionsScalarWhereWithAggregatesInput | SessionsScalarWhereWithAggregatesInput[]
    session_id?: IntWithAggregatesFilter<"Sessions"> | number
    expires?: DateTimeWithAggregatesFilter<"Sessions"> | Date | string
    userId?: StringWithAggregatesFilter<"Sessions"> | string
  }

  export type HabitsWhereInput = {
    AND?: HabitsWhereInput | HabitsWhereInput[]
    OR?: HabitsWhereInput[]
    NOT?: HabitsWhereInput | HabitsWhereInput[]
    id?: IntFilter<"Habits"> | number
    name?: StringFilter<"Habits"> | string
    description?: StringFilter<"Habits"> | string
    createdAt?: DateTimeFilter<"Habits"> | Date | string
    userId?: StringFilter<"Habits"> | string
    logs?: Habit_logsListRelationFilter
    Author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type HabitsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    logs?: Habit_logsOrderByRelationAggregateInput
    Author?: UserOrderByWithRelationInput
  }

  export type HabitsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HabitsWhereInput | HabitsWhereInput[]
    OR?: HabitsWhereInput[]
    NOT?: HabitsWhereInput | HabitsWhereInput[]
    name?: StringFilter<"Habits"> | string
    description?: StringFilter<"Habits"> | string
    createdAt?: DateTimeFilter<"Habits"> | Date | string
    userId?: StringFilter<"Habits"> | string
    logs?: Habit_logsListRelationFilter
    Author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type HabitsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: HabitsCountOrderByAggregateInput
    _avg?: HabitsAvgOrderByAggregateInput
    _max?: HabitsMaxOrderByAggregateInput
    _min?: HabitsMinOrderByAggregateInput
    _sum?: HabitsSumOrderByAggregateInput
  }

  export type HabitsScalarWhereWithAggregatesInput = {
    AND?: HabitsScalarWhereWithAggregatesInput | HabitsScalarWhereWithAggregatesInput[]
    OR?: HabitsScalarWhereWithAggregatesInput[]
    NOT?: HabitsScalarWhereWithAggregatesInput | HabitsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Habits"> | number
    name?: StringWithAggregatesFilter<"Habits"> | string
    description?: StringWithAggregatesFilter<"Habits"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Habits"> | Date | string
    userId?: StringWithAggregatesFilter<"Habits"> | string
  }

  export type Habit_logsWhereInput = {
    AND?: Habit_logsWhereInput | Habit_logsWhereInput[]
    OR?: Habit_logsWhereInput[]
    NOT?: Habit_logsWhereInput | Habit_logsWhereInput[]
    id?: IntFilter<"Habit_logs"> | number
    log_date?: DateTimeFilter<"Habit_logs"> | Date | string
    habitId?: IntFilter<"Habit_logs"> | number
    userId?: StringNullableFilter<"Habit_logs"> | string | null
    Habit?: XOR<HabitsScalarRelationFilter, HabitsWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type Habit_logsOrderByWithRelationInput = {
    id?: SortOrder
    log_date?: SortOrder
    habitId?: SortOrder
    userId?: SortOrderInput | SortOrder
    Habit?: HabitsOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type Habit_logsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Habit_logsWhereInput | Habit_logsWhereInput[]
    OR?: Habit_logsWhereInput[]
    NOT?: Habit_logsWhereInput | Habit_logsWhereInput[]
    log_date?: DateTimeFilter<"Habit_logs"> | Date | string
    habitId?: IntFilter<"Habit_logs"> | number
    userId?: StringNullableFilter<"Habit_logs"> | string | null
    Habit?: XOR<HabitsScalarRelationFilter, HabitsWhereInput>
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type Habit_logsOrderByWithAggregationInput = {
    id?: SortOrder
    log_date?: SortOrder
    habitId?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: Habit_logsCountOrderByAggregateInput
    _avg?: Habit_logsAvgOrderByAggregateInput
    _max?: Habit_logsMaxOrderByAggregateInput
    _min?: Habit_logsMinOrderByAggregateInput
    _sum?: Habit_logsSumOrderByAggregateInput
  }

  export type Habit_logsScalarWhereWithAggregatesInput = {
    AND?: Habit_logsScalarWhereWithAggregatesInput | Habit_logsScalarWhereWithAggregatesInput[]
    OR?: Habit_logsScalarWhereWithAggregatesInput[]
    NOT?: Habit_logsScalarWhereWithAggregatesInput | Habit_logsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Habit_logs"> | number
    log_date?: DateTimeWithAggregatesFilter<"Habit_logs"> | Date | string
    habitId?: IntWithAggregatesFilter<"Habit_logs"> | number
    userId?: StringNullableWithAggregatesFilter<"Habit_logs"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    logs?: Habit_logsCreateNestedManyWithoutUserInput
    habits?: HabitsCreateNestedManyWithoutAuthorInput
    sessions?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    logs?: Habit_logsUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitsUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUpdateManyWithoutUserNestedInput
    habits?: HabitsUpdateManyWithoutAuthorNestedInput
    sessions?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitsUncheckedUpdateManyWithoutAuthorNestedInput
    sessions?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsCreateInput = {
    expires: Date | string
    User: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionsUncheckedCreateInput = {
    session_id?: number
    expires: Date | string
    userId: string
  }

  export type SessionsUpdateInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionsUncheckedUpdateInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type SessionsCreateManyInput = {
    session_id?: number
    expires: Date | string
    userId: string
  }

  export type SessionsUpdateManyMutationInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateManyInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HabitsCreateInput = {
    name: string
    description?: string
    createdAt?: Date | string
    logs?: Habit_logsCreateNestedManyWithoutHabitInput
    Author: UserCreateNestedOneWithoutHabitsInput
  }

  export type HabitsUncheckedCreateInput = {
    id?: number
    name: string
    description?: string
    createdAt?: Date | string
    userId: string
    logs?: Habit_logsUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUpdateManyWithoutHabitNestedInput
    Author?: UserUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    logs?: Habit_logsUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitsCreateManyInput = {
    id?: number
    name: string
    description?: string
    createdAt?: Date | string
    userId: string
  }

  export type HabitsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Habit_logsCreateInput = {
    log_date?: Date | string
    Habit: HabitsCreateNestedOneWithoutLogsInput
    User?: UserCreateNestedOneWithoutLogsInput
  }

  export type Habit_logsUncheckedCreateInput = {
    id?: number
    log_date?: Date | string
    habitId: number
    userId?: string | null
  }

  export type Habit_logsUpdateInput = {
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Habit?: HabitsUpdateOneRequiredWithoutLogsNestedInput
    User?: UserUpdateOneWithoutLogsNestedInput
  }

  export type Habit_logsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habit_logsCreateManyInput = {
    id?: number
    log_date?: Date | string
    habitId: number
    userId?: string | null
  }

  export type Habit_logsUpdateManyMutationInput = {
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Habit_logsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Habit_logsListRelationFilter = {
    every?: Habit_logsWhereInput
    some?: Habit_logsWhereInput
    none?: Habit_logsWhereInput
  }

  export type HabitsListRelationFilter = {
    every?: HabitsWhereInput
    some?: HabitsWhereInput
    none?: HabitsWhereInput
  }

  export type SessionsListRelationFilter = {
    every?: SessionsWhereInput
    some?: SessionsWhereInput
    none?: SessionsWhereInput
  }

  export type Habit_logsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SessionsCountOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
  }

  export type SessionsAvgOrderByAggregateInput = {
    session_id?: SortOrder
  }

  export type SessionsMaxOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
  }

  export type SessionsMinOrderByAggregateInput = {
    session_id?: SortOrder
    expires?: SortOrder
    userId?: SortOrder
  }

  export type SessionsSumOrderByAggregateInput = {
    session_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type HabitsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type HabitsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type HabitsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type HabitsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type HabitsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type HabitsScalarRelationFilter = {
    is?: HabitsWhereInput
    isNot?: HabitsWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Habit_logsCountOrderByAggregateInput = {
    id?: SortOrder
    log_date?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
  }

  export type Habit_logsAvgOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
  }

  export type Habit_logsMaxOrderByAggregateInput = {
    id?: SortOrder
    log_date?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
  }

  export type Habit_logsMinOrderByAggregateInput = {
    id?: SortOrder
    log_date?: SortOrder
    habitId?: SortOrder
    userId?: SortOrder
  }

  export type Habit_logsSumOrderByAggregateInput = {
    id?: SortOrder
    habitId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type Habit_logsCreateNestedManyWithoutUserInput = {
    create?: XOR<Habit_logsCreateWithoutUserInput, Habit_logsUncheckedCreateWithoutUserInput> | Habit_logsCreateWithoutUserInput[] | Habit_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutUserInput | Habit_logsCreateOrConnectWithoutUserInput[]
    createMany?: Habit_logsCreateManyUserInputEnvelope
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
  }

  export type HabitsCreateNestedManyWithoutAuthorInput = {
    create?: XOR<HabitsCreateWithoutAuthorInput, HabitsUncheckedCreateWithoutAuthorInput> | HabitsCreateWithoutAuthorInput[] | HabitsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HabitsCreateOrConnectWithoutAuthorInput | HabitsCreateOrConnectWithoutAuthorInput[]
    createMany?: HabitsCreateManyAuthorInputEnvelope
    connect?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
  }

  export type SessionsCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type Habit_logsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Habit_logsCreateWithoutUserInput, Habit_logsUncheckedCreateWithoutUserInput> | Habit_logsCreateWithoutUserInput[] | Habit_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutUserInput | Habit_logsCreateOrConnectWithoutUserInput[]
    createMany?: Habit_logsCreateManyUserInputEnvelope
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
  }

  export type HabitsUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<HabitsCreateWithoutAuthorInput, HabitsUncheckedCreateWithoutAuthorInput> | HabitsCreateWithoutAuthorInput[] | HabitsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HabitsCreateOrConnectWithoutAuthorInput | HabitsCreateOrConnectWithoutAuthorInput[]
    createMany?: HabitsCreateManyAuthorInputEnvelope
    connect?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
  }

  export type SessionsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type Habit_logsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Habit_logsCreateWithoutUserInput, Habit_logsUncheckedCreateWithoutUserInput> | Habit_logsCreateWithoutUserInput[] | Habit_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutUserInput | Habit_logsCreateOrConnectWithoutUserInput[]
    upsert?: Habit_logsUpsertWithWhereUniqueWithoutUserInput | Habit_logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Habit_logsCreateManyUserInputEnvelope
    set?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    disconnect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    delete?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    update?: Habit_logsUpdateWithWhereUniqueWithoutUserInput | Habit_logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Habit_logsUpdateManyWithWhereWithoutUserInput | Habit_logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Habit_logsScalarWhereInput | Habit_logsScalarWhereInput[]
  }

  export type HabitsUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<HabitsCreateWithoutAuthorInput, HabitsUncheckedCreateWithoutAuthorInput> | HabitsCreateWithoutAuthorInput[] | HabitsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HabitsCreateOrConnectWithoutAuthorInput | HabitsCreateOrConnectWithoutAuthorInput[]
    upsert?: HabitsUpsertWithWhereUniqueWithoutAuthorInput | HabitsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: HabitsCreateManyAuthorInputEnvelope
    set?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    disconnect?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    delete?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    connect?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    update?: HabitsUpdateWithWhereUniqueWithoutAuthorInput | HabitsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: HabitsUpdateManyWithWhereWithoutAuthorInput | HabitsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: HabitsScalarWhereInput | HabitsScalarWhereInput[]
  }

  export type SessionsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type Habit_logsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Habit_logsCreateWithoutUserInput, Habit_logsUncheckedCreateWithoutUserInput> | Habit_logsCreateWithoutUserInput[] | Habit_logsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutUserInput | Habit_logsCreateOrConnectWithoutUserInput[]
    upsert?: Habit_logsUpsertWithWhereUniqueWithoutUserInput | Habit_logsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Habit_logsCreateManyUserInputEnvelope
    set?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    disconnect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    delete?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    update?: Habit_logsUpdateWithWhereUniqueWithoutUserInput | Habit_logsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Habit_logsUpdateManyWithWhereWithoutUserInput | Habit_logsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Habit_logsScalarWhereInput | Habit_logsScalarWhereInput[]
  }

  export type HabitsUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<HabitsCreateWithoutAuthorInput, HabitsUncheckedCreateWithoutAuthorInput> | HabitsCreateWithoutAuthorInput[] | HabitsUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: HabitsCreateOrConnectWithoutAuthorInput | HabitsCreateOrConnectWithoutAuthorInput[]
    upsert?: HabitsUpsertWithWhereUniqueWithoutAuthorInput | HabitsUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: HabitsCreateManyAuthorInputEnvelope
    set?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    disconnect?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    delete?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    connect?: HabitsWhereUniqueInput | HabitsWhereUniqueInput[]
    update?: HabitsUpdateWithWhereUniqueWithoutAuthorInput | HabitsUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: HabitsUpdateManyWithWhereWithoutAuthorInput | HabitsUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: HabitsScalarWhereInput | HabitsScalarWhereInput[]
  }

  export type SessionsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput> | SessionsCreateWithoutUserInput[] | SessionsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionsCreateOrConnectWithoutUserInput | SessionsCreateOrConnectWithoutUserInput[]
    upsert?: SessionsUpsertWithWhereUniqueWithoutUserInput | SessionsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionsCreateManyUserInputEnvelope
    set?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    disconnect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    delete?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    connect?: SessionsWhereUniqueInput | SessionsWhereUniqueInput[]
    update?: SessionsUpdateWithWhereUniqueWithoutUserInput | SessionsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionsUpdateManyWithWhereWithoutUserInput | SessionsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type Habit_logsCreateNestedManyWithoutHabitInput = {
    create?: XOR<Habit_logsCreateWithoutHabitInput, Habit_logsUncheckedCreateWithoutHabitInput> | Habit_logsCreateWithoutHabitInput[] | Habit_logsUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutHabitInput | Habit_logsCreateOrConnectWithoutHabitInput[]
    createMany?: Habit_logsCreateManyHabitInputEnvelope
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutHabitsInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    connect?: UserWhereUniqueInput
  }

  export type Habit_logsUncheckedCreateNestedManyWithoutHabitInput = {
    create?: XOR<Habit_logsCreateWithoutHabitInput, Habit_logsUncheckedCreateWithoutHabitInput> | Habit_logsCreateWithoutHabitInput[] | Habit_logsUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutHabitInput | Habit_logsCreateOrConnectWithoutHabitInput[]
    createMany?: Habit_logsCreateManyHabitInputEnvelope
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
  }

  export type Habit_logsUpdateManyWithoutHabitNestedInput = {
    create?: XOR<Habit_logsCreateWithoutHabitInput, Habit_logsUncheckedCreateWithoutHabitInput> | Habit_logsCreateWithoutHabitInput[] | Habit_logsUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutHabitInput | Habit_logsCreateOrConnectWithoutHabitInput[]
    upsert?: Habit_logsUpsertWithWhereUniqueWithoutHabitInput | Habit_logsUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: Habit_logsCreateManyHabitInputEnvelope
    set?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    disconnect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    delete?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    update?: Habit_logsUpdateWithWhereUniqueWithoutHabitInput | Habit_logsUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: Habit_logsUpdateManyWithWhereWithoutHabitInput | Habit_logsUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: Habit_logsScalarWhereInput | Habit_logsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutHabitsNestedInput = {
    create?: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHabitsInput
    upsert?: UserUpsertWithoutHabitsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHabitsInput, UserUpdateWithoutHabitsInput>, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type Habit_logsUncheckedUpdateManyWithoutHabitNestedInput = {
    create?: XOR<Habit_logsCreateWithoutHabitInput, Habit_logsUncheckedCreateWithoutHabitInput> | Habit_logsCreateWithoutHabitInput[] | Habit_logsUncheckedCreateWithoutHabitInput[]
    connectOrCreate?: Habit_logsCreateOrConnectWithoutHabitInput | Habit_logsCreateOrConnectWithoutHabitInput[]
    upsert?: Habit_logsUpsertWithWhereUniqueWithoutHabitInput | Habit_logsUpsertWithWhereUniqueWithoutHabitInput[]
    createMany?: Habit_logsCreateManyHabitInputEnvelope
    set?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    disconnect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    delete?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    connect?: Habit_logsWhereUniqueInput | Habit_logsWhereUniqueInput[]
    update?: Habit_logsUpdateWithWhereUniqueWithoutHabitInput | Habit_logsUpdateWithWhereUniqueWithoutHabitInput[]
    updateMany?: Habit_logsUpdateManyWithWhereWithoutHabitInput | Habit_logsUpdateManyWithWhereWithoutHabitInput[]
    deleteMany?: Habit_logsScalarWhereInput | Habit_logsScalarWhereInput[]
  }

  export type HabitsCreateNestedOneWithoutLogsInput = {
    create?: XOR<HabitsCreateWithoutLogsInput, HabitsUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutLogsInput
    connect?: HabitsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLogsInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    connect?: UserWhereUniqueInput
  }

  export type HabitsUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<HabitsCreateWithoutLogsInput, HabitsUncheckedCreateWithoutLogsInput>
    connectOrCreate?: HabitsCreateOrConnectWithoutLogsInput
    upsert?: HabitsUpsertWithoutLogsInput
    connect?: HabitsWhereUniqueInput
    update?: XOR<XOR<HabitsUpdateToOneWithWhereWithoutLogsInput, HabitsUpdateWithoutLogsInput>, HabitsUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateOneWithoutLogsNestedInput = {
    create?: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLogsInput
    upsert?: UserUpsertWithoutLogsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLogsInput, UserUpdateWithoutLogsInput>, UserUncheckedUpdateWithoutLogsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type Habit_logsCreateWithoutUserInput = {
    log_date?: Date | string
    Habit: HabitsCreateNestedOneWithoutLogsInput
  }

  export type Habit_logsUncheckedCreateWithoutUserInput = {
    id?: number
    log_date?: Date | string
    habitId: number
  }

  export type Habit_logsCreateOrConnectWithoutUserInput = {
    where: Habit_logsWhereUniqueInput
    create: XOR<Habit_logsCreateWithoutUserInput, Habit_logsUncheckedCreateWithoutUserInput>
  }

  export type Habit_logsCreateManyUserInputEnvelope = {
    data: Habit_logsCreateManyUserInput | Habit_logsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type HabitsCreateWithoutAuthorInput = {
    name: string
    description?: string
    createdAt?: Date | string
    logs?: Habit_logsCreateNestedManyWithoutHabitInput
  }

  export type HabitsUncheckedCreateWithoutAuthorInput = {
    id?: number
    name: string
    description?: string
    createdAt?: Date | string
    logs?: Habit_logsUncheckedCreateNestedManyWithoutHabitInput
  }

  export type HabitsCreateOrConnectWithoutAuthorInput = {
    where: HabitsWhereUniqueInput
    create: XOR<HabitsCreateWithoutAuthorInput, HabitsUncheckedCreateWithoutAuthorInput>
  }

  export type HabitsCreateManyAuthorInputEnvelope = {
    data: HabitsCreateManyAuthorInput | HabitsCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type SessionsCreateWithoutUserInput = {
    expires: Date | string
  }

  export type SessionsUncheckedCreateWithoutUserInput = {
    session_id?: number
    expires: Date | string
  }

  export type SessionsCreateOrConnectWithoutUserInput = {
    where: SessionsWhereUniqueInput
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsCreateManyUserInputEnvelope = {
    data: SessionsCreateManyUserInput | SessionsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Habit_logsUpsertWithWhereUniqueWithoutUserInput = {
    where: Habit_logsWhereUniqueInput
    update: XOR<Habit_logsUpdateWithoutUserInput, Habit_logsUncheckedUpdateWithoutUserInput>
    create: XOR<Habit_logsCreateWithoutUserInput, Habit_logsUncheckedCreateWithoutUserInput>
  }

  export type Habit_logsUpdateWithWhereUniqueWithoutUserInput = {
    where: Habit_logsWhereUniqueInput
    data: XOR<Habit_logsUpdateWithoutUserInput, Habit_logsUncheckedUpdateWithoutUserInput>
  }

  export type Habit_logsUpdateManyWithWhereWithoutUserInput = {
    where: Habit_logsScalarWhereInput
    data: XOR<Habit_logsUpdateManyMutationInput, Habit_logsUncheckedUpdateManyWithoutUserInput>
  }

  export type Habit_logsScalarWhereInput = {
    AND?: Habit_logsScalarWhereInput | Habit_logsScalarWhereInput[]
    OR?: Habit_logsScalarWhereInput[]
    NOT?: Habit_logsScalarWhereInput | Habit_logsScalarWhereInput[]
    id?: IntFilter<"Habit_logs"> | number
    log_date?: DateTimeFilter<"Habit_logs"> | Date | string
    habitId?: IntFilter<"Habit_logs"> | number
    userId?: StringNullableFilter<"Habit_logs"> | string | null
  }

  export type HabitsUpsertWithWhereUniqueWithoutAuthorInput = {
    where: HabitsWhereUniqueInput
    update: XOR<HabitsUpdateWithoutAuthorInput, HabitsUncheckedUpdateWithoutAuthorInput>
    create: XOR<HabitsCreateWithoutAuthorInput, HabitsUncheckedCreateWithoutAuthorInput>
  }

  export type HabitsUpdateWithWhereUniqueWithoutAuthorInput = {
    where: HabitsWhereUniqueInput
    data: XOR<HabitsUpdateWithoutAuthorInput, HabitsUncheckedUpdateWithoutAuthorInput>
  }

  export type HabitsUpdateManyWithWhereWithoutAuthorInput = {
    where: HabitsScalarWhereInput
    data: XOR<HabitsUpdateManyMutationInput, HabitsUncheckedUpdateManyWithoutAuthorInput>
  }

  export type HabitsScalarWhereInput = {
    AND?: HabitsScalarWhereInput | HabitsScalarWhereInput[]
    OR?: HabitsScalarWhereInput[]
    NOT?: HabitsScalarWhereInput | HabitsScalarWhereInput[]
    id?: IntFilter<"Habits"> | number
    name?: StringFilter<"Habits"> | string
    description?: StringFilter<"Habits"> | string
    createdAt?: DateTimeFilter<"Habits"> | Date | string
    userId?: StringFilter<"Habits"> | string
  }

  export type SessionsUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    update: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
    create: XOR<SessionsCreateWithoutUserInput, SessionsUncheckedCreateWithoutUserInput>
  }

  export type SessionsUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionsWhereUniqueInput
    data: XOR<SessionsUpdateWithoutUserInput, SessionsUncheckedUpdateWithoutUserInput>
  }

  export type SessionsUpdateManyWithWhereWithoutUserInput = {
    where: SessionsScalarWhereInput
    data: XOR<SessionsUpdateManyMutationInput, SessionsUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionsScalarWhereInput = {
    AND?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    OR?: SessionsScalarWhereInput[]
    NOT?: SessionsScalarWhereInput | SessionsScalarWhereInput[]
    session_id?: IntFilter<"Sessions"> | number
    expires?: DateTimeFilter<"Sessions"> | Date | string
    userId?: StringFilter<"Sessions"> | string
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    logs?: Habit_logsCreateNestedManyWithoutUserInput
    habits?: HabitsCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    logs?: Habit_logsUncheckedCreateNestedManyWithoutUserInput
    habits?: HabitsUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUpdateManyWithoutUserNestedInput
    habits?: HabitsUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUncheckedUpdateManyWithoutUserNestedInput
    habits?: HabitsUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type Habit_logsCreateWithoutHabitInput = {
    log_date?: Date | string
    User?: UserCreateNestedOneWithoutLogsInput
  }

  export type Habit_logsUncheckedCreateWithoutHabitInput = {
    id?: number
    log_date?: Date | string
    userId?: string | null
  }

  export type Habit_logsCreateOrConnectWithoutHabitInput = {
    where: Habit_logsWhereUniqueInput
    create: XOR<Habit_logsCreateWithoutHabitInput, Habit_logsUncheckedCreateWithoutHabitInput>
  }

  export type Habit_logsCreateManyHabitInputEnvelope = {
    data: Habit_logsCreateManyHabitInput | Habit_logsCreateManyHabitInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutHabitsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    logs?: Habit_logsCreateNestedManyWithoutUserInput
    sessions?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHabitsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    logs?: Habit_logsUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHabitsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
  }

  export type Habit_logsUpsertWithWhereUniqueWithoutHabitInput = {
    where: Habit_logsWhereUniqueInput
    update: XOR<Habit_logsUpdateWithoutHabitInput, Habit_logsUncheckedUpdateWithoutHabitInput>
    create: XOR<Habit_logsCreateWithoutHabitInput, Habit_logsUncheckedCreateWithoutHabitInput>
  }

  export type Habit_logsUpdateWithWhereUniqueWithoutHabitInput = {
    where: Habit_logsWhereUniqueInput
    data: XOR<Habit_logsUpdateWithoutHabitInput, Habit_logsUncheckedUpdateWithoutHabitInput>
  }

  export type Habit_logsUpdateManyWithWhereWithoutHabitInput = {
    where: Habit_logsScalarWhereInput
    data: XOR<Habit_logsUpdateManyMutationInput, Habit_logsUncheckedUpdateManyWithoutHabitInput>
  }

  export type UserUpsertWithoutHabitsInput = {
    update: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
    create: XOR<UserCreateWithoutHabitsInput, UserUncheckedCreateWithoutHabitsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHabitsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHabitsInput, UserUncheckedUpdateWithoutHabitsInput>
  }

  export type UserUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUpdateManyWithoutUserNestedInput
    sessions?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHabitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HabitsCreateWithoutLogsInput = {
    name: string
    description?: string
    createdAt?: Date | string
    Author: UserCreateNestedOneWithoutHabitsInput
  }

  export type HabitsUncheckedCreateWithoutLogsInput = {
    id?: number
    name: string
    description?: string
    createdAt?: Date | string
    userId: string
  }

  export type HabitsCreateOrConnectWithoutLogsInput = {
    where: HabitsWhereUniqueInput
    create: XOR<HabitsCreateWithoutLogsInput, HabitsUncheckedCreateWithoutLogsInput>
  }

  export type UserCreateWithoutLogsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    habits?: HabitsCreateNestedManyWithoutAuthorInput
    sessions?: SessionsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLogsInput = {
    id?: string
    email: string
    name: string
    password: string
    createdAt?: Date | string
    habits?: HabitsUncheckedCreateNestedManyWithoutAuthorInput
    sessions?: SessionsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
  }

  export type HabitsUpsertWithoutLogsInput = {
    update: XOR<HabitsUpdateWithoutLogsInput, HabitsUncheckedUpdateWithoutLogsInput>
    create: XOR<HabitsCreateWithoutLogsInput, HabitsUncheckedCreateWithoutLogsInput>
    where?: HabitsWhereInput
  }

  export type HabitsUpdateToOneWithWhereWithoutLogsInput = {
    where?: HabitsWhereInput
    data: XOR<HabitsUpdateWithoutLogsInput, HabitsUncheckedUpdateWithoutLogsInput>
  }

  export type HabitsUpdateWithoutLogsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Author?: UserUpdateOneRequiredWithoutHabitsNestedInput
  }

  export type HabitsUncheckedUpdateWithoutLogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutLogsInput = {
    update: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
    create: XOR<UserCreateWithoutLogsInput, UserUncheckedCreateWithoutLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLogsInput, UserUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitsUpdateManyWithoutAuthorNestedInput
    sessions?: SessionsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habits?: HabitsUncheckedUpdateManyWithoutAuthorNestedInput
    sessions?: SessionsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type Habit_logsCreateManyUserInput = {
    id?: number
    log_date?: Date | string
    habitId: number
  }

  export type HabitsCreateManyAuthorInput = {
    id?: number
    name: string
    description?: string
    createdAt?: Date | string
  }

  export type SessionsCreateManyUserInput = {
    session_id?: number
    expires: Date | string
  }

  export type Habit_logsUpdateWithoutUserInput = {
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    Habit?: HabitsUpdateOneRequiredWithoutLogsNestedInput
  }

  export type Habit_logsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: IntFieldUpdateOperationsInput | number
  }

  export type Habit_logsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    habitId?: IntFieldUpdateOperationsInput | number
  }

  export type HabitsUpdateWithoutAuthorInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUpdateManyWithoutHabitNestedInput
  }

  export type HabitsUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    logs?: Habit_logsUncheckedUpdateManyWithoutHabitNestedInput
  }

  export type HabitsUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUpdateWithoutUserInput = {
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateWithoutUserInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionsUncheckedUpdateManyWithoutUserInput = {
    session_id?: IntFieldUpdateOperationsInput | number
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Habit_logsCreateManyHabitInput = {
    id?: number
    log_date?: Date | string
    userId?: string | null
  }

  export type Habit_logsUpdateWithoutHabitInput = {
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutLogsNestedInput
  }

  export type Habit_logsUncheckedUpdateWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Habit_logsUncheckedUpdateManyWithoutHabitInput = {
    id?: IntFieldUpdateOperationsInput | number
    log_date?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}