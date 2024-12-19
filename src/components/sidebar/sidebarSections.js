import tableauDeBordImg from "../../assets/images/Tableau de Bord.svg";
import mesDemandesImg from "../../assets/images/Mes Demandes.svg";
import licencesImg from "../../assets/images/License.svg";
import activitesAuxiliairesImg from "../../assets/images/Activités auxiliaires.svg";
import autorisationsImg from "../../assets/images/Autorisations.svg";
import declarationsImg from "../../assets/images/Declarations.svg";
import homologationsImg from "../../assets/images/Homologations.svg";
import numerosEtCodesImg from "../../assets/images/Numéros et codes.svg";
import autorisationsPostalesImg from "../../assets/images/Autorisations postales.svg";
import tutorielImg from "../../assets/images/Tutoriel.svg";
import messageAuGuiUImg from "../../assets/images/Message au GuiU.svg";

export const sidebarSections = [
  {
    items: [
      { title: "Tableau de Bord", image: tableauDeBordImg, route: "/tableau-de-bord" },
      { 
        title: "Mes Demandes", 
        image: mesDemandesImg, 
        dropdown: true, 
        route: "/mes-demandes",
        subItems: [
          { title: "Nouvelle Demande", route: "/mes-demandes/nouvelle-demande" },
          { title: "Demandes en Cours", route: "/mes-demandes/en-cours" },
          { title: "Historique des Demandes", route: "/mes-demandes/historique" },
        ]
      },
    ],
  },
  {
    title: "Télécommunications",
    items: [
      { title: "Licences", image: licencesImg, route: "/licences" },
      { title: "Activités auxiliaires", image: activitesAuxiliairesImg, route: "/activites-auxiliaires" },
      { title: "Autorisations", image: autorisationsImg, route: "/autorisations" },
      { title: "Déclarations", image: declarationsImg, route: "/declarations" },
      { title: "Homologations", image: homologationsImg, route: "/homologations" },
      { title: "Numéros et codes", image: numerosEtCodesImg, route: "/numeros-et-codes" },
    ],
  },
  {
    title: "Poste",
    items: [
      { title: "Autorisations postales", image: autorisationsPostalesImg, route: "/autorisations-postales" },
    ],
  },
  {
    title: "Autres options",
    items: [
      { title: "Tutoriel", image: tutorielImg, route: "/tutoriel" },
      { title: "Message au GuiU", image: messageAuGuiUImg, route: "/message-au-guiu" },
    ],
  },
];
