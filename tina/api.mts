import { config } from "dotenv";
import express, { Router } from "express";
import cors from "cors";
import { createMediaHandler } from "next-tinacms-cloudinary/dist/handlers.js";
import { exit } from "node:process";

const envResult = config({ processEnv: {} });
if (!envResult.parsed) {
  console.error({ error: envResult.error }, "Unable to load .env file");
  exit(1);
}

const app = express();
app.use(cors());

const mediaHandler = createMediaHandler({
  cloud_name: envResult.parsed.CLOUDINARY_CLOUD_NAME || "",
  api_key: envResult.parsed.CLOUDINARY_API_KEY || "",
  api_secret: envResult.parsed.CLOUDINARY_API_SECRET || "",
  authorized: async () => {
    return true;
  },
});

const router = Router();
router.get("/cloudinary/media", mediaHandler);
router.post("/cloudinary/media", mediaHandler);
router.delete("/cloudinary/media/:media", (req: any, res: any) => {
  req.query.media = ["media", req.params.media];
  return mediaHandler(req, res);
});

app.use("/api/", router);

const port = 1234;
app.listen(port, (error) => {
  if (error) {
    console.error({ error });
  }

  console.log(`Server is listening on ${port}`);
});
