import { JSONValue } from "../../types";

export type Event = {
  id: number;
  businessKey: string;
  name: string;
  userId: string;
  serviceName: string;
  reportId: number;
  userData: JSONValue;
  eventData: JSONValue;
  tags: JSONValue;
};

export type CreateEventData = {
  businessKey: string;
  name: string;
  userId: string;
  serviceName: string;
  reportId: number;
  userData: JSONValue;
  eventData: JSONValue;
  tags: JSONValue;
};
