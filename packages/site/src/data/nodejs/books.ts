import { Book } from "@framework/system/src/models/book"

export const bookTags = [
	"patterns",
	"systems",
	"database",
	"full stack",
	"backend",
	"performance",
	"projects",
	"servers",
] as const

export const books: Book<typeof bookTags[number]>[] = [
	{
		title: "Node.js: Novice to Ninja",
		authors: ["Craig Buckler"],
		description:
			'"Node.js: Novice to Ninja" is your hands-on guide to learning everything needed to build a professional web application using Node.js, the hugely popular open-source, cross-platform, back-end JavaScript runtime environment. You\'ll start off by getting familiar with the basics - installation and building your first apps - before moving onto more advanced concepts, including debugging, asynchronous programming, using Express.js, working with databases, deployment, and more',
		image: "https://learning.oreilly.com/library/cover/9781098141004/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781098141004/",
		tags: ["full stack"],
		yearOfPublication: 2022,
		numberOfPages: 268,
		level: "beginner",
	},
	{
		title: "Node.js Design Patterns - Third Edition",
		authors: ["Mario Casciaro", "Luciano Mammino"],
		description:
			"Learn proven patterns, techniques, and tricks to take full advantage of the Node.js platform. Master well-known design principles to create applications that are readable, extensible, and that can grow big",
		image: "https://learning.oreilly.com/library/cover/9781839214110/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781839214110/",
		tags: ["patterns"],
		yearOfPublication: 2020,
		numberOfPages: 802,
		level: "intermediate",
	},
	{
		title: "Distributed Systems with Node.js",
		authors: ["Thomas Hunter"],
		description:
			"Many companies, from startups to Fortune 500 companies alike, use Node.js to build performant backend services. And engineers love Node.js for its approachable API and familiar syntax. Backed by the world's largest package repository, Node's enterprise foothold is only expected to grow.",
		image: "https://learning.oreilly.com/library/cover/9781492077282/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781492077282/",
		tags: ["systems"],
		yearOfPublication: 2020,
		numberOfPages: 575,
		level: "advanced",
	},
	{
		title: "Node.js Web Development",
		authors: ["David Herron"],
		description:
			"Node.js is the leading choice of server-side web development platform, enabling developers to use the same tools and paradigms for both server-side and client-side software. This updated fifth edition of Node.js Web Development focuses on the new features of Node.js 14, Express 4.x, and ECMAScript, taking you through modern concepts, techniques, and best practices for using Node.js.",
		image: "https://learning.oreilly.com/library/cover/9781838987572/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781838987572/",
		tags: ["full stack"],
		yearOfPublication: 2020,
		numberOfPages: 853,
		level: "intermediate",
	},
	{
		title: "Get Programming with Node.js",
		authors: ["Jon Wexler"],
		description:
			"\"Get Programming with Node.js\" teaches you to build web servers using JavaScript and Node. In this engaging tutorial, you'll work through eight complete projects, from writing the code for your first web server to adding live chat to a web app. Your hands will stay on the keyboard as you explore the most important aspects of the Node development process, including security, database management, authenticating user accounts, and deploying to production. You'll especially appreciate the easy-to-follow discussions, illuminating diagrams, and carefully explained code!",
		image: "https://learning.oreilly.com/library/cover/9781617294747/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781617294747/",
		tags: ["servers"],
		yearOfPublication: 2019,
		numberOfPages: 759,
		level: "beginner",
	},
	{
		title: "Supercharging Node.js Applications with Sequelize",
		authors: ["Daniel Durante", "Sascha Depold"],
		description:
			"A hands-on implementation guide to application development in Node.js using the powerful Sequelize ORM.",
		image: "https://learning.oreilly.com/library/cover/9781801811552/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781801811552/",
		tags: ["database"],
		yearOfPublication: 2022,
		numberOfPages: 253,
		level: "intermediate",
	},
	{
		title: "Your First Week With Node.js, 2nd Edition",
		authors: [
			"James Hibbard",
			"Craig Buckler",
			"Mark Brown",
			"Nilson Jacques",
			"James Kolce",
			"Paul Orac",
			"M. David Green",
			"Florian Rappl",
		],
		description:
			"This book offers a selection of beginner-level tutorials to provide you with an introduction to Node and its related technologies, and get you under way writing your first Node applications.",
		image: "https://learning.oreilly.com/library/cover/9781098122805/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781098122805/",
		tags: ["projects"],
		yearOfPublication: 2020,
		numberOfPages: 170,
		level: "beginner",
	},
	{
		title:
			"REST API Development with Node.js : Manage and Understand the Full Capabilities of Successful REST Development",
		authors: ["Fernando Doglio"],
		description:
			"This completely updated second edition provides a brief background on REST and the tools it provides (well known and not so well known), then explains how there is more to REST than just JSON and URLs. You will learn about the maintained modules currently available in the npm community, including Express, Restify, Vatican, and Swagger. Finally you will code an example API from start to finish, using a subset of the tools covered.",
		image: "https://learning.oreilly.com/library/cover/9781484237151/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781484237151/",
		tags: ["backend", "servers"],
		yearOfPublication: 2018,
		numberOfPages: 335,
		level: "beginner",
	},
	{
		title: "Mastering Node.js - Second Edition",
		authors: ["Sandro Pasquali", "Kevin Faaborg"],
		description:
			"This book is targeted at JavaScript developers who want to take an in-depth look at the latest Node.js framework to create faster, scalable, real-time backend applications. Basic JavaScript programming knowledge—and also some previous Node.js development experience—are mandatory to get the best out of this book",
		image: "https://learning.oreilly.com/library/cover/9781785888960/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781785888960/",
		tags: ["backend"],
		yearOfPublication: 2017,
		numberOfPages: 621,
		level: "intermediate",
	},
	{
		title:
			"Real-Time Twilio and Flybase: Build Real-Time Web Apps Using Twilio and Flybase with Node.js",
		authors: ["Roger Stringer"],
		description:
			"This book offers you practical solutions for communicating effectively with users on the modern web.",
		image: "https://learning.oreilly.com/library/cover/9781484270745/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781484270745/",
		tags: ["full stack"],
		yearOfPublication: 2021,
		numberOfPages: 110,
		level: "beginner",
	},
	{
		title: "Node.js in Action, Second Edition",
		authors: ["Bradley Meck Alex Young and Mike Cantelon"],
		description:
			"\"Node.js in Action, Second Edition\" is a thoroughly revised book based on the best-selling first edition. It starts at square one and guides you through all the features, techniques, and concepts you'll need to build production-quality Node applications. You'll master key design concepts such as asynchronous programming, state management, and event-driven programming. And you'll learn to put together MVC servers using Express and Connect, design web APIs, and set up the perfect production environment to build, lint, and test.",
		image: "https://learning.oreilly.com/library/cover/9781617292576/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781617292576/",
		tags: ["full stack", "servers", "patterns"],
		yearOfPublication: 2017,
		numberOfPages: 634,
		level: "beginner",
	},
	{
		title: "9 Practical Node.js Projects",
		authors: [
			"James Hibbard",
			"James Kolce",
			"Lukas White",
			"Jeremy Wilken",
			"Simon Holmes",
			"Michael Wanyoike",
			"Paul Orac",
			"Patrick Catanzariti",
		],
		description:
			"This book offers a selection of nine different practical projects that you can follow along with from servers integrated with databases, file uploading with Dropzone.js, and a structured MVC application.",
		image: "https://learning.oreilly.com/library/cover/9781492071112/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781492071112/",
		tags: ["full stack", "projects"],
		yearOfPublication: 2018,
		numberOfPages: 170,
		level: "beginner",
	},
	{
		title: "Node.js: Tools & Skills, 2nd Edition",
		authors: [
			"James Hibbard",
			"Michael Wanyoike",
			"Nilson Jacques",
			"Jay Raj",
			"Manjunath M",
		],
		description:
			"In this book, we'll take a look at a selection of the related tools and skills that will make you a much more productive Node developer by learning to manage Node version with NVM, create an Express.js app with Express Generator, and integrate with databases like MySQL and MongoDB.",
		image: "https://learning.oreilly.com/library/cover/9781098122836/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781098122836/",
		tags: ["patterns", "full stack"],
		yearOfPublication: 2020,
		numberOfPages: 87,
		level: "beginner",
	},
	{
		title: "Advanced Node.js Development",
		authors: ["Andrew Mead"],
		description:
			'"Advanced Node.js Development" takes you through creating your own API, building a full real-time web app, securing your Node systems, and practical applications of the latest Async and Await technologies. It maps out everything in a comprehensive, easy-to-follow package designed to get you up and running quickly.',
		image: "https://learning.oreilly.com/library/cover/9781788393935/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781788393935/",
		tags: ["projects", "servers"],
		yearOfPublication: 2018,
		numberOfPages: 717,
		level: "beginner",
	},
	{
		title: "Learning Node.js Development",
		authors: ["Andrew Mead"],
		description:
			'"Learning Node.js Development" A comprehensive, easy-to-follow guide to creating complete Node apps and understanding how to build, deploy, and test your own apps. This book targets anyone looking to launch their own Node applications, switch careers, or freelance as a Node developer. You should have a basic understanding of JavaScript in order to follow this course.',
		image: "https://learning.oreilly.com/library/cover/9781788395540/250w/",
		href: "https://www.oreilly.com/api/v1/book/9781788395540/",
		tags: ["full stack", "projects", "servers"],
		yearOfPublication: 2018,
		numberOfPages: 687,
		level: "beginner",
	},
]
