// ============================================================
// CATALOGUE
// ============================================================
const CATALOGUE = {
  "Revolvers": {
    "Double Action": 20, "Cattleman": 25, "Navy": 60, "Schofield": 55, "LeMat": 80
  },
  "Pistolets": {
    "Mauser": 55, "M1899": 55, "Volcanic": 70, "Pistolet semi-automatique": 55
  },
  "Pompes / Fusils de chasse": {
    "Canon scié": 45, "Double canon": 60, "Fusil à répétition": 140,
    "Pompe": 130, "Pompe semi-auto": 160, "Éléphant": 1000
  },
  "Carabines": {
    "Litchfield": 115, "Petit gibier": 15, "Springfield": 70,
    "Lancaster": 105, "Evans": 90, "Verrou": 250, "Carabine à répétition": 60
  },
  "Armes blanches / Lancer": {
    "Couteaux de chasse": 2, "Lasso": 2, "Lasso amélioré": 8,
    "Machette aguila": 11, "Marteau": 5, "Arc": 15,
    "Ceinture de couteau": 8, "Ceinture de bolas": 8,
    "Hachette de chasseur": 11, "Bolas": 5, "Couteaux de lancer": 3
  },
  "Munitions normales": {
    "Munitions revolver": 3, "Munitions pistolet": 3,
    "Munitions petit gibier (fusil)": 3, "Munitions carabine": 6,
    "Munitions pompe": 4, "Munitions fusil": 5, "Carquois flèches": 3
  },
  "Munitions spéciales": {
    "Revolver Express": 8, "Revolver Véloce": 5, "Revolver Tête creuse": 5,
    "Carabine Express": 11, "Carabine Véloce": 8, "Carabine Tête creuse": 8,
    "Fusil Express": 11, "Fusil Véloce": 8, "Fusil Tête creuse": 8,
    "Pistolet Express": 8, "Pistolet Véloce": 5, "Pistolet Tête creuse": 5,
    "Munition éléphant": 50, "Pompe Slug": 10,
    "Carquois empoisonné": 3, "Carquois petit gibier": 2
  },
  "Divers": {
    "Huile pour arme": 2, "Nettoyage arme": 1.5,
    "Jumelles": 3, "Carquois": 2, "Changement de nom": 2.5
  }
};

const OCCAS = {
  "Double Action":        {cat: 20,   rachat: 0,   revente: 0},
  "Cattleman":            {cat: 25,   rachat: 0,   revente: 0},
  "Navy":                 {cat: 60,   rachat: 25,  revente: 35},
  "Schofield":            {cat: 55,   rachat: 20,  revente: 0},
  "LeMat":                {cat: 80,   rachat: 40,  revente: 65},
  "Mauser":               {cat: 55,   rachat: 25,  revente: 45},
  "M1899":                {cat: 55,   rachat: 26,  revente: 46},
  "Volcanic":             {cat: 70,   rachat: 30,  revente: 55},
  "Pistolet semi-auto":   {cat: 55,   rachat: 23,  revente: 43},
  "Canon scié":           {cat: 45,   rachat: 20,  revente: 35},
  "Double canon":         {cat: 60,   rachat: 23,  revente: 42},
  "Fusil à répétition":   {cat: 140,  rachat: 65,  revente: 110},
  "Pompe":                {cat: 130,  rachat: 60,  revente: 105},
  "Pompe semi-auto":      {cat: 160,  rachat: 90,  revente: 130},
  "Éléphant":             {cat: 1000, rachat: 150, revente: 250},
  "Litchfield":           {cat: 115,  rachat: 60,  revente: 90},
  "Petit gibier":         {cat: 15,   rachat: 0,   revente: 0},
  "Springfield":          {cat: 70,   rachat: 20,  revente: 40},
  "Lancaster":            {cat: 105,  rachat: 40,  revente: 75},
  "Evans":                {cat: 90,   rachat: 35,  revente: 70},
  "Verrou":               {cat: 250,  rachat: 120, revente: 180},
  "Carabine à répétition":{cat: 60,   rachat: 0,   revente: 0}
};

const EMPLOYES_DEFAULT = [
  {prenom:"Dikson",   nom:"Fisk",     statut:"Patron",    salaire:300},
  {prenom:"Nastos",   nom:"Martinez", statut:"Co-patron", salaire:300},
  {prenom:"William",  nom:"Stilwell", statut:"Gérant",    salaire:300},
  {prenom:"Wyatt",    nom:"Earp",     statut:"Employé",   salaire:300},
  {prenom:"Butch",    nom:"Harison",  statut:"Employé",   salaire:300},
  {prenom:"James",    nom:"Heller",   statut:"Employé",   salaire:300}
];

// ============================================================
// STORAGE
// ============================================================
const STORAGE_KEY = "carcanhoes_data_v1";
const GITHUB_KEY = "carcanhoes_github_v1";

let data = loadData();
let githubConfig = loadGithubConfig();

