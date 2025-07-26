# Merto

Merto is a fully responsive landing page built with modern web technologies.  
It showcases a clean and simple design, fetching product data from a mock API using `json-server`.

## 📸 Preview

Here is a quick look at the Merto landing page:

![Desktop View](./public/images/pec.png)
![Mobile View](./public/images/per.png)

## 🚀 Technologies Used

- **HTML5**
- **TypeScript**
- **Tailwind CSS**
- **json-server** (for mock product data)

## 📱 Features

- Fully responsive design
- Built with utility-first CSS (Tailwind)
- Dynamic product fetching from a fake API
- Modern and maintainable code with TypeScript

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AlirezaHassankhani/merto-landing
cd merto
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the json-server (for product data)

```bash
npx json-server --watch db.json --port 3000
```

### 4. Start the development server

```bash
npm run dev
```

## 📂 Project Structure
```
merto/
├── public/
├── src/
│   ├── database/
│   ├── ts/
│   └── css/
├── index.html
├── .prettierrc.json
├── package.json
└── tsconfig.json
```