import { graph, config } from "@grafbase/sdk";

const g = graph.Standalone();

const User = g.type("User", {
  name: g.string(),
  email: g.string(),
  avatarUrl: g.url(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  description: g.string().optional(),
  projects: g.ref("Project"),
});

const Project = g.type("Project", {
  image: g.url(),
  title: g.string(),
  githubUrl: g.url(),
  category: g.string(),
  liveSiteUrl: g.url(),
  description: g.string(),
  createdBy: g.ref("User").list().optional(),
});

export default config({
  graph: g,
  auth: {
    rules: (rules) => rules.public(),
  },
});