function loadData() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch(e) {}
  }
  return {
    ventes: [],
    customs: [],
    occas: [],
    depDed: [],
    depNonDed: [],
    employes: [...EMPLOYES_DEFAULT],
    impots: { semaine: "", du: "", au: "", capital: 0 }
  };
}

function saveData() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function loadGithubConfig() {
  const raw = localStorage.getItem(GITHUB_KEY);
  if (raw) {
    try { return JSON.parse(raw); } catch(e) {}
  }
  return { owner: "", repo: "", branch: "main", token: "", lastPush: null };
}

function saveGithubConfigObj() {
  localStorage.setItem(GITHUB_KEY, JSON.stringify(githubConfig));
}

// Tab switching handled by inline script in HTML (shadcn-style)

// ============================================================
// HELPERS
// ============================================================
function fmt(n) { return "$" + Number(n||0).toFixed(2); }
function today() { return new Date().toISOString().slice(0,10); }

function fillSelect(sel, options, placeholder) {
  sel.innerHTML = "";
  if (placeholder) {
    const o = document.createElement("option");
    o.value = ""; o.textContent = placeholder; o.disabled = true; o.selected = true;
    sel.appendChild(o);
  }
  options.forEach(opt => {
    if (typeof opt === 'string') {
      const o = document.createElement("option");
      o.value = opt; o.textContent = opt;
      sel.appendChild(o);
    } else if (opt.group) {
      const og = document.createElement("optgroup");
      og.label = opt.group;
      opt.items.forEach(it => {
        const o = document.createElement("option");
        o.value = it.value; o.textContent = it.label;
        og.appendChild(o);
      });
      sel.appendChild(og);
    }
  });
}

function employesList() {
  return data.employes.map(e => `${e.prenom} ${e.nom}`);
}

function armesVenteOptions() {
  const opts = [];
  for (const [cat, armes] of Object.entries(CATALOGUE)) {
    opts.push({
      group: cat,
      items: Object.entries(armes).map(([nom, prix]) => ({
        value: JSON.stringify({nom, prix}),
        label: `${nom} — ${fmt(prix)}`
      }))
    });
  }
  return opts;
}

function armesOccasOptions() {
  return Object.entries(OCCAS).map(([nom, p]) => ({
    value: JSON.stringify({nom, ...p}),
    label: `${nom} (rachat ${fmt(p.rachat)} / revente ${fmt(p.revente)})`
  }));
}

