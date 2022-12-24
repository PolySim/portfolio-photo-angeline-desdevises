import React, { useState, useEffect, useRef } from "react";
import { UpdateAlbum } from "src/styled";
import getAdminListImage from "src/API/getAdminListImage";
import { AdminImagesType } from "src/type";
import { useParams } from "react-router-dom";

const cleAPI = process.env.REACT_APP_API_URL;

export default function UpdateAlbumView(): JSX.Element {
  const { id } = useParams();
  const [album, setAlbum] = useState<AdminImagesType>({
    title: "",
    content: "",
    images: [],
  });
  const [albumId, setAlbumId] = useState<number>(id ? parseInt(id) : -1);
  const titleRef: any = useRef();
  const contentRef: any = useRef();

  useEffect(() => {
    async function getData() {
      const data = await getAdminListImage(id || "");
      setAlbum((curr) => data);
    }
    getData();
  }, [id]);

  return (
    <UpdateAlbum>
      <div>
        <div>
          <div>Titre</div>
          <input
            ref={titleRef}
            type="text"
            defaultValue={album.title}
            placeholder="Merci de rentrer un titre"
          />
        </div>
        <div>
          <div>Article</div>
          <textarea
            ref={contentRef}
            defaultValue={album.content || ""}
            placeholder="Il est autorisé de laisser vide"
          />
        </div>
        <div>
          <div
            onClick={() => {
              if (titleRef.current.value) {
                setAlbum((curr) => ({
                  ...curr,
                  title: titleRef.current.value,
                  content: contentRef.current.value,
                }));
                id
                  ? fetch(
                      `${cleAPI}/admin/updateAlbum/${albumId}/1?title=${titleRef.current.value}&content=${contentRef.current.value}`
                    )
                  : fetch(
                      `${cleAPI}/admin/updateAlbum/${albumId}/0?title=${titleRef.current.value}&content=${contentRef.current.value}`
                    );
              }
            }}
          >
            Valider
          </div>
          <div
            onClick={() => {
              titleRef.current.value = album.title;
              contentRef.current.value = album.content;
            }}
          >
            Annuler
          </div>
        </div>
      </div>
      <div></div>
    </UpdateAlbum>
  );
}
