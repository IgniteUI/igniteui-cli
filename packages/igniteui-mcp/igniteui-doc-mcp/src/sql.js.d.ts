declare module "sql.js" {
  interface Database {
    run(sql: string, params?: any): Database;
    exec(sql: string): QueryExecResult[];
    prepare(sql: string): Statement;
    close(): void;
  }

  interface Statement {
    bind(params?: Record<string, any> | any[]): boolean;
    step(): boolean;
    getAsObject(params?: Record<string, any>): Record<string, unknown>;
    free(): boolean;
  }

  interface QueryExecResult {
    columns: string[];
    values: any[][];
  }

  interface SqlJsStatic {
    Database: new (data?: ArrayLike<number> | Buffer | null) => Database;
  }

  interface InitSqlJsOptions {
    wasmBinary?: ArrayBuffer;
    locateFile?: (filename: string) => string;
  }

  export default function initSqlJs(options?: InitSqlJsOptions): Promise<SqlJsStatic>;
  export type { Database, Statement, QueryExecResult, SqlJsStatic };
}
