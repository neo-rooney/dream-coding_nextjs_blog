import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <h1 className="text-3xl font-bold">
        <Link href="/">{"Rooney's Blog"}</Link>
      </h1>
      <nav className="flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/post">Post</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
