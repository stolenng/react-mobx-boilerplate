import { rest } from "msw";
import todosRoutes from "./todos";

export const handlers = [
  rest.post("/auth/login", (req, res, ctx) => {
    // @ts-ignore
    const { username } = req.body;
    return res(
      ctx.status(200),
      ctx.json({
        data: {
          username: username || "stolenng",
          token: "XXXX",
        },
      })
    );
  }),
  ...todosRoutes,
];
