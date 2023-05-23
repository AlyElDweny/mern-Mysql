import { dbConn } from "../../data-source";
import { Project } from "../../entity/Project";
import CreateProjectDto from "./dtos/CreateProject.dto";

const projectRepo = dbConn.getRepository(Project);

export const findallProjects = async () => {
  return await projectRepo.find();
};

export const findProject = async (name: string) => {
  return await projectRepo.findOneBy({ name });
};

export const insertProject = async (body: CreateProjectDto) => {
  const project = new Project();
  project.name = body.name;
  project.description = body.description;

  return await projectRepo.save(project);
};
