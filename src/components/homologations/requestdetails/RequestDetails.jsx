import React, { useState } from "react";
import RequestNature from "./RequestNature";
import { TextField } from "@mui/material";

const RequestDetails = () => {
  const [nature, setNature] = useState("");
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
    <div className="min-h-screen">
      <div className="max-w-4xl mb-4">
        <p className="text-xs text-[#72869C] font-normal mb-6">
          Cette application est associée à un équipement, vous pouvez en
          homologuer d’autres ultérieurement.
        </p>

        {/* Section I: Nature de la demande */}
        <div className="mb-6">
          <h3 className="font-medium mb-2 text-[#00244D] text-sm">
            I. Nature de la demande
          </h3>
          <div className="flex items-center gap-6 mb-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="nature"
                value="homologation"
                checked={nature === "homologation"}
                onChange={() => setNature("homologation")}
                className="form-radio text-[#0468B4]"
              />

              <span className="ml-2 text-[#00244D] text-xs font-normal">
                Homologation
              </span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="nature"
                value="temporary"
                checked={nature === "temporary"}
                onChange={() => setNature("temporary")}
                className="form-radio text-[#0468B4]"
              />
              <span className="ml-2 text-[#00244D] text-xs font-normal">
                Admission temporaire
              </span>
            </label>
          </div>

          {/* Conditionally show the input field */}
          {nature === "temporary" && (
            <TextField
              id="Finalite-temporaire*"
              label="Finalité de l’admission temporaire*"
              variant="outlined"
              fullWidth
              required
              sx={styles}
            />
          )}
        </div>

        {nature && <RequestNature />}
      </div>
    </div>
  );
};

export default RequestDetails;
