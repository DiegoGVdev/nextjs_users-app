async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserPage({ params }) {
  console.log(params);

  const user = await getUser(params.id);

  return (
    <div className="countainer p-2 bg-blue-100 rounded-md mt-4 ">
      <div className="text-black flex flex-col  justify-center items-center">
        <img src={user.avatar} alt="avatar" className="rounded-full w-24" />
        <div className="p-2 mx-auto flex flex-col items-center ">
          <h5 className="font-bold text-3xl">
            {user.id}. {user.first_name}
          </h5>
          <p>Email: {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserPage;
