import req from "supertest";
import server from "./server";
test("[GET] /", async () => {
  const res = await req(server).get("/xpto");
  expect(res.body).toEqual([{msg: "test"}]);
});