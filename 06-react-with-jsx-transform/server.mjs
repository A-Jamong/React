import liveServer from "live-server";

const params = {
  host: "localhost",
  port: 3000,
  open: false,
  mount: [
    ["/", "./public"],
    ["/icons", "./public/icons"],
    ["/avatars", "./public/avatars"],
  ],
};

liveServer.start(params);
