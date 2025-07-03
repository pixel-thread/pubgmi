
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Token
 * 
 */
export type Token = $Result.DefaultSelection<Prisma.$TokenPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Tournament
 * 
 */
export type Tournament = $Result.DefaultSelection<Prisma.$TournamentPayload>
/**
 * Model Fixture
 * 
 */
export type Fixture = $Result.DefaultSelection<Prisma.$FixturePayload>
/**
 * Model Round
 * 
 */
export type Round = $Result.DefaultSelection<Prisma.$RoundPayload>
/**
 * Model TeamRound
 * 
 */
export type TeamRound = $Result.DefaultSelection<Prisma.$TeamRoundPayload>
/**
 * Model Wallet
 * 
 */
export type Wallet = $Result.DefaultSelection<Prisma.$WalletPayload>
/**
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model PlayerStats
 * 
 */
export type PlayerStats = $Result.DefaultSelection<Prisma.$PlayerStatsPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamStats
 * 
 */
export type TeamStats = $Result.DefaultSelection<Prisma.$TeamStatsPayload>
/**
 * Model KDStats
 * 
 */
export type KDStats = $Result.DefaultSelection<Prisma.$KDStatsPayload>
/**
 * Model PlayerTeamStats
 * 
 */
export type PlayerTeamStats = $Result.DefaultSelection<Prisma.$PlayerTeamStatsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  USER: 'USER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const Category: {
  NOOB: 'NOOB',
  PRO: 'PRO',
  ULTRA_NOOB: 'ULTRA_NOOB',
  ULTRA_PRO: 'ULTRA_PRO'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

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
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * `prisma.token`: Exposes CRUD operations for the **Token** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tokens
    * const tokens = await prisma.token.findMany()
    * ```
    */
  get token(): Prisma.TokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tournament`: Exposes CRUD operations for the **Tournament** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tournaments
    * const tournaments = await prisma.tournament.findMany()
    * ```
    */
  get tournament(): Prisma.TournamentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fixture`: Exposes CRUD operations for the **Fixture** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fixtures
    * const fixtures = await prisma.fixture.findMany()
    * ```
    */
  get fixture(): Prisma.FixtureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.round`: Exposes CRUD operations for the **Round** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rounds
    * const rounds = await prisma.round.findMany()
    * ```
    */
  get round(): Prisma.RoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamRound`: Exposes CRUD operations for the **TeamRound** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamRounds
    * const teamRounds = await prisma.teamRound.findMany()
    * ```
    */
  get teamRound(): Prisma.TeamRoundDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wallet`: Exposes CRUD operations for the **Wallet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Wallets
    * const wallets = await prisma.wallet.findMany()
    * ```
    */
  get wallet(): Prisma.WalletDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerStats`: Exposes CRUD operations for the **PlayerStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerStats
    * const playerStats = await prisma.playerStats.findMany()
    * ```
    */
  get playerStats(): Prisma.PlayerStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamStats`: Exposes CRUD operations for the **TeamStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamStats
    * const teamStats = await prisma.teamStats.findMany()
    * ```
    */
  get teamStats(): Prisma.TeamStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kDStats`: Exposes CRUD operations for the **KDStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more KDStats
    * const kDStats = await prisma.kDStats.findMany()
    * ```
    */
  get kDStats(): Prisma.KDStatsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerTeamStats`: Exposes CRUD operations for the **PlayerTeamStats** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerTeamStats
    * const playerTeamStats = await prisma.playerTeamStats.findMany()
    * ```
    */
  get playerTeamStats(): Prisma.PlayerTeamStatsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Token: 'Token',
    Otp: 'Otp',
    Tournament: 'Tournament',
    Fixture: 'Fixture',
    Round: 'Round',
    TeamRound: 'TeamRound',
    Wallet: 'Wallet',
    Player: 'Player',
    PlayerStats: 'PlayerStats',
    Team: 'Team',
    TeamStats: 'TeamStats',
    KDStats: 'KDStats',
    PlayerTeamStats: 'PlayerTeamStats'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "token" | "otp" | "tournament" | "fixture" | "round" | "teamRound" | "wallet" | "player" | "playerStats" | "team" | "teamStats" | "kDStats" | "playerTeamStats"
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
      Token: {
        payload: Prisma.$TokenPayload<ExtArgs>
        fields: Prisma.TokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findFirst: {
            args: Prisma.TokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          findMany: {
            args: Prisma.TokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          create: {
            args: Prisma.TokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          createMany: {
            args: Prisma.TokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          delete: {
            args: Prisma.TokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          update: {
            args: Prisma.TokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          deleteMany: {
            args: Prisma.TokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>[]
          }
          upsert: {
            args: Prisma.TokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenPayload>
          }
          aggregate: {
            args: Prisma.TokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToken>
          }
          groupBy: {
            args: Prisma.TokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenCountArgs<ExtArgs>
            result: $Utils.Optional<TokenCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Tournament: {
        payload: Prisma.$TournamentPayload<ExtArgs>
        fields: Prisma.TournamentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TournamentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TournamentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findFirst: {
            args: Prisma.TournamentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TournamentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          findMany: {
            args: Prisma.TournamentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          create: {
            args: Prisma.TournamentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          createMany: {
            args: Prisma.TournamentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TournamentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          delete: {
            args: Prisma.TournamentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          update: {
            args: Prisma.TournamentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          deleteMany: {
            args: Prisma.TournamentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TournamentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TournamentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>[]
          }
          upsert: {
            args: Prisma.TournamentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TournamentPayload>
          }
          aggregate: {
            args: Prisma.TournamentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTournament>
          }
          groupBy: {
            args: Prisma.TournamentGroupByArgs<ExtArgs>
            result: $Utils.Optional<TournamentGroupByOutputType>[]
          }
          count: {
            args: Prisma.TournamentCountArgs<ExtArgs>
            result: $Utils.Optional<TournamentCountAggregateOutputType> | number
          }
        }
      }
      Fixture: {
        payload: Prisma.$FixturePayload<ExtArgs>
        fields: Prisma.FixtureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FixtureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FixtureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findFirst: {
            args: Prisma.FixtureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FixtureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          findMany: {
            args: Prisma.FixtureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          create: {
            args: Prisma.FixtureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          createMany: {
            args: Prisma.FixtureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FixtureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          delete: {
            args: Prisma.FixtureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          update: {
            args: Prisma.FixtureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          deleteMany: {
            args: Prisma.FixtureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FixtureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FixtureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>[]
          }
          upsert: {
            args: Prisma.FixtureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FixturePayload>
          }
          aggregate: {
            args: Prisma.FixtureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFixture>
          }
          groupBy: {
            args: Prisma.FixtureGroupByArgs<ExtArgs>
            result: $Utils.Optional<FixtureGroupByOutputType>[]
          }
          count: {
            args: Prisma.FixtureCountArgs<ExtArgs>
            result: $Utils.Optional<FixtureCountAggregateOutputType> | number
          }
        }
      }
      Round: {
        payload: Prisma.$RoundPayload<ExtArgs>
        fields: Prisma.RoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findFirst: {
            args: Prisma.RoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          findMany: {
            args: Prisma.RoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          create: {
            args: Prisma.RoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          createMany: {
            args: Prisma.RoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          delete: {
            args: Prisma.RoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          update: {
            args: Prisma.RoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          deleteMany: {
            args: Prisma.RoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>[]
          }
          upsert: {
            args: Prisma.RoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoundPayload>
          }
          aggregate: {
            args: Prisma.RoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRound>
          }
          groupBy: {
            args: Prisma.RoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoundCountArgs<ExtArgs>
            result: $Utils.Optional<RoundCountAggregateOutputType> | number
          }
        }
      }
      TeamRound: {
        payload: Prisma.$TeamRoundPayload<ExtArgs>
        fields: Prisma.TeamRoundFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamRoundFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamRoundFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>
          }
          findFirst: {
            args: Prisma.TeamRoundFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamRoundFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>
          }
          findMany: {
            args: Prisma.TeamRoundFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>[]
          }
          create: {
            args: Prisma.TeamRoundCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>
          }
          createMany: {
            args: Prisma.TeamRoundCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamRoundCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>[]
          }
          delete: {
            args: Prisma.TeamRoundDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>
          }
          update: {
            args: Prisma.TeamRoundUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>
          }
          deleteMany: {
            args: Prisma.TeamRoundDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamRoundUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamRoundUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>[]
          }
          upsert: {
            args: Prisma.TeamRoundUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamRoundPayload>
          }
          aggregate: {
            args: Prisma.TeamRoundAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamRound>
          }
          groupBy: {
            args: Prisma.TeamRoundGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamRoundGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamRoundCountArgs<ExtArgs>
            result: $Utils.Optional<TeamRoundCountAggregateOutputType> | number
          }
        }
      }
      Wallet: {
        payload: Prisma.$WalletPayload<ExtArgs>
        fields: Prisma.WalletFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WalletFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WalletFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findFirst: {
            args: Prisma.WalletFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WalletFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          findMany: {
            args: Prisma.WalletFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          create: {
            args: Prisma.WalletCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          createMany: {
            args: Prisma.WalletCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WalletCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          delete: {
            args: Prisma.WalletDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          update: {
            args: Prisma.WalletUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          deleteMany: {
            args: Prisma.WalletDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WalletUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WalletUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>[]
          }
          upsert: {
            args: Prisma.WalletUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WalletPayload>
          }
          aggregate: {
            args: Prisma.WalletAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWallet>
          }
          groupBy: {
            args: Prisma.WalletGroupByArgs<ExtArgs>
            result: $Utils.Optional<WalletGroupByOutputType>[]
          }
          count: {
            args: Prisma.WalletCountArgs<ExtArgs>
            result: $Utils.Optional<WalletCountAggregateOutputType> | number
          }
        }
      }
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      PlayerStats: {
        payload: Prisma.$PlayerStatsPayload<ExtArgs>
        fields: Prisma.PlayerStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findFirst: {
            args: Prisma.PlayerStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          findMany: {
            args: Prisma.PlayerStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          create: {
            args: Prisma.PlayerStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          createMany: {
            args: Prisma.PlayerStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          delete: {
            args: Prisma.PlayerStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          update: {
            args: Prisma.PlayerStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerStatsPayload>
          }
          aggregate: {
            args: Prisma.PlayerStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerStats>
          }
          groupBy: {
            args: Prisma.PlayerStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerStatsCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamStats: {
        payload: Prisma.$TeamStatsPayload<ExtArgs>
        fields: Prisma.TeamStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          findFirst: {
            args: Prisma.TeamStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          findMany: {
            args: Prisma.TeamStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>[]
          }
          create: {
            args: Prisma.TeamStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          createMany: {
            args: Prisma.TeamStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>[]
          }
          delete: {
            args: Prisma.TeamStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          update: {
            args: Prisma.TeamStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          deleteMany: {
            args: Prisma.TeamStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>[]
          }
          upsert: {
            args: Prisma.TeamStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamStatsPayload>
          }
          aggregate: {
            args: Prisma.TeamStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamStats>
          }
          groupBy: {
            args: Prisma.TeamStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamStatsCountArgs<ExtArgs>
            result: $Utils.Optional<TeamStatsCountAggregateOutputType> | number
          }
        }
      }
      KDStats: {
        payload: Prisma.$KDStatsPayload<ExtArgs>
        fields: Prisma.KDStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KDStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KDStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>
          }
          findFirst: {
            args: Prisma.KDStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KDStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>
          }
          findMany: {
            args: Prisma.KDStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>[]
          }
          create: {
            args: Prisma.KDStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>
          }
          createMany: {
            args: Prisma.KDStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.KDStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>[]
          }
          delete: {
            args: Prisma.KDStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>
          }
          update: {
            args: Prisma.KDStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>
          }
          deleteMany: {
            args: Prisma.KDStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.KDStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.KDStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>[]
          }
          upsert: {
            args: Prisma.KDStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$KDStatsPayload>
          }
          aggregate: {
            args: Prisma.KDStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKDStats>
          }
          groupBy: {
            args: Prisma.KDStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<KDStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.KDStatsCountArgs<ExtArgs>
            result: $Utils.Optional<KDStatsCountAggregateOutputType> | number
          }
        }
      }
      PlayerTeamStats: {
        payload: Prisma.$PlayerTeamStatsPayload<ExtArgs>
        fields: Prisma.PlayerTeamStatsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerTeamStatsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerTeamStatsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>
          }
          findFirst: {
            args: Prisma.PlayerTeamStatsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerTeamStatsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>
          }
          findMany: {
            args: Prisma.PlayerTeamStatsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>[]
          }
          create: {
            args: Prisma.PlayerTeamStatsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>
          }
          createMany: {
            args: Prisma.PlayerTeamStatsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerTeamStatsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>[]
          }
          delete: {
            args: Prisma.PlayerTeamStatsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>
          }
          update: {
            args: Prisma.PlayerTeamStatsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>
          }
          deleteMany: {
            args: Prisma.PlayerTeamStatsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerTeamStatsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerTeamStatsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>[]
          }
          upsert: {
            args: Prisma.PlayerTeamStatsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerTeamStatsPayload>
          }
          aggregate: {
            args: Prisma.PlayerTeamStatsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerTeamStats>
          }
          groupBy: {
            args: Prisma.PlayerTeamStatsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerTeamStatsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerTeamStatsCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerTeamStatsCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    token?: TokenOmit
    otp?: OtpOmit
    tournament?: TournamentOmit
    fixture?: FixtureOmit
    round?: RoundOmit
    teamRound?: TeamRoundOmit
    wallet?: WalletOmit
    player?: PlayerOmit
    playerStats?: PlayerStatsOmit
    team?: TeamOmit
    teamStats?: TeamStatsOmit
    kDStats?: KDStatsOmit
    playerTeamStats?: PlayerTeamStatsOmit
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
    otps: number
    tokens: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | UserCountOutputTypeCountOtpsArgs
    tokens?: boolean | UserCountOutputTypeCountTokensArgs
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
  export type UserCountOutputTypeCountOtpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
  }


  /**
   * Count Type TournamentCountOutputType
   */

  export type TournamentCountOutputType = {
    teamRounds: number
    round: number
    teamStats: number
  }

  export type TournamentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamRounds?: boolean | TournamentCountOutputTypeCountTeamRoundsArgs
    round?: boolean | TournamentCountOutputTypeCountRoundArgs
    teamStats?: boolean | TournamentCountOutputTypeCountTeamStatsArgs
  }

  // Custom InputTypes
  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TournamentCountOutputType
     */
    select?: TournamentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRoundWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
  }

  /**
   * TournamentCountOutputType without action
   */
  export type TournamentCountOutputTypeCountTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamStatsWhereInput
  }


  /**
   * Count Type FixtureCountOutputType
   */

  export type FixtureCountOutputType = {
    teams: number
  }

  export type FixtureCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | FixtureCountOutputTypeCountTeamsArgs
  }

  // Custom InputTypes
  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FixtureCountOutputType
     */
    select?: FixtureCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FixtureCountOutputType without action
   */
  export type FixtureCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }


  /**
   * Count Type RoundCountOutputType
   */

  export type RoundCountOutputType = {
    teams: number
    teamStats: number
  }

  export type RoundCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | RoundCountOutputTypeCountTeamsArgs
    teamStats?: boolean | RoundCountOutputTypeCountTeamStatsArgs
  }

  // Custom InputTypes
  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoundCountOutputType
     */
    select?: RoundCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRoundWhereInput
  }

  /**
   * RoundCountOutputType without action
   */
  export type RoundCountOutputTypeCountTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamStatsWhereInput
  }


  /**
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    playerTeamStats: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerTeamStats?: boolean | PlayerCountOutputTypeCountPlayerTeamStatsArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountPlayerTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamStatsWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    players: number
    playerTeamStats: number
    teamRound: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | TeamCountOutputTypeCountPlayersArgs
    playerTeamStats?: boolean | TeamCountOutputTypeCountPlayerTeamStatsArgs
    teamRound?: boolean | TeamCountOutputTypeCountTeamRoundArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountPlayerTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamStatsWhereInput
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountTeamRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRoundWhereInput
  }


  /**
   * Count Type TeamStatsCountOutputType
   */

  export type TeamStatsCountOutputType = {
    playerTeamStats: number
  }

  export type TeamStatsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playerTeamStats?: boolean | TeamStatsCountOutputTypeCountPlayerTeamStatsArgs
  }

  // Custom InputTypes
  /**
   * TeamStatsCountOutputType without action
   */
  export type TeamStatsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStatsCountOutputType
     */
    select?: TeamStatsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamStatsCountOutputType without action
   */
  export type TeamStatsCountOutputTypeCountPlayerTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamStatsWhereInput
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
    phone: string | null
    name: string | null
    role: $Enums.Role | null
    isInternal: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    name: string | null
    role: $Enums.Role | null
    isInternal: boolean | null
    isVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    name: number
    role: number
    isInternal: number
    isVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    role?: true
    isInternal?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    role?: true
    isInternal?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    name?: true
    role?: true
    isInternal?: true
    isVerified?: true
    createdAt?: true
    updatedAt?: true
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
    phone: string
    name: string
    role: $Enums.Role
    isInternal: boolean
    isVerified: boolean
    createdAt: Date
    updatedAt: Date
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
    phone?: boolean
    name?: boolean
    role?: boolean
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    otps?: boolean | User$otpsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    Player?: boolean | User$PlayerArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    name?: boolean
    role?: boolean
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "name" | "role" | "isInternal" | "isVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    otps?: boolean | User$otpsArgs<ExtArgs>
    tokens?: boolean | User$tokensArgs<ExtArgs>
    Player?: boolean | User$PlayerArgs<ExtArgs>
    wallet?: boolean | User$walletArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      otps: Prisma.$OtpPayload<ExtArgs>[]
      tokens: Prisma.$TokenPayload<ExtArgs>[]
      Player: Prisma.$PlayerPayload<ExtArgs> | null
      wallet: Prisma.$WalletPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string
      name: string
      role: $Enums.Role
      isInternal: boolean
      isVerified: boolean
      createdAt: Date
      updatedAt: Date
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
    otps<T extends User$otpsArgs<ExtArgs> = {}>(args?: Subset<T, User$otpsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tokens<T extends User$tokensArgs<ExtArgs> = {}>(args?: Subset<T, User$tokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Player<T extends User$PlayerArgs<ExtArgs> = {}>(args?: Subset<T, User$PlayerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallet<T extends User$walletArgs<ExtArgs> = {}>(args?: Subset<T, User$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly phone: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isInternal: FieldRef<"User", 'Boolean'>
    readonly isVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.otps
   */
  export type User$otpsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    cursor?: OtpWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * User.tokens
   */
  export type User$tokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    cursor?: TokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * User.Player
   */
  export type User$PlayerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * User.wallet
   */
  export type User$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
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
   * Model Token
   */

  export type AggregateToken = {
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  export type TokenMinAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    revoked: boolean | null
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type TokenMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    token: string | null
    expiresAt: Date | null
    createdAt: Date | null
    revoked: boolean | null
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
  }

  export type TokenCountAggregateOutputType = {
    id: number
    userId: number
    token: number
    expiresAt: number
    createdAt: number
    revoked: number
    revokedAt: number
    ipAddress: number
    userAgent: number
    _all: number
  }


  export type TokenMinAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    revoked?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type TokenMaxAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    revoked?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
  }

  export type TokenCountAggregateInputType = {
    id?: true
    userId?: true
    token?: true
    expiresAt?: true
    createdAt?: true
    revoked?: true
    revokedAt?: true
    ipAddress?: true
    userAgent?: true
    _all?: true
  }

  export type TokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Token to aggregate.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tokens
    **/
    _count?: true | TokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenMaxAggregateInputType
  }

  export type GetTokenAggregateType<T extends TokenAggregateArgs> = {
        [P in keyof T & keyof AggregateToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToken[P]>
      : GetScalarType<T[P], AggregateToken[P]>
  }




  export type TokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenWhereInput
    orderBy?: TokenOrderByWithAggregationInput | TokenOrderByWithAggregationInput[]
    by: TokenScalarFieldEnum[] | TokenScalarFieldEnum
    having?: TokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenCountAggregateInputType | true
    _min?: TokenMinAggregateInputType
    _max?: TokenMaxAggregateInputType
  }

  export type TokenGroupByOutputType = {
    id: string
    userId: string
    token: string
    expiresAt: Date
    createdAt: Date
    revoked: boolean
    revokedAt: Date | null
    ipAddress: string | null
    userAgent: string | null
    _count: TokenCountAggregateOutputType | null
    _min: TokenMinAggregateOutputType | null
    _max: TokenMaxAggregateOutputType | null
  }

  type GetTokenGroupByPayload<T extends TokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenGroupByOutputType[P]>
            : GetScalarType<T[P], TokenGroupByOutputType[P]>
        }
      >
    >


  export type TokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revoked?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revoked?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revoked?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["token"]>

  export type TokenSelectScalar = {
    id?: boolean
    userId?: boolean
    token?: boolean
    expiresAt?: boolean
    createdAt?: boolean
    revoked?: boolean
    revokedAt?: boolean
    ipAddress?: boolean
    userAgent?: boolean
  }

  export type TokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "token" | "expiresAt" | "createdAt" | "revoked" | "revokedAt" | "ipAddress" | "userAgent", ExtArgs["result"]["token"]>
  export type TokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Token"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      token: string
      expiresAt: Date
      createdAt: Date
      revoked: boolean
      revokedAt: Date | null
      ipAddress: string | null
      userAgent: string | null
    }, ExtArgs["result"]["token"]>
    composites: {}
  }

  type TokenGetPayload<S extends boolean | null | undefined | TokenDefaultArgs> = $Result.GetResult<Prisma.$TokenPayload, S>

  type TokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenCountAggregateInputType | true
    }

  export interface TokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Token'], meta: { name: 'Token' } }
    /**
     * Find zero or one Token that matches the filter.
     * @param {TokenFindUniqueArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenFindUniqueArgs>(args: SelectSubset<T, TokenFindUniqueArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Token that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenFindUniqueOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenFindFirstArgs>(args?: SelectSubset<T, TokenFindFirstArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Token that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindFirstOrThrowArgs} args - Arguments to find a Token
     * @example
     * // Get one Token
     * const token = await prisma.token.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tokens
     * const tokens = await prisma.token.findMany()
     * 
     * // Get first 10 Tokens
     * const tokens = await prisma.token.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenWithIdOnly = await prisma.token.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenFindManyArgs>(args?: SelectSubset<T, TokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Token.
     * @param {TokenCreateArgs} args - Arguments to create a Token.
     * @example
     * // Create one Token
     * const Token = await prisma.token.create({
     *   data: {
     *     // ... data to create a Token
     *   }
     * })
     * 
     */
    create<T extends TokenCreateArgs>(args: SelectSubset<T, TokenCreateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tokens.
     * @param {TokenCreateManyArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenCreateManyArgs>(args?: SelectSubset<T, TokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tokens and returns the data saved in the database.
     * @param {TokenCreateManyAndReturnArgs} args - Arguments to create many Tokens.
     * @example
     * // Create many Tokens
     * const token = await prisma.token.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TokenCreateManyAndReturnArgs>(args?: SelectSubset<T, TokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Token.
     * @param {TokenDeleteArgs} args - Arguments to delete one Token.
     * @example
     * // Delete one Token
     * const Token = await prisma.token.delete({
     *   where: {
     *     // ... filter to delete one Token
     *   }
     * })
     * 
     */
    delete<T extends TokenDeleteArgs>(args: SelectSubset<T, TokenDeleteArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Token.
     * @param {TokenUpdateArgs} args - Arguments to update one Token.
     * @example
     * // Update one Token
     * const token = await prisma.token.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenUpdateArgs>(args: SelectSubset<T, TokenUpdateArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tokens.
     * @param {TokenDeleteManyArgs} args - Arguments to filter Tokens to delete.
     * @example
     * // Delete a few Tokens
     * const { count } = await prisma.token.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenDeleteManyArgs>(args?: SelectSubset<T, TokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenUpdateManyArgs>(args: SelectSubset<T, TokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tokens and returns the data updated in the database.
     * @param {TokenUpdateManyAndReturnArgs} args - Arguments to update many Tokens.
     * @example
     * // Update many Tokens
     * const token = await prisma.token.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tokens and only return the `id`
     * const tokenWithIdOnly = await prisma.token.updateManyAndReturn({
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
    updateManyAndReturn<T extends TokenUpdateManyAndReturnArgs>(args: SelectSubset<T, TokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Token.
     * @param {TokenUpsertArgs} args - Arguments to update or create a Token.
     * @example
     * // Update or create a Token
     * const token = await prisma.token.upsert({
     *   create: {
     *     // ... data to create a Token
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Token we want to update
     *   }
     * })
     */
    upsert<T extends TokenUpsertArgs>(args: SelectSubset<T, TokenUpsertArgs<ExtArgs>>): Prisma__TokenClient<$Result.GetResult<Prisma.$TokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenCountArgs} args - Arguments to filter Tokens to count.
     * @example
     * // Count the number of Tokens
     * const count = await prisma.token.count({
     *   where: {
     *     // ... the filter for the Tokens we want to count
     *   }
     * })
    **/
    count<T extends TokenCountArgs>(
      args?: Subset<T, TokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenAggregateArgs>(args: Subset<T, TokenAggregateArgs>): Prisma.PrismaPromise<GetTokenAggregateType<T>>

    /**
     * Group by Token.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenGroupByArgs} args - Group by arguments.
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
      T extends TokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenGroupByArgs['orderBy'] }
        : { orderBy?: TokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Token model
   */
  readonly fields: TokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Token.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Token model
   */
  interface TokenFieldRefs {
    readonly id: FieldRef<"Token", 'String'>
    readonly userId: FieldRef<"Token", 'String'>
    readonly token: FieldRef<"Token", 'String'>
    readonly expiresAt: FieldRef<"Token", 'DateTime'>
    readonly createdAt: FieldRef<"Token", 'DateTime'>
    readonly revoked: FieldRef<"Token", 'Boolean'>
    readonly revokedAt: FieldRef<"Token", 'DateTime'>
    readonly ipAddress: FieldRef<"Token", 'String'>
    readonly userAgent: FieldRef<"Token", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Token findUnique
   */
  export type TokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findUniqueOrThrow
   */
  export type TokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token findFirst
   */
  export type TokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findFirstOrThrow
   */
  export type TokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Token to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tokens.
     */
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token findMany
   */
  export type TokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter, which Tokens to fetch.
     */
    where?: TokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tokens to fetch.
     */
    orderBy?: TokenOrderByWithRelationInput | TokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tokens.
     */
    cursor?: TokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tokens.
     */
    skip?: number
    distinct?: TokenScalarFieldEnum | TokenScalarFieldEnum[]
  }

  /**
   * Token create
   */
  export type TokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to create a Token.
     */
    data: XOR<TokenCreateInput, TokenUncheckedCreateInput>
  }

  /**
   * Token createMany
   */
  export type TokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Token createManyAndReturn
   */
  export type TokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to create many Tokens.
     */
    data: TokenCreateManyInput | TokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token update
   */
  export type TokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The data needed to update a Token.
     */
    data: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
    /**
     * Choose, which Token to update.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token updateMany
   */
  export type TokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
  }

  /**
   * Token updateManyAndReturn
   */
  export type TokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * The data used to update Tokens.
     */
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyInput>
    /**
     * Filter which Tokens to update
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Token upsert
   */
  export type TokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * The filter to search for the Token to update in case it exists.
     */
    where: TokenWhereUniqueInput
    /**
     * In case the Token found by the `where` argument doesn't exist, create a new Token with this data.
     */
    create: XOR<TokenCreateInput, TokenUncheckedCreateInput>
    /**
     * In case the Token was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenUpdateInput, TokenUncheckedUpdateInput>
  }

  /**
   * Token delete
   */
  export type TokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
    /**
     * Filter which Token to delete.
     */
    where: TokenWhereUniqueInput
  }

  /**
   * Token deleteMany
   */
  export type TokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tokens to delete
     */
    where?: TokenWhereInput
    /**
     * Limit how many Tokens to delete.
     */
    limit?: number
  }

  /**
   * Token without action
   */
  export type TokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Token
     */
    select?: TokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Token
     */
    omit?: TokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TokenInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    userId: string | null
    otp: string | null
    isOtpUsed: boolean | null
    otpCreatedAt: Date | null
    otpExpiresAt: Date | null
    otpVerifiedAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    otp: string | null
    isOtpUsed: boolean | null
    otpCreatedAt: Date | null
    otpExpiresAt: Date | null
    otpVerifiedAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    userId: number
    otp: number
    isOtpUsed: number
    otpCreatedAt: number
    otpExpiresAt: number
    otpVerifiedAt: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    isOtpUsed?: true
    otpCreatedAt?: true
    otpExpiresAt?: true
    otpVerifiedAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    isOtpUsed?: true
    otpCreatedAt?: true
    otpExpiresAt?: true
    otpVerifiedAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    userId?: true
    otp?: true
    isOtpUsed?: true
    otpCreatedAt?: true
    otpExpiresAt?: true
    otpVerifiedAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    userId: string
    otp: string
    isOtpUsed: boolean
    otpCreatedAt: Date
    otpExpiresAt: Date
    otpVerifiedAt: Date | null
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    isOtpUsed?: boolean
    otpCreatedAt?: boolean
    otpExpiresAt?: boolean
    otpVerifiedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    isOtpUsed?: boolean
    otpCreatedAt?: boolean
    otpExpiresAt?: boolean
    otpVerifiedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    otp?: boolean
    isOtpUsed?: boolean
    otpCreatedAt?: boolean
    otpExpiresAt?: boolean
    otpVerifiedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    userId?: boolean
    otp?: boolean
    isOtpUsed?: boolean
    otpCreatedAt?: boolean
    otpExpiresAt?: boolean
    otpVerifiedAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "otp" | "isOtpUsed" | "otpCreatedAt" | "otpExpiresAt" | "otpVerifiedAt", ExtArgs["result"]["otp"]>
  export type OtpInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OtpIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      otp: string
      isOtpUsed: boolean
      otpCreatedAt: Date
      otpExpiresAt: Date
      otpVerifiedAt: Date | null
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
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
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly userId: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly isOtpUsed: FieldRef<"Otp", 'Boolean'>
    readonly otpCreatedAt: FieldRef<"Otp", 'DateTime'>
    readonly otpExpiresAt: FieldRef<"Otp", 'DateTime'>
    readonly otpVerifiedAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OtpInclude<ExtArgs> | null
  }


  /**
   * Model Tournament
   */

  export type AggregateTournament = {
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  export type TournamentAvgAggregateOutputType = {
    fee: number | null
  }

  export type TournamentSumAggregateOutputType = {
    fee: number | null
  }

  export type TournamentMinAggregateOutputType = {
    id: string | null
    name: string | null
    fee: number | null
    createdAt: Date | null
  }

  export type TournamentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    fee: number | null
    createdAt: Date | null
  }

  export type TournamentCountAggregateOutputType = {
    id: number
    name: number
    fee: number
    createdAt: number
    _all: number
  }


  export type TournamentAvgAggregateInputType = {
    fee?: true
  }

  export type TournamentSumAggregateInputType = {
    fee?: true
  }

  export type TournamentMinAggregateInputType = {
    id?: true
    name?: true
    fee?: true
    createdAt?: true
  }

  export type TournamentMaxAggregateInputType = {
    id?: true
    name?: true
    fee?: true
    createdAt?: true
  }

  export type TournamentCountAggregateInputType = {
    id?: true
    name?: true
    fee?: true
    createdAt?: true
    _all?: true
  }

  export type TournamentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournament to aggregate.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tournaments
    **/
    _count?: true | TournamentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TournamentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TournamentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TournamentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TournamentMaxAggregateInputType
  }

  export type GetTournamentAggregateType<T extends TournamentAggregateArgs> = {
        [P in keyof T & keyof AggregateTournament]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTournament[P]>
      : GetScalarType<T[P], AggregateTournament[P]>
  }




  export type TournamentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TournamentWhereInput
    orderBy?: TournamentOrderByWithAggregationInput | TournamentOrderByWithAggregationInput[]
    by: TournamentScalarFieldEnum[] | TournamentScalarFieldEnum
    having?: TournamentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TournamentCountAggregateInputType | true
    _avg?: TournamentAvgAggregateInputType
    _sum?: TournamentSumAggregateInputType
    _min?: TournamentMinAggregateInputType
    _max?: TournamentMaxAggregateInputType
  }

  export type TournamentGroupByOutputType = {
    id: string
    name: string
    fee: number
    createdAt: Date
    _count: TournamentCountAggregateOutputType | null
    _avg: TournamentAvgAggregateOutputType | null
    _sum: TournamentSumAggregateOutputType | null
    _min: TournamentMinAggregateOutputType | null
    _max: TournamentMaxAggregateOutputType | null
  }

  type GetTournamentGroupByPayload<T extends TournamentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TournamentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TournamentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TournamentGroupByOutputType[P]>
            : GetScalarType<T[P], TournamentGroupByOutputType[P]>
        }
      >
    >


  export type TournamentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fee?: boolean
    createdAt?: boolean
    teamRounds?: boolean | Tournament$teamRoundsArgs<ExtArgs>
    round?: boolean | Tournament$roundArgs<ExtArgs>
    teamStats?: boolean | Tournament$teamStatsArgs<ExtArgs>
    Fixture?: boolean | Tournament$FixtureArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fee?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    fee?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["tournament"]>

  export type TournamentSelectScalar = {
    id?: boolean
    name?: boolean
    fee?: boolean
    createdAt?: boolean
  }

  export type TournamentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "fee" | "createdAt", ExtArgs["result"]["tournament"]>
  export type TournamentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamRounds?: boolean | Tournament$teamRoundsArgs<ExtArgs>
    round?: boolean | Tournament$roundArgs<ExtArgs>
    teamStats?: boolean | Tournament$teamStatsArgs<ExtArgs>
    Fixture?: boolean | Tournament$FixtureArgs<ExtArgs>
    _count?: boolean | TournamentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TournamentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TournamentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TournamentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tournament"
    objects: {
      teamRounds: Prisma.$TeamRoundPayload<ExtArgs>[]
      round: Prisma.$RoundPayload<ExtArgs>[]
      teamStats: Prisma.$TeamStatsPayload<ExtArgs>[]
      Fixture: Prisma.$FixturePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      fee: number
      createdAt: Date
    }, ExtArgs["result"]["tournament"]>
    composites: {}
  }

  type TournamentGetPayload<S extends boolean | null | undefined | TournamentDefaultArgs> = $Result.GetResult<Prisma.$TournamentPayload, S>

  type TournamentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TournamentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TournamentCountAggregateInputType | true
    }

  export interface TournamentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tournament'], meta: { name: 'Tournament' } }
    /**
     * Find zero or one Tournament that matches the filter.
     * @param {TournamentFindUniqueArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TournamentFindUniqueArgs>(args: SelectSubset<T, TournamentFindUniqueArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tournament that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TournamentFindUniqueOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TournamentFindUniqueOrThrowArgs>(args: SelectSubset<T, TournamentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TournamentFindFirstArgs>(args?: SelectSubset<T, TournamentFindFirstArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tournament that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindFirstOrThrowArgs} args - Arguments to find a Tournament
     * @example
     * // Get one Tournament
     * const tournament = await prisma.tournament.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TournamentFindFirstOrThrowArgs>(args?: SelectSubset<T, TournamentFindFirstOrThrowArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tournaments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tournaments
     * const tournaments = await prisma.tournament.findMany()
     * 
     * // Get first 10 Tournaments
     * const tournaments = await prisma.tournament.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tournamentWithIdOnly = await prisma.tournament.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TournamentFindManyArgs>(args?: SelectSubset<T, TournamentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tournament.
     * @param {TournamentCreateArgs} args - Arguments to create a Tournament.
     * @example
     * // Create one Tournament
     * const Tournament = await prisma.tournament.create({
     *   data: {
     *     // ... data to create a Tournament
     *   }
     * })
     * 
     */
    create<T extends TournamentCreateArgs>(args: SelectSubset<T, TournamentCreateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tournaments.
     * @param {TournamentCreateManyArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TournamentCreateManyArgs>(args?: SelectSubset<T, TournamentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tournaments and returns the data saved in the database.
     * @param {TournamentCreateManyAndReturnArgs} args - Arguments to create many Tournaments.
     * @example
     * // Create many Tournaments
     * const tournament = await prisma.tournament.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TournamentCreateManyAndReturnArgs>(args?: SelectSubset<T, TournamentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tournament.
     * @param {TournamentDeleteArgs} args - Arguments to delete one Tournament.
     * @example
     * // Delete one Tournament
     * const Tournament = await prisma.tournament.delete({
     *   where: {
     *     // ... filter to delete one Tournament
     *   }
     * })
     * 
     */
    delete<T extends TournamentDeleteArgs>(args: SelectSubset<T, TournamentDeleteArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tournament.
     * @param {TournamentUpdateArgs} args - Arguments to update one Tournament.
     * @example
     * // Update one Tournament
     * const tournament = await prisma.tournament.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TournamentUpdateArgs>(args: SelectSubset<T, TournamentUpdateArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tournaments.
     * @param {TournamentDeleteManyArgs} args - Arguments to filter Tournaments to delete.
     * @example
     * // Delete a few Tournaments
     * const { count } = await prisma.tournament.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TournamentDeleteManyArgs>(args?: SelectSubset<T, TournamentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TournamentUpdateManyArgs>(args: SelectSubset<T, TournamentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tournaments and returns the data updated in the database.
     * @param {TournamentUpdateManyAndReturnArgs} args - Arguments to update many Tournaments.
     * @example
     * // Update many Tournaments
     * const tournament = await prisma.tournament.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tournaments and only return the `id`
     * const tournamentWithIdOnly = await prisma.tournament.updateManyAndReturn({
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
    updateManyAndReturn<T extends TournamentUpdateManyAndReturnArgs>(args: SelectSubset<T, TournamentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tournament.
     * @param {TournamentUpsertArgs} args - Arguments to update or create a Tournament.
     * @example
     * // Update or create a Tournament
     * const tournament = await prisma.tournament.upsert({
     *   create: {
     *     // ... data to create a Tournament
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tournament we want to update
     *   }
     * })
     */
    upsert<T extends TournamentUpsertArgs>(args: SelectSubset<T, TournamentUpsertArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tournaments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentCountArgs} args - Arguments to filter Tournaments to count.
     * @example
     * // Count the number of Tournaments
     * const count = await prisma.tournament.count({
     *   where: {
     *     // ... the filter for the Tournaments we want to count
     *   }
     * })
    **/
    count<T extends TournamentCountArgs>(
      args?: Subset<T, TournamentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TournamentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TournamentAggregateArgs>(args: Subset<T, TournamentAggregateArgs>): Prisma.PrismaPromise<GetTournamentAggregateType<T>>

    /**
     * Group by Tournament.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TournamentGroupByArgs} args - Group by arguments.
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
      T extends TournamentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TournamentGroupByArgs['orderBy'] }
        : { orderBy?: TournamentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TournamentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTournamentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tournament model
   */
  readonly fields: TournamentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tournament.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TournamentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teamRounds<T extends Tournament$teamRoundsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$teamRoundsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    round<T extends Tournament$roundArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$roundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamStats<T extends Tournament$teamStatsArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$teamStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Fixture<T extends Tournament$FixtureArgs<ExtArgs> = {}>(args?: Subset<T, Tournament$FixtureArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Tournament model
   */
  interface TournamentFieldRefs {
    readonly id: FieldRef<"Tournament", 'String'>
    readonly name: FieldRef<"Tournament", 'String'>
    readonly fee: FieldRef<"Tournament", 'Int'>
    readonly createdAt: FieldRef<"Tournament", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Tournament findUnique
   */
  export type TournamentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findUniqueOrThrow
   */
  export type TournamentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament findFirst
   */
  export type TournamentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findFirstOrThrow
   */
  export type TournamentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournament to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tournaments.
     */
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament findMany
   */
  export type TournamentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter, which Tournaments to fetch.
     */
    where?: TournamentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tournaments to fetch.
     */
    orderBy?: TournamentOrderByWithRelationInput | TournamentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tournaments.
     */
    cursor?: TournamentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tournaments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tournaments.
     */
    skip?: number
    distinct?: TournamentScalarFieldEnum | TournamentScalarFieldEnum[]
  }

  /**
   * Tournament create
   */
  export type TournamentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to create a Tournament.
     */
    data: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
  }

  /**
   * Tournament createMany
   */
  export type TournamentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament createManyAndReturn
   */
  export type TournamentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to create many Tournaments.
     */
    data: TournamentCreateManyInput | TournamentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Tournament update
   */
  export type TournamentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The data needed to update a Tournament.
     */
    data: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
    /**
     * Choose, which Tournament to update.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament updateMany
   */
  export type TournamentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament updateManyAndReturn
   */
  export type TournamentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * The data used to update Tournaments.
     */
    data: XOR<TournamentUpdateManyMutationInput, TournamentUncheckedUpdateManyInput>
    /**
     * Filter which Tournaments to update
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to update.
     */
    limit?: number
  }

  /**
   * Tournament upsert
   */
  export type TournamentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * The filter to search for the Tournament to update in case it exists.
     */
    where: TournamentWhereUniqueInput
    /**
     * In case the Tournament found by the `where` argument doesn't exist, create a new Tournament with this data.
     */
    create: XOR<TournamentCreateInput, TournamentUncheckedCreateInput>
    /**
     * In case the Tournament was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TournamentUpdateInput, TournamentUncheckedUpdateInput>
  }

  /**
   * Tournament delete
   */
  export type TournamentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    /**
     * Filter which Tournament to delete.
     */
    where: TournamentWhereUniqueInput
  }

  /**
   * Tournament deleteMany
   */
  export type TournamentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tournaments to delete
     */
    where?: TournamentWhereInput
    /**
     * Limit how many Tournaments to delete.
     */
    limit?: number
  }

  /**
   * Tournament.teamRounds
   */
  export type Tournament$teamRoundsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    where?: TeamRoundWhereInput
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    cursor?: TeamRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRoundScalarFieldEnum | TeamRoundScalarFieldEnum[]
  }

  /**
   * Tournament.round
   */
  export type Tournament$roundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    cursor?: RoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Tournament.teamStats
   */
  export type Tournament$teamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    where?: TeamStatsWhereInput
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    cursor?: TeamStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * Tournament.Fixture
   */
  export type Tournament$FixtureArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
  }

  /**
   * Tournament without action
   */
  export type TournamentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
  }


  /**
   * Model Fixture
   */

  export type AggregateFixture = {
    _count: FixtureCountAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  export type FixtureMinAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    createdAt: Date | null
  }

  export type FixtureMaxAggregateOutputType = {
    id: string | null
    tournamentId: string | null
    createdAt: Date | null
  }

  export type FixtureCountAggregateOutputType = {
    id: number
    tournamentId: number
    createdAt: number
    _all: number
  }


  export type FixtureMinAggregateInputType = {
    id?: true
    tournamentId?: true
    createdAt?: true
  }

  export type FixtureMaxAggregateInputType = {
    id?: true
    tournamentId?: true
    createdAt?: true
  }

  export type FixtureCountAggregateInputType = {
    id?: true
    tournamentId?: true
    createdAt?: true
    _all?: true
  }

  export type FixtureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixture to aggregate.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fixtures
    **/
    _count?: true | FixtureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FixtureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FixtureMaxAggregateInputType
  }

  export type GetFixtureAggregateType<T extends FixtureAggregateArgs> = {
        [P in keyof T & keyof AggregateFixture]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFixture[P]>
      : GetScalarType<T[P], AggregateFixture[P]>
  }




  export type FixtureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FixtureWhereInput
    orderBy?: FixtureOrderByWithAggregationInput | FixtureOrderByWithAggregationInput[]
    by: FixtureScalarFieldEnum[] | FixtureScalarFieldEnum
    having?: FixtureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FixtureCountAggregateInputType | true
    _min?: FixtureMinAggregateInputType
    _max?: FixtureMaxAggregateInputType
  }

  export type FixtureGroupByOutputType = {
    id: string
    tournamentId: string
    createdAt: Date
    _count: FixtureCountAggregateOutputType | null
    _min: FixtureMinAggregateOutputType | null
    _max: FixtureMaxAggregateOutputType | null
  }

  type GetFixtureGroupByPayload<T extends FixtureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FixtureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FixtureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FixtureGroupByOutputType[P]>
            : GetScalarType<T[P], FixtureGroupByOutputType[P]>
        }
      >
    >


  export type FixtureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    createdAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    teams?: boolean | Fixture$teamsArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    createdAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tournamentId?: boolean
    createdAt?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fixture"]>

  export type FixtureSelectScalar = {
    id?: boolean
    tournamentId?: boolean
    createdAt?: boolean
  }

  export type FixtureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tournamentId" | "createdAt", ExtArgs["result"]["fixture"]>
  export type FixtureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    teams?: boolean | Fixture$teamsArgs<ExtArgs>
    _count?: boolean | FixtureCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FixtureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type FixtureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $FixturePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fixture"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      teams: Prisma.$TeamPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tournamentId: string
      createdAt: Date
    }, ExtArgs["result"]["fixture"]>
    composites: {}
  }

  type FixtureGetPayload<S extends boolean | null | undefined | FixtureDefaultArgs> = $Result.GetResult<Prisma.$FixturePayload, S>

  type FixtureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FixtureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FixtureCountAggregateInputType | true
    }

  export interface FixtureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fixture'], meta: { name: 'Fixture' } }
    /**
     * Find zero or one Fixture that matches the filter.
     * @param {FixtureFindUniqueArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FixtureFindUniqueArgs>(args: SelectSubset<T, FixtureFindUniqueArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Fixture that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FixtureFindUniqueOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FixtureFindUniqueOrThrowArgs>(args: SelectSubset<T, FixtureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FixtureFindFirstArgs>(args?: SelectSubset<T, FixtureFindFirstArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Fixture that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindFirstOrThrowArgs} args - Arguments to find a Fixture
     * @example
     * // Get one Fixture
     * const fixture = await prisma.fixture.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FixtureFindFirstOrThrowArgs>(args?: SelectSubset<T, FixtureFindFirstOrThrowArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Fixtures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fixtures
     * const fixtures = await prisma.fixture.findMany()
     * 
     * // Get first 10 Fixtures
     * const fixtures = await prisma.fixture.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fixtureWithIdOnly = await prisma.fixture.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FixtureFindManyArgs>(args?: SelectSubset<T, FixtureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Fixture.
     * @param {FixtureCreateArgs} args - Arguments to create a Fixture.
     * @example
     * // Create one Fixture
     * const Fixture = await prisma.fixture.create({
     *   data: {
     *     // ... data to create a Fixture
     *   }
     * })
     * 
     */
    create<T extends FixtureCreateArgs>(args: SelectSubset<T, FixtureCreateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Fixtures.
     * @param {FixtureCreateManyArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FixtureCreateManyArgs>(args?: SelectSubset<T, FixtureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Fixtures and returns the data saved in the database.
     * @param {FixtureCreateManyAndReturnArgs} args - Arguments to create many Fixtures.
     * @example
     * // Create many Fixtures
     * const fixture = await prisma.fixture.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FixtureCreateManyAndReturnArgs>(args?: SelectSubset<T, FixtureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Fixture.
     * @param {FixtureDeleteArgs} args - Arguments to delete one Fixture.
     * @example
     * // Delete one Fixture
     * const Fixture = await prisma.fixture.delete({
     *   where: {
     *     // ... filter to delete one Fixture
     *   }
     * })
     * 
     */
    delete<T extends FixtureDeleteArgs>(args: SelectSubset<T, FixtureDeleteArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Fixture.
     * @param {FixtureUpdateArgs} args - Arguments to update one Fixture.
     * @example
     * // Update one Fixture
     * const fixture = await prisma.fixture.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FixtureUpdateArgs>(args: SelectSubset<T, FixtureUpdateArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Fixtures.
     * @param {FixtureDeleteManyArgs} args - Arguments to filter Fixtures to delete.
     * @example
     * // Delete a few Fixtures
     * const { count } = await prisma.fixture.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FixtureDeleteManyArgs>(args?: SelectSubset<T, FixtureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FixtureUpdateManyArgs>(args: SelectSubset<T, FixtureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fixtures and returns the data updated in the database.
     * @param {FixtureUpdateManyAndReturnArgs} args - Arguments to update many Fixtures.
     * @example
     * // Update many Fixtures
     * const fixture = await prisma.fixture.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Fixtures and only return the `id`
     * const fixtureWithIdOnly = await prisma.fixture.updateManyAndReturn({
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
    updateManyAndReturn<T extends FixtureUpdateManyAndReturnArgs>(args: SelectSubset<T, FixtureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Fixture.
     * @param {FixtureUpsertArgs} args - Arguments to update or create a Fixture.
     * @example
     * // Update or create a Fixture
     * const fixture = await prisma.fixture.upsert({
     *   create: {
     *     // ... data to create a Fixture
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fixture we want to update
     *   }
     * })
     */
    upsert<T extends FixtureUpsertArgs>(args: SelectSubset<T, FixtureUpsertArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Fixtures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureCountArgs} args - Arguments to filter Fixtures to count.
     * @example
     * // Count the number of Fixtures
     * const count = await prisma.fixture.count({
     *   where: {
     *     // ... the filter for the Fixtures we want to count
     *   }
     * })
    **/
    count<T extends FixtureCountArgs>(
      args?: Subset<T, FixtureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FixtureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FixtureAggregateArgs>(args: Subset<T, FixtureAggregateArgs>): Prisma.PrismaPromise<GetFixtureAggregateType<T>>

    /**
     * Group by Fixture.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FixtureGroupByArgs} args - Group by arguments.
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
      T extends FixtureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FixtureGroupByArgs['orderBy'] }
        : { orderBy?: FixtureGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FixtureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFixtureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fixture model
   */
  readonly fields: FixtureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fixture.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FixtureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends Fixture$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Fixture$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Fixture model
   */
  interface FixtureFieldRefs {
    readonly id: FieldRef<"Fixture", 'String'>
    readonly tournamentId: FieldRef<"Fixture", 'String'>
    readonly createdAt: FieldRef<"Fixture", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Fixture findUnique
   */
  export type FixtureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findUniqueOrThrow
   */
  export type FixtureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture findFirst
   */
  export type FixtureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findFirstOrThrow
   */
  export type FixtureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixture to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fixtures.
     */
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture findMany
   */
  export type FixtureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter, which Fixtures to fetch.
     */
    where?: FixtureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fixtures to fetch.
     */
    orderBy?: FixtureOrderByWithRelationInput | FixtureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fixtures.
     */
    cursor?: FixtureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fixtures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fixtures.
     */
    skip?: number
    distinct?: FixtureScalarFieldEnum | FixtureScalarFieldEnum[]
  }

  /**
   * Fixture create
   */
  export type FixtureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to create a Fixture.
     */
    data: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
  }

  /**
   * Fixture createMany
   */
  export type FixtureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Fixture createManyAndReturn
   */
  export type FixtureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * The data used to create many Fixtures.
     */
    data: FixtureCreateManyInput | FixtureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture update
   */
  export type FixtureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The data needed to update a Fixture.
     */
    data: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
    /**
     * Choose, which Fixture to update.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture updateMany
   */
  export type FixtureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
  }

  /**
   * Fixture updateManyAndReturn
   */
  export type FixtureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * The data used to update Fixtures.
     */
    data: XOR<FixtureUpdateManyMutationInput, FixtureUncheckedUpdateManyInput>
    /**
     * Filter which Fixtures to update
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Fixture upsert
   */
  export type FixtureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * The filter to search for the Fixture to update in case it exists.
     */
    where: FixtureWhereUniqueInput
    /**
     * In case the Fixture found by the `where` argument doesn't exist, create a new Fixture with this data.
     */
    create: XOR<FixtureCreateInput, FixtureUncheckedCreateInput>
    /**
     * In case the Fixture was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FixtureUpdateInput, FixtureUncheckedUpdateInput>
  }

  /**
   * Fixture delete
   */
  export type FixtureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    /**
     * Filter which Fixture to delete.
     */
    where: FixtureWhereUniqueInput
  }

  /**
   * Fixture deleteMany
   */
  export type FixtureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fixtures to delete
     */
    where?: FixtureWhereInput
    /**
     * Limit how many Fixtures to delete.
     */
    limit?: number
  }

  /**
   * Fixture.teams
   */
  export type Fixture$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Fixture without action
   */
  export type FixtureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
  }


  /**
   * Model Round
   */

  export type AggregateRound = {
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  export type RoundAvgAggregateOutputType = {
    number: number | null
  }

  export type RoundSumAggregateOutputType = {
    number: number | null
  }

  export type RoundMinAggregateOutputType = {
    id: string | null
    number: number | null
    createdAt: Date | null
    tournamentId: string | null
  }

  export type RoundMaxAggregateOutputType = {
    id: string | null
    number: number | null
    createdAt: Date | null
    tournamentId: string | null
  }

  export type RoundCountAggregateOutputType = {
    id: number
    number: number
    createdAt: number
    tournamentId: number
    _all: number
  }


  export type RoundAvgAggregateInputType = {
    number?: true
  }

  export type RoundSumAggregateInputType = {
    number?: true
  }

  export type RoundMinAggregateInputType = {
    id?: true
    number?: true
    createdAt?: true
    tournamentId?: true
  }

  export type RoundMaxAggregateInputType = {
    id?: true
    number?: true
    createdAt?: true
    tournamentId?: true
  }

  export type RoundCountAggregateInputType = {
    id?: true
    number?: true
    createdAt?: true
    tournamentId?: true
    _all?: true
  }

  export type RoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Round to aggregate.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rounds
    **/
    _count?: true | RoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoundAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoundSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoundMaxAggregateInputType
  }

  export type GetRoundAggregateType<T extends RoundAggregateArgs> = {
        [P in keyof T & keyof AggregateRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRound[P]>
      : GetScalarType<T[P], AggregateRound[P]>
  }




  export type RoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoundWhereInput
    orderBy?: RoundOrderByWithAggregationInput | RoundOrderByWithAggregationInput[]
    by: RoundScalarFieldEnum[] | RoundScalarFieldEnum
    having?: RoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoundCountAggregateInputType | true
    _avg?: RoundAvgAggregateInputType
    _sum?: RoundSumAggregateInputType
    _min?: RoundMinAggregateInputType
    _max?: RoundMaxAggregateInputType
  }

  export type RoundGroupByOutputType = {
    id: string
    number: number
    createdAt: Date
    tournamentId: string
    _count: RoundCountAggregateOutputType | null
    _avg: RoundAvgAggregateOutputType | null
    _sum: RoundSumAggregateOutputType | null
    _min: RoundMinAggregateOutputType | null
    _max: RoundMaxAggregateOutputType | null
  }

  type GetRoundGroupByPayload<T extends RoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoundGroupByOutputType[P]>
            : GetScalarType<T[P], RoundGroupByOutputType[P]>
        }
      >
    >


  export type RoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    teams?: boolean | Round$teamsArgs<ExtArgs>
    teamStats?: boolean | Round$teamStatsArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["round"]>

  export type RoundSelectScalar = {
    id?: boolean
    number?: boolean
    createdAt?: boolean
    tournamentId?: boolean
  }

  export type RoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number" | "createdAt" | "tournamentId", ExtArgs["result"]["round"]>
  export type RoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
    teams?: boolean | Round$teamsArgs<ExtArgs>
    teamStats?: boolean | Round$teamStatsArgs<ExtArgs>
    _count?: boolean | RoundCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }
  export type RoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TournamentDefaultArgs<ExtArgs>
  }

  export type $RoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Round"
    objects: {
      tournament: Prisma.$TournamentPayload<ExtArgs>
      teams: Prisma.$TeamRoundPayload<ExtArgs>[]
      teamStats: Prisma.$TeamStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      createdAt: Date
      tournamentId: string
    }, ExtArgs["result"]["round"]>
    composites: {}
  }

  type RoundGetPayload<S extends boolean | null | undefined | RoundDefaultArgs> = $Result.GetResult<Prisma.$RoundPayload, S>

  type RoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoundCountAggregateInputType | true
    }

  export interface RoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Round'], meta: { name: 'Round' } }
    /**
     * Find zero or one Round that matches the filter.
     * @param {RoundFindUniqueArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoundFindUniqueArgs>(args: SelectSubset<T, RoundFindUniqueArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Round that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoundFindUniqueOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoundFindUniqueOrThrowArgs>(args: SelectSubset<T, RoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoundFindFirstArgs>(args?: SelectSubset<T, RoundFindFirstArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Round that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindFirstOrThrowArgs} args - Arguments to find a Round
     * @example
     * // Get one Round
     * const round = await prisma.round.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoundFindFirstOrThrowArgs>(args?: SelectSubset<T, RoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rounds
     * const rounds = await prisma.round.findMany()
     * 
     * // Get first 10 Rounds
     * const rounds = await prisma.round.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roundWithIdOnly = await prisma.round.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoundFindManyArgs>(args?: SelectSubset<T, RoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Round.
     * @param {RoundCreateArgs} args - Arguments to create a Round.
     * @example
     * // Create one Round
     * const Round = await prisma.round.create({
     *   data: {
     *     // ... data to create a Round
     *   }
     * })
     * 
     */
    create<T extends RoundCreateArgs>(args: SelectSubset<T, RoundCreateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rounds.
     * @param {RoundCreateManyArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoundCreateManyArgs>(args?: SelectSubset<T, RoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rounds and returns the data saved in the database.
     * @param {RoundCreateManyAndReturnArgs} args - Arguments to create many Rounds.
     * @example
     * // Create many Rounds
     * const round = await prisma.round.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoundCreateManyAndReturnArgs>(args?: SelectSubset<T, RoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Round.
     * @param {RoundDeleteArgs} args - Arguments to delete one Round.
     * @example
     * // Delete one Round
     * const Round = await prisma.round.delete({
     *   where: {
     *     // ... filter to delete one Round
     *   }
     * })
     * 
     */
    delete<T extends RoundDeleteArgs>(args: SelectSubset<T, RoundDeleteArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Round.
     * @param {RoundUpdateArgs} args - Arguments to update one Round.
     * @example
     * // Update one Round
     * const round = await prisma.round.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoundUpdateArgs>(args: SelectSubset<T, RoundUpdateArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rounds.
     * @param {RoundDeleteManyArgs} args - Arguments to filter Rounds to delete.
     * @example
     * // Delete a few Rounds
     * const { count } = await prisma.round.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoundDeleteManyArgs>(args?: SelectSubset<T, RoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoundUpdateManyArgs>(args: SelectSubset<T, RoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rounds and returns the data updated in the database.
     * @param {RoundUpdateManyAndReturnArgs} args - Arguments to update many Rounds.
     * @example
     * // Update many Rounds
     * const round = await prisma.round.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rounds and only return the `id`
     * const roundWithIdOnly = await prisma.round.updateManyAndReturn({
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
    updateManyAndReturn<T extends RoundUpdateManyAndReturnArgs>(args: SelectSubset<T, RoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Round.
     * @param {RoundUpsertArgs} args - Arguments to update or create a Round.
     * @example
     * // Update or create a Round
     * const round = await prisma.round.upsert({
     *   create: {
     *     // ... data to create a Round
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Round we want to update
     *   }
     * })
     */
    upsert<T extends RoundUpsertArgs>(args: SelectSubset<T, RoundUpsertArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundCountArgs} args - Arguments to filter Rounds to count.
     * @example
     * // Count the number of Rounds
     * const count = await prisma.round.count({
     *   where: {
     *     // ... the filter for the Rounds we want to count
     *   }
     * })
    **/
    count<T extends RoundCountArgs>(
      args?: Subset<T, RoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoundAggregateArgs>(args: Subset<T, RoundAggregateArgs>): Prisma.PrismaPromise<GetRoundAggregateType<T>>

    /**
     * Group by Round.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoundGroupByArgs} args - Group by arguments.
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
      T extends RoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoundGroupByArgs['orderBy'] }
        : { orderBy?: RoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Round model
   */
  readonly fields: RoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Round.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tournament<T extends TournamentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TournamentDefaultArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teams<T extends Round$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Round$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamStats<T extends Round$teamStatsArgs<ExtArgs> = {}>(args?: Subset<T, Round$teamStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Round model
   */
  interface RoundFieldRefs {
    readonly id: FieldRef<"Round", 'String'>
    readonly number: FieldRef<"Round", 'Int'>
    readonly createdAt: FieldRef<"Round", 'DateTime'>
    readonly tournamentId: FieldRef<"Round", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Round findUnique
   */
  export type RoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findUniqueOrThrow
   */
  export type RoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round findFirst
   */
  export type RoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findFirstOrThrow
   */
  export type RoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Round to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rounds.
     */
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round findMany
   */
  export type RoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter, which Rounds to fetch.
     */
    where?: RoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rounds to fetch.
     */
    orderBy?: RoundOrderByWithRelationInput | RoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rounds.
     */
    cursor?: RoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rounds.
     */
    skip?: number
    distinct?: RoundScalarFieldEnum | RoundScalarFieldEnum[]
  }

  /**
   * Round create
   */
  export type RoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to create a Round.
     */
    data: XOR<RoundCreateInput, RoundUncheckedCreateInput>
  }

  /**
   * Round createMany
   */
  export type RoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Round createManyAndReturn
   */
  export type RoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to create many Rounds.
     */
    data: RoundCreateManyInput | RoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round update
   */
  export type RoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The data needed to update a Round.
     */
    data: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
    /**
     * Choose, which Round to update.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round updateMany
   */
  export type RoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
  }

  /**
   * Round updateManyAndReturn
   */
  export type RoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * The data used to update Rounds.
     */
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyInput>
    /**
     * Filter which Rounds to update
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Round upsert
   */
  export type RoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * The filter to search for the Round to update in case it exists.
     */
    where: RoundWhereUniqueInput
    /**
     * In case the Round found by the `where` argument doesn't exist, create a new Round with this data.
     */
    create: XOR<RoundCreateInput, RoundUncheckedCreateInput>
    /**
     * In case the Round was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoundUpdateInput, RoundUncheckedUpdateInput>
  }

  /**
   * Round delete
   */
  export type RoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    /**
     * Filter which Round to delete.
     */
    where: RoundWhereUniqueInput
  }

  /**
   * Round deleteMany
   */
  export type RoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rounds to delete
     */
    where?: RoundWhereInput
    /**
     * Limit how many Rounds to delete.
     */
    limit?: number
  }

  /**
   * Round.teams
   */
  export type Round$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    where?: TeamRoundWhereInput
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    cursor?: TeamRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRoundScalarFieldEnum | TeamRoundScalarFieldEnum[]
  }

  /**
   * Round.teamStats
   */
  export type Round$teamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    where?: TeamStatsWhereInput
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    cursor?: TeamStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * Round without action
   */
  export type RoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
  }


  /**
   * Model TeamRound
   */

  export type AggregateTeamRound = {
    _count: TeamRoundCountAggregateOutputType | null
    _min: TeamRoundMinAggregateOutputType | null
    _max: TeamRoundMaxAggregateOutputType | null
  }

  export type TeamRoundMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    roundId: string | null
    createdAt: Date | null
    tournamentId: string | null
  }

  export type TeamRoundMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    roundId: string | null
    createdAt: Date | null
    tournamentId: string | null
  }

  export type TeamRoundCountAggregateOutputType = {
    id: number
    teamId: number
    roundId: number
    createdAt: number
    tournamentId: number
    _all: number
  }


  export type TeamRoundMinAggregateInputType = {
    id?: true
    teamId?: true
    roundId?: true
    createdAt?: true
    tournamentId?: true
  }

  export type TeamRoundMaxAggregateInputType = {
    id?: true
    teamId?: true
    roundId?: true
    createdAt?: true
    tournamentId?: true
  }

  export type TeamRoundCountAggregateInputType = {
    id?: true
    teamId?: true
    roundId?: true
    createdAt?: true
    tournamentId?: true
    _all?: true
  }

  export type TeamRoundAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamRound to aggregate.
     */
    where?: TeamRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRounds to fetch.
     */
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamRounds
    **/
    _count?: true | TeamRoundCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamRoundMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamRoundMaxAggregateInputType
  }

  export type GetTeamRoundAggregateType<T extends TeamRoundAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamRound]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamRound[P]>
      : GetScalarType<T[P], AggregateTeamRound[P]>
  }




  export type TeamRoundGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamRoundWhereInput
    orderBy?: TeamRoundOrderByWithAggregationInput | TeamRoundOrderByWithAggregationInput[]
    by: TeamRoundScalarFieldEnum[] | TeamRoundScalarFieldEnum
    having?: TeamRoundScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamRoundCountAggregateInputType | true
    _min?: TeamRoundMinAggregateInputType
    _max?: TeamRoundMaxAggregateInputType
  }

  export type TeamRoundGroupByOutputType = {
    id: string
    teamId: string
    roundId: string
    createdAt: Date
    tournamentId: string | null
    _count: TeamRoundCountAggregateOutputType | null
    _min: TeamRoundMinAggregateOutputType | null
    _max: TeamRoundMaxAggregateOutputType | null
  }

  type GetTeamRoundGroupByPayload<T extends TeamRoundGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamRoundGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamRoundGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamRoundGroupByOutputType[P]>
            : GetScalarType<T[P], TeamRoundGroupByOutputType[P]>
        }
      >
    >


  export type TeamRoundSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    roundId?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    round?: boolean | RoundDefaultArgs<ExtArgs>
    tournament?: boolean | TeamRound$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["teamRound"]>

  export type TeamRoundSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    roundId?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    round?: boolean | RoundDefaultArgs<ExtArgs>
    tournament?: boolean | TeamRound$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["teamRound"]>

  export type TeamRoundSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    roundId?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    round?: boolean | RoundDefaultArgs<ExtArgs>
    tournament?: boolean | TeamRound$tournamentArgs<ExtArgs>
  }, ExtArgs["result"]["teamRound"]>

  export type TeamRoundSelectScalar = {
    id?: boolean
    teamId?: boolean
    roundId?: boolean
    createdAt?: boolean
    tournamentId?: boolean
  }

  export type TeamRoundOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "roundId" | "createdAt" | "tournamentId", ExtArgs["result"]["teamRound"]>
  export type TeamRoundInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    round?: boolean | RoundDefaultArgs<ExtArgs>
    tournament?: boolean | TeamRound$tournamentArgs<ExtArgs>
  }
  export type TeamRoundIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    round?: boolean | RoundDefaultArgs<ExtArgs>
    tournament?: boolean | TeamRound$tournamentArgs<ExtArgs>
  }
  export type TeamRoundIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    round?: boolean | RoundDefaultArgs<ExtArgs>
    tournament?: boolean | TeamRound$tournamentArgs<ExtArgs>
  }

  export type $TeamRoundPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamRound"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      round: Prisma.$RoundPayload<ExtArgs>
      tournament: Prisma.$TournamentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string
      roundId: string
      createdAt: Date
      tournamentId: string | null
    }, ExtArgs["result"]["teamRound"]>
    composites: {}
  }

  type TeamRoundGetPayload<S extends boolean | null | undefined | TeamRoundDefaultArgs> = $Result.GetResult<Prisma.$TeamRoundPayload, S>

  type TeamRoundCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamRoundFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamRoundCountAggregateInputType | true
    }

  export interface TeamRoundDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamRound'], meta: { name: 'TeamRound' } }
    /**
     * Find zero or one TeamRound that matches the filter.
     * @param {TeamRoundFindUniqueArgs} args - Arguments to find a TeamRound
     * @example
     * // Get one TeamRound
     * const teamRound = await prisma.teamRound.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamRoundFindUniqueArgs>(args: SelectSubset<T, TeamRoundFindUniqueArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamRound that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamRoundFindUniqueOrThrowArgs} args - Arguments to find a TeamRound
     * @example
     * // Get one TeamRound
     * const teamRound = await prisma.teamRound.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamRoundFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamRoundFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamRound that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundFindFirstArgs} args - Arguments to find a TeamRound
     * @example
     * // Get one TeamRound
     * const teamRound = await prisma.teamRound.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamRoundFindFirstArgs>(args?: SelectSubset<T, TeamRoundFindFirstArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamRound that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundFindFirstOrThrowArgs} args - Arguments to find a TeamRound
     * @example
     * // Get one TeamRound
     * const teamRound = await prisma.teamRound.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamRoundFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamRoundFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamRounds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamRounds
     * const teamRounds = await prisma.teamRound.findMany()
     * 
     * // Get first 10 TeamRounds
     * const teamRounds = await prisma.teamRound.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamRoundWithIdOnly = await prisma.teamRound.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamRoundFindManyArgs>(args?: SelectSubset<T, TeamRoundFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamRound.
     * @param {TeamRoundCreateArgs} args - Arguments to create a TeamRound.
     * @example
     * // Create one TeamRound
     * const TeamRound = await prisma.teamRound.create({
     *   data: {
     *     // ... data to create a TeamRound
     *   }
     * })
     * 
     */
    create<T extends TeamRoundCreateArgs>(args: SelectSubset<T, TeamRoundCreateArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamRounds.
     * @param {TeamRoundCreateManyArgs} args - Arguments to create many TeamRounds.
     * @example
     * // Create many TeamRounds
     * const teamRound = await prisma.teamRound.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamRoundCreateManyArgs>(args?: SelectSubset<T, TeamRoundCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamRounds and returns the data saved in the database.
     * @param {TeamRoundCreateManyAndReturnArgs} args - Arguments to create many TeamRounds.
     * @example
     * // Create many TeamRounds
     * const teamRound = await prisma.teamRound.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamRounds and only return the `id`
     * const teamRoundWithIdOnly = await prisma.teamRound.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamRoundCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamRoundCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamRound.
     * @param {TeamRoundDeleteArgs} args - Arguments to delete one TeamRound.
     * @example
     * // Delete one TeamRound
     * const TeamRound = await prisma.teamRound.delete({
     *   where: {
     *     // ... filter to delete one TeamRound
     *   }
     * })
     * 
     */
    delete<T extends TeamRoundDeleteArgs>(args: SelectSubset<T, TeamRoundDeleteArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamRound.
     * @param {TeamRoundUpdateArgs} args - Arguments to update one TeamRound.
     * @example
     * // Update one TeamRound
     * const teamRound = await prisma.teamRound.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamRoundUpdateArgs>(args: SelectSubset<T, TeamRoundUpdateArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamRounds.
     * @param {TeamRoundDeleteManyArgs} args - Arguments to filter TeamRounds to delete.
     * @example
     * // Delete a few TeamRounds
     * const { count } = await prisma.teamRound.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamRoundDeleteManyArgs>(args?: SelectSubset<T, TeamRoundDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamRounds
     * const teamRound = await prisma.teamRound.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamRoundUpdateManyArgs>(args: SelectSubset<T, TeamRoundUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamRounds and returns the data updated in the database.
     * @param {TeamRoundUpdateManyAndReturnArgs} args - Arguments to update many TeamRounds.
     * @example
     * // Update many TeamRounds
     * const teamRound = await prisma.teamRound.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamRounds and only return the `id`
     * const teamRoundWithIdOnly = await prisma.teamRound.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamRoundUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamRoundUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamRound.
     * @param {TeamRoundUpsertArgs} args - Arguments to update or create a TeamRound.
     * @example
     * // Update or create a TeamRound
     * const teamRound = await prisma.teamRound.upsert({
     *   create: {
     *     // ... data to create a TeamRound
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamRound we want to update
     *   }
     * })
     */
    upsert<T extends TeamRoundUpsertArgs>(args: SelectSubset<T, TeamRoundUpsertArgs<ExtArgs>>): Prisma__TeamRoundClient<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamRounds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundCountArgs} args - Arguments to filter TeamRounds to count.
     * @example
     * // Count the number of TeamRounds
     * const count = await prisma.teamRound.count({
     *   where: {
     *     // ... the filter for the TeamRounds we want to count
     *   }
     * })
    **/
    count<T extends TeamRoundCountArgs>(
      args?: Subset<T, TeamRoundCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamRoundCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamRoundAggregateArgs>(args: Subset<T, TeamRoundAggregateArgs>): Prisma.PrismaPromise<GetTeamRoundAggregateType<T>>

    /**
     * Group by TeamRound.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamRoundGroupByArgs} args - Group by arguments.
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
      T extends TeamRoundGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamRoundGroupByArgs['orderBy'] }
        : { orderBy?: TeamRoundGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamRoundGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamRoundGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamRound model
   */
  readonly fields: TeamRoundFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamRound.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamRoundClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    round<T extends RoundDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoundDefaultArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tournament<T extends TeamRound$tournamentArgs<ExtArgs> = {}>(args?: Subset<T, TeamRound$tournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamRound model
   */
  interface TeamRoundFieldRefs {
    readonly id: FieldRef<"TeamRound", 'String'>
    readonly teamId: FieldRef<"TeamRound", 'String'>
    readonly roundId: FieldRef<"TeamRound", 'String'>
    readonly createdAt: FieldRef<"TeamRound", 'DateTime'>
    readonly tournamentId: FieldRef<"TeamRound", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamRound findUnique
   */
  export type TeamRoundFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * Filter, which TeamRound to fetch.
     */
    where: TeamRoundWhereUniqueInput
  }

  /**
   * TeamRound findUniqueOrThrow
   */
  export type TeamRoundFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * Filter, which TeamRound to fetch.
     */
    where: TeamRoundWhereUniqueInput
  }

  /**
   * TeamRound findFirst
   */
  export type TeamRoundFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * Filter, which TeamRound to fetch.
     */
    where?: TeamRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRounds to fetch.
     */
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamRounds.
     */
    cursor?: TeamRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamRounds.
     */
    distinct?: TeamRoundScalarFieldEnum | TeamRoundScalarFieldEnum[]
  }

  /**
   * TeamRound findFirstOrThrow
   */
  export type TeamRoundFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * Filter, which TeamRound to fetch.
     */
    where?: TeamRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRounds to fetch.
     */
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamRounds.
     */
    cursor?: TeamRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRounds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamRounds.
     */
    distinct?: TeamRoundScalarFieldEnum | TeamRoundScalarFieldEnum[]
  }

  /**
   * TeamRound findMany
   */
  export type TeamRoundFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * Filter, which TeamRounds to fetch.
     */
    where?: TeamRoundWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamRounds to fetch.
     */
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamRounds.
     */
    cursor?: TeamRoundWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamRounds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamRounds.
     */
    skip?: number
    distinct?: TeamRoundScalarFieldEnum | TeamRoundScalarFieldEnum[]
  }

  /**
   * TeamRound create
   */
  export type TeamRoundCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamRound.
     */
    data: XOR<TeamRoundCreateInput, TeamRoundUncheckedCreateInput>
  }

  /**
   * TeamRound createMany
   */
  export type TeamRoundCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamRounds.
     */
    data: TeamRoundCreateManyInput | TeamRoundCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamRound createManyAndReturn
   */
  export type TeamRoundCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * The data used to create many TeamRounds.
     */
    data: TeamRoundCreateManyInput | TeamRoundCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamRound update
   */
  export type TeamRoundUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamRound.
     */
    data: XOR<TeamRoundUpdateInput, TeamRoundUncheckedUpdateInput>
    /**
     * Choose, which TeamRound to update.
     */
    where: TeamRoundWhereUniqueInput
  }

  /**
   * TeamRound updateMany
   */
  export type TeamRoundUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamRounds.
     */
    data: XOR<TeamRoundUpdateManyMutationInput, TeamRoundUncheckedUpdateManyInput>
    /**
     * Filter which TeamRounds to update
     */
    where?: TeamRoundWhereInput
    /**
     * Limit how many TeamRounds to update.
     */
    limit?: number
  }

  /**
   * TeamRound updateManyAndReturn
   */
  export type TeamRoundUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * The data used to update TeamRounds.
     */
    data: XOR<TeamRoundUpdateManyMutationInput, TeamRoundUncheckedUpdateManyInput>
    /**
     * Filter which TeamRounds to update
     */
    where?: TeamRoundWhereInput
    /**
     * Limit how many TeamRounds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamRound upsert
   */
  export type TeamRoundUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamRound to update in case it exists.
     */
    where: TeamRoundWhereUniqueInput
    /**
     * In case the TeamRound found by the `where` argument doesn't exist, create a new TeamRound with this data.
     */
    create: XOR<TeamRoundCreateInput, TeamRoundUncheckedCreateInput>
    /**
     * In case the TeamRound was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamRoundUpdateInput, TeamRoundUncheckedUpdateInput>
  }

  /**
   * TeamRound delete
   */
  export type TeamRoundDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    /**
     * Filter which TeamRound to delete.
     */
    where: TeamRoundWhereUniqueInput
  }

  /**
   * TeamRound deleteMany
   */
  export type TeamRoundDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamRounds to delete
     */
    where?: TeamRoundWhereInput
    /**
     * Limit how many TeamRounds to delete.
     */
    limit?: number
  }

  /**
   * TeamRound.tournament
   */
  export type TeamRound$tournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * TeamRound without action
   */
  export type TeamRoundDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
  }


  /**
   * Model Wallet
   */

  export type AggregateWallet = {
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  export type WalletAvgAggregateOutputType = {
    amount: number | null
  }

  export type WalletSumAggregateOutputType = {
    amount: number | null
  }

  export type WalletMinAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    playerId: string | null
    userId: string | null
  }

  export type WalletMaxAggregateOutputType = {
    id: string | null
    amount: number | null
    createdAt: Date | null
    playerId: string | null
    userId: string | null
  }

  export type WalletCountAggregateOutputType = {
    id: number
    amount: number
    createdAt: number
    playerId: number
    userId: number
    _all: number
  }


  export type WalletAvgAggregateInputType = {
    amount?: true
  }

  export type WalletSumAggregateInputType = {
    amount?: true
  }

  export type WalletMinAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    playerId?: true
    userId?: true
  }

  export type WalletMaxAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    playerId?: true
    userId?: true
  }

  export type WalletCountAggregateInputType = {
    id?: true
    amount?: true
    createdAt?: true
    playerId?: true
    userId?: true
    _all?: true
  }

  export type WalletAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallet to aggregate.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Wallets
    **/
    _count?: true | WalletCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WalletAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WalletSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WalletMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WalletMaxAggregateInputType
  }

  export type GetWalletAggregateType<T extends WalletAggregateArgs> = {
        [P in keyof T & keyof AggregateWallet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWallet[P]>
      : GetScalarType<T[P], AggregateWallet[P]>
  }




  export type WalletGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WalletWhereInput
    orderBy?: WalletOrderByWithAggregationInput | WalletOrderByWithAggregationInput[]
    by: WalletScalarFieldEnum[] | WalletScalarFieldEnum
    having?: WalletScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WalletCountAggregateInputType | true
    _avg?: WalletAvgAggregateInputType
    _sum?: WalletSumAggregateInputType
    _min?: WalletMinAggregateInputType
    _max?: WalletMaxAggregateInputType
  }

  export type WalletGroupByOutputType = {
    id: string
    amount: number
    createdAt: Date
    playerId: string | null
    userId: string
    _count: WalletCountAggregateOutputType | null
    _avg: WalletAvgAggregateOutputType | null
    _sum: WalletSumAggregateOutputType | null
    _min: WalletMinAggregateOutputType | null
    _max: WalletMaxAggregateOutputType | null
  }

  type GetWalletGroupByPayload<T extends WalletGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WalletGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WalletGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WalletGroupByOutputType[P]>
            : GetScalarType<T[P], WalletGroupByOutputType[P]>
        }
      >
    >


  export type WalletSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    playerId?: boolean
    userId?: boolean
    player?: boolean | Wallet$playerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    playerId?: boolean
    userId?: boolean
    player?: boolean | Wallet$playerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    playerId?: boolean
    userId?: boolean
    player?: boolean | Wallet$playerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wallet"]>

  export type WalletSelectScalar = {
    id?: boolean
    amount?: boolean
    createdAt?: boolean
    playerId?: boolean
    userId?: boolean
  }

  export type WalletOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "amount" | "createdAt" | "playerId" | "userId", ExtArgs["result"]["wallet"]>
  export type WalletInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | Wallet$playerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | Wallet$playerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WalletIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | Wallet$playerArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WalletPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Wallet"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      amount: number
      createdAt: Date
      playerId: string | null
      userId: string
    }, ExtArgs["result"]["wallet"]>
    composites: {}
  }

  type WalletGetPayload<S extends boolean | null | undefined | WalletDefaultArgs> = $Result.GetResult<Prisma.$WalletPayload, S>

  type WalletCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WalletFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WalletCountAggregateInputType | true
    }

  export interface WalletDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Wallet'], meta: { name: 'Wallet' } }
    /**
     * Find zero or one Wallet that matches the filter.
     * @param {WalletFindUniqueArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WalletFindUniqueArgs>(args: SelectSubset<T, WalletFindUniqueArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Wallet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WalletFindUniqueOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WalletFindUniqueOrThrowArgs>(args: SelectSubset<T, WalletFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WalletFindFirstArgs>(args?: SelectSubset<T, WalletFindFirstArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Wallet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindFirstOrThrowArgs} args - Arguments to find a Wallet
     * @example
     * // Get one Wallet
     * const wallet = await prisma.wallet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WalletFindFirstOrThrowArgs>(args?: SelectSubset<T, WalletFindFirstOrThrowArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Wallets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Wallets
     * const wallets = await prisma.wallet.findMany()
     * 
     * // Get first 10 Wallets
     * const wallets = await prisma.wallet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const walletWithIdOnly = await prisma.wallet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WalletFindManyArgs>(args?: SelectSubset<T, WalletFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Wallet.
     * @param {WalletCreateArgs} args - Arguments to create a Wallet.
     * @example
     * // Create one Wallet
     * const Wallet = await prisma.wallet.create({
     *   data: {
     *     // ... data to create a Wallet
     *   }
     * })
     * 
     */
    create<T extends WalletCreateArgs>(args: SelectSubset<T, WalletCreateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Wallets.
     * @param {WalletCreateManyArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WalletCreateManyArgs>(args?: SelectSubset<T, WalletCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Wallets and returns the data saved in the database.
     * @param {WalletCreateManyAndReturnArgs} args - Arguments to create many Wallets.
     * @example
     * // Create many Wallets
     * const wallet = await prisma.wallet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WalletCreateManyAndReturnArgs>(args?: SelectSubset<T, WalletCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Wallet.
     * @param {WalletDeleteArgs} args - Arguments to delete one Wallet.
     * @example
     * // Delete one Wallet
     * const Wallet = await prisma.wallet.delete({
     *   where: {
     *     // ... filter to delete one Wallet
     *   }
     * })
     * 
     */
    delete<T extends WalletDeleteArgs>(args: SelectSubset<T, WalletDeleteArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Wallet.
     * @param {WalletUpdateArgs} args - Arguments to update one Wallet.
     * @example
     * // Update one Wallet
     * const wallet = await prisma.wallet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WalletUpdateArgs>(args: SelectSubset<T, WalletUpdateArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Wallets.
     * @param {WalletDeleteManyArgs} args - Arguments to filter Wallets to delete.
     * @example
     * // Delete a few Wallets
     * const { count } = await prisma.wallet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WalletDeleteManyArgs>(args?: SelectSubset<T, WalletDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WalletUpdateManyArgs>(args: SelectSubset<T, WalletUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Wallets and returns the data updated in the database.
     * @param {WalletUpdateManyAndReturnArgs} args - Arguments to update many Wallets.
     * @example
     * // Update many Wallets
     * const wallet = await prisma.wallet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Wallets and only return the `id`
     * const walletWithIdOnly = await prisma.wallet.updateManyAndReturn({
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
    updateManyAndReturn<T extends WalletUpdateManyAndReturnArgs>(args: SelectSubset<T, WalletUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Wallet.
     * @param {WalletUpsertArgs} args - Arguments to update or create a Wallet.
     * @example
     * // Update or create a Wallet
     * const wallet = await prisma.wallet.upsert({
     *   create: {
     *     // ... data to create a Wallet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Wallet we want to update
     *   }
     * })
     */
    upsert<T extends WalletUpsertArgs>(args: SelectSubset<T, WalletUpsertArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Wallets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletCountArgs} args - Arguments to filter Wallets to count.
     * @example
     * // Count the number of Wallets
     * const count = await prisma.wallet.count({
     *   where: {
     *     // ... the filter for the Wallets we want to count
     *   }
     * })
    **/
    count<T extends WalletCountArgs>(
      args?: Subset<T, WalletCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WalletCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WalletAggregateArgs>(args: Subset<T, WalletAggregateArgs>): Prisma.PrismaPromise<GetWalletAggregateType<T>>

    /**
     * Group by Wallet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WalletGroupByArgs} args - Group by arguments.
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
      T extends WalletGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WalletGroupByArgs['orderBy'] }
        : { orderBy?: WalletGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WalletGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWalletGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Wallet model
   */
  readonly fields: WalletFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Wallet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WalletClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends Wallet$playerArgs<ExtArgs> = {}>(args?: Subset<T, Wallet$playerArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Wallet model
   */
  interface WalletFieldRefs {
    readonly id: FieldRef<"Wallet", 'String'>
    readonly amount: FieldRef<"Wallet", 'Int'>
    readonly createdAt: FieldRef<"Wallet", 'DateTime'>
    readonly playerId: FieldRef<"Wallet", 'String'>
    readonly userId: FieldRef<"Wallet", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Wallet findUnique
   */
  export type WalletFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findUniqueOrThrow
   */
  export type WalletFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet findFirst
   */
  export type WalletFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findFirstOrThrow
   */
  export type WalletFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallet to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Wallets.
     */
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet findMany
   */
  export type WalletFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter, which Wallets to fetch.
     */
    where?: WalletWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Wallets to fetch.
     */
    orderBy?: WalletOrderByWithRelationInput | WalletOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Wallets.
     */
    cursor?: WalletWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Wallets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Wallets.
     */
    skip?: number
    distinct?: WalletScalarFieldEnum | WalletScalarFieldEnum[]
  }

  /**
   * Wallet create
   */
  export type WalletCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to create a Wallet.
     */
    data: XOR<WalletCreateInput, WalletUncheckedCreateInput>
  }

  /**
   * Wallet createMany
   */
  export type WalletCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Wallet createManyAndReturn
   */
  export type WalletCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to create many Wallets.
     */
    data: WalletCreateManyInput | WalletCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet update
   */
  export type WalletUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The data needed to update a Wallet.
     */
    data: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
    /**
     * Choose, which Wallet to update.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet updateMany
   */
  export type WalletUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
  }

  /**
   * Wallet updateManyAndReturn
   */
  export type WalletUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * The data used to update Wallets.
     */
    data: XOR<WalletUpdateManyMutationInput, WalletUncheckedUpdateManyInput>
    /**
     * Filter which Wallets to update
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Wallet upsert
   */
  export type WalletUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * The filter to search for the Wallet to update in case it exists.
     */
    where: WalletWhereUniqueInput
    /**
     * In case the Wallet found by the `where` argument doesn't exist, create a new Wallet with this data.
     */
    create: XOR<WalletCreateInput, WalletUncheckedCreateInput>
    /**
     * In case the Wallet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WalletUpdateInput, WalletUncheckedUpdateInput>
  }

  /**
   * Wallet delete
   */
  export type WalletDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    /**
     * Filter which Wallet to delete.
     */
    where: WalletWhereUniqueInput
  }

  /**
   * Wallet deleteMany
   */
  export type WalletDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Wallets to delete
     */
    where?: WalletWhereInput
    /**
     * Limit how many Wallets to delete.
     */
    limit?: number
  }

  /**
   * Wallet.player
   */
  export type Wallet$playerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
  }

  /**
   * Wallet without action
   */
  export type WalletDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
  }


  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    balance: number | null
  }

  export type PlayerSumAggregateOutputType = {
    balance: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    category: $Enums.Category | null
    userId: string | null
    createdAt: Date | null
    teamId: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    balance: number | null
    category: $Enums.Category | null
    userId: string | null
    createdAt: Date | null
    teamId: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    name: number
    balance: number
    category: number
    userId: number
    createdAt: number
    teamId: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    balance?: true
  }

  export type PlayerSumAggregateInputType = {
    balance?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    category?: true
    userId?: true
    createdAt?: true
    teamId?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    category?: true
    userId?: true
    createdAt?: true
    teamId?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    name?: true
    balance?: true
    category?: true
    userId?: true
    createdAt?: true
    teamId?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: string
    name: string
    balance: number
    category: $Enums.Category
    userId: string
    createdAt: Date
    teamId: string | null
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
    playerStats?: boolean | Player$playerStatsArgs<ExtArgs>
    wallet?: boolean | Player$walletArgs<ExtArgs>
    playerTeamStats?: boolean | Player$playerTeamStatsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    balance?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    teamId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    name?: boolean
    balance?: boolean
    category?: boolean
    userId?: boolean
    createdAt?: boolean
    teamId?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "balance" | "category" | "userId" | "createdAt" | "teamId", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
    playerStats?: boolean | Player$playerStatsArgs<ExtArgs>
    wallet?: boolean | Player$walletArgs<ExtArgs>
    playerTeamStats?: boolean | Player$playerTeamStatsArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
  }
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | Player$teamArgs<ExtArgs>
  }

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs> | null
      playerStats: Prisma.$PlayerStatsPayload<ExtArgs> | null
      wallet: Prisma.$WalletPayload<ExtArgs> | null
      playerTeamStats: Prisma.$PlayerTeamStatsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      balance: number
      category: $Enums.Category
      userId: string
      createdAt: Date
      teamId: string | null
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends Player$teamArgs<ExtArgs> = {}>(args?: Subset<T, Player$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playerStats<T extends Player$playerStatsArgs<ExtArgs> = {}>(args?: Subset<T, Player$playerStatsArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    wallet<T extends Player$walletArgs<ExtArgs> = {}>(args?: Subset<T, Player$walletArgs<ExtArgs>>): Prisma__WalletClient<$Result.GetResult<Prisma.$WalletPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playerTeamStats<T extends Player$playerTeamStatsArgs<ExtArgs> = {}>(args?: Subset<T, Player$playerTeamStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'String'>
    readonly name: FieldRef<"Player", 'String'>
    readonly balance: FieldRef<"Player", 'Int'>
    readonly category: FieldRef<"Player", 'Category'>
    readonly userId: FieldRef<"Player", 'String'>
    readonly createdAt: FieldRef<"Player", 'DateTime'>
    readonly teamId: FieldRef<"Player", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.team
   */
  export type Player$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * Player.playerStats
   */
  export type Player$playerStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    where?: PlayerStatsWhereInput
  }

  /**
   * Player.wallet
   */
  export type Player$walletArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Wallet
     */
    select?: WalletSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Wallet
     */
    omit?: WalletOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WalletInclude<ExtArgs> | null
    where?: WalletWhereInput
  }

  /**
   * Player.playerTeamStats
   */
  export type Player$playerTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    where?: PlayerTeamStatsWhereInput
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    cursor?: PlayerTeamStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeamStatsScalarFieldEnum | PlayerTeamStatsScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model PlayerStats
   */

  export type AggregatePlayerStats = {
    _count: PlayerStatsCountAggregateOutputType | null
    _avg: PlayerStatsAvgAggregateOutputType | null
    _sum: PlayerStatsSumAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  export type PlayerStatsAvgAggregateOutputType = {
    matches: number | null
    wins: number | null
    deaths: number | null
    kills: number | null
    kd: number | null
  }

  export type PlayerStatsSumAggregateOutputType = {
    matches: number | null
    wins: number | null
    deaths: number | null
    kills: number | null
    kd: number | null
  }

  export type PlayerStatsMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    matches: number | null
    wins: number | null
    deaths: number | null
    kills: number | null
    kd: number | null
    createdAt: Date | null
  }

  export type PlayerStatsMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    matches: number | null
    wins: number | null
    deaths: number | null
    kills: number | null
    kd: number | null
    createdAt: Date | null
  }

  export type PlayerStatsCountAggregateOutputType = {
    id: number
    playerId: number
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt: number
    _all: number
  }


  export type PlayerStatsAvgAggregateInputType = {
    matches?: true
    wins?: true
    deaths?: true
    kills?: true
    kd?: true
  }

  export type PlayerStatsSumAggregateInputType = {
    matches?: true
    wins?: true
    deaths?: true
    kills?: true
    kd?: true
  }

  export type PlayerStatsMinAggregateInputType = {
    id?: true
    playerId?: true
    matches?: true
    wins?: true
    deaths?: true
    kills?: true
    kd?: true
    createdAt?: true
  }

  export type PlayerStatsMaxAggregateInputType = {
    id?: true
    playerId?: true
    matches?: true
    wins?: true
    deaths?: true
    kills?: true
    kd?: true
    createdAt?: true
  }

  export type PlayerStatsCountAggregateInputType = {
    id?: true
    playerId?: true
    matches?: true
    wins?: true
    deaths?: true
    kills?: true
    kd?: true
    createdAt?: true
    _all?: true
  }

  export type PlayerStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to aggregate.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerStats
    **/
    _count?: true | PlayerStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type GetPlayerStatsAggregateType<T extends PlayerStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerStats[P]>
      : GetScalarType<T[P], AggregatePlayerStats[P]>
  }




  export type PlayerStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerStatsWhereInput
    orderBy?: PlayerStatsOrderByWithAggregationInput | PlayerStatsOrderByWithAggregationInput[]
    by: PlayerStatsScalarFieldEnum[] | PlayerStatsScalarFieldEnum
    having?: PlayerStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerStatsCountAggregateInputType | true
    _avg?: PlayerStatsAvgAggregateInputType
    _sum?: PlayerStatsSumAggregateInputType
    _min?: PlayerStatsMinAggregateInputType
    _max?: PlayerStatsMaxAggregateInputType
  }

  export type PlayerStatsGroupByOutputType = {
    id: string
    playerId: string
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt: Date
    _count: PlayerStatsCountAggregateOutputType | null
    _avg: PlayerStatsAvgAggregateOutputType | null
    _sum: PlayerStatsSumAggregateOutputType | null
    _min: PlayerStatsMinAggregateOutputType | null
    _max: PlayerStatsMaxAggregateOutputType | null
  }

  type GetPlayerStatsGroupByPayload<T extends PlayerStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerStatsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    matches?: boolean
    wins?: boolean
    deaths?: boolean
    kills?: boolean
    kd?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    matches?: boolean
    wins?: boolean
    deaths?: boolean
    kills?: boolean
    kd?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    matches?: boolean
    wins?: boolean
    deaths?: boolean
    kills?: boolean
    kd?: boolean
    createdAt?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerStats"]>

  export type PlayerStatsSelectScalar = {
    id?: boolean
    playerId?: boolean
    matches?: boolean
    wins?: boolean
    deaths?: boolean
    kills?: boolean
    kd?: boolean
    createdAt?: boolean
  }

  export type PlayerStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "matches" | "wins" | "deaths" | "kills" | "kd" | "createdAt", ExtArgs["result"]["playerStats"]>
  export type PlayerStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type PlayerStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $PlayerStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerStats"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      matches: number
      wins: number
      deaths: number
      kills: number
      kd: number
      createdAt: Date
    }, ExtArgs["result"]["playerStats"]>
    composites: {}
  }

  type PlayerStatsGetPayload<S extends boolean | null | undefined | PlayerStatsDefaultArgs> = $Result.GetResult<Prisma.$PlayerStatsPayload, S>

  type PlayerStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerStatsCountAggregateInputType | true
    }

  export interface PlayerStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerStats'], meta: { name: 'PlayerStats' } }
    /**
     * Find zero or one PlayerStats that matches the filter.
     * @param {PlayerStatsFindUniqueArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerStatsFindUniqueArgs>(args: SelectSubset<T, PlayerStatsFindUniqueArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerStatsFindUniqueOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerStatsFindFirstArgs>(args?: SelectSubset<T, PlayerStatsFindFirstArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindFirstOrThrowArgs} args - Arguments to find a PlayerStats
     * @example
     * // Get one PlayerStats
     * const playerStats = await prisma.playerStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerStats
     * const playerStats = await prisma.playerStats.findMany()
     * 
     * // Get first 10 PlayerStats
     * const playerStats = await prisma.playerStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerStatsFindManyArgs>(args?: SelectSubset<T, PlayerStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerStats.
     * @param {PlayerStatsCreateArgs} args - Arguments to create a PlayerStats.
     * @example
     * // Create one PlayerStats
     * const PlayerStats = await prisma.playerStats.create({
     *   data: {
     *     // ... data to create a PlayerStats
     *   }
     * })
     * 
     */
    create<T extends PlayerStatsCreateArgs>(args: SelectSubset<T, PlayerStatsCreateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerStats.
     * @param {PlayerStatsCreateManyArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerStatsCreateManyArgs>(args?: SelectSubset<T, PlayerStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerStats and returns the data saved in the database.
     * @param {PlayerStatsCreateManyAndReturnArgs} args - Arguments to create many PlayerStats.
     * @example
     * // Create many PlayerStats
     * const playerStats = await prisma.playerStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerStats and only return the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerStats.
     * @param {PlayerStatsDeleteArgs} args - Arguments to delete one PlayerStats.
     * @example
     * // Delete one PlayerStats
     * const PlayerStats = await prisma.playerStats.delete({
     *   where: {
     *     // ... filter to delete one PlayerStats
     *   }
     * })
     * 
     */
    delete<T extends PlayerStatsDeleteArgs>(args: SelectSubset<T, PlayerStatsDeleteArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerStats.
     * @param {PlayerStatsUpdateArgs} args - Arguments to update one PlayerStats.
     * @example
     * // Update one PlayerStats
     * const playerStats = await prisma.playerStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerStatsUpdateArgs>(args: SelectSubset<T, PlayerStatsUpdateArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerStats.
     * @param {PlayerStatsDeleteManyArgs} args - Arguments to filter PlayerStats to delete.
     * @example
     * // Delete a few PlayerStats
     * const { count } = await prisma.playerStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerStatsDeleteManyArgs>(args?: SelectSubset<T, PlayerStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerStatsUpdateManyArgs>(args: SelectSubset<T, PlayerStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerStats and returns the data updated in the database.
     * @param {PlayerStatsUpdateManyAndReturnArgs} args - Arguments to update many PlayerStats.
     * @example
     * // Update many PlayerStats
     * const playerStats = await prisma.playerStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerStats and only return the `id`
     * const playerStatsWithIdOnly = await prisma.playerStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerStats.
     * @param {PlayerStatsUpsertArgs} args - Arguments to update or create a PlayerStats.
     * @example
     * // Update or create a PlayerStats
     * const playerStats = await prisma.playerStats.upsert({
     *   create: {
     *     // ... data to create a PlayerStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerStats we want to update
     *   }
     * })
     */
    upsert<T extends PlayerStatsUpsertArgs>(args: SelectSubset<T, PlayerStatsUpsertArgs<ExtArgs>>): Prisma__PlayerStatsClient<$Result.GetResult<Prisma.$PlayerStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsCountArgs} args - Arguments to filter PlayerStats to count.
     * @example
     * // Count the number of PlayerStats
     * const count = await prisma.playerStats.count({
     *   where: {
     *     // ... the filter for the PlayerStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerStatsCountArgs>(
      args?: Subset<T, PlayerStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerStatsAggregateArgs>(args: Subset<T, PlayerStatsAggregateArgs>): Prisma.PrismaPromise<GetPlayerStatsAggregateType<T>>

    /**
     * Group by PlayerStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerStatsGroupByArgs} args - Group by arguments.
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
      T extends PlayerStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerStatsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerStats model
   */
  readonly fields: PlayerStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlayerStats model
   */
  interface PlayerStatsFieldRefs {
    readonly id: FieldRef<"PlayerStats", 'String'>
    readonly playerId: FieldRef<"PlayerStats", 'String'>
    readonly matches: FieldRef<"PlayerStats", 'Int'>
    readonly wins: FieldRef<"PlayerStats", 'Int'>
    readonly deaths: FieldRef<"PlayerStats", 'Int'>
    readonly kills: FieldRef<"PlayerStats", 'Int'>
    readonly kd: FieldRef<"PlayerStats", 'Float'>
    readonly createdAt: FieldRef<"PlayerStats", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerStats findUnique
   */
  export type PlayerStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findUniqueOrThrow
   */
  export type PlayerStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats findFirst
   */
  export type PlayerStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findFirstOrThrow
   */
  export type PlayerStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerStats.
     */
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats findMany
   */
  export type PlayerStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerStats to fetch.
     */
    where?: PlayerStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerStats to fetch.
     */
    orderBy?: PlayerStatsOrderByWithRelationInput | PlayerStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerStats.
     */
    cursor?: PlayerStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerStats.
     */
    skip?: number
    distinct?: PlayerStatsScalarFieldEnum | PlayerStatsScalarFieldEnum[]
  }

  /**
   * PlayerStats create
   */
  export type PlayerStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerStats.
     */
    data: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
  }

  /**
   * PlayerStats createMany
   */
  export type PlayerStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerStats createManyAndReturn
   */
  export type PlayerStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerStats.
     */
    data: PlayerStatsCreateManyInput | PlayerStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats update
   */
  export type PlayerStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerStats.
     */
    data: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
    /**
     * Choose, which PlayerStats to update.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats updateMany
   */
  export type PlayerStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
  }

  /**
   * PlayerStats updateManyAndReturn
   */
  export type PlayerStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerStats.
     */
    data: XOR<PlayerStatsUpdateManyMutationInput, PlayerStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerStats to update
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerStats upsert
   */
  export type PlayerStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerStats to update in case it exists.
     */
    where: PlayerStatsWhereUniqueInput
    /**
     * In case the PlayerStats found by the `where` argument doesn't exist, create a new PlayerStats with this data.
     */
    create: XOR<PlayerStatsCreateInput, PlayerStatsUncheckedCreateInput>
    /**
     * In case the PlayerStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerStatsUpdateInput, PlayerStatsUncheckedUpdateInput>
  }

  /**
   * PlayerStats delete
   */
  export type PlayerStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
    /**
     * Filter which PlayerStats to delete.
     */
    where: PlayerStatsWhereUniqueInput
  }

  /**
   * PlayerStats deleteMany
   */
  export type PlayerStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerStats to delete
     */
    where?: PlayerStatsWhereInput
    /**
     * Limit how many PlayerStats to delete.
     */
    limit?: number
  }

  /**
   * PlayerStats without action
   */
  export type PlayerStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerStats
     */
    select?: PlayerStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerStats
     */
    omit?: PlayerStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerStatsInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamAvgAggregateOutputType = {
    teamNumber: number | null
  }

  export type TeamSumAggregateOutputType = {
    teamNumber: number | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    teamNumber: number | null
    fixturesId: string | null
    teamStatsId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    teamNumber: number | null
    fixturesId: string | null
    teamStatsId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    teamNumber: number
    fixturesId: number
    teamStatsId: number
    _all: number
  }


  export type TeamAvgAggregateInputType = {
    teamNumber?: true
  }

  export type TeamSumAggregateInputType = {
    teamNumber?: true
  }

  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    teamNumber?: true
    fixturesId?: true
    teamStatsId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    teamNumber?: true
    fixturesId?: true
    teamStatsId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    teamNumber?: true
    fixturesId?: true
    teamStatsId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _avg?: TeamAvgAggregateInputType
    _sum?: TeamSumAggregateInputType
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    teamNumber: number
    fixturesId: string | null
    teamStatsId: string | null
    _count: TeamCountAggregateOutputType | null
    _avg: TeamAvgAggregateOutputType | null
    _sum: TeamSumAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    teamNumber?: boolean
    fixturesId?: boolean
    teamStatsId?: boolean
    players?: boolean | Team$playersArgs<ExtArgs>
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    playerTeamStats?: boolean | Team$playerTeamStatsArgs<ExtArgs>
    teamRound?: boolean | Team$teamRoundArgs<ExtArgs>
    fixtures?: boolean | Team$fixturesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    teamNumber?: boolean
    fixturesId?: boolean
    teamStatsId?: boolean
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    fixtures?: boolean | Team$fixturesArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    teamNumber?: boolean
    fixturesId?: boolean
    teamStatsId?: boolean
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    fixtures?: boolean | Team$fixturesArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    teamNumber?: boolean
    fixturesId?: boolean
    teamStatsId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "teamNumber" | "fixturesId" | "teamStatsId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    players?: boolean | Team$playersArgs<ExtArgs>
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    playerTeamStats?: boolean | Team$playerTeamStatsArgs<ExtArgs>
    teamRound?: boolean | Team$teamRoundArgs<ExtArgs>
    fixtures?: boolean | Team$fixturesArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    fixtures?: boolean | Team$fixturesArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teamStats?: boolean | Team$teamStatsArgs<ExtArgs>
    fixtures?: boolean | Team$fixturesArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      players: Prisma.$PlayerPayload<ExtArgs>[]
      teamStats: Prisma.$TeamStatsPayload<ExtArgs> | null
      playerTeamStats: Prisma.$PlayerTeamStatsPayload<ExtArgs>[]
      teamRound: Prisma.$TeamRoundPayload<ExtArgs>[]
      fixtures: Prisma.$FixturePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      teamNumber: number
      fixturesId: string | null
      teamStatsId: string | null
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    players<T extends Team$playersArgs<ExtArgs> = {}>(args?: Subset<T, Team$playersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamStats<T extends Team$teamStatsArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamStatsArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playerTeamStats<T extends Team$playerTeamStatsArgs<ExtArgs> = {}>(args?: Subset<T, Team$playerTeamStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    teamRound<T extends Team$teamRoundArgs<ExtArgs> = {}>(args?: Subset<T, Team$teamRoundArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamRoundPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    fixtures<T extends Team$fixturesArgs<ExtArgs> = {}>(args?: Subset<T, Team$fixturesArgs<ExtArgs>>): Prisma__FixtureClient<$Result.GetResult<Prisma.$FixturePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly teamNumber: FieldRef<"Team", 'Int'>
    readonly fixturesId: FieldRef<"Team", 'String'>
    readonly teamStatsId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.players
   */
  export type Team$playersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    cursor?: PlayerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Team.teamStats
   */
  export type Team$teamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    where?: TeamStatsWhereInput
  }

  /**
   * Team.playerTeamStats
   */
  export type Team$playerTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    where?: PlayerTeamStatsWhereInput
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    cursor?: PlayerTeamStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeamStatsScalarFieldEnum | PlayerTeamStatsScalarFieldEnum[]
  }

  /**
   * Team.teamRound
   */
  export type Team$teamRoundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamRound
     */
    select?: TeamRoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamRound
     */
    omit?: TeamRoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamRoundInclude<ExtArgs> | null
    where?: TeamRoundWhereInput
    orderBy?: TeamRoundOrderByWithRelationInput | TeamRoundOrderByWithRelationInput[]
    cursor?: TeamRoundWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamRoundScalarFieldEnum | TeamRoundScalarFieldEnum[]
  }

  /**
   * Team.fixtures
   */
  export type Team$fixturesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fixture
     */
    select?: FixtureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Fixture
     */
    omit?: FixtureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FixtureInclude<ExtArgs> | null
    where?: FixtureWhereInput
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamStats
   */

  export type AggregateTeamStats = {
    _count: TeamStatsCountAggregateOutputType | null
    _avg: TeamStatsAvgAggregateOutputType | null
    _sum: TeamStatsSumAggregateOutputType | null
    _min: TeamStatsMinAggregateOutputType | null
    _max: TeamStatsMaxAggregateOutputType | null
  }

  export type TeamStatsAvgAggregateOutputType = {
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
  }

  export type TeamStatsSumAggregateOutputType = {
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
  }

  export type TeamStatsMinAggregateOutputType = {
    id: string | null
    teamId: string | null
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
    createdAt: Date | null
    tournamentId: string | null
    roundId: string | null
  }

  export type TeamStatsMaxAggregateOutputType = {
    id: string | null
    teamId: string | null
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
    createdAt: Date | null
    tournamentId: string | null
    roundId: string | null
  }

  export type TeamStatsCountAggregateOutputType = {
    id: number
    teamId: number
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt: number
    tournamentId: number
    roundId: number
    _all: number
  }


  export type TeamStatsAvgAggregateInputType = {
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
  }

  export type TeamStatsSumAggregateInputType = {
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
  }

  export type TeamStatsMinAggregateInputType = {
    id?: true
    teamId?: true
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
    createdAt?: true
    tournamentId?: true
    roundId?: true
  }

  export type TeamStatsMaxAggregateInputType = {
    id?: true
    teamId?: true
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
    createdAt?: true
    tournamentId?: true
    roundId?: true
  }

  export type TeamStatsCountAggregateInputType = {
    id?: true
    teamId?: true
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
    createdAt?: true
    tournamentId?: true
    roundId?: true
    _all?: true
  }

  export type TeamStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamStats to aggregate.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamStats
    **/
    _count?: true | TeamStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeamStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeamStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamStatsMaxAggregateInputType
  }

  export type GetTeamStatsAggregateType<T extends TeamStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamStats[P]>
      : GetScalarType<T[P], AggregateTeamStats[P]>
  }




  export type TeamStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamStatsWhereInput
    orderBy?: TeamStatsOrderByWithAggregationInput | TeamStatsOrderByWithAggregationInput[]
    by: TeamStatsScalarFieldEnum[] | TeamStatsScalarFieldEnum
    having?: TeamStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamStatsCountAggregateInputType | true
    _avg?: TeamStatsAvgAggregateInputType
    _sum?: TeamStatsSumAggregateInputType
    _min?: TeamStatsMinAggregateInputType
    _max?: TeamStatsMaxAggregateInputType
  }

  export type TeamStatsGroupByOutputType = {
    id: string
    teamId: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt: Date
    tournamentId: string | null
    roundId: string | null
    _count: TeamStatsCountAggregateOutputType | null
    _avg: TeamStatsAvgAggregateOutputType | null
    _sum: TeamStatsSumAggregateOutputType | null
    _min: TeamStatsMinAggregateOutputType | null
    _max: TeamStatsMaxAggregateOutputType | null
  }

  type GetTeamStatsGroupByPayload<T extends TeamStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamStatsGroupByOutputType[P]>
            : GetScalarType<T[P], TeamStatsGroupByOutputType[P]>
        }
      >
    >


  export type TeamStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    roundId?: boolean
    team?: boolean | TeamStats$teamArgs<ExtArgs>
    playerTeamStats?: boolean | TeamStats$playerTeamStatsArgs<ExtArgs>
    tournament?: boolean | TeamStats$tournamentArgs<ExtArgs>
    round?: boolean | TeamStats$roundArgs<ExtArgs>
    _count?: boolean | TeamStatsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamStats"]>

  export type TeamStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    roundId?: boolean
    tournament?: boolean | TeamStats$tournamentArgs<ExtArgs>
    round?: boolean | TeamStats$roundArgs<ExtArgs>
  }, ExtArgs["result"]["teamStats"]>

  export type TeamStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    roundId?: boolean
    tournament?: boolean | TeamStats$tournamentArgs<ExtArgs>
    round?: boolean | TeamStats$roundArgs<ExtArgs>
  }, ExtArgs["result"]["teamStats"]>

  export type TeamStatsSelectScalar = {
    id?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    tournamentId?: boolean
    roundId?: boolean
  }

  export type TeamStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "teamId" | "kills" | "deaths" | "kd" | "position" | "total" | "createdAt" | "tournamentId" | "roundId", ExtArgs["result"]["teamStats"]>
  export type TeamStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamStats$teamArgs<ExtArgs>
    playerTeamStats?: boolean | TeamStats$playerTeamStatsArgs<ExtArgs>
    tournament?: boolean | TeamStats$tournamentArgs<ExtArgs>
    round?: boolean | TeamStats$roundArgs<ExtArgs>
    _count?: boolean | TeamStatsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TeamStats$tournamentArgs<ExtArgs>
    round?: boolean | TeamStats$roundArgs<ExtArgs>
  }
  export type TeamStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tournament?: boolean | TeamStats$tournamentArgs<ExtArgs>
    round?: boolean | TeamStats$roundArgs<ExtArgs>
  }

  export type $TeamStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamStats"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs> | null
      playerTeamStats: Prisma.$PlayerTeamStatsPayload<ExtArgs>[]
      tournament: Prisma.$TournamentPayload<ExtArgs> | null
      round: Prisma.$RoundPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      teamId: string | null
      kills: number
      deaths: number
      kd: number
      position: number
      total: number
      createdAt: Date
      tournamentId: string | null
      roundId: string | null
    }, ExtArgs["result"]["teamStats"]>
    composites: {}
  }

  type TeamStatsGetPayload<S extends boolean | null | undefined | TeamStatsDefaultArgs> = $Result.GetResult<Prisma.$TeamStatsPayload, S>

  type TeamStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamStatsCountAggregateInputType | true
    }

  export interface TeamStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamStats'], meta: { name: 'TeamStats' } }
    /**
     * Find zero or one TeamStats that matches the filter.
     * @param {TeamStatsFindUniqueArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamStatsFindUniqueArgs>(args: SelectSubset<T, TeamStatsFindUniqueArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamStatsFindUniqueOrThrowArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsFindFirstArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamStatsFindFirstArgs>(args?: SelectSubset<T, TeamStatsFindFirstArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsFindFirstOrThrowArgs} args - Arguments to find a TeamStats
     * @example
     * // Get one TeamStats
     * const teamStats = await prisma.teamStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamStats
     * const teamStats = await prisma.teamStats.findMany()
     * 
     * // Get first 10 TeamStats
     * const teamStats = await prisma.teamStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamStatsWithIdOnly = await prisma.teamStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamStatsFindManyArgs>(args?: SelectSubset<T, TeamStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamStats.
     * @param {TeamStatsCreateArgs} args - Arguments to create a TeamStats.
     * @example
     * // Create one TeamStats
     * const TeamStats = await prisma.teamStats.create({
     *   data: {
     *     // ... data to create a TeamStats
     *   }
     * })
     * 
     */
    create<T extends TeamStatsCreateArgs>(args: SelectSubset<T, TeamStatsCreateArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamStats.
     * @param {TeamStatsCreateManyArgs} args - Arguments to create many TeamStats.
     * @example
     * // Create many TeamStats
     * const teamStats = await prisma.teamStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamStatsCreateManyArgs>(args?: SelectSubset<T, TeamStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamStats and returns the data saved in the database.
     * @param {TeamStatsCreateManyAndReturnArgs} args - Arguments to create many TeamStats.
     * @example
     * // Create many TeamStats
     * const teamStats = await prisma.teamStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamStats and only return the `id`
     * const teamStatsWithIdOnly = await prisma.teamStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamStats.
     * @param {TeamStatsDeleteArgs} args - Arguments to delete one TeamStats.
     * @example
     * // Delete one TeamStats
     * const TeamStats = await prisma.teamStats.delete({
     *   where: {
     *     // ... filter to delete one TeamStats
     *   }
     * })
     * 
     */
    delete<T extends TeamStatsDeleteArgs>(args: SelectSubset<T, TeamStatsDeleteArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamStats.
     * @param {TeamStatsUpdateArgs} args - Arguments to update one TeamStats.
     * @example
     * // Update one TeamStats
     * const teamStats = await prisma.teamStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamStatsUpdateArgs>(args: SelectSubset<T, TeamStatsUpdateArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamStats.
     * @param {TeamStatsDeleteManyArgs} args - Arguments to filter TeamStats to delete.
     * @example
     * // Delete a few TeamStats
     * const { count } = await prisma.teamStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamStatsDeleteManyArgs>(args?: SelectSubset<T, TeamStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamStats
     * const teamStats = await prisma.teamStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamStatsUpdateManyArgs>(args: SelectSubset<T, TeamStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamStats and returns the data updated in the database.
     * @param {TeamStatsUpdateManyAndReturnArgs} args - Arguments to update many TeamStats.
     * @example
     * // Update many TeamStats
     * const teamStats = await prisma.teamStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamStats and only return the `id`
     * const teamStatsWithIdOnly = await prisma.teamStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamStats.
     * @param {TeamStatsUpsertArgs} args - Arguments to update or create a TeamStats.
     * @example
     * // Update or create a TeamStats
     * const teamStats = await prisma.teamStats.upsert({
     *   create: {
     *     // ... data to create a TeamStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamStats we want to update
     *   }
     * })
     */
    upsert<T extends TeamStatsUpsertArgs>(args: SelectSubset<T, TeamStatsUpsertArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsCountArgs} args - Arguments to filter TeamStats to count.
     * @example
     * // Count the number of TeamStats
     * const count = await prisma.teamStats.count({
     *   where: {
     *     // ... the filter for the TeamStats we want to count
     *   }
     * })
    **/
    count<T extends TeamStatsCountArgs>(
      args?: Subset<T, TeamStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamStatsAggregateArgs>(args: Subset<T, TeamStatsAggregateArgs>): Prisma.PrismaPromise<GetTeamStatsAggregateType<T>>

    /**
     * Group by TeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamStatsGroupByArgs} args - Group by arguments.
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
      T extends TeamStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamStatsGroupByArgs['orderBy'] }
        : { orderBy?: TeamStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamStats model
   */
  readonly fields: TeamStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    team<T extends TeamStats$teamArgs<ExtArgs> = {}>(args?: Subset<T, TeamStats$teamArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    playerTeamStats<T extends TeamStats$playerTeamStatsArgs<ExtArgs> = {}>(args?: Subset<T, TeamStats$playerTeamStatsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tournament<T extends TeamStats$tournamentArgs<ExtArgs> = {}>(args?: Subset<T, TeamStats$tournamentArgs<ExtArgs>>): Prisma__TournamentClient<$Result.GetResult<Prisma.$TournamentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    round<T extends TeamStats$roundArgs<ExtArgs> = {}>(args?: Subset<T, TeamStats$roundArgs<ExtArgs>>): Prisma__RoundClient<$Result.GetResult<Prisma.$RoundPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamStats model
   */
  interface TeamStatsFieldRefs {
    readonly id: FieldRef<"TeamStats", 'String'>
    readonly teamId: FieldRef<"TeamStats", 'String'>
    readonly kills: FieldRef<"TeamStats", 'Int'>
    readonly deaths: FieldRef<"TeamStats", 'Int'>
    readonly kd: FieldRef<"TeamStats", 'Float'>
    readonly position: FieldRef<"TeamStats", 'Int'>
    readonly total: FieldRef<"TeamStats", 'Int'>
    readonly createdAt: FieldRef<"TeamStats", 'DateTime'>
    readonly tournamentId: FieldRef<"TeamStats", 'String'>
    readonly roundId: FieldRef<"TeamStats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TeamStats findUnique
   */
  export type TeamStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats findUniqueOrThrow
   */
  export type TeamStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats findFirst
   */
  export type TeamStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamStats.
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamStats.
     */
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats findFirstOrThrow
   */
  export type TeamStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamStats.
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamStats.
     */
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats findMany
   */
  export type TeamStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which TeamStats to fetch.
     */
    where?: TeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamStats to fetch.
     */
    orderBy?: TeamStatsOrderByWithRelationInput | TeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamStats.
     */
    cursor?: TeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamStats.
     */
    skip?: number
    distinct?: TeamStatsScalarFieldEnum | TeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats create
   */
  export type TeamStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamStats.
     */
    data: XOR<TeamStatsCreateInput, TeamStatsUncheckedCreateInput>
  }

  /**
   * TeamStats createMany
   */
  export type TeamStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamStats.
     */
    data: TeamStatsCreateManyInput | TeamStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamStats createManyAndReturn
   */
  export type TeamStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * The data used to create many TeamStats.
     */
    data: TeamStatsCreateManyInput | TeamStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamStats update
   */
  export type TeamStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamStats.
     */
    data: XOR<TeamStatsUpdateInput, TeamStatsUncheckedUpdateInput>
    /**
     * Choose, which TeamStats to update.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats updateMany
   */
  export type TeamStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamStats.
     */
    data: XOR<TeamStatsUpdateManyMutationInput, TeamStatsUncheckedUpdateManyInput>
    /**
     * Filter which TeamStats to update
     */
    where?: TeamStatsWhereInput
    /**
     * Limit how many TeamStats to update.
     */
    limit?: number
  }

  /**
   * TeamStats updateManyAndReturn
   */
  export type TeamStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * The data used to update TeamStats.
     */
    data: XOR<TeamStatsUpdateManyMutationInput, TeamStatsUncheckedUpdateManyInput>
    /**
     * Filter which TeamStats to update
     */
    where?: TeamStatsWhereInput
    /**
     * Limit how many TeamStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamStats upsert
   */
  export type TeamStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamStats to update in case it exists.
     */
    where: TeamStatsWhereUniqueInput
    /**
     * In case the TeamStats found by the `where` argument doesn't exist, create a new TeamStats with this data.
     */
    create: XOR<TeamStatsCreateInput, TeamStatsUncheckedCreateInput>
    /**
     * In case the TeamStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamStatsUpdateInput, TeamStatsUncheckedUpdateInput>
  }

  /**
   * TeamStats delete
   */
  export type TeamStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    /**
     * Filter which TeamStats to delete.
     */
    where: TeamStatsWhereUniqueInput
  }

  /**
   * TeamStats deleteMany
   */
  export type TeamStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamStats to delete
     */
    where?: TeamStatsWhereInput
    /**
     * Limit how many TeamStats to delete.
     */
    limit?: number
  }

  /**
   * TeamStats.team
   */
  export type TeamStats$teamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
  }

  /**
   * TeamStats.playerTeamStats
   */
  export type TeamStats$playerTeamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    where?: PlayerTeamStatsWhereInput
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    cursor?: PlayerTeamStatsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlayerTeamStatsScalarFieldEnum | PlayerTeamStatsScalarFieldEnum[]
  }

  /**
   * TeamStats.tournament
   */
  export type TeamStats$tournamentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tournament
     */
    select?: TournamentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Tournament
     */
    omit?: TournamentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TournamentInclude<ExtArgs> | null
    where?: TournamentWhereInput
  }

  /**
   * TeamStats.round
   */
  export type TeamStats$roundArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Round
     */
    select?: RoundSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Round
     */
    omit?: RoundOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoundInclude<ExtArgs> | null
    where?: RoundWhereInput
  }

  /**
   * TeamStats without action
   */
  export type TeamStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
  }


  /**
   * Model KDStats
   */

  export type AggregateKDStats = {
    _count: KDStatsCountAggregateOutputType | null
    _avg: KDStatsAvgAggregateOutputType | null
    _sum: KDStatsSumAggregateOutputType | null
    _min: KDStatsMinAggregateOutputType | null
    _max: KDStatsMaxAggregateOutputType | null
  }

  export type KDStatsAvgAggregateOutputType = {
    kd: number | null
  }

  export type KDStatsSumAggregateOutputType = {
    kd: number | null
  }

  export type KDStatsMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    kd: number | null
  }

  export type KDStatsMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    kd: number | null
  }

  export type KDStatsCountAggregateOutputType = {
    id: number
    playerId: number
    kd: number
    _all: number
  }


  export type KDStatsAvgAggregateInputType = {
    kd?: true
  }

  export type KDStatsSumAggregateInputType = {
    kd?: true
  }

  export type KDStatsMinAggregateInputType = {
    id?: true
    playerId?: true
    kd?: true
  }

  export type KDStatsMaxAggregateInputType = {
    id?: true
    playerId?: true
    kd?: true
  }

  export type KDStatsCountAggregateInputType = {
    id?: true
    playerId?: true
    kd?: true
    _all?: true
  }

  export type KDStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KDStats to aggregate.
     */
    where?: KDStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KDStats to fetch.
     */
    orderBy?: KDStatsOrderByWithRelationInput | KDStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KDStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KDStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KDStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned KDStats
    **/
    _count?: true | KDStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KDStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KDStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KDStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KDStatsMaxAggregateInputType
  }

  export type GetKDStatsAggregateType<T extends KDStatsAggregateArgs> = {
        [P in keyof T & keyof AggregateKDStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKDStats[P]>
      : GetScalarType<T[P], AggregateKDStats[P]>
  }




  export type KDStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: KDStatsWhereInput
    orderBy?: KDStatsOrderByWithAggregationInput | KDStatsOrderByWithAggregationInput[]
    by: KDStatsScalarFieldEnum[] | KDStatsScalarFieldEnum
    having?: KDStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KDStatsCountAggregateInputType | true
    _avg?: KDStatsAvgAggregateInputType
    _sum?: KDStatsSumAggregateInputType
    _min?: KDStatsMinAggregateInputType
    _max?: KDStatsMaxAggregateInputType
  }

  export type KDStatsGroupByOutputType = {
    id: string
    playerId: string
    kd: number
    _count: KDStatsCountAggregateOutputType | null
    _avg: KDStatsAvgAggregateOutputType | null
    _sum: KDStatsSumAggregateOutputType | null
    _min: KDStatsMinAggregateOutputType | null
    _max: KDStatsMaxAggregateOutputType | null
  }

  type GetKDStatsGroupByPayload<T extends KDStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KDStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KDStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KDStatsGroupByOutputType[P]>
            : GetScalarType<T[P], KDStatsGroupByOutputType[P]>
        }
      >
    >


  export type KDStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    kd?: boolean
  }, ExtArgs["result"]["kDStats"]>

  export type KDStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    kd?: boolean
  }, ExtArgs["result"]["kDStats"]>

  export type KDStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    kd?: boolean
  }, ExtArgs["result"]["kDStats"]>

  export type KDStatsSelectScalar = {
    id?: boolean
    playerId?: boolean
    kd?: boolean
  }

  export type KDStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "kd", ExtArgs["result"]["kDStats"]>

  export type $KDStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "KDStats"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      kd: number
    }, ExtArgs["result"]["kDStats"]>
    composites: {}
  }

  type KDStatsGetPayload<S extends boolean | null | undefined | KDStatsDefaultArgs> = $Result.GetResult<Prisma.$KDStatsPayload, S>

  type KDStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<KDStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: KDStatsCountAggregateInputType | true
    }

  export interface KDStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['KDStats'], meta: { name: 'KDStats' } }
    /**
     * Find zero or one KDStats that matches the filter.
     * @param {KDStatsFindUniqueArgs} args - Arguments to find a KDStats
     * @example
     * // Get one KDStats
     * const kDStats = await prisma.kDStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends KDStatsFindUniqueArgs>(args: SelectSubset<T, KDStatsFindUniqueArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one KDStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {KDStatsFindUniqueOrThrowArgs} args - Arguments to find a KDStats
     * @example
     * // Get one KDStats
     * const kDStats = await prisma.kDStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends KDStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, KDStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KDStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsFindFirstArgs} args - Arguments to find a KDStats
     * @example
     * // Get one KDStats
     * const kDStats = await prisma.kDStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends KDStatsFindFirstArgs>(args?: SelectSubset<T, KDStatsFindFirstArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first KDStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsFindFirstOrThrowArgs} args - Arguments to find a KDStats
     * @example
     * // Get one KDStats
     * const kDStats = await prisma.kDStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends KDStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, KDStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more KDStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all KDStats
     * const kDStats = await prisma.kDStats.findMany()
     * 
     * // Get first 10 KDStats
     * const kDStats = await prisma.kDStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kDStatsWithIdOnly = await prisma.kDStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends KDStatsFindManyArgs>(args?: SelectSubset<T, KDStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a KDStats.
     * @param {KDStatsCreateArgs} args - Arguments to create a KDStats.
     * @example
     * // Create one KDStats
     * const KDStats = await prisma.kDStats.create({
     *   data: {
     *     // ... data to create a KDStats
     *   }
     * })
     * 
     */
    create<T extends KDStatsCreateArgs>(args: SelectSubset<T, KDStatsCreateArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many KDStats.
     * @param {KDStatsCreateManyArgs} args - Arguments to create many KDStats.
     * @example
     * // Create many KDStats
     * const kDStats = await prisma.kDStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends KDStatsCreateManyArgs>(args?: SelectSubset<T, KDStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many KDStats and returns the data saved in the database.
     * @param {KDStatsCreateManyAndReturnArgs} args - Arguments to create many KDStats.
     * @example
     * // Create many KDStats
     * const kDStats = await prisma.kDStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many KDStats and only return the `id`
     * const kDStatsWithIdOnly = await prisma.kDStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends KDStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, KDStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a KDStats.
     * @param {KDStatsDeleteArgs} args - Arguments to delete one KDStats.
     * @example
     * // Delete one KDStats
     * const KDStats = await prisma.kDStats.delete({
     *   where: {
     *     // ... filter to delete one KDStats
     *   }
     * })
     * 
     */
    delete<T extends KDStatsDeleteArgs>(args: SelectSubset<T, KDStatsDeleteArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one KDStats.
     * @param {KDStatsUpdateArgs} args - Arguments to update one KDStats.
     * @example
     * // Update one KDStats
     * const kDStats = await prisma.kDStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends KDStatsUpdateArgs>(args: SelectSubset<T, KDStatsUpdateArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more KDStats.
     * @param {KDStatsDeleteManyArgs} args - Arguments to filter KDStats to delete.
     * @example
     * // Delete a few KDStats
     * const { count } = await prisma.kDStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends KDStatsDeleteManyArgs>(args?: SelectSubset<T, KDStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KDStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many KDStats
     * const kDStats = await prisma.kDStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends KDStatsUpdateManyArgs>(args: SelectSubset<T, KDStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more KDStats and returns the data updated in the database.
     * @param {KDStatsUpdateManyAndReturnArgs} args - Arguments to update many KDStats.
     * @example
     * // Update many KDStats
     * const kDStats = await prisma.kDStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more KDStats and only return the `id`
     * const kDStatsWithIdOnly = await prisma.kDStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends KDStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, KDStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one KDStats.
     * @param {KDStatsUpsertArgs} args - Arguments to update or create a KDStats.
     * @example
     * // Update or create a KDStats
     * const kDStats = await prisma.kDStats.upsert({
     *   create: {
     *     // ... data to create a KDStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the KDStats we want to update
     *   }
     * })
     */
    upsert<T extends KDStatsUpsertArgs>(args: SelectSubset<T, KDStatsUpsertArgs<ExtArgs>>): Prisma__KDStatsClient<$Result.GetResult<Prisma.$KDStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of KDStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsCountArgs} args - Arguments to filter KDStats to count.
     * @example
     * // Count the number of KDStats
     * const count = await prisma.kDStats.count({
     *   where: {
     *     // ... the filter for the KDStats we want to count
     *   }
     * })
    **/
    count<T extends KDStatsCountArgs>(
      args?: Subset<T, KDStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KDStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a KDStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KDStatsAggregateArgs>(args: Subset<T, KDStatsAggregateArgs>): Prisma.PrismaPromise<GetKDStatsAggregateType<T>>

    /**
     * Group by KDStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KDStatsGroupByArgs} args - Group by arguments.
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
      T extends KDStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KDStatsGroupByArgs['orderBy'] }
        : { orderBy?: KDStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KDStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKDStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the KDStats model
   */
  readonly fields: KDStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for KDStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KDStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the KDStats model
   */
  interface KDStatsFieldRefs {
    readonly id: FieldRef<"KDStats", 'String'>
    readonly playerId: FieldRef<"KDStats", 'String'>
    readonly kd: FieldRef<"KDStats", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * KDStats findUnique
   */
  export type KDStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * Filter, which KDStats to fetch.
     */
    where: KDStatsWhereUniqueInput
  }

  /**
   * KDStats findUniqueOrThrow
   */
  export type KDStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * Filter, which KDStats to fetch.
     */
    where: KDStatsWhereUniqueInput
  }

  /**
   * KDStats findFirst
   */
  export type KDStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * Filter, which KDStats to fetch.
     */
    where?: KDStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KDStats to fetch.
     */
    orderBy?: KDStatsOrderByWithRelationInput | KDStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KDStats.
     */
    cursor?: KDStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KDStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KDStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KDStats.
     */
    distinct?: KDStatsScalarFieldEnum | KDStatsScalarFieldEnum[]
  }

  /**
   * KDStats findFirstOrThrow
   */
  export type KDStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * Filter, which KDStats to fetch.
     */
    where?: KDStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KDStats to fetch.
     */
    orderBy?: KDStatsOrderByWithRelationInput | KDStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for KDStats.
     */
    cursor?: KDStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KDStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KDStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of KDStats.
     */
    distinct?: KDStatsScalarFieldEnum | KDStatsScalarFieldEnum[]
  }

  /**
   * KDStats findMany
   */
  export type KDStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * Filter, which KDStats to fetch.
     */
    where?: KDStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of KDStats to fetch.
     */
    orderBy?: KDStatsOrderByWithRelationInput | KDStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing KDStats.
     */
    cursor?: KDStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` KDStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` KDStats.
     */
    skip?: number
    distinct?: KDStatsScalarFieldEnum | KDStatsScalarFieldEnum[]
  }

  /**
   * KDStats create
   */
  export type KDStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * The data needed to create a KDStats.
     */
    data: XOR<KDStatsCreateInput, KDStatsUncheckedCreateInput>
  }

  /**
   * KDStats createMany
   */
  export type KDStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many KDStats.
     */
    data: KDStatsCreateManyInput | KDStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KDStats createManyAndReturn
   */
  export type KDStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * The data used to create many KDStats.
     */
    data: KDStatsCreateManyInput | KDStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * KDStats update
   */
  export type KDStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * The data needed to update a KDStats.
     */
    data: XOR<KDStatsUpdateInput, KDStatsUncheckedUpdateInput>
    /**
     * Choose, which KDStats to update.
     */
    where: KDStatsWhereUniqueInput
  }

  /**
   * KDStats updateMany
   */
  export type KDStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update KDStats.
     */
    data: XOR<KDStatsUpdateManyMutationInput, KDStatsUncheckedUpdateManyInput>
    /**
     * Filter which KDStats to update
     */
    where?: KDStatsWhereInput
    /**
     * Limit how many KDStats to update.
     */
    limit?: number
  }

  /**
   * KDStats updateManyAndReturn
   */
  export type KDStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * The data used to update KDStats.
     */
    data: XOR<KDStatsUpdateManyMutationInput, KDStatsUncheckedUpdateManyInput>
    /**
     * Filter which KDStats to update
     */
    where?: KDStatsWhereInput
    /**
     * Limit how many KDStats to update.
     */
    limit?: number
  }

  /**
   * KDStats upsert
   */
  export type KDStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * The filter to search for the KDStats to update in case it exists.
     */
    where: KDStatsWhereUniqueInput
    /**
     * In case the KDStats found by the `where` argument doesn't exist, create a new KDStats with this data.
     */
    create: XOR<KDStatsCreateInput, KDStatsUncheckedCreateInput>
    /**
     * In case the KDStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KDStatsUpdateInput, KDStatsUncheckedUpdateInput>
  }

  /**
   * KDStats delete
   */
  export type KDStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
    /**
     * Filter which KDStats to delete.
     */
    where: KDStatsWhereUniqueInput
  }

  /**
   * KDStats deleteMany
   */
  export type KDStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which KDStats to delete
     */
    where?: KDStatsWhereInput
    /**
     * Limit how many KDStats to delete.
     */
    limit?: number
  }

  /**
   * KDStats without action
   */
  export type KDStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KDStats
     */
    select?: KDStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the KDStats
     */
    omit?: KDStatsOmit<ExtArgs> | null
  }


  /**
   * Model PlayerTeamStats
   */

  export type AggregatePlayerTeamStats = {
    _count: PlayerTeamStatsCountAggregateOutputType | null
    _avg: PlayerTeamStatsAvgAggregateOutputType | null
    _sum: PlayerTeamStatsSumAggregateOutputType | null
    _min: PlayerTeamStatsMinAggregateOutputType | null
    _max: PlayerTeamStatsMaxAggregateOutputType | null
  }

  export type PlayerTeamStatsAvgAggregateOutputType = {
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
  }

  export type PlayerTeamStatsSumAggregateOutputType = {
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
  }

  export type PlayerTeamStatsMinAggregateOutputType = {
    id: string | null
    playerId: string | null
    teamId: string | null
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
    createdAt: Date | null
    teamStatsId: string | null
  }

  export type PlayerTeamStatsMaxAggregateOutputType = {
    id: string | null
    playerId: string | null
    teamId: string | null
    kills: number | null
    deaths: number | null
    kd: number | null
    position: number | null
    total: number | null
    createdAt: Date | null
    teamStatsId: string | null
  }

  export type PlayerTeamStatsCountAggregateOutputType = {
    id: number
    playerId: number
    teamId: number
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt: number
    teamStatsId: number
    _all: number
  }


  export type PlayerTeamStatsAvgAggregateInputType = {
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
  }

  export type PlayerTeamStatsSumAggregateInputType = {
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
  }

  export type PlayerTeamStatsMinAggregateInputType = {
    id?: true
    playerId?: true
    teamId?: true
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
    createdAt?: true
    teamStatsId?: true
  }

  export type PlayerTeamStatsMaxAggregateInputType = {
    id?: true
    playerId?: true
    teamId?: true
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
    createdAt?: true
    teamStatsId?: true
  }

  export type PlayerTeamStatsCountAggregateInputType = {
    id?: true
    playerId?: true
    teamId?: true
    kills?: true
    deaths?: true
    kd?: true
    position?: true
    total?: true
    createdAt?: true
    teamStatsId?: true
    _all?: true
  }

  export type PlayerTeamStatsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTeamStats to aggregate.
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamStats to fetch.
     */
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerTeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerTeamStats
    **/
    _count?: true | PlayerTeamStatsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerTeamStatsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerTeamStatsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerTeamStatsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerTeamStatsMaxAggregateInputType
  }

  export type GetPlayerTeamStatsAggregateType<T extends PlayerTeamStatsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerTeamStats]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerTeamStats[P]>
      : GetScalarType<T[P], AggregatePlayerTeamStats[P]>
  }




  export type PlayerTeamStatsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerTeamStatsWhereInput
    orderBy?: PlayerTeamStatsOrderByWithAggregationInput | PlayerTeamStatsOrderByWithAggregationInput[]
    by: PlayerTeamStatsScalarFieldEnum[] | PlayerTeamStatsScalarFieldEnum
    having?: PlayerTeamStatsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerTeamStatsCountAggregateInputType | true
    _avg?: PlayerTeamStatsAvgAggregateInputType
    _sum?: PlayerTeamStatsSumAggregateInputType
    _min?: PlayerTeamStatsMinAggregateInputType
    _max?: PlayerTeamStatsMaxAggregateInputType
  }

  export type PlayerTeamStatsGroupByOutputType = {
    id: string
    playerId: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt: Date
    teamStatsId: string | null
    _count: PlayerTeamStatsCountAggregateOutputType | null
    _avg: PlayerTeamStatsAvgAggregateOutputType | null
    _sum: PlayerTeamStatsSumAggregateOutputType | null
    _min: PlayerTeamStatsMinAggregateOutputType | null
    _max: PlayerTeamStatsMaxAggregateOutputType | null
  }

  type GetPlayerTeamStatsGroupByPayload<T extends PlayerTeamStatsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerTeamStatsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerTeamStatsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerTeamStatsGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerTeamStatsGroupByOutputType[P]>
        }
      >
    >


  export type PlayerTeamStatsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    teamStatsId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    teamStats?: boolean | PlayerTeamStats$teamStatsArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeamStats"]>

  export type PlayerTeamStatsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    teamStatsId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    teamStats?: boolean | PlayerTeamStats$teamStatsArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeamStats"]>

  export type PlayerTeamStatsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerId?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    teamStatsId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    teamStats?: boolean | PlayerTeamStats$teamStatsArgs<ExtArgs>
  }, ExtArgs["result"]["playerTeamStats"]>

  export type PlayerTeamStatsSelectScalar = {
    id?: boolean
    playerId?: boolean
    teamId?: boolean
    kills?: boolean
    deaths?: boolean
    kd?: boolean
    position?: boolean
    total?: boolean
    createdAt?: boolean
    teamStatsId?: boolean
  }

  export type PlayerTeamStatsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerId" | "teamId" | "kills" | "deaths" | "kd" | "position" | "total" | "createdAt" | "teamStatsId", ExtArgs["result"]["playerTeamStats"]>
  export type PlayerTeamStatsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    teamStats?: boolean | PlayerTeamStats$teamStatsArgs<ExtArgs>
  }
  export type PlayerTeamStatsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    teamStats?: boolean | PlayerTeamStats$teamStatsArgs<ExtArgs>
  }
  export type PlayerTeamStatsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
    teamStats?: boolean | PlayerTeamStats$teamStatsArgs<ExtArgs>
  }

  export type $PlayerTeamStatsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerTeamStats"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
      teamStats: Prisma.$TeamStatsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerId: string
      teamId: string
      kills: number
      deaths: number
      kd: number
      position: number
      total: number
      createdAt: Date
      teamStatsId: string | null
    }, ExtArgs["result"]["playerTeamStats"]>
    composites: {}
  }

  type PlayerTeamStatsGetPayload<S extends boolean | null | undefined | PlayerTeamStatsDefaultArgs> = $Result.GetResult<Prisma.$PlayerTeamStatsPayload, S>

  type PlayerTeamStatsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerTeamStatsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerTeamStatsCountAggregateInputType | true
    }

  export interface PlayerTeamStatsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerTeamStats'], meta: { name: 'PlayerTeamStats' } }
    /**
     * Find zero or one PlayerTeamStats that matches the filter.
     * @param {PlayerTeamStatsFindUniqueArgs} args - Arguments to find a PlayerTeamStats
     * @example
     * // Get one PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerTeamStatsFindUniqueArgs>(args: SelectSubset<T, PlayerTeamStatsFindUniqueArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerTeamStats that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerTeamStatsFindUniqueOrThrowArgs} args - Arguments to find a PlayerTeamStats
     * @example
     * // Get one PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerTeamStatsFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerTeamStatsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTeamStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsFindFirstArgs} args - Arguments to find a PlayerTeamStats
     * @example
     * // Get one PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerTeamStatsFindFirstArgs>(args?: SelectSubset<T, PlayerTeamStatsFindFirstArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerTeamStats that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsFindFirstOrThrowArgs} args - Arguments to find a PlayerTeamStats
     * @example
     * // Get one PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerTeamStatsFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerTeamStatsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerTeamStats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.findMany()
     * 
     * // Get first 10 PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerTeamStatsWithIdOnly = await prisma.playerTeamStats.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerTeamStatsFindManyArgs>(args?: SelectSubset<T, PlayerTeamStatsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerTeamStats.
     * @param {PlayerTeamStatsCreateArgs} args - Arguments to create a PlayerTeamStats.
     * @example
     * // Create one PlayerTeamStats
     * const PlayerTeamStats = await prisma.playerTeamStats.create({
     *   data: {
     *     // ... data to create a PlayerTeamStats
     *   }
     * })
     * 
     */
    create<T extends PlayerTeamStatsCreateArgs>(args: SelectSubset<T, PlayerTeamStatsCreateArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerTeamStats.
     * @param {PlayerTeamStatsCreateManyArgs} args - Arguments to create many PlayerTeamStats.
     * @example
     * // Create many PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerTeamStatsCreateManyArgs>(args?: SelectSubset<T, PlayerTeamStatsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerTeamStats and returns the data saved in the database.
     * @param {PlayerTeamStatsCreateManyAndReturnArgs} args - Arguments to create many PlayerTeamStats.
     * @example
     * // Create many PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerTeamStats and only return the `id`
     * const playerTeamStatsWithIdOnly = await prisma.playerTeamStats.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerTeamStatsCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerTeamStatsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerTeamStats.
     * @param {PlayerTeamStatsDeleteArgs} args - Arguments to delete one PlayerTeamStats.
     * @example
     * // Delete one PlayerTeamStats
     * const PlayerTeamStats = await prisma.playerTeamStats.delete({
     *   where: {
     *     // ... filter to delete one PlayerTeamStats
     *   }
     * })
     * 
     */
    delete<T extends PlayerTeamStatsDeleteArgs>(args: SelectSubset<T, PlayerTeamStatsDeleteArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerTeamStats.
     * @param {PlayerTeamStatsUpdateArgs} args - Arguments to update one PlayerTeamStats.
     * @example
     * // Update one PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerTeamStatsUpdateArgs>(args: SelectSubset<T, PlayerTeamStatsUpdateArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerTeamStats.
     * @param {PlayerTeamStatsDeleteManyArgs} args - Arguments to filter PlayerTeamStats to delete.
     * @example
     * // Delete a few PlayerTeamStats
     * const { count } = await prisma.playerTeamStats.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerTeamStatsDeleteManyArgs>(args?: SelectSubset<T, PlayerTeamStatsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerTeamStatsUpdateManyArgs>(args: SelectSubset<T, PlayerTeamStatsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerTeamStats and returns the data updated in the database.
     * @param {PlayerTeamStatsUpdateManyAndReturnArgs} args - Arguments to update many PlayerTeamStats.
     * @example
     * // Update many PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerTeamStats and only return the `id`
     * const playerTeamStatsWithIdOnly = await prisma.playerTeamStats.updateManyAndReturn({
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
    updateManyAndReturn<T extends PlayerTeamStatsUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerTeamStatsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerTeamStats.
     * @param {PlayerTeamStatsUpsertArgs} args - Arguments to update or create a PlayerTeamStats.
     * @example
     * // Update or create a PlayerTeamStats
     * const playerTeamStats = await prisma.playerTeamStats.upsert({
     *   create: {
     *     // ... data to create a PlayerTeamStats
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerTeamStats we want to update
     *   }
     * })
     */
    upsert<T extends PlayerTeamStatsUpsertArgs>(args: SelectSubset<T, PlayerTeamStatsUpsertArgs<ExtArgs>>): Prisma__PlayerTeamStatsClient<$Result.GetResult<Prisma.$PlayerTeamStatsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerTeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsCountArgs} args - Arguments to filter PlayerTeamStats to count.
     * @example
     * // Count the number of PlayerTeamStats
     * const count = await prisma.playerTeamStats.count({
     *   where: {
     *     // ... the filter for the PlayerTeamStats we want to count
     *   }
     * })
    **/
    count<T extends PlayerTeamStatsCountArgs>(
      args?: Subset<T, PlayerTeamStatsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerTeamStatsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerTeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerTeamStatsAggregateArgs>(args: Subset<T, PlayerTeamStatsAggregateArgs>): Prisma.PrismaPromise<GetPlayerTeamStatsAggregateType<T>>

    /**
     * Group by PlayerTeamStats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerTeamStatsGroupByArgs} args - Group by arguments.
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
      T extends PlayerTeamStatsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerTeamStatsGroupByArgs['orderBy'] }
        : { orderBy?: PlayerTeamStatsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerTeamStatsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerTeamStatsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerTeamStats model
   */
  readonly fields: PlayerTeamStatsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerTeamStats.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerTeamStatsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teamStats<T extends PlayerTeamStats$teamStatsArgs<ExtArgs> = {}>(args?: Subset<T, PlayerTeamStats$teamStatsArgs<ExtArgs>>): Prisma__TeamStatsClient<$Result.GetResult<Prisma.$TeamStatsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PlayerTeamStats model
   */
  interface PlayerTeamStatsFieldRefs {
    readonly id: FieldRef<"PlayerTeamStats", 'String'>
    readonly playerId: FieldRef<"PlayerTeamStats", 'String'>
    readonly teamId: FieldRef<"PlayerTeamStats", 'String'>
    readonly kills: FieldRef<"PlayerTeamStats", 'Int'>
    readonly deaths: FieldRef<"PlayerTeamStats", 'Int'>
    readonly kd: FieldRef<"PlayerTeamStats", 'Float'>
    readonly position: FieldRef<"PlayerTeamStats", 'Int'>
    readonly total: FieldRef<"PlayerTeamStats", 'Int'>
    readonly createdAt: FieldRef<"PlayerTeamStats", 'DateTime'>
    readonly teamStatsId: FieldRef<"PlayerTeamStats", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PlayerTeamStats findUnique
   */
  export type PlayerTeamStatsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamStats to fetch.
     */
    where: PlayerTeamStatsWhereUniqueInput
  }

  /**
   * PlayerTeamStats findUniqueOrThrow
   */
  export type PlayerTeamStatsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamStats to fetch.
     */
    where: PlayerTeamStatsWhereUniqueInput
  }

  /**
   * PlayerTeamStats findFirst
   */
  export type PlayerTeamStatsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamStats to fetch.
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamStats to fetch.
     */
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTeamStats.
     */
    cursor?: PlayerTeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTeamStats.
     */
    distinct?: PlayerTeamStatsScalarFieldEnum | PlayerTeamStatsScalarFieldEnum[]
  }

  /**
   * PlayerTeamStats findFirstOrThrow
   */
  export type PlayerTeamStatsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamStats to fetch.
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamStats to fetch.
     */
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerTeamStats.
     */
    cursor?: PlayerTeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamStats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerTeamStats.
     */
    distinct?: PlayerTeamStatsScalarFieldEnum | PlayerTeamStatsScalarFieldEnum[]
  }

  /**
   * PlayerTeamStats findMany
   */
  export type PlayerTeamStatsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * Filter, which PlayerTeamStats to fetch.
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerTeamStats to fetch.
     */
    orderBy?: PlayerTeamStatsOrderByWithRelationInput | PlayerTeamStatsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerTeamStats.
     */
    cursor?: PlayerTeamStatsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerTeamStats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerTeamStats.
     */
    skip?: number
    distinct?: PlayerTeamStatsScalarFieldEnum | PlayerTeamStatsScalarFieldEnum[]
  }

  /**
   * PlayerTeamStats create
   */
  export type PlayerTeamStatsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerTeamStats.
     */
    data: XOR<PlayerTeamStatsCreateInput, PlayerTeamStatsUncheckedCreateInput>
  }

  /**
   * PlayerTeamStats createMany
   */
  export type PlayerTeamStatsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerTeamStats.
     */
    data: PlayerTeamStatsCreateManyInput | PlayerTeamStatsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PlayerTeamStats createManyAndReturn
   */
  export type PlayerTeamStatsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerTeamStats.
     */
    data: PlayerTeamStatsCreateManyInput | PlayerTeamStatsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTeamStats update
   */
  export type PlayerTeamStatsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerTeamStats.
     */
    data: XOR<PlayerTeamStatsUpdateInput, PlayerTeamStatsUncheckedUpdateInput>
    /**
     * Choose, which PlayerTeamStats to update.
     */
    where: PlayerTeamStatsWhereUniqueInput
  }

  /**
   * PlayerTeamStats updateMany
   */
  export type PlayerTeamStatsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerTeamStats.
     */
    data: XOR<PlayerTeamStatsUpdateManyMutationInput, PlayerTeamStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTeamStats to update
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * Limit how many PlayerTeamStats to update.
     */
    limit?: number
  }

  /**
   * PlayerTeamStats updateManyAndReturn
   */
  export type PlayerTeamStatsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * The data used to update PlayerTeamStats.
     */
    data: XOR<PlayerTeamStatsUpdateManyMutationInput, PlayerTeamStatsUncheckedUpdateManyInput>
    /**
     * Filter which PlayerTeamStats to update
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * Limit how many PlayerTeamStats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PlayerTeamStats upsert
   */
  export type PlayerTeamStatsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerTeamStats to update in case it exists.
     */
    where: PlayerTeamStatsWhereUniqueInput
    /**
     * In case the PlayerTeamStats found by the `where` argument doesn't exist, create a new PlayerTeamStats with this data.
     */
    create: XOR<PlayerTeamStatsCreateInput, PlayerTeamStatsUncheckedCreateInput>
    /**
     * In case the PlayerTeamStats was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerTeamStatsUpdateInput, PlayerTeamStatsUncheckedUpdateInput>
  }

  /**
   * PlayerTeamStats delete
   */
  export type PlayerTeamStatsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
    /**
     * Filter which PlayerTeamStats to delete.
     */
    where: PlayerTeamStatsWhereUniqueInput
  }

  /**
   * PlayerTeamStats deleteMany
   */
  export type PlayerTeamStatsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerTeamStats to delete
     */
    where?: PlayerTeamStatsWhereInput
    /**
     * Limit how many PlayerTeamStats to delete.
     */
    limit?: number
  }

  /**
   * PlayerTeamStats.teamStats
   */
  export type PlayerTeamStats$teamStatsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamStats
     */
    select?: TeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamStats
     */
    omit?: TeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamStatsInclude<ExtArgs> | null
    where?: TeamStatsWhereInput
  }

  /**
   * PlayerTeamStats without action
   */
  export type PlayerTeamStatsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerTeamStats
     */
    select?: PlayerTeamStatsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerTeamStats
     */
    omit?: PlayerTeamStatsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerTeamStatsInclude<ExtArgs> | null
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
    phone: 'phone',
    name: 'name',
    role: 'role',
    isInternal: 'isInternal',
    isVerified: 'isVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TokenScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    token: 'token',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt',
    revoked: 'revoked',
    revokedAt: 'revokedAt',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent'
  };

  export type TokenScalarFieldEnum = (typeof TokenScalarFieldEnum)[keyof typeof TokenScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    otp: 'otp',
    isOtpUsed: 'isOtpUsed',
    otpCreatedAt: 'otpCreatedAt',
    otpExpiresAt: 'otpExpiresAt',
    otpVerifiedAt: 'otpVerifiedAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const TournamentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    fee: 'fee',
    createdAt: 'createdAt'
  };

  export type TournamentScalarFieldEnum = (typeof TournamentScalarFieldEnum)[keyof typeof TournamentScalarFieldEnum]


  export const FixtureScalarFieldEnum: {
    id: 'id',
    tournamentId: 'tournamentId',
    createdAt: 'createdAt'
  };

  export type FixtureScalarFieldEnum = (typeof FixtureScalarFieldEnum)[keyof typeof FixtureScalarFieldEnum]


  export const RoundScalarFieldEnum: {
    id: 'id',
    number: 'number',
    createdAt: 'createdAt',
    tournamentId: 'tournamentId'
  };

  export type RoundScalarFieldEnum = (typeof RoundScalarFieldEnum)[keyof typeof RoundScalarFieldEnum]


  export const TeamRoundScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    roundId: 'roundId',
    createdAt: 'createdAt',
    tournamentId: 'tournamentId'
  };

  export type TeamRoundScalarFieldEnum = (typeof TeamRoundScalarFieldEnum)[keyof typeof TeamRoundScalarFieldEnum]


  export const WalletScalarFieldEnum: {
    id: 'id',
    amount: 'amount',
    createdAt: 'createdAt',
    playerId: 'playerId',
    userId: 'userId'
  };

  export type WalletScalarFieldEnum = (typeof WalletScalarFieldEnum)[keyof typeof WalletScalarFieldEnum]


  export const PlayerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    balance: 'balance',
    category: 'category',
    userId: 'userId',
    createdAt: 'createdAt',
    teamId: 'teamId'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const PlayerStatsScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    matches: 'matches',
    wins: 'wins',
    deaths: 'deaths',
    kills: 'kills',
    kd: 'kd',
    createdAt: 'createdAt'
  };

  export type PlayerStatsScalarFieldEnum = (typeof PlayerStatsScalarFieldEnum)[keyof typeof PlayerStatsScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    teamNumber: 'teamNumber',
    fixturesId: 'fixturesId',
    teamStatsId: 'teamStatsId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamStatsScalarFieldEnum: {
    id: 'id',
    teamId: 'teamId',
    kills: 'kills',
    deaths: 'deaths',
    kd: 'kd',
    position: 'position',
    total: 'total',
    createdAt: 'createdAt',
    tournamentId: 'tournamentId',
    roundId: 'roundId'
  };

  export type TeamStatsScalarFieldEnum = (typeof TeamStatsScalarFieldEnum)[keyof typeof TeamStatsScalarFieldEnum]


  export const KDStatsScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    kd: 'kd'
  };

  export type KDStatsScalarFieldEnum = (typeof KDStatsScalarFieldEnum)[keyof typeof KDStatsScalarFieldEnum]


  export const PlayerTeamStatsScalarFieldEnum: {
    id: 'id',
    playerId: 'playerId',
    teamId: 'teamId',
    kills: 'kills',
    deaths: 'deaths',
    kd: 'kd',
    position: 'position',
    total: 'total',
    createdAt: 'createdAt',
    teamStatsId: 'teamStatsId'
  };

  export type PlayerTeamStatsScalarFieldEnum = (typeof PlayerTeamStatsScalarFieldEnum)[keyof typeof PlayerTeamStatsScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


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
    phone?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isInternal?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otps?: OtpListRelationFilter
    tokens?: TokenListRelationFilter
    Player?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isInternal?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    otps?: OtpOrderByRelationAggregateInput
    tokens?: TokenOrderByRelationAggregateInput
    Player?: PlayerOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isInternal?: BoolFilter<"User"> | boolean
    isVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    otps?: OtpListRelationFilter
    tokens?: TokenListRelationFilter
    Player?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isInternal?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    phone?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isInternal?: BoolWithAggregatesFilter<"User"> | boolean
    isVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TokenWhereInput = {
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    revoked?: BoolFilter<"Token"> | boolean
    revokedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    ipAddress?: StringNullableFilter<"Token"> | string | null
    userAgent?: StringNullableFilter<"Token"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TokenOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revoked?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TokenWhereInput | TokenWhereInput[]
    OR?: TokenWhereInput[]
    NOT?: TokenWhereInput | TokenWhereInput[]
    userId?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    revoked?: BoolFilter<"Token"> | boolean
    revokedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    ipAddress?: StringNullableFilter<"Token"> | string | null
    userAgent?: StringNullableFilter<"Token"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type TokenOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revoked?: SortOrder
    revokedAt?: SortOrderInput | SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    _count?: TokenCountOrderByAggregateInput
    _max?: TokenMaxOrderByAggregateInput
    _min?: TokenMinOrderByAggregateInput
  }

  export type TokenScalarWhereWithAggregatesInput = {
    AND?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    OR?: TokenScalarWhereWithAggregatesInput[]
    NOT?: TokenScalarWhereWithAggregatesInput | TokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Token"> | string
    userId?: StringWithAggregatesFilter<"Token"> | string
    token?: StringWithAggregatesFilter<"Token"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Token"> | Date | string
    revoked?: BoolWithAggregatesFilter<"Token"> | boolean
    revokedAt?: DateTimeNullableWithAggregatesFilter<"Token"> | Date | string | null
    ipAddress?: StringNullableWithAggregatesFilter<"Token"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"Token"> | string | null
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    userId?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    isOtpUsed?: BoolFilter<"Otp"> | boolean
    otpCreatedAt?: DateTimeFilter<"Otp"> | Date | string
    otpExpiresAt?: DateTimeFilter<"Otp"> | Date | string
    otpVerifiedAt?: DateTimeNullableFilter<"Otp"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    isOtpUsed?: SortOrder
    otpCreatedAt?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    userId?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    isOtpUsed?: BoolFilter<"Otp"> | boolean
    otpCreatedAt?: DateTimeFilter<"Otp"> | Date | string
    otpExpiresAt?: DateTimeFilter<"Otp"> | Date | string
    otpVerifiedAt?: DateTimeNullableFilter<"Otp"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    isOtpUsed?: SortOrder
    otpCreatedAt?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrderInput | SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    userId?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    isOtpUsed?: BoolWithAggregatesFilter<"Otp"> | boolean
    otpCreatedAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    otpExpiresAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    otpVerifiedAt?: DateTimeNullableWithAggregatesFilter<"Otp"> | Date | string | null
  }

  export type TournamentWhereInput = {
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    id?: StringFilter<"Tournament"> | string
    name?: StringFilter<"Tournament"> | string
    fee?: IntFilter<"Tournament"> | number
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    teamRounds?: TeamRoundListRelationFilter
    round?: RoundListRelationFilter
    teamStats?: TeamStatsListRelationFilter
    Fixture?: XOR<FixtureNullableScalarRelationFilter, FixtureWhereInput> | null
  }

  export type TournamentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
    teamRounds?: TeamRoundOrderByRelationAggregateInput
    round?: RoundOrderByRelationAggregateInput
    teamStats?: TeamStatsOrderByRelationAggregateInput
    Fixture?: FixtureOrderByWithRelationInput
  }

  export type TournamentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TournamentWhereInput | TournamentWhereInput[]
    OR?: TournamentWhereInput[]
    NOT?: TournamentWhereInput | TournamentWhereInput[]
    name?: StringFilter<"Tournament"> | string
    fee?: IntFilter<"Tournament"> | number
    createdAt?: DateTimeFilter<"Tournament"> | Date | string
    teamRounds?: TeamRoundListRelationFilter
    round?: RoundListRelationFilter
    teamStats?: TeamStatsListRelationFilter
    Fixture?: XOR<FixtureNullableScalarRelationFilter, FixtureWhereInput> | null
  }, "id">

  export type TournamentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
    _count?: TournamentCountOrderByAggregateInput
    _avg?: TournamentAvgOrderByAggregateInput
    _max?: TournamentMaxOrderByAggregateInput
    _min?: TournamentMinOrderByAggregateInput
    _sum?: TournamentSumOrderByAggregateInput
  }

  export type TournamentScalarWhereWithAggregatesInput = {
    AND?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    OR?: TournamentScalarWhereWithAggregatesInput[]
    NOT?: TournamentScalarWhereWithAggregatesInput | TournamentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tournament"> | string
    name?: StringWithAggregatesFilter<"Tournament"> | string
    fee?: IntWithAggregatesFilter<"Tournament"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Tournament"> | Date | string
  }

  export type FixtureWhereInput = {
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    id?: StringFilter<"Fixture"> | string
    tournamentId?: StringFilter<"Fixture"> | string
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    teams?: TeamListRelationFilter
  }

  export type FixtureOrderByWithRelationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    createdAt?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    teams?: TeamOrderByRelationAggregateInput
  }

  export type FixtureWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tournamentId?: string
    AND?: FixtureWhereInput | FixtureWhereInput[]
    OR?: FixtureWhereInput[]
    NOT?: FixtureWhereInput | FixtureWhereInput[]
    createdAt?: DateTimeFilter<"Fixture"> | Date | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    teams?: TeamListRelationFilter
  }, "id" | "tournamentId">

  export type FixtureOrderByWithAggregationInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    createdAt?: SortOrder
    _count?: FixtureCountOrderByAggregateInput
    _max?: FixtureMaxOrderByAggregateInput
    _min?: FixtureMinOrderByAggregateInput
  }

  export type FixtureScalarWhereWithAggregatesInput = {
    AND?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    OR?: FixtureScalarWhereWithAggregatesInput[]
    NOT?: FixtureScalarWhereWithAggregatesInput | FixtureScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fixture"> | string
    tournamentId?: StringWithAggregatesFilter<"Fixture"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Fixture"> | Date | string
  }

  export type RoundWhereInput = {
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    id?: StringFilter<"Round"> | string
    number?: IntFilter<"Round"> | number
    createdAt?: DateTimeFilter<"Round"> | Date | string
    tournamentId?: StringFilter<"Round"> | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    teams?: TeamRoundListRelationFilter
    teamStats?: TeamStatsListRelationFilter
  }

  export type RoundOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
    tournament?: TournamentOrderByWithRelationInput
    teams?: TeamRoundOrderByRelationAggregateInput
    teamStats?: TeamStatsOrderByRelationAggregateInput
  }

  export type RoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RoundWhereInput | RoundWhereInput[]
    OR?: RoundWhereInput[]
    NOT?: RoundWhereInput | RoundWhereInput[]
    number?: IntFilter<"Round"> | number
    createdAt?: DateTimeFilter<"Round"> | Date | string
    tournamentId?: StringFilter<"Round"> | string
    tournament?: XOR<TournamentScalarRelationFilter, TournamentWhereInput>
    teams?: TeamRoundListRelationFilter
    teamStats?: TeamStatsListRelationFilter
  }, "id">

  export type RoundOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
    _count?: RoundCountOrderByAggregateInput
    _avg?: RoundAvgOrderByAggregateInput
    _max?: RoundMaxOrderByAggregateInput
    _min?: RoundMinOrderByAggregateInput
    _sum?: RoundSumOrderByAggregateInput
  }

  export type RoundScalarWhereWithAggregatesInput = {
    AND?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    OR?: RoundScalarWhereWithAggregatesInput[]
    NOT?: RoundScalarWhereWithAggregatesInput | RoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Round"> | string
    number?: IntWithAggregatesFilter<"Round"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Round"> | Date | string
    tournamentId?: StringWithAggregatesFilter<"Round"> | string
  }

  export type TeamRoundWhereInput = {
    AND?: TeamRoundWhereInput | TeamRoundWhereInput[]
    OR?: TeamRoundWhereInput[]
    NOT?: TeamRoundWhereInput | TeamRoundWhereInput[]
    id?: StringFilter<"TeamRound"> | string
    teamId?: StringFilter<"TeamRound"> | string
    roundId?: StringFilter<"TeamRound"> | string
    createdAt?: DateTimeFilter<"TeamRound"> | Date | string
    tournamentId?: StringNullableFilter<"TeamRound"> | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }

  export type TeamRoundOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrder
    roundId?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    round?: RoundOrderByWithRelationInput
    tournament?: TournamentOrderByWithRelationInput
  }

  export type TeamRoundWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_roundId_tournamentId?: TeamRoundTeamIdRoundIdTournamentIdCompoundUniqueInput
    AND?: TeamRoundWhereInput | TeamRoundWhereInput[]
    OR?: TeamRoundWhereInput[]
    NOT?: TeamRoundWhereInput | TeamRoundWhereInput[]
    teamId?: StringFilter<"TeamRound"> | string
    roundId?: StringFilter<"TeamRound"> | string
    createdAt?: DateTimeFilter<"TeamRound"> | Date | string
    tournamentId?: StringNullableFilter<"TeamRound"> | string | null
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    round?: XOR<RoundScalarRelationFilter, RoundWhereInput>
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
  }, "id" | "teamId_roundId_tournamentId">

  export type TeamRoundOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrder
    roundId?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrderInput | SortOrder
    _count?: TeamRoundCountOrderByAggregateInput
    _max?: TeamRoundMaxOrderByAggregateInput
    _min?: TeamRoundMinOrderByAggregateInput
  }

  export type TeamRoundScalarWhereWithAggregatesInput = {
    AND?: TeamRoundScalarWhereWithAggregatesInput | TeamRoundScalarWhereWithAggregatesInput[]
    OR?: TeamRoundScalarWhereWithAggregatesInput[]
    NOT?: TeamRoundScalarWhereWithAggregatesInput | TeamRoundScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamRound"> | string
    teamId?: StringWithAggregatesFilter<"TeamRound"> | string
    roundId?: StringWithAggregatesFilter<"TeamRound"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TeamRound"> | Date | string
    tournamentId?: StringNullableWithAggregatesFilter<"TeamRound"> | string | null
  }

  export type WalletWhereInput = {
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    id?: StringFilter<"Wallet"> | string
    amount?: IntFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    playerId?: StringNullableFilter<"Wallet"> | string | null
    userId?: StringFilter<"Wallet"> | string
    player?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type WalletOrderByWithRelationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrderInput | SortOrder
    userId?: SortOrder
    player?: PlayerOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type WalletWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    userId?: string
    AND?: WalletWhereInput | WalletWhereInput[]
    OR?: WalletWhereInput[]
    NOT?: WalletWhereInput | WalletWhereInput[]
    amount?: IntFilter<"Wallet"> | number
    createdAt?: DateTimeFilter<"Wallet"> | Date | string
    player?: XOR<PlayerNullableScalarRelationFilter, PlayerWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "playerId" | "userId">

  export type WalletOrderByWithAggregationInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: WalletCountOrderByAggregateInput
    _avg?: WalletAvgOrderByAggregateInput
    _max?: WalletMaxOrderByAggregateInput
    _min?: WalletMinOrderByAggregateInput
    _sum?: WalletSumOrderByAggregateInput
  }

  export type WalletScalarWhereWithAggregatesInput = {
    AND?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    OR?: WalletScalarWhereWithAggregatesInput[]
    NOT?: WalletScalarWhereWithAggregatesInput | WalletScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Wallet"> | string
    amount?: IntWithAggregatesFilter<"Wallet"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Wallet"> | Date | string
    playerId?: StringNullableWithAggregatesFilter<"Wallet"> | string | null
    userId?: StringWithAggregatesFilter<"Wallet"> | string
  }

  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    balance?: IntFilter<"Player"> | number
    category?: EnumCategoryFilter<"Player"> | $Enums.Category
    userId?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    teamId?: StringNullableFilter<"Player"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    playerStats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    playerTeamStats?: PlayerTeamStatsListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    playerStats?: PlayerStatsOrderByWithRelationInput
    wallet?: WalletOrderByWithRelationInput
    playerTeamStats?: PlayerTeamStatsOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    name?: StringFilter<"Player"> | string
    balance?: IntFilter<"Player"> | number
    category?: EnumCategoryFilter<"Player"> | $Enums.Category
    createdAt?: DateTimeFilter<"Player"> | Date | string
    teamId?: StringNullableFilter<"Player"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    playerStats?: XOR<PlayerStatsNullableScalarRelationFilter, PlayerStatsWhereInput> | null
    wallet?: XOR<WalletNullableScalarRelationFilter, WalletWhereInput> | null
    playerTeamStats?: PlayerTeamStatsListRelationFilter
  }, "id" | "userId">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrderInput | SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Player"> | string
    name?: StringWithAggregatesFilter<"Player"> | string
    balance?: IntWithAggregatesFilter<"Player"> | number
    category?: EnumCategoryWithAggregatesFilter<"Player"> | $Enums.Category
    userId?: StringWithAggregatesFilter<"Player"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Player"> | Date | string
    teamId?: StringNullableWithAggregatesFilter<"Player"> | string | null
  }

  export type PlayerStatsWhereInput = {
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    id?: StringFilter<"PlayerStats"> | string
    playerId?: StringFilter<"PlayerStats"> | string
    matches?: IntFilter<"PlayerStats"> | number
    wins?: IntFilter<"PlayerStats"> | number
    deaths?: IntFilter<"PlayerStats"> | number
    kills?: IntFilter<"PlayerStats"> | number
    kd?: FloatFilter<"PlayerStats"> | number
    createdAt?: DateTimeFilter<"PlayerStats"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }

  export type PlayerStatsOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
    createdAt?: SortOrder
    player?: PlayerOrderByWithRelationInput
  }

  export type PlayerStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    AND?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    OR?: PlayerStatsWhereInput[]
    NOT?: PlayerStatsWhereInput | PlayerStatsWhereInput[]
    matches?: IntFilter<"PlayerStats"> | number
    wins?: IntFilter<"PlayerStats"> | number
    deaths?: IntFilter<"PlayerStats"> | number
    kills?: IntFilter<"PlayerStats"> | number
    kd?: FloatFilter<"PlayerStats"> | number
    createdAt?: DateTimeFilter<"PlayerStats"> | Date | string
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
  }, "id" | "playerId">

  export type PlayerStatsOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
    createdAt?: SortOrder
    _count?: PlayerStatsCountOrderByAggregateInput
    _avg?: PlayerStatsAvgOrderByAggregateInput
    _max?: PlayerStatsMaxOrderByAggregateInput
    _min?: PlayerStatsMinOrderByAggregateInput
    _sum?: PlayerStatsSumOrderByAggregateInput
  }

  export type PlayerStatsScalarWhereWithAggregatesInput = {
    AND?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    OR?: PlayerStatsScalarWhereWithAggregatesInput[]
    NOT?: PlayerStatsScalarWhereWithAggregatesInput | PlayerStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerStats"> | string
    playerId?: StringWithAggregatesFilter<"PlayerStats"> | string
    matches?: IntWithAggregatesFilter<"PlayerStats"> | number
    wins?: IntWithAggregatesFilter<"PlayerStats"> | number
    deaths?: IntWithAggregatesFilter<"PlayerStats"> | number
    kills?: IntWithAggregatesFilter<"PlayerStats"> | number
    kd?: FloatWithAggregatesFilter<"PlayerStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlayerStats"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    teamNumber?: IntFilter<"Team"> | number
    fixturesId?: StringNullableFilter<"Team"> | string | null
    teamStatsId?: StringNullableFilter<"Team"> | string | null
    players?: PlayerListRelationFilter
    teamStats?: XOR<TeamStatsNullableScalarRelationFilter, TeamStatsWhereInput> | null
    playerTeamStats?: PlayerTeamStatsListRelationFilter
    teamRound?: TeamRoundListRelationFilter
    fixtures?: XOR<FixtureNullableScalarRelationFilter, FixtureWhereInput> | null
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    teamNumber?: SortOrder
    fixturesId?: SortOrderInput | SortOrder
    teamStatsId?: SortOrderInput | SortOrder
    players?: PlayerOrderByRelationAggregateInput
    teamStats?: TeamStatsOrderByWithRelationInput
    playerTeamStats?: PlayerTeamStatsOrderByRelationAggregateInput
    teamRound?: TeamRoundOrderByRelationAggregateInput
    fixtures?: FixtureOrderByWithRelationInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamStatsId?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    teamNumber?: IntFilter<"Team"> | number
    fixturesId?: StringNullableFilter<"Team"> | string | null
    players?: PlayerListRelationFilter
    teamStats?: XOR<TeamStatsNullableScalarRelationFilter, TeamStatsWhereInput> | null
    playerTeamStats?: PlayerTeamStatsListRelationFilter
    teamRound?: TeamRoundListRelationFilter
    fixtures?: XOR<FixtureNullableScalarRelationFilter, FixtureWhereInput> | null
  }, "id" | "teamStatsId">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    teamNumber?: SortOrder
    fixturesId?: SortOrderInput | SortOrder
    teamStatsId?: SortOrderInput | SortOrder
    _count?: TeamCountOrderByAggregateInput
    _avg?: TeamAvgOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
    _sum?: TeamSumOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    teamNumber?: IntWithAggregatesFilter<"Team"> | number
    fixturesId?: StringNullableWithAggregatesFilter<"Team"> | string | null
    teamStatsId?: StringNullableWithAggregatesFilter<"Team"> | string | null
  }

  export type TeamStatsWhereInput = {
    AND?: TeamStatsWhereInput | TeamStatsWhereInput[]
    OR?: TeamStatsWhereInput[]
    NOT?: TeamStatsWhereInput | TeamStatsWhereInput[]
    id?: StringFilter<"TeamStats"> | string
    teamId?: StringNullableFilter<"TeamStats"> | string | null
    kills?: IntFilter<"TeamStats"> | number
    deaths?: IntFilter<"TeamStats"> | number
    kd?: FloatFilter<"TeamStats"> | number
    position?: IntFilter<"TeamStats"> | number
    total?: IntFilter<"TeamStats"> | number
    createdAt?: DateTimeFilter<"TeamStats"> | Date | string
    tournamentId?: StringNullableFilter<"TeamStats"> | string | null
    roundId?: StringNullableFilter<"TeamStats"> | string | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    playerTeamStats?: PlayerTeamStatsListRelationFilter
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    round?: XOR<RoundNullableScalarRelationFilter, RoundWhereInput> | null
  }

  export type TeamStatsOrderByWithRelationInput = {
    id?: SortOrder
    teamId?: SortOrderInput | SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrderInput | SortOrder
    roundId?: SortOrderInput | SortOrder
    team?: TeamOrderByWithRelationInput
    playerTeamStats?: PlayerTeamStatsOrderByRelationAggregateInput
    tournament?: TournamentOrderByWithRelationInput
    round?: RoundOrderByWithRelationInput
  }

  export type TeamStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    teamId_tournamentId?: TeamStatsTeamIdTournamentIdCompoundUniqueInput
    AND?: TeamStatsWhereInput | TeamStatsWhereInput[]
    OR?: TeamStatsWhereInput[]
    NOT?: TeamStatsWhereInput | TeamStatsWhereInput[]
    teamId?: StringNullableFilter<"TeamStats"> | string | null
    kills?: IntFilter<"TeamStats"> | number
    deaths?: IntFilter<"TeamStats"> | number
    kd?: FloatFilter<"TeamStats"> | number
    position?: IntFilter<"TeamStats"> | number
    total?: IntFilter<"TeamStats"> | number
    createdAt?: DateTimeFilter<"TeamStats"> | Date | string
    tournamentId?: StringNullableFilter<"TeamStats"> | string | null
    roundId?: StringNullableFilter<"TeamStats"> | string | null
    team?: XOR<TeamNullableScalarRelationFilter, TeamWhereInput> | null
    playerTeamStats?: PlayerTeamStatsListRelationFilter
    tournament?: XOR<TournamentNullableScalarRelationFilter, TournamentWhereInput> | null
    round?: XOR<RoundNullableScalarRelationFilter, RoundWhereInput> | null
  }, "id" | "teamId_tournamentId">

  export type TeamStatsOrderByWithAggregationInput = {
    id?: SortOrder
    teamId?: SortOrderInput | SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrderInput | SortOrder
    roundId?: SortOrderInput | SortOrder
    _count?: TeamStatsCountOrderByAggregateInput
    _avg?: TeamStatsAvgOrderByAggregateInput
    _max?: TeamStatsMaxOrderByAggregateInput
    _min?: TeamStatsMinOrderByAggregateInput
    _sum?: TeamStatsSumOrderByAggregateInput
  }

  export type TeamStatsScalarWhereWithAggregatesInput = {
    AND?: TeamStatsScalarWhereWithAggregatesInput | TeamStatsScalarWhereWithAggregatesInput[]
    OR?: TeamStatsScalarWhereWithAggregatesInput[]
    NOT?: TeamStatsScalarWhereWithAggregatesInput | TeamStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamStats"> | string
    teamId?: StringNullableWithAggregatesFilter<"TeamStats"> | string | null
    kills?: IntWithAggregatesFilter<"TeamStats"> | number
    deaths?: IntWithAggregatesFilter<"TeamStats"> | number
    kd?: FloatWithAggregatesFilter<"TeamStats"> | number
    position?: IntWithAggregatesFilter<"TeamStats"> | number
    total?: IntWithAggregatesFilter<"TeamStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"TeamStats"> | Date | string
    tournamentId?: StringNullableWithAggregatesFilter<"TeamStats"> | string | null
    roundId?: StringNullableWithAggregatesFilter<"TeamStats"> | string | null
  }

  export type KDStatsWhereInput = {
    AND?: KDStatsWhereInput | KDStatsWhereInput[]
    OR?: KDStatsWhereInput[]
    NOT?: KDStatsWhereInput | KDStatsWhereInput[]
    id?: StringFilter<"KDStats"> | string
    playerId?: StringFilter<"KDStats"> | string
    kd?: FloatFilter<"KDStats"> | number
  }

  export type KDStatsOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    kd?: SortOrder
  }

  export type KDStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId?: string
    AND?: KDStatsWhereInput | KDStatsWhereInput[]
    OR?: KDStatsWhereInput[]
    NOT?: KDStatsWhereInput | KDStatsWhereInput[]
    kd?: FloatFilter<"KDStats"> | number
  }, "id" | "playerId">

  export type KDStatsOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    kd?: SortOrder
    _count?: KDStatsCountOrderByAggregateInput
    _avg?: KDStatsAvgOrderByAggregateInput
    _max?: KDStatsMaxOrderByAggregateInput
    _min?: KDStatsMinOrderByAggregateInput
    _sum?: KDStatsSumOrderByAggregateInput
  }

  export type KDStatsScalarWhereWithAggregatesInput = {
    AND?: KDStatsScalarWhereWithAggregatesInput | KDStatsScalarWhereWithAggregatesInput[]
    OR?: KDStatsScalarWhereWithAggregatesInput[]
    NOT?: KDStatsScalarWhereWithAggregatesInput | KDStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"KDStats"> | string
    playerId?: StringWithAggregatesFilter<"KDStats"> | string
    kd?: FloatWithAggregatesFilter<"KDStats"> | number
  }

  export type PlayerTeamStatsWhereInput = {
    AND?: PlayerTeamStatsWhereInput | PlayerTeamStatsWhereInput[]
    OR?: PlayerTeamStatsWhereInput[]
    NOT?: PlayerTeamStatsWhereInput | PlayerTeamStatsWhereInput[]
    id?: StringFilter<"PlayerTeamStats"> | string
    playerId?: StringFilter<"PlayerTeamStats"> | string
    teamId?: StringFilter<"PlayerTeamStats"> | string
    kills?: IntFilter<"PlayerTeamStats"> | number
    deaths?: IntFilter<"PlayerTeamStats"> | number
    kd?: FloatFilter<"PlayerTeamStats"> | number
    position?: IntFilter<"PlayerTeamStats"> | number
    total?: IntFilter<"PlayerTeamStats"> | number
    createdAt?: DateTimeFilter<"PlayerTeamStats"> | Date | string
    teamStatsId?: StringNullableFilter<"PlayerTeamStats"> | string | null
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    teamStats?: XOR<TeamStatsNullableScalarRelationFilter, TeamStatsWhereInput> | null
  }

  export type PlayerTeamStatsOrderByWithRelationInput = {
    id?: SortOrder
    playerId?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    teamStatsId?: SortOrderInput | SortOrder
    player?: PlayerOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
    teamStats?: TeamStatsOrderByWithRelationInput
  }

  export type PlayerTeamStatsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playerId_teamId?: PlayerTeamStatsPlayerIdTeamIdCompoundUniqueInput
    AND?: PlayerTeamStatsWhereInput | PlayerTeamStatsWhereInput[]
    OR?: PlayerTeamStatsWhereInput[]
    NOT?: PlayerTeamStatsWhereInput | PlayerTeamStatsWhereInput[]
    playerId?: StringFilter<"PlayerTeamStats"> | string
    teamId?: StringFilter<"PlayerTeamStats"> | string
    kills?: IntFilter<"PlayerTeamStats"> | number
    deaths?: IntFilter<"PlayerTeamStats"> | number
    kd?: FloatFilter<"PlayerTeamStats"> | number
    position?: IntFilter<"PlayerTeamStats"> | number
    total?: IntFilter<"PlayerTeamStats"> | number
    createdAt?: DateTimeFilter<"PlayerTeamStats"> | Date | string
    teamStatsId?: StringNullableFilter<"PlayerTeamStats"> | string | null
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    teamStats?: XOR<TeamStatsNullableScalarRelationFilter, TeamStatsWhereInput> | null
  }, "id" | "playerId_teamId">

  export type PlayerTeamStatsOrderByWithAggregationInput = {
    id?: SortOrder
    playerId?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    teamStatsId?: SortOrderInput | SortOrder
    _count?: PlayerTeamStatsCountOrderByAggregateInput
    _avg?: PlayerTeamStatsAvgOrderByAggregateInput
    _max?: PlayerTeamStatsMaxOrderByAggregateInput
    _min?: PlayerTeamStatsMinOrderByAggregateInput
    _sum?: PlayerTeamStatsSumOrderByAggregateInput
  }

  export type PlayerTeamStatsScalarWhereWithAggregatesInput = {
    AND?: PlayerTeamStatsScalarWhereWithAggregatesInput | PlayerTeamStatsScalarWhereWithAggregatesInput[]
    OR?: PlayerTeamStatsScalarWhereWithAggregatesInput[]
    NOT?: PlayerTeamStatsScalarWhereWithAggregatesInput | PlayerTeamStatsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerTeamStats"> | string
    playerId?: StringWithAggregatesFilter<"PlayerTeamStats"> | string
    teamId?: StringWithAggregatesFilter<"PlayerTeamStats"> | string
    kills?: IntWithAggregatesFilter<"PlayerTeamStats"> | number
    deaths?: IntWithAggregatesFilter<"PlayerTeamStats"> | number
    kd?: FloatWithAggregatesFilter<"PlayerTeamStats"> | number
    position?: IntWithAggregatesFilter<"PlayerTeamStats"> | number
    total?: IntWithAggregatesFilter<"PlayerTeamStats"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PlayerTeamStats"> | Date | string
    teamStatsId?: StringNullableWithAggregatesFilter<"PlayerTeamStats"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    Player?: PlayerCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    Player?: PlayerUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    Player?: PlayerUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    Player?: PlayerUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenCreateInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    revoked?: boolean
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
    user: UserCreateNestedOneWithoutTokensInput
  }

  export type TokenUncheckedCreateInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    revoked?: boolean
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type TokenUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTokensNestedInput
  }

  export type TokenUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenCreateManyInput = {
    id?: string
    userId: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    revoked?: boolean
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type TokenUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OtpCreateInput = {
    id?: string
    otp: string
    isOtpUsed?: boolean
    otpCreatedAt?: Date | string
    otpExpiresAt: Date | string
    otpVerifiedAt?: Date | string | null
    user: UserCreateNestedOneWithoutOtpsInput
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    userId: string
    otp: string
    isOtpUsed?: boolean
    otpCreatedAt?: Date | string
    otpExpiresAt: Date | string
    otpVerifiedAt?: Date | string | null
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutOtpsNestedInput
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpCreateManyInput = {
    id?: string
    userId: string
    otp: string
    isOtpUsed?: boolean
    otpCreatedAt?: Date | string
    otpExpiresAt: Date | string
    otpVerifiedAt?: Date | string | null
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TournamentCreateInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundCreateNestedManyWithoutTournamentInput
    round?: RoundCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundUncheckedCreateNestedManyWithoutTournamentInput
    round?: RoundUncheckedCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureUncheckedCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUpdateManyWithoutTournamentNestedInput
    round?: RoundUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUncheckedUpdateManyWithoutTournamentNestedInput
    round?: RoundUncheckedUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUncheckedUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUncheckedUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentCreateManyInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
  }

  export type TournamentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TournamentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureCreateInput = {
    id?: string
    createdAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixtureInput
    teams?: TeamCreateNestedManyWithoutFixturesInput
  }

  export type FixtureUncheckedCreateInput = {
    id?: string
    tournamentId: string
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutFixturesInput
  }

  export type FixtureUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixtureNestedInput
    teams?: TeamUpdateManyWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutFixturesNestedInput
  }

  export type FixtureCreateManyInput = {
    id?: string
    tournamentId: string
    createdAt?: Date | string
  }

  export type FixtureUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FixtureUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundCreateInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutRoundInput
    teams?: TeamRoundCreateNestedManyWithoutRoundInput
    teamStats?: TeamStatsCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournamentId: string
    teams?: TeamRoundUncheckedCreateNestedManyWithoutRoundInput
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutRoundNestedInput
    teams?: TeamRoundUpdateManyWithoutRoundNestedInput
    teamStats?: TeamStatsUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    teams?: TeamRoundUncheckedUpdateManyWithoutRoundNestedInput
    teamStats?: TeamStatsUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundCreateManyInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournamentId: string
  }

  export type RoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamRoundCreateInput = {
    id?: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutTeamRoundInput
    round: RoundCreateNestedOneWithoutTeamsInput
    tournament?: TournamentCreateNestedOneWithoutTeamRoundsInput
  }

  export type TeamRoundUncheckedCreateInput = {
    id?: string
    teamId: string
    roundId: string
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type TeamRoundUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutTeamRoundNestedInput
    round?: RoundUpdateOneRequiredWithoutTeamsNestedInput
    tournament?: TournamentUpdateOneWithoutTeamRoundsNestedInput
  }

  export type TeamRoundUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamRoundCreateManyInput = {
    id?: string
    teamId: string
    roundId: string
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type TeamRoundUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRoundUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WalletCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    player?: PlayerCreateNestedOneWithoutWalletInput
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    playerId?: string | null
    userId: string
  }

  export type WalletUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneWithoutWalletNestedInput
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type WalletCreateManyInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    playerId?: string | null
    userId: string
  }

  export type WalletUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerCreateInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    wallet?: WalletCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
    teamId?: string | null
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    wallet?: WalletUncheckedCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
    teamId?: string | null
  }

  export type PlayerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerStatsCreateInput = {
    id?: string
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutPlayerStatsInput
  }

  export type PlayerStatsUncheckedCreateInput = {
    id?: string
    playerId: string
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt?: Date | string
  }

  export type PlayerStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutPlayerStatsNestedInput
  }

  export type PlayerStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsCreateManyInput = {
    id?: string
    playerId: string
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt?: Date | string
  }

  export type PlayerStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundCreateNestedManyWithoutTeamInput
    fixtures?: FixtureCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    fixturesId?: string | null
    teamStatsId?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUpdateManyWithoutTeamNestedInput
    fixtures?: FixtureUpdateOneWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    fixturesId?: NullableStringFieldUpdateOperationsInput | string | null
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    fixturesId?: string | null
    teamStatsId?: string | null
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    fixturesId?: NullableStringFieldUpdateOperationsInput | string | null
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamStatsCreateInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutTeamStatsInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamStatsInput
    tournament?: TournamentCreateNestedOneWithoutTeamStatsInput
    round?: RoundCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsUncheckedCreateInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    tournamentId?: string | null
    roundId?: string | null
    team?: TeamUncheckedCreateNestedOneWithoutTeamStatsInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamStatsInput
  }

  export type TeamStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutTeamStatsNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamStatsNestedInput
    tournament?: TournamentUpdateOneWithoutTeamStatsNestedInput
    round?: RoundUpdateOneWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUncheckedUpdateOneWithoutTeamStatsNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsNestedInput
  }

  export type TeamStatsCreateManyInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    tournamentId?: string | null
    roundId?: string | null
  }

  export type TeamStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KDStatsCreateInput = {
    id?: string
    playerId: string
    kd: number
  }

  export type KDStatsUncheckedCreateInput = {
    id?: string
    playerId: string
    kd: number
  }

  export type KDStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    kd?: FloatFieldUpdateOperationsInput | number
  }

  export type KDStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    kd?: FloatFieldUpdateOperationsInput | number
  }

  export type KDStatsCreateManyInput = {
    id?: string
    playerId: string
    kd: number
  }

  export type KDStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    kd?: FloatFieldUpdateOperationsInput | number
  }

  export type KDStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    kd?: FloatFieldUpdateOperationsInput | number
  }

  export type PlayerTeamStatsCreateInput = {
    id?: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutPlayerTeamStatsInput
    team: TeamCreateNestedOneWithoutPlayerTeamStatsInput
    teamStats?: TeamStatsCreateNestedOneWithoutPlayerTeamStatsInput
  }

  export type PlayerTeamStatsUncheckedCreateInput = {
    id?: string
    playerId: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    teamStatsId?: string | null
  }

  export type PlayerTeamStatsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutPlayerTeamStatsNestedInput
    team?: TeamUpdateOneRequiredWithoutPlayerTeamStatsNestedInput
    teamStats?: TeamStatsUpdateOneWithoutPlayerTeamStatsNestedInput
  }

  export type PlayerTeamStatsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTeamStatsCreateManyInput = {
    id?: string
    playerId: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    teamStatsId?: string | null
  }

  export type PlayerTeamStatsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTeamStatsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type OtpListRelationFilter = {
    every?: OtpWhereInput
    some?: OtpWhereInput
    none?: OtpWhereInput
  }

  export type TokenListRelationFilter = {
    every?: TokenWhereInput
    some?: TokenWhereInput
    none?: TokenWhereInput
  }

  export type PlayerNullableScalarRelationFilter = {
    is?: PlayerWhereInput | null
    isNot?: PlayerWhereInput | null
  }

  export type WalletNullableScalarRelationFilter = {
    is?: WalletWhereInput | null
    isNot?: WalletWhereInput | null
  }

  export type OtpOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isInternal?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isInternal?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    name?: SortOrder
    role?: SortOrder
    isInternal?: SortOrder
    isVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TokenCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revoked?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type TokenMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revoked?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type TokenMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    token?: SortOrder
    expiresAt?: SortOrder
    createdAt?: SortOrder
    revoked?: SortOrder
    revokedAt?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    isOtpUsed?: SortOrder
    otpCreatedAt?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    isOtpUsed?: SortOrder
    otpCreatedAt?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    otp?: SortOrder
    isOtpUsed?: SortOrder
    otpCreatedAt?: SortOrder
    otpExpiresAt?: SortOrder
    otpVerifiedAt?: SortOrder
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

  export type TeamRoundListRelationFilter = {
    every?: TeamRoundWhereInput
    some?: TeamRoundWhereInput
    none?: TeamRoundWhereInput
  }

  export type RoundListRelationFilter = {
    every?: RoundWhereInput
    some?: RoundWhereInput
    none?: RoundWhereInput
  }

  export type TeamStatsListRelationFilter = {
    every?: TeamStatsWhereInput
    some?: TeamStatsWhereInput
    none?: TeamStatsWhereInput
  }

  export type FixtureNullableScalarRelationFilter = {
    is?: FixtureWhereInput | null
    isNot?: FixtureWhereInput | null
  }

  export type TeamRoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoundOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TournamentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentAvgOrderByAggregateInput = {
    fee?: SortOrder
  }

  export type TournamentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    fee?: SortOrder
    createdAt?: SortOrder
  }

  export type TournamentSumOrderByAggregateInput = {
    fee?: SortOrder
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

  export type TournamentScalarRelationFilter = {
    is?: TournamentWhereInput
    isNot?: TournamentWhereInput
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FixtureCountOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    createdAt?: SortOrder
  }

  export type FixtureMaxOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    createdAt?: SortOrder
  }

  export type FixtureMinOrderByAggregateInput = {
    id?: SortOrder
    tournamentId?: SortOrder
    createdAt?: SortOrder
  }

  export type RoundCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
  }

  export type RoundAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type RoundMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
  }

  export type RoundMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
  }

  export type RoundSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type RoundScalarRelationFilter = {
    is?: RoundWhereInput
    isNot?: RoundWhereInput
  }

  export type TournamentNullableScalarRelationFilter = {
    is?: TournamentWhereInput | null
    isNot?: TournamentWhereInput | null
  }

  export type TeamRoundTeamIdRoundIdTournamentIdCompoundUniqueInput = {
    teamId: string
    roundId: string
    tournamentId: string
  }

  export type TeamRoundCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    roundId?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
  }

  export type TeamRoundMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    roundId?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
  }

  export type TeamRoundMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    roundId?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
  }

  export type WalletCountOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    userId?: SortOrder
  }

  export type WalletAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type WalletMaxOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    userId?: SortOrder
  }

  export type WalletMinOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    createdAt?: SortOrder
    playerId?: SortOrder
    userId?: SortOrder
  }

  export type WalletSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type TeamNullableScalarRelationFilter = {
    is?: TeamWhereInput | null
    isNot?: TeamWhereInput | null
  }

  export type PlayerStatsNullableScalarRelationFilter = {
    is?: PlayerStatsWhereInput | null
    isNot?: PlayerStatsWhereInput | null
  }

  export type PlayerTeamStatsListRelationFilter = {
    every?: PlayerTeamStatsWhereInput
    some?: PlayerTeamStatsWhereInput
    none?: PlayerTeamStatsWhereInput
  }

  export type PlayerTeamStatsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    teamId?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    balance?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
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

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type PlayerStatsCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerStatsAvgOrderByAggregateInput = {
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
  }

  export type PlayerStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerStatsMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
    createdAt?: SortOrder
  }

  export type PlayerStatsSumOrderByAggregateInput = {
    matches?: SortOrder
    wins?: SortOrder
    deaths?: SortOrder
    kills?: SortOrder
    kd?: SortOrder
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

  export type PlayerListRelationFilter = {
    every?: PlayerWhereInput
    some?: PlayerWhereInput
    none?: PlayerWhereInput
  }

  export type TeamStatsNullableScalarRelationFilter = {
    is?: TeamStatsWhereInput | null
    isNot?: TeamStatsWhereInput | null
  }

  export type PlayerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    teamNumber?: SortOrder
    fixturesId?: SortOrder
    teamStatsId?: SortOrder
  }

  export type TeamAvgOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    teamNumber?: SortOrder
    fixturesId?: SortOrder
    teamStatsId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    teamNumber?: SortOrder
    fixturesId?: SortOrder
    teamStatsId?: SortOrder
  }

  export type TeamSumOrderByAggregateInput = {
    teamNumber?: SortOrder
  }

  export type RoundNullableScalarRelationFilter = {
    is?: RoundWhereInput | null
    isNot?: RoundWhereInput | null
  }

  export type TeamStatsTeamIdTournamentIdCompoundUniqueInput = {
    teamId: string
    tournamentId: string
  }

  export type TeamStatsCountOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
    roundId?: SortOrder
  }

  export type TeamStatsAvgOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
  }

  export type TeamStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
    roundId?: SortOrder
  }

  export type TeamStatsMinOrderByAggregateInput = {
    id?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    tournamentId?: SortOrder
    roundId?: SortOrder
  }

  export type TeamStatsSumOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
  }

  export type KDStatsCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    kd?: SortOrder
  }

  export type KDStatsAvgOrderByAggregateInput = {
    kd?: SortOrder
  }

  export type KDStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    kd?: SortOrder
  }

  export type KDStatsMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    kd?: SortOrder
  }

  export type KDStatsSumOrderByAggregateInput = {
    kd?: SortOrder
  }

  export type PlayerTeamStatsPlayerIdTeamIdCompoundUniqueInput = {
    playerId: string
    teamId: string
  }

  export type PlayerTeamStatsCountOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    teamStatsId?: SortOrder
  }

  export type PlayerTeamStatsAvgOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
  }

  export type PlayerTeamStatsMaxOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    teamStatsId?: SortOrder
  }

  export type PlayerTeamStatsMinOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    teamId?: SortOrder
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
    createdAt?: SortOrder
    teamStatsId?: SortOrder
  }

  export type PlayerTeamStatsSumOrderByAggregateInput = {
    kills?: SortOrder
    deaths?: SortOrder
    kd?: SortOrder
    position?: SortOrder
    total?: SortOrder
  }

  export type OtpCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
  }

  export type TokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PlayerCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    connect?: PlayerWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type OtpUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
  }

  export type TokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
  }

  export type PlayerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    connect?: PlayerWhereUniqueInput
  }

  export type WalletUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    connect?: WalletWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OtpUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    upsert?: OtpUpsertWithWhereUniqueWithoutUserInput | OtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    update?: OtpUpdateWithWhereUniqueWithoutUserInput | OtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpUpdateManyWithWhereWithoutUserInput | OtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[]
  }

  export type TokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PlayerUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    upsert?: PlayerUpsertWithoutUserInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutUserInput, PlayerUpdateWithoutUserInput>, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type OtpUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput> | OtpCreateWithoutUserInput[] | OtpUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OtpCreateOrConnectWithoutUserInput | OtpCreateOrConnectWithoutUserInput[]
    upsert?: OtpUpsertWithWhereUniqueWithoutUserInput | OtpUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OtpCreateManyUserInputEnvelope
    set?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    disconnect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    delete?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    connect?: OtpWhereUniqueInput | OtpWhereUniqueInput[]
    update?: OtpUpdateWithWhereUniqueWithoutUserInput | OtpUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OtpUpdateManyWithWhereWithoutUserInput | OtpUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OtpScalarWhereInput | OtpScalarWhereInput[]
  }

  export type TokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput> | TokenCreateWithoutUserInput[] | TokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TokenCreateOrConnectWithoutUserInput | TokenCreateOrConnectWithoutUserInput[]
    upsert?: TokenUpsertWithWhereUniqueWithoutUserInput | TokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TokenCreateManyUserInputEnvelope
    set?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    disconnect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    delete?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    connect?: TokenWhereUniqueInput | TokenWhereUniqueInput[]
    update?: TokenUpdateWithWhereUniqueWithoutUserInput | TokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TokenUpdateManyWithWhereWithoutUserInput | TokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TokenScalarWhereInput | TokenScalarWhereInput[]
  }

  export type PlayerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutUserInput
    upsert?: PlayerUpsertWithoutUserInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutUserInput, PlayerUpdateWithoutUserInput>, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type WalletUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    connectOrCreate?: WalletCreateOrConnectWithoutUserInput
    upsert?: WalletUpsertWithoutUserInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutUserInput, WalletUpdateWithoutUserInput>, WalletUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTokensInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutTokensNestedInput = {
    create?: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTokensInput
    upsert?: UserUpsertWithoutTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTokensInput, UserUpdateWithoutTokensInput>, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserCreateNestedOneWithoutOtpsInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOtpsNestedInput = {
    create?: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOtpsInput
    upsert?: UserUpsertWithoutOtpsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOtpsInput, UserUpdateWithoutOtpsInput>, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type TeamRoundCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TeamRoundCreateWithoutTournamentInput, TeamRoundUncheckedCreateWithoutTournamentInput> | TeamRoundCreateWithoutTournamentInput[] | TeamRoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTournamentInput | TeamRoundCreateOrConnectWithoutTournamentInput[]
    createMany?: TeamRoundCreateManyTournamentInputEnvelope
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
  }

  export type RoundCreateNestedManyWithoutTournamentInput = {
    create?: XOR<RoundCreateWithoutTournamentInput, RoundUncheckedCreateWithoutTournamentInput> | RoundCreateWithoutTournamentInput[] | RoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTournamentInput | RoundCreateOrConnectWithoutTournamentInput[]
    createMany?: RoundCreateManyTournamentInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type TeamStatsCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TeamStatsCreateWithoutTournamentInput, TeamStatsUncheckedCreateWithoutTournamentInput> | TeamStatsCreateWithoutTournamentInput[] | TeamStatsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTournamentInput | TeamStatsCreateOrConnectWithoutTournamentInput[]
    createMany?: TeamStatsCreateManyTournamentInputEnvelope
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
  }

  export type FixtureCreateNestedOneWithoutTournamentInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput
    connect?: FixtureWhereUniqueInput
  }

  export type TeamRoundUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TeamRoundCreateWithoutTournamentInput, TeamRoundUncheckedCreateWithoutTournamentInput> | TeamRoundCreateWithoutTournamentInput[] | TeamRoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTournamentInput | TeamRoundCreateOrConnectWithoutTournamentInput[]
    createMany?: TeamRoundCreateManyTournamentInputEnvelope
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
  }

  export type RoundUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<RoundCreateWithoutTournamentInput, RoundUncheckedCreateWithoutTournamentInput> | RoundCreateWithoutTournamentInput[] | RoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTournamentInput | RoundCreateOrConnectWithoutTournamentInput[]
    createMany?: RoundCreateManyTournamentInputEnvelope
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
  }

  export type TeamStatsUncheckedCreateNestedManyWithoutTournamentInput = {
    create?: XOR<TeamStatsCreateWithoutTournamentInput, TeamStatsUncheckedCreateWithoutTournamentInput> | TeamStatsCreateWithoutTournamentInput[] | TeamStatsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTournamentInput | TeamStatsCreateOrConnectWithoutTournamentInput[]
    createMany?: TeamStatsCreateManyTournamentInputEnvelope
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
  }

  export type FixtureUncheckedCreateNestedOneWithoutTournamentInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput
    connect?: FixtureWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TeamRoundUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TeamRoundCreateWithoutTournamentInput, TeamRoundUncheckedCreateWithoutTournamentInput> | TeamRoundCreateWithoutTournamentInput[] | TeamRoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTournamentInput | TeamRoundCreateOrConnectWithoutTournamentInput[]
    upsert?: TeamRoundUpsertWithWhereUniqueWithoutTournamentInput | TeamRoundUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TeamRoundCreateManyTournamentInputEnvelope
    set?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    disconnect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    delete?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    update?: TeamRoundUpdateWithWhereUniqueWithoutTournamentInput | TeamRoundUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TeamRoundUpdateManyWithWhereWithoutTournamentInput | TeamRoundUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
  }

  export type RoundUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<RoundCreateWithoutTournamentInput, RoundUncheckedCreateWithoutTournamentInput> | RoundCreateWithoutTournamentInput[] | RoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTournamentInput | RoundCreateOrConnectWithoutTournamentInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutTournamentInput | RoundUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: RoundCreateManyTournamentInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutTournamentInput | RoundUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutTournamentInput | RoundUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeamStatsUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TeamStatsCreateWithoutTournamentInput, TeamStatsUncheckedCreateWithoutTournamentInput> | TeamStatsCreateWithoutTournamentInput[] | TeamStatsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTournamentInput | TeamStatsCreateOrConnectWithoutTournamentInput[]
    upsert?: TeamStatsUpsertWithWhereUniqueWithoutTournamentInput | TeamStatsUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TeamStatsCreateManyTournamentInputEnvelope
    set?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    disconnect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    delete?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    update?: TeamStatsUpdateWithWhereUniqueWithoutTournamentInput | TeamStatsUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TeamStatsUpdateManyWithWhereWithoutTournamentInput | TeamStatsUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TeamStatsScalarWhereInput | TeamStatsScalarWhereInput[]
  }

  export type FixtureUpdateOneWithoutTournamentNestedInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput
    upsert?: FixtureUpsertWithoutTournamentInput
    disconnect?: FixtureWhereInput | boolean
    delete?: FixtureWhereInput | boolean
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutTournamentInput, FixtureUpdateWithoutTournamentInput>, FixtureUncheckedUpdateWithoutTournamentInput>
  }

  export type TeamRoundUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TeamRoundCreateWithoutTournamentInput, TeamRoundUncheckedCreateWithoutTournamentInput> | TeamRoundCreateWithoutTournamentInput[] | TeamRoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTournamentInput | TeamRoundCreateOrConnectWithoutTournamentInput[]
    upsert?: TeamRoundUpsertWithWhereUniqueWithoutTournamentInput | TeamRoundUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TeamRoundCreateManyTournamentInputEnvelope
    set?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    disconnect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    delete?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    update?: TeamRoundUpdateWithWhereUniqueWithoutTournamentInput | TeamRoundUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TeamRoundUpdateManyWithWhereWithoutTournamentInput | TeamRoundUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
  }

  export type RoundUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<RoundCreateWithoutTournamentInput, RoundUncheckedCreateWithoutTournamentInput> | RoundCreateWithoutTournamentInput[] | RoundUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: RoundCreateOrConnectWithoutTournamentInput | RoundCreateOrConnectWithoutTournamentInput[]
    upsert?: RoundUpsertWithWhereUniqueWithoutTournamentInput | RoundUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: RoundCreateManyTournamentInputEnvelope
    set?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    disconnect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    delete?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    connect?: RoundWhereUniqueInput | RoundWhereUniqueInput[]
    update?: RoundUpdateWithWhereUniqueWithoutTournamentInput | RoundUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: RoundUpdateManyWithWhereWithoutTournamentInput | RoundUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: RoundScalarWhereInput | RoundScalarWhereInput[]
  }

  export type TeamStatsUncheckedUpdateManyWithoutTournamentNestedInput = {
    create?: XOR<TeamStatsCreateWithoutTournamentInput, TeamStatsUncheckedCreateWithoutTournamentInput> | TeamStatsCreateWithoutTournamentInput[] | TeamStatsUncheckedCreateWithoutTournamentInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTournamentInput | TeamStatsCreateOrConnectWithoutTournamentInput[]
    upsert?: TeamStatsUpsertWithWhereUniqueWithoutTournamentInput | TeamStatsUpsertWithWhereUniqueWithoutTournamentInput[]
    createMany?: TeamStatsCreateManyTournamentInputEnvelope
    set?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    disconnect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    delete?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    update?: TeamStatsUpdateWithWhereUniqueWithoutTournamentInput | TeamStatsUpdateWithWhereUniqueWithoutTournamentInput[]
    updateMany?: TeamStatsUpdateManyWithWhereWithoutTournamentInput | TeamStatsUpdateManyWithWhereWithoutTournamentInput[]
    deleteMany?: TeamStatsScalarWhereInput | TeamStatsScalarWhereInput[]
  }

  export type FixtureUncheckedUpdateOneWithoutTournamentNestedInput = {
    create?: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutTournamentInput
    upsert?: FixtureUpsertWithoutTournamentInput
    disconnect?: FixtureWhereInput | boolean
    delete?: FixtureWhereInput | boolean
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutTournamentInput, FixtureUpdateWithoutTournamentInput>, FixtureUncheckedUpdateWithoutTournamentInput>
  }

  export type TournamentCreateNestedOneWithoutFixtureInput = {
    create?: XOR<TournamentCreateWithoutFixtureInput, TournamentUncheckedCreateWithoutFixtureInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutFixtureInput
    connect?: TournamentWhereUniqueInput
  }

  export type TeamCreateNestedManyWithoutFixturesInput = {
    create?: XOR<TeamCreateWithoutFixturesInput, TeamUncheckedCreateWithoutFixturesInput> | TeamCreateWithoutFixturesInput[] | TeamUncheckedCreateWithoutFixturesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutFixturesInput | TeamCreateOrConnectWithoutFixturesInput[]
    createMany?: TeamCreateManyFixturesInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TeamUncheckedCreateNestedManyWithoutFixturesInput = {
    create?: XOR<TeamCreateWithoutFixturesInput, TeamUncheckedCreateWithoutFixturesInput> | TeamCreateWithoutFixturesInput[] | TeamUncheckedCreateWithoutFixturesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutFixturesInput | TeamCreateOrConnectWithoutFixturesInput[]
    createMany?: TeamCreateManyFixturesInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type TournamentUpdateOneRequiredWithoutFixtureNestedInput = {
    create?: XOR<TournamentCreateWithoutFixtureInput, TournamentUncheckedCreateWithoutFixtureInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutFixtureInput
    upsert?: TournamentUpsertWithoutFixtureInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutFixtureInput, TournamentUpdateWithoutFixtureInput>, TournamentUncheckedUpdateWithoutFixtureInput>
  }

  export type TeamUpdateManyWithoutFixturesNestedInput = {
    create?: XOR<TeamCreateWithoutFixturesInput, TeamUncheckedCreateWithoutFixturesInput> | TeamCreateWithoutFixturesInput[] | TeamUncheckedCreateWithoutFixturesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutFixturesInput | TeamCreateOrConnectWithoutFixturesInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutFixturesInput | TeamUpsertWithWhereUniqueWithoutFixturesInput[]
    createMany?: TeamCreateManyFixturesInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutFixturesInput | TeamUpdateWithWhereUniqueWithoutFixturesInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutFixturesInput | TeamUpdateManyWithWhereWithoutFixturesInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TeamUncheckedUpdateManyWithoutFixturesNestedInput = {
    create?: XOR<TeamCreateWithoutFixturesInput, TeamUncheckedCreateWithoutFixturesInput> | TeamCreateWithoutFixturesInput[] | TeamUncheckedCreateWithoutFixturesInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutFixturesInput | TeamCreateOrConnectWithoutFixturesInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutFixturesInput | TeamUpsertWithWhereUniqueWithoutFixturesInput[]
    createMany?: TeamCreateManyFixturesInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutFixturesInput | TeamUpdateWithWhereUniqueWithoutFixturesInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutFixturesInput | TeamUpdateManyWithWhereWithoutFixturesInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type TournamentCreateNestedOneWithoutRoundInput = {
    create?: XOR<TournamentCreateWithoutRoundInput, TournamentUncheckedCreateWithoutRoundInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutRoundInput
    connect?: TournamentWhereUniqueInput
  }

  export type TeamRoundCreateNestedManyWithoutRoundInput = {
    create?: XOR<TeamRoundCreateWithoutRoundInput, TeamRoundUncheckedCreateWithoutRoundInput> | TeamRoundCreateWithoutRoundInput[] | TeamRoundUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutRoundInput | TeamRoundCreateOrConnectWithoutRoundInput[]
    createMany?: TeamRoundCreateManyRoundInputEnvelope
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
  }

  export type TeamStatsCreateNestedManyWithoutRoundInput = {
    create?: XOR<TeamStatsCreateWithoutRoundInput, TeamStatsUncheckedCreateWithoutRoundInput> | TeamStatsCreateWithoutRoundInput[] | TeamStatsUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutRoundInput | TeamStatsCreateOrConnectWithoutRoundInput[]
    createMany?: TeamStatsCreateManyRoundInputEnvelope
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
  }

  export type TeamRoundUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<TeamRoundCreateWithoutRoundInput, TeamRoundUncheckedCreateWithoutRoundInput> | TeamRoundCreateWithoutRoundInput[] | TeamRoundUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutRoundInput | TeamRoundCreateOrConnectWithoutRoundInput[]
    createMany?: TeamRoundCreateManyRoundInputEnvelope
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
  }

  export type TeamStatsUncheckedCreateNestedManyWithoutRoundInput = {
    create?: XOR<TeamStatsCreateWithoutRoundInput, TeamStatsUncheckedCreateWithoutRoundInput> | TeamStatsCreateWithoutRoundInput[] | TeamStatsUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutRoundInput | TeamStatsCreateOrConnectWithoutRoundInput[]
    createMany?: TeamStatsCreateManyRoundInputEnvelope
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
  }

  export type TournamentUpdateOneRequiredWithoutRoundNestedInput = {
    create?: XOR<TournamentCreateWithoutRoundInput, TournamentUncheckedCreateWithoutRoundInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutRoundInput
    upsert?: TournamentUpsertWithoutRoundInput
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutRoundInput, TournamentUpdateWithoutRoundInput>, TournamentUncheckedUpdateWithoutRoundInput>
  }

  export type TeamRoundUpdateManyWithoutRoundNestedInput = {
    create?: XOR<TeamRoundCreateWithoutRoundInput, TeamRoundUncheckedCreateWithoutRoundInput> | TeamRoundCreateWithoutRoundInput[] | TeamRoundUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutRoundInput | TeamRoundCreateOrConnectWithoutRoundInput[]
    upsert?: TeamRoundUpsertWithWhereUniqueWithoutRoundInput | TeamRoundUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: TeamRoundCreateManyRoundInputEnvelope
    set?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    disconnect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    delete?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    update?: TeamRoundUpdateWithWhereUniqueWithoutRoundInput | TeamRoundUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: TeamRoundUpdateManyWithWhereWithoutRoundInput | TeamRoundUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
  }

  export type TeamStatsUpdateManyWithoutRoundNestedInput = {
    create?: XOR<TeamStatsCreateWithoutRoundInput, TeamStatsUncheckedCreateWithoutRoundInput> | TeamStatsCreateWithoutRoundInput[] | TeamStatsUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutRoundInput | TeamStatsCreateOrConnectWithoutRoundInput[]
    upsert?: TeamStatsUpsertWithWhereUniqueWithoutRoundInput | TeamStatsUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: TeamStatsCreateManyRoundInputEnvelope
    set?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    disconnect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    delete?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    update?: TeamStatsUpdateWithWhereUniqueWithoutRoundInput | TeamStatsUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: TeamStatsUpdateManyWithWhereWithoutRoundInput | TeamStatsUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: TeamStatsScalarWhereInput | TeamStatsScalarWhereInput[]
  }

  export type TeamRoundUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<TeamRoundCreateWithoutRoundInput, TeamRoundUncheckedCreateWithoutRoundInput> | TeamRoundCreateWithoutRoundInput[] | TeamRoundUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutRoundInput | TeamRoundCreateOrConnectWithoutRoundInput[]
    upsert?: TeamRoundUpsertWithWhereUniqueWithoutRoundInput | TeamRoundUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: TeamRoundCreateManyRoundInputEnvelope
    set?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    disconnect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    delete?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    update?: TeamRoundUpdateWithWhereUniqueWithoutRoundInput | TeamRoundUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: TeamRoundUpdateManyWithWhereWithoutRoundInput | TeamRoundUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
  }

  export type TeamStatsUncheckedUpdateManyWithoutRoundNestedInput = {
    create?: XOR<TeamStatsCreateWithoutRoundInput, TeamStatsUncheckedCreateWithoutRoundInput> | TeamStatsCreateWithoutRoundInput[] | TeamStatsUncheckedCreateWithoutRoundInput[]
    connectOrCreate?: TeamStatsCreateOrConnectWithoutRoundInput | TeamStatsCreateOrConnectWithoutRoundInput[]
    upsert?: TeamStatsUpsertWithWhereUniqueWithoutRoundInput | TeamStatsUpsertWithWhereUniqueWithoutRoundInput[]
    createMany?: TeamStatsCreateManyRoundInputEnvelope
    set?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    disconnect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    delete?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    connect?: TeamStatsWhereUniqueInput | TeamStatsWhereUniqueInput[]
    update?: TeamStatsUpdateWithWhereUniqueWithoutRoundInput | TeamStatsUpdateWithWhereUniqueWithoutRoundInput[]
    updateMany?: TeamStatsUpdateManyWithWhereWithoutRoundInput | TeamStatsUpdateManyWithWhereWithoutRoundInput[]
    deleteMany?: TeamStatsScalarWhereInput | TeamStatsScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutTeamRoundInput = {
    create?: XOR<TeamCreateWithoutTeamRoundInput, TeamUncheckedCreateWithoutTeamRoundInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamRoundInput
    connect?: TeamWhereUniqueInput
  }

  export type RoundCreateNestedOneWithoutTeamsInput = {
    create?: XOR<RoundCreateWithoutTeamsInput, RoundUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutTeamsInput
    connect?: RoundWhereUniqueInput
  }

  export type TournamentCreateNestedOneWithoutTeamRoundsInput = {
    create?: XOR<TournamentCreateWithoutTeamRoundsInput, TournamentUncheckedCreateWithoutTeamRoundsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamRoundsInput
    connect?: TournamentWhereUniqueInput
  }

  export type TeamUpdateOneRequiredWithoutTeamRoundNestedInput = {
    create?: XOR<TeamCreateWithoutTeamRoundInput, TeamUncheckedCreateWithoutTeamRoundInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamRoundInput
    upsert?: TeamUpsertWithoutTeamRoundInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamRoundInput, TeamUpdateWithoutTeamRoundInput>, TeamUncheckedUpdateWithoutTeamRoundInput>
  }

  export type RoundUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<RoundCreateWithoutTeamsInput, RoundUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutTeamsInput
    upsert?: RoundUpsertWithoutTeamsInput
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutTeamsInput, RoundUpdateWithoutTeamsInput>, RoundUncheckedUpdateWithoutTeamsInput>
  }

  export type TournamentUpdateOneWithoutTeamRoundsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamRoundsInput, TournamentUncheckedCreateWithoutTeamRoundsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamRoundsInput
    upsert?: TournamentUpsertWithoutTeamRoundsInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTeamRoundsInput, TournamentUpdateWithoutTeamRoundsInput>, TournamentUncheckedUpdateWithoutTeamRoundsInput>
  }

  export type PlayerCreateNestedOneWithoutWalletInput = {
    create?: XOR<PlayerCreateWithoutWalletInput, PlayerUncheckedCreateWithoutWalletInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutWalletInput
    connect?: PlayerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutWalletInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    connect?: UserWhereUniqueInput
  }

  export type PlayerUpdateOneWithoutWalletNestedInput = {
    create?: XOR<PlayerCreateWithoutWalletInput, PlayerUncheckedCreateWithoutWalletInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutWalletInput
    upsert?: PlayerUpsertWithoutWalletInput
    disconnect?: PlayerWhereInput | boolean
    delete?: PlayerWhereInput | boolean
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutWalletInput, PlayerUpdateWithoutWalletInput>, PlayerUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateOneRequiredWithoutWalletNestedInput = {
    create?: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    connectOrCreate?: UserCreateOrConnectWithoutWalletInput
    upsert?: UserUpsertWithoutWalletInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWalletInput, UserUpdateWithoutWalletInput>, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserCreateNestedOneWithoutPlayerInput = {
    create?: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPlayersInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayerStatsCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type WalletCreateNestedOneWithoutPlayerInput = {
    create?: XOR<WalletCreateWithoutPlayerInput, WalletUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPlayerInput
    connect?: WalletWhereUniqueInput
  }

  export type PlayerTeamStatsCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutPlayerInput, PlayerTeamStatsUncheckedCreateWithoutPlayerInput> | PlayerTeamStatsCreateWithoutPlayerInput[] | PlayerTeamStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutPlayerInput | PlayerTeamStatsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerTeamStatsCreateManyPlayerInputEnvelope
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
  }

  export type PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    connect?: PlayerStatsWhereUniqueInput
  }

  export type WalletUncheckedCreateNestedOneWithoutPlayerInput = {
    create?: XOR<WalletCreateWithoutPlayerInput, WalletUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPlayerInput
    connect?: WalletWhereUniqueInput
  }

  export type PlayerTeamStatsUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutPlayerInput, PlayerTeamStatsUncheckedCreateWithoutPlayerInput> | PlayerTeamStatsCreateWithoutPlayerInput[] | PlayerTeamStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutPlayerInput | PlayerTeamStatsCreateOrConnectWithoutPlayerInput[]
    createMany?: PlayerTeamStatsCreateManyPlayerInputEnvelope
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type UserUpdateOneRequiredWithoutPlayerNestedInput = {
    create?: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlayerInput
    upsert?: UserUpsertWithoutPlayerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlayerInput, UserUpdateWithoutPlayerInput>, UserUncheckedUpdateWithoutPlayerInput>
  }

  export type TeamUpdateOneWithoutPlayersNestedInput = {
    create?: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayersInput
    upsert?: TeamUpsertWithoutPlayersInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayersInput, TeamUpdateWithoutPlayersInput>, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type PlayerStatsUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type WalletUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<WalletCreateWithoutPlayerInput, WalletUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPlayerInput
    upsert?: WalletUpsertWithoutPlayerInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutPlayerInput, WalletUpdateWithoutPlayerInput>, WalletUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTeamStatsUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutPlayerInput, PlayerTeamStatsUncheckedCreateWithoutPlayerInput> | PlayerTeamStatsCreateWithoutPlayerInput[] | PlayerTeamStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutPlayerInput | PlayerTeamStatsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerTeamStatsUpsertWithWhereUniqueWithoutPlayerInput | PlayerTeamStatsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerTeamStatsCreateManyPlayerInputEnvelope
    set?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    disconnect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    delete?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    update?: PlayerTeamStatsUpdateWithWhereUniqueWithoutPlayerInput | PlayerTeamStatsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerTeamStatsUpdateManyWithWhereWithoutPlayerInput | PlayerTeamStatsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
  }

  export type PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: PlayerStatsCreateOrConnectWithoutPlayerInput
    upsert?: PlayerStatsUpsertWithoutPlayerInput
    disconnect?: PlayerStatsWhereInput | boolean
    delete?: PlayerStatsWhereInput | boolean
    connect?: PlayerStatsWhereUniqueInput
    update?: XOR<XOR<PlayerStatsUpdateToOneWithWhereWithoutPlayerInput, PlayerStatsUpdateWithoutPlayerInput>, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type WalletUncheckedUpdateOneWithoutPlayerNestedInput = {
    create?: XOR<WalletCreateWithoutPlayerInput, WalletUncheckedCreateWithoutPlayerInput>
    connectOrCreate?: WalletCreateOrConnectWithoutPlayerInput
    upsert?: WalletUpsertWithoutPlayerInput
    disconnect?: WalletWhereInput | boolean
    delete?: WalletWhereInput | boolean
    connect?: WalletWhereUniqueInput
    update?: XOR<XOR<WalletUpdateToOneWithWhereWithoutPlayerInput, WalletUpdateWithoutPlayerInput>, WalletUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTeamStatsUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutPlayerInput, PlayerTeamStatsUncheckedCreateWithoutPlayerInput> | PlayerTeamStatsCreateWithoutPlayerInput[] | PlayerTeamStatsUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutPlayerInput | PlayerTeamStatsCreateOrConnectWithoutPlayerInput[]
    upsert?: PlayerTeamStatsUpsertWithWhereUniqueWithoutPlayerInput | PlayerTeamStatsUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: PlayerTeamStatsCreateManyPlayerInputEnvelope
    set?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    disconnect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    delete?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    update?: PlayerTeamStatsUpdateWithWhereUniqueWithoutPlayerInput | PlayerTeamStatsUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: PlayerTeamStatsUpdateManyWithWhereWithoutPlayerInput | PlayerTeamStatsUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutPlayerStatsInput = {
    create?: XOR<PlayerCreateWithoutPlayerStatsInput, PlayerUncheckedCreateWithoutPlayerStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerStatsInput
    connect?: PlayerWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PlayerUpdateOneRequiredWithoutPlayerStatsNestedInput = {
    create?: XOR<PlayerCreateWithoutPlayerStatsInput, PlayerUncheckedCreateWithoutPlayerStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerStatsInput
    upsert?: PlayerUpsertWithoutPlayerStatsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPlayerStatsInput, PlayerUpdateWithoutPlayerStatsInput>, PlayerUncheckedUpdateWithoutPlayerStatsInput>
  }

  export type PlayerCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type TeamStatsCreateNestedOneWithoutTeamInput = {
    create?: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTeamInput
    connect?: TeamStatsWhereUniqueInput
  }

  export type PlayerTeamStatsCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamInput, PlayerTeamStatsUncheckedCreateWithoutTeamInput> | PlayerTeamStatsCreateWithoutTeamInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamInput | PlayerTeamStatsCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerTeamStatsCreateManyTeamInputEnvelope
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
  }

  export type TeamRoundCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamRoundCreateWithoutTeamInput, TeamRoundUncheckedCreateWithoutTeamInput> | TeamRoundCreateWithoutTeamInput[] | TeamRoundUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTeamInput | TeamRoundCreateOrConnectWithoutTeamInput[]
    createMany?: TeamRoundCreateManyTeamInputEnvelope
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
  }

  export type FixtureCreateNestedOneWithoutTeamsInput = {
    create?: XOR<FixtureCreateWithoutTeamsInput, FixtureUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutTeamsInput
    connect?: FixtureWhereUniqueInput
  }

  export type PlayerUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
  }

  export type PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamInput, PlayerTeamStatsUncheckedCreateWithoutTeamInput> | PlayerTeamStatsCreateWithoutTeamInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamInput | PlayerTeamStatsCreateOrConnectWithoutTeamInput[]
    createMany?: PlayerTeamStatsCreateManyTeamInputEnvelope
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
  }

  export type TeamRoundUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamRoundCreateWithoutTeamInput, TeamRoundUncheckedCreateWithoutTeamInput> | TeamRoundCreateWithoutTeamInput[] | TeamRoundUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTeamInput | TeamRoundCreateOrConnectWithoutTeamInput[]
    createMany?: TeamRoundCreateManyTeamInputEnvelope
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
  }

  export type PlayerUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type TeamStatsUpdateOneWithoutTeamNestedInput = {
    create?: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutTeamInput
    upsert?: TeamStatsUpsertWithoutTeamInput
    disconnect?: TeamStatsWhereInput | boolean
    delete?: TeamStatsWhereInput | boolean
    connect?: TeamStatsWhereUniqueInput
    update?: XOR<XOR<TeamStatsUpdateToOneWithWhereWithoutTeamInput, TeamStatsUpdateWithoutTeamInput>, TeamStatsUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerTeamStatsUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamInput, PlayerTeamStatsUncheckedCreateWithoutTeamInput> | PlayerTeamStatsCreateWithoutTeamInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamInput | PlayerTeamStatsCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamInput | PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerTeamStatsCreateManyTeamInputEnvelope
    set?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    disconnect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    delete?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    update?: PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamInput | PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerTeamStatsUpdateManyWithWhereWithoutTeamInput | PlayerTeamStatsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
  }

  export type TeamRoundUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamRoundCreateWithoutTeamInput, TeamRoundUncheckedCreateWithoutTeamInput> | TeamRoundCreateWithoutTeamInput[] | TeamRoundUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTeamInput | TeamRoundCreateOrConnectWithoutTeamInput[]
    upsert?: TeamRoundUpsertWithWhereUniqueWithoutTeamInput | TeamRoundUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamRoundCreateManyTeamInputEnvelope
    set?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    disconnect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    delete?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    update?: TeamRoundUpdateWithWhereUniqueWithoutTeamInput | TeamRoundUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamRoundUpdateManyWithWhereWithoutTeamInput | TeamRoundUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
  }

  export type FixtureUpdateOneWithoutTeamsNestedInput = {
    create?: XOR<FixtureCreateWithoutTeamsInput, FixtureUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: FixtureCreateOrConnectWithoutTeamsInput
    upsert?: FixtureUpsertWithoutTeamsInput
    disconnect?: FixtureWhereInput | boolean
    delete?: FixtureWhereInput | boolean
    connect?: FixtureWhereUniqueInput
    update?: XOR<XOR<FixtureUpdateToOneWithWhereWithoutTeamsInput, FixtureUpdateWithoutTeamsInput>, FixtureUncheckedUpdateWithoutTeamsInput>
  }

  export type PlayerUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput> | PlayerCreateWithoutTeamInput[] | PlayerUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerCreateOrConnectWithoutTeamInput | PlayerCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerUpsertWithWhereUniqueWithoutTeamInput | PlayerUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerCreateManyTeamInputEnvelope
    set?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    disconnect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    delete?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    connect?: PlayerWhereUniqueInput | PlayerWhereUniqueInput[]
    update?: PlayerUpdateWithWhereUniqueWithoutTeamInput | PlayerUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerUpdateManyWithWhereWithoutTeamInput | PlayerUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
  }

  export type PlayerTeamStatsUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamInput, PlayerTeamStatsUncheckedCreateWithoutTeamInput> | PlayerTeamStatsCreateWithoutTeamInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamInput | PlayerTeamStatsCreateOrConnectWithoutTeamInput[]
    upsert?: PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamInput | PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: PlayerTeamStatsCreateManyTeamInputEnvelope
    set?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    disconnect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    delete?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    update?: PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamInput | PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: PlayerTeamStatsUpdateManyWithWhereWithoutTeamInput | PlayerTeamStatsUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
  }

  export type TeamRoundUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamRoundCreateWithoutTeamInput, TeamRoundUncheckedCreateWithoutTeamInput> | TeamRoundCreateWithoutTeamInput[] | TeamRoundUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamRoundCreateOrConnectWithoutTeamInput | TeamRoundCreateOrConnectWithoutTeamInput[]
    upsert?: TeamRoundUpsertWithWhereUniqueWithoutTeamInput | TeamRoundUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamRoundCreateManyTeamInputEnvelope
    set?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    disconnect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    delete?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    connect?: TeamRoundWhereUniqueInput | TeamRoundWhereUniqueInput[]
    update?: TeamRoundUpdateWithWhereUniqueWithoutTeamInput | TeamRoundUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamRoundUpdateManyWithWhereWithoutTeamInput | TeamRoundUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutTeamStatsInput = {
    create?: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamStatsInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayerTeamStatsCreateNestedManyWithoutTeamStatsInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamStatsInput, PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput> | PlayerTeamStatsCreateWithoutTeamStatsInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput | PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput[]
    createMany?: PlayerTeamStatsCreateManyTeamStatsInputEnvelope
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
  }

  export type TournamentCreateNestedOneWithoutTeamStatsInput = {
    create?: XOR<TournamentCreateWithoutTeamStatsInput, TournamentUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamStatsInput
    connect?: TournamentWhereUniqueInput
  }

  export type RoundCreateNestedOneWithoutTeamStatsInput = {
    create?: XOR<RoundCreateWithoutTeamStatsInput, RoundUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutTeamStatsInput
    connect?: RoundWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedOneWithoutTeamStatsInput = {
    create?: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamStatsInput
    connect?: TeamWhereUniqueInput
  }

  export type PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamStatsInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamStatsInput, PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput> | PlayerTeamStatsCreateWithoutTeamStatsInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput | PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput[]
    createMany?: PlayerTeamStatsCreateManyTeamStatsInputEnvelope
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
  }

  export type TeamUpdateOneWithoutTeamStatsNestedInput = {
    create?: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamStatsInput
    upsert?: TeamUpsertWithoutTeamStatsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamStatsInput, TeamUpdateWithoutTeamStatsInput>, TeamUncheckedUpdateWithoutTeamStatsInput>
  }

  export type PlayerTeamStatsUpdateManyWithoutTeamStatsNestedInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamStatsInput, PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput> | PlayerTeamStatsCreateWithoutTeamStatsInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput | PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput[]
    upsert?: PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamStatsInput | PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamStatsInput[]
    createMany?: PlayerTeamStatsCreateManyTeamStatsInputEnvelope
    set?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    disconnect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    delete?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    update?: PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamStatsInput | PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamStatsInput[]
    updateMany?: PlayerTeamStatsUpdateManyWithWhereWithoutTeamStatsInput | PlayerTeamStatsUpdateManyWithWhereWithoutTeamStatsInput[]
    deleteMany?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
  }

  export type TournamentUpdateOneWithoutTeamStatsNestedInput = {
    create?: XOR<TournamentCreateWithoutTeamStatsInput, TournamentUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TournamentCreateOrConnectWithoutTeamStatsInput
    upsert?: TournamentUpsertWithoutTeamStatsInput
    disconnect?: TournamentWhereInput | boolean
    delete?: TournamentWhereInput | boolean
    connect?: TournamentWhereUniqueInput
    update?: XOR<XOR<TournamentUpdateToOneWithWhereWithoutTeamStatsInput, TournamentUpdateWithoutTeamStatsInput>, TournamentUncheckedUpdateWithoutTeamStatsInput>
  }

  export type RoundUpdateOneWithoutTeamStatsNestedInput = {
    create?: XOR<RoundCreateWithoutTeamStatsInput, RoundUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: RoundCreateOrConnectWithoutTeamStatsInput
    upsert?: RoundUpsertWithoutTeamStatsInput
    disconnect?: RoundWhereInput | boolean
    delete?: RoundWhereInput | boolean
    connect?: RoundWhereUniqueInput
    update?: XOR<XOR<RoundUpdateToOneWithWhereWithoutTeamStatsInput, RoundUpdateWithoutTeamStatsInput>, RoundUncheckedUpdateWithoutTeamStatsInput>
  }

  export type TeamUncheckedUpdateOneWithoutTeamStatsNestedInput = {
    create?: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutTeamStatsInput
    upsert?: TeamUpsertWithoutTeamStatsInput
    disconnect?: TeamWhereInput | boolean
    delete?: TeamWhereInput | boolean
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutTeamStatsInput, TeamUpdateWithoutTeamStatsInput>, TeamUncheckedUpdateWithoutTeamStatsInput>
  }

  export type PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsNestedInput = {
    create?: XOR<PlayerTeamStatsCreateWithoutTeamStatsInput, PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput> | PlayerTeamStatsCreateWithoutTeamStatsInput[] | PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput[]
    connectOrCreate?: PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput | PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput[]
    upsert?: PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamStatsInput | PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamStatsInput[]
    createMany?: PlayerTeamStatsCreateManyTeamStatsInputEnvelope
    set?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    disconnect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    delete?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    connect?: PlayerTeamStatsWhereUniqueInput | PlayerTeamStatsWhereUniqueInput[]
    update?: PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamStatsInput | PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamStatsInput[]
    updateMany?: PlayerTeamStatsUpdateManyWithWhereWithoutTeamStatsInput | PlayerTeamStatsUpdateManyWithWhereWithoutTeamStatsInput[]
    deleteMany?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutPlayerTeamStatsInput = {
    create?: XOR<PlayerCreateWithoutPlayerTeamStatsInput, PlayerUncheckedCreateWithoutPlayerTeamStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerTeamStatsInput
    connect?: PlayerWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutPlayerTeamStatsInput = {
    create?: XOR<TeamCreateWithoutPlayerTeamStatsInput, TeamUncheckedCreateWithoutPlayerTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayerTeamStatsInput
    connect?: TeamWhereUniqueInput
  }

  export type TeamStatsCreateNestedOneWithoutPlayerTeamStatsInput = {
    create?: XOR<TeamStatsCreateWithoutPlayerTeamStatsInput, TeamStatsUncheckedCreateWithoutPlayerTeamStatsInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutPlayerTeamStatsInput
    connect?: TeamStatsWhereUniqueInput
  }

  export type PlayerUpdateOneRequiredWithoutPlayerTeamStatsNestedInput = {
    create?: XOR<PlayerCreateWithoutPlayerTeamStatsInput, PlayerUncheckedCreateWithoutPlayerTeamStatsInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutPlayerTeamStatsInput
    upsert?: PlayerUpsertWithoutPlayerTeamStatsInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutPlayerTeamStatsInput, PlayerUpdateWithoutPlayerTeamStatsInput>, PlayerUncheckedUpdateWithoutPlayerTeamStatsInput>
  }

  export type TeamUpdateOneRequiredWithoutPlayerTeamStatsNestedInput = {
    create?: XOR<TeamCreateWithoutPlayerTeamStatsInput, TeamUncheckedCreateWithoutPlayerTeamStatsInput>
    connectOrCreate?: TeamCreateOrConnectWithoutPlayerTeamStatsInput
    upsert?: TeamUpsertWithoutPlayerTeamStatsInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutPlayerTeamStatsInput, TeamUpdateWithoutPlayerTeamStatsInput>, TeamUncheckedUpdateWithoutPlayerTeamStatsInput>
  }

  export type TeamStatsUpdateOneWithoutPlayerTeamStatsNestedInput = {
    create?: XOR<TeamStatsCreateWithoutPlayerTeamStatsInput, TeamStatsUncheckedCreateWithoutPlayerTeamStatsInput>
    connectOrCreate?: TeamStatsCreateOrConnectWithoutPlayerTeamStatsInput
    upsert?: TeamStatsUpsertWithoutPlayerTeamStatsInput
    disconnect?: TeamStatsWhereInput | boolean
    delete?: TeamStatsWhereInput | boolean
    connect?: TeamStatsWhereUniqueInput
    update?: XOR<XOR<TeamStatsUpdateToOneWithWhereWithoutPlayerTeamStatsInput, TeamStatsUpdateWithoutPlayerTeamStatsInput>, TeamStatsUncheckedUpdateWithoutPlayerTeamStatsInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
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

  export type OtpCreateWithoutUserInput = {
    id?: string
    otp: string
    isOtpUsed?: boolean
    otpCreatedAt?: Date | string
    otpExpiresAt: Date | string
    otpVerifiedAt?: Date | string | null
  }

  export type OtpUncheckedCreateWithoutUserInput = {
    id?: string
    otp: string
    isOtpUsed?: boolean
    otpCreatedAt?: Date | string
    otpExpiresAt: Date | string
    otpVerifiedAt?: Date | string | null
  }

  export type OtpCreateOrConnectWithoutUserInput = {
    where: OtpWhereUniqueInput
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
  }

  export type OtpCreateManyUserInputEnvelope = {
    data: OtpCreateManyUserInput | OtpCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TokenCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    revoked?: boolean
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type TokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    revoked?: boolean
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type TokenCreateOrConnectWithoutUserInput = {
    where: TokenWhereUniqueInput
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenCreateManyUserInputEnvelope = {
    data: TokenCreateManyUserInput | TokenCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PlayerCreateWithoutUserInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutPlayersInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    wallet?: WalletCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    teamId?: string | null
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    wallet?: WalletUncheckedCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutUserInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
  }

  export type WalletCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    player?: PlayerCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    playerId?: string | null
  }

  export type WalletCreateOrConnectWithoutUserInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
  }

  export type OtpUpsertWithWhereUniqueWithoutUserInput = {
    where: OtpWhereUniqueInput
    update: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
    create: XOR<OtpCreateWithoutUserInput, OtpUncheckedCreateWithoutUserInput>
  }

  export type OtpUpdateWithWhereUniqueWithoutUserInput = {
    where: OtpWhereUniqueInput
    data: XOR<OtpUpdateWithoutUserInput, OtpUncheckedUpdateWithoutUserInput>
  }

  export type OtpUpdateManyWithWhereWithoutUserInput = {
    where: OtpScalarWhereInput
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyWithoutUserInput>
  }

  export type OtpScalarWhereInput = {
    AND?: OtpScalarWhereInput | OtpScalarWhereInput[]
    OR?: OtpScalarWhereInput[]
    NOT?: OtpScalarWhereInput | OtpScalarWhereInput[]
    id?: StringFilter<"Otp"> | string
    userId?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    isOtpUsed?: BoolFilter<"Otp"> | boolean
    otpCreatedAt?: DateTimeFilter<"Otp"> | Date | string
    otpExpiresAt?: DateTimeFilter<"Otp"> | Date | string
    otpVerifiedAt?: DateTimeNullableFilter<"Otp"> | Date | string | null
  }

  export type TokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    update: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
    create: XOR<TokenCreateWithoutUserInput, TokenUncheckedCreateWithoutUserInput>
  }

  export type TokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TokenWhereUniqueInput
    data: XOR<TokenUpdateWithoutUserInput, TokenUncheckedUpdateWithoutUserInput>
  }

  export type TokenUpdateManyWithWhereWithoutUserInput = {
    where: TokenScalarWhereInput
    data: XOR<TokenUpdateManyMutationInput, TokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TokenScalarWhereInput = {
    AND?: TokenScalarWhereInput | TokenScalarWhereInput[]
    OR?: TokenScalarWhereInput[]
    NOT?: TokenScalarWhereInput | TokenScalarWhereInput[]
    id?: StringFilter<"Token"> | string
    userId?: StringFilter<"Token"> | string
    token?: StringFilter<"Token"> | string
    expiresAt?: DateTimeFilter<"Token"> | Date | string
    createdAt?: DateTimeFilter<"Token"> | Date | string
    revoked?: BoolFilter<"Token"> | boolean
    revokedAt?: DateTimeNullableFilter<"Token"> | Date | string | null
    ipAddress?: StringNullableFilter<"Token"> | string | null
    userAgent?: StringNullableFilter<"Token"> | string | null
  }

  export type PlayerUpsertWithoutUserInput = {
    update: XOR<PlayerUpdateWithoutUserInput, PlayerUncheckedUpdateWithoutUserInput>
    create: XOR<PlayerCreateWithoutUserInput, PlayerUncheckedCreateWithoutUserInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutUserInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutUserInput, PlayerUncheckedUpdateWithoutUserInput>
  }

  export type PlayerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutPlayersNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type WalletUpsertWithoutUserInput = {
    update: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
    create: XOR<WalletCreateWithoutUserInput, WalletUncheckedCreateWithoutUserInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutUserInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutUserInput, WalletUncheckedUpdateWithoutUserInput>
  }

  export type WalletUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutTokensInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpCreateNestedManyWithoutUserInput
    Player?: PlayerCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTokensInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    Player?: PlayerUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
  }

  export type UserUpsertWithoutTokensInput = {
    update: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
    create: XOR<UserCreateWithoutTokensInput, UserUncheckedCreateWithoutTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTokensInput, UserUncheckedUpdateWithoutTokensInput>
  }

  export type UserUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUpdateManyWithoutUserNestedInput
    Player?: PlayerUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTokensInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    Player?: PlayerUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutOtpsInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenCreateNestedManyWithoutUserInput
    Player?: PlayerCreateNestedOneWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOtpsInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    Player?: PlayerUncheckedCreateNestedOneWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOtpsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
  }

  export type UserUpsertWithoutOtpsInput = {
    update: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
    create: XOR<UserCreateWithoutOtpsInput, UserUncheckedCreateWithoutOtpsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOtpsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOtpsInput, UserUncheckedUpdateWithoutOtpsInput>
  }

  export type UserUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUpdateManyWithoutUserNestedInput
    Player?: PlayerUpdateOneWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOtpsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    Player?: PlayerUncheckedUpdateOneWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamRoundCreateWithoutTournamentInput = {
    id?: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutTeamRoundInput
    round: RoundCreateNestedOneWithoutTeamsInput
  }

  export type TeamRoundUncheckedCreateWithoutTournamentInput = {
    id?: string
    teamId: string
    roundId: string
    createdAt?: Date | string
  }

  export type TeamRoundCreateOrConnectWithoutTournamentInput = {
    where: TeamRoundWhereUniqueInput
    create: XOR<TeamRoundCreateWithoutTournamentInput, TeamRoundUncheckedCreateWithoutTournamentInput>
  }

  export type TeamRoundCreateManyTournamentInputEnvelope = {
    data: TeamRoundCreateManyTournamentInput | TeamRoundCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type RoundCreateWithoutTournamentInput = {
    id?: string
    number: number
    createdAt?: Date | string
    teams?: TeamRoundCreateNestedManyWithoutRoundInput
    teamStats?: TeamStatsCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutTournamentInput = {
    id?: string
    number: number
    createdAt?: Date | string
    teams?: TeamRoundUncheckedCreateNestedManyWithoutRoundInput
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutTournamentInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutTournamentInput, RoundUncheckedCreateWithoutTournamentInput>
  }

  export type RoundCreateManyTournamentInputEnvelope = {
    data: RoundCreateManyTournamentInput | RoundCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type TeamStatsCreateWithoutTournamentInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutTeamStatsInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamStatsInput
    round?: RoundCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsUncheckedCreateWithoutTournamentInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    roundId?: string | null
    team?: TeamUncheckedCreateNestedOneWithoutTeamStatsInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamStatsInput
  }

  export type TeamStatsCreateOrConnectWithoutTournamentInput = {
    where: TeamStatsWhereUniqueInput
    create: XOR<TeamStatsCreateWithoutTournamentInput, TeamStatsUncheckedCreateWithoutTournamentInput>
  }

  export type TeamStatsCreateManyTournamentInputEnvelope = {
    data: TeamStatsCreateManyTournamentInput | TeamStatsCreateManyTournamentInput[]
    skipDuplicates?: boolean
  }

  export type FixtureCreateWithoutTournamentInput = {
    id?: string
    createdAt?: Date | string
    teams?: TeamCreateNestedManyWithoutFixturesInput
  }

  export type FixtureUncheckedCreateWithoutTournamentInput = {
    id?: string
    createdAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutFixturesInput
  }

  export type FixtureCreateOrConnectWithoutTournamentInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
  }

  export type TeamRoundUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TeamRoundWhereUniqueInput
    update: XOR<TeamRoundUpdateWithoutTournamentInput, TeamRoundUncheckedUpdateWithoutTournamentInput>
    create: XOR<TeamRoundCreateWithoutTournamentInput, TeamRoundUncheckedCreateWithoutTournamentInput>
  }

  export type TeamRoundUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TeamRoundWhereUniqueInput
    data: XOR<TeamRoundUpdateWithoutTournamentInput, TeamRoundUncheckedUpdateWithoutTournamentInput>
  }

  export type TeamRoundUpdateManyWithWhereWithoutTournamentInput = {
    where: TeamRoundScalarWhereInput
    data: XOR<TeamRoundUpdateManyMutationInput, TeamRoundUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TeamRoundScalarWhereInput = {
    AND?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
    OR?: TeamRoundScalarWhereInput[]
    NOT?: TeamRoundScalarWhereInput | TeamRoundScalarWhereInput[]
    id?: StringFilter<"TeamRound"> | string
    teamId?: StringFilter<"TeamRound"> | string
    roundId?: StringFilter<"TeamRound"> | string
    createdAt?: DateTimeFilter<"TeamRound"> | Date | string
    tournamentId?: StringNullableFilter<"TeamRound"> | string | null
  }

  export type RoundUpsertWithWhereUniqueWithoutTournamentInput = {
    where: RoundWhereUniqueInput
    update: XOR<RoundUpdateWithoutTournamentInput, RoundUncheckedUpdateWithoutTournamentInput>
    create: XOR<RoundCreateWithoutTournamentInput, RoundUncheckedCreateWithoutTournamentInput>
  }

  export type RoundUpdateWithWhereUniqueWithoutTournamentInput = {
    where: RoundWhereUniqueInput
    data: XOR<RoundUpdateWithoutTournamentInput, RoundUncheckedUpdateWithoutTournamentInput>
  }

  export type RoundUpdateManyWithWhereWithoutTournamentInput = {
    where: RoundScalarWhereInput
    data: XOR<RoundUpdateManyMutationInput, RoundUncheckedUpdateManyWithoutTournamentInput>
  }

  export type RoundScalarWhereInput = {
    AND?: RoundScalarWhereInput | RoundScalarWhereInput[]
    OR?: RoundScalarWhereInput[]
    NOT?: RoundScalarWhereInput | RoundScalarWhereInput[]
    id?: StringFilter<"Round"> | string
    number?: IntFilter<"Round"> | number
    createdAt?: DateTimeFilter<"Round"> | Date | string
    tournamentId?: StringFilter<"Round"> | string
  }

  export type TeamStatsUpsertWithWhereUniqueWithoutTournamentInput = {
    where: TeamStatsWhereUniqueInput
    update: XOR<TeamStatsUpdateWithoutTournamentInput, TeamStatsUncheckedUpdateWithoutTournamentInput>
    create: XOR<TeamStatsCreateWithoutTournamentInput, TeamStatsUncheckedCreateWithoutTournamentInput>
  }

  export type TeamStatsUpdateWithWhereUniqueWithoutTournamentInput = {
    where: TeamStatsWhereUniqueInput
    data: XOR<TeamStatsUpdateWithoutTournamentInput, TeamStatsUncheckedUpdateWithoutTournamentInput>
  }

  export type TeamStatsUpdateManyWithWhereWithoutTournamentInput = {
    where: TeamStatsScalarWhereInput
    data: XOR<TeamStatsUpdateManyMutationInput, TeamStatsUncheckedUpdateManyWithoutTournamentInput>
  }

  export type TeamStatsScalarWhereInput = {
    AND?: TeamStatsScalarWhereInput | TeamStatsScalarWhereInput[]
    OR?: TeamStatsScalarWhereInput[]
    NOT?: TeamStatsScalarWhereInput | TeamStatsScalarWhereInput[]
    id?: StringFilter<"TeamStats"> | string
    teamId?: StringNullableFilter<"TeamStats"> | string | null
    kills?: IntFilter<"TeamStats"> | number
    deaths?: IntFilter<"TeamStats"> | number
    kd?: FloatFilter<"TeamStats"> | number
    position?: IntFilter<"TeamStats"> | number
    total?: IntFilter<"TeamStats"> | number
    createdAt?: DateTimeFilter<"TeamStats"> | Date | string
    tournamentId?: StringNullableFilter<"TeamStats"> | string | null
    roundId?: StringNullableFilter<"TeamStats"> | string | null
  }

  export type FixtureUpsertWithoutTournamentInput = {
    update: XOR<FixtureUpdateWithoutTournamentInput, FixtureUncheckedUpdateWithoutTournamentInput>
    create: XOR<FixtureCreateWithoutTournamentInput, FixtureUncheckedCreateWithoutTournamentInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutTournamentInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutTournamentInput, FixtureUncheckedUpdateWithoutTournamentInput>
  }

  export type FixtureUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutFixturesNestedInput
  }

  export type FixtureUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutFixturesNestedInput
  }

  export type TournamentCreateWithoutFixtureInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundCreateNestedManyWithoutTournamentInput
    round?: RoundCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsCreateNestedManyWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutFixtureInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundUncheckedCreateNestedManyWithoutTournamentInput
    round?: RoundUncheckedCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutFixtureInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutFixtureInput, TournamentUncheckedCreateWithoutFixtureInput>
  }

  export type TeamCreateWithoutFixturesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutFixturesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    teamStatsId?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutFixturesInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutFixturesInput, TeamUncheckedCreateWithoutFixturesInput>
  }

  export type TeamCreateManyFixturesInputEnvelope = {
    data: TeamCreateManyFixturesInput | TeamCreateManyFixturesInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithoutFixtureInput = {
    update: XOR<TournamentUpdateWithoutFixtureInput, TournamentUncheckedUpdateWithoutFixtureInput>
    create: XOR<TournamentCreateWithoutFixtureInput, TournamentUncheckedCreateWithoutFixtureInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutFixtureInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutFixtureInput, TournamentUncheckedUpdateWithoutFixtureInput>
  }

  export type TournamentUpdateWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUpdateManyWithoutTournamentNestedInput
    round?: RoundUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUpdateManyWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutFixtureInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUncheckedUpdateManyWithoutTournamentNestedInput
    round?: RoundUncheckedUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUncheckedUpdateManyWithoutTournamentNestedInput
  }

  export type TeamUpsertWithWhereUniqueWithoutFixturesInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutFixturesInput, TeamUncheckedUpdateWithoutFixturesInput>
    create: XOR<TeamCreateWithoutFixturesInput, TeamUncheckedCreateWithoutFixturesInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutFixturesInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutFixturesInput, TeamUncheckedUpdateWithoutFixturesInput>
  }

  export type TeamUpdateManyWithWhereWithoutFixturesInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutFixturesInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    teamNumber?: IntFilter<"Team"> | number
    fixturesId?: StringNullableFilter<"Team"> | string | null
    teamStatsId?: StringNullableFilter<"Team"> | string | null
  }

  export type TournamentCreateWithoutRoundInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutRoundInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundUncheckedCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureUncheckedCreateNestedOneWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutRoundInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutRoundInput, TournamentUncheckedCreateWithoutRoundInput>
  }

  export type TeamRoundCreateWithoutRoundInput = {
    id?: string
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutTeamRoundInput
    tournament?: TournamentCreateNestedOneWithoutTeamRoundsInput
  }

  export type TeamRoundUncheckedCreateWithoutRoundInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type TeamRoundCreateOrConnectWithoutRoundInput = {
    where: TeamRoundWhereUniqueInput
    create: XOR<TeamRoundCreateWithoutRoundInput, TeamRoundUncheckedCreateWithoutRoundInput>
  }

  export type TeamRoundCreateManyRoundInputEnvelope = {
    data: TeamRoundCreateManyRoundInput | TeamRoundCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type TeamStatsCreateWithoutRoundInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutTeamStatsInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamStatsInput
    tournament?: TournamentCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsUncheckedCreateWithoutRoundInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    tournamentId?: string | null
    team?: TeamUncheckedCreateNestedOneWithoutTeamStatsInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamStatsInput
  }

  export type TeamStatsCreateOrConnectWithoutRoundInput = {
    where: TeamStatsWhereUniqueInput
    create: XOR<TeamStatsCreateWithoutRoundInput, TeamStatsUncheckedCreateWithoutRoundInput>
  }

  export type TeamStatsCreateManyRoundInputEnvelope = {
    data: TeamStatsCreateManyRoundInput | TeamStatsCreateManyRoundInput[]
    skipDuplicates?: boolean
  }

  export type TournamentUpsertWithoutRoundInput = {
    update: XOR<TournamentUpdateWithoutRoundInput, TournamentUncheckedUpdateWithoutRoundInput>
    create: XOR<TournamentCreateWithoutRoundInput, TournamentUncheckedCreateWithoutRoundInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutRoundInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutRoundInput, TournamentUncheckedUpdateWithoutRoundInput>
  }

  export type TournamentUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUncheckedUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUncheckedUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUncheckedUpdateOneWithoutTournamentNestedInput
  }

  export type TeamRoundUpsertWithWhereUniqueWithoutRoundInput = {
    where: TeamRoundWhereUniqueInput
    update: XOR<TeamRoundUpdateWithoutRoundInput, TeamRoundUncheckedUpdateWithoutRoundInput>
    create: XOR<TeamRoundCreateWithoutRoundInput, TeamRoundUncheckedCreateWithoutRoundInput>
  }

  export type TeamRoundUpdateWithWhereUniqueWithoutRoundInput = {
    where: TeamRoundWhereUniqueInput
    data: XOR<TeamRoundUpdateWithoutRoundInput, TeamRoundUncheckedUpdateWithoutRoundInput>
  }

  export type TeamRoundUpdateManyWithWhereWithoutRoundInput = {
    where: TeamRoundScalarWhereInput
    data: XOR<TeamRoundUpdateManyMutationInput, TeamRoundUncheckedUpdateManyWithoutRoundInput>
  }

  export type TeamStatsUpsertWithWhereUniqueWithoutRoundInput = {
    where: TeamStatsWhereUniqueInput
    update: XOR<TeamStatsUpdateWithoutRoundInput, TeamStatsUncheckedUpdateWithoutRoundInput>
    create: XOR<TeamStatsCreateWithoutRoundInput, TeamStatsUncheckedCreateWithoutRoundInput>
  }

  export type TeamStatsUpdateWithWhereUniqueWithoutRoundInput = {
    where: TeamStatsWhereUniqueInput
    data: XOR<TeamStatsUpdateWithoutRoundInput, TeamStatsUncheckedUpdateWithoutRoundInput>
  }

  export type TeamStatsUpdateManyWithWhereWithoutRoundInput = {
    where: TeamStatsScalarWhereInput
    data: XOR<TeamStatsUpdateManyMutationInput, TeamStatsUncheckedUpdateManyWithoutRoundInput>
  }

  export type TeamCreateWithoutTeamRoundInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamInput
    fixtures?: FixtureCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutTeamRoundInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    fixturesId?: string | null
    teamStatsId?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamRoundInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamRoundInput, TeamUncheckedCreateWithoutTeamRoundInput>
  }

  export type RoundCreateWithoutTeamsInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutRoundInput
    teamStats?: TeamStatsCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutTeamsInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournamentId: string
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutTeamsInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutTeamsInput, RoundUncheckedCreateWithoutTeamsInput>
  }

  export type TournamentCreateWithoutTeamRoundsInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    round?: RoundCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTeamRoundsInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    round?: RoundUncheckedCreateNestedManyWithoutTournamentInput
    teamStats?: TeamStatsUncheckedCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureUncheckedCreateNestedOneWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTeamRoundsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTeamRoundsInput, TournamentUncheckedCreateWithoutTeamRoundsInput>
  }

  export type TeamUpsertWithoutTeamRoundInput = {
    update: XOR<TeamUpdateWithoutTeamRoundInput, TeamUncheckedUpdateWithoutTeamRoundInput>
    create: XOR<TeamCreateWithoutTeamRoundInput, TeamUncheckedCreateWithoutTeamRoundInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamRoundInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamRoundInput, TeamUncheckedUpdateWithoutTeamRoundInput>
  }

  export type TeamUpdateWithoutTeamRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamNestedInput
    fixtures?: FixtureUpdateOneWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    fixturesId?: NullableStringFieldUpdateOperationsInput | string | null
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type RoundUpsertWithoutTeamsInput = {
    update: XOR<RoundUpdateWithoutTeamsInput, RoundUncheckedUpdateWithoutTeamsInput>
    create: XOR<RoundCreateWithoutTeamsInput, RoundUncheckedCreateWithoutTeamsInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutTeamsInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutTeamsInput, RoundUncheckedUpdateWithoutTeamsInput>
  }

  export type RoundUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutRoundNestedInput
    teamStats?: TeamStatsUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    teamStats?: TeamStatsUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type TournamentUpsertWithoutTeamRoundsInput = {
    update: XOR<TournamentUpdateWithoutTeamRoundsInput, TournamentUncheckedUpdateWithoutTeamRoundsInput>
    create: XOR<TournamentCreateWithoutTeamRoundsInput, TournamentUncheckedCreateWithoutTeamRoundsInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTeamRoundsInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTeamRoundsInput, TournamentUncheckedUpdateWithoutTeamRoundsInput>
  }

  export type TournamentUpdateWithoutTeamRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTeamRoundsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUncheckedUpdateManyWithoutTournamentNestedInput
    teamStats?: TeamStatsUncheckedUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUncheckedUpdateOneWithoutTournamentNestedInput
  }

  export type PlayerCreateWithoutWalletInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutWalletInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
    teamId?: string | null
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutWalletInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutWalletInput, PlayerUncheckedCreateWithoutWalletInput>
  }

  export type UserCreateWithoutWalletInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    Player?: PlayerCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWalletInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    Player?: PlayerUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWalletInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
  }

  export type PlayerUpsertWithoutWalletInput = {
    update: XOR<PlayerUpdateWithoutWalletInput, PlayerUncheckedUpdateWithoutWalletInput>
    create: XOR<PlayerCreateWithoutWalletInput, PlayerUncheckedCreateWithoutWalletInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutWalletInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutWalletInput, PlayerUncheckedUpdateWithoutWalletInput>
  }

  export type PlayerUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type UserUpsertWithoutWalletInput = {
    update: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
    create: XOR<UserCreateWithoutWalletInput, UserUncheckedCreateWithoutWalletInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWalletInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWalletInput, UserUncheckedUpdateWithoutWalletInput>
  }

  export type UserUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    Player?: PlayerUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWalletInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    Player?: PlayerUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutPlayerInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpCreateNestedManyWithoutUserInput
    tokens?: TokenCreateNestedManyWithoutUserInput
    wallet?: WalletCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlayerInput = {
    id?: string
    email: string
    phone: string
    name: string
    role?: $Enums.Role
    isInternal?: boolean
    isVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    otps?: OtpUncheckedCreateNestedManyWithoutUserInput
    tokens?: TokenUncheckedCreateNestedManyWithoutUserInput
    wallet?: WalletUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlayerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
  }

  export type TeamCreateWithoutPlayersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundCreateNestedManyWithoutTeamInput
    fixtures?: FixtureCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutPlayersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    fixturesId?: string | null
    teamStatsId?: string | null
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
  }

  export type PlayerStatsCreateWithoutPlayerInput = {
    id?: string
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt?: Date | string
  }

  export type PlayerStatsUncheckedCreateWithoutPlayerInput = {
    id?: string
    matches: number
    wins: number
    deaths: number
    kills: number
    kd: number
    createdAt?: Date | string
  }

  export type PlayerStatsCreateOrConnectWithoutPlayerInput = {
    where: PlayerStatsWhereUniqueInput
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
  }

  export type WalletCreateWithoutPlayerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWalletInput
  }

  export type WalletUncheckedCreateWithoutPlayerInput = {
    id?: string
    amount: number
    createdAt?: Date | string
    userId: string
  }

  export type WalletCreateOrConnectWithoutPlayerInput = {
    where: WalletWhereUniqueInput
    create: XOR<WalletCreateWithoutPlayerInput, WalletUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTeamStatsCreateWithoutPlayerInput = {
    id?: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    team: TeamCreateNestedOneWithoutPlayerTeamStatsInput
    teamStats?: TeamStatsCreateNestedOneWithoutPlayerTeamStatsInput
  }

  export type PlayerTeamStatsUncheckedCreateWithoutPlayerInput = {
    id?: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    teamStatsId?: string | null
  }

  export type PlayerTeamStatsCreateOrConnectWithoutPlayerInput = {
    where: PlayerTeamStatsWhereUniqueInput
    create: XOR<PlayerTeamStatsCreateWithoutPlayerInput, PlayerTeamStatsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTeamStatsCreateManyPlayerInputEnvelope = {
    data: PlayerTeamStatsCreateManyPlayerInput | PlayerTeamStatsCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlayerInput = {
    update: XOR<UserUpdateWithoutPlayerInput, UserUncheckedUpdateWithoutPlayerInput>
    create: XOR<UserCreateWithoutPlayerInput, UserUncheckedCreateWithoutPlayerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlayerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlayerInput, UserUncheckedUpdateWithoutPlayerInput>
  }

  export type UserUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUpdateManyWithoutUserNestedInput
    tokens?: TokenUpdateManyWithoutUserNestedInput
    wallet?: WalletUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isInternal?: BoolFieldUpdateOperationsInput | boolean
    isVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otps?: OtpUncheckedUpdateManyWithoutUserNestedInput
    tokens?: TokenUncheckedUpdateManyWithoutUserNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutUserNestedInput
  }

  export type TeamUpsertWithoutPlayersInput = {
    update: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
    create: XOR<TeamCreateWithoutPlayersInput, TeamUncheckedCreateWithoutPlayersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayersInput, TeamUncheckedUpdateWithoutPlayersInput>
  }

  export type TeamUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUpdateManyWithoutTeamNestedInput
    fixtures?: FixtureUpdateOneWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    fixturesId?: NullableStringFieldUpdateOperationsInput | string | null
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayerStatsUpsertWithoutPlayerInput = {
    update: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerStatsCreateWithoutPlayerInput, PlayerStatsUncheckedCreateWithoutPlayerInput>
    where?: PlayerStatsWhereInput
  }

  export type PlayerStatsUpdateToOneWithWhereWithoutPlayerInput = {
    where?: PlayerStatsWhereInput
    data: XOR<PlayerStatsUpdateWithoutPlayerInput, PlayerStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerStatsUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerStatsUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    matches?: IntFieldUpdateOperationsInput | number
    wins?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kills?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WalletUpsertWithoutPlayerInput = {
    update: XOR<WalletUpdateWithoutPlayerInput, WalletUncheckedUpdateWithoutPlayerInput>
    create: XOR<WalletCreateWithoutPlayerInput, WalletUncheckedCreateWithoutPlayerInput>
    where?: WalletWhereInput
  }

  export type WalletUpdateToOneWithWhereWithoutPlayerInput = {
    where?: WalletWhereInput
    data: XOR<WalletUpdateWithoutPlayerInput, WalletUncheckedUpdateWithoutPlayerInput>
  }

  export type WalletUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWalletNestedInput
  }

  export type WalletUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerTeamStatsUpsertWithWhereUniqueWithoutPlayerInput = {
    where: PlayerTeamStatsWhereUniqueInput
    update: XOR<PlayerTeamStatsUpdateWithoutPlayerInput, PlayerTeamStatsUncheckedUpdateWithoutPlayerInput>
    create: XOR<PlayerTeamStatsCreateWithoutPlayerInput, PlayerTeamStatsUncheckedCreateWithoutPlayerInput>
  }

  export type PlayerTeamStatsUpdateWithWhereUniqueWithoutPlayerInput = {
    where: PlayerTeamStatsWhereUniqueInput
    data: XOR<PlayerTeamStatsUpdateWithoutPlayerInput, PlayerTeamStatsUncheckedUpdateWithoutPlayerInput>
  }

  export type PlayerTeamStatsUpdateManyWithWhereWithoutPlayerInput = {
    where: PlayerTeamStatsScalarWhereInput
    data: XOR<PlayerTeamStatsUpdateManyMutationInput, PlayerTeamStatsUncheckedUpdateManyWithoutPlayerInput>
  }

  export type PlayerTeamStatsScalarWhereInput = {
    AND?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
    OR?: PlayerTeamStatsScalarWhereInput[]
    NOT?: PlayerTeamStatsScalarWhereInput | PlayerTeamStatsScalarWhereInput[]
    id?: StringFilter<"PlayerTeamStats"> | string
    playerId?: StringFilter<"PlayerTeamStats"> | string
    teamId?: StringFilter<"PlayerTeamStats"> | string
    kills?: IntFilter<"PlayerTeamStats"> | number
    deaths?: IntFilter<"PlayerTeamStats"> | number
    kd?: FloatFilter<"PlayerTeamStats"> | number
    position?: IntFilter<"PlayerTeamStats"> | number
    total?: IntFilter<"PlayerTeamStats"> | number
    createdAt?: DateTimeFilter<"PlayerTeamStats"> | Date | string
    teamStatsId?: StringNullableFilter<"PlayerTeamStats"> | string | null
  }

  export type PlayerCreateWithoutPlayerStatsInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
    wallet?: WalletCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutPlayerStatsInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
    teamId?: string | null
    wallet?: WalletUncheckedCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutPlayerStatsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPlayerStatsInput, PlayerUncheckedCreateWithoutPlayerStatsInput>
  }

  export type PlayerUpsertWithoutPlayerStatsInput = {
    update: XOR<PlayerUpdateWithoutPlayerStatsInput, PlayerUncheckedUpdateWithoutPlayerStatsInput>
    create: XOR<PlayerCreateWithoutPlayerStatsInput, PlayerUncheckedCreateWithoutPlayerStatsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPlayerStatsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPlayerStatsInput, PlayerUncheckedUpdateWithoutPlayerStatsInput>
  }

  export type PlayerUpdateWithoutPlayerStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
    wallet?: WalletUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPlayerStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    wallet?: WalletUncheckedUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateWithoutTeamInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    wallet?: WalletCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    wallet?: WalletUncheckedCreateNestedOneWithoutPlayerInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerCreateManyTeamInputEnvelope = {
    data: PlayerCreateManyTeamInput | PlayerCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamStatsCreateWithoutTeamInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamStatsInput
    tournament?: TournamentCreateNestedOneWithoutTeamStatsInput
    round?: RoundCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsUncheckedCreateWithoutTeamInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    tournamentId?: string | null
    roundId?: string | null
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamStatsInput
  }

  export type TeamStatsCreateOrConnectWithoutTeamInput = {
    where: TeamStatsWhereUniqueInput
    create: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerTeamStatsCreateWithoutTeamInput = {
    id?: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutPlayerTeamStatsInput
    teamStats?: TeamStatsCreateNestedOneWithoutPlayerTeamStatsInput
  }

  export type PlayerTeamStatsUncheckedCreateWithoutTeamInput = {
    id?: string
    playerId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    teamStatsId?: string | null
  }

  export type PlayerTeamStatsCreateOrConnectWithoutTeamInput = {
    where: PlayerTeamStatsWhereUniqueInput
    create: XOR<PlayerTeamStatsCreateWithoutTeamInput, PlayerTeamStatsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerTeamStatsCreateManyTeamInputEnvelope = {
    data: PlayerTeamStatsCreateManyTeamInput | PlayerTeamStatsCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type TeamRoundCreateWithoutTeamInput = {
    id?: string
    createdAt?: Date | string
    round: RoundCreateNestedOneWithoutTeamsInput
    tournament?: TournamentCreateNestedOneWithoutTeamRoundsInput
  }

  export type TeamRoundUncheckedCreateWithoutTeamInput = {
    id?: string
    roundId: string
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type TeamRoundCreateOrConnectWithoutTeamInput = {
    where: TeamRoundWhereUniqueInput
    create: XOR<TeamRoundCreateWithoutTeamInput, TeamRoundUncheckedCreateWithoutTeamInput>
  }

  export type TeamRoundCreateManyTeamInputEnvelope = {
    data: TeamRoundCreateManyTeamInput | TeamRoundCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type FixtureCreateWithoutTeamsInput = {
    id?: string
    createdAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutFixtureInput
  }

  export type FixtureUncheckedCreateWithoutTeamsInput = {
    id?: string
    tournamentId: string
    createdAt?: Date | string
  }

  export type FixtureCreateOrConnectWithoutTeamsInput = {
    where: FixtureWhereUniqueInput
    create: XOR<FixtureCreateWithoutTeamsInput, FixtureUncheckedCreateWithoutTeamsInput>
  }

  export type PlayerUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    update: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerCreateWithoutTeamInput, PlayerUncheckedCreateWithoutTeamInput>
  }

  export type PlayerUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerWhereUniqueInput
    data: XOR<PlayerUpdateWithoutTeamInput, PlayerUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerScalarWhereInput
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyWithoutTeamInput>
  }

  export type PlayerScalarWhereInput = {
    AND?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    OR?: PlayerScalarWhereInput[]
    NOT?: PlayerScalarWhereInput | PlayerScalarWhereInput[]
    id?: StringFilter<"Player"> | string
    name?: StringFilter<"Player"> | string
    balance?: IntFilter<"Player"> | number
    category?: EnumCategoryFilter<"Player"> | $Enums.Category
    userId?: StringFilter<"Player"> | string
    createdAt?: DateTimeFilter<"Player"> | Date | string
    teamId?: StringNullableFilter<"Player"> | string | null
  }

  export type TeamStatsUpsertWithoutTeamInput = {
    update: XOR<TeamStatsUpdateWithoutTeamInput, TeamStatsUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamStatsCreateWithoutTeamInput, TeamStatsUncheckedCreateWithoutTeamInput>
    where?: TeamStatsWhereInput
  }

  export type TeamStatsUpdateToOneWithWhereWithoutTeamInput = {
    where?: TeamStatsWhereInput
    data: XOR<TeamStatsUpdateWithoutTeamInput, TeamStatsUncheckedUpdateWithoutTeamInput>
  }

  export type TeamStatsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamStatsNestedInput
    tournament?: TournamentUpdateOneWithoutTeamStatsNestedInput
    round?: RoundUpdateOneWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: NullableStringFieldUpdateOperationsInput | string | null
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsNestedInput
  }

  export type PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamInput = {
    where: PlayerTeamStatsWhereUniqueInput
    update: XOR<PlayerTeamStatsUpdateWithoutTeamInput, PlayerTeamStatsUncheckedUpdateWithoutTeamInput>
    create: XOR<PlayerTeamStatsCreateWithoutTeamInput, PlayerTeamStatsUncheckedCreateWithoutTeamInput>
  }

  export type PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamInput = {
    where: PlayerTeamStatsWhereUniqueInput
    data: XOR<PlayerTeamStatsUpdateWithoutTeamInput, PlayerTeamStatsUncheckedUpdateWithoutTeamInput>
  }

  export type PlayerTeamStatsUpdateManyWithWhereWithoutTeamInput = {
    where: PlayerTeamStatsScalarWhereInput
    data: XOR<PlayerTeamStatsUpdateManyMutationInput, PlayerTeamStatsUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamRoundUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamRoundWhereUniqueInput
    update: XOR<TeamRoundUpdateWithoutTeamInput, TeamRoundUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamRoundCreateWithoutTeamInput, TeamRoundUncheckedCreateWithoutTeamInput>
  }

  export type TeamRoundUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamRoundWhereUniqueInput
    data: XOR<TeamRoundUpdateWithoutTeamInput, TeamRoundUncheckedUpdateWithoutTeamInput>
  }

  export type TeamRoundUpdateManyWithWhereWithoutTeamInput = {
    where: TeamRoundScalarWhereInput
    data: XOR<TeamRoundUpdateManyMutationInput, TeamRoundUncheckedUpdateManyWithoutTeamInput>
  }

  export type FixtureUpsertWithoutTeamsInput = {
    update: XOR<FixtureUpdateWithoutTeamsInput, FixtureUncheckedUpdateWithoutTeamsInput>
    create: XOR<FixtureCreateWithoutTeamsInput, FixtureUncheckedCreateWithoutTeamsInput>
    where?: FixtureWhereInput
  }

  export type FixtureUpdateToOneWithWhereWithoutTeamsInput = {
    where?: FixtureWhereInput
    data: XOR<FixtureUpdateWithoutTeamsInput, FixtureUncheckedUpdateWithoutTeamsInput>
  }

  export type FixtureUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutFixtureNestedInput
  }

  export type FixtureUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateWithoutTeamStatsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    players?: PlayerCreateNestedManyWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundCreateNestedManyWithoutTeamInput
    fixtures?: FixtureCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutTeamStatsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    fixturesId?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    playerTeamStats?: PlayerTeamStatsUncheckedCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutTeamStatsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
  }

  export type PlayerTeamStatsCreateWithoutTeamStatsInput = {
    id?: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    player: PlayerCreateNestedOneWithoutPlayerTeamStatsInput
    team: TeamCreateNestedOneWithoutPlayerTeamStatsInput
  }

  export type PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput = {
    id?: string
    playerId: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
  }

  export type PlayerTeamStatsCreateOrConnectWithoutTeamStatsInput = {
    where: PlayerTeamStatsWhereUniqueInput
    create: XOR<PlayerTeamStatsCreateWithoutTeamStatsInput, PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput>
  }

  export type PlayerTeamStatsCreateManyTeamStatsInputEnvelope = {
    data: PlayerTeamStatsCreateManyTeamStatsInput | PlayerTeamStatsCreateManyTeamStatsInput[]
    skipDuplicates?: boolean
  }

  export type TournamentCreateWithoutTeamStatsInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundCreateNestedManyWithoutTournamentInput
    round?: RoundCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureCreateNestedOneWithoutTournamentInput
  }

  export type TournamentUncheckedCreateWithoutTeamStatsInput = {
    id?: string
    name: string
    fee: number
    createdAt?: Date | string
    teamRounds?: TeamRoundUncheckedCreateNestedManyWithoutTournamentInput
    round?: RoundUncheckedCreateNestedManyWithoutTournamentInput
    Fixture?: FixtureUncheckedCreateNestedOneWithoutTournamentInput
  }

  export type TournamentCreateOrConnectWithoutTeamStatsInput = {
    where: TournamentWhereUniqueInput
    create: XOR<TournamentCreateWithoutTeamStatsInput, TournamentUncheckedCreateWithoutTeamStatsInput>
  }

  export type RoundCreateWithoutTeamStatsInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournament: TournamentCreateNestedOneWithoutRoundInput
    teams?: TeamRoundCreateNestedManyWithoutRoundInput
  }

  export type RoundUncheckedCreateWithoutTeamStatsInput = {
    id?: string
    number: number
    createdAt?: Date | string
    tournamentId: string
    teams?: TeamRoundUncheckedCreateNestedManyWithoutRoundInput
  }

  export type RoundCreateOrConnectWithoutTeamStatsInput = {
    where: RoundWhereUniqueInput
    create: XOR<RoundCreateWithoutTeamStatsInput, RoundUncheckedCreateWithoutTeamStatsInput>
  }

  export type TeamUpsertWithoutTeamStatsInput = {
    update: XOR<TeamUpdateWithoutTeamStatsInput, TeamUncheckedUpdateWithoutTeamStatsInput>
    create: XOR<TeamCreateWithoutTeamStatsInput, TeamUncheckedCreateWithoutTeamStatsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutTeamStatsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutTeamStatsInput, TeamUncheckedUpdateWithoutTeamStatsInput>
  }

  export type TeamUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    players?: PlayerUpdateManyWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUpdateManyWithoutTeamNestedInput
    fixtures?: FixtureUpdateOneWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    fixturesId?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type PlayerTeamStatsUpsertWithWhereUniqueWithoutTeamStatsInput = {
    where: PlayerTeamStatsWhereUniqueInput
    update: XOR<PlayerTeamStatsUpdateWithoutTeamStatsInput, PlayerTeamStatsUncheckedUpdateWithoutTeamStatsInput>
    create: XOR<PlayerTeamStatsCreateWithoutTeamStatsInput, PlayerTeamStatsUncheckedCreateWithoutTeamStatsInput>
  }

  export type PlayerTeamStatsUpdateWithWhereUniqueWithoutTeamStatsInput = {
    where: PlayerTeamStatsWhereUniqueInput
    data: XOR<PlayerTeamStatsUpdateWithoutTeamStatsInput, PlayerTeamStatsUncheckedUpdateWithoutTeamStatsInput>
  }

  export type PlayerTeamStatsUpdateManyWithWhereWithoutTeamStatsInput = {
    where: PlayerTeamStatsScalarWhereInput
    data: XOR<PlayerTeamStatsUpdateManyMutationInput, PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsInput>
  }

  export type TournamentUpsertWithoutTeamStatsInput = {
    update: XOR<TournamentUpdateWithoutTeamStatsInput, TournamentUncheckedUpdateWithoutTeamStatsInput>
    create: XOR<TournamentCreateWithoutTeamStatsInput, TournamentUncheckedCreateWithoutTeamStatsInput>
    where?: TournamentWhereInput
  }

  export type TournamentUpdateToOneWithWhereWithoutTeamStatsInput = {
    where?: TournamentWhereInput
    data: XOR<TournamentUpdateWithoutTeamStatsInput, TournamentUncheckedUpdateWithoutTeamStatsInput>
  }

  export type TournamentUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUpdateManyWithoutTournamentNestedInput
    round?: RoundUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUpdateOneWithoutTournamentNestedInput
  }

  export type TournamentUncheckedUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    fee?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamRounds?: TeamRoundUncheckedUpdateManyWithoutTournamentNestedInput
    round?: RoundUncheckedUpdateManyWithoutTournamentNestedInput
    Fixture?: FixtureUncheckedUpdateOneWithoutTournamentNestedInput
  }

  export type RoundUpsertWithoutTeamStatsInput = {
    update: XOR<RoundUpdateWithoutTeamStatsInput, RoundUncheckedUpdateWithoutTeamStatsInput>
    create: XOR<RoundCreateWithoutTeamStatsInput, RoundUncheckedCreateWithoutTeamStatsInput>
    where?: RoundWhereInput
  }

  export type RoundUpdateToOneWithWhereWithoutTeamStatsInput = {
    where?: RoundWhereInput
    data: XOR<RoundUpdateWithoutTeamStatsInput, RoundUncheckedUpdateWithoutTeamStatsInput>
  }

  export type RoundUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournament?: TournamentUpdateOneRequiredWithoutRoundNestedInput
    teams?: TeamRoundUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: StringFieldUpdateOperationsInput | string
    teams?: TeamRoundUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type PlayerCreateWithoutPlayerTeamStatsInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPlayerInput
    team?: TeamCreateNestedOneWithoutPlayersInput
    playerStats?: PlayerStatsCreateNestedOneWithoutPlayerInput
    wallet?: WalletCreateNestedOneWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutPlayerTeamStatsInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
    teamId?: string | null
    playerStats?: PlayerStatsUncheckedCreateNestedOneWithoutPlayerInput
    wallet?: WalletUncheckedCreateNestedOneWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutPlayerTeamStatsInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutPlayerTeamStatsInput, PlayerUncheckedCreateWithoutPlayerTeamStatsInput>
  }

  export type TeamCreateWithoutPlayerTeamStatsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    players?: PlayerCreateNestedManyWithoutTeamInput
    teamStats?: TeamStatsCreateNestedOneWithoutTeamInput
    teamRound?: TeamRoundCreateNestedManyWithoutTeamInput
    fixtures?: FixtureCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutPlayerTeamStatsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    fixturesId?: string | null
    teamStatsId?: string | null
    players?: PlayerUncheckedCreateNestedManyWithoutTeamInput
    teamRound?: TeamRoundUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutPlayerTeamStatsInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutPlayerTeamStatsInput, TeamUncheckedCreateWithoutPlayerTeamStatsInput>
  }

  export type TeamStatsCreateWithoutPlayerTeamStatsInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    team?: TeamCreateNestedOneWithoutTeamStatsInput
    tournament?: TournamentCreateNestedOneWithoutTeamStatsInput
    round?: RoundCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsUncheckedCreateWithoutPlayerTeamStatsInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    tournamentId?: string | null
    roundId?: string | null
    team?: TeamUncheckedCreateNestedOneWithoutTeamStatsInput
  }

  export type TeamStatsCreateOrConnectWithoutPlayerTeamStatsInput = {
    where: TeamStatsWhereUniqueInput
    create: XOR<TeamStatsCreateWithoutPlayerTeamStatsInput, TeamStatsUncheckedCreateWithoutPlayerTeamStatsInput>
  }

  export type PlayerUpsertWithoutPlayerTeamStatsInput = {
    update: XOR<PlayerUpdateWithoutPlayerTeamStatsInput, PlayerUncheckedUpdateWithoutPlayerTeamStatsInput>
    create: XOR<PlayerCreateWithoutPlayerTeamStatsInput, PlayerUncheckedCreateWithoutPlayerTeamStatsInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutPlayerTeamStatsInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutPlayerTeamStatsInput, PlayerUncheckedUpdateWithoutPlayerTeamStatsInput>
  }

  export type PlayerUpdateWithoutPlayerTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    team?: TeamUpdateOneWithoutPlayersNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUpdateOneWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutPlayerTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutPlayerNestedInput
  }

  export type TeamUpsertWithoutPlayerTeamStatsInput = {
    update: XOR<TeamUpdateWithoutPlayerTeamStatsInput, TeamUncheckedUpdateWithoutPlayerTeamStatsInput>
    create: XOR<TeamCreateWithoutPlayerTeamStatsInput, TeamUncheckedCreateWithoutPlayerTeamStatsInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutPlayerTeamStatsInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutPlayerTeamStatsInput, TeamUncheckedUpdateWithoutPlayerTeamStatsInput>
  }

  export type TeamUpdateWithoutPlayerTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
    teamRound?: TeamRoundUpdateManyWithoutTeamNestedInput
    fixtures?: FixtureUpdateOneWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutPlayerTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    fixturesId?: NullableStringFieldUpdateOperationsInput | string | null
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamStatsUpsertWithoutPlayerTeamStatsInput = {
    update: XOR<TeamStatsUpdateWithoutPlayerTeamStatsInput, TeamStatsUncheckedUpdateWithoutPlayerTeamStatsInput>
    create: XOR<TeamStatsCreateWithoutPlayerTeamStatsInput, TeamStatsUncheckedCreateWithoutPlayerTeamStatsInput>
    where?: TeamStatsWhereInput
  }

  export type TeamStatsUpdateToOneWithWhereWithoutPlayerTeamStatsInput = {
    where?: TeamStatsWhereInput
    data: XOR<TeamStatsUpdateWithoutPlayerTeamStatsInput, TeamStatsUncheckedUpdateWithoutPlayerTeamStatsInput>
  }

  export type TeamStatsUpdateWithoutPlayerTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutTeamStatsNestedInput
    tournament?: TournamentUpdateOneWithoutTeamStatsNestedInput
    round?: RoundUpdateOneWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateWithoutPlayerTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    roundId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUncheckedUpdateOneWithoutTeamStatsNestedInput
  }

  export type OtpCreateManyUserInput = {
    id?: string
    otp: string
    isOtpUsed?: boolean
    otpCreatedAt?: Date | string
    otpExpiresAt: Date | string
    otpVerifiedAt?: Date | string | null
  }

  export type TokenCreateManyUserInput = {
    id?: string
    token: string
    expiresAt: Date | string
    createdAt?: Date | string
    revoked?: boolean
    revokedAt?: Date | string | null
    ipAddress?: string | null
    userAgent?: string | null
  }

  export type OtpUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OtpUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    isOtpUsed?: BoolFieldUpdateOperationsInput | boolean
    otpCreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpExpiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    otpVerifiedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TokenUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TokenUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    revoked?: BoolFieldUpdateOperationsInput | boolean
    revokedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamRoundCreateManyTournamentInput = {
    id?: string
    teamId: string
    roundId: string
    createdAt?: Date | string
  }

  export type RoundCreateManyTournamentInput = {
    id?: string
    number: number
    createdAt?: Date | string
  }

  export type TeamStatsCreateManyTournamentInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    roundId?: string | null
  }

  export type TeamRoundUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutTeamRoundNestedInput
    round?: RoundUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamRoundUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamRoundUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoundUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamRoundUpdateManyWithoutRoundNestedInput
    teamStats?: TeamStatsUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamRoundUncheckedUpdateManyWithoutRoundNestedInput
    teamStats?: TeamStatsUncheckedUpdateManyWithoutRoundNestedInput
  }

  export type RoundUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamStatsUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutTeamStatsNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamStatsNestedInput
    round?: RoundUpdateOneWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUncheckedUpdateOneWithoutTeamStatsNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateManyWithoutTournamentInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roundId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamCreateManyFixturesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    teamNumber: number
    teamStatsId?: string | null
  }

  export type TeamUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    players?: PlayerUpdateManyWithoutTeamNestedInput
    teamStats?: TeamStatsUpdateOneWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
    players?: PlayerUncheckedUpdateManyWithoutTeamNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamNestedInput
    teamRound?: TeamRoundUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutFixturesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamNumber?: IntFieldUpdateOperationsInput | number
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamRoundCreateManyRoundInput = {
    id?: string
    teamId: string
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type TeamStatsCreateManyRoundInput = {
    id?: string
    teamId?: string | null
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type TeamRoundUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutTeamRoundNestedInput
    tournament?: TournamentUpdateOneWithoutTeamRoundsNestedInput
  }

  export type TeamRoundUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamRoundUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamStatsUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneWithoutTeamStatsNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutTeamStatsNestedInput
    tournament?: TournamentUpdateOneWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
    team?: TeamUncheckedUpdateOneWithoutTeamStatsNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsNestedInput
  }

  export type TeamStatsUncheckedUpdateManyWithoutRoundInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: NullableStringFieldUpdateOperationsInput | string | null
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTeamStatsCreateManyPlayerInput = {
    id?: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    teamStatsId?: string | null
  }

  export type PlayerTeamStatsUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutPlayerTeamStatsNestedInput
    teamStats?: TeamStatsUpdateOneWithoutPlayerTeamStatsNestedInput
  }

  export type PlayerTeamStatsUncheckedUpdateWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTeamStatsUncheckedUpdateManyWithoutPlayerInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerCreateManyTeamInput = {
    id?: string
    name: string
    balance: number
    category?: $Enums.Category
    userId: string
    createdAt?: Date | string
  }

  export type PlayerTeamStatsCreateManyTeamInput = {
    id?: string
    playerId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
    teamStatsId?: string | null
  }

  export type TeamRoundCreateManyTeamInput = {
    id?: string
    roundId: string
    createdAt?: Date | string
    tournamentId?: string | null
  }

  export type PlayerUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPlayerNestedInput
    playerStats?: PlayerStatsUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    playerStats?: PlayerStatsUncheckedUpdateOneWithoutPlayerNestedInput
    wallet?: WalletUncheckedUpdateOneWithoutPlayerNestedInput
    playerTeamStats?: PlayerTeamStatsUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    balance?: IntFieldUpdateOperationsInput | number
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTeamStatsUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutPlayerTeamStatsNestedInput
    teamStats?: TeamStatsUpdateOneWithoutPlayerTeamStatsNestedInput
  }

  export type PlayerTeamStatsUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTeamStatsUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teamStatsId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamRoundUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    round?: RoundUpdateOneRequiredWithoutTeamsNestedInput
    tournament?: TournamentUpdateOneWithoutTeamRoundsNestedInput
  }

  export type TeamRoundUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamRoundUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    roundId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tournamentId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlayerTeamStatsCreateManyTeamStatsInput = {
    id?: string
    playerId: string
    teamId: string
    kills: number
    deaths: number
    kd: number
    position: number
    total: number
    createdAt?: Date | string
  }

  export type PlayerTeamStatsUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutPlayerTeamStatsNestedInput
    team?: TeamUpdateOneRequiredWithoutPlayerTeamStatsNestedInput
  }

  export type PlayerTeamStatsUncheckedUpdateWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerTeamStatsUncheckedUpdateManyWithoutTeamStatsInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    kills?: IntFieldUpdateOperationsInput | number
    deaths?: IntFieldUpdateOperationsInput | number
    kd?: FloatFieldUpdateOperationsInput | number
    position?: IntFieldUpdateOperationsInput | number
    total?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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