import React, { useState } from "react";
import "./ConverterBlock.css";

function ConverterBlock() {
  const [fileName, setFileName] = useState("Nenhum arquivo selecionado");

  const handleFileChange = (e) => {
    setFileName(e.target.files[0]?.name || "Nenhum arquivo selecionado");
  };

  return (
    <section className="converter-block">
      <h2>Converta a remessa em XLSX para XML</h2>
      <div className="file-input-wrapper">
        <input 
          type="file" 
          id="file-upload" 
          accept=".xlsx, .xls" 
          hidden 
          onChange={handleFileChange} 
        />
        <label htmlFor="file-upload" className="file-upload-label">Escolher Arquivo</label>
        <span id="file-name">{fileName}</span>
      </div>
      <button className="download-button">Fazer Download do XML</button>
    </section>
  );
}

export default ConverterBlock;
