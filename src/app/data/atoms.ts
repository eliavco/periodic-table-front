import { Atom } from 'src/app/models/atom.model';

export class Atoms {

	get atoms(): Atom[] {
		return this.data.slice();
	}

	getAtom(x: number, y: number): Atom {
		let atom;
		const table = this.table.forEach((loc, ind) => {
			if (loc[0] === x && loc[1] === y) atom = this.atoms[ind];
		});
		return atom;
	}

	private readonly table = [
		[0, 0],
		[0, 17],

		[1, 0],
		[1, 1],
		[1, 12],
		[1, 13],
		[1, 14],
		[1, 15],
		[1, 16],
		[1, 17],

		[2, 0],
		[2, 1],
		[2, 12],
		[2, 13],
		[2, 14],
		[2, 15],
		[2, 16],
		[2, 17],

		[3, 0],
		[3, 1],
		[3, 2],
		[3, 3],
		[3, 4],
		[3, 5],
		[3, 6],
		[3, 7],
		[3, 8],
		[3, 9],
		[3, 10],
		[3, 11],
		[3, 12],
		[3, 13],
		[3, 14],
		[3, 15],
		[3, 16],
		[3, 17],

		[4, 0],
		[4, 1],
		[4, 2],
		[4, 3],
		[4, 4],
		[4, 5],
		[4, 6],
		[4, 7],
		[4, 8],
		[4, 9],
		[4, 10],
		[4, 11],
		[4, 12],
		[4, 13],
		[4, 14],
		[4, 15],
		[4, 16],
		[4, 17],

		[5, 0],
		[5, 1],

		[7, 3],
		[7, 4],
		[7, 5],
		[7, 6],
		[7, 7],
		[7, 8],
		[7, 9],
		[7, 10],
		[7, 11],
		[7, 12],
		[7, 13],
		[7, 14],
		[7, 15],
		[7, 16],
		[7, 17],

		[5, 3],
		[5, 4],
		[5, 5],
		[5, 6],
		[5, 7],
		[5, 8],
		[5, 9],
		[5, 10],
		[5, 11],
		[5, 12],
		[5, 13],
		[5, 14],
		[5, 15],
		[5, 16],
		[5, 17],

		[6, 0],
		[6, 1],

		[8, 3],
		[8, 4],
		[8, 5],
		[8, 6],
		[8, 7],
		[8, 8],
		[8, 9],
		[8, 10],
		[8, 11],
		[8, 12],
		[8, 13],
		[8, 14],
		[8, 15],
		[8, 16],
		[8, 17],

		[6, 3],
		[6, 4],
		[6, 5],
		[6, 6],
		[6, 7],
		[6, 8],
		[6, 9],
		[6, 10],
		[6, 11],
		[6, 12],
		[6, 13],
		[6, 14],
		[6, 15],
		[6, 16],
		[6, 17],
	];

