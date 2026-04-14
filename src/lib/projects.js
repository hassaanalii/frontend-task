/** Shared project list — used by GET /api/projects and server-rendered UI. */
const projects = [
  {
    id: "1",
    title: "Admin logica test 3",
    description:
      "Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    imageUrl: "/user.jpg",
  },
  {
    id: "2",
    title: "Simulazione avanzata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "/user.jpg",
  },
  {
    id: "3",
    title: "Corso base matematica",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    imageUrl: "/user.jpg",
  },
  {
    id: "4",
    title: "Quiz intermedio",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    imageUrl: "/user.jpg",
  },
  {
    id: "5",
    title: "Progetto finale",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    imageUrl: "/user.jpg",
  },
  {
    id: "6",
    title: "Laboratorio di fisica",
    description:
      "Esperimenti guidati e reportistica digitale per preparare la prova pratica del modulo avanzato.",
    imageUrl: "/user.jpg",
  },
  {
    id: "7",
    title: "Inglese tecnico B2",
    description:
      "Lessico medico-scientifico, listening e simulazioni di comprensione con feedback immediato.",
    imageUrl: "/user.jpg",
  },
  {
    id: "8",
    title: "Statistica applicata",
    description:
      "Distribuzioni, test di ipotesi e interpretazione dei risultati con dataset di esempio.",
    imageUrl: "/user.jpg",
  },
  {
    id: "9",
    title: "Biochimica clinica",
    description:
      "Ciclo delle analisi, range di riferimento e correlazione con i quadri sintomatologici.",
    imageUrl: "/user.jpg",
  },
  {
    id: "10",
    title: "Etica professionale",
    description:
      "Casi studio, deontologia e comunicazione con il paziente nelle strutture sanitarie.",
    imageUrl: "/user.jpg",
  },
  {
    id: "11",
    title: "Anatomia II",
    description:
      "Apparato locomotore e sistema nervoso periferico con atlante interattivo e quiz rapidi.",
    imageUrl: "/user.jpg",
  },
  {
    id: "12",
    title: "Simulazione OSCE",
    description:
      "Stazioni temporizzate con checklist e valutazione delle competenze comunicative.",
    imageUrl: "/user.jpg",
  },
];

export async function getProjects() {
  return projects;
}
