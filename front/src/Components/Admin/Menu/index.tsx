import {
  AdminOptionLink,
  AdminOptionTable,
  AdminOptionTableCell,
  AdminOptionTableHead,
} from "@/Components/Admin/styled.ts";
import React, { useContext } from "react";
import { MainContext } from "@/context.ts";

export default function AdminMenu(): JSX.Element {
  const { reports } = useContext(MainContext);

  return (
    <AdminOptionTable>
      <AdminOptionTableHead>Title</AdminOptionTableHead>
      <AdminOptionTableHead>Actions</AdminOptionTableHead>
      <AdminOptionTableCell>About you</AdminOptionTableCell>
      <AdminOptionTableCell>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AdminOptionLink to="about">Edit</AdminOptionLink>
        </div>
      </AdminOptionTableCell>
      <AdminOptionTableCell>Reportage Order</AdminOptionTableCell>
      <AdminOptionTableCell>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AdminOptionLink to="0">Edit</AdminOptionLink>
        </div>
      </AdminOptionTableCell>
      <AdminOptionTableCell>Portfolio</AdminOptionTableCell>
      <AdminOptionTableCell>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AdminOptionLink to="3">Edit</AdminOptionLink>
        </div>
      </AdminOptionTableCell>
      <AdminOptionTableCell>Portrait</AdminOptionTableCell>
      <AdminOptionTableCell>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AdminOptionLink to="1">Edit</AdminOptionLink>
        </div>
      </AdminOptionTableCell>
      <AdminOptionTableCell>Publication</AdminOptionTableCell>
      <AdminOptionTableCell>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AdminOptionLink to="2">Edit</AdminOptionLink>
        </div>
      </AdminOptionTableCell>
      <AdminOptionTableCell>Créer un reportage</AdminOptionTableCell>
      <AdminOptionTableCell>
        <div style={{ display: "flex", justifyContent: "end" }}>
          <AdminOptionLink to="-1">Edit</AdminOptionLink>
        </div>
      </AdminOptionTableCell>
      {reports.map((report) => (
        <React.Fragment key={report.title}>
          <AdminOptionTableCell>{report.title}</AdminOptionTableCell>
          <AdminOptionTableCell>
            <div style={{ display: "flex", justifyContent: "end" }}>
              <AdminOptionLink to={`${report.index}`}>Edit</AdminOptionLink>
            </div>
          </AdminOptionTableCell>
        </React.Fragment>
      ))}
    </AdminOptionTable>
  );
}
