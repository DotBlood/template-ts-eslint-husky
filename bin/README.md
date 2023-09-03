# Folder responsible for project configuration files

This folder is responsible for housing the configuration files necessary for your project. It includes subdirectories for different types of configurations, such as environment variables, TypeScript settings, and linter configurations, as well as a folder for project-related documentation.

**Structure:**

```
📁 bin/
│
├── 📁 configs/
│   │
│   ├── 📁 env/
│   │   ├──📄 .env.develop
│   │   ├──📄 .env.welcome
│   │   ├──📄 .env.prod
│   │
│   ├── 📁 json/
│       ├──📄 develop.json
│       ├──📄 welcome.json
│       ├──📄 prod.json
│
│
├── 📁 typescript/
│   │
│   ├── 📄 tsconfig.json
│       
├── 📁 linter/
│   │
│   ├── 📄 .eslintrc.json
│
├── 📁 materials/
│   │
│   ├── 📄 README.md
│
├── 📄 README.md
```

- [📁 configs/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/bin/configs) **This folder is responsible for the configuration files so that they do not lie in different places**

- [📁 typescript/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/bin/typescript) **This folder is responsible for the typescript configuration**

- [📁 linter/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/bin/linter)**This folder is responsible for the ESLint configuration**

- [📁 materials/](https://github.com/DotBlood/template-ts-eslint-husky/tree/master/bin/materials) **Folder responsible for project documentation**
