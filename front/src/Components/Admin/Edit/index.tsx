import { AdminForm, BackMenu, EditStyle } from "@/Components/Admin/styled.ts";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AdminFormType, ImagesID } from "@/type.ts";
import images_information from "@/API/images_information.ts";
import { useForm } from "react-hook-form";
import { MainContext } from "@/context.ts";
import { article, title } from "@/Components/Admin/Edit/data.ts";
import AdminImages from "@/Components/Admin/Edit/Images";
import { update_title } from "@/API/update_title.ts";

export default function Edit(): JSX.Element {
  const params = useParams();
  const reportId = params.id || "-1";
  const { reports } = useContext(MainContext);
  const [images, setImages] = useState<ImagesID>([
    {
      id: -1,
    },
  ]);
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit } = useForm<AdminFormType>();

  useEffect(() => {
    const getData = async () => {
      try {
        if (reportId !== "-1") {
          const data = await images_information(reportId);
          setImages(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    void getData();
  }, [reportId]);

  const onSubmit = (data: AdminFormType) => {
    const sendData = async () => {
      try {
        void update_title(data, reportId);
      } catch (e) {
        console.log(e);
      }
    };
    void sendData();
  };

  return (
    <>
      <BackMenu to="/admin">Retour au menu</BackMenu>
      <EditStyle>
        <AdminForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <p>Titre</p>
          <input
            placeholder="Merci de rentrer un titre"
            defaultValue={title(reports, parseInt(reportId))}
            type="text"
            {...register("title")}
            required
          />
          <p>Article</p>
          <textarea
            defaultValue={article(reports, parseInt(reportId))}
            placeholder="Il est autorisé de laisser libre"
            {...register("article")}
          />
          <div>
            <input type="submit" value="Valider" />
            <input type="button" value="Annuler" />
            {parseInt(reportId) > 3 ? (
              <Link to={"/admin"}>
                <input type="button" value="Delete" />
              </Link>
            ) : (
              <></>
            )}
          </div>
        </AdminForm>
        <AdminImages images={images} setImages={setImages} />
      </EditStyle>
    </>
  );
}
