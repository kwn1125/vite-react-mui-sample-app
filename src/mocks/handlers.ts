import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://example.com/users", () => {
    return HttpResponse.json([
      {
        id: 1,
        name: "Lionel Messi",
        email: "lionel.messi@example.com",
      },
      {
        id: 2,
        name: "Cristiano Ronaldo",
        email: "cristiano.ronaldo@example.com",
      },
    ]);
  }),
];