// ============================================================
// INIT UI
// ============================================================
function initUI() {
  document.getElementById("v-date").value = today();
  document.getElementById("c-date").value = today();
  document.getElementById("o-date").value = today();
  document.getElementById("dd-date").value = today();
  document.getElementById("dnd-date").value = today();

  fillSelect(document.getElementById("v-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("c-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("o-vendeur"), employesList(), "-- Armurier --");

  fillSelect(document.getElementById("v-arme"), armesVenteOptions(), "-- Choisir une arme --");
  fillSelect(document.getElementById("o-arme"), [{group:"Armes reprises", items: armesOccasOptions()}], "-- Choisir une arme --");

  if (data.impots.semaine) document.getElementById("i-semaine").value = data.impots.semaine;
  if (data.impots.du) document.getElementById("i-du").value = data.impots.du;
  if (data.impots.au) document.getElementById("i-au").value = data.impots.au;
  document.getElementById("i-capital").value = data.impots.capital || 0;

  initGithubUI();

  refreshAll();
}

// ============================================================
// VENTES
// ============================================================
function venteCalc() {
  const selArme = document.getElementById("v-arme").value;
  const qte = Number(document.getElementById("v-qte").value) || 1;
  const reduc = Number(document.getElementById("v-reduc").value) || 0;
  if (!selArme) {
    document.getElementById("v-prix-cat").value = "";
    document.getElementById("v-prix-final").value = "";
    return;
  }
  const {prix} = JSON.parse(selArme);
  const brut = prix * qte;
  const final = brut * (1 - reduc/100);
  document.getElementById("v-prix-cat").value = brut.toFixed(2);
  document.getElementById("v-prix-final").value = final.toFixed(2);
}

function addVente() {
  const selArme = document.getElementById("v-arme").value;
  const vendeur = document.getElementById("v-vendeur").value;
  if (!selArme) { alert("Choisissez une arme"); return; }
  if (!vendeur) { alert("Choisissez un vendeur"); return; }
  const {nom, prix} = JSON.parse(selArme);
  const qte = Number(document.getElementById("v-qte").value) || 1;
  const reduc = Number(document.getElementById("v-reduc").value) || 0;
  const brut = prix * qte;
  const final = brut * (1 - reduc/100);
  data.ventes.push({
    id: Date.now(),
    date: document.getElementById("v-date").value,
    vendeur,
    client: document.getElementById("v-client").value,
    serie: document.getElementById("v-serie").value,
    arme: nom,
    qte,
    prix: brut,
    reduc,
    final
  });
  saveData();
  document.getElementById("v-client").value = "";
  document.getElementById("v-serie").value = "";
  document.getElementById("v-qte").value = "1";
  document.getElementById("v-reduc").value = "0";
  refreshVentes();
  refreshImpots();
}

function delVente(id) {
  if (!confirm("Supprimer cette vente ?")) return;
  data.ventes = data.ventes.filter(v => v.id !== id);
  saveData();
  refreshVentes();
  refreshImpots();
}

function refreshVentes() {
  const tbody = document.getElementById("v-table");
  const search = (document.getElementById("v-search").value || "").toLowerCase();
  const filtered = data.ventes.filter(v =>
    !search ||
    (v.client||"").toLowerCase().includes(search) ||
    (v.arme||"").toLowerCase().includes(search) ||
    (v.vendeur||"").toLowerCase().includes(search) ||
    (v.serie||"").toLowerCase().includes(search)
  ).sort((a,b) => (b.date||"").localeCompare(a.date||""));
  tbody.innerHTML = filtered.map(v => `
    <tr>
      <td>${v.date||""}</td>
      <td>${v.vendeur||""}</td>
      <td>${v.client||""}</td>
      <td>${v.serie||""}</td>
      <td>${v.arme||""}</td>
      <td>${v.qte||1}</td>
      <td>${fmt(v.prix)}</td>
      <td>${v.reduc||0}%</td>
      <td><b>${fmt(v.final)}</b></td>
      <td class="actions-cell"><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delVente(${v.id})">✕</button></td>
    </tr>
  `).join("");
  const total = data.ventes.reduce((s,v) => s + (v.final||0), 0);
  document.getElementById("v-total").textContent = fmt(total);
  document.getElementById("v-count").textContent = String(data.ventes.length);
}

// ============================================================
// CUSTOMS
// ============================================================
function customCalc() {
  const cout = Number(document.getElementById("c-cout").value) || 0;
  const reduc = Number(document.getElementById("c-reduc").value) || 0;
  const part = cout * 0.25;
  const final = (cout + part) * (1 - reduc/100);
  document.getElementById("c-prix-final").value = final.toFixed(2);
  document.getElementById("c-part-entreprise").value = (part * (1 - reduc/100)).toFixed(2);
}

function addCustom() {
  const cout = Number(document.getElementById("c-cout").value);
  const vendeur = document.getElementById("c-vendeur").value;
  if (!cout || cout<=0) { alert("Entrez un coût valide"); return; }
  if (!vendeur) { alert("Choisissez un vendeur"); return; }
  const reduc = Number(document.getElementById("c-reduc").value) || 0;
  const part = cout * 0.25;
  const final = (cout + part) * (1 - reduc/100);
  const partFinal = part * (1 - reduc/100);
  data.customs.push({
    id: Date.now(),
    date: document.getElementById("c-date").value,
    vendeur,
    client: document.getElementById("c-client").value,
    arme: document.getElementById("c-arme").value,
    cout,
    final,
    part: partFinal,
    reduc,
    info: document.getElementById("c-info").value
  });
  saveData();
  document.getElementById("c-client").value = "";
  document.getElementById("c-arme").value = "";
  document.getElementById("c-cout").value = "";
  document.getElementById("c-info").value = "";
  document.getElementById("c-reduc").value = "0";
  customCalc();
  refreshCustoms();
  refreshImpots();
}

function delCustom(id) {
  if (!confirm("Supprimer ce custom ?")) return;
  data.customs = data.customs.filter(c => c.id !== id);
  saveData();
  refreshCustoms();
  refreshImpots();
}

function refreshCustoms() {
  const tbody = document.getElementById("c-table");
  const search = (document.getElementById("c-search").value || "").toLowerCase();
  const filtered = data.customs.filter(c =>
    !search ||
    (c.client||"").toLowerCase().includes(search) ||
    (c.arme||"").toLowerCase().includes(search) ||
    (c.vendeur||"").toLowerCase().includes(search)
  ).sort((a,b) => (b.date||"").localeCompare(a.date||""));
  tbody.innerHTML = filtered.map(c => `
    <tr>
      <td>${c.date||""}</td>
      <td>${c.vendeur||""}</td>
      <td>${c.client||""}</td>
      <td>${c.arme||""}</td>
      <td>${fmt(c.cout)}</td>
      <td><b>${fmt(c.final)}</b></td>
      <td style="color:#2d5a3d"><b>${fmt(c.part)}</b></td>
      <td>${c.reduc||0}%</td>
      <td>${c.info||""}</td>
      <td class="actions-cell"><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delCustom(${c.id})">✕</button></td>
    </tr>
  `).join("");
  const totalFinal = data.customs.reduce((s,c) => s + (c.final||0), 0);
  const totalPart = data.customs.reduce((s,c) => s + (c.part||0), 0);
  document.getElementById("c-total").textContent = fmt(totalFinal);
  document.getElementById("c-total-part").textContent = fmt(totalPart);
  document.getElementById("c-count").textContent = String(data.customs.length);
}

// ============================================================
// OCCAS
// ============================================================
function occasCalc() {
  const selArme = document.getElementById("o-arme").value;
  const reduc = Number(document.getElementById("o-reduc").value) || 0;
  if (!selArme) {
    document.getElementById("o-prix-reprise").value = "";
    document.getElementById("o-prix-revente").value = "";
    return;
  }
  const {rachat, revente} = JSON.parse(selArme);
  document.getElementById("o-prix-reprise").value = rachat.toFixed(2);
  const finalRevente = revente * (1 - reduc/100);
  document.getElementById("o-prix-revente").value = finalRevente.toFixed(2);
}

function addOccas() {
  const selArme = document.getElementById("o-arme").value;
  const vendeur = document.getElementById("o-vendeur").value;
  if (!selArme) { alert("Choisissez une arme"); return; }
  if (!vendeur) { alert("Choisissez un armurier"); return; }
  const {nom, rachat, revente} = JSON.parse(selArme);
  const reduc = Number(document.getElementById("o-reduc").value) || 0;
  data.occas.push({
    id: Date.now(),
    date: document.getElementById("o-date").value,
    vendeur,
    client: document.getElementById("o-client").value,
    arme: nom,
    serie: document.getElementById("o-serie").value,
    reduc,
    prixReprise: rachat,
    prixRevente: revente * (1 - reduc/100),
    vendue: false,
    info: document.getElementById("o-info").value
  });
  saveData();
  document.getElementById("o-client").value = "";
  document.getElementById("o-serie").value = "";
  document.getElementById("o-info").value = "";
  refreshOccas();
  refreshImpots();
}

function toggleOccasVendue(id) {
  const o = data.occas.find(x => x.id === id);
  if (!o) return;
  o.vendue = !o.vendue;
  saveData();
  refreshOccas();
  refreshImpots();
}

function delOccas(id) {
  if (!confirm("Supprimer cette arme d'occasion ?")) return;
  data.occas = data.occas.filter(o => o.id !== id);
  saveData();
  refreshOccas();
  refreshImpots();
}

function refreshOccas() {
  const tbody = document.getElementById("o-table");
  const hideSold = document.getElementById("o-hide-sold").checked;
  const filtered = data.occas
    .filter(o => !hideSold || !o.vendue)
    .sort((a,b) => (b.date||"").localeCompare(a.date||""));
  tbody.innerHTML = filtered.map(o => `
    <tr style="${o.vendue?'opacity:0.5;text-decoration:line-through':''}">
      <td>${o.date||""}</td>
      <td>${o.vendeur||""}</td>
      <td>${o.client||""}</td>
      <td>${o.arme||""}</td>
      <td>${o.serie||""}</td>
      <td>${o.reduc||0}%</td>
      <td>${fmt(o.prixReprise)}</td>
      <td><b>${fmt(o.prixRevente)}</b></td>
      <td><input type="checkbox" ${o.vendue?'checked':''} onchange="toggleOccasVendue(${o.id})"></td>
      <td>${o.info||""}</td>
      <td class="actions-cell"><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delOccas(${o.id})">✕</button></td>
    </tr>
  `).join("");
  const stock = data.occas.filter(o => !o.vendue);
  document.getElementById("o-stock-count").textContent = stock.length;
  document.getElementById("o-stock-cout").textContent = fmt(stock.reduce((s,o) => s + (o.prixReprise||0), 0));
  document.getElementById("o-stock-revente").textContent = fmt(stock.reduce((s,o) => s + (o.prixRevente||0), 0));
  document.getElementById("o-count").textContent = String(data.occas.length);
}

// ============================================================
// IMPOTS
// ============================================================
function saveImpots() {
  data.impots.semaine = document.getElementById("i-semaine").value;
  data.impots.du = document.getElementById("i-du").value;
  data.impots.au = document.getElementById("i-au").value;
  data.impots.capital = Number(document.getElementById("i-capital").value) || 0;
  saveData();
  refreshImpots();
  alert("Fiche sauvegardée.");
}

function addDepDed() {
  const date = document.getElementById("dd-date").value;
  const lib = document.getElementById("dd-lib").value;
  const mnt = Number(document.getElementById("dd-mnt").value);
  if (!lib || !mnt) { alert("Remplir libellé et montant"); return; }
  data.depDed.push({id:Date.now(), date, lib, mnt});
  saveData();
  document.getElementById("dd-lib").value = "";
  document.getElementById("dd-mnt").value = "";
  refreshImpots();
}

function delDepDed(id) {
  data.depDed = data.depDed.filter(d => d.id !== id);
  saveData();
  refreshImpots();
}

function addDepNonDed() {
  const date = document.getElementById("dnd-date").value;
  const lib = document.getElementById("dnd-lib").value;
  const mnt = Number(document.getElementById("dnd-mnt").value);
  if (!lib || !mnt) { alert("Remplir libellé et montant"); return; }
  data.depNonDed.push({id:Date.now(), date, lib, mnt});
  saveData();
  document.getElementById("dnd-lib").value = "";
  document.getElementById("dnd-mnt").value = "";
  refreshImpots();
}

function delDepNonDed(id) {
  data.depNonDed = data.depNonDed.filter(d => d.id !== id);
  saveData();
  refreshImpots();
}

function updateSalaire(idx, field, val) {
  if (field === "heures") data.employes[idx].heures = Number(val)||0;
  else if (field === "salaire") data.employes[idx].salaire = Number(val)||0;
  else if (field === "prime") data.employes[idx].prime = Number(val)||0;
  saveData();
  refreshImpots();
}

function refreshImpots() {
  const dd = document.getElementById("dd-table");
  dd.innerHTML = data.depDed.map(d => `
    <tr><td>${d.date||""}</td><td>${d.lib}</td><td>${fmt(d.mnt)}</td>
    <td><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delDepDed(${d.id})">✕</button></td></tr>
  `).join("");
  const totalDD = data.depDed.reduce((s,d) => s + (d.mnt||0), 0);
  document.getElementById("dep-ded-total").textContent = fmt(totalDD);

  const dnd = document.getElementById("dnd-table");
  dnd.innerHTML = data.depNonDed.map(d => `
    <tr><td>${d.date||""}</td><td>${d.lib}</td><td>${fmt(d.mnt)}</td>
    <td><button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon text-red-600 hover:bg-red-50 hover:border-red-200" onclick="delDepNonDed(${d.id})">✕</button></td></tr>
  `).join("");
  const totalDND = data.depNonDed.reduce((s,d) => s + (d.mnt||0), 0);
  document.getElementById("dep-nonded-total").textContent = fmt(totalDND);

  const sal = document.getElementById("sal-table");
  sal.innerHTML = data.employes.map((e,i) => {
    const s = Number(e.salaire)||0;
    const p = Number(e.prime)||0;
    return `<tr>
      <td>${i+1}</td>
      <td>${e.prenom} ${e.nom}</td>
      <td>${e.statut}</td>
      <td><input type="number" value="${e.heures||''}" onchange="updateSalaire(${i},'heures',this.value)" style="width:60px"></td>
      <td><input type="number" value="${s}" onchange="updateSalaire(${i},'salaire',this.value)" style="width:80px"></td>
      <td><input type="number" value="${p}" onchange="updateSalaire(${i},'prime',this.value)" style="width:80px"></td>
      <td><b>${fmt(s+p)}</b></td>
    </tr>`;
  }).join("");
  const totalSal = data.employes.reduce((acc,e) => acc + (Number(e.salaire)||0) + (Number(e.prime)||0), 0);
  document.getElementById("sal-total").textContent = fmt(totalSal);

  const revenus = data.ventes.reduce((s,v)=>s+(v.final||0),0)
                + data.customs.reduce((s,c)=>s+(c.final||0),0)
                + data.occas.filter(o=>o.vendue).reduce((s,o)=>s+(o.prixRevente||0),0);
  const capital = Number(data.impots.capital)||0;
  const imposable = Math.max(0, revenus - totalSal - totalDD);
  const impots = imposable * 0.5;
  const bilan = revenus - totalSal - totalDD - impots - totalDND;
  const capitalFin = capital + bilan;

  const neg = n => n > 0 ? "-" + fmt(n) : fmt(n);
  document.getElementById("r-capital").textContent = fmt(capital);
  document.getElementById("r-revenus").textContent = fmt(revenus);
  document.getElementById("r-export").textContent = fmt(0);
  document.getElementById("r-salaires").textContent = neg(totalSal);
  document.getElementById("r-dep-ded").textContent = neg(totalDD);
  document.getElementById("r-imposable").textContent = fmt(imposable);
  document.getElementById("r-impots").textContent = fmt(impots);
  document.getElementById("r-dep-nonded").textContent = neg(totalDND);
  document.getElementById("r-bilan").textContent = fmt(bilan);
  document.getElementById("r-capital-fin").textContent = fmt(capitalFin);
}

// ============================================================
// EMPLOYES
// ============================================================
function addEmp() {
  const prenom = document.getElementById("emp-prenom").value.trim();
  const nom = document.getElementById("emp-nom").value.trim();
  const statut = document.getElementById("emp-statut").value;
  const salaire = Number(document.getElementById("emp-salaire").value) || 0;
  if (!prenom || !nom) { toast("Erreur", "Prénom et nom requis.", "error"); return; }
  data.employes.push({prenom, nom, statut, salaire});
  saveData();
  document.getElementById("emp-prenom").value = "";
  document.getElementById("emp-nom").value = "";
  document.getElementById("emp-salaire").value = "300";
  refreshEmp();
  refreshVendeurSelects();
  refreshImpots();
  toast("Employé ajouté", `${prenom} ${nom} a rejoint l'équipe.`, "success", 2500);
}

function delEmp(idx) {
  if (!confirm(`Supprimer ${data.employes[idx].prenom} ${data.employes[idx].nom} ?`)) return;
  data.employes.splice(idx, 1);
  saveData();
  refreshEmp();
  refreshVendeurSelects();
  refreshImpots();
  toast("Employé supprimé", "", "success", 2500);
}

function refreshVendeurSelects() {
  fillSelect(document.getElementById("v-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("c-vendeur"), employesList(), "-- Vendeur --");
  fillSelect(document.getElementById("o-vendeur"), employesList(), "-- Armurier --");
}

let editingEmpIdx = -1;

function startEditEmp(idx) {
  editingEmpIdx = idx;
  refreshEmp();
}

function cancelEditEmp() {
  editingEmpIdx = -1;
  refreshEmp();
}

function saveEditEmp(idx) {
  const prenom = document.getElementById(`emp-edit-prenom-${idx}`).value.trim();
  const nom = document.getElementById(`emp-edit-nom-${idx}`).value.trim();
  const statut = document.getElementById(`emp-edit-statut-${idx}`).value;
  const salaire = Number(document.getElementById(`emp-edit-salaire-${idx}`).value) || 0;
  if (!prenom || !nom) { toast("Erreur", "Prénom et nom requis.", "error"); return; }
  data.employes[idx] = { ...data.employes[idx], prenom, nom, statut, salaire };
  saveData();
  editingEmpIdx = -1;
  refreshEmp();
  refreshVendeurSelects();
  refreshImpots();
  toast("Employé modifié", `${prenom} ${nom} mis à jour.`, "success", 2500);
}

function statutOptions(selected) {
  return ["Patron","Co-patron","Gérant","Employé"]
    .map(s => `<option ${s===selected?"selected":""}>${s}</option>`).join("");
}

function refreshEmp() {
  const tbody = document.getElementById("emp-table");
  const badge = document.getElementById("emp-count-badge");
  if (badge) badge.textContent = String(data.employes.length);
  tbody.innerHTML = data.employes.map((e,i) => {
    if (editingEmpIdx === i) {
      return `
        <tr class="bg-zinc-800/40">
          <td class="text-zinc-400">${i+1}</td>
          <td><input id="emp-edit-prenom-${i}" class="shadcn-input" value="${e.prenom}"></td>
          <td><input id="emp-edit-nom-${i}" class="shadcn-input" value="${e.nom}"></td>
          <td>
            <select id="emp-edit-statut-${i}" class="shadcn-input">${statutOptions(e.statut)}</select>
          </td>
          <td class="text-right">
            <input id="emp-edit-salaire-${i}" class="shadcn-input text-right" type="number" value="${Number(e.salaire)||0}" step="10">
          </td>
          <td class="text-right">
            <div class="inline-flex gap-1">
              <button class="shadcn-btn shadcn-btn-primary shadcn-btn-sm shadcn-btn-icon" onclick="saveEditEmp(${i})" title="Enregistrer">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
              </button>
              <button class="shadcn-btn shadcn-btn-outline shadcn-btn-sm shadcn-btn-icon" onclick="cancelEditEmp()" title="Annuler">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>
          </td>
        </tr>
      `;
    }
    return `
      <tr>
        <td class="text-zinc-400">${i+1}</td>
        <td class="font-medium">${e.prenom}</td>
        <td class="font-medium">${e.nom}</td>
        <td><span class="badge badge-outline">${e.statut}</span></td>
        <td class="text-right mono">${fmt(e.salaire)}</td>
        <td class="text-right">
          <div class="inline-flex gap-1">
            <button class="shadcn-btn shadcn-btn-ghost shadcn-btn-sm shadcn-btn-icon" onclick="startEditEmp(${i})" title="Modifier">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
            </button>
            <button class="shadcn-btn shadcn-btn-ghost shadcn-btn-sm shadcn-btn-icon text-red-400 hover:bg-red-950/30" onclick="delEmp(${i})" title="Supprimer">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
function toast(title, desc, type = "info", duration = 4500) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const el = document.createElement("div");
  el.className = `toast toast-${type}`;
  el.innerHTML = `
    <div class="toast-body">
      <div class="toast-title"></div>
      <div class="toast-desc"></div>
    </div>
    <button class="toast-close" aria-label="Fermer">×</button>
  `;
  el.querySelector(".toast-title").textContent = title;
  el.querySelector(".toast-desc").innerHTML = desc || "";
  const remove = () => {
    el.classList.add("removing");
    setTimeout(() => el.remove(), 200);
  };
  el.querySelector(".toast-close").onclick = remove;
  container.appendChild(el);
  if (duration > 0) setTimeout(remove, duration);
}

// ============================================================
// GITHUB SYNC
// ============================================================

// UTF-8 safe base64 (GitHub API requires base64)
function b64encode(str) {
  return btoa(unescape(encodeURIComponent(str)));
}

function initGithubUI() {
  document.getElementById("gh-owner").value  = githubConfig.owner  || "";
  document.getElementById("gh-repo").value   = githubConfig.repo   || "";
  document.getElementById("gh-branch").value = githubConfig.branch || "main";
  document.getElementById("gh-token").value  = githubConfig.token  || "";
  document.getElementById("gh-week-date").value = today();
  updateGithubStatusPill();
  if (githubConfig.lastPush) {
    document.getElementById("gh-last-push").innerHTML =
      `Dernier push : <span class="mono">${githubConfig.lastPush.date}</span> → <a class="link" href="${githubConfig.lastPush.url}" target="_blank" rel="noreferrer">voir sur GitHub</a>`;
  }
}

function updateGithubStatusPill() {
  const pill = document.getElementById("gh-status-pill");
  if (!pill) return;
  const cfg = githubConfig;
  if (cfg.owner && cfg.repo && cfg.token) {
    pill.className = "badge badge-success";
    pill.textContent = "Configuré";
  } else {
    pill.className = "badge badge-muted";
    pill.textContent = "Non configuré";
  }
}

function saveGithubConfig() {
  githubConfig.owner  = document.getElementById("gh-owner").value.trim();
  githubConfig.repo   = document.getElementById("gh-repo").value.trim();
  githubConfig.branch = document.getElementById("gh-branch").value.trim() || "main";
  githubConfig.token  = document.getElementById("gh-token").value.trim();
  saveGithubConfigObj();
  updateGithubStatusPill();
  toast("Configuration sauvegardée", "Les informations GitHub sont stockées localement.", "success");
}

async function testGithubConnection() {
  const { owner, repo, branch, token } = githubConfig;
  if (!owner || !repo || !token) {
    toast("Configuration incomplète", "Renseigne username, repo et token avant de tester.", "error");
    return;
  }
  try {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
    });
    if (res.ok) {
      const json = await res.json();
      toast("Connexion OK", `Repo <span class="mono">${json.full_name}</span> accessible (branche par défaut : <span class="mono">${json.default_branch}</span>).`, "success");
    } else {
      const err = await res.json().catch(() => ({}));
      toast("Échec de la connexion", `${res.status} — ${err.message || "Vérifie tes identifiants."}`, "error");
    }
  } catch (err) {
    toast("Erreur réseau", err.message, "error");
  }
}

async function githubGetFileSha(path) {
  const { owner, repo, branch, token } = githubConfig;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`;
  try {
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json" }
    });
    if (res.ok) {
      const json = await res.json();
      return json.sha;
    }
  } catch (e) {}
  return null;
}

async function githubPutFile(path, content, message) {
  const { owner, repo, branch, token } = githubConfig;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${encodeURIComponent(path).replace(/%2F/g, "/")}`;
  const sha = await githubGetFileSha(path);
  const body = {
    message,
    content: b64encode(content),
    branch,
    ...(sha ? { sha } : {})
  };
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`${res.status} · ${err.message || "erreur GitHub"}`);
  }
  return res.json();
}

function buildBilanMarkdown(weekDate) {
  const totalVentes = data.ventes.reduce((s,v) => s + (v.final||0), 0);
  const totalCustomsFinal = data.customs.reduce((s,c) => s + (c.final||0), 0);
  const totalCustomsPart = data.customs.reduce((s,c) => s + (c.part||0), 0);
  const totalOccasVendues = data.occas.filter(o => o.vendue).reduce((s,o) => s + (o.prixRevente||0), 0);
  const totalSal = data.employes.reduce((s,e) => s + (Number(e.salaire)||0) + (Number(e.prime)||0), 0);
  const totalDD = data.depDed.reduce((s,d) => s + (d.mnt||0), 0);
  const totalDND = data.depNonDed.reduce((s,d) => s + (d.mnt||0), 0);
  const revenus = totalVentes + totalCustomsFinal + totalOccasVendues;
  const imposable = Math.max(0, revenus - totalSal - totalDD);
  const impots = imposable * 0.5;
  const bilan = revenus - totalSal - totalDD - impots - totalDND;

  const f = n => "$" + Number(n||0).toFixed(2);
  return `# Bilan semaine · ${weekDate}

**Carcan'hoes — L'armurerie des Fisk**

---

## Récapitulatif

| Poste | Montant |
|---|---:|
| Revenus totaux (ventes + customs + occas) | ${f(revenus)} |
| — dont ventes d'armes | ${f(totalVentes)} |
| — dont customs | ${f(totalCustomsFinal)} (part entreprise : ${f(totalCustomsPart)}) |
| — dont armes d'occas vendues | ${f(totalOccasVendues)} |
| Salaires | -${f(totalSal)} |
| Dépenses déductibles | -${f(totalDD)} |
| **Montant imposable** | **${f(imposable)}** |
| Impôts à venir (50%) | ${f(impots)} |
| Dépenses non déductibles | -${f(totalDND)} |
| **Bilan** | **${f(bilan)}** |

## Statistiques

- Ventes enregistrées : **${data.ventes.length}**
- Customs enregistrés : **${data.customs.length}**
- Armes d'occas en stock : **${data.occas.filter(o => !o.vendue).length}** (vendues : ${data.occas.filter(o => o.vendue).length})
- Employés : **${data.employes.length}**

---

*Sauvegarde générée automatiquement le ${new Date().toLocaleString("fr-FR")}*
`;
}

async function pushWeekToGithub() {
  const { owner, repo, branch, token } = githubConfig;
  if (!owner || !repo || !token) {
    toast("Configuration incomplète", "Renseigne username, repo et token avant de pouvoir push.", "error");
    return;
  }
  const btn = document.getElementById("gh-push-btn");
  const label = document.getElementById("gh-push-label");
  const originalLabel = label.textContent;
  btn.disabled = true;
  label.innerHTML = '<span class="spinner"></span> Envoi en cours…';

  try {
    const weekDate = document.getElementById("gh-week-date").value || today();
    const folder = `saves/semaine-${weekDate}`;
    const msg = (document.getElementById("gh-commit-msg").value || `Sauvegarde semaine ${weekDate}`).trim();

    const files = [
      { path: `${folder}/ventes.json`,    content: JSON.stringify(data.ventes,    null, 2) },
      { path: `${folder}/customs.json`,   content: JSON.stringify(data.customs,   null, 2) },
      { path: `${folder}/occas.json`,     content: JSON.stringify(data.occas,     null, 2) },
      { path: `${folder}/employes.json`,  content: JSON.stringify(data.employes,  null, 2) },
      { path: `${folder}/impots.json`,    content: JSON.stringify({
          semaine: data.impots,
          depensesDeductibles: data.depDed,
          depensesNonDeductibles: data.depNonDed
        }, null, 2) },
      { path: `${folder}/bilan.md`,       content: buildBilanMarkdown(weekDate) }
    ];

    let lastUrl = null;
    for (const f of files) {
      const result = await githubPutFile(f.path, f.content, `${msg} · ${f.path.split("/").pop()}`);
      if (result?.content?.html_url) lastUrl = result.content.html_url;
    }

    const folderUrl = `https://github.com/${owner}/${repo}/tree/${branch}/${folder}`;
    githubConfig.lastPush = { date: new Date().toISOString(), url: folderUrl };
    saveGithubConfigObj();
    document.getElementById("gh-last-push").innerHTML =
      `Dernier push : <span class="mono">${new Date().toLocaleString("fr-FR")}</span> → <a class="link" href="${folderUrl}" target="_blank" rel="noreferrer">voir sur GitHub</a>`;

    toast(
      "Semaine archivée sur GitHub",
      `Dossier <span class="mono">${folder}</span> créé avec ${files.length} fichiers. <a class="link" href="${folderUrl}" target="_blank" rel="noreferrer">Ouvrir sur GitHub</a>`,
      "success", 8000
    );
  } catch (err) {
    toast("Erreur lors du push", err.message, "error", 8000);
  } finally {
    btn.disabled = false;
    label.textContent = originalLabel;
  }
}

// ============================================================
// EXPORT / IMPORT / RESET
// ============================================================
function exportData() {
  const blob = new Blob([JSON.stringify(data, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `carcanhoes_sauvegarde_${today()}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const imported = JSON.parse(e.target.result);
      if (!confirm("Remplacer toutes les données actuelles par la sauvegarde ?")) return;
      data = imported;
      saveData();
      refreshAll();
      alert("Données importées.");
    } catch(err) {
      alert("Fichier invalide.");
    }
  };
  reader.readAsText(file);
  event.target.value = "";
}

function resetAll() {
  const c1 = confirm("⚠ ATTENTION ⚠\n\nTu vas supprimer TOUTES les données :\n— toutes les ventes\n— tous les customs\n— toutes les armes d'occas\n— toute la fiche impôts\n— tous les employés\n\nCette action est IRRÉVERSIBLE.\n\nContinuer ?");
  if (!c1) return;
  const c2 = prompt('Pour confirmer, tape : RESET');
  if (c2 !== "RESET") { alert("Reset annulé."); return; }
  localStorage.removeItem(STORAGE_KEY);
  data = loadData();
  refreshAll();
  alert("Toutes les données ont été supprimées.");
}

// ============================================================
// REFRESH ALL
// ============================================================
function refreshAll() {
  refreshVentes();
  refreshCustoms();
  refreshOccas();
  refreshImpots();
  refreshEmp();
}

// ============================================================
// EVENT LISTENERS
// ============================================================
document.addEventListener("input", e => {
  if (["v-arme","v-qte","v-reduc"].includes(e.target.id)) venteCalc();
  if (["c-cout","c-reduc"].includes(e.target.id)) customCalc();
  if (["o-arme","o-reduc"].includes(e.target.id)) occasCalc();
  if (["i-semaine","i-du","i-au","i-capital"].includes(e.target.id)) {
    data.impots.semaine = document.getElementById("i-semaine").value;
    data.impots.du = document.getElementById("i-du").value;
    data.impots.au = document.getElementById("i-au").value;
    data.impots.capital = Number(document.getElementById("i-capital").value) || 0;
    saveData();
    refreshImpots();
  }
});
document.addEventListener("change", e => {
  if (["v-arme","v-qte","v-reduc"].includes(e.target.id)) venteCalc();
  if (["c-cout","c-reduc"].includes(e.target.id)) customCalc();
  if (["o-arme","o-reduc"].includes(e.target.id)) occasCalc();
});

document.getElementById("v-search").addEventListener("input", refreshVentes);
document.getElementById("c-search").addEventListener("input", refreshCustoms);
document.getElementById("o-hide-sold").addEventListener("change", refreshOccas);

// ============================================================
// BOOT
// ============================================================
initUI();
