import Link from "next/link"

function Navbar() {
  return (
    <div className="container py-4 w-48 my-2 mx-auto flex justify-center text-center 
    text-3xl font-semibold border-b-2 rounded-md text-blue-300 hover:text-red-300 hover:border-red-300">
        <Link href={"/"}> HOME</Link>
    </div>
  )

}

export default Navbar