import { Event } from "../types";

export const getEvents = async (): Promise<Event[]> => {
  const response = await fetch("http://localhost:3173/events");
  return await response.json();
};
