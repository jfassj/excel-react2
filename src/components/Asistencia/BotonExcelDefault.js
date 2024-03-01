import React, { Component } from 'react';
import {Button, Spinner} from 'reactstrap';
import * as XLSX from 'xlsx';

const BotonExcelDefault = ({ asistencia}) => {
    const [loading, setLoading] = useState(false);

    const handleDownload = () => {
        setLoading(true);

        const libro = XLSX.utils.book_new();

        const hoja = XLSX.utils.json_to_sheet(asistencia);

        XLSX.utils.book_append_sheet(libro, hoja, "Asistencia");

        setTimeout(() => {
            XLSX.writeFile(libro, "AsistenciaDefault.xlsx");
            setLoading(false);
        }, 1000);
    };

    return (
        <>
        {!loading ? (
          <Button color="success" onClick={handleDownload}>
            Excel Default
          </Button>
        ) : (
          <Button color="success" disabled>
            <Spinner size="sm">Cargando...</Spinner>
            <span> Generando...</span>
          </Button>
        )}
      </>
    )
  }
}

export default BotonExcelDefault