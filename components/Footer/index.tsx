const Footer = () => {
  return (
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
        Source code{' '}
        <a
          href="https://github.com/wikiakai/synapsis-app"
          target="_blank"
          className="text-blue-500"
        >
          here
        </a>
        {' :D '}
      </p>
      <p className="font-semibold italic">Made by Wikiakai @2024</p>
    </div>
  )
}

export default Footer
