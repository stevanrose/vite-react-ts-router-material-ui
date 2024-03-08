import { Event } from "../types";

export const deleteEvent = async (id: number): Promise<Event> => {
  const response = await fetch(`http://localhost:3173/events/${id}`, {
    method: "DELETE",
  });
  return await response.json();
};
