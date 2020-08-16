import express from "express";
import routes from "../routes";
import {
  videoDetail,
  videos,
  editVideo,
  upload,
  deleteVideo,
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.videoDetail, videoDetail);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;
