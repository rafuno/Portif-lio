import React from "react";
import { getProjects, cardProps } from "../../services";

const Projects: React.FC = () => {
  const [project, setProject] = React.useState<cardProps>();
  const idade = new Date();
  console.log(idade);

  const handleGetProjects = async () => {
    try {
      const result = await getProjects();
      console.log(result);

      setProject(result);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    handleGetProjects();
  }, []);

  return <>{console.log(project)}</>;
};

export default Projects;
