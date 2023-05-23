import CreateProjectDto from "./dtos/CreateProject.dto";
import {
  findProject,
  findallProjects,
  insertProject,
} from "./projects.repository";

export const createProjectService = async (body: CreateProjectDto, res) => {
  const { name, description } = body;
  try {
    const project = await findProject(name);

    //TODO: CHECK IF IT ALREADY EXISTS
    if (project)
      return res
        .status(400)
        .json({ errors: "There is a project with the same name already." });

    const newProject = await insertProject(body);
    res.status(201).json({ data: newProject });
  } catch (error) {}
};

export const getAllProjectService = async (res) => {
  const projects = await findallProjects();
  res.status(200).json({ data: projects });
};
