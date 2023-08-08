import {
  ReorderReports,
  Report,
} from "@/Components/Admin/ReportageOrder/styled.ts";
import { useContext, useEffect, useState } from "react";
import { MainContext } from "@/context.ts";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { reorderReports } from "@/Components/Admin/ReportageOrder/reorderReports.ts";
import { BackMenu } from "@/Components/Admin/styled.ts";
import { reorder_reports } from "@/API/reorder_reports.ts";

export default function ReportageOrder(): JSX.Element {
  const [key, setKey] = useState<number>(0);
  const { reports, setReports } = useContext(MainContext);

  useEffect(() => {
    setKey((curr) => curr + 1);
  }, []);

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) {
      return;
    }
    if (result.source.index !== result.destination.index) {
      void reorder_reports(
        reorderReports(reports, result.source.index, result.destination?.index),
      );
      setReports((curr) =>
        reorderReports(curr, result.source.index, result.destination?.index),
      );
    }
  };

  return (
    <>
      <BackMenu to="/admin">Retour au menu</BackMenu>
      <ReorderReports>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable" key={key}>
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {reports.map((report, i) => (
                  <Draggable
                    key={report.index}
                    draggableId={`${report.index}`}
                    index={i}
                  >
                    {(provided) => (
                      <Report
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {report.title}
                      </Report>
                    )}
                  </Draggable>
                ))}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </ReorderReports>
    </>
  );
}
