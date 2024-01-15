import Image from 'next/image'

export default function Home() {
  return (
    <section className="w-full flex-center flex-col gap-10 h-screen">
      <div>
        <h1 className="head_text_blue text-center">Welcome</h1>
        <p className="desc text-center">
          This project was made for recruitment test in Synapsis.id, <br />{' '}
          Please select the menu
        </p>
      </div>

      <div className="text-center">
        <p>
          Live demo{' '}
          <a
            href="https://synapsis-app.vercel.app/"
            target="_blank"
            className="text-blue-500"
          >
            here
          </a>
          {' :) '}
        </p>
        <p>
          Source{' '}
          <a
            href="https://github.com/wikiakai/synapsis-app"
            target="_blank"
            className="text-blue-500"
          >
            code
          </a>
          {' :D '}
        </p>
        <p className="font-semibold italic">Made by Wikiakai @2024</p>
      </div>
    </section>
  )
}
