import { Outlet } from "react-router"

export const RootLayout = () => {

  return (
    <>
      <h1>root layout</h1>
      <main className="w-screen h-screen">
        <Outlet></Outlet>
      </main>
    </>
  )
}
