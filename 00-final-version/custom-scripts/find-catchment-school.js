const lat = data.address.geometry.location.lat();
const lng = data.address.geometry.location.lng();
console.log('lat', lat);
console.log('lng', lng);

const grade = data.grade || data.grade1;
console.log('grade is ', grade);

getSchoolsNearby(lat, lng, grade);

function getSchoolsNearby(lat, lng, grade) {
  const radius = '1km';
  const url = `https://opendata.vancouver.ca/api/explore/v2.1/catalog/datasets/schools/records?where=distance(geo_point_2d, geom'POINT(${lng} ${lat})', ${radius})`;

  fetch(url)
    .then((response) => response.json())
    .then((parsedResponse) => {
      if (parsedResponse.total_count > 0) {
        console.log('Schools found: ', parsedResponse.results);
        const schoolList = processSchoolList(parsedResponse.results, grade);
        console.log('schoolList', schoolList);
        instance.parent.components[5].component.values = schoolList;
        instance.parent.redraw();
        console.log('Instance updated');
      } else {
        console.log('No schools found within the specified radius.');
      }
    })
    .catch((error) => console.error('Error fetching schools:', error));
}

function processSchoolList(schoolList, grade) {
  console.log('School list before filtering:', schoolList);
  console.log('Filtering for grade:', grade);

  return schoolList
    .map((school) => {
      const formattedValue = toCamelCase(school.school_name);
      return {
        label: school.school_name,
        value: formattedValue,
        shortcut: '',
      };
    })
    .filter((school) => {
      if (
        grade === 'k' ||
        (parseInt(grade.split('-')[1]) >= 1 &&
          parseInt(grade.split('-')[1]) <= 7)
      ) {
        // Include elementary schools for grades K to 7
        return school.value.includes('Elementary');
      } else if (
        parseInt(grade.split('-')[1]) >= 8 &&
        parseInt(grade.split('-')[1]) <= 12
      ) {
        // Include secondary schools for grades 8 to 12
        return school.value.includes('Secondary');
      }
      return false; // Exclude schools not matching the grade
    });
}

function toCamelCase(str) {
  // Replace all non-alphanumeric characters (except spaces) with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
  return str
    .split(' ')
    .map((word, index) => {
      let lower = word.toLowerCase();
      return index === 0
        ? lower
        : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}
