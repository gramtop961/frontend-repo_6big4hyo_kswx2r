export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Home services, done right.
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Book trusted engineers and technicians for electrical, plumbing, AC repairs, cleaning, and more. Available on web and mobile.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#categories" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-md font-medium">Book a service</a>
            <a href="#download" className="bg-white border hover:bg-gray-50 text-gray-900 px-5 py-3 rounded-md font-medium">Get the app</a>
          </div>
        </div>
        <div className="aspect-video bg-white/70 rounded-xl border"></div>
      </div>
    </section>
  )
}
