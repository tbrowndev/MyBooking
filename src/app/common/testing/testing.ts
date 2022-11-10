// Test File for generating test data


export const HOURS = {
  'SUNDAY': undefined,
  'MONDAY': ['8:00 AM', '7:00 PM'],
  'TUESDAY': ['8:00 AM', '7:00 PM'],
  'WEDNESDAY': ['8:00 AM', '7:00 PM'],
  'THURSDAY': undefined,
  'FRIDAY': ['8:00 AM', '7:00 PM'],
  'SATURDAY': ['8:00 AM', '5:00 PM'],
}

export function GEN_TEST_SERVICES(n: number) {

  const TEST_SERVICES = []

  for(let i = 1; i <= n; i++) {
    TEST_SERVICES.push(
      {
        title: 'Service: ' + i,
        description: 'Incididunt officia voluptate officia exercitation nisi nulla magna do. Non voluptate aliqua ea minim esse. Do id mollit quis proident aliquip sunt cupidatat.',
        duration: randomInteger(15, 45),
        price: randomInteger(10, 40),
        tags: randomStringList(1, 10)
      }
    )
  }

  return TEST_SERVICES;
}

export function GEN_TEST_ADDONS(n: number) {

  const TEST_ADDONS = []

  for(let i = 1; i <= n; i++) {
    TEST_ADDONS.push(
      {
        title: 'Addon: ' + i,
        description: 'Incididunt officia voluptate officia exercitation nisi nulla magna do.',
        duration: randomInteger(5, 10),
        price: randomInteger(5, 15),
      }
    )
  }

  return TEST_ADDONS;
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomStringList(min: number, max: number) {
  const listLength = randomInteger(min, max);
  const TEST_TAGS = [];
  for (let i = 1; i <= listLength; i++) {
    TEST_TAGS.push('TAG'+i)
  }
  return TEST_TAGS;
}