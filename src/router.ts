import { createRouter, createWebHashHistory, RouterOptions } from "vue-router";

const routes = [
  {
    title: "按钮",
    name: "Button",
    path: "/components/Button",
    component: () => import(`/packages/components/Button/docs/README.md`),
  },
  {
    title: "Layout",
    name: "Layout",
    path: "/components/Layout",
    component: () => import(`/packages/components/Layout/docs/README.md`),
  },
  {
    title: "Icon",
    name: "Icon",
    path: "/components/Icon",
    component: () => import(`/packages/components/Icon/docs/README.md`),
  },
  {
    title: "Container",
    name: "Container",
    path: "/components/Container",
    component: () => import(`/packages/components/Container/docs/README.md`),
  },
  {
    title: "Avatar",
    name: "Avatar",
    path: "/components/Avatar",
    component: () => import(`/packages/components/Avatar/docs/README.md`),
  },
  {
    title: "Backtop",
    name: "Backtop",
    path: "/components/Backtop",
    component: () => import(`/packages/components/Backtop/docs/README.md`),
  },
];
const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 };
    }
  },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;
