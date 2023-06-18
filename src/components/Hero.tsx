import Image from "next/image";
import profile from "../../public/images/profileImage.jpeg";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        src={profile}
        className="rounded-full mx-auto"
        width={250}
        height={250}
        alt="profile"
      />
      <h2 className="text-2xl font-bold">{"Hi, I'm Rooney"}</h2>
      <h3 className="text-xl">Full-stack Enginner</h3>
      <p>{"안녕하세요. rooney 입니다 :)"}</p>
      <button className="bg-yellow-500 px-4 py-1 rounded-xl mt-2">
        Contact Me
      </button>
    </section>
  );
}
