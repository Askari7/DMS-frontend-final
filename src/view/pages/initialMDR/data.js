
const fs = require('fs');

// Load JSON data from file
const filename = 'data.json';

fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file ${filename}: ${err}`);
        return;
    }

    try {
        // Parse JSON data
        const jsonData = JSON.parse(data);

        
        const projectCode = "2022";

        // Update the value of the "document" key
        jsonData.document = jsonData.document.replace("2014", projectCode);

        // Convert the updated data back to JSON format
        const updatedData = JSON.stringify(jsonData, null, 4);

        // Write the updated JSON data back to the file
        fs.writeFile(filename, updatedData, 'utf8', (err) => {
            if (err) {
                console.error(`Error writing file ${filename}: ${err}`);
            } else {
                console.log("Value of 'document' key updated successfully.");
            }
        });
    } catch (jsonError) {
        console.error(`Error parsing JSON: ${jsonError}`);
    }
});
