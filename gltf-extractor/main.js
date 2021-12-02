const fs = require('fs');
const path = require('path')
const glob = require('glob')
const obj2gltf = require("obj2gltf");

const assetPath = path.join(__dirname, './assets');
const pokemonDirectories = fs.readdirSync(assetPath);

/**
 * Get ideal object format
 */
const getOptimalObject = (files, order = [
    "XY",
    "P2",
    "",
    "BR"
]) => {
    const fileNames = files.map(file => file.split("/").at(-1));

    for (const key of order) {
        const file = fileNames.find(file => {
            const hasPrefix = file.includes("_");

            if(hasPrefix) {
                const prefix = file.split("_")[0];
                return prefix === key;
            }

            return key === "";
        });

        if(file) {
            return file;
        }
    }
}


for (const pokemonDirectory of pokemonDirectories) {
    glob(path.join(assetPath, pokemonDirectory, "*.obj"), {}, (_, files) => {
        const file = getOptimalObject(files);


        if(!file) {
            console.error("NO FILE FOUND FOR", pokemonDirectory);
            return;
        }

        const match = pokemonDirectory.match(/(.+)\ -\ (.*)$/)
        const filePath = path.join(assetPath, pokemonDirectory, file);

        obj2gltf(filePath).then(function (gltf) {
            const data = Buffer.from(JSON.stringify(gltf));
            fs.writeFileSync(`./public/models/${match[1]}-${match[2].toLowerCase()}.gltf`, data);
        });

        // const options = {
        //     binary: true,
        // };
        // obj2gltf(filePath, options).then(function (glb) {
        //     // fs.writeFileSync(`./public/models/${match[1]}-${match[2].toLowerCase()}.glb`, glb);
        // });
    });
}