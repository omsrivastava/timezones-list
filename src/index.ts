import _timezones from "./timezones.json"

interface TimeZone {
        label: string;
        tzCode: string;
        name: string;
        utc: string;
    }

const timezones: TimeZone[] = _timezones

export default timezones