	private readonly data: Atom[] = [{ "name": "Hydrogen", "symbol": "H", "id": 1, "weight": "1.008", "group": "Reactive nonmetal" }, { "name": "Helium", "symbol": "He", "id": 2, "weight": "4.0026", "group": "Noble gas" }, { "name": "Lithium", "symbol": "Li", "id": 3, "weight": "6.94", "group": "Alkali metal" }, { "name": "Beryllium", "symbol": "Be", "id": 4, "weight": "9.0122", "group": "Alkaline earth metal" }, { "name": "Boron", "symbol": "B", "id": 5, "weight": "10.81", "group": "Metalloid" }, { "name": "Carbon", "symbol": "C", "id": 6, "weight": "12.011", "group": "Reactive nonmetal" }, { "name": "Nitrogen", "symbol": "N", "id": 7, "weight": "14.007", "group": "Reactive nonmetal" }, { "name": "Oxygen", "symbol": "O", "id": 8, "weight": "15.999", "group": "Reactive nonmetal" }, { "name": "Fluorine", "symbol": "F", "id": 9, "weight": "18.998", "group": "Reactive nonmetal" }, { "name": "Neon", "symbol": "Ne", "id": 10, "weight": "20.180", "group": "Noble gas" }, { "name": "Sodium", "symbol": "Na", "id": 11, "weight": "22.990", "group": "Alkali metal" }, { "name": "Magnesium", "symbol": "Mg", "id": 12, "weight": "24.305", "group": "Alkaline earth metal" }, { "name": "Aluminium", "symbol": "Al", "id": 13, "weight": "26.982", "group": "Post-transition metal" }, { "name": "Silicon", "symbol": "Si", "id": 14, "weight": "28.085", "group": "Metalloid" }, { "name": "Phosphorus", "symbol": "P", "id": 15, "weight": "30.974", "group": "Reactive nonmetal" }, { "name": "Sulfur", "symbol": "S", "id": 16, "weight": "32.06", "group": "Reactive nonmetal" }, { "name": "Chlorine", "symbol": "Cl", "id": 17, "weight": "35.45", "group": "Reactive nonmetal" }, { "name": "Argon", "symbol": "Ar", "id": 18, "weight": "39.948", "group": "Noble gas" }, { "name": "Potassium", "symbol": "K", "id": 19, "weight": "39.098", "group": "Alkali metal" }, { "name": "Calcium", "symbol": "Ca", "id": 20, "weight": "40.078", "group": "Alkaline earth metal" }, { "name": "Scandium", "symbol": "Sc", "id": 21, "weight": "44.956", "group": "Transition metal" }, { "name": "Titanium", "symbol": "Ti", "id": 22, "weight": "47.867", "group": "Transition metal" }, { "name": "Vanadium", "symbol": "V", "id": 23, "weight": "50.942", "group": "Transition metal" }, { "name": "Chromium", "symbol": "Cr", "id": 24, "weight": "51.996", "group": "Transition metal" }, { "name": "Manganese", "symbol": "Mn", "id": 25, "weight": "54.938", "group": "Transition metal" }, { "name": "Iron", "symbol": "Fe", "id": 26, "weight": "55.845", "group": "Transition metal" }, { "name": "Cobalt", "symbol": "Co", "id": 27, "weight": "58.933", "group": "Transition metal" }, { "name": "Nickel", "symbol": "Ni", "id": 28, "weight": "58.693", "group": "Transition metal" }, { "name": "Copper", "symbol": "Cu", "id": 29, "weight": "63.546", "group": "Transition metal" }, { "name": "Zinc", "symbol": "Zn", "id": 30, "weight": "65.38", "group": "Transition metal" }, { "name": "Gallium", "symbol": "Ga", "id": 31, "weight": "69.723", "group": "Post-transition metal" }, { "name": "Germanium", "symbol": "Ge", "id": 32, "weight": "72.630", "group": "Metalloid" }, { "name": "Arsenic", "symbol": "As", "id": 33, "weight": "74.922", "group": "Metalloid" }, { "name": "Selenium", "symbol": "Se", "id": 34, "weight": "78.971", "group": "Reactive nonmetal" }, { "name": "Bromine", "symbol": "Br", "id": 35, "weight": "79.904", "group": "Reactive nonmetal" }, { "name": "Krypton", "symbol": "Kr", "id": 36, "weight": "83.798", "group": "Noble gas" }, { "name": "Rubidium", "symbol": "Rb", "id": 37, "weight": "85.468", "group": "Alkali metal" }, { "name": "Strontium", "symbol": "Sr", "id": 38, "weight": "87.62", "group": "Alkaline earth metal" }, { "name": "Yttrium", "symbol": "Y", "id": 39, "weight": "88.906", "group": "Transition metal" }, { "name": "Zirconium", "symbol": "Zr", "id": 40, "weight": "91.224", "group": "Transition metal" }, { "name": "Niobium", "symbol": "Nb", "id": 41, "weight": "92.906", "group": "Transition metal" }, { "name": "Molybdenum", "symbol": "Mo", "id": 42, "weight": "95.95", "group": "Transition metal" }, { "name": "Technetium", "symbol": "Tc", "id": 43, "weight": "(98)", "group": "Transition metal" }, { "name": "Ruthenium", "symbol": "Ru", "id": 44, "weight": "101.07", "group": "Transition metal" }, { "name": "Rhodium", "symbol": "Rh", "id": 45, "weight": "102.91", "group": "Transition metal" }, { "name": "Palladium", "symbol": "Pd", "id": 46, "weight": "106.42", "group": "Transition metal" }, { "name": "Silver", "symbol": "Ag", "id": 47, "weight": "107.87", "group": "Transition metal" }, { "name": "Cadmium", "symbol": "Cd", "id": 48, "weight": "112.41", "group": "Transition metal" }, { "name": "Indium", "symbol": "In", "id": 49, "weight": "114.82", "group": "Post-transition metal" }, { "name": "Tin", "symbol": "Sn", "id": 50, "weight": "118.71", "group": "Post-transition metal" }, { "name": "Antimony", "symbol": "Sb", "id": 51, "weight": "121.76", "group": "Metalloid" }, { "name": "Tellurium", "symbol": "Te", "id": 52, "weight": "127.60", "group": "Metalloid" }, { "name": "Iodine", "symbol": "I", "id": 53, "weight": "126.90", "group": "Reactive nonmetal" }, { "name": "Xenon", "symbol": "Xe", "id": 54, "weight": "131.29", "group": "Noble gas" }, { "name": "Caesium", "symbol": "Cs", "id": 55, "weight": "132.91", "group": "Alkali metal" }, { "name": "Barium", "symbol": "Ba", "id": 56, "weight": "137.33", "group": "Alkaline earth metal" }, { "name": "Lanthanum", "symbol": "La", "id": 57, "weight": "138.91", "group": "Lanthanide" }, { "name": "Cerium", "symbol": "Ce", "id": 58, "weight": "140.12", "group": "Lanthanide" }, { "name": "Praseodymium", "symbol": "Pr", "id": 59, "weight": "140.91", "group": "Lanthanide" }, { "name": "Neodymium", "symbol": "Nd", "id": 60, "weight": "144.24", "group": "Lanthanide" }, { "name": "Promethium", "symbol": "Pm", "id": 61, "weight": "(145)", "group": "Lanthanide" }, { "name": "Samarium", "symbol": "Sm", "id": 62, "weight": "150.36", "group": "Lanthanide" }, { "name": "Europium", "symbol": "Eu", "id": 63, "weight": "151.96", "group": "Lanthanide" }, { "name": "Gadolinium", "symbol": "Gd", "id": 64, "weight": "157.25", "group": "Lanthanide" }, { "name": "Terbium", "symbol": "Tb", "id": 65, "weight": "158.93", "group": "Lanthanide" }, { "name": "Dysprosium", "symbol": "Dy", "id": 66, "weight": "162.50", "group": "Lanthanide" }, { "name": "Holmium", "symbol": "Ho", "id": 67, "weight": "164.93", "group": "Lanthanide" }, { "name": "Erbium", "symbol": "Er", "id": 68, "weight": "167.26", "group": "Lanthanide" }, { "name": "Thulium", "symbol": "Tm", "id": 69, "weight": "168.93", "group": "Lanthanide" }, { "name": "Ytterbium", "symbol": "Yb", "id": 70, "weight": "173.05", "group": "Lanthanide" }, { "name": "Lutetium", "symbol": "Lu", "id": 71, "weight": "174.97", "group": "Lanthanide" }, { "name": "Hafnium", "symbol": "Hf", "id": 72, "weight": "178.49", "group": "Transition metal" }, { "name": "Tantalum", "symbol": "Ta", "id": 73, "weight": "180.95", "group": "Transition metal" }, { "name": "Tungsten", "symbol": "W", "id": 74, "weight": "183.84", "group": "Transition metal" }, { "name": "Rhenium", "symbol": "Re", "id": 75, "weight": "186.21", "group": "Transition metal" }, { "name": "Osmium", "symbol": "Os", "id": 76, "weight": "190.23", "group": "Transition metal" }, { "name": "Iridium", "symbol": "Ir", "id": 77, "weight": "192.22", "group": "Transition metal" }, { "name": "Platinum", "symbol": "Pt", "id": 78, "weight": "195.08", "group": "Transition metal" }, { "name": "Gold", "symbol": "Au", "id": 79, "weight": "196.97", "group": "Transition metal" }, { "name": "Mercury", "symbol": "Hg", "id": 80, "weight": "200.59", "group": "Transition metal" }, { "name": "Thallium", "symbol": "Tl", "id": 81, "weight": "204.38", "group": "Post-transition metal" }, { "name": "Lead", "symbol": "Pb", "id": 82, "weight": "207.2", "group": "Post-transition metal" }, { "name": "Bismuth", "symbol": "Bi", "id": 83, "weight": "208.98", "group": "Post-transition metal" }, { "name": "Polonium", "symbol": "Po", "id": 84, "weight": "(209)", "group": "Post-transition metal" }, { "name": "Astatine", "symbol": "At", "id": 85, "weight": "(210)", "group": "Metalloid" }, { "name": "Radon", "symbol": "Rn", "id": 86, "weight": "(222)", "group": "Noble gas" }, { "name": "Francium", "symbol": "Fr", "id": 87, "weight": "(223)", "group": "Alkali metal" }, { "name": "Radium", "symbol": "Ra", "id": 88, "weight": "(226)", "group": "Alkaline earth metal" }, { "name": "Actinium", "symbol": "Ac", "id": 89, "weight": "(227)", "group": "Actinide" }, { "name": "Thorium", "symbol": "Th", "id": 90, "weight": "232.04", "group": "Actinide" }, { "name": "Protactinium", "symbol": "Pa", "id": 91, "weight": "231.04", "group": "Actinide" }, { "name": "Uranium", "symbol": "U", "id": 92, "weight": "238.03", "group": "Actinide" }, { "name": "Neptunium", "symbol": "Np", "id": 93, "weight": "(237)", "group": "Actinide" }, { "name": "Plutonium", "symbol": "Pu", "id": 94, "weight": "(244)", "group": "Actinide" }, { "name": "Americium", "symbol": "Am", "id": 95, "weight": "(243)", "group": "Actinide" }, { "name": "Curium", "symbol": "Cm", "id": 96, "weight": "(247)", "group": "Actinide" }, { "name": "Berkelium", "symbol": "Bk", "id": 97, "weight": "(247)", "group": "Actinide" }, { "name": "Californium", "symbol": "Cf", "id": 98, "weight": "(251)", "group": "Actinide" }, { "name": "Einsteinium", "symbol": "Es", "id": 99, "weight": "(252)", "group": "Actinide" }, { "name": "Fermium", "symbol": "Fm", "id": 100, "weight": "(257)", "group": "Actinide" }, { "name": "Mendelevium", "symbol": "Md", "id": 101, "weight": "(258)", "group": "Actinide" }, { "name": "Nobelium", "symbol": "No", "id": 102, "weight": "(259)", "group": "Actinide" }, { "name": "Lawrencium", "symbol": "Lr", "id": 103, "weight": "(266)", "group": "Actinide" }, { "name": "Rutherfordium", "symbol": "Rf", "id": 104, "weight": "(267)", "group": "Transition metal" }, { "name": "Dubnium", "symbol": "Db", "id": 105, "weight": "(268)", "group": "Transition metal" }, { "name": "Seaborgium", "symbol": "Sg", "id": 106, "weight": "(269)", "group": "Transition metal" }, { "name": "Bohrium", "symbol": "Bh", "id": 107, "weight": "(270)", "group": "Transition metal" }, { "name": "Hassium", "symbol": "Hs", "id": 108, "weight": "(277)", "group": "Transition metal" }, { "name": "Meitnerium", "symbol": "Mt", "id": 109, "weight": "(278)", "group": "Unknown" }, { "name": "Darmstadtium", "symbol": "Ds", "id": 110, "weight": "(281)", "group": "Unknown" }, { "name": "Roentgenium", "symbol": "Rg", "id": 111, "weight": "(282)", "group": "Unknown" }, { "name": "Copernicium", "symbol": "Cn", "id": 112, "weight": "(285)", "group": "Unknown" }, { "name": "Nihonium", "symbol": "Nh", "id": 113, "weight": "(286)", "group": "Unknown" }, { "name": "Flerovium", "symbol": "Fl", "id": 114, "weight": "(289)", "group": "Unknown" }, { "name": "Moscovium", "symbol": "Mc", "id": 115, "weight": "(290)", "group": "Unknown" }, { "name": "Livermorium", "symbol": "Lv", "id": 116, "weight": "(293)", "group": "Unknown" }, { "name": "Tennessine", "symbol": "Ts", "id": 117, "weight": "(294)", "group": "Unknown" }, { "name": "Oganesson", "symbol": "Og", "id": 118, "weight": "(294)", "group": "Unknown" }];

	constructor() { }
}
