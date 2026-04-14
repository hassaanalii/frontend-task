/**
 * Navigation entries for the app sidebar (order matches design).
 * `icon` keys map to components in `@/icons/sidebarIcons`.
 */
export const sidebarNavItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "dashboard",
  },
  {
    id: "bacheca-annunci",
    label: "Bacheca annunci",
    icon: "announcement",
  },
  {
    id: "simulatore",
    label: "Simulatore",
    icon: "simulator",
  },
  {
    id: "simulazioni-archiviate",
    label: "Simulazioni archiviate",
    icon: "archived",
  },
  {
    id: "quadernino-errori",
    label: "Quadernino degli errori",
    icon: "errorNotebook",
  },
  {
    id: "simulazione-ufficiale",
    label: "Simulazione ufficiale",
    icon: "officialSim",
  },
];

export const sidebarLogoutItem = {
  id: "logout",
  label: "Logout",
  icon: "logout",
  href: "#",
  variant: "logout",
};
