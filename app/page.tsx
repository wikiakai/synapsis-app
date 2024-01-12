import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text_blue text-center">Welcome</h1>
      <p className="desc text-center">
        This project was made for recruitment test in Synapsis.id, <br /> Please
        select the menu
      </p>
    </section>
  )
}
