export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="w-full py-16 px-6 center flex-col text-center">
        <img 
          src="/logo.png" 
          alt="Logo" 
          className="w-20 h-20 mb-6 drop-shadow-md"
        />

        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          Beyond Banking
        </h1>

        <p className="text-main text-lg md:text-xl max-w-[520px]">
          Experience modern digital banking with security, speed and simplicity.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="btn-primary px-6 py-3 rounded-lg">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-lg border border-primary text-primary">
            Learn More
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="mt-14 px-6 layout grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Fast Transactions",
            text: "Seamless transfers, instant notifications and flawless performance.",
          },
          {
            title: "Secure & Smart",
            text: "Encrypted, insured, and trusted — your money stays protected.",
          },
          {
            title: "24/7 Digital Access",
            text: "Bank anywhere, anytime with our intelligent digital platform.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-secondary rounded-xl p-6 shadow-sm border border-line"
          >
            <h2 className="text-primary font-bold text-xl mb-2">
              {item.title}
            </h2>
            <p className="text-main">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Footer Licensing Image */}
      <footer className="w-full center flex-col mt-16 mb-6 text-center">
        <img
          src="/bottom.png"
          alt="Licensing details"
          className="w-auto h-6 opacity-90"
        />
      </footer>
    </div>
  );
}