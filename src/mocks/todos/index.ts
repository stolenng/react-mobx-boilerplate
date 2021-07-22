import { rest } from "msw";

let idCounter = 0;

const getNextId = () => idCounter++;

const todosRoutes: any[] = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        data: [
          {
            id: getNextId(),
            text: "Share The Boilerplate!",
            isDone: false,
          },
          {
            id: getNextId(),
            text: `Don't be shy and give us a star! :)`,
            isDone: false,
          },
        ],
      })
    );
  }),
  rest.post("/todos", (req, res, ctx) => {
    const text = req.body;

    return res(
      ctx.status(200),
      ctx.json({
        data: {
          id: getNextId(),
          text,
          isDone: false,
        },
      })
    );
  }),
  rest.put("/todos/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.delete("/todos/:id", (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];

export default todosRoutes;
