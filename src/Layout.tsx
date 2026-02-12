export default function Layout({children}: {children: React.ReactNode}) {
  return <>
    <header>
      <h1>Platzi Store</h1>
    </header>
    <main>
      {children}
    </main>
  </>
}