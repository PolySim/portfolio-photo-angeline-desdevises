import { AdminImage, AdminImagesStyle } from "@/Components/Admin/styled.ts";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import DeleteSVG from "@/Components/Admin/Edit/Svg/delete.tsx";
import { ImagesID } from "@/type.ts";
import React from "react";
import { reorderImages } from "@/Components/Admin/Edit/Images/reorder.ts";

const API_KEY = import.meta.env.PROD
  ? import.meta.env.VITE_PUBLIC_BACK_URL_PROD
  : import.meta.env.VITE_PUBLIC_BACK_URL_DEV;

export default function AdminImages({
  images,
  setImages,
}: {
  images: ImagesID;
  setImages: React.Dispatch<React.SetStateAction<ImagesID>>;
}): JSX.Element {
  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    if (result.source !== result.destination) {
      setImages((curr) =>
        reorderImages(curr, result.source.index, result.destination?.index),
      );
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
                          <DeleteSVG />
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
        <form
          method="post"
          onSubmit={(e) => {
            console.log(e);
          }}
        >
          <input
            type="file"
            name="image"
            multiple
            onChange={(e) => {
              console.log(e);
            }}
          />
          <input type="submit" value="Télécharger" />
        </form>
      </div>
    </AdminImagesStyle>
  );
}
