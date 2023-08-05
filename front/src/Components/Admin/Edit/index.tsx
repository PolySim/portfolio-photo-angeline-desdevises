import {
  AdminForm,
  AdminImage,
  AdminImages,
  BackMenu,
  EditStyle,
} from "@/Components/Admin/styled.ts";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { AdminFormType, ImagesID } from "@/type.ts";
import images_information from "@/API/images_information.ts";
import { useForm } from "react-hook-form";
import { MainContext } from "@/context.ts";
import { article, title } from "@/Components/Admin/Edit/data.ts";

export default function Edit(): JSX.Element {
  const params = useParams();
  const { reports } = useContext(MainContext);
  const reportId = params.id || "-1";
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
        const data = await images_information(reportId);
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    void getData();
  }, [reportId]);

  const onSubmit = (data: AdminFormType) => {
    console.log(data);
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
          </div>
        </AdminForm>
        <AdminImages>
          <div>
            {images.map((image) => (
              <AdminImage key={image.id}>{image.id}</AdminImage>
            ))}
          </div>
          <div></div>
        </AdminImages>
      </EditStyle>
    </>
  );
}
