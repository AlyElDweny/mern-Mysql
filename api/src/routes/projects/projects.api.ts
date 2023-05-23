import { Request, Response, Router } from "express";

import CreateProjectDto from "./dtos/CreateProject.dto";
import { createProjectService, getAllProjectService } from "./projects.service";

const createProject = async (req: Request, res: Response) => {
  // TODO: module.api should deal with auth within a normal api

  const body: CreateProjectDto = req.body;

  // calling service
  await createProjectService(body, res);
};

const getAllProjects = async (req: Request, res: Response) => {
  await getAllProjectService(res);
};

const router = Router();

router.post("/", createProject);
router.get("/", getAllProjects);

export default router;
