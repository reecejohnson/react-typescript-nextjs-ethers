import http, { IncomingMessage, ServerResponse } from "http";
import next from "next";

module.exports = async () => {
  const app = next({ dev: true });
  const handleNextRequests = app.getRequestHandler();
  await app.prepare();

  const customServer = new http.Server(async (req: IncomingMessage, res: ServerResponse) => {
    return handleNextRequests(req, res);
  });

  await new Promise<void>((resolve) => {
    customServer.listen(3000, () => {
      console.log("App is running on port: 3000");
      resolve();
    });
  });
};
