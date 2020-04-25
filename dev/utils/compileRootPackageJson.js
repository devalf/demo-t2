/**
 * Util for compiling root package.json file,
 * is used in development purposes to resolve dependencies in IDE
 * if all code base is opened as single project
 */

const {promises: fs} = require('fs');

async function getContent(filePath, encoding = 'utf-8') {
    if (!filePath) {
        throw new Error('filePath required');
    }

    try {
        return fs.readFile(filePath, {encoding});
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}

function getDependencies(obj) {
    return (({dependencies, devDependencies}) => ({dependencies, devDependencies}))(JSON.parse(obj));
}

(async () => {
    const base = await getContent('./package.base.json');
    const client = await getContent('./src/client/package.json');
    const server = await getContent('./src/server/package.json');

    const clientDependencies = getDependencies(client);
    const serverDependencies = getDependencies(server);

    const baseJSON = JSON.parse(base);

    const mergedJSON = {
        ...baseJSON,
        dependencies: {
            ...baseJSON.dependencies,
            ...clientDependencies.dependencies,
            ...serverDependencies.dependencies
        },
        devDependencies: {
            ...baseJSON.devDependencies,
            ...clientDependencies.devDependencies,
            ...serverDependencies.devDependencies
        }
    };

    try {
        await fs.writeFile('./package.json', JSON.stringify(mergedJSON, null, 2));
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
})();
