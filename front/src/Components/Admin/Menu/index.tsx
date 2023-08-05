import { AdminMenuStyle, AdminOptionLink } from "@/Components/Admin/styled.ts";
import { useContext } from "react";
import { MainContext } from "@/context.ts";

export default function AdminMenu(): JSX.Element {
  const { reports } = useContext(MainContext);

  return (
    <AdminMenuStyle>
      <AdminOptionLink to="3">Portfolio</AdminOptionLink>
      <AdminOptionLink to="1">Portrait</AdminOptionLink>
      <AdminOptionLink to="2">Publication</AdminOptionLink>
      <AdminOptionLink to="-1">Créer un reportage</AdminOptionLink>
      {reports.map((report) => (
        <AdminOptionLink key={report.index} to={`${report.index}`}>
          {report.title}
        </AdminOptionLink>
      ))}
    </AdminMenuStyle>
  );
}
