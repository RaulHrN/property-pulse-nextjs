import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <div className="text-2xl">Home Page</div>

      <Link href="/properties">Go to Properties</Link>
    </>
  );
}
