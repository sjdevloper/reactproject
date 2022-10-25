const githubQuery = {
  query: `
  {
    viewer {
      name
    }
    search(
      query: "user:planetoftheweb sort: updated-desc",
      type: REPOSITORY,
      first: 10
    ) {
      nodes {
        ... on Repository {
          name
          discription
          id
          url
          viewerSubscription
          licenseInfo{
            spdxId
          }
        }
      }
    }
  }
    `,
};

export default githubQuery;
