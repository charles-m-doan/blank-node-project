# Setting up a new Node project in Git Bash using npm, Jest, Babel, and Parcel.
*Note: **"npm"** is the built-in Node.js package manager. You could use **yarn** instead, but the process will be slightly different.*

### If you haven't already, install Node.js: "https://nodejs.org/en/"


## 1. Create a new repository on github, and name it whatever you like.
When creating this repository, Add a **".gitignore"** file using **"Node"** as the template.


## 2. Clone the respository to your local system

#### In Git Bash enter:

```
git clone <insert your repository url here>
```

## 3. Initialize your package.json file using npm

#### In Git Bash enter:

```
npm init
```

Run through the prompts and confirm the values you want.  Hit enter each time to keep the default if you're okay with it, or instead use "npm init -y" to accept all of the defaults, as you can always change them later in the package.json file if needed. Really, the only ones I'd bother to change are things like description and author.


## 4. Install Jest
#### In Git Bash enter:

```
npm install --save-dev jest
```

## 5. Install Babel (needed for using "imports" in tests)

#### In Git Bash enter: "npm install --save-dev babel-jest @babel/core @babel/preset-env"

Create a file in the project root *(next to package.json)* named **"babel.config.js"** and add the following lines:
```javascript
module.exports = {
	presets: [
		[
			"@babel/preset-env",
			{
				targets: {
					node: "current"
				}
			}
		]
	]
};
```


## 6. Install Parcel
#### In Git Bash enter:

```
npm install --save-dev parcel-bundler
```

## 7. Modify .gitignore and package.json

#### Open .gitignore
If you used github's built-in .gitignore file for Node projects you should already have many lines such as *"# Logs"* and *"# Runtime data".*

Add the following lines:

```
# Parcel related files
dist/
.cache/
```

#### Open package.json
If the *"scripts":* section isn't already present, add it and include the following key-value pairs as follows:

```
"scripts": {
	"test": "jest <test directory> --colors --coverage --watch",
	"dev": "parcel <your entry file>",
	"build": "parcel build <your entry file>"
  }
```

### *Notes on directory structure*

For the "test" script, you can leave *test directory* blank and jest will simply search all directories for test files starting from the root.  However, for efficiency and organization's sake it probably makes the most sense to have a **"/test"** directory in the root that contains your .test.js files.  Here is how I recommend configuring this section.

```
"scripts": {
	"test": "jest ./test --colors --coverage --watch",
	"dev": "parcel ./src/index.html",
	"build": "parcel build ./src/index.html"
	}
```

**"./test"** contains all test files
**"./src"** contains all production code and resources. For instance, it will have sub-folders such as "/js", "/css", "/prototypes", "/images", and of course the "index.html" file. (See attached image for an example of a fully initialized "hello-world" project.)

## 8 Notes on Running in Gitbash

#### To run your jest tests use:
```
npm run test
```

#### To run your website with parcel use:

```
npm run dev
```

#### To terminate a running Jest or Parcel process in gitbash press:

```
CTRL + C.
```

## 9 Additional Notes

The reason we use **"--save-dev"** is so that the packages are added to our package.json file as **"devDependencies".**

These packages aren't intended to be built in our production code.  Why not?  Jest is for testing production code, and parcel is for bundeling sever-side javascript (Node javascript) into client-side script. We don't want test code pushed with production code.  Simiarly, we don't want to include parcel code in the final production code because it's really just a developer tool used to circumvent the fact that browsers don't support server-side features like "import" statements. Server-side javascript features are dependent on Node.  Essentially we want to build our javascript using the nice organizational tools like imports that make object-oriented javascript programming much easier, but unfortunately browsers don't recognize these features. This is why we have two different scripts for parcel--"dev" and "build".  When we want to ship a parcel project we use "build" to bundle everything together into the "dist" folder using only client-side javascript that browsers understand. (I think. I'm still not 100% sure about how to actually deploy a parcel build.)

## Helpful References

[An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

[Jest](https://jestjs.io/docs/en/getting-started)

[Babel](https://babeljs.io/docs/en/babel-preset-env)

[Parcel](https://parceljs.org/getting_started.html)
