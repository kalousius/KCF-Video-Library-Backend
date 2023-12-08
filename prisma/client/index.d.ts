
/**
 * Client
**/

import * as runtime from './runtime/library';
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
 * Model MovieCatalog
 * 
 */
export type MovieCatalog = $Result.DefaultSelection<Prisma.$MovieCatalogPayload>
/**
 * Model MovieDetails
 * 
 */
export type MovieDetails = $Result.DefaultSelection<Prisma.$MovieDetailsPayload>
/**
 * Model OrderDetails
 * 
 */
export type OrderDetails = $Result.DefaultSelection<Prisma.$OrderDetailsPayload>
/**
 * Model PaymentDetails
 * 
 */
export type PaymentDetails = $Result.DefaultSelection<Prisma.$PaymentDetailsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.movieCatalog`: Exposes CRUD operations for the **MovieCatalog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieCatalogs
    * const movieCatalogs = await prisma.movieCatalog.findMany()
    * ```
    */
  get movieCatalog(): Prisma.MovieCatalogDelegate<ExtArgs>;

  /**
   * `prisma.movieDetails`: Exposes CRUD operations for the **MovieDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieDetails
    * const movieDetails = await prisma.movieDetails.findMany()
    * ```
    */
  get movieDetails(): Prisma.MovieDetailsDelegate<ExtArgs>;

  /**
   * `prisma.orderDetails`: Exposes CRUD operations for the **OrderDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderDetails
    * const orderDetails = await prisma.orderDetails.findMany()
    * ```
    */
  get orderDetails(): Prisma.OrderDetailsDelegate<ExtArgs>;

  /**
   * `prisma.paymentDetails`: Exposes CRUD operations for the **PaymentDetails** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentDetails
    * const paymentDetails = await prisma.paymentDetails.findMany()
    * ```
    */
  get paymentDetails(): Prisma.PaymentDetailsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    MovieCatalog: 'MovieCatalog',
    MovieDetails: 'MovieDetails',
    OrderDetails: 'OrderDetails',
    PaymentDetails: 'PaymentDetails'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'movieCatalog' | 'movieDetails' | 'orderDetails' | 'paymentDetails'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MovieCatalog: {
        payload: Prisma.$MovieCatalogPayload<ExtArgs>
        fields: Prisma.MovieCatalogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieCatalogFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieCatalogFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>
          }
          findFirst: {
            args: Prisma.MovieCatalogFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieCatalogFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>
          }
          findMany: {
            args: Prisma.MovieCatalogFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>[]
          }
          create: {
            args: Prisma.MovieCatalogCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>
          }
          createMany: {
            args: Prisma.MovieCatalogCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieCatalogDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>
          }
          update: {
            args: Prisma.MovieCatalogUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>
          }
          deleteMany: {
            args: Prisma.MovieCatalogDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieCatalogUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieCatalogUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieCatalogPayload>
          }
          aggregate: {
            args: Prisma.MovieCatalogAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovieCatalog>
          }
          groupBy: {
            args: Prisma.MovieCatalogGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieCatalogGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCatalogCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieCatalogCountAggregateOutputType> | number
          }
        }
      }
      MovieDetails: {
        payload: Prisma.$MovieDetailsPayload<ExtArgs>
        fields: Prisma.MovieDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>
          }
          findFirst: {
            args: Prisma.MovieDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>
          }
          findMany: {
            args: Prisma.MovieDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>[]
          }
          create: {
            args: Prisma.MovieDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>
          }
          createMany: {
            args: Prisma.MovieDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>
          }
          update: {
            args: Prisma.MovieDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>
          }
          deleteMany: {
            args: Prisma.MovieDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieDetailsPayload>
          }
          aggregate: {
            args: Prisma.MovieDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovieDetails>
          }
          groupBy: {
            args: Prisma.MovieDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieDetailsCountAggregateOutputType> | number
          }
        }
      }
      OrderDetails: {
        payload: Prisma.$OrderDetailsPayload<ExtArgs>
        fields: Prisma.OrderDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findFirst: {
            args: Prisma.OrderDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          findMany: {
            args: Prisma.OrderDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>[]
          }
          create: {
            args: Prisma.OrderDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          createMany: {
            args: Prisma.OrderDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrderDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          update: {
            args: Prisma.OrderDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          deleteMany: {
            args: Prisma.OrderDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrderDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrderDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrderDetailsPayload>
          }
          aggregate: {
            args: Prisma.OrderDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrderDetails>
          }
          groupBy: {
            args: Prisma.OrderDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrderDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<OrderDetailsCountAggregateOutputType> | number
          }
        }
      }
      PaymentDetails: {
        payload: Prisma.$PaymentDetailsPayload<ExtArgs>
        fields: Prisma.PaymentDetailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentDetailsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          findFirst: {
            args: Prisma.PaymentDetailsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentDetailsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          findMany: {
            args: Prisma.PaymentDetailsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>[]
          }
          create: {
            args: Prisma.PaymentDetailsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          createMany: {
            args: Prisma.PaymentDetailsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PaymentDetailsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          update: {
            args: Prisma.PaymentDetailsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDetailsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentDetailsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PaymentDetailsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PaymentDetailsPayload>
          }
          aggregate: {
            args: Prisma.PaymentDetailsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePaymentDetails>
          }
          groupBy: {
            args: Prisma.PaymentDetailsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PaymentDetailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentDetailsCountArgs<ExtArgs>,
            result: $Utils.Optional<PaymentDetailsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'update'
    | 'updateMany'
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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    movieCatalog: number
    orderDetails: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCatalog?: boolean | UserCountOutputTypeCountMovieCatalogArgs
    orderDetails?: boolean | UserCountOutputTypeCountOrderDetailsArgs
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
  export type UserCountOutputTypeCountMovieCatalogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCatalogWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
  }



  /**
   * Count Type MovieCatalogCountOutputType
   */

  export type MovieCatalogCountOutputType = {
    movieDetails: number
  }

  export type MovieCatalogCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieDetails?: boolean | MovieCatalogCountOutputTypeCountMovieDetailsArgs
  }

  // Custom InputTypes

  /**
   * MovieCatalogCountOutputType without action
   */
  export type MovieCatalogCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalogCountOutputType
     */
    select?: MovieCatalogCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * MovieCatalogCountOutputType without action
   */
  export type MovieCatalogCountOutputTypeCountMovieDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDetailsWhereInput
  }



  /**
   * Count Type OrderDetailsCountOutputType
   */

  export type OrderDetailsCountOutputType = {
    payments: number
  }

  export type OrderDetailsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | OrderDetailsCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes

  /**
   * OrderDetailsCountOutputType without action
   */
  export type OrderDetailsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetailsCountOutputType
     */
    select?: OrderDetailsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrderDetailsCountOutputType without action
   */
  export type OrderDetailsCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    fullName: string | null
    email: string | null
    username: string | null
    password: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    fullName: number
    email: number
    username: number
    password: number
    role: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    username?: true
    password?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    fullName?: true
    email?: true
    username?: true
    password?: true
    role?: true
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
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
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
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    fullName: string
    email: string
    username: string
    password: string
    role: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
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
    fullName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
    movieCatalog?: boolean | User$movieCatalogArgs<ExtArgs>
    orderDetails?: boolean | User$orderDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    fullName?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movieCatalog?: boolean | User$movieCatalogArgs<ExtArgs>
    orderDetails?: boolean | User$orderDetailsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      movieCatalog: Prisma.$MovieCatalogPayload<ExtArgs>[]
      orderDetails: Prisma.$OrderDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullName: string
      email: string
      username: string
      password: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movieCatalog<T extends User$movieCatalogArgs<ExtArgs> = {}>(args?: Subset<T, User$movieCatalogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findMany'> | Null>;

    orderDetails<T extends User$orderDetailsArgs<ExtArgs> = {}>(args?: Subset<T, User$orderDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
     * Choose, which related nodes to fetch as well.
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
  }


  /**
   * User.movieCatalog
   */
  export type User$movieCatalogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    where?: MovieCatalogWhereInput
    orderBy?: MovieCatalogOrderByWithRelationInput | MovieCatalogOrderByWithRelationInput[]
    cursor?: MovieCatalogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieCatalogScalarFieldEnum | MovieCatalogScalarFieldEnum[]
  }


  /**
   * User.orderDetails
   */
  export type User$orderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    cursor?: OrderDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model MovieCatalog
   */

  export type AggregateMovieCatalog = {
    _count: MovieCatalogCountAggregateOutputType | null
    _avg: MovieCatalogAvgAggregateOutputType | null
    _sum: MovieCatalogSumAggregateOutputType | null
    _min: MovieCatalogMinAggregateOutputType | null
    _max: MovieCatalogMaxAggregateOutputType | null
  }

  export type MovieCatalogAvgAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    userId: number | null
  }

  export type MovieCatalogSumAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    userId: number | null
  }

  export type MovieCatalogMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    rating: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type MovieCatalogMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    price: number | null
    rating: number | null
    imageUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type MovieCatalogCountAggregateOutputType = {
    id: number
    title: number
    description: number
    price: number
    rating: number
    imageUrl: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type MovieCatalogAvgAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    userId?: true
  }

  export type MovieCatalogSumAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    userId?: true
  }

  export type MovieCatalogMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    rating?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MovieCatalogMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    rating?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type MovieCatalogCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    price?: true
    rating?: true
    imageUrl?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type MovieCatalogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieCatalog to aggregate.
     */
    where?: MovieCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCatalogs to fetch.
     */
    orderBy?: MovieCatalogOrderByWithRelationInput | MovieCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieCatalogs
    **/
    _count?: true | MovieCatalogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieCatalogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieCatalogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieCatalogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieCatalogMaxAggregateInputType
  }

  export type GetMovieCatalogAggregateType<T extends MovieCatalogAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieCatalog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieCatalog[P]>
      : GetScalarType<T[P], AggregateMovieCatalog[P]>
  }




  export type MovieCatalogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieCatalogWhereInput
    orderBy?: MovieCatalogOrderByWithAggregationInput | MovieCatalogOrderByWithAggregationInput[]
    by: MovieCatalogScalarFieldEnum[] | MovieCatalogScalarFieldEnum
    having?: MovieCatalogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCatalogCountAggregateInputType | true
    _avg?: MovieCatalogAvgAggregateInputType
    _sum?: MovieCatalogSumAggregateInputType
    _min?: MovieCatalogMinAggregateInputType
    _max?: MovieCatalogMaxAggregateInputType
  }

  export type MovieCatalogGroupByOutputType = {
    id: number
    title: string
    description: string
    price: number
    rating: number
    imageUrl: string | null
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: MovieCatalogCountAggregateOutputType | null
    _avg: MovieCatalogAvgAggregateOutputType | null
    _sum: MovieCatalogSumAggregateOutputType | null
    _min: MovieCatalogMinAggregateOutputType | null
    _max: MovieCatalogMaxAggregateOutputType | null
  }

  type GetMovieCatalogGroupByPayload<T extends MovieCatalogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieCatalogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieCatalogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieCatalogGroupByOutputType[P]>
            : GetScalarType<T[P], MovieCatalogGroupByOutputType[P]>
        }
      >
    >


  export type MovieCatalogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    rating?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieDetails?: boolean | MovieCatalog$movieDetailsArgs<ExtArgs>
    _count?: boolean | MovieCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieCatalog"]>

  export type MovieCatalogSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    price?: boolean
    rating?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type MovieCatalogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movieDetails?: boolean | MovieCatalog$movieDetailsArgs<ExtArgs>
    _count?: boolean | MovieCatalogCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MovieCatalogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieCatalog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movieDetails: Prisma.$MovieDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      price: number
      rating: number
      imageUrl: string | null
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["movieCatalog"]>
    composites: {}
  }


  type MovieCatalogGetPayload<S extends boolean | null | undefined | MovieCatalogDefaultArgs> = $Result.GetResult<Prisma.$MovieCatalogPayload, S>

  type MovieCatalogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieCatalogFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MovieCatalogCountAggregateInputType | true
    }

  export interface MovieCatalogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieCatalog'], meta: { name: 'MovieCatalog' } }
    /**
     * Find zero or one MovieCatalog that matches the filter.
     * @param {MovieCatalogFindUniqueArgs} args - Arguments to find a MovieCatalog
     * @example
     * // Get one MovieCatalog
     * const movieCatalog = await prisma.movieCatalog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieCatalogFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCatalogFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MovieCatalog that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieCatalogFindUniqueOrThrowArgs} args - Arguments to find a MovieCatalog
     * @example
     * // Get one MovieCatalog
     * const movieCatalog = await prisma.movieCatalog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieCatalogFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCatalogFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MovieCatalog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogFindFirstArgs} args - Arguments to find a MovieCatalog
     * @example
     * // Get one MovieCatalog
     * const movieCatalog = await prisma.movieCatalog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieCatalogFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCatalogFindFirstArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MovieCatalog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogFindFirstOrThrowArgs} args - Arguments to find a MovieCatalog
     * @example
     * // Get one MovieCatalog
     * const movieCatalog = await prisma.movieCatalog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieCatalogFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCatalogFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MovieCatalogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieCatalogs
     * const movieCatalogs = await prisma.movieCatalog.findMany()
     * 
     * // Get first 10 MovieCatalogs
     * const movieCatalogs = await prisma.movieCatalog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieCatalogWithIdOnly = await prisma.movieCatalog.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieCatalogFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCatalogFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MovieCatalog.
     * @param {MovieCatalogCreateArgs} args - Arguments to create a MovieCatalog.
     * @example
     * // Create one MovieCatalog
     * const MovieCatalog = await prisma.movieCatalog.create({
     *   data: {
     *     // ... data to create a MovieCatalog
     *   }
     * })
     * 
    **/
    create<T extends MovieCatalogCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCatalogCreateArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MovieCatalogs.
     *     @param {MovieCatalogCreateManyArgs} args - Arguments to create many MovieCatalogs.
     *     @example
     *     // Create many MovieCatalogs
     *     const movieCatalog = await prisma.movieCatalog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieCatalogCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCatalogCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieCatalog.
     * @param {MovieCatalogDeleteArgs} args - Arguments to delete one MovieCatalog.
     * @example
     * // Delete one MovieCatalog
     * const MovieCatalog = await prisma.movieCatalog.delete({
     *   where: {
     *     // ... filter to delete one MovieCatalog
     *   }
     * })
     * 
    **/
    delete<T extends MovieCatalogDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCatalogDeleteArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MovieCatalog.
     * @param {MovieCatalogUpdateArgs} args - Arguments to update one MovieCatalog.
     * @example
     * // Update one MovieCatalog
     * const movieCatalog = await prisma.movieCatalog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieCatalogUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCatalogUpdateArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MovieCatalogs.
     * @param {MovieCatalogDeleteManyArgs} args - Arguments to filter MovieCatalogs to delete.
     * @example
     * // Delete a few MovieCatalogs
     * const { count } = await prisma.movieCatalog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieCatalogDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieCatalogDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieCatalogs
     * const movieCatalog = await prisma.movieCatalog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieCatalogUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCatalogUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieCatalog.
     * @param {MovieCatalogUpsertArgs} args - Arguments to update or create a MovieCatalog.
     * @example
     * // Update or create a MovieCatalog
     * const movieCatalog = await prisma.movieCatalog.upsert({
     *   create: {
     *     // ... data to create a MovieCatalog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieCatalog we want to update
     *   }
     * })
    **/
    upsert<T extends MovieCatalogUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieCatalogUpsertArgs<ExtArgs>>
    ): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MovieCatalogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogCountArgs} args - Arguments to filter MovieCatalogs to count.
     * @example
     * // Count the number of MovieCatalogs
     * const count = await prisma.movieCatalog.count({
     *   where: {
     *     // ... the filter for the MovieCatalogs we want to count
     *   }
     * })
    **/
    count<T extends MovieCatalogCountArgs>(
      args?: Subset<T, MovieCatalogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCatalogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieCatalogAggregateArgs>(args: Subset<T, MovieCatalogAggregateArgs>): Prisma.PrismaPromise<GetMovieCatalogAggregateType<T>>

    /**
     * Group by MovieCatalog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCatalogGroupByArgs} args - Group by arguments.
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
      T extends MovieCatalogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieCatalogGroupByArgs['orderBy'] }
        : { orderBy?: MovieCatalogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieCatalogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieCatalogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieCatalog model
   */
  readonly fields: MovieCatalogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieCatalog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieCatalogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    movieDetails<T extends MovieCatalog$movieDetailsArgs<ExtArgs> = {}>(args?: Subset<T, MovieCatalog$movieDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MovieCatalog model
   */ 
  interface MovieCatalogFieldRefs {
    readonly id: FieldRef<"MovieCatalog", 'Int'>
    readonly title: FieldRef<"MovieCatalog", 'String'>
    readonly description: FieldRef<"MovieCatalog", 'String'>
    readonly price: FieldRef<"MovieCatalog", 'Float'>
    readonly rating: FieldRef<"MovieCatalog", 'Float'>
    readonly imageUrl: FieldRef<"MovieCatalog", 'String'>
    readonly createdAt: FieldRef<"MovieCatalog", 'DateTime'>
    readonly updatedAt: FieldRef<"MovieCatalog", 'DateTime'>
    readonly userId: FieldRef<"MovieCatalog", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * MovieCatalog findUnique
   */
  export type MovieCatalogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * Filter, which MovieCatalog to fetch.
     */
    where: MovieCatalogWhereUniqueInput
  }


  /**
   * MovieCatalog findUniqueOrThrow
   */
  export type MovieCatalogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * Filter, which MovieCatalog to fetch.
     */
    where: MovieCatalogWhereUniqueInput
  }


  /**
   * MovieCatalog findFirst
   */
  export type MovieCatalogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * Filter, which MovieCatalog to fetch.
     */
    where?: MovieCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCatalogs to fetch.
     */
    orderBy?: MovieCatalogOrderByWithRelationInput | MovieCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieCatalogs.
     */
    cursor?: MovieCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieCatalogs.
     */
    distinct?: MovieCatalogScalarFieldEnum | MovieCatalogScalarFieldEnum[]
  }


  /**
   * MovieCatalog findFirstOrThrow
   */
  export type MovieCatalogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * Filter, which MovieCatalog to fetch.
     */
    where?: MovieCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCatalogs to fetch.
     */
    orderBy?: MovieCatalogOrderByWithRelationInput | MovieCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieCatalogs.
     */
    cursor?: MovieCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCatalogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieCatalogs.
     */
    distinct?: MovieCatalogScalarFieldEnum | MovieCatalogScalarFieldEnum[]
  }


  /**
   * MovieCatalog findMany
   */
  export type MovieCatalogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * Filter, which MovieCatalogs to fetch.
     */
    where?: MovieCatalogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieCatalogs to fetch.
     */
    orderBy?: MovieCatalogOrderByWithRelationInput | MovieCatalogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieCatalogs.
     */
    cursor?: MovieCatalogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieCatalogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieCatalogs.
     */
    skip?: number
    distinct?: MovieCatalogScalarFieldEnum | MovieCatalogScalarFieldEnum[]
  }


  /**
   * MovieCatalog create
   */
  export type MovieCatalogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieCatalog.
     */
    data: XOR<MovieCatalogCreateInput, MovieCatalogUncheckedCreateInput>
  }


  /**
   * MovieCatalog createMany
   */
  export type MovieCatalogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieCatalogs.
     */
    data: MovieCatalogCreateManyInput | MovieCatalogCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MovieCatalog update
   */
  export type MovieCatalogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieCatalog.
     */
    data: XOR<MovieCatalogUpdateInput, MovieCatalogUncheckedUpdateInput>
    /**
     * Choose, which MovieCatalog to update.
     */
    where: MovieCatalogWhereUniqueInput
  }


  /**
   * MovieCatalog updateMany
   */
  export type MovieCatalogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieCatalogs.
     */
    data: XOR<MovieCatalogUpdateManyMutationInput, MovieCatalogUncheckedUpdateManyInput>
    /**
     * Filter which MovieCatalogs to update
     */
    where?: MovieCatalogWhereInput
  }


  /**
   * MovieCatalog upsert
   */
  export type MovieCatalogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieCatalog to update in case it exists.
     */
    where: MovieCatalogWhereUniqueInput
    /**
     * In case the MovieCatalog found by the `where` argument doesn't exist, create a new MovieCatalog with this data.
     */
    create: XOR<MovieCatalogCreateInput, MovieCatalogUncheckedCreateInput>
    /**
     * In case the MovieCatalog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieCatalogUpdateInput, MovieCatalogUncheckedUpdateInput>
  }


  /**
   * MovieCatalog delete
   */
  export type MovieCatalogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
    /**
     * Filter which MovieCatalog to delete.
     */
    where: MovieCatalogWhereUniqueInput
  }


  /**
   * MovieCatalog deleteMany
   */
  export type MovieCatalogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieCatalogs to delete
     */
    where?: MovieCatalogWhereInput
  }


  /**
   * MovieCatalog.movieDetails
   */
  export type MovieCatalog$movieDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    where?: MovieDetailsWhereInput
    orderBy?: MovieDetailsOrderByWithRelationInput | MovieDetailsOrderByWithRelationInput[]
    cursor?: MovieDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieDetailsScalarFieldEnum | MovieDetailsScalarFieldEnum[]
  }


  /**
   * MovieCatalog without action
   */
  export type MovieCatalogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCatalog
     */
    select?: MovieCatalogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieCatalogInclude<ExtArgs> | null
  }



  /**
   * Model MovieDetails
   */

  export type AggregateMovieDetails = {
    _count: MovieDetailsCountAggregateOutputType | null
    _avg: MovieDetailsAvgAggregateOutputType | null
    _sum: MovieDetailsSumAggregateOutputType | null
    _min: MovieDetailsMinAggregateOutputType | null
    _max: MovieDetailsMaxAggregateOutputType | null
  }

  export type MovieDetailsAvgAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    movieId: number | null
  }

  export type MovieDetailsSumAggregateOutputType = {
    id: number | null
    price: number | null
    rating: number | null
    movieId: number | null
  }

  export type MovieDetailsMinAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    director: string | null
    price: number | null
    rating: number | null
    imageUrl: string | null
    createdAt: Date | null
    movieId: number | null
  }

  export type MovieDetailsMaxAggregateOutputType = {
    id: number | null
    title: string | null
    description: string | null
    director: string | null
    price: number | null
    rating: number | null
    imageUrl: string | null
    createdAt: Date | null
    movieId: number | null
  }

  export type MovieDetailsCountAggregateOutputType = {
    id: number
    title: number
    description: number
    director: number
    price: number
    rating: number
    imageUrl: number
    createdAt: number
    movieId: number
    _all: number
  }


  export type MovieDetailsAvgAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    movieId?: true
  }

  export type MovieDetailsSumAggregateInputType = {
    id?: true
    price?: true
    rating?: true
    movieId?: true
  }

  export type MovieDetailsMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    director?: true
    price?: true
    rating?: true
    imageUrl?: true
    createdAt?: true
    movieId?: true
  }

  export type MovieDetailsMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    director?: true
    price?: true
    rating?: true
    imageUrl?: true
    createdAt?: true
    movieId?: true
  }

  export type MovieDetailsCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    director?: true
    price?: true
    rating?: true
    imageUrl?: true
    createdAt?: true
    movieId?: true
    _all?: true
  }

  export type MovieDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieDetails to aggregate.
     */
    where?: MovieDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailsOrderByWithRelationInput | MovieDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieDetails
    **/
    _count?: true | MovieDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieDetailsMaxAggregateInputType
  }

  export type GetMovieDetailsAggregateType<T extends MovieDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieDetails[P]>
      : GetScalarType<T[P], AggregateMovieDetails[P]>
  }




  export type MovieDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieDetailsWhereInput
    orderBy?: MovieDetailsOrderByWithAggregationInput | MovieDetailsOrderByWithAggregationInput[]
    by: MovieDetailsScalarFieldEnum[] | MovieDetailsScalarFieldEnum
    having?: MovieDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieDetailsCountAggregateInputType | true
    _avg?: MovieDetailsAvgAggregateInputType
    _sum?: MovieDetailsSumAggregateInputType
    _min?: MovieDetailsMinAggregateInputType
    _max?: MovieDetailsMaxAggregateInputType
  }

  export type MovieDetailsGroupByOutputType = {
    id: number
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl: string | null
    createdAt: Date
    movieId: number
    _count: MovieDetailsCountAggregateOutputType | null
    _avg: MovieDetailsAvgAggregateOutputType | null
    _sum: MovieDetailsSumAggregateOutputType | null
    _min: MovieDetailsMinAggregateOutputType | null
    _max: MovieDetailsMaxAggregateOutputType | null
  }

  type GetMovieDetailsGroupByPayload<T extends MovieDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], MovieDetailsGroupByOutputType[P]>
        }
      >
    >


  export type MovieDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    director?: boolean
    price?: boolean
    rating?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    movieId?: boolean
    movie?: boolean | MovieCatalogDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieDetails"]>

  export type MovieDetailsSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    director?: boolean
    price?: boolean
    rating?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    movieId?: boolean
  }

  export type MovieDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MovieCatalogDefaultArgs<ExtArgs>
  }


  export type $MovieDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieDetails"
    objects: {
      movie: Prisma.$MovieCatalogPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      description: string
      director: string
      price: number
      rating: number
      imageUrl: string | null
      createdAt: Date
      movieId: number
    }, ExtArgs["result"]["movieDetails"]>
    composites: {}
  }


  type MovieDetailsGetPayload<S extends boolean | null | undefined | MovieDetailsDefaultArgs> = $Result.GetResult<Prisma.$MovieDetailsPayload, S>

  type MovieDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieDetailsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: MovieDetailsCountAggregateInputType | true
    }

  export interface MovieDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieDetails'], meta: { name: 'MovieDetails' } }
    /**
     * Find zero or one MovieDetails that matches the filter.
     * @param {MovieDetailsFindUniqueArgs} args - Arguments to find a MovieDetails
     * @example
     * // Get one MovieDetails
     * const movieDetails = await prisma.movieDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MovieDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieDetailsFindUniqueOrThrowArgs} args - Arguments to find a MovieDetails
     * @example
     * // Get one MovieDetails
     * const movieDetails = await prisma.movieDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MovieDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsFindFirstArgs} args - Arguments to find a MovieDetails
     * @example
     * // Get one MovieDetails
     * const movieDetails = await prisma.movieDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MovieDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsFindFirstOrThrowArgs} args - Arguments to find a MovieDetails
     * @example
     * // Get one MovieDetails
     * const movieDetails = await prisma.movieDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MovieDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieDetails
     * const movieDetails = await prisma.movieDetails.findMany()
     * 
     * // Get first 10 MovieDetails
     * const movieDetails = await prisma.movieDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieDetailsWithIdOnly = await prisma.movieDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MovieDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MovieDetails.
     * @param {MovieDetailsCreateArgs} args - Arguments to create a MovieDetails.
     * @example
     * // Create one MovieDetails
     * const MovieDetails = await prisma.movieDetails.create({
     *   data: {
     *     // ... data to create a MovieDetails
     *   }
     * })
     * 
    **/
    create<T extends MovieDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDetailsCreateArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MovieDetails.
     *     @param {MovieDetailsCreateManyArgs} args - Arguments to create many MovieDetails.
     *     @example
     *     // Create many MovieDetails
     *     const movieDetails = await prisma.movieDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieDetails.
     * @param {MovieDetailsDeleteArgs} args - Arguments to delete one MovieDetails.
     * @example
     * // Delete one MovieDetails
     * const MovieDetails = await prisma.movieDetails.delete({
     *   where: {
     *     // ... filter to delete one MovieDetails
     *   }
     * })
     * 
    **/
    delete<T extends MovieDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDetailsDeleteArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MovieDetails.
     * @param {MovieDetailsUpdateArgs} args - Arguments to update one MovieDetails.
     * @example
     * // Update one MovieDetails
     * const movieDetails = await prisma.movieDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDetailsUpdateArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MovieDetails.
     * @param {MovieDetailsDeleteManyArgs} args - Arguments to filter MovieDetails to delete.
     * @example
     * // Delete a few MovieDetails
     * const { count } = await prisma.movieDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieDetails
     * const movieDetails = await prisma.movieDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieDetails.
     * @param {MovieDetailsUpsertArgs} args - Arguments to update or create a MovieDetails.
     * @example
     * // Update or create a MovieDetails
     * const movieDetails = await prisma.movieDetails.upsert({
     *   create: {
     *     // ... data to create a MovieDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieDetails we want to update
     *   }
     * })
    **/
    upsert<T extends MovieDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieDetailsUpsertArgs<ExtArgs>>
    ): Prisma__MovieDetailsClient<$Result.GetResult<Prisma.$MovieDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MovieDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsCountArgs} args - Arguments to filter MovieDetails to count.
     * @example
     * // Count the number of MovieDetails
     * const count = await prisma.movieDetails.count({
     *   where: {
     *     // ... the filter for the MovieDetails we want to count
     *   }
     * })
    **/
    count<T extends MovieDetailsCountArgs>(
      args?: Subset<T, MovieDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieDetailsAggregateArgs>(args: Subset<T, MovieDetailsAggregateArgs>): Prisma.PrismaPromise<GetMovieDetailsAggregateType<T>>

    /**
     * Group by MovieDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieDetailsGroupByArgs} args - Group by arguments.
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
      T extends MovieDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieDetailsGroupByArgs['orderBy'] }
        : { orderBy?: MovieDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieDetails model
   */
  readonly fields: MovieDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movie<T extends MovieCatalogDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieCatalogDefaultArgs<ExtArgs>>): Prisma__MovieCatalogClient<$Result.GetResult<Prisma.$MovieCatalogPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MovieDetails model
   */ 
  interface MovieDetailsFieldRefs {
    readonly id: FieldRef<"MovieDetails", 'Int'>
    readonly title: FieldRef<"MovieDetails", 'String'>
    readonly description: FieldRef<"MovieDetails", 'String'>
    readonly director: FieldRef<"MovieDetails", 'String'>
    readonly price: FieldRef<"MovieDetails", 'Float'>
    readonly rating: FieldRef<"MovieDetails", 'Float'>
    readonly imageUrl: FieldRef<"MovieDetails", 'String'>
    readonly createdAt: FieldRef<"MovieDetails", 'DateTime'>
    readonly movieId: FieldRef<"MovieDetails", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * MovieDetails findUnique
   */
  export type MovieDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetails to fetch.
     */
    where: MovieDetailsWhereUniqueInput
  }


  /**
   * MovieDetails findUniqueOrThrow
   */
  export type MovieDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetails to fetch.
     */
    where: MovieDetailsWhereUniqueInput
  }


  /**
   * MovieDetails findFirst
   */
  export type MovieDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetails to fetch.
     */
    where?: MovieDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailsOrderByWithRelationInput | MovieDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieDetails.
     */
    cursor?: MovieDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieDetails.
     */
    distinct?: MovieDetailsScalarFieldEnum | MovieDetailsScalarFieldEnum[]
  }


  /**
   * MovieDetails findFirstOrThrow
   */
  export type MovieDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetails to fetch.
     */
    where?: MovieDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailsOrderByWithRelationInput | MovieDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieDetails.
     */
    cursor?: MovieDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieDetails.
     */
    distinct?: MovieDetailsScalarFieldEnum | MovieDetailsScalarFieldEnum[]
  }


  /**
   * MovieDetails findMany
   */
  export type MovieDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * Filter, which MovieDetails to fetch.
     */
    where?: MovieDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieDetails to fetch.
     */
    orderBy?: MovieDetailsOrderByWithRelationInput | MovieDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieDetails.
     */
    cursor?: MovieDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieDetails.
     */
    skip?: number
    distinct?: MovieDetailsScalarFieldEnum | MovieDetailsScalarFieldEnum[]
  }


  /**
   * MovieDetails create
   */
  export type MovieDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieDetails.
     */
    data: XOR<MovieDetailsCreateInput, MovieDetailsUncheckedCreateInput>
  }


  /**
   * MovieDetails createMany
   */
  export type MovieDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieDetails.
     */
    data: MovieDetailsCreateManyInput | MovieDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MovieDetails update
   */
  export type MovieDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieDetails.
     */
    data: XOR<MovieDetailsUpdateInput, MovieDetailsUncheckedUpdateInput>
    /**
     * Choose, which MovieDetails to update.
     */
    where: MovieDetailsWhereUniqueInput
  }


  /**
   * MovieDetails updateMany
   */
  export type MovieDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieDetails.
     */
    data: XOR<MovieDetailsUpdateManyMutationInput, MovieDetailsUncheckedUpdateManyInput>
    /**
     * Filter which MovieDetails to update
     */
    where?: MovieDetailsWhereInput
  }


  /**
   * MovieDetails upsert
   */
  export type MovieDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieDetails to update in case it exists.
     */
    where: MovieDetailsWhereUniqueInput
    /**
     * In case the MovieDetails found by the `where` argument doesn't exist, create a new MovieDetails with this data.
     */
    create: XOR<MovieDetailsCreateInput, MovieDetailsUncheckedCreateInput>
    /**
     * In case the MovieDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieDetailsUpdateInput, MovieDetailsUncheckedUpdateInput>
  }


  /**
   * MovieDetails delete
   */
  export type MovieDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
    /**
     * Filter which MovieDetails to delete.
     */
    where: MovieDetailsWhereUniqueInput
  }


  /**
   * MovieDetails deleteMany
   */
  export type MovieDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieDetails to delete
     */
    where?: MovieDetailsWhereInput
  }


  /**
   * MovieDetails without action
   */
  export type MovieDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieDetails
     */
    select?: MovieDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MovieDetailsInclude<ExtArgs> | null
  }



  /**
   * Model OrderDetails
   */

  export type AggregateOrderDetails = {
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  export type OrderDetailsAvgAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    quantity: number | null
    customerId: number | null
    userId: number | null
  }

  export type OrderDetailsSumAggregateOutputType = {
    id: number | null
    totalPrice: number | null
    quantity: number | null
    customerId: number | null
    userId: number | null
  }

  export type OrderDetailsMinAggregateOutputType = {
    id: number | null
    status: string | null
    totalPrice: number | null
    quantity: number | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrderDetailsMaxAggregateOutputType = {
    id: number | null
    status: string | null
    totalPrice: number | null
    quantity: number | null
    customerId: number | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrderDetailsCountAggregateOutputType = {
    id: number
    status: number
    totalPrice: number
    quantity: number
    customerId: number
    items: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OrderDetailsAvgAggregateInputType = {
    id?: true
    totalPrice?: true
    quantity?: true
    customerId?: true
    userId?: true
  }

  export type OrderDetailsSumAggregateInputType = {
    id?: true
    totalPrice?: true
    quantity?: true
    customerId?: true
    userId?: true
  }

  export type OrderDetailsMinAggregateInputType = {
    id?: true
    status?: true
    totalPrice?: true
    quantity?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrderDetailsMaxAggregateInputType = {
    id?: true
    status?: true
    totalPrice?: true
    quantity?: true
    customerId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrderDetailsCountAggregateInputType = {
    id?: true
    status?: true
    totalPrice?: true
    quantity?: true
    customerId?: true
    items?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OrderDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to aggregate.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderDetails
    **/
    _count?: true | OrderDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type GetOrderDetailsAggregateType<T extends OrderDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderDetails[P]>
      : GetScalarType<T[P], AggregateOrderDetails[P]>
  }




  export type OrderDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderDetailsWhereInput
    orderBy?: OrderDetailsOrderByWithAggregationInput | OrderDetailsOrderByWithAggregationInput[]
    by: OrderDetailsScalarFieldEnum[] | OrderDetailsScalarFieldEnum
    having?: OrderDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderDetailsCountAggregateInputType | true
    _avg?: OrderDetailsAvgAggregateInputType
    _sum?: OrderDetailsSumAggregateInputType
    _min?: OrderDetailsMinAggregateInputType
    _max?: OrderDetailsMaxAggregateInputType
  }

  export type OrderDetailsGroupByOutputType = {
    id: number
    status: string
    totalPrice: number
    quantity: number
    customerId: number
    items: JsonValue
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: OrderDetailsCountAggregateOutputType | null
    _avg: OrderDetailsAvgAggregateOutputType | null
    _sum: OrderDetailsSumAggregateOutputType | null
    _min: OrderDetailsMinAggregateOutputType | null
    _max: OrderDetailsMaxAggregateOutputType | null
  }

  type GetOrderDetailsGroupByPayload<T extends OrderDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], OrderDetailsGroupByOutputType[P]>
        }
      >
    >


  export type OrderDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    totalPrice?: boolean
    quantity?: boolean
    customerId?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | OrderDetails$paymentsArgs<ExtArgs>
    _count?: boolean | OrderDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderDetails"]>

  export type OrderDetailsSelectScalar = {
    id?: boolean
    status?: boolean
    totalPrice?: boolean
    quantity?: boolean
    customerId?: boolean
    items?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type OrderDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    payments?: boolean | OrderDetails$paymentsArgs<ExtArgs>
    _count?: boolean | OrderDetailsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrderDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderDetails"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      payments: Prisma.$PaymentDetailsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      totalPrice: number
      quantity: number
      customerId: number
      items: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["orderDetails"]>
    composites: {}
  }


  type OrderDetailsGetPayload<S extends boolean | null | undefined | OrderDetailsDefaultArgs> = $Result.GetResult<Prisma.$OrderDetailsPayload, S>

  type OrderDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OrderDetailsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: OrderDetailsCountAggregateInputType | true
    }

  export interface OrderDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderDetails'], meta: { name: 'OrderDetails' } }
    /**
     * Find zero or one OrderDetails that matches the filter.
     * @param {OrderDetailsFindUniqueArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrderDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one OrderDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrderDetailsFindUniqueOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrderDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first OrderDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindFirstOrThrowArgs} args - Arguments to find a OrderDetails
     * @example
     * // Get one OrderDetails
     * const orderDetails = await prisma.orderDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrderDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more OrderDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany()
     * 
     * // Get first 10 OrderDetails
     * const orderDetails = await prisma.orderDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderDetailsWithIdOnly = await prisma.orderDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrderDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a OrderDetails.
     * @param {OrderDetailsCreateArgs} args - Arguments to create a OrderDetails.
     * @example
     * // Create one OrderDetails
     * const OrderDetails = await prisma.orderDetails.create({
     *   data: {
     *     // ... data to create a OrderDetails
     *   }
     * })
     * 
    **/
    create<T extends OrderDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsCreateArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many OrderDetails.
     *     @param {OrderDetailsCreateManyArgs} args - Arguments to create many OrderDetails.
     *     @example
     *     // Create many OrderDetails
     *     const orderDetails = await prisma.orderDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrderDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderDetails.
     * @param {OrderDetailsDeleteArgs} args - Arguments to delete one OrderDetails.
     * @example
     * // Delete one OrderDetails
     * const OrderDetails = await prisma.orderDetails.delete({
     *   where: {
     *     // ... filter to delete one OrderDetails
     *   }
     * })
     * 
    **/
    delete<T extends OrderDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsDeleteArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one OrderDetails.
     * @param {OrderDetailsUpdateArgs} args - Arguments to update one OrderDetails.
     * @example
     * // Update one OrderDetails
     * const orderDetails = await prisma.orderDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrderDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsUpdateArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more OrderDetails.
     * @param {OrderDetailsDeleteManyArgs} args - Arguments to filter OrderDetails to delete.
     * @example
     * // Delete a few OrderDetails
     * const { count } = await prisma.orderDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrderDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrderDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderDetails
     * const orderDetails = await prisma.orderDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrderDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderDetails.
     * @param {OrderDetailsUpsertArgs} args - Arguments to update or create a OrderDetails.
     * @example
     * // Update or create a OrderDetails
     * const orderDetails = await prisma.orderDetails.upsert({
     *   create: {
     *     // ... data to create a OrderDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderDetails we want to update
     *   }
     * })
    **/
    upsert<T extends OrderDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrderDetailsUpsertArgs<ExtArgs>>
    ): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsCountArgs} args - Arguments to filter OrderDetails to count.
     * @example
     * // Count the number of OrderDetails
     * const count = await prisma.orderDetails.count({
     *   where: {
     *     // ... the filter for the OrderDetails we want to count
     *   }
     * })
    **/
    count<T extends OrderDetailsCountArgs>(
      args?: Subset<T, OrderDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderDetailsAggregateArgs>(args: Subset<T, OrderDetailsAggregateArgs>): Prisma.PrismaPromise<GetOrderDetailsAggregateType<T>>

    /**
     * Group by OrderDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderDetailsGroupByArgs} args - Group by arguments.
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
      T extends OrderDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderDetailsGroupByArgs['orderBy'] }
        : { orderBy?: OrderDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderDetails model
   */
  readonly fields: OrderDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    payments<T extends OrderDetails$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetails$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the OrderDetails model
   */ 
  interface OrderDetailsFieldRefs {
    readonly id: FieldRef<"OrderDetails", 'Int'>
    readonly status: FieldRef<"OrderDetails", 'String'>
    readonly totalPrice: FieldRef<"OrderDetails", 'Float'>
    readonly quantity: FieldRef<"OrderDetails", 'Int'>
    readonly customerId: FieldRef<"OrderDetails", 'Int'>
    readonly items: FieldRef<"OrderDetails", 'Json'>
    readonly createdAt: FieldRef<"OrderDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderDetails", 'DateTime'>
    readonly userId: FieldRef<"OrderDetails", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * OrderDetails findUnique
   */
  export type OrderDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails findUniqueOrThrow
   */
  export type OrderDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails findFirst
   */
  export type OrderDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails findFirstOrThrow
   */
  export type OrderDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderDetails.
     */
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails findMany
   */
  export type OrderDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter, which OrderDetails to fetch.
     */
    where?: OrderDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderDetails to fetch.
     */
    orderBy?: OrderDetailsOrderByWithRelationInput | OrderDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderDetails.
     */
    cursor?: OrderDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderDetails.
     */
    skip?: number
    distinct?: OrderDetailsScalarFieldEnum | OrderDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails create
   */
  export type OrderDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderDetails.
     */
    data: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
  }


  /**
   * OrderDetails createMany
   */
  export type OrderDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderDetails.
     */
    data: OrderDetailsCreateManyInput | OrderDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * OrderDetails update
   */
  export type OrderDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderDetails.
     */
    data: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
    /**
     * Choose, which OrderDetails to update.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails updateMany
   */
  export type OrderDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderDetails.
     */
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyInput>
    /**
     * Filter which OrderDetails to update
     */
    where?: OrderDetailsWhereInput
  }


  /**
   * OrderDetails upsert
   */
  export type OrderDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderDetails to update in case it exists.
     */
    where: OrderDetailsWhereUniqueInput
    /**
     * In case the OrderDetails found by the `where` argument doesn't exist, create a new OrderDetails with this data.
     */
    create: XOR<OrderDetailsCreateInput, OrderDetailsUncheckedCreateInput>
    /**
     * In case the OrderDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderDetailsUpdateInput, OrderDetailsUncheckedUpdateInput>
  }


  /**
   * OrderDetails delete
   */
  export type OrderDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
    /**
     * Filter which OrderDetails to delete.
     */
    where: OrderDetailsWhereUniqueInput
  }


  /**
   * OrderDetails deleteMany
   */
  export type OrderDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderDetails to delete
     */
    where?: OrderDetailsWhereInput
  }


  /**
   * OrderDetails.payments
   */
  export type OrderDetails$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    where?: PaymentDetailsWhereInput
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    cursor?: PaymentDetailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }


  /**
   * OrderDetails without action
   */
  export type OrderDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderDetails
     */
    select?: OrderDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrderDetailsInclude<ExtArgs> | null
  }



  /**
   * Model PaymentDetails
   */

  export type AggregatePaymentDetails = {
    _count: PaymentDetailsCountAggregateOutputType | null
    _avg: PaymentDetailsAvgAggregateOutputType | null
    _sum: PaymentDetailsSumAggregateOutputType | null
    _min: PaymentDetailsMinAggregateOutputType | null
    _max: PaymentDetailsMaxAggregateOutputType | null
  }

  export type PaymentDetailsAvgAggregateOutputType = {
    id: number | null
    amountPaid: number | null
    orderId: number | null
  }

  export type PaymentDetailsSumAggregateOutputType = {
    id: number | null
    amountPaid: number | null
    orderId: number | null
  }

  export type PaymentDetailsMinAggregateOutputType = {
    id: number | null
    amountPaid: number | null
    paymentMethod: string | null
    orderId: number | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentDetailsMaxAggregateOutputType = {
    id: number | null
    amountPaid: number | null
    paymentMethod: string | null
    orderId: number | null
    transactionId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentDetailsCountAggregateOutputType = {
    id: number
    amountPaid: number
    paymentMethod: number
    orderId: number
    transactionId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentDetailsAvgAggregateInputType = {
    id?: true
    amountPaid?: true
    orderId?: true
  }

  export type PaymentDetailsSumAggregateInputType = {
    id?: true
    amountPaid?: true
    orderId?: true
  }

  export type PaymentDetailsMinAggregateInputType = {
    id?: true
    amountPaid?: true
    paymentMethod?: true
    orderId?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentDetailsMaxAggregateInputType = {
    id?: true
    amountPaid?: true
    paymentMethod?: true
    orderId?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentDetailsCountAggregateInputType = {
    id?: true
    amountPaid?: true
    paymentMethod?: true
    orderId?: true
    transactionId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentDetailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to aggregate.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentDetails
    **/
    _count?: true | PaymentDetailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentDetailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentDetailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentDetailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentDetailsMaxAggregateInputType
  }

  export type GetPaymentDetailsAggregateType<T extends PaymentDetailsAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentDetails]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentDetails[P]>
      : GetScalarType<T[P], AggregatePaymentDetails[P]>
  }




  export type PaymentDetailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentDetailsWhereInput
    orderBy?: PaymentDetailsOrderByWithAggregationInput | PaymentDetailsOrderByWithAggregationInput[]
    by: PaymentDetailsScalarFieldEnum[] | PaymentDetailsScalarFieldEnum
    having?: PaymentDetailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentDetailsCountAggregateInputType | true
    _avg?: PaymentDetailsAvgAggregateInputType
    _sum?: PaymentDetailsSumAggregateInputType
    _min?: PaymentDetailsMinAggregateInputType
    _max?: PaymentDetailsMaxAggregateInputType
  }

  export type PaymentDetailsGroupByOutputType = {
    id: number
    amountPaid: number
    paymentMethod: string
    orderId: number
    transactionId: string
    createdAt: Date
    updatedAt: Date
    _count: PaymentDetailsCountAggregateOutputType | null
    _avg: PaymentDetailsAvgAggregateOutputType | null
    _sum: PaymentDetailsSumAggregateOutputType | null
    _min: PaymentDetailsMinAggregateOutputType | null
    _max: PaymentDetailsMaxAggregateOutputType | null
  }

  type GetPaymentDetailsGroupByPayload<T extends PaymentDetailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentDetailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentDetailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentDetailsGroupByOutputType[P]>
        }
      >
    >


  export type PaymentDetailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amountPaid?: boolean
    paymentMethod?: boolean
    orderId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paymentDetails"]>

  export type PaymentDetailsSelectScalar = {
    id?: boolean
    amountPaid?: boolean
    paymentMethod?: boolean
    orderId?: boolean
    transactionId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentDetailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDetailsDefaultArgs<ExtArgs>
  }


  export type $PaymentDetailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentDetails"
    objects: {
      order: Prisma.$OrderDetailsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      amountPaid: number
      paymentMethod: string
      orderId: number
      transactionId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentDetails"]>
    composites: {}
  }


  type PaymentDetailsGetPayload<S extends boolean | null | undefined | PaymentDetailsDefaultArgs> = $Result.GetResult<Prisma.$PaymentDetailsPayload, S>

  type PaymentDetailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentDetailsFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PaymentDetailsCountAggregateInputType | true
    }

  export interface PaymentDetailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentDetails'], meta: { name: 'PaymentDetails' } }
    /**
     * Find zero or one PaymentDetails that matches the filter.
     * @param {PaymentDetailsFindUniqueArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PaymentDetailsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailsFindUniqueArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PaymentDetails that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PaymentDetailsFindUniqueOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PaymentDetailsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailsFindFirstArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PaymentDetails that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindFirstOrThrowArgs} args - Arguments to find a PaymentDetails
     * @example
     * // Get one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PaymentDetailsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PaymentDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany()
     * 
     * // Get first 10 PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentDetailsWithIdOnly = await prisma.paymentDetails.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PaymentDetailsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PaymentDetails.
     * @param {PaymentDetailsCreateArgs} args - Arguments to create a PaymentDetails.
     * @example
     * // Create one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.create({
     *   data: {
     *     // ... data to create a PaymentDetails
     *   }
     * })
     * 
    **/
    create<T extends PaymentDetailsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailsCreateArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PaymentDetails.
     *     @param {PaymentDetailsCreateManyArgs} args - Arguments to create many PaymentDetails.
     *     @example
     *     // Create many PaymentDetails
     *     const paymentDetails = await prisma.paymentDetails.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PaymentDetailsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PaymentDetails.
     * @param {PaymentDetailsDeleteArgs} args - Arguments to delete one PaymentDetails.
     * @example
     * // Delete one PaymentDetails
     * const PaymentDetails = await prisma.paymentDetails.delete({
     *   where: {
     *     // ... filter to delete one PaymentDetails
     *   }
     * })
     * 
    **/
    delete<T extends PaymentDetailsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailsDeleteArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PaymentDetails.
     * @param {PaymentDetailsUpdateArgs} args - Arguments to update one PaymentDetails.
     * @example
     * // Update one PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PaymentDetailsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailsUpdateArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PaymentDetails.
     * @param {PaymentDetailsDeleteManyArgs} args - Arguments to filter PaymentDetails to delete.
     * @example
     * // Delete a few PaymentDetails
     * const { count } = await prisma.paymentDetails.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PaymentDetailsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PaymentDetailsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PaymentDetailsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentDetails.
     * @param {PaymentDetailsUpsertArgs} args - Arguments to update or create a PaymentDetails.
     * @example
     * // Update or create a PaymentDetails
     * const paymentDetails = await prisma.paymentDetails.upsert({
     *   create: {
     *     // ... data to create a PaymentDetails
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentDetails we want to update
     *   }
     * })
    **/
    upsert<T extends PaymentDetailsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PaymentDetailsUpsertArgs<ExtArgs>>
    ): Prisma__PaymentDetailsClient<$Result.GetResult<Prisma.$PaymentDetailsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsCountArgs} args - Arguments to filter PaymentDetails to count.
     * @example
     * // Count the number of PaymentDetails
     * const count = await prisma.paymentDetails.count({
     *   where: {
     *     // ... the filter for the PaymentDetails we want to count
     *   }
     * })
    **/
    count<T extends PaymentDetailsCountArgs>(
      args?: Subset<T, PaymentDetailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentDetailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentDetailsAggregateArgs>(args: Subset<T, PaymentDetailsAggregateArgs>): Prisma.PrismaPromise<GetPaymentDetailsAggregateType<T>>

    /**
     * Group by PaymentDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentDetailsGroupByArgs} args - Group by arguments.
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
      T extends PaymentDetailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentDetailsGroupByArgs['orderBy'] }
        : { orderBy?: PaymentDetailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentDetailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentDetailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentDetails model
   */
  readonly fields: PaymentDetailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentDetails.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentDetailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    order<T extends OrderDetailsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDetailsDefaultArgs<ExtArgs>>): Prisma__OrderDetailsClient<$Result.GetResult<Prisma.$OrderDetailsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PaymentDetails model
   */ 
  interface PaymentDetailsFieldRefs {
    readonly id: FieldRef<"PaymentDetails", 'Int'>
    readonly amountPaid: FieldRef<"PaymentDetails", 'Float'>
    readonly paymentMethod: FieldRef<"PaymentDetails", 'String'>
    readonly orderId: FieldRef<"PaymentDetails", 'Int'>
    readonly transactionId: FieldRef<"PaymentDetails", 'String'>
    readonly createdAt: FieldRef<"PaymentDetails", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentDetails", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PaymentDetails findUnique
   */
  export type PaymentDetailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput
  }


  /**
   * PaymentDetails findUniqueOrThrow
   */
  export type PaymentDetailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where: PaymentDetailsWhereUniqueInput
  }


  /**
   * PaymentDetails findFirst
   */
  export type PaymentDetailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }


  /**
   * PaymentDetails findFirstOrThrow
   */
  export type PaymentDetailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentDetails.
     */
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }


  /**
   * PaymentDetails findMany
   */
  export type PaymentDetailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter, which PaymentDetails to fetch.
     */
    where?: PaymentDetailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentDetails to fetch.
     */
    orderBy?: PaymentDetailsOrderByWithRelationInput | PaymentDetailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentDetails.
     */
    cursor?: PaymentDetailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentDetails.
     */
    skip?: number
    distinct?: PaymentDetailsScalarFieldEnum | PaymentDetailsScalarFieldEnum[]
  }


  /**
   * PaymentDetails create
   */
  export type PaymentDetailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to create a PaymentDetails.
     */
    data: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>
  }


  /**
   * PaymentDetails createMany
   */
  export type PaymentDetailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentDetails.
     */
    data: PaymentDetailsCreateManyInput | PaymentDetailsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PaymentDetails update
   */
  export type PaymentDetailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The data needed to update a PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>
    /**
     * Choose, which PaymentDetails to update.
     */
    where: PaymentDetailsWhereUniqueInput
  }


  /**
   * PaymentDetails updateMany
   */
  export type PaymentDetailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentDetails.
     */
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyInput>
    /**
     * Filter which PaymentDetails to update
     */
    where?: PaymentDetailsWhereInput
  }


  /**
   * PaymentDetails upsert
   */
  export type PaymentDetailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * The filter to search for the PaymentDetails to update in case it exists.
     */
    where: PaymentDetailsWhereUniqueInput
    /**
     * In case the PaymentDetails found by the `where` argument doesn't exist, create a new PaymentDetails with this data.
     */
    create: XOR<PaymentDetailsCreateInput, PaymentDetailsUncheckedCreateInput>
    /**
     * In case the PaymentDetails was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentDetailsUpdateInput, PaymentDetailsUncheckedUpdateInput>
  }


  /**
   * PaymentDetails delete
   */
  export type PaymentDetailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
    /**
     * Filter which PaymentDetails to delete.
     */
    where: PaymentDetailsWhereUniqueInput
  }


  /**
   * PaymentDetails deleteMany
   */
  export type PaymentDetailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentDetails to delete
     */
    where?: PaymentDetailsWhereInput
  }


  /**
   * PaymentDetails without action
   */
  export type PaymentDetailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentDetails
     */
    select?: PaymentDetailsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PaymentDetailsInclude<ExtArgs> | null
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
    fullName: 'fullName',
    email: 'email',
    username: 'username',
    password: 'password',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MovieCatalogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    price: 'price',
    rating: 'rating',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type MovieCatalogScalarFieldEnum = (typeof MovieCatalogScalarFieldEnum)[keyof typeof MovieCatalogScalarFieldEnum]


  export const MovieDetailsScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    director: 'director',
    price: 'price',
    rating: 'rating',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt',
    movieId: 'movieId'
  };

  export type MovieDetailsScalarFieldEnum = (typeof MovieDetailsScalarFieldEnum)[keyof typeof MovieDetailsScalarFieldEnum]


  export const OrderDetailsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    totalPrice: 'totalPrice',
    quantity: 'quantity',
    customerId: 'customerId',
    items: 'items',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OrderDetailsScalarFieldEnum = (typeof OrderDetailsScalarFieldEnum)[keyof typeof OrderDetailsScalarFieldEnum]


  export const PaymentDetailsScalarFieldEnum: {
    id: 'id',
    amountPaid: 'amountPaid',
    paymentMethod: 'paymentMethod',
    orderId: 'orderId',
    transactionId: 'transactionId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentDetailsScalarFieldEnum = (typeof PaymentDetailsScalarFieldEnum)[keyof typeof PaymentDetailsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    fullName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    movieCatalog?: MovieCatalogListRelationFilter
    orderDetails?: OrderDetailsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    movieCatalog?: MovieCatalogOrderByRelationAggregateInput
    orderDetails?: OrderDetailsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    movieCatalog?: MovieCatalogListRelationFilter
    orderDetails?: OrderDetailsListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    fullName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type MovieCatalogWhereInput = {
    AND?: MovieCatalogWhereInput | MovieCatalogWhereInput[]
    OR?: MovieCatalogWhereInput[]
    NOT?: MovieCatalogWhereInput | MovieCatalogWhereInput[]
    id?: IntFilter<"MovieCatalog"> | number
    title?: StringFilter<"MovieCatalog"> | string
    description?: StringFilter<"MovieCatalog"> | string
    price?: FloatFilter<"MovieCatalog"> | number
    rating?: FloatFilter<"MovieCatalog"> | number
    imageUrl?: StringNullableFilter<"MovieCatalog"> | string | null
    createdAt?: DateTimeFilter<"MovieCatalog"> | Date | string
    updatedAt?: DateTimeFilter<"MovieCatalog"> | Date | string
    userId?: IntFilter<"MovieCatalog"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    movieDetails?: MovieDetailsListRelationFilter
  }

  export type MovieCatalogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    movieDetails?: MovieDetailsOrderByRelationAggregateInput
  }

  export type MovieCatalogWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieCatalogWhereInput | MovieCatalogWhereInput[]
    OR?: MovieCatalogWhereInput[]
    NOT?: MovieCatalogWhereInput | MovieCatalogWhereInput[]
    title?: StringFilter<"MovieCatalog"> | string
    description?: StringFilter<"MovieCatalog"> | string
    price?: FloatFilter<"MovieCatalog"> | number
    rating?: FloatFilter<"MovieCatalog"> | number
    imageUrl?: StringNullableFilter<"MovieCatalog"> | string | null
    createdAt?: DateTimeFilter<"MovieCatalog"> | Date | string
    updatedAt?: DateTimeFilter<"MovieCatalog"> | Date | string
    userId?: IntFilter<"MovieCatalog"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    movieDetails?: MovieDetailsListRelationFilter
  }, "id">

  export type MovieCatalogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: MovieCatalogCountOrderByAggregateInput
    _avg?: MovieCatalogAvgOrderByAggregateInput
    _max?: MovieCatalogMaxOrderByAggregateInput
    _min?: MovieCatalogMinOrderByAggregateInput
    _sum?: MovieCatalogSumOrderByAggregateInput
  }

  export type MovieCatalogScalarWhereWithAggregatesInput = {
    AND?: MovieCatalogScalarWhereWithAggregatesInput | MovieCatalogScalarWhereWithAggregatesInput[]
    OR?: MovieCatalogScalarWhereWithAggregatesInput[]
    NOT?: MovieCatalogScalarWhereWithAggregatesInput | MovieCatalogScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovieCatalog"> | number
    title?: StringWithAggregatesFilter<"MovieCatalog"> | string
    description?: StringWithAggregatesFilter<"MovieCatalog"> | string
    price?: FloatWithAggregatesFilter<"MovieCatalog"> | number
    rating?: FloatWithAggregatesFilter<"MovieCatalog"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"MovieCatalog"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MovieCatalog"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MovieCatalog"> | Date | string
    userId?: IntWithAggregatesFilter<"MovieCatalog"> | number
  }

  export type MovieDetailsWhereInput = {
    AND?: MovieDetailsWhereInput | MovieDetailsWhereInput[]
    OR?: MovieDetailsWhereInput[]
    NOT?: MovieDetailsWhereInput | MovieDetailsWhereInput[]
    id?: IntFilter<"MovieDetails"> | number
    title?: StringFilter<"MovieDetails"> | string
    description?: StringFilter<"MovieDetails"> | string
    director?: StringFilter<"MovieDetails"> | string
    price?: FloatFilter<"MovieDetails"> | number
    rating?: FloatFilter<"MovieDetails"> | number
    imageUrl?: StringNullableFilter<"MovieDetails"> | string | null
    createdAt?: DateTimeFilter<"MovieDetails"> | Date | string
    movieId?: IntFilter<"MovieDetails"> | number
    movie?: XOR<MovieCatalogRelationFilter, MovieCatalogWhereInput>
  }

  export type MovieDetailsOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    director?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    movieId?: SortOrder
    movie?: MovieCatalogOrderByWithRelationInput
  }

  export type MovieDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovieDetailsWhereInput | MovieDetailsWhereInput[]
    OR?: MovieDetailsWhereInput[]
    NOT?: MovieDetailsWhereInput | MovieDetailsWhereInput[]
    title?: StringFilter<"MovieDetails"> | string
    description?: StringFilter<"MovieDetails"> | string
    director?: StringFilter<"MovieDetails"> | string
    price?: FloatFilter<"MovieDetails"> | number
    rating?: FloatFilter<"MovieDetails"> | number
    imageUrl?: StringNullableFilter<"MovieDetails"> | string | null
    createdAt?: DateTimeFilter<"MovieDetails"> | Date | string
    movieId?: IntFilter<"MovieDetails"> | number
    movie?: XOR<MovieCatalogRelationFilter, MovieCatalogWhereInput>
  }, "id">

  export type MovieDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    director?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    movieId?: SortOrder
    _count?: MovieDetailsCountOrderByAggregateInput
    _avg?: MovieDetailsAvgOrderByAggregateInput
    _max?: MovieDetailsMaxOrderByAggregateInput
    _min?: MovieDetailsMinOrderByAggregateInput
    _sum?: MovieDetailsSumOrderByAggregateInput
  }

  export type MovieDetailsScalarWhereWithAggregatesInput = {
    AND?: MovieDetailsScalarWhereWithAggregatesInput | MovieDetailsScalarWhereWithAggregatesInput[]
    OR?: MovieDetailsScalarWhereWithAggregatesInput[]
    NOT?: MovieDetailsScalarWhereWithAggregatesInput | MovieDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MovieDetails"> | number
    title?: StringWithAggregatesFilter<"MovieDetails"> | string
    description?: StringWithAggregatesFilter<"MovieDetails"> | string
    director?: StringWithAggregatesFilter<"MovieDetails"> | string
    price?: FloatWithAggregatesFilter<"MovieDetails"> | number
    rating?: FloatWithAggregatesFilter<"MovieDetails"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"MovieDetails"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"MovieDetails"> | Date | string
    movieId?: IntWithAggregatesFilter<"MovieDetails"> | number
  }

  export type OrderDetailsWhereInput = {
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    status?: StringFilter<"OrderDetails"> | string
    totalPrice?: FloatFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    customerId?: IntFilter<"OrderDetails"> | number
    items?: JsonFilter<"OrderDetails">
    createdAt?: DateTimeFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetails"> | Date | string
    userId?: IntFilter<"OrderDetails"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    payments?: PaymentDetailsListRelationFilter
  }

  export type OrderDetailsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    payments?: PaymentDetailsOrderByRelationAggregateInput
  }

  export type OrderDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    OR?: OrderDetailsWhereInput[]
    NOT?: OrderDetailsWhereInput | OrderDetailsWhereInput[]
    status?: StringFilter<"OrderDetails"> | string
    totalPrice?: FloatFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    customerId?: IntFilter<"OrderDetails"> | number
    items?: JsonFilter<"OrderDetails">
    createdAt?: DateTimeFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetails"> | Date | string
    userId?: IntFilter<"OrderDetails"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    payments?: PaymentDetailsListRelationFilter
  }, "id">

  export type OrderDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: OrderDetailsCountOrderByAggregateInput
    _avg?: OrderDetailsAvgOrderByAggregateInput
    _max?: OrderDetailsMaxOrderByAggregateInput
    _min?: OrderDetailsMinOrderByAggregateInput
    _sum?: OrderDetailsSumOrderByAggregateInput
  }

  export type OrderDetailsScalarWhereWithAggregatesInput = {
    AND?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    OR?: OrderDetailsScalarWhereWithAggregatesInput[]
    NOT?: OrderDetailsScalarWhereWithAggregatesInput | OrderDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderDetails"> | number
    status?: StringWithAggregatesFilter<"OrderDetails"> | string
    totalPrice?: FloatWithAggregatesFilter<"OrderDetails"> | number
    quantity?: IntWithAggregatesFilter<"OrderDetails"> | number
    customerId?: IntWithAggregatesFilter<"OrderDetails"> | number
    items?: JsonWithAggregatesFilter<"OrderDetails">
    createdAt?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderDetails"> | Date | string
    userId?: IntWithAggregatesFilter<"OrderDetails"> | number
  }

  export type PaymentDetailsWhereInput = {
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    OR?: PaymentDetailsWhereInput[]
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    id?: IntFilter<"PaymentDetails"> | number
    amountPaid?: FloatFilter<"PaymentDetails"> | number
    paymentMethod?: StringFilter<"PaymentDetails"> | string
    orderId?: IntFilter<"PaymentDetails"> | number
    transactionId?: StringFilter<"PaymentDetails"> | string
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    order?: XOR<OrderDetailsRelationFilter, OrderDetailsWhereInput>
  }

  export type PaymentDetailsOrderByWithRelationInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderDetailsOrderByWithRelationInput
  }

  export type PaymentDetailsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    OR?: PaymentDetailsWhereInput[]
    NOT?: PaymentDetailsWhereInput | PaymentDetailsWhereInput[]
    amountPaid?: FloatFilter<"PaymentDetails"> | number
    paymentMethod?: StringFilter<"PaymentDetails"> | string
    orderId?: IntFilter<"PaymentDetails"> | number
    transactionId?: StringFilter<"PaymentDetails"> | string
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    order?: XOR<OrderDetailsRelationFilter, OrderDetailsWhereInput>
  }, "id">

  export type PaymentDetailsOrderByWithAggregationInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentDetailsCountOrderByAggregateInput
    _avg?: PaymentDetailsAvgOrderByAggregateInput
    _max?: PaymentDetailsMaxOrderByAggregateInput
    _min?: PaymentDetailsMinOrderByAggregateInput
    _sum?: PaymentDetailsSumOrderByAggregateInput
  }

  export type PaymentDetailsScalarWhereWithAggregatesInput = {
    AND?: PaymentDetailsScalarWhereWithAggregatesInput | PaymentDetailsScalarWhereWithAggregatesInput[]
    OR?: PaymentDetailsScalarWhereWithAggregatesInput[]
    NOT?: PaymentDetailsScalarWhereWithAggregatesInput | PaymentDetailsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaymentDetails"> | number
    amountPaid?: FloatWithAggregatesFilter<"PaymentDetails"> | number
    paymentMethod?: StringWithAggregatesFilter<"PaymentDetails"> | string
    orderId?: IntWithAggregatesFilter<"PaymentDetails"> | number
    transactionId?: StringWithAggregatesFilter<"PaymentDetails"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentDetails"> | Date | string
  }

  export type UserCreateInput = {
    fullName: string
    email: string
    username: string
    password: string
    role?: string
    movieCatalog?: MovieCatalogCreateNestedManyWithoutUserInput
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    fullName: string
    email: string
    username: string
    password: string
    role?: string
    movieCatalog?: MovieCatalogUncheckedCreateNestedManyWithoutUserInput
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    movieCatalog?: MovieCatalogUpdateManyWithoutUserNestedInput
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    movieCatalog?: MovieCatalogUncheckedUpdateManyWithoutUserNestedInput
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    fullName: string
    email: string
    username: string
    password: string
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type MovieCatalogCreateInput = {
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMovieCatalogInput
    movieDetails?: MovieDetailsCreateNestedManyWithoutMovieInput
  }

  export type MovieCatalogUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    movieDetails?: MovieDetailsUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCatalogUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMovieCatalogNestedInput
    movieDetails?: MovieDetailsUpdateManyWithoutMovieNestedInput
  }

  export type MovieCatalogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    movieDetails?: MovieDetailsUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCatalogCreateManyInput = {
    id?: number
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type MovieCatalogUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieCatalogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieDetailsCreateInput = {
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    movie: MovieCatalogCreateNestedOneWithoutMovieDetailsInput
  }

  export type MovieDetailsUncheckedCreateInput = {
    id?: number
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    movieId: number
  }

  export type MovieDetailsUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieCatalogUpdateOneRequiredWithoutMovieDetailsNestedInput
  }

  export type MovieDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieDetailsCreateManyInput = {
    id?: number
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    movieId: number
  }

  export type MovieDetailsUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderDetailsCreateInput = {
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderDetailsInput
    payments?: PaymentDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderDetailsUncheckedCreateInput = {
    id?: number
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    payments?: PaymentDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderDetailsUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderDetailsNestedInput
    payments?: PaymentDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    payments?: PaymentDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderDetailsCreateManyInput = {
    id?: number
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type OrderDetailsUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PaymentDetailsCreateInput = {
    amountPaid?: number
    paymentMethod?: string
    transactionId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderDetailsCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentDetailsUncheckedCreateInput = {
    id?: number
    amountPaid?: number
    paymentMethod?: string
    orderId: number
    transactionId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUpdateInput = {
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderDetailsUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentDetailsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateManyInput = {
    id?: number
    amountPaid?: number
    paymentMethod?: string
    orderId: number
    transactionId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUpdateManyMutationInput = {
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    orderId?: IntFieldUpdateOperationsInput | number
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type MovieCatalogListRelationFilter = {
    every?: MovieCatalogWhereInput
    some?: MovieCatalogWhereInput
    none?: MovieCatalogWhereInput
  }

  export type OrderDetailsListRelationFilter = {
    every?: OrderDetailsWhereInput
    some?: OrderDetailsWhereInput
    none?: OrderDetailsWhereInput
  }

  export type MovieCatalogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    role?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovieDetailsListRelationFilter = {
    every?: MovieDetailsWhereInput
    some?: MovieDetailsWhereInput
    none?: MovieDetailsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MovieDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCatalogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MovieCatalogAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
  }

  export type MovieCatalogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MovieCatalogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type MovieCatalogSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type MovieCatalogRelationFilter = {
    is?: MovieCatalogWhereInput
    isNot?: MovieCatalogWhereInput
  }

  export type MovieDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    director?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    movieId?: SortOrder
  }

  export type MovieDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    director?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    director?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
    movieId?: SortOrder
  }

  export type MovieDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    movieId?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentDetailsListRelationFilter = {
    every?: PaymentDetailsWhereInput
    some?: PaymentDetailsWhereInput
    none?: PaymentDetailsWhereInput
  }

  export type PaymentDetailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    items?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
  }

  export type OrderDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    totalPrice?: SortOrder
    quantity?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type OrderDetailsRelationFilter = {
    is?: OrderDetailsWhereInput
    isNot?: OrderDetailsWhereInput
  }

  export type PaymentDetailsCountOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailsAvgOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    orderId?: SortOrder
  }

  export type PaymentDetailsMaxOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailsMinOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    paymentMethod?: SortOrder
    orderId?: SortOrder
    transactionId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentDetailsSumOrderByAggregateInput = {
    id?: SortOrder
    amountPaid?: SortOrder
    orderId?: SortOrder
  }

  export type MovieCatalogCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieCatalogCreateWithoutUserInput, MovieCatalogUncheckedCreateWithoutUserInput> | MovieCatalogCreateWithoutUserInput[] | MovieCatalogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCatalogCreateOrConnectWithoutUserInput | MovieCatalogCreateOrConnectWithoutUserInput[]
    createMany?: MovieCatalogCreateManyUserInputEnvelope
    connect?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
  }

  export type OrderDetailsCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type MovieCatalogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MovieCatalogCreateWithoutUserInput, MovieCatalogUncheckedCreateWithoutUserInput> | MovieCatalogCreateWithoutUserInput[] | MovieCatalogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCatalogCreateOrConnectWithoutUserInput | MovieCatalogCreateOrConnectWithoutUserInput[]
    createMany?: MovieCatalogCreateManyUserInputEnvelope
    connect?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
  }

  export type OrderDetailsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type MovieCatalogUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieCatalogCreateWithoutUserInput, MovieCatalogUncheckedCreateWithoutUserInput> | MovieCatalogCreateWithoutUserInput[] | MovieCatalogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCatalogCreateOrConnectWithoutUserInput | MovieCatalogCreateOrConnectWithoutUserInput[]
    upsert?: MovieCatalogUpsertWithWhereUniqueWithoutUserInput | MovieCatalogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieCatalogCreateManyUserInputEnvelope
    set?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    disconnect?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    delete?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    connect?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    update?: MovieCatalogUpdateWithWhereUniqueWithoutUserInput | MovieCatalogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieCatalogUpdateManyWithWhereWithoutUserInput | MovieCatalogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieCatalogScalarWhereInput | MovieCatalogScalarWhereInput[]
  }

  export type OrderDetailsUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutUserInput | OrderDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutUserInput | OrderDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutUserInput | OrderDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MovieCatalogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MovieCatalogCreateWithoutUserInput, MovieCatalogUncheckedCreateWithoutUserInput> | MovieCatalogCreateWithoutUserInput[] | MovieCatalogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MovieCatalogCreateOrConnectWithoutUserInput | MovieCatalogCreateOrConnectWithoutUserInput[]
    upsert?: MovieCatalogUpsertWithWhereUniqueWithoutUserInput | MovieCatalogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MovieCatalogCreateManyUserInputEnvelope
    set?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    disconnect?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    delete?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    connect?: MovieCatalogWhereUniqueInput | MovieCatalogWhereUniqueInput[]
    update?: MovieCatalogUpdateWithWhereUniqueWithoutUserInput | MovieCatalogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MovieCatalogUpdateManyWithWhereWithoutUserInput | MovieCatalogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MovieCatalogScalarWhereInput | MovieCatalogScalarWhereInput[]
  }

  export type OrderDetailsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput> | OrderDetailsCreateWithoutUserInput[] | OrderDetailsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutUserInput | OrderDetailsCreateOrConnectWithoutUserInput[]
    upsert?: OrderDetailsUpsertWithWhereUniqueWithoutUserInput | OrderDetailsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderDetailsCreateManyUserInputEnvelope
    set?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    disconnect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    delete?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    connect?: OrderDetailsWhereUniqueInput | OrderDetailsWhereUniqueInput[]
    update?: OrderDetailsUpdateWithWhereUniqueWithoutUserInput | OrderDetailsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderDetailsUpdateManyWithWhereWithoutUserInput | OrderDetailsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMovieCatalogInput = {
    create?: XOR<UserCreateWithoutMovieCatalogInput, UserUncheckedCreateWithoutMovieCatalogInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovieCatalogInput
    connect?: UserWhereUniqueInput
  }

  export type MovieDetailsCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieDetailsCreateWithoutMovieInput, MovieDetailsUncheckedCreateWithoutMovieInput> | MovieDetailsCreateWithoutMovieInput[] | MovieDetailsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDetailsCreateOrConnectWithoutMovieInput | MovieDetailsCreateOrConnectWithoutMovieInput[]
    createMany?: MovieDetailsCreateManyMovieInputEnvelope
    connect?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
  }

  export type MovieDetailsUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieDetailsCreateWithoutMovieInput, MovieDetailsUncheckedCreateWithoutMovieInput> | MovieDetailsCreateWithoutMovieInput[] | MovieDetailsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDetailsCreateOrConnectWithoutMovieInput | MovieDetailsCreateOrConnectWithoutMovieInput[]
    createMany?: MovieDetailsCreateManyMovieInputEnvelope
    connect?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutMovieCatalogNestedInput = {
    create?: XOR<UserCreateWithoutMovieCatalogInput, UserUncheckedCreateWithoutMovieCatalogInput>
    connectOrCreate?: UserCreateOrConnectWithoutMovieCatalogInput
    upsert?: UserUpsertWithoutMovieCatalogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMovieCatalogInput, UserUpdateWithoutMovieCatalogInput>, UserUncheckedUpdateWithoutMovieCatalogInput>
  }

  export type MovieDetailsUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieDetailsCreateWithoutMovieInput, MovieDetailsUncheckedCreateWithoutMovieInput> | MovieDetailsCreateWithoutMovieInput[] | MovieDetailsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDetailsCreateOrConnectWithoutMovieInput | MovieDetailsCreateOrConnectWithoutMovieInput[]
    upsert?: MovieDetailsUpsertWithWhereUniqueWithoutMovieInput | MovieDetailsUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieDetailsCreateManyMovieInputEnvelope
    set?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    disconnect?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    delete?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    connect?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    update?: MovieDetailsUpdateWithWhereUniqueWithoutMovieInput | MovieDetailsUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieDetailsUpdateManyWithWhereWithoutMovieInput | MovieDetailsUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieDetailsScalarWhereInput | MovieDetailsScalarWhereInput[]
  }

  export type MovieDetailsUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieDetailsCreateWithoutMovieInput, MovieDetailsUncheckedCreateWithoutMovieInput> | MovieDetailsCreateWithoutMovieInput[] | MovieDetailsUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieDetailsCreateOrConnectWithoutMovieInput | MovieDetailsCreateOrConnectWithoutMovieInput[]
    upsert?: MovieDetailsUpsertWithWhereUniqueWithoutMovieInput | MovieDetailsUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieDetailsCreateManyMovieInputEnvelope
    set?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    disconnect?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    delete?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    connect?: MovieDetailsWhereUniqueInput | MovieDetailsWhereUniqueInput[]
    update?: MovieDetailsUpdateWithWhereUniqueWithoutMovieInput | MovieDetailsUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieDetailsUpdateManyWithWhereWithoutMovieInput | MovieDetailsUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieDetailsScalarWhereInput | MovieDetailsScalarWhereInput[]
  }

  export type MovieCatalogCreateNestedOneWithoutMovieDetailsInput = {
    create?: XOR<MovieCatalogCreateWithoutMovieDetailsInput, MovieCatalogUncheckedCreateWithoutMovieDetailsInput>
    connectOrCreate?: MovieCatalogCreateOrConnectWithoutMovieDetailsInput
    connect?: MovieCatalogWhereUniqueInput
  }

  export type MovieCatalogUpdateOneRequiredWithoutMovieDetailsNestedInput = {
    create?: XOR<MovieCatalogCreateWithoutMovieDetailsInput, MovieCatalogUncheckedCreateWithoutMovieDetailsInput>
    connectOrCreate?: MovieCatalogCreateOrConnectWithoutMovieDetailsInput
    upsert?: MovieCatalogUpsertWithoutMovieDetailsInput
    connect?: MovieCatalogWhereUniqueInput
    update?: XOR<XOR<MovieCatalogUpdateToOneWithWhereWithoutMovieDetailsInput, MovieCatalogUpdateWithoutMovieDetailsInput>, MovieCatalogUncheckedUpdateWithoutMovieDetailsInput>
  }

  export type UserCreateNestedOneWithoutOrderDetailsInput = {
    create?: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderDetailsInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentDetailsCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrderInput, PaymentDetailsUncheckedCreateWithoutOrderInput> | PaymentDetailsCreateWithoutOrderInput[] | PaymentDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrderInput | PaymentDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentDetailsCreateManyOrderInputEnvelope
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
  }

  export type PaymentDetailsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrderInput, PaymentDetailsUncheckedCreateWithoutOrderInput> | PaymentDetailsCreateWithoutOrderInput[] | PaymentDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrderInput | PaymentDetailsCreateOrConnectWithoutOrderInput[]
    createMany?: PaymentDetailsCreateManyOrderInputEnvelope
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrderDetailsNestedInput = {
    create?: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderDetailsInput
    upsert?: UserUpsertWithoutOrderDetailsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderDetailsInput, UserUpdateWithoutOrderDetailsInput>, UserUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type PaymentDetailsUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrderInput, PaymentDetailsUncheckedCreateWithoutOrderInput> | PaymentDetailsCreateWithoutOrderInput[] | PaymentDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrderInput | PaymentDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentDetailsUpsertWithWhereUniqueWithoutOrderInput | PaymentDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentDetailsCreateManyOrderInputEnvelope
    set?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    disconnect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    delete?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    update?: PaymentDetailsUpdateWithWhereUniqueWithoutOrderInput | PaymentDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentDetailsUpdateManyWithWhereWithoutOrderInput | PaymentDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
  }

  export type PaymentDetailsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<PaymentDetailsCreateWithoutOrderInput, PaymentDetailsUncheckedCreateWithoutOrderInput> | PaymentDetailsCreateWithoutOrderInput[] | PaymentDetailsUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: PaymentDetailsCreateOrConnectWithoutOrderInput | PaymentDetailsCreateOrConnectWithoutOrderInput[]
    upsert?: PaymentDetailsUpsertWithWhereUniqueWithoutOrderInput | PaymentDetailsUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: PaymentDetailsCreateManyOrderInputEnvelope
    set?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    disconnect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    delete?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    connect?: PaymentDetailsWhereUniqueInput | PaymentDetailsWhereUniqueInput[]
    update?: PaymentDetailsUpdateWithWhereUniqueWithoutOrderInput | PaymentDetailsUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: PaymentDetailsUpdateManyWithWhereWithoutOrderInput | PaymentDetailsUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
  }

  export type OrderDetailsCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<OrderDetailsCreateWithoutPaymentsInput, OrderDetailsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutPaymentsInput
    connect?: OrderDetailsWhereUniqueInput
  }

  export type OrderDetailsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<OrderDetailsCreateWithoutPaymentsInput, OrderDetailsUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: OrderDetailsCreateOrConnectWithoutPaymentsInput
    upsert?: OrderDetailsUpsertWithoutPaymentsInput
    connect?: OrderDetailsWhereUniqueInput
    update?: XOR<XOR<OrderDetailsUpdateToOneWithWhereWithoutPaymentsInput, OrderDetailsUpdateWithoutPaymentsInput>, OrderDetailsUncheckedUpdateWithoutPaymentsInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type MovieCatalogCreateWithoutUserInput = {
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieDetails?: MovieDetailsCreateNestedManyWithoutMovieInput
  }

  export type MovieCatalogUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    movieDetails?: MovieDetailsUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCatalogCreateOrConnectWithoutUserInput = {
    where: MovieCatalogWhereUniqueInput
    create: XOR<MovieCatalogCreateWithoutUserInput, MovieCatalogUncheckedCreateWithoutUserInput>
  }

  export type MovieCatalogCreateManyUserInputEnvelope = {
    data: MovieCatalogCreateManyUserInput | MovieCatalogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderDetailsCreateWithoutUserInput = {
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentDetailsCreateNestedManyWithoutOrderInput
  }

  export type OrderDetailsUncheckedCreateWithoutUserInput = {
    id?: number
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentDetailsUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderDetailsCreateOrConnectWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput>
  }

  export type OrderDetailsCreateManyUserInputEnvelope = {
    data: OrderDetailsCreateManyUserInput | OrderDetailsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MovieCatalogUpsertWithWhereUniqueWithoutUserInput = {
    where: MovieCatalogWhereUniqueInput
    update: XOR<MovieCatalogUpdateWithoutUserInput, MovieCatalogUncheckedUpdateWithoutUserInput>
    create: XOR<MovieCatalogCreateWithoutUserInput, MovieCatalogUncheckedCreateWithoutUserInput>
  }

  export type MovieCatalogUpdateWithWhereUniqueWithoutUserInput = {
    where: MovieCatalogWhereUniqueInput
    data: XOR<MovieCatalogUpdateWithoutUserInput, MovieCatalogUncheckedUpdateWithoutUserInput>
  }

  export type MovieCatalogUpdateManyWithWhereWithoutUserInput = {
    where: MovieCatalogScalarWhereInput
    data: XOR<MovieCatalogUpdateManyMutationInput, MovieCatalogUncheckedUpdateManyWithoutUserInput>
  }

  export type MovieCatalogScalarWhereInput = {
    AND?: MovieCatalogScalarWhereInput | MovieCatalogScalarWhereInput[]
    OR?: MovieCatalogScalarWhereInput[]
    NOT?: MovieCatalogScalarWhereInput | MovieCatalogScalarWhereInput[]
    id?: IntFilter<"MovieCatalog"> | number
    title?: StringFilter<"MovieCatalog"> | string
    description?: StringFilter<"MovieCatalog"> | string
    price?: FloatFilter<"MovieCatalog"> | number
    rating?: FloatFilter<"MovieCatalog"> | number
    imageUrl?: StringNullableFilter<"MovieCatalog"> | string | null
    createdAt?: DateTimeFilter<"MovieCatalog"> | Date | string
    updatedAt?: DateTimeFilter<"MovieCatalog"> | Date | string
    userId?: IntFilter<"MovieCatalog"> | number
  }

  export type OrderDetailsUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    update: XOR<OrderDetailsUpdateWithoutUserInput, OrderDetailsUncheckedUpdateWithoutUserInput>
    create: XOR<OrderDetailsCreateWithoutUserInput, OrderDetailsUncheckedCreateWithoutUserInput>
  }

  export type OrderDetailsUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderDetailsWhereUniqueInput
    data: XOR<OrderDetailsUpdateWithoutUserInput, OrderDetailsUncheckedUpdateWithoutUserInput>
  }

  export type OrderDetailsUpdateManyWithWhereWithoutUserInput = {
    where: OrderDetailsScalarWhereInput
    data: XOR<OrderDetailsUpdateManyMutationInput, OrderDetailsUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderDetailsScalarWhereInput = {
    AND?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    OR?: OrderDetailsScalarWhereInput[]
    NOT?: OrderDetailsScalarWhereInput | OrderDetailsScalarWhereInput[]
    id?: IntFilter<"OrderDetails"> | number
    status?: StringFilter<"OrderDetails"> | string
    totalPrice?: FloatFilter<"OrderDetails"> | number
    quantity?: IntFilter<"OrderDetails"> | number
    customerId?: IntFilter<"OrderDetails"> | number
    items?: JsonFilter<"OrderDetails">
    createdAt?: DateTimeFilter<"OrderDetails"> | Date | string
    updatedAt?: DateTimeFilter<"OrderDetails"> | Date | string
    userId?: IntFilter<"OrderDetails"> | number
  }

  export type UserCreateWithoutMovieCatalogInput = {
    fullName: string
    email: string
    username: string
    password: string
    role?: string
    orderDetails?: OrderDetailsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMovieCatalogInput = {
    id?: number
    fullName: string
    email: string
    username: string
    password: string
    role?: string
    orderDetails?: OrderDetailsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMovieCatalogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMovieCatalogInput, UserUncheckedCreateWithoutMovieCatalogInput>
  }

  export type MovieDetailsCreateWithoutMovieInput = {
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type MovieDetailsUncheckedCreateWithoutMovieInput = {
    id?: number
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type MovieDetailsCreateOrConnectWithoutMovieInput = {
    where: MovieDetailsWhereUniqueInput
    create: XOR<MovieDetailsCreateWithoutMovieInput, MovieDetailsUncheckedCreateWithoutMovieInput>
  }

  export type MovieDetailsCreateManyMovieInputEnvelope = {
    data: MovieDetailsCreateManyMovieInput | MovieDetailsCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMovieCatalogInput = {
    update: XOR<UserUpdateWithoutMovieCatalogInput, UserUncheckedUpdateWithoutMovieCatalogInput>
    create: XOR<UserCreateWithoutMovieCatalogInput, UserUncheckedCreateWithoutMovieCatalogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMovieCatalogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMovieCatalogInput, UserUncheckedUpdateWithoutMovieCatalogInput>
  }

  export type UserUpdateWithoutMovieCatalogInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMovieCatalogInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    orderDetails?: OrderDetailsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieDetailsUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieDetailsWhereUniqueInput
    update: XOR<MovieDetailsUpdateWithoutMovieInput, MovieDetailsUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieDetailsCreateWithoutMovieInput, MovieDetailsUncheckedCreateWithoutMovieInput>
  }

  export type MovieDetailsUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieDetailsWhereUniqueInput
    data: XOR<MovieDetailsUpdateWithoutMovieInput, MovieDetailsUncheckedUpdateWithoutMovieInput>
  }

  export type MovieDetailsUpdateManyWithWhereWithoutMovieInput = {
    where: MovieDetailsScalarWhereInput
    data: XOR<MovieDetailsUpdateManyMutationInput, MovieDetailsUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieDetailsScalarWhereInput = {
    AND?: MovieDetailsScalarWhereInput | MovieDetailsScalarWhereInput[]
    OR?: MovieDetailsScalarWhereInput[]
    NOT?: MovieDetailsScalarWhereInput | MovieDetailsScalarWhereInput[]
    id?: IntFilter<"MovieDetails"> | number
    title?: StringFilter<"MovieDetails"> | string
    description?: StringFilter<"MovieDetails"> | string
    director?: StringFilter<"MovieDetails"> | string
    price?: FloatFilter<"MovieDetails"> | number
    rating?: FloatFilter<"MovieDetails"> | number
    imageUrl?: StringNullableFilter<"MovieDetails"> | string | null
    createdAt?: DateTimeFilter<"MovieDetails"> | Date | string
    movieId?: IntFilter<"MovieDetails"> | number
  }

  export type MovieCatalogCreateWithoutMovieDetailsInput = {
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMovieCatalogInput
  }

  export type MovieCatalogUncheckedCreateWithoutMovieDetailsInput = {
    id?: number
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type MovieCatalogCreateOrConnectWithoutMovieDetailsInput = {
    where: MovieCatalogWhereUniqueInput
    create: XOR<MovieCatalogCreateWithoutMovieDetailsInput, MovieCatalogUncheckedCreateWithoutMovieDetailsInput>
  }

  export type MovieCatalogUpsertWithoutMovieDetailsInput = {
    update: XOR<MovieCatalogUpdateWithoutMovieDetailsInput, MovieCatalogUncheckedUpdateWithoutMovieDetailsInput>
    create: XOR<MovieCatalogCreateWithoutMovieDetailsInput, MovieCatalogUncheckedCreateWithoutMovieDetailsInput>
    where?: MovieCatalogWhereInput
  }

  export type MovieCatalogUpdateToOneWithWhereWithoutMovieDetailsInput = {
    where?: MovieCatalogWhereInput
    data: XOR<MovieCatalogUpdateWithoutMovieDetailsInput, MovieCatalogUncheckedUpdateWithoutMovieDetailsInput>
  }

  export type MovieCatalogUpdateWithoutMovieDetailsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMovieCatalogNestedInput
  }

  export type MovieCatalogUncheckedUpdateWithoutMovieDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserCreateWithoutOrderDetailsInput = {
    fullName: string
    email: string
    username: string
    password: string
    role?: string
    movieCatalog?: MovieCatalogCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderDetailsInput = {
    id?: number
    fullName: string
    email: string
    username: string
    password: string
    role?: string
    movieCatalog?: MovieCatalogUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderDetailsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
  }

  export type PaymentDetailsCreateWithoutOrderInput = {
    amountPaid?: number
    paymentMethod?: string
    transactionId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUncheckedCreateWithoutOrderInput = {
    id?: number
    amountPaid?: number
    paymentMethod?: string
    transactionId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsCreateOrConnectWithoutOrderInput = {
    where: PaymentDetailsWhereUniqueInput
    create: XOR<PaymentDetailsCreateWithoutOrderInput, PaymentDetailsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentDetailsCreateManyOrderInputEnvelope = {
    data: PaymentDetailsCreateManyOrderInput | PaymentDetailsCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderDetailsInput = {
    update: XOR<UserUpdateWithoutOrderDetailsInput, UserUncheckedUpdateWithoutOrderDetailsInput>
    create: XOR<UserCreateWithoutOrderDetailsInput, UserUncheckedCreateWithoutOrderDetailsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderDetailsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderDetailsInput, UserUncheckedUpdateWithoutOrderDetailsInput>
  }

  export type UserUpdateWithoutOrderDetailsInput = {
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    movieCatalog?: MovieCatalogUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    movieCatalog?: MovieCatalogUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentDetailsUpsertWithWhereUniqueWithoutOrderInput = {
    where: PaymentDetailsWhereUniqueInput
    update: XOR<PaymentDetailsUpdateWithoutOrderInput, PaymentDetailsUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentDetailsCreateWithoutOrderInput, PaymentDetailsUncheckedCreateWithoutOrderInput>
  }

  export type PaymentDetailsUpdateWithWhereUniqueWithoutOrderInput = {
    where: PaymentDetailsWhereUniqueInput
    data: XOR<PaymentDetailsUpdateWithoutOrderInput, PaymentDetailsUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentDetailsUpdateManyWithWhereWithoutOrderInput = {
    where: PaymentDetailsScalarWhereInput
    data: XOR<PaymentDetailsUpdateManyMutationInput, PaymentDetailsUncheckedUpdateManyWithoutOrderInput>
  }

  export type PaymentDetailsScalarWhereInput = {
    AND?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
    OR?: PaymentDetailsScalarWhereInput[]
    NOT?: PaymentDetailsScalarWhereInput | PaymentDetailsScalarWhereInput[]
    id?: IntFilter<"PaymentDetails"> | number
    amountPaid?: FloatFilter<"PaymentDetails"> | number
    paymentMethod?: StringFilter<"PaymentDetails"> | string
    orderId?: IntFilter<"PaymentDetails"> | number
    transactionId?: StringFilter<"PaymentDetails"> | string
    createdAt?: DateTimeFilter<"PaymentDetails"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentDetails"> | Date | string
  }

  export type OrderDetailsCreateWithoutPaymentsInput = {
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderDetailsInput
  }

  export type OrderDetailsUncheckedCreateWithoutPaymentsInput = {
    id?: number
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type OrderDetailsCreateOrConnectWithoutPaymentsInput = {
    where: OrderDetailsWhereUniqueInput
    create: XOR<OrderDetailsCreateWithoutPaymentsInput, OrderDetailsUncheckedCreateWithoutPaymentsInput>
  }

  export type OrderDetailsUpsertWithoutPaymentsInput = {
    update: XOR<OrderDetailsUpdateWithoutPaymentsInput, OrderDetailsUncheckedUpdateWithoutPaymentsInput>
    create: XOR<OrderDetailsCreateWithoutPaymentsInput, OrderDetailsUncheckedCreateWithoutPaymentsInput>
    where?: OrderDetailsWhereInput
  }

  export type OrderDetailsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: OrderDetailsWhereInput
    data: XOR<OrderDetailsUpdateWithoutPaymentsInput, OrderDetailsUncheckedUpdateWithoutPaymentsInput>
  }

  export type OrderDetailsUpdateWithoutPaymentsInput = {
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderDetailsNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutPaymentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieCatalogCreateManyUserInput = {
    id?: number
    title: string
    description: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderDetailsCreateManyUserInput = {
    id?: number
    status?: string
    totalPrice?: number
    quantity?: number
    customerId: number
    items: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MovieCatalogUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieDetails?: MovieDetailsUpdateManyWithoutMovieNestedInput
  }

  export type MovieCatalogUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movieDetails?: MovieDetailsUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCatalogUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderDetailsUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentDetailsUpdateManyWithoutOrderNestedInput
  }

  export type OrderDetailsUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentDetailsUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderDetailsUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    totalPrice?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    customerId?: IntFieldUpdateOperationsInput | number
    items?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDetailsCreateManyMovieInput = {
    id?: number
    title: string
    description: string
    director: string
    price: number
    rating: number
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type MovieDetailsUpdateWithoutMovieInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDetailsUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieDetailsUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    director?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsCreateManyOrderInput = {
    id?: number
    amountPaid?: number
    paymentMethod?: string
    transactionId?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentDetailsUpdateWithoutOrderInput = {
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentDetailsUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    amountPaid?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieCatalogCountOutputTypeDefaultArgs instead
     */
    export type MovieCatalogCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieCatalogCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDetailsCountOutputTypeDefaultArgs instead
     */
    export type OrderDetailsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDetailsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieCatalogDefaultArgs instead
     */
    export type MovieCatalogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieCatalogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieDetailsDefaultArgs instead
     */
    export type MovieDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrderDetailsDefaultArgs instead
     */
    export type OrderDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OrderDetailsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentDetailsDefaultArgs instead
     */
    export type PaymentDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentDetailsDefaultArgs<ExtArgs>

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