import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProjectItem from "../components/ProjectItem";

const project = {
  id: 1,
  name: "Reciplease",
  about: "A recipe tracking app",
  technologies: ["Rails", "Bootstrap CSS"],
};

test("renders a <span> for each technology passed in as a prop", () => {
  render(
    <ProjectItem
      name={project.name}
      about={project.about}
      technologies={project.technologies}
    />
  );

  for (const technology of project.technologies) {
    const span = screen.queryByText(technology);

    // Add some error handling to debug the issue
    if (!span) {
      console.error(`The <span> for technology "${technology}" was not found.`);
      screen.debug();
    }

    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  }
});
