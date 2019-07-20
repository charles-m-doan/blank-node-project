# Setting up a new Node project in Git Bash using npm, Jest, Babel, and Parcel.
*Note: **"npm"** is the built-in Node.js package manager. You could use **yarn** instead, but the process will be slightly different.*

### If you haven't already, install Node.js: "https://nodejs.org/en/"


## 1. Create a new repository on github, and name it whatever you like.
+ When creating this repository, Add a **".gitignore"** file using **"Node"** as the template.
+ Copy the URL the from the newly created repository page.

## 2. Clone the respository to your local system

#### In Git Bash enter:

```
git clone <insert your repository url here>
```

Ex:

```
git clone https://github.com/charles-m-doan/blank-node-project.git
```

## 3. Initialize your package.json file using npm

#### Enter the root directory of your newly cloned repository

```
cd <your-repository-name>
```

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

## 5. Install Babel *(needed for using "import" in tests)*

#### In Git Bash enter:

```
npm install --save-dev babel-jest @babel/core @babel/preset-env
```

Create a file in the project root *(same level as "package.json")* named **"babel.config.js"** and add the following lines:

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

For the "test" script, you can leave *test directory* blank and jest will simply search all directories for test files starting from the root.  However, for efficiency and organization's sake it probably makes the most sense to have a **"/test"** directory in the root that contains your .test.js files.  Here is how I configure mine.

```
"scripts": {
	"test": "jest ./test --colors --coverage --watch",
	"dev": "parcel ./src/index.html",
	"build": "parcel build ./src/index.html"
	}
```

**"./test"** contains all test files and **"./src"** contains all production code and resources. For instance, **/src** will have sub-folders such as "/js", "/css", "/prototypes", "/images", and of course the "index.html" file. (See next section for an example screenshot.)

## 8. Recommended Directory Structure and Files

+ Create a */src* folder in **root**
+ Add an *index.html* file to **/src**
+ Create a */js* folder in **/src**
+ Add an *index.js* file to **/js**
+ Create a */test* folder in **root**

### That's it! You should be good to go.
If you've followed the instructions to this point, a view of your project root and config files in VSCode should look similar to the following...



## 9. Notes on Running in Gitbash

When you run jest and parcel you'll notice that this creates ".cache", "coverage", and "dist" folders in your project root.  We don't want these pushed with our projects, which is why we list them in our .gitignore file.

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

## 10. Additional Notes

The reason we use **"--save-dev"** is so that the packages are added to our package.json file as **"devDependencies".**

#### Why?
My understanding is that these packages aren't intended to be built in our production code. Jest is for testing production code, and Parcel is for bundeling sever-side javascript (Node) into client-side script. We don't want test code pushed with production code, and we don't want server-side code pushed in the final build for client-side. Parcel is really just a developer tool used to circumvent the fact that browsers don't support server-side features like "import" statements.  Essentially we want to build our javascript using the nice Node.js tools that make object-oriented javascript much easier, but unfortunately browsers don't recognize these features. This is why we have two different scripts for parcel--"dev" and "build".  When we want to ship a parcel project we'll use "build" to bundle everything together into a format that browsers can understand.

## Helpful References

[An Absolute Beginner's Guide to Using npm](https://nodesource.com/blog/an-absolute-beginners-guide-to-using-npm/)

[Jest](https://jestjs.io/docs/en/getting-started)

[Babel](https://babeljs.io/docs/en/babel-preset-env)

[Parcel](https://parceljs.org/getting_started.html)
