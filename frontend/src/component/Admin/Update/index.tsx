import React, { useContext } from "react";
import AdminConnectionView from "src/component/Admin/Update/Connection";
import { MainContext } from "src/context";
import SelectAlbumView from "src/component/Admin/Update/SelectAlbum";

export default function AdminView() {
  const { connected } = useContext(MainContext);

  return connected ? <SelectAlbumView /> : <AdminConnectionView />;
}
