import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../App";
import { rest } from "msw";
import ditto from "./ditto.json";
import { firebaseDecorator } from "../../__mocks__/firebase";

export default {
  title: "Component/App",
  component: App,
  decorators: [firebaseDecorator]
} as ComponentMeta<typeof App>;

export const Template: ComponentStory<typeof App> = () => <App />;
Template.parameters = {
  msw: {
    handlers: [
      rest.get("/api/v2/pokemon/ditto", (req, res, ctx) => {
        ctx.set("content-type", "application/json");
        return res(ctx.json(ditto));
      }),
    ],
  },
};
