# Clear TypeScript and ESLint Template

This is a clean template for TypeScript (ts) with ESLint. All configuration files are neatly organized in the bin folder.

**Project Structure:**

```
📦 App/
├── 📂 bin/            #(Configuration folder)
│   ├── 📄 eslint-config.json  #(ESLint configuration)
│   ├── 📄 tsconfig.json       #(TypeScript configuration)
│
├── 📂 build/          #(Build folder)
│
├── 📂 src/            #(Source code folder)
│
├── 📂 test/           #(Test folder)

```

This template provides a structured setup for your TypeScript project, with configuration files conveniently placed in the bin folder for easy access and management.

## Getting Started with the TypeScript, ESLint, and Husky Template (INSTALL)

To begin using this template, follow these 5 steps:

- Clone the template repository without the Git metadata by using the following git clone command:
``` bash
git clone https://github.com/DotBlood/template-ts-eslint-husky.git --no-checkout
```

- Change your current directory to the location where the repository was cloned:
``` bash
cd template-ts-eslint-husky
```

- Initialize a new Git repository if you haven't already:
``` bash
git init
```


- Install the project dependencies by running the following npm command:
``` bash
npm install
```

- Start the project by executing the following command:
``` bash
npm run start
```

Now, you can begin your development using this template, which is configured with TypeScript, ESLint, and Husky to ensure code quality and automatic checks during commits.