import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Container, Table } from "reactstrap";
import BotonExcelDefault from "./Asistencia/BotonExcelDefault";
import BotonExcelEstilizado from "./Asistencia/BotonExcelEstilizado";

const AdmAsistencia = () => {
  const [asistencia, setAsistencia] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/asistencia")
      .then((res) => res.json())
      .then((json) => {
        let listaAsistencia = json.products.map((data) => {
          return {
            no_asistencia: data.asistencia,
            nombre: data.nombre,
            uno: data.uno,
            dos: data.dos,
            tres: data.tres,
          };
        });
        setAsistencia(listaAsistencia);
      });
  }, []);

  return (
    <Container className="pt-5">
      <Card>
        <CardHeader>
          <div className="d-flex justify-content-between">
            <CardTitle>Lista de Asistencia</CardTitle>
            <div>
              <BotonExcelDefault asistencia={asistencia} />
              <BotonExcelEstilizado qsistencia={asistencia} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="scrolling">
          <Table bordered hover>
            <thead className="bg-primary text-white">
              <tr>
                <th>No. Asistencia</th>
                <th>Nombre</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
              </tr>
            </thead>
            <tbody>
              {asistencia.map((asistencia) => {
                return (
                  <tr key={asistencia.id}>
                    <td>{asistencia.id}</td>
                    <td>{asistencia.nombre}</td>
                    <td>{asistencia.marca}</td>
                    <td>{asistencia.categoria}</td>
                    <td>{asistencia.cantidad}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </Container>
  );
};

export default AdmAsistencia;
