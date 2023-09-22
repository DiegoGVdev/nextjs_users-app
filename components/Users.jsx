// "use client";
import Link from "next/link";

function Users({ users }) {
  return (
    <>
      <ul className="m-2 grid md:grid-cols-2 gap-4 ">
        {users.map((user) => (
          <Link href={`/users/${user.id}`} key={user.id}>
            <li
              className=" bg-blue-100 mb-4 p-4 rounded-md"
              
            >
              <div className="text-black flex  justify-center items-center">
                <img
                  src={user.avatar}
                  alt="avatar"
                  className="rounded-full w-24"
                />
                <div className="p-2 mx-auto ">
                  <h5 className="font-bold">
                    {user.id}. {user.first_name}
                  </h5>
                  <p>Email: {user.email}</p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
}

export default Users;
