import { AdminImage, AdminImagesStyle } from "@/Components/Admin/styled.ts";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import DeleteSVG from "@/Components/Admin/Edit/Svg/delete.tsx";
import { ImagesID } from "@/type.ts";
import React, { useState } from "react";
import { reorderImages } from "@/Components/Admin/Edit/Images/reorder.ts";
import { upload_images } from "@/API/upload_image.ts";
import images_information from "@/API/images_information.ts";
import { delete_image } from "@/API/delete_image.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default function AdminImages({
  images,
  setImages,
  reportId,
}: {
  images: ImagesID;
  setImages: React.Dispatch<React.SetStateAction<ImagesID>>;
  reportId: number;
}): JSX.Element {
  const [imagesDownload, setImagesDownLoad] = useState<FileList | null>(null);
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    if (result.source.index !== result.destination.index) {
      setImages((curr) =>
        reorderImages(curr, result.source.index, result.destination?.index),
      );
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setImagesDownLoad(event.target.files);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (reportId !== -1 && imagesDownload) {
      const formData = new FormData();
      for (let i = 0; i < imagesDownload.length; i++) {
        formData.append(`images`, imagesDownload[i]);
      }
      try {
        void (await upload_images(formData, reportId));
        const newImages = await images_information(reportId.toString());
        setImages(newImages);
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleDelete = (id: number) => {
    try {
      void delete_image(id, reportId);
      setImages((curr) => curr.filter((image) => image.id !== id));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AdminImagesStyle>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" key={images[0].id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {images.map((image, index) => (
                <React.Fragment key={image.id}>
                  {image.id === -1 ? (
                    <></>
                  ) : (
                    <Draggable draggableId={`${image.id}`} index={index}>
                      {(provided) => (
                        <AdminImage
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <img
                            src={`${API_KEY}/image/${image.id}`}
                            alt={`${image.id}`}
                          />
                          <DeleteSVG
                            handleDelete={handleDelete}
                            id={image.id}
                          />
                        </AdminImage>
                      )}
                    </Draggable>
                  )}
                </React.Fragment>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <div>
        <p>Sélectionner vos images</p>
        <form onSubmit={handleSubmit}>
          <input type="file" name="image" multiple onChange={handleChange} />
          <input type="submit" value="Télécharger" />
        </form>
      </div>
    </AdminImagesStyle>
  );
}
