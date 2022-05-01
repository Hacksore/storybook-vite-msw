import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../App";
import { rest } from "msw";

export default {
  title: "Component/App",
  component: App,
} as ComponentMeta<typeof App>;

export const Template: ComponentStory<typeof App> = () => <App />;
Template.parameters = {
  msw: {
    handlers: [
      rest.get("/api/test", (req, res, ctx) => {
        return res(
          ctx.json([
            {
              firstName: "Neil",
              lastName: "Maverick",
            },
          ])
        );
      }),
    ],
  },
};


