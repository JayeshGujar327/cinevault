import React from "react";
import { Link } from "react-router-dom";

export default function About() {
    const companyName =
        process.env.REACT_APP_COMPANY_NAME || "CineVault";

    // ============================================================
    // DEVELOPER SOCIAL LINKS
    // ============================================================

    const socialLinks = {
        github: "https://github.com/JayeshGujar327",
        linkedin:
            "https://www.linkedin.com/in/jayesh-gujar-943626315/",
        instagram:
            "https://www.instagram.com/thejayesh327/",
        email: "mailto:gujarj327@gmail.com",
    };

    // ============================================================
    // FEATURES
    // ============================================================

    const features = [
        {
            icon: "fa-solid fa-magnifying-glass",
            title: "Advanced Search",
            description:
                "Discover movies and TV series quickly with powerful search and filtering options.",
        },
        {
            icon: "fa-solid fa-film",
            title: "Movie Discovery",
            description:
                "Explore popular movies, latest releases, trending titles and detailed information.",
        },
        {
            icon: "fa-solid fa-tv",
            title: "TV Series",
            description:
                "Browse dedicated TV series sections with ratings, release information and artwork.",
        },
        {
            icon: "fa-solid fa-list-check",
            title: "Personal Lists",
            description:
                "Create, manage and organize your favorite movies and series in personalized lists.",
        },
        {
            icon: "fa-solid fa-users",
            title: "Community",
            description:
                "Explore public lists and discover recommendations shared by other users.",
        },
        {
            icon: "fa-solid fa-user-shield",
            title: "Authentication",
            description:
                "Secure authentication enables personalized experiences and private collections.",
        },
    ];

    // ============================================================
    // TECHNOLOGIES
    // ============================================================

    const technologies = [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "Firebase",
        "TMDB API",
        "HTML5",
        "CSS3",
    ];

    // ============================================================
    // STATS
    // ============================================================

    const stats = [
        {
            number: "01",
            label: "Movie Platform",
            icon: "fa-solid fa-film",
        },
        {
            number: "02",
            label: "Content Categories",
            icon: "fa-solid fa-layer-group",
        },
        {
            number: "100%",
            label: "Responsive UI",
            icon: "fa-solid fa-mobile-screen",
        },
        {
            number: "∞",
            label: "Discover & Explore",
            icon: "fa-solid fa-compass",
        },
    ];

    return (
        <div className="min-h-screen overflow-hidden bg-white text-black dark:bg-gray-950 dark:text-white">

            {/* ====================================================
                HERO
            ==================================================== */}

            <section className="relative flex min-h-[650px] items-center justify-center overflow-hidden px-6 py-20">

                {/* Animated background */}
                <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl animate-pulse" />

                <div
                    className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse"
                    style={{ animationDelay: "1s" }}
                />

                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

                {/* Floating icons */}
                <i className="fa-solid fa-film absolute left-[10%] top-24 text-4xl text-blue-500/30 animate-bounce" />

                <i
                    className="fa-solid fa-clapperboard absolute right-[12%] top-36 text-4xl text-purple-500/30 animate-bounce"
                    style={{ animationDelay: "0.7s" }}
                />

                <i
                    className="fa-solid fa-star absolute bottom-32 left-[15%] text-3xl text-yellow-400/40 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                />

                <i
                    className="fa-solid fa-ticket absolute bottom-28 right-[16%] text-4xl text-red-500/30 animate-bounce"
                    style={{ animationDelay: "1.2s" }}
                />

                {/* Hero content */}
                <div className="relative z-10 mx-auto max-w-5xl text-center">

                    <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-blue-100 px-5 py-3 font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                        <i className="fa-solid fa-film" />

                        <span>
                            WELCOME TO {companyName.toUpperCase()}
                        </span>

                        <i className="fa-solid fa-star text-yellow-400" />
                    </div>

                    <h1 className="mb-6 text-5xl font-extrabold tracking-tight md:text-7xl">
                        Your World of

                        <span className="mt-2 block text-blue-500">
                            Movies &amp; Stories
                        </span>
                    </h1>

                    <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:text-xl">
                        {companyName} is a modern movie and TV discovery
                        platform designed to help you explore, organize and
                        experience your favorite entertainment in one
                        beautiful place.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        <Link
                            to="/"
                            className="rounded-xl bg-blue-500 px-7 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-blue-500/30"
                        >
                            <i className="fa-solid fa-house mr-2" />
                            Explore {companyName}
                        </Link>

                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl border-2 border-gray-300 px-7 py-3 font-bold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:text-blue-500 dark:border-gray-700"
                        >
                            <i className="fa-brands fa-github mr-2" />
                            View GitHub
                        </a>

                    </div>
                </div>
            </section>

            {/* ====================================================
                STATS
            ==================================================== */}

            <section className="bg-gray-50 px-6 py-16 dark:bg-gray-900">

                <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 md:grid-cols-4">

                    {stats.map((stat) => (
                        <div
                            key={stat.label}
                            className="group rounded-2xl bg-white p-7 text-center shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
                        >
                            <i
                                className={`${stat.icon} mb-4 text-3xl text-blue-500 transition-transform duration-300 group-hover:scale-125`}
                            />

                            <h3 className="mb-2 text-3xl font-extrabold">
                                {stat.number}
                            </h3>

                            <p className="text-gray-500 dark:text-gray-400">
                                {stat.label}
                            </p>
                        </div>
                    ))}

                </div>
            </section>

            {/* ====================================================
                ABOUT PROJECT
            ==================================================== */}

            <section className="px-6 py-20">

                <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">

                    <div>

                        <span className="font-bold uppercase tracking-widest text-blue-500">
                            About the Project
                        </span>

                        <h2 className="mt-3 mb-6 text-4xl font-bold md:text-5xl">
                            More Than Just
                            <span className="text-blue-500">
                                {" "}Movies.
                            </span>
                        </h2>

                        <p className="mb-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            {companyName} provides an intuitive environment
                            for discovering movies and TV series, exploring
                            detailed information and building personalized
                            collections.
                        </p>

                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                            The platform focuses on simplicity, responsive
                            design and an enjoyable browsing experience across
                            desktop and mobile devices.
                        </p>

                    </div>

                    <div className="relative">

                        <div className="absolute inset-0 rounded-3xl bg-blue-500/20 blur-2xl" />

                        <div className="relative rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 p-10 text-white shadow-2xl transition-transform duration-500 hover:-translate-y-2">

                            <i className="fa-solid fa-film mb-6 text-6xl" />

                            <h3 className="mb-4 text-3xl font-bold">
                                Discover.
                                <br />
                                Organize.
                                <br />
                                Enjoy.
                            </h3>

                            <p className="text-blue-100">
                                Everything you need for a better movie
                                discovery experience.
                            </p>

                        </div>
                    </div>

                </div>
            </section>

            {/* ====================================================
                FEATURES
            ==================================================== */}

            <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">

                <div className="mx-auto max-w-6xl">

                    <div className="mb-14 text-center">

                        <span className="font-bold uppercase tracking-widest text-blue-500">
                            What {companyName} Offers
                        </span>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Powerful Features
                        </h2>

                        <p className="mx-auto mt-5 max-w-2xl text-gray-600 dark:text-gray-400">
                            Designed to make discovering and organizing
                            entertainment simple and enjoyable.
                        </p>

                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-2xl bg-white p-7 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl dark:bg-gray-800"
                            >

                                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 transition-all duration-300 group-hover:bg-blue-500 dark:bg-blue-900/30">

                                    <i
                                        className={`${feature.icon} text-2xl text-blue-500 transition-colors duration-300 group-hover:text-white`}
                                    />

                                </div>

                                <h3 className="mb-3 text-xl font-bold">
                                    {feature.title}
                                </h3>

                                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                                    {feature.description}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </section>

            {/* ====================================================
                TECHNOLOGY STACK
            ==================================================== */}

            <section className="px-6 py-20">

                <div className="mx-auto max-w-5xl text-center">

                    <span className="font-bold uppercase tracking-widest text-blue-500">
                        Built With
                    </span>

                    <h2 className="mt-3 mb-10 text-4xl font-bold md:text-5xl">
                        Technology Stack
                    </h2>

                    <div className="flex flex-wrap justify-center gap-4">

                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="cursor-default rounded-full border border-gray-200 bg-gray-100 px-5 py-3 font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:bg-blue-500 hover:text-white dark:border-gray-700 dark:bg-gray-800"
                            >
                                {technology}
                            </span>
                        ))}

                    </div>
                </div>
            </section>

            {/* ====================================================
                DEVELOPER
            ==================================================== */}

            <section className="bg-gray-50 px-6 py-20 dark:bg-gray-900">

                <div className="mx-auto max-w-5xl">

                    <div className="mb-12 text-center">

                        <span className="font-bold uppercase tracking-widest text-blue-500">
                            Developer
                        </span>

                        <h2 className="mt-3 text-4xl font-bold md:text-5xl">
                            Meet the Developer
                        </h2>

                    </div>

                    <div className="relative overflow-hidden rounded-3xl bg-white p-8 shadow-2xl dark:bg-gray-800 md:p-12">

                        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-500/10 blur-3xl" />

                        <div className="relative z-10 flex flex-col items-center text-center">

                            {/* Avatar */}
                            <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl transition-transform duration-500 hover:scale-110">
                                <span className="text-4xl font-extrabold text-white">
                                    JG
                                </span>
                            </div>

                            <h3 className="mb-2 text-3xl font-bold">
                                Jayesh Gujar
                            </h3>

                            <p className="mb-5 font-semibold text-blue-500">
                                Developer &amp; Maintainer
                            </p>

                            <p className="max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-400">
                                Passionate about building modern web
                                applications, creating intuitive user
                                experiences and continuously learning new
                                technologies.
                            </p>

                            {/* Social Icons */}
                            <div className="mt-8 flex flex-wrap justify-center gap-4">

                                <a
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    title="GitHub"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-900 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:shadow-lg"
                                >
                                    <i className="fa-brands fa-github text-xl" />
                                </a>

                                <a
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    title="LinkedIn"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-blue-500 hover:shadow-lg"
                                >
                                    <i className="fa-brands fa-linkedin-in text-xl" />
                                </a>

                                <a
                                    href={socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    title="Instagram"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-600 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-pink-500 hover:shadow-lg"
                                >
                                    <i className="fa-brands fa-instagram text-xl" />
                                </a>

                                <a
                                    href={socialLinks.email}
                                    aria-label="Email"
                                    title="Email"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500 text-white transition-all duration-300 hover:-translate-y-2 hover:bg-red-400 hover:shadow-lg"
                                >
                                    <i className="fa-solid fa-envelope text-xl" />
                                </a>

                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* ====================================================
                CONNECT
            ==================================================== */}

            <section className="px-6 py-20">

                <div className="mx-auto max-w-4xl text-center">

                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-500 dark:bg-blue-900/30">
                        <i className="fa-solid fa-paper-plane text-2xl" />
                    </div>

                    <h2 className="mb-5 text-4xl font-bold md:text-5xl">
                        Let's Connect
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                        Interested in {companyName}, collaboration or web
                        development? Connect with me through my social
                        platforms.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4">

                        <a
                            href={socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-gray-900 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-gray-700"
                        >
                            <i className="fa-brands fa-github mr-2" />
                            GitHub
                        </a>

                        <a
                            href={socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-blue-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500"
                        >
                            <i className="fa-brands fa-linkedin mr-2" />
                            LinkedIn
                        </a>

                        <a
                            href={socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-xl bg-pink-600 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-pink-500"
                        >
                            <i className="fa-brands fa-instagram mr-2" />
                            Instagram
                        </a>

                        <a
                            href={socialLinks.email}
                            className="rounded-xl bg-red-500 px-6 py-3 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-red-400"
                        >
                            <i className="fa-solid fa-envelope mr-2" />
                            Email Me
                        </a>

                    </div>
                </div>
            </section>

            {/* ====================================================
                FINAL CTA
            ==================================================== */}

            <section className="px-6 py-20">

                <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-blue-600 to-purple-600 p-10 text-center text-white shadow-2xl md:p-16">

                    <i className="fa-solid fa-clapperboard mb-6 text-5xl" />

                    <h2 className="mb-5 text-4xl font-extrabold md:text-5xl">
                        Ready to Explore?
                    </h2>

                    <p className="mx-auto mb-8 max-w-2xl text-lg text-blue-100">
                        Start discovering your next favorite movie or TV
                        series with {companyName}.
                    </p>

                    <Link
                        to="/"
                        className="inline-block rounded-xl bg-white px-8 py-4 font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100"
                    >
                        <i className="fa-solid fa-play mr-2" />
                        Start Exploring
                    </Link>

                </div>
            </section>

        </div>
    );
}