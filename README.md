# timezones-list
This package contains an array of timezones based on conventional options.

It does not follow any complete data set, but it contains almost all basic timezones. And all names are according to the tz format: [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)

The fields in the array are as follows:
* `label` a string label which contains the UTC with the `tz` code of a timezone
* `tzCode` contains the `tz` codes
* `name` contains the descriptive name of the timezone with UTC offset
* `utc` contains only the UTC of a timezone

## Install
```bash
npm install timezones-list --save

# or

yarn add timezones-list
```

## Example
```javascript
import timezones from 'timezones-list';

// or

var timezones = require('timezones-list');
```
