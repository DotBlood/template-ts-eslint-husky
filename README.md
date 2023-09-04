# Clear TypeScript and ESLint Template

This is a clean template for TypeScript (ts) with ESLint. All configuration files are neatly organized in the bin folder.

**Project Structure:**

```
📦 App/
├── 📂 bin/            #(Configuration folder)
│
├── 📂 build/          #(Build folder)
│
├── 📂 lib/            #(internal modules)
│
├── 📂 src/            #(Source code folder)
│
├── 📂 test/           #(Test folder)
```
[📂 bin/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/bin)
[📂 src/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/src)
[📂 lib/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/lib)
[📂 test/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/test)

This template provides a structured setup for your TypeScript project, with configuration files conveniently placed in the bin folder for easy access and management.

## Getting Started with the TypeScript, ESLint, and Husky Template (INSTALL)

To begin using this template, follow these 5 steps:

- Clone the template repository without the Git metadata by using the following git clone command:
``` bash
git clone https://github.com/DotBlood/template-ts-eslint-husky.git <ProjectName>
```

- Change your current directory to the location where the repository was cloned:
``` bash
cd <ProjectName>
```

Remove the .git folder:
```
rm -rf ./.git 
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
