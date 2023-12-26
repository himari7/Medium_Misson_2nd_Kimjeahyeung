/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/v1/members/logout": {
    /** 로그아웃 */
    post: operations["logout"];
  };
  "/api/v1/members/login": {
    /** 로그인, 로그인 성공시 accessToken, refreshToken 쿠키 설정 */
    post: operations["login"];
  };
  "/api/v1/posts": {
    /** 글 리스트 */
    get: operations["getItems"];
  };
  "/api/v1/posts/mine": {
    /** 내 글 리스트 */
    get: operations["getMine"];
  };
  "/api/v1/members/me": {
    /** 내 정보 */
    get: operations["getMe"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Empty: Record<string, never>;
    RsDataEmpty: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["Empty"];
      success: boolean;
      fail: boolean;
    };
    LoginRequestBody: {
      username: string;
      password: string;
    };
    LoginResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    MemberDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      username: string;
      authorities: string[];
    };
    RsDataLoginResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["LoginResponseBody"];
      success: boolean;
      fail: boolean;
    };
    GetItemsResponseBody: {
      items: components["schemas"]["PostDto"][];
    };
    PostDto: {
      /** Format: int64 */
      id: number;
      /** Format: date-time */
      createDate: string;
      /** Format: date-time */
      modifyDate: string;
      /** Format: int64 */
      authorId: number;
      authorUsername: string;
      title: string;
      body: string;
    };
    RsDataGetItemsResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetItemsResponseBody"];
      success: boolean;
      fail: boolean;
    };
    GetMineResponseBody: {
      items: components["schemas"]["PostDto"][];
    };
    RsDataGetMineResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["GetMineResponseBody"];
      success: boolean;
      fail: boolean;
    };
    MeResponseBody: {
      item: components["schemas"]["MemberDto"];
    };
    RsDataMeResponseBody: {
      resultCode: string;
      /** Format: int32 */
      statusCode: number;
      msg: string;
      data: components["schemas"]["MeResponseBody"];
      success: boolean;
      fail: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  /** 로그아웃 */
  logout: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataEmpty"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 로그인, 로그인 성공시 accessToken, refreshToken 쿠키 설정 */
  login: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequestBody"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataLoginResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 글 리스트 */
  getItems: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetItemsResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 내 글 리스트 */
  getMine: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataGetMineResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
  /** 내 정보 */
  getMe: {
    responses: {
      /** @description OK */
      200: {
        content: {
          "application/json": components["schemas"]["RsDataMeResponseBody"];
        };
      };
      /** @description Internal Server Error */
      500: {
        content: {
          "*/*": components["schemas"]["RsDataEmpty"];
        };
      };
    };
  };
}
