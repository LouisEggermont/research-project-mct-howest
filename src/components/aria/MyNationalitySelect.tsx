import { Select, SelectItem } from "../aria/Select";

// Nationality list with both English keys and Dutch names
const nationalities = [
  { id: "afghan", name: "Afghaans" },
  { id: "albanian", name: "Albanees" },
  { id: "algerian", name: "Algerijns" },
  { id: "american", name: "Amerikaans" },
  { id: "andorran", name: "Andorrees" },
  { id: "angolan", name: "Angolees" },
  { id: "antiguans", name: "Antiguaans" },
  { id: "argentinean", name: "Argentijns" },
  { id: "armenian", name: "Armeens" },
  { id: "australian", name: "Australisch" },
  { id: "austrian", name: "Oostenrijks" },
  { id: "azerbaijani", name: "Azerbeidzjaans" },
  { id: "bahamian", name: "Bahamees" },
  { id: "bahraini", name: "Bahreins" },
  { id: "bangladeshi", name: "Bengaals" },
  { id: "barbadian", name: "Barbadees" },
  { id: "belarusian", name: "Wit-Russisch" },
  { id: "belgian", name: "Belgisch" },
  { id: "brazilian", name: "Braziliaans" },
  { id: "british", name: "Brits" },
  { id: "bulgarian", name: "Bulgaars" },
  { id: "canadian", name: "Canadees" },
  { id: "chinese", name: "Chinees" },
  { id: "danish", name: "Deens" },
  { id: "dutch", name: "Nederlands" },
  { id: "french", name: "Frans" },
  { id: "german", name: "Duits" },
  { id: "greek", name: "Grieks" },
  { id: "hungarian", name: "Hongaars" },
  { id: "icelander", name: "IJslands" },
  { id: "indian", name: "Indiaas" },
  { id: "indonesian", name: "Indonesisch" },
  { id: "iranian", name: "Iraans" },
  { id: "iraqi", name: "Iraaks" },
  { id: "irish", name: "Iers" },
  { id: "israeli", name: "Israëlisch" },
  { id: "italian", name: "Italiaans" },
  { id: "japanese", name: "Japans" },
  { id: "kazakhstani", name: "Kazachs" },
  { id: "kenyan", name: "Keniaans" },
  { id: "latvian", name: "Lets" },
  { id: "lebanese", name: "Libanees" },
  { id: "libyan", name: "Libisch" },
  { id: "lithuanian", name: "Litouws" },
  { id: "luxembourger", name: "Luxemburgs" },
  { id: "malaysian", name: "Maleisisch" },
  { id: "mexican", name: "Mexicaans" },
  { id: "moroccan", name: "Marokkaans" },
  { id: "nepalese", name: "Nepalees" },
  { id: "norwegian", name: "Noors" },
  { id: "pakistani", name: "Pakistaans" },
  { id: "polish", name: "Pools" },
  { id: "portuguese", name: "Portugees" },
  { id: "romanian", name: "Roemeens" },
  { id: "russian", name: "Russisch" },
  { id: "spanish", name: "Spaans" },
  { id: "swedish", name: "Zweeds" },
  { id: "swiss", name: "Zwitser" },
  { id: "turkish", name: "Turks" },
  { id: "ukrainian", name: "Oekraïens" },
  { id: "welsh", name: "Welsh" },
];

// Sort nationalities alphabetically (Dutch locale)
const sortedNationalities = [...nationalities].sort((a, b) =>
  a.name.localeCompare(b.name, "nl")
);

export default function MyNationalitySelect({ ...props }) {
  return (
    <Select {...props}>
      {sortedNationalities.map((item) => (
        <SelectItem key={item.id} id={item.id} textValue={item.name}>
          {item.name}
        </SelectItem>
      ))}
    </Select>
  );
}
