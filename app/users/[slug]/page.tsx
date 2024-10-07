import React from 'react'

async function getData(param: string) {
  const res = await fetch(`https://api.github.com/users/${param}`); // Menggunakan backticks
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
}

export default async function UserDetail({ params }: { params: { slug: string } }) {
  let data;

  try {
    data = await getData(params.slug);
  } catch (error) {
    const errorMessage = (error as Error).message;
    return <div>Error fetching user data: {errorMessage}</div>;
  }

  return (
    <div>
      <p>Detail User: {params.slug}</p>
      <div>
        <h3>Username: {data.login}</h3>
        <p>Nama: {data.name}</p>
        <p>Bio: {data.bio}</p>
        <p>Public Repos: {data.public_repos}</p>
        <p>Followers: {data.followers}</p>
        <p>Following: {data.following}</p>
      </div>
    </div>
  );
}
