import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import antena from "../../../assets/images/antena.svg";
import phone from "../../../assets/images/phone.svg";
import mixte from "../../../assets/images/mixte.svg";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const RequestNature = () => {
  const [selected, setSelected] = useState("radio");
  const styles = {
    fontSize: "16px",
    height: "50px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#E3E7EB",
      },
      "&:hover fieldset": {
        borderColor: "#E3E7EB",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#E3E7EB",
      },
      "& .MuiInputBase-input": {
        color: "#00244D",
        fontSize: "12px",
        fontWeight: "400",
      },
    },
    "& .MuiInputLabel-root": {
      fontSize: "14px",
      color: "#9CAABA",
      "&.Mui-focused": {
        color: "#9CAABA",
      },
    },
  };

  return (
    <>
      {/* Section II: Identification de l’équipement */}
      <div className="mb-6">
        <h3 className="font-medium mb-2 text-[#00244D] text-sm">
          II. Identification de l’équipement
        </h3>
        {/* Equipment type options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {/* Equipement terminal */}
          <label
            className={`relative flex bg-[#FAFAFA] items-center justify-center p-4 border rounded-lg cursor-pointer ${
              selected === "terminal"
                ? " border-[#0468B4] text-[#0468B4]"
                : "border-[#FAFAFA] text-[#00244D]"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="terminal"
              className="absolute top-2 right-2"
              checked={selected === "terminal"}
              onChange={() => setSelected("terminal")}
            />
            <div className="flex items-center gap-2 w-full">
              <img src={phone} alt="phone" className="w-6 h-6" />
              <span
                className={`text-[#00244D] font-medium text-xs ${
                  selected === "terminal" ? "text-[#0468B4]" : "text-[#00244D]"
                }`}
              >
                Équipement terminal
              </span>
            </div>
          </label>

          {/* Installation radioélectrique */}
          <label
            className={`relative flex bg-[#FAFAFA] items-center justify-center p-4 border rounded-lg cursor-pointer ${
              selected === "radio"
                ? "border-[#0468B4] text-[#0468B4]"
                : "border-[#FAFAFA] text-[#00244D]"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="radio"
              className="absolute top-2 right-2"
              checked={selected === "radio"}
              onChange={() => setSelected("radio")}
            />
            <div className="flex items-center gap-2 w-full">
              <img src={antena} alt="radio" className="w-6 h-6" />
              <span
                className={`text-[#00244D] font-medium text-xs ${
                  selected === "radio" ? "text-[#0468B4]" : "text-[#00244D]"
                }`}
              >
                Installation radioélectrique
              </span>
            </div>
          </label>

          {/* Mixte */}
          <label
            className={`relative flex bg-[#FAFAFA] items-center justify-center p-4 border rounded-lg cursor-pointer ${
              selected === "mixte"
                ? "border-[#0468B4] bg-[#FAFAFA] text-[#0468B4]"
                : "border-[#FAFAFA]"
            }`}
          >
            <input
              type="radio"
              name="option"
              value="mixte"
              className="absolute top-2 right-2"
              checked={selected === "mixte"}
              onChange={() => setSelected("mixte")}
            />
            <div className="flex justify-start items-center gap-2 w-full">
              <img
                src={mixte}
                alt="mixte"
                className={`w-6 h-6 fill-[#00244D] font-medium ${
                  selected === "mixte" ? "fill-[#0468B4]" : "fill-[#00244D]"
                }`}
              />
              <span
                className={`text-[#00244D] font-medium text-xs ${
                  selected === "mixte" ? "text-[#0468B4]" : "text-[#00244D]"
                }`}
              >
                Mixte
              </span>
            </div>
          </label>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextField
            id="type"
            label="Type*"
            variant="outlined"
            fullWidth
            required
            sx={styles}
          />

          <TextField
            id="brand"
            label="Marque*"
            variant="outlined"
            fullWidth
            required
            sx={styles}
          />
          <TextField
            id="serial-number"
            label="Numéro de série"
            variant="outlined"
            fullWidth
            required
            sx={styles}
          />
          <TextField
            id="model"
            label="Modèle*"
            variant="outlined"
            fullWidth
            required
            sx={styles}
          />
          <TextField
            id="manufacturer"
            label="Constructeur*"
            variant="outlined"
            fullWidth
            required
            sx={styles}
          />
          <FormControl fullWidth variant="outlined" required sx={styles}>
            <InputLabel id="manufacturing-country-label">
              Pays de fabrication*
            </InputLabel>
            <Select
              labelId="manufacturing-country-label"
              id="manufacturing-country"
              label="Pays de fabrication*"
              defaultValue=""
              sx={styles}
            >
              <MenuItem value="" disabled>
                Pays de fabrication*
              </MenuItem>
              <MenuItem value="france">France</MenuItem>
              <MenuItem value="usa">États-Unis</MenuItem>
              <MenuItem value="china">Chine</MenuItem>
              <MenuItem value="germany">Allemagne</MenuItem>
              <MenuItem value="japan">Japon</MenuItem>
              <MenuItem value="india">Inde</MenuItem>
            </Select>
          </FormControl>

          <TextField
            id="compliance-marking"
            label="Marquage de conformité à une norme"
            variant="outlined"
            fullWidth
            required
            sx={styles}
          />
          <TextField
            id="homologation"
            label="Homologation du pays d'origine et/ou autres"
            variant="outlined"
            fullWidth
            sx={styles}
          />
          <TextField
            id="stock-quantity"
            label="Quantité en stock"
            variant="outlined"
            fullWidth
            sx={styles}
          />
          <TextField
            id="cif-value"
            label="Valeur Cif de l'équipement"
            variant="outlined"
            fullWidth
            sx={styles}
          />
        </div>
      </div>

      {/* Section III: Equipment */}
      <h3 className="font-medium mb-2 text-[#00244D] text-sm mb-2">
        III. Caractéristiques de l'équipement
      </h3>

      {/* Radio Buttons */}
      <div className="mb-4 flex gap-4">
        <div className="flex items-center">
          <input type="radio" name="tech" id="digital" className="mr-2" />
          <label htmlFor="digital" className="text-gray-700">
            Technologie numérique
          </label>
        </div>
        <div className="flex items-center">
          <input type="radio" name="tech" id="analog" className="mr-2" />
          <label htmlFor="analog" className="text-gray-700">
            Technologie analogique
          </label>
        </div>
      </div>

      {/* Frequency Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <TextField
          id="emission-frequency"
          label="Fréquence d'émission*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="reception-frequency"
          label="Fréquence de réception*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="bandwidth"
          label="Largeur de bande des canaux*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="channel-selection"
          label="Possibilité de choix des canaux"
          variant="outlined"
          fullWidth
          sx={styles}
        />
      </div>

      {/* Antenna Section */}
      <div className="mb-4">
        <div className="flex gap-4">
          <div className="flex items-center">
            <input
              type="radio"
              name="antenna"
              id="integrated"
              className="mr-2"
            />
            <label
              htmlFor="integrated"
              className="text-[#00244D] font-normal text-xs"
            >
              Intégrée
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="antenna" id="external" className="mr-2" />
            <label
              htmlFor="external"
              className="text-[#00244D] font-normal text-xs"
            >
              Externe
            </label>
          </div>
          <div className="flex items-center">
            <input type="radio" name="antenna" id="mixed" className="mr-2" />
            <label
              htmlFor="mixed"
              className="text-[#00244D] font-normal text-xs"
            >
              Mixte
            </label>
          </div>
        </div>
      </div>

      {/* Bottom Row Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <TextField
          id="par"
          label="Puissance Apparente Rayonnée (PAR)*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="pier"
          label="Puissance Isotropique Rayonnée Equivalente*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="transmitter-power"
          label="Puissance de l'émetteur*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="homologation-country"
          label="Homologation du pays d'origine et/ou autres"
          variant="outlined"
          fullWidth
          sx={styles}
        />
      </div>

      {/* Section 2: Conformity */}
      <div className="mt-8">
        <h3 className="font-medium mb-2 text-[#00244D] text-sm">
          IV. Conformité de l'équipement
        </h3>

        <TextField
          id="interfaces-homologation"
          label="Interfaces soumises à l’homologation*"
          variant="outlined"
          fullWidth
          sx={styles}
        />
      </div>

      {/* Section 3: Normes Applicables */}
      <div className="mt-6 pb-4 grid grid-cols-1 gap-4 ">
        <div className="flex items-center">
          <h3 className="font-medium mb-2 text-[#00244D] text-sm mr-2">
            Normes applicables
          </h3>
        </div>
        <TextField
          id="aspect-telecommunications"
          label="Aspect télécommunications*"
          variant="outlined"
          fullWidth
          sx={styles}
        />

        <TextField
          id="ompatibilite-emc"
          label="Exigences de compatibilité électromagnétique*"
          variant="outlined"
          fullWidth
          sx={styles}
        />

        <TextField
          id="securite-electrique"
          label="Exigences de sécurité électrique*"
          variant="outlined"
          fullWidth
          sx={styles}
        />
      </div>
    </>
  );
};

export default RequestNature;
