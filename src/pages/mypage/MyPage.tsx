import React from 'react';

const MyPage = (props: {
  data: {
    name: string;
  };
}) => {
  const { data } = props;

  console.log(data);
  return (
    <div>
      MyPage
      <div>{data.name}</div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello');

  const data = await res.json();
  console.log(data);

  return { props: { data } };
}

export default MyPage;
