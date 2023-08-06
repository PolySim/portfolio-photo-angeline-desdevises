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
import { updateReports } from "@/Components/Admin/Edit/updateReports.ts";
import { delete_report } from "@/API/delete_report.ts";
import { create_report } from "@/API/create_report.ts";

export default function Edit(): JSX.Element {
  const params = useParams();
  const [reportId, setReportId] = useState<string>(params.id || "-1");
  const { reports, setReports } = useContext(MainContext);
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
        if (reportId === "-1") {
          const response = await create_report(data);
          setReportId(response.report_id);
          setReports((curr) => [
            ...curr,
            {
              index: parseInt(response.report_id),
              title: data.title,
              article: data.article,
            },
          ]);
        } else {
          void update_title(data, reportId);
          setReports(updateReports(reports, data, parseInt(reportId)));
        }
      } catch (e) {
        console.log(e);
      }
    };
    void sendData();
  };

  const handleDelete = () => {
    try {
      void delete_report(parseInt(reportId));
      setReports((curr) =>
        curr.filter((report) => report.index !== parseInt(reportId)),
      );
    } catch (e) {
      console.log(e);
    }
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
            <input
              onClick={() => {
                formRef.current?.reset();
              }}
              type="button"
              value="Annuler"
            />
            {parseInt(reportId) > 3 ? (
              <Link onClick={handleDelete} to={"/admin"}>
                <input type="button" value="Delete" />
              </Link>
            ) : (
              <></>
            )}
          </div>
        </AdminForm>
        <AdminImages
          reportId={parseInt(reportId)}
          images={images}
          setImages={setImages}
        />
      </EditStyle>
    </>
  );
}
