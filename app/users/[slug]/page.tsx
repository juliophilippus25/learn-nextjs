import React from 'react';

async function getDataUser(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

async function getDataRepos(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}/repos`);
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

export default async function UserDetail({ params }: { params: { slug: string } }) {
  let dataUser;
  let dataRepos;

  try {
    dataUser = await getDataUser(params.slug);
    dataRepos = await getDataRepos(params.slug);
  } catch (error) {
    const errorMessage = (error as Error).message;
    return <div>Error fetching data: {errorMessage}</div>;
  }

  return (
    <div className='container px-12 mt-5'>
      <h2>User Detail: {params.slug}</h2>
      <div>
        <h3>Username: {dataUser.login}</h3>
        <p>Name: {dataUser.name}</p>
        <p>Bio: {dataUser.bio}</p>
        <p>Public Repos: {dataUser.public_repos}</p>
        <p>Followers: {dataUser.followers}</p>
        <p>Following: {dataUser.following}</p>
      </div>
      <br />
      <h3>Repositories:</h3>
      <div>
        {dataRepos.length > 0 ? (
          dataRepos.map((repo: any) => (
            <div key={repo.id} className='mt-5'>
              <h4><strong>{repo.name}</strong></h4>
              <p>Full name: {repo.full_name}</p>
              <p>Description: {repo.description ? repo.description : 'No description'}</p>
              <p>Stars: {repo.stargazers_count}</p>
              <p>Forks: {repo.forks_count}</p>
              <p>Language: {repo.language}</p>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className='bg-orange-400 text-white py-1 px-2 my-12 rounded-md hover:bg-orange-500'>View repo</a>
              <hr />
            </div>
          ))
        ) : (
          <p>No repositories found.</p>
        )}
      </div>
    </div>
  );
}
