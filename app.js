const productos = [
  { tipo: "Galletitas" },
  { tipo: "Gaseosas" },
  { tipo: "Aceites" },
  { tipo: "Lacteos" },
  { tipo: "Desodorantes" },
];
const marcas = {
  galletitas: [
    { marca: "Oreo", precio: 200 },
    { marca: "Sonrisas", precio: 170 },
  ],
  gaseosas: [
    { marca: "Coca", precio: 250 },
    { marca: "Pepsi", precio: 230 },
  ],
  aceites: [
    { marca: "Cocinero", precio: 150 },
    { marca: "Girasol", precio: 150 },
  ],
  lacteos: [
    { marca: "Serenísima", precio: 140 },
    { marca: "Sancor", precio: 120 },
  ],
  desodorantes: [
    { marca: "Rexona", precio: 150 },
    { marca: "Axe", precio: 150 },
  ],
};

let tiposMap = productos.map((product) => {
  return product.tipo.toLowerCase();
});
let galletitas = marcas.galletitas.map((product) => {
  return `${product.marca}: $${product.precio} `;
});
let gaseosas = marcas.gaseosas.map((product) => {
  return `${product.marca}: $${product.precio} `;
});
let aceites = marcas.aceites.map((product) => {
  return `${product.marca}: $${product.precio} `;
});
let lacteos = marcas.lacteos.map((product) => {
  return `${product.marca}: $${product.precio} `;
});
let desodorantes = marcas.desodorantes.map((product) => {
  return `${product.marca}: $${product.precio} `;
});

const ChooseGalletitas = () => {
  let galletitasP = prompt("Escriba una marca: \n" + galletitas.join("\n"));
  if (galletitasP === null) {
    ChooseGalletitas();
  }
  switch (galletitasP.toLowerCase()) {
    case "oreo":
      alert("Has comprado una Oreo");
      break;
    case "sonrisas":
      alert("Has comprado una Sonrisas");
      break;
    default:
      alert("Datos erróneos");
      ChooseGalletitas();
  }
};

const ChooseGaseosas = () => {
  let gaseosasP = prompt("Escriba una marca: \n" + gaseosas.join("\n"));
  if (gaseosasP === null) {
    ChooseGaseosas();
  }
  switch (gaseosasP.toLowerCase()) {
    case "coca":
      alert("Has comprado una Coca");
      break;
    case "pepsi":
      alert("Has comprado una Pepsi");
      break;
    default:
      alert("Datos erróneos");
      ChooseGaseosas();
  }
};

const ChooseAceites = () => {
  let aceitesP = prompt("Escriba una marca: \n" + aceites.join("\n"));
  if (aceitesP === null) {
    ChooseAceites();
  }
  switch (aceitesP.toLowerCase()) {
    case "cocinero":
      alert("Has comprado un aceite marca Cocinero");
      break;
    case "girasol":
      alert("Has comprado un aceite marca Girasol");
      break;
    default:
      alert("Datos erróneos");
      ChooseAceites();
  }
};

const ChooseLact = () => {
  let lacteosP = prompt("Escriba una marca: \n" + lacteos.join("\n"));
  if (lacteosP === null) {
    ChooseLact();
  }
  switch (lacteosP.toLowerCase()) {
    case "serenisima":
      alert("Has comprado una leche marca Serenísima");
      break;
    case "sancor":
      alert("Has comprado una leche marca sanCor");
      break;
    default:
      alert("Datos erróneos");
      ChooseLact();
  }
};

const ChooseDesont = () => {
  let desontp = prompt("Escriba una marca: \n" + desodorantes.join("\n"));
  if (desontp === null) {
    ChooseDesont();
  }
  switch (desontp.toLowerCase()) {
    case "rexona":
      alert("Has comprado un desodorante marca Rexona");
      break;
    case "axe":
      alert("Has comprado un desodorante marca Axe");
      break;
    default:
      alert("Datos erróneos");
      ChooseLact();
  }
};

const ChooseProdtc = () => {
  let ListaPrompt = prompt(
    "Escriba lo que desee en el texto debajo: \n" + tiposMap.join("\n")
  );
  if (tiposMap.includes(ListaPrompt)) {
    switch (ListaPrompt.toLowerCase()) {
      case "galletitas":
        ChooseGalletitas();
        break;
      case "gaseosas":
        ChooseGaseosas();
        break;
      case "aceites":
        ChooseAceites();
        break;
      case "lacteos":
        ChooseLact();
        break;
      case "desodorantes":
        ChooseDesont();
      default:
    }
  } else {
    alert("Datos erróneos");
    ChooseProdtc();
  }
};
ChooseProdtc();
