import Users from "../components/Users"


async function fetchUser(){
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  await new Promise((resolve) => setTimeout(resolve, 5000))
  return data.data
}


async function HomePage() {

  const users = await fetchUser()
  console.log(users)

  return (
    
        <Users users={users} />
     
  )
}

export default HomePage