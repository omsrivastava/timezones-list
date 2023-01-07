import timezones from "./timezones.json";

interface TimeZone {
  label: string;
  tzCode: string;
  name: string;
  utc: string;
}

export { TimeZone };
export default timezones as TimeZone[];
