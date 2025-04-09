# My Next Form

A simple contact form built with Next.js and Docker.

## Features

- Modern React form with validation
- Responsive design
- Docker support for easy deployment
- Clean and intuitive UI

## Getting Started

### Prerequisites

- Node.js 18 or later
- Docker (optional)

### Local Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker Deployment

1. Build the Docker image:
```bash
docker build -t my-next-form .
```

2. Run the container:
```bash
docker run -p 3000:3000 my-next-form
```

## Project Structure

```
my-next-form/
├── Dockerfile          # Docker configuration
├── package.json        # Project dependencies and scripts
├── pages/             # Next.js pages
│   └── index.js       # Main page with form
├── public/            # Static assets
├── styles/            # CSS styles
│   └── globals.css    # Global styles
├── .gitignore         # Git ignore rules
└── README.md          # Project documentation
```

## License

MIT 