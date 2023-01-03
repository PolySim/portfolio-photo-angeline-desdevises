import React, { useState, useEffect, useRef } from "react";
import { UpdateAlbum } from "src/styled";
import getAdminListImage from "src/API/getAdminListImage";
import { getMaxAlbumId } from "src/API/getMaxAlbumId";
import { AdminImagesType } from "src/type";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const cleAPI = process.env.REACT_APP_API_URL;

export default function UpdateAlbumView(): JSX.Element {
  const { id } = useParams();
  const [album, setAlbum] = useState<AdminImagesType>({
    title: "",
    content: "",
    images: [],
  });
  const [albumId, setAlbumId] = useState<number>(id ? parseInt(id) : -1);
  const [files, setFiles] = useState<any>();
  const titleRef: any = useRef();
  const contentRef: any = useRef();

  useEffect(() => {
    async function getData() {
      const data = await getAdminListImage(id || "");
      setAlbum((curr) => data);
    }

    async function maxId() {
      const data = await getMaxAlbumId();
      setAlbumId((curr) => data + 1);
    }
    if (id === "-1") {
      maxId();
    } else {
      getData();
    }
  }, [id]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFiles(event.target.files);
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (album.title !== "") {
      event.preventDefault();

      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("images", files[i]);
      }
      try {
        const response = await fetch(`${cleAPI}/uploadImage/${albumId}`, {
          method: "POST",
          body: formData,
        });
        // const result = await response.json();
        const dataListImage = await getAdminListImage(albumId.toString());
        setAlbum((curr) => dataListImage);
      } catch (error) {
        console.error(error);
      }
    }
  }

  async function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }

    if (result.destination.index === result.source.index) {
      return;
    }
    result.source.index > result.destination.index
      ? await fetch(`${cleAPI}/changeOrder`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: result.draggableId,
            destination: result.destination.index,
            ids: album.images.slice(
              result.destination.index,
              result.source.index
            ),
            add: false,
            order: result.destination.index,
          }),
        })
      : await fetch(`${cleAPI}/changeOrder`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: result.draggableId,
            destination: result.destination.index,
            ids: album.images.slice(
              result.source.index + 1,
              result.destination.index + 1
            ),
            add: true,
            order: result.source.index,
          }),
        });
    const dataListImage = await getAdminListImage(albumId.toString());
    setAlbum((curr) => dataListImage);
  }

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
                id === "-1"
                  ? fetch(
                      `${cleAPI}/admin/updateAlbum/${albumId}/0?title=${titleRef.current.value}&content=${contentRef.current.value}`
                    )
                  : fetch(
                      `${cleAPI}/admin/updateAlbum/${albumId}/1?title=${titleRef.current.value}&content=${contentRef.current.value}`
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
          {id === "1" || id === "2" || id === "3" || id === "-1" ? (
            <></>
          ) : (
            <Link
              to="/admin"
              onClick={() => {
                fetch(`${cleAPI}/deleteAlbum/${albumId}`);
              }}
            >
              DELETE ALBUM
            </Link>
          )}
        </div>
      </div>
      <div>
        {/* List Images */}
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {!album.images ? (
                  <></>
                ) : (
                  album.images.map((image, i) => (
                    <Draggable
                      key={image}
                      draggableId={image.toString()}
                      index={i}
                    >
                      {(provided) => (
                        <div
                          key={image}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img
                            src={`${cleAPI}/image/${image}`}
                            alt={image.toString()}
                          />
                          <div
                            onClick={() => {
                              fetch(`${cleAPI}/removeImage/${image}`);
                              setAlbum((curr) => ({
                                ...curr,
                                images: curr.images.filter(
                                  (imageId) => imageId !== image
                                ),
                              }));
                            }}
                          >
                            <svg
                              x="0px"
                              y="0px"
                              viewBox="0 0 458.5 458.5"
                              width={"20px"}
                              height="20px"
                            >
                              <g>
                                <g>
                                  <path d="M382.078,57.069h-89.78C289.128,25.075,262.064,0,229.249,0S169.37,25.075,166.2,57.069H76.421     c-26.938,0-48.854,21.916-48.854,48.854c0,26.125,20.613,47.524,46.429,48.793V399.5c0,32.533,26.467,59,59,59h192.508     c32.533,0,59-26.467,59-59V154.717c25.816-1.269,46.429-22.668,46.429-48.793C430.933,78.985,409.017,57.069,382.078,57.069z      M229.249,30c16.244,0,29.807,11.673,32.76,27.069h-65.52C199.442,41.673,213.005,30,229.249,30z M354.503,399.501     c0,15.991-13.009,29-29,29H132.995c-15.991,0-29-13.009-29-29V154.778c12.244,0,240.932,0,250.508,0V399.501z M382.078,124.778     c-3.127,0-302.998,0-305.657,0c-10.396,0-18.854-8.458-18.854-18.854S66.025,87.07,76.421,87.07h305.657     c10.396,0,18.854,8.458,18.854,18.854S392.475,124.778,382.078,124.778z" />
                                  <path d="M229.249,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.715-15-15-15c-8.284,0-15,6.716-15,15v173.705     C214.249,385.607,220.965,392.323,229.249,392.323z" />
                                  <path d="M306.671,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15s-15,6.716-15,15v173.705     C291.671,385.607,298.387,392.323,306.671,392.323z" />
                                  <path d="M151.828,392.323c8.284,0,15-6.716,15-15V203.618c0-8.284-6.716-15-15-15c-8.284,0-15,6.716-15,15v173.705     C136.828,385.607,143.544,392.323,151.828,392.323z" />
                                </g>
                              </g>
                            </svg>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
        <div>
          <div>Sélectionner vos images</div>
          <form
            method="post"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="file"
              name="image"
              multiple
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input type="submit" value="Télécharger" />
          </form>
        </div>
      </div>
    </UpdateAlbum>
  );
}
