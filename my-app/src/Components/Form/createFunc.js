import axios from "axios";

export default async function createProject(payload, projects, setProjects) {
  try {
    const { name, description } = payload;
    const res = await axios({
      method: "post",
      url: "http://localhost:4000/apis/projects/",
      data: {
        name,
        description,
      },
    });
    setProjects([...projects, res.data.data]);
  } catch (error) {
    console.error(error);
  }
}
