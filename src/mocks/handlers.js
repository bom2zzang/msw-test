// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }

    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
  rest.get("/commonCode", (req, res, ctx) => {
    // error handling example
    const errorCode = req.url.searchParams.get("error_code");
    if (errorCode) {
      return res(ctx.status(errorCode));
    }
    return res(
      ctx.status(200), // rest api status code
      ctx.delay(1000), // api delay time
      ctx.json({
        items: [
          { code: "code1", value: "111" },
          { code: "code2", value: "222" },
          { code: "code3", value: "333" },
        ],
      })
    );
  }),
];
