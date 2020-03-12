#!/usr/bin/env node

const axios = require('axios').default

const orgs = [
  'cf-platform-eng',
  'pivotal-cf',
  'pivotal-cloudops',
  'Pivotal-DataFabric',
  'pivotalservices',
  'platform-acceleration-lab',
  'pivotal-cf-attic',
  'pcfdev-forks',
  'Pivotal-Data-Attic',
  'pivotal-education',
  'pivotal-partner-platform-architecture',
  'pivotalsoftware',
  'spring-projects',
  'pivotal',
  'pivotal-cf-experimental',
  'Pivotal-Data-Engineering',
  'pivotal-gss',
  'pivotal-sg',
  'pivotaltracker'
];

const baseURL = 'https://api.github.com';
const orgsEndpoint = (org) => `/orgs/${org}`;
const reducer = (accumulator, currentValue) => accumulator + currentValue;
const TOKEN = 'personal access token';

const getSizeForOrg = (orgName) => axios.get(baseURL + orgsEndpoint(orgName), {
  headers: { Authorization: `token ${TOKEN}` }
})
  .then((org) => org.data)
  .then((org) => {
    console.log(`${org.login}: ${org.disk_usage} KB`);
    return org.disk_usage || 0;
  });

Promise.all(orgs.map((org) => getSizeForOrg(org)))
  .then((orgSizes) => orgSizes.reduce(reducer))
  .then((totalSize) => console.log(`==============> total size: ${totalSize} KB`));
