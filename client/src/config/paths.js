export const PATHS = {
  HOME: "/",
  LOGIN: "/connexion",
  REGISTER: "/inscription",

  DASHBOARD: "/tableau-de-bord",
  PROFILE: "/profil",
  SETTINGS: "/parametres",

  USER_DETAILS: (id) => `/utilisateurs/${id}`,
  ORDER_DETAILS: "/commandes/:orderId", 
};
