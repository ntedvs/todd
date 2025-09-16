import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="bg-gradient-to-r from-[#2b4c8d] to-[#55a1d5] text-white"
      >
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="flex justify-center">
              <div className="relative h-96 w-72 overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/media/portrait.png"
                  alt="Todd Fisher, Lieutenant and Recruitment Specialist"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Intro content */}
            <div className="text-center lg:text-left">
              <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
                Meet Todd Fisher
              </h1>
              <p className="mb-2 text-xl text-blue-100 lg:text-2xl">
                Lieutenant
              </p>
              <p className="mb-6 text-lg text-blue-200">
                Recruitment and Retention Specialist
              </p>
              <p className="mb-8 text-lg leading-relaxed text-blue-50">
                Ready to start a meaningful career in corrections across
                Pennsylvania? I&apos;m here to help you navigate every step of
                the process and find the right correctional officer opportunity
                within the Pennsylvania Department of Corrections, serving
                communities from Philadelphia to Pittsburgh, Harrisburg to Erie.
              </p>

              {/* Contact buttons */}
              <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
                <a
                  href="tel:717-916-0291"
                  className="flex items-center justify-center rounded-md bg-white px-8 py-3 font-semibold text-[#2b4c8d] transition-colors hover:bg-gray-100"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call: (717) 916-0291
                </a>
                <a
                  href="mailto:todfisher@pa.gov"
                  className="flex items-center justify-center rounded-md border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-[#2b4c8d]"
                >
                  <svg
                    className="mr-2 h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Email Me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Todd Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-bold text-gray-900">
              About Todd
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              With over 16 years of experience in Pennsylvania corrections and
              human resources, I understand both sides of the hiring process.
              I&apos;ve worked directly in correctional facilities across
              Pennsylvania and know firsthand the challenges and rewards of this
              essential career path in law enforcement.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              My mission is simple: to help qualified candidates find meaningful
              correctional officer careers where they can make a real difference
              in Pennsylvania communities. I believe that corrections work is
              some of the most important public safety work you can do, and
              I&apos;m passionate about connecting the right people with these
              life-changing career opportunities throughout the Commonwealth.
            </p>
            <p className="text-lg leading-relaxed text-gray-700">
              As a Lieutenant and Recruitment Specialist serving
              Pennsylvania&apos;s correctional system, I&apos;m dedicated to
              helping candidates from all backgrounds - whether you&apos;re in
              Philadelphia, Pittsburgh, Allentown, Scranton, or anywhere across
              Pennsylvania - start rewarding careers with the PA Department of
              Corrections.
            </p>
          </div>
        </div>
      </section>

      {/* How I Can Help Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              How I Can Help You
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              From your first question to your first day on the job, I&apos;m
              here to support you throughout your career journey.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg border-2 border-gray-200 p-6 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Application Guidance
              </h3>
              <p className="text-gray-600">
                I&apos;ll walk you through the entire application process, help
                you prepare your documents, and ensure you understand each step.
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-200 p-6 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Interview Preparation
              </h3>
              <p className="mb-4 text-gray-600">
                Get insider tips on what interviewers are looking for, practice
                common questions, and feel confident going into your interview.
              </p>
              <a
                href="https://www.hrmrecruit.com/blog/2019/03/interview-hacks-5-cs-employers-seek-in-you"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-[#55a1d5] hover:text-[#2b4c8d]"
              >
                Get expert interview tips →
              </a>
            </div>

            <div className="rounded-lg border-2 border-gray-200 p-6 text-center transition-shadow hover:shadow-lg">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Career Planning
              </h3>
              <p className="text-gray-600">
                Explore different career paths within PA DOC, understand
                advancement opportunities, and plan your long-term career goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why PA DOC Section */}
      <section id="benefits" className="bg-[#2b4c8d] py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose PA DOC?</h2>
            <p className="mx-auto max-w-2xl text-lg text-blue-100">
              Join one of Pennsylvania&apos;s largest employers with facilities
              statewide and make a meaningful impact while building a stable,
              rewarding correctional officer career serving Pennsylvania
              communities.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Competitive Pay</h3>
              <p className="text-sm text-blue-100">
                Starting salaries from $45,000+ with regular increases and
                overtime opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Excellent Benefits</h3>
              <p className="text-sm text-blue-100">
                Health insurance, pension, paid time off, and comprehensive
                benefits package.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">
                Training & Development
              </h3>
              <p className="text-sm text-blue-100">
                Comprehensive training programs and ongoing professional
                development opportunities.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#55a1d5]">
                <svg
                  className="h-8 w-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-semibold">Make a Difference</h3>
              <p className="text-sm text-blue-100">
                Contribute to public safety and help individuals successfully
                reintegrate into society.
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="https://www.pa.gov/agencies/employment/open-jobs.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-white bg-white px-8 py-3 text-center font-semibold text-[#2b4c8d] transition-colors hover:bg-gray-200"
            >
              View Open Positions
            </a>
            <a
              href="https://www.pa.gov/agencies/employment/benefits.html"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-white px-8 py-3 text-center font-semibold text-white transition-colors hover:bg-white hover:text-[#2b4c8d]"
            >
              Learn About Benefits
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-gray-600">
              I&apos;m here to answer your questions and help you take the next
              step in your career.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#55a1d5]">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Phone</h4>
                    <a
                      href="tel:717-916-0291"
                      className="text-gray-600 hover:text-[#55a1d5]"
                    >
                      (717) 916-0291
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#55a1d5]">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">Email</h4>
                    <a
                      href="mailto:todfisher@pa.gov"
                      className="text-gray-600 hover:text-[#55a1d5]"
                    >
                      todfisher@pa.gov
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#55a1d5]">
                    <svg
                      className="h-4 w-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      Facebook
                    </h4>
                    <a
                      href="https://www.facebook.com/share/1FeJSSAjMZ"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#55a1d5]"
                    >
                      Connect Here
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h3 className="mb-6 text-xl font-semibold text-gray-900">
                What Happens Next
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#55a1d5]">
                    <span className="text-sm font-semibold text-white">1</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      Contact Todd
                    </h4>
                    <p className="text-gray-600">
                      Call or email to start the conversation about your career
                      goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#55a1d5]">
                    <span className="text-sm font-semibold text-white">2</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      Initial Conversation
                    </h4>
                    <p className="text-gray-600">
                      Discuss your background, interests, and learn about PA DOC
                      opportunities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="mt-1 mr-4 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#55a1d5]">
                    <span className="text-sm font-semibold text-white">3</span>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900">
                      Application Support
                    </h4>
                    <p className="text-gray-600">
                      Get guidance through the application process and interview
                      preparation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
