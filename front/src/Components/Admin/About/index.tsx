import { AdminForm, BackMenu } from "@/Components/Admin/styled.ts";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { AdminAboutFormType } from "@/type.ts";
import { get_biography } from "@/API/get_biography.ts";
import { AdminBiographyContainer } from "@/Components/Admin/About/styled.ts";
import { update_biography } from "@/API/update_biography.ts";

type Biography = {
  fr: string;
  en: string;
};

const AdminAbout = () => {
  const [biography, setBiography] = useState<Biography | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { register, handleSubmit } = useForm<AdminAboutFormType>();

  useEffect(() => {
    const getData = async () => {
      const data = await get_biography();
      setBiography(data);
    };
    void getData();
  }, []);

  const onSubmit = (data: AdminAboutFormType) => {
    const sendData = async () => {
      try {
        void update_biography({
          ...data,
          biography_fr:
            data.biography_fr === "" ? biography?.fr || "" : data.biography_fr,
          biography_us:
            data.biography_us === "" ? biography?.en || "" : data.biography_us,
        });
        setBiography((curr) => ({
          ...curr,
          fr: data.biography_fr === "" ? curr?.fr || "" : data.biography_fr,
          en: data.biography_us === "" ? curr?.en || "" : data.biography_us,
        }));
      } catch (e) {
        console.log(e);
      }
    };
    void sendData();
  };

  return (
    <>
      <BackMenu to="/admin">Retour au menu</BackMenu>
      <AdminBiographyContainer>
        <AdminForm ref={formRef} onSubmit={handleSubmit(onSubmit)}>
          <p>Biographie Fr</p>
          <textarea
            defaultValue={biography?.fr}
            placeholder="Il n'est pas autorisé de laisser libre"
            {...register("biography_fr")}
            required
          />
          <p>Biography Us</p>
          <textarea
            defaultValue={biography?.en}
            placeholder="Il n'est pas autorisé de laisser libre"
            {...register("biography_us")}
            required
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
          </div>
        </AdminForm>
      </AdminBiographyContainer>
    </>
  );
};

export default AdminAbout;
