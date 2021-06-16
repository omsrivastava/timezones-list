import timezones from "./timezones.json";

interface TimeZone {
  label: string;
  tzCode: string;
  name: string;
  utc: string;
}

export default timezones as TimeZone[];
