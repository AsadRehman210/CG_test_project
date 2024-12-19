import { TextField } from '@mui/material';
import React from 'react';

const Generalites = ({ formData, handleChange }) => {
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
    <div className="w-full flex flex-col gap-8">
      {/* Contact Information */}
      <div className="max-w-[40.875rem]">
        <h2 className="text-sm font-medium text-[#00244D] mb-4">
          Identification de la personne en charge du dossier
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
         
          <TextField
          id="Nom-contact*"
          label="Nom du contact*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        <TextField
          id="Telephone-contact*"
          label="Téléphone du contact*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        </div>
        <div className="mt-4">
           <TextField
          id="Email-contact"
          label="Email du contact*"
          variant="outlined"
          fullWidth
          required
          sx={styles}
        />
        </div>
      </div>

      {/* General Information */}
      <div className="bg-[#FAFAFA] rounded-[1.25rem] p-5 sm:p-6 max-w-[40.875rem]">
        <div className='flex justify-between items-center'>
        <h2 className="text-sm font-medium text-[#00244D] mb-4">
          Information d'ordre général
        </h2>
        <p className='font-medium text-[#0468B4] text-[0.625rem] underline'>Modifier les détails</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Société ou raison sociale</p><p className="text-[#00244D] font-normal text-xs">Arptc</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Type d'entreprise</p><p className="text-[#00244D] font-normal text-xs">SA</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1"># Registre de commerce</p><p className="text-[#00244D] font-normal text-xs">3344544</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1"># Id. nationale</p><p className="text-[#00244D] font-normal text-xs">332224</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Numéro Impôt</p><p className="text-[#00244D] font-normal text-xs">33453</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Téléphone de la société</p><p className="text-[#00244D] font-normal text-xs">+243834373167</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Fax</p><p className="text-[#00244D] font-normal text-xs">+243834373167</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Email de la société</p><p className="text-[#00244D] font-normal text-xs">guichet.uni@arptc.gouv.cd</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Site Internet</p><p className="text-[#00244D] font-normal text-xs">https:arptc.gouv.cd</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Représentant légal</p><p className="text-[#00244D] font-normal text-xs">Christian Katende</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Adresse de la société</p><p className="text-[#00244D] font-normal text-xs">Kinshasa / Gombe</p></div>
          <div><p className="text-[0.625rem] font-normal text-[#72869C] mb-1">Province</p><p className="text-[#00244D] font-normal text-xs">Kinshasa</p></div>
        </div>
      </div>
    </div>
  );
};

export default Generalites;